# Microbiology Study Hub: setup guide

This guide assumes no coding experience. Each step says **what to do** and **what it does**, so you know why you are doing it.

---

## What you are getting

A set of web pages that students open in a browser. No installation, no server, no accounts.

| File | What it is |
|---|---|
| `index.html` | The hub page itself. Students open this one first. |
| `bacteria1.html` to `bacteria4.html` | The four Bacteria companions (study pages for each lecture). |
| `viruses1.html` to `viruses5.html` | The five Viruses companions. |
| `mycoses.html` | The Mycoses companion |
| `banks/` | The questions and flashcards, plus a small "manifest" file per companion that describes its sections. |
| `shared/` | Code and styling shared by every companion. Includes `storage-core.js`, the one piece of code that saves and loads progress, used by the hub and every companion alike. |
| `browser-tests/` | An automatic checker for you, not for students (see "Checking it works in different browsers" below). |
| `.github/` | Instructions that tell GitHub to run that checker for you on every change. Students never see it. |

`banks/hub.js` is the hub's own question bank: 78 questions and 47 flashcards that each need **two or more Bacteria/Viruses lectures** at once.

---

## Step 1. Put the files in the right folders

The hub finds its data by **file name and folder position**. If a file is in the wrong place, the hub cannot see it. Keep everything together in one folder, like this:

```
companions/
  index.html                   <- the hub (students open this one)
  bacteria1.html
  bacteria2.html
  bacteria3.html
  bacteria4.html
  viruses1.html
  viruses2.html
  viruses3.html
  viruses4.html
  viruses5.html
  mycoses.html
  banks/
    hub.js
    bacteria1.js    bacteria1.manifest.js
    bacteria2.js    bacteria2.manifest.js
    bacteria3.js    bacteria3.manifest.js    bacteria3.images.js
    bacteria4.js    bacteria4.manifest.js
    viruses1.js     viruses1.manifest.js
    viruses2.js     viruses2.manifest.js
    viruses3.js     viruses3.manifest.js
    viruses4.js     viruses4.manifest.js
    viruses5.js     viruses5.manifest.js
    mycoses.js      mycoses.manifest.js
  shared/
    activities.js  engine.js  helpers.js  menu.js  storage-core.js  storage.js  welcome.js
    sections.css   shell.css  styles.css  welcome.css
  browser-tests/               <- optional: the automatic checker
  .github/workflows/
    browser-tests.yml          <- optional: runs the checker on GitHub
```

The last two folders are only for you. Students do not need them, and the site works without them. But if you keep your files on GitHub, keep `.github/` there, because that is where the automatic checking lives.

**What this does:** `index.html` reads each companion's saved progress from the browser, and reads the questions from the files in `banks/`. Because it looks for exact names, `bacteria2.manifest.js` must be spelled exactly that way. Each companion page's **Back to hub** link goes to `index.html`, so keep that file name.

**Why `index.html`?** Web hosts such as GitHub Pages open a file called `index.html` automatically when someone visits your site's address, so students do not need to type a file name.

If an `index.html` from another course is already in this folder, rename or move it first. Otherwise you will overwrite it.

## Step 2. Open the hub and check it

1. Open `index.html` in a browser (Chrome, Edge, or Firefox).
2. You should see ten rings (Bacteria I to IV, Viruses I to V, Mycoses) and the "Integration" card at the bottom.
3. Click **How this works** in the left menu, then scroll to **What is loaded right now**.

You should see a table like this:

| Bank | Questions | Structure map |
|---|---|---|
| Bacteria I: Introduction | 77 | manifest loaded |
| Bacteria II: Antibacterials | 91 | manifest loaded |
| Bacteria III: Cocci and rods | 111 | manifest loaded |
| Bacteria IV: Other pathogens | 87 | manifest loaded |
| Viruses I: Introduction | 98 | manifest loaded |
| Viruses II: Antivirals and Vaccines | 106 | manifest loaded |
| Viruses III: Herpes to Flu | 125 | manifest loaded |
| Viruses IV: Childhood & Enteric | 67 | manifest loaded |
| Viruses V: Hepatitis, Arboviruses, Rabies, Ebola, HIV | 76 | manifest loaded |
| Mycoses: Fungal Infections and Antifungals | 86 | manifest loaded |
| Integration & review | 38 | not needed |

(The question counts will change when you add or remove questions. What matters is that every row says "manifest loaded".)

**What this does:** This table is the hub's own health check. If a row says "missing" or a red note appears on the dashboard, a file is misnamed or in the wrong folder. Go back to Step 1.

## Step 3. Try a student's-eye test

1. Open `bacteria1.html`, answer a few checkpoints, then click **Back to hub** in the top-left of the page. You should land on the hub. Bacteria I's ring should now show progress (refresh the page if it does not).
2. In the hub, click **Build an exam**. The companions will show as **locked**. That is on purpose (see below).
3. The **Integration & review** row is always open. Start an exam with only that ticked to try the integration questions.

**What this does:** Steps 1 and 2 confirm the companions and the hub are sharing progress through the browser, and that the back link works. Step 3 confirms the exam builder works.

---

## On phones

On a narrow screen the left-hand menu folds away behind a **Menu** button, so the page content is visible straight away. Tap it to open the list; it closes by itself when you pick a section. On a computer the menu is always open, as before. This is done by `shared/menu.js`, which every page loads at the very end. If you ever copy a page to a new folder, copy that file too.

---

## How the hub behaves (good to know before students ask)

- **Progress lives in the student's own browser.** Nothing is uploaded. If a student switches computer or browser, use **Save / load progress** in the hub to move it (it downloads one file they can load on the other device). Private or incognito windows forget everything.
- **If the browser cannot save, students are told.** Sometimes a browser's storage is full or blocked partway through a visit. When that happens, a yellow bar stays at the top of the page saying the latest progress could not be saved, with a **Download backup** button. The button saves everything from this visit to a file, even though the browser would not keep it, and that file can be loaded back through **Save / load progress** in the hub. The bar disappears by itself once saving works again. (If a browser blocks saving from the very start, such as a private window, the page's top bar says so instead.)
- **Loading a backup file is all or nothing.** Before changing anything, the hub remembers what is on the device. If the browser refuses any part of the restore, everything already written is put back and the hub says "Restore failed" and that nothing changed. It only says "Progress restored" when every part really was saved. Parts of a file that cannot be read are skipped and named, and the rest of the device is left alone.
- **A companion unlocks for hub exams at exactly 100%.** This stops students from skipping a companion's activities and just taking a hub exam instead. Flashcards are never locked.
- **The Integration questions are never locked.** This follows your existing hub design. A student who has not started Bacteria IV could therefore see an integration question that mentions it. If you would rather lock those until the companions they draw on are finished, tell me and I will change it.
- **Adaptive review** builds a set from the concepts a student missed most (in hub exams and in the companions' own quizzes). A section a student simply has not reached yet is **not** counted as a weakness.
- **After a missed integration question**, the results page lists the companions that question drew on, so the student knows where to go back.

## Colors

To change the hub's colors later, open `index.html` in a text editor and search for `--accent:` (near the top). That block controls the whole hub.

## The Integration question bank

- 78 questions in 22 concept areas, each tagged with the companions it draws on (for example `bacteria2+bacteria4`). Levels: 9 concept, 19 application, 10 integration.
- Every question was checked against your Question Writing Guidelines: single best answer, 4 options, a rationale for each, no "all/none of the above," no NOT/EXCEPT stems, no absolute terms (always, never, only) or vague terms (usually, commonly), correct answers spread evenly across A to D.
- IDs run `HUB-001` to `HUB-078` and must **never be reused or renumbered**, even if you delete a question.
- Every fact comes from your lecture cards. Please read through the questions before students see them. You know the lectures better than I do.

### If you edit questions later

The `m` field of each hub question can now hold **more than one** companion, joined by `+`. Keep that format (for example `bacteria1+bacteria3`, no spaces). If you use BankBridge to edit `hub.js`, open a few questions after saving to confirm the `m` values survived.

## Checking it works in different browsers

The `browser-tests/` folder is an automatic checker. It opens the hub and every companion in Chrome, Firefox, Safari and phone-sized screens, clicks through them the way a student would, and reports anything that breaks. Students do not need it; you can leave it out of the folder you publish. Its own `README.md` explains how to run it by hand, step by step.

**It also runs by itself.** Every time someone opens or updates a pull request (a proposed change) on GitHub, and again after a change is merged, GitHub runs all five checks: `chromium` (Chrome and Edge), `firefox`, `webkit` (Safari), `mobile-chrome` and `mobile-safari`. This is set up in `.github/workflows/browser-tests.yml`. Each check appears as a line near the merge button on the pull request: a green tick means it passed, a red cross means something broke. Click **Details** on a red one to open the saved report with a screenshot of what went wrong. A full run takes about 5 to 6 minutes.

**A red check stops the merge.** The repository has a rule on the `main` branch that requires all five checks to pass before a change can be merged, and the rule has no exceptions, not even for you. **What this does:** it means a change that breaks something for students in any browser cannot go live by accident. **If a check is red for a reason that has nothing to do with the change** (for example a GitHub outage), wait and use **Re-run jobs** on the failed check. As a last resort you can pause the rule under **Settings → Rules**, but turn it back on afterward.

**When you add a new companion**, the checker finds it by itself, as long as its page and its `banks/<name>.manifest.js` file are named like the others. It will expect the new page to load without errors and its activities to be solvable by the checker, so a companion with an unusual custom activity may need a small test helper added (this happened with Mycoses). A red check on a new companion is the checker doing its job.

## If something goes wrong

| What you see | Most likely cause | Fix |
|---|---|---|
| Blank page | Wrong browser setting or corrupted download | Try another browser; re-download |
| Red note "These files did not load" | A file in `banks/` is misnamed or missing | Compare names to the list in Step 1 |
| A ring stays at 0% after doing work | Different browser or private window | Use the same normal browser each time |
| "Locked" on a companion you finished | It is below 100%, often the final exam or one activity | Open the companion and look for an unfinished section |
| A yellow bar says progress "could not be saved" | The browser's storage is full or blocked | Click **Download backup** to keep this visit's work, free up space (or use a normal, non-private window), then keep working; the bar goes away once saving works |
| "Restore failed" when loading a backup | The browser would not save part of the file, usually because storage is full | Nothing was changed. Free up space, or use a normal window, and load the file again |
| A pull request shows a red check | Something broke in one browser | Click **Details** on the red check to see which test failed and a screenshot |
