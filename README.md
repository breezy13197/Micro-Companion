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
| 'mycoses.html' | The Mycoses companion |
| `banks/` | The questions and flashcards, plus a small "manifest" file per companion that describes its sections. |
| `shared/` | Code and styling shared by every companion. |

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
    activities.js  engine.js  helpers.js  menu.js  storage.js  welcome.js
    sections.css   shell.css  styles.css  welcome.css
```

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
2. In the hub, click **Build an exam**. The six companions will show as **locked**. That is on purpose (see below).
3. The **Integration & review** row is always open. Start an exam with only that ticked to try the integration questions.

**What this does:** Steps 1 and 2 confirm the companions and the hub are sharing progress through the browser, and that the back link works. Step 3 confirms the exam builder works.

---

## On phones

On a narrow screen the left-hand menu folds away behind a **Menu** button, so the page content is visible straight away. Tap it to open the list; it closes by itself when you pick a section. On a computer the menu is always open, as before. This is done by `shared/menu.js`, which every page loads at the very end. If you ever copy a page to a new folder, copy that file too.

---

## How the hub behaves (good to know before students ask)

- **Progress lives in the student's own browser.** Nothing is uploaded. If a student switches computer or browser, use **Save / load progress** in the hub to move it (it downloads one file they can load on the other device). Private or incognito windows forget everything.
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

The `browser-tests/` folder is an automatic checker that opens the hub and every companion in Chrome, Firefox, Safari and phone-sized screens, and reports anything that breaks. Students do not need it; you can leave it out of the folder you publish. Its own `README.md` explains how to run it, step by step.

## If something goes wrong

| What you see | Most likely cause | Fix |
|---|---|---|
| Blank page | Wrong browser setting or corrupted download | Try another browser; re-download |
| Red note "These files did not load" | A file in `banks/` is misnamed or missing | Compare names to the list in Step 1 |
| A ring stays at 0% after doing work | Different browser or private window | Use the same normal browser each time |
| "Locked" on a companion you finished | It is below 100%, often the final exam or one activity | Open the companion and look for an unfinished section |
