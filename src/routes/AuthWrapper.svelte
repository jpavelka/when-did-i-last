<script lang="ts">
  import { auth, db, signInFunc } from "$lib/firebase";
  import { doc, onSnapshot } from "firebase/firestore";
  import { tasks } from "$lib/stores";
  import { fade } from "svelte/transition";
  import type { Task } from "$lib/types";

  let loggedIn = false;
  auth.onAuthStateChanged(async (fireUser) => {
    if (fireUser) {
      const token = await fireUser.getIdTokenResult();
      loggedIn = true;
      const tasksRef = doc(db, "tasks", fireUser.uid);

      onSnapshot(tasksRef, (doc) => {
        const userTasks = Object.entries(doc.data().tasks).map(
          (x: [string, Task]) => {
            x[1].id = x[0];
            return x[1];
          }
        );
        tasks.update(() => userTasks);
      });
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
  <div class="page">
    <p class="loading">Loading...</p>
  </div>
{:then}
  <div class="page">
    <header class="site-header">
      <h1>When Did I Last...</h1>
    </header>
    {#if loggedIn}
      <div
        class="content-wrapper"
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
        <div class="login-card">
          <form on:submit|preventDefault={submitFunc}>
            <h2>Please log in</h2>
            <div class="form-grid">
              <label for="email">Email</label>
              <input id="email" type="email" />
              <label for="password">Password</label>
              <input id="password" type="password" />
            </div>
            {#if error}
              <div transition:fade class="error-msg">{error.message}</div>
            {/if}
            <button type="submit" class="primary">Sign In</button>
          </form>
        </div>
      </div>
    {/if}
  </div>
{:catch}
  <div class="page">
    <p>Error encountered — please try again.</p>
  </div>
{/await}

<style>
  .page {
    max-width: 640px;
    margin: 0 auto;
    padding: 1.5rem 1rem 1rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .site-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1.5px solid var(--c-border);
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    color: var(--c-text);
  }

  .login-card {
    background: var(--c-surface);
    border: 1.5px solid var(--c-border);
    border-radius: var(--radius);
    padding: 2rem;
    box-shadow: var(--shadow);
    max-width: 340px;
  }

  .form-grid {
    display: grid;
    gap: 0.35rem;
    margin-bottom: 1.25rem;
  }

  label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--c-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 0.4rem;
  }

  input {
    width: 100%;
  }

  .error-msg {
    color: var(--c-danger);
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }

  .loading {
    color: var(--c-muted);
    font-style: italic;
  }
</style>
