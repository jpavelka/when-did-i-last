<script lang="ts">
  import { auth, db, signInFunc } from "$lib/firebase";
  import { doc, getDoc } from "firebase/firestore";
  import { tasks } from "$lib/stores";
  import { fade } from "svelte/transition";
  import type { Task } from "$lib/types";

  let loggedIn = false;
  auth.onAuthStateChanged(async (fireUser) => {
    if (fireUser) {
      const token = await fireUser.getIdTokenResult();
      loggedIn = true;
      const tasksRef = doc(db, "tasks", fireUser.uid);
      getDoc(tasksRef)
        .then((docSnap) => {
          const userTasks = Object.entries(docSnap.data().tasks).map(
            (x: [string, Task]) => {
              x[1].id = x[0];
              return x[1];
            }
          );
          tasks.update(() => userTasks);
        })
        .catch((e) => console.log("error", e));
    } else {
      loggedIn = false;
      tasks.update(() => []);
    }
  });
  let error = null;
  const submitFunc = (event) => {
    const { email, password } = event.target.elements;
    signInFunc(email.value, password.value);
  };
  const getCurrentUser = async () => {
    return auth.currentUser;
  };
  const initialUser = getCurrentUser();
  const transitionTiming = 200;
</script>

{#await initialUser}
  Loading...
{:then}
  <h1>When Did I Last...</h1>
  {#if loggedIn}
    <div
      in:fade={{ duration: transitionTiming, delay: transitionTiming }}
      out:fade={{ duration: transitionTiming }}
    >
      <slot />
    </div>
  {:else}
    <div
      in:fade={{ duration: transitionTiming, delay: transitionTiming }}
      out:fade={{ duration: transitionTiming }}
    >
      <form on:submit|preventDefault={submitFunc}>
        <h2>Hello! Please log in.</h2>
        <div class='formClass'>
          <label for="email">Email:</label>
          <input id="email" type="email" />
          <label for="password">Password:</label>
          <input id="password" type="password" />
        </div>
        {#if error}
          <div transition:fade>{error.message}</div>
        {/if}
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  {/if}
{:catch}
  Error encountered - please try again.
{/await}

<style>
    .formClass {
        display: grid;
        max-width: 20em;
    }
    input {
        padding: 4pt;
        margin: 2pt 0;
    }
</style>
