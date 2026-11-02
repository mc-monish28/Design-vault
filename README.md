# Sensei Design Vault

A local-first design governance app for module versions, production releases, changes, handoffs, and reference assets.

## Run locally

1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Run `npm start` and open `http://localhost:3000`.

SQLite data is stored in `sensei-vault.sqlite`; uploaded attachments live in `uploads/`. Back up both before moving the installation.

## Replit deployment

Import this folder as a Replit Node.js app. Replit will run `npm install`; set the run command to `npm start`. Keep the app's writable filesystem enabled to persist the SQLite database and uploads. For durable production data across deployments, attach persistent storage and place the database and uploads there before launch.

The first launch seeds illustrative sample data. JSON backup and restore are available in Settings. CSV export is available for tabular records.

## UI icons

The interface uses locally bundled icons from Hugeicons' `@hugeicons/core-free-icons` package. If you change the icon mapping in `icon-source.js`, regenerate the browser bundle with `npm run build:icons`.
