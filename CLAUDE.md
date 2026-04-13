# When Did I Last...

A SvelteKit web app for tracking recurring tasks — when you last did something and when it's next scheduled. Deployed to GitHub Pages via CI.

## Tech Stack

- **Framework**: SvelteKit (static adapter, deployed to GitHub Pages)
- **Language**: TypeScript + Svelte
- **Backend**: Firebase (Firestore for data, Firebase Auth for login)
- **Build tool**: Vite

## Development

```bash
npm run dev      # start dev server
npm run build    # build for production (outputs to build/)
npm run preview  # preview production build
```

## Architecture

- `src/routes/AuthWrapper.svelte` — top-level auth gate; subscribes to Firestore with `onSnapshot` for real-time task updates
- `src/routes/InlineTask.svelte` — renders a single task card (last done, next scheduled, Edit/Complete/Schedule buttons)
- `src/routes/CompleteTask.svelte` — modal for logging a completion date; optionally removes the earliest scheduled date
- `src/routes/ScheduleTask.svelte` — modal for adding a scheduled date
- `src/lib/db.ts` — Firestore read/write helpers (`editTask`, `deleteTask`)
- `src/lib/stores.ts` — Svelte writable stores for task list and modal visibility state
- `src/lib/types.ts` — `Task` type: `{ id?, name, history: string[], scheduled: string[] }`
- `src/lib/firebase.ts` — Firebase app initialization, auth helpers

## Data Model

Tasks are stored in Firestore at `tasks/{userId}` as a map:

```
{
  tasks: {
    [taskId]: {
      name: string,
      history: string[],    // completion dates, format YYYYMMDD, sorted ascending
      scheduled: string[]   // scheduled dates, format YYYYMMDD, sorted ascending
    }
  }
}
```

Dates are stored as 8-character strings (`YYYYMMDD`). `dateFormat` in `src/lib/dateFormat.ts` converts these for display.

## Deployment

Pushes to `master` trigger the GitHub Actions workflow (`.github/workflows/github-pages-deploy.yml`), which builds and deploys to the `gh-pages` branch.
