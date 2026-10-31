# OMOTEC Codeavour Tracker — GitHub Pages only

This package contains the existing Track 1, Track 2 and Track 3 tracker as a static HTML app. **No Firebase or backend is required.**

## Deploy
1. Create a GitHub repository (e.g. `omotec-codeavour-tracker`).
2. Upload `index.html`, `README.md` and `.nojekyll` to the repository root (not the ZIP).
3. In repository **Settings > Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
4. Open `https://YOUR-USERNAME.github.io/omotec-codeavour-tracker/`.

## Login
For a fresh browser, the bundled demo account is **Super Admin** and the initial password is **demo1234**. Other demonstration users are included. This is a browser-side demonstration login, **not secure authentication**. If this browser already has app data, its saved accounts/passwords are used instead.

## Data and safety
- Records are saved in each browser's `localStorage` (`omo2`); different browsers/devices **do not sync**.
- Clearing site data or using another device can remove access to saved records. Export backups regularly using the app's data tools.
- GitHub Pages and client-side passwords **cannot protect private data**. Anyone with access to the browser can inspect/alter its stored data.
- Do **not** use real student personal information or confidential operational records in this version.
- Do not upload Firebase keys, service-account files, or passwords to GitHub.
- This app retains a legacy optional Claude database sync hook, but it is inactive on ordinary GitHub Pages; Firebase is not included.
