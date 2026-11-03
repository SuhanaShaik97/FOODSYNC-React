# FOODSYNC React + Vite

This project wraps the original working FOODSYNC customer, manager, delivery and admin workflows in a React + Vite application. The original frontend has been retained under `public/legacy` so its existing login, menu, cart, order and role dashboards continue to work while React provides the app shell and navigation.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Demo logins

- Customer: `customer@demo.com` / `demo123`
- Manager: `manager@demo.com` / `demo123`
- Delivery: `delivery@demo.com` / `demo123`
- Admin: `admin@foodsync.com` / `admin123`

Other manager and delivery demo accounts are listed in `public/legacy/js/data.js`.

## Deploy on Vercel

1. Push this project folder to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect Vite. Confirm:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
5. Select **Deploy**.

`vercel.json` includes a fallback rewrite for the React entry point. The original role pages and assets are served from `/legacy/`.

## Important note

This is a React-hosted migration that preserves the original HTML/JavaScript functionality. The customer, manager, delivery and admin workflows still run from the original frontend files inside `public/legacy`; they have not yet been rewritten as individual React components. The original app uses browser `localStorage`, so demo data is stored in the current browser and is not shared across devices or users. For production use, add a backend/database and secure authentication.
