# Microbiology Study Hub: setup guide

This guide assumes no coding experience. Each step says **what to do** and **what it does**, so you know why you are doing it.

---

## What you are getting

Two files:

| File | What it is |
|---|---|
| `hub.html` | The hub page itself. Students open this one. |
| `banks/hub.js` | The hub's own question bank: 38 questions and 25 flashcards that each need **two or more lectures** at once. |

Everything else the hub needs (the four Bacteria question banks and their "manifest" files) you already have.

---

## Step 1. Put the files in the right folders

The hub finds its data by **file name and folder position**. If a file is in the wrong place, the hub cannot see it.

Your `companions` folder should look like this:

```
companions/
  hub.html                     <- NEW (from this package)
  bacteria1.html
  bacteria2.html
  bacteria3.html
  bacteria4.html
  banks/
    hub.js                     <- NEW (from this package)
    bacteria1.js
    bacteria1.manifest.js
    bacteria2.js
    bacteria2.manifest.js
    bacteria3.js
    bacteria3.manifest.js
    bacteria4.js
    bacteria4.manifest.js
  shared/
    (the shared files your companions already use)
```

**What this does:** `hub.html` reads each companion's saved progress from the browser, and reads the questions from the files in `banks/`. Because it looks for exact names, `bacteria2.manifest.js` must be spelled exactly that way.

If a **`hub.html` from the biochemistry course** is already in this folder, rename or move it first. Otherwise you will overwrite it.

## Step 2. Open the hub and check it

1. Open `hub.html` in a browser (Chrome, Edge, or Firefox).
2. You should see the four rings (Bacteria I to IV) and the "Integration" card at the bottom.
3. Click **How this works** in the left menu, then scroll to **What is loaded right now**.

You should see this table:

| Bank | Questions | Structure map |
|---|---|---|
| Bacteria I: Introduction | 77 | manifest loaded |
| Bacteria II: Antibacterials | 91 | manifest loaded |
| Bacteria III: Cocci and rods | 62 | manifest loaded |
| Bacteria IV: Other pathogens | 40 | manifest loaded |
| Integration & review | 38 | not needed |

**What this does:** This table is the hub's own health check. If a row says "missing" or a red note appears on the dashboard, a file is misnamed or in the wrong folder. Go back to Step 1.

## Step 3. Try a student's-eye test

1. Open `bacteria1.html`, answer a few checkpoints, then go back to `hub.html` and refresh. Bacteria I's ring should now show progress.
2. In the hub, click **Build an exam**. Bacteria I to IV will show as **locked**. That is on purpose (see below).
3. The **Integration & review** row is always open. Start an exam with only that ticked to try the new questions.

**What this does:** Steps 1 and 2 confirm the hub is reading real progress from the companions. Step 3 confirms the exam builder works.

---

## How the hub behaves (good to know before students ask)

- **Progress lives in the student's own browser.** Nothing is uploaded. If a student switches computer or browser, use **Save / load progress** in the hub to move it (it downloads one file they can load on the other device). Private or incognito windows forget everything.
- **A companion unlocks for hub exams at exactly 100%.** This stops students from skipping a companion's activities and just taking a hub exam instead. Flashcards are never locked.
- **The Integration questions are never locked.** This follows your existing hub design. A student who has not started Bacteria IV could therefore see an integration question that mentions it. If you would rather lock those until the companions they draw on are finished, tell me and I will change it.
- **Adaptive review** builds a set from the concepts a student missed most (in hub exams and in the companions' own quizzes). A section a student simply has not reached yet is **not** counted as a weakness.
- **After a missed integration question**, the results page lists the companions that question drew on, so the student knows where to go back.

## Colors

The hub uses the **Gram stain** scheme you chose: aubergine `#3B1758` and safranin pink `#E8437F`. The four companions keep their own colors inside their cards, taken from your Claude Design mockup.

To change the hub's colors later, open `hub.html` in a text editor and search for `--accent:` (near the top). That block controls the whole hub.

## The Integration question bank

- 38 questions in 12 concept areas, each tagged with the companions it draws on (for example `bacteria2+bacteria4`). Levels: 9 concept, 19 application, 10 integration.
- Every question was checked against your Question Writing Guidelines: single best answer, 4 options, a rationale for each, no "all/none of the above," no NOT/EXCEPT stems, no absolute terms (always, never, only) or vague terms (usually, commonly), correct answers spread evenly across A to D.
- IDs run `HUB-001` to `HUB-038` and must **never be reused or renumbered**, even if you delete a question.
- Every fact comes from your lecture cards. Please read through the questions before students see them. You know the lectures better than I do.

### If you edit questions later

The `m` field of each hub question can now hold **more than one** companion, joined by `+`. Keep that format (for example `bacteria1+bacteria3`, no spaces). If you use BankBridge to edit `hub.js`, open a few questions after saving to confirm the `m` values survived.

## If something goes wrong

| What you see | Most likely cause | Fix |
|---|---|---|
| Blank page | Wrong browser setting or corrupted download | Try another browser; re-download |
| Red note "These files did not load" | A file in `banks/` is misnamed or missing | Compare names to the list in Step 1 |
| A ring stays at 0% after doing work | Different browser or private window | Use the same normal browser each time |
| "Locked" on a companion you finished | It is below 100%, often the final exam or one activity | Open the companion and look for an unfinished section |
