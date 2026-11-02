# OMOTEC Codeavour Tracker – Google Drive version

Everyone uses the same data on any device. Data is stored in one file in your Google Drive.

## 1. Create the backend (about 10 minutes)
1. Open https://script.google.com → **New project**.
2. Delete the sample code, paste all of `apps-script/Code.gs`.
3. Change `ACCESS_CODE` to your own secret code.
4. Click **Deploy → New deployment → type: Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Authorize when asked (Google shows an "unverified app" notice for your own script – choose Advanced → continue).
6. Copy the **Web app URL** (ends with `/exec`).

## 2. Configure the site
Open `config.js` and paste the URL into `url`.

## 3. Publish on GitHub Pages
1. Create a GitHub repository and upload all files (keep `.github/workflows/pages.yml`).
2. Settings → Pages → Source: **GitHub Actions**. Push to `main`.
3. Your site: `https://<username>.github.io/<repository>/`.

## 4. First use
1. Open the site, enter the **access code**. The first person creates the empty tracker.
2. Sign in as **Super Admin** with password `demo1234` – you must change it immediately.
3. Other users sign in with their name and `demo1234`, then must set their own password.
4. Share the site link and the access code with staff.

## Security (light, as requested)
- Anyone who has the site link **and** the access code can read and write all data, including the (salted, hashed) passwords.
- Roles are enforced in the browser only.
- To change the access code: edit it in the script, then Deploy → Manage deployments → Edit → New version. Everyone must enter the new code.
- Keep backups: Admin & Data → Backup data. Google Drive also keeps file version history.
- Edits by different people at the same time are merged record by record; if two people change the exact same record at once, the later save wins. Other devices refresh every 10 seconds.
- Google limits how many script runs are allowed per day on free accounts; this is fine for a team-sized group.
