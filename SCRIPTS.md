Project scripts — quick guide (for coders and non-coders)
=========================================================

Why these scripts?
------------------
We keep a small, clear set of npm scripts so contributors (technical and non-technical) can run, build, test, and verify the site.

Start / build / serve
---------------------
- `npm run dev` — starts the local development server (hot reload). Use this when actively editing the site.
- `npm run build` — produces an optimized `build/` directory for production.
- `npm start` — alias for development server (same as `dev`).

Unit and component tests
------------------------
- `npm test` — runs unit tests once (uses Vitest + Testing Library). Good for running quick checks in CI.
- `npm run test:watch` — watches tests while you work.
- `npm run test:coverage` — collects coverage reports.

End-to-end (e2e) tests with Cypress
-----------------------------------
Why Cypress?
- Cypress simulates real user interactions in a real browser. It's excellent for: navigation checks, form flows (like the Contact form), and visual smoke tests.
- It is easy for non-developers to use via `cypress open` (GUI) and for CI via `cypress run`.

Scripts
- `npm run e2e` — run Cypress headless (CI-friendly). Must have the site running on `http://localhost:5173` (the project's `cypress.config.ts` sets this baseUrl).
- `npm run e2e:open` — open Cypress interactive GUI (good for exploratory testing and non-dev reviewers).

How to run e2e locally (recommended)
1. Start the dev server in one terminal:

   ```bash
   npm run dev
   ```

2. In another terminal, run Cypress headless or open GUI:

   ```bash
   npm run e2e         # headless
   npm run e2e:open    # interactive GUI
   ```

Notes for CI
- In CI, run `npm run build` then serve `build/` via a static server (or start `npm run dev` with `NODE_ENV=production` if supported) before `npm run e2e`.
- Example (Linux/CI):

  ```bash
  npm run build
  npx http-server build -p 5173 &
  npm run e2e
  ```

Troubleshooting
- If Cypress reports the server is not running, ensure the dev server is listening on `http://localhost:5173`.
- For flaky tests, use `cy.wait()` sparingly and prefer checking for elements with `cy.get()` + `should('exist')`.

When to add more tests
- Add unit tests for small components and utility functions.
- Add e2e tests for critical user journeys (contact form, case study filters, project detail view).

Contact
- If you're non-technical and want to run these checks, ask a developer to run `npm run e2e:open` and guide you through the interactive Cypress UI.
