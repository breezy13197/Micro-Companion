# Browser testing for the Study Hub

This folder holds an automatic checker. It opens the hub and all eight companions in several different browsers, clicks through them the way a student would, and tells you if anything breaks.

**Students never need this folder.** It is only for you (or whoever looks after the site). You can delete it from the version you publish and nothing else will change.

---

## Automatic checking on GitHub

The file `.github/workflows/browser-tests.yml` tells GitHub to run these tests by itself every time someone opens or updates a pull request, and again after each merge into `main`. You do not need to do anything for this to work.

**What you will see:** on each pull request, a list of checks appears near the merge button, one per browser (`chromium`, `firefox`, `webkit`, `mobile-chrome`, `mobile-safari`). A green tick means that browser passed. A red cross means something broke; click **Details**, then open the saved report at the bottom of the run to see which test failed and a screenshot.

**Which ones matter:** only `chromium` (Chrome and Edge) blocks a merge. The other four run too, so you can see problems, but they are allowed to fail for now. They have not been run before, so a red cross there may be an old problem rather than something the pull request broke. Once they are all green, delete the line `continue-on-error: ...` in the workflow file to make them count too.

**Why it is needed:** the tests only protect students if they actually get run. Doing it automatically means a change cannot be merged by accident without being checked first.

**One optional setting (on GitHub, not in this folder):** to make a red `chromium` check actually *stop* a merge, go to the repository's **Settings → Branches**, add a rule for `main`, and tick **Require status checks to pass**, then choose `chromium`. Without this, a red check is a warning but GitHub still lets you click Merge.

---

## What "browser compatibility testing" means here

Chrome, Firefox and Safari each read the same web page slightly differently. A page can look perfect in one and be broken in another. The checker uses a free tool called **Playwright** to open the pages in all three engines and compare the results.

| Test name in the list | Browser it stands for |
|---|---|
| `chromium` | Google Chrome and Microsoft Edge |
| `firefox` | Mozilla Firefox |
| `webkit` | Apple Safari (on Mac, iPhone and iPad) |
| `mobile-chrome` | Chrome on an Android phone (Pixel 7 screen) |
| `mobile-safari` | Safari on an iPhone 14 |

**Honest limits:** these are the real browser *engines*, but not the exact Chrome/Safari apps students have. Phones are imitated by a small screen and touch settings, not tested on a physical phone. If something matters a lot, still glance at it on a real phone.

---

## One-time setup (about 10 minutes)

### Step 1. Install Node.js

Go to <https://nodejs.org>, download the button marked **LTS**, and install it like any other program.
**What this does:** Playwright is written in a language called JavaScript. Node.js is the free program that lets your computer run it.

### Step 2. Open a terminal inside this folder

- **Windows:** open the `browser-tests` folder in File Explorer, click the address bar, type `cmd`, press Enter.
- **Mac:** right-click the `browser-tests` folder and choose **New Terminal at Folder**.

**What this does:** A terminal is a window where you type instructions. Opening it inside this folder means the instructions run in the right place.

### Step 3. Download the tools

Type this and press Enter:

```
npm install
```

**What this does:** Downloads Playwright into a new `node_modules` folder here. That folder is large and can be ignored; it is not part of your site.

Then type:

```
npm run install-browsers
```

**What this does:** Downloads private copies of Chrome, Firefox and Safari's engine (about 500 MB). They are only used for testing and will not replace the browsers you normally use.

---

## Running the tests

Type any one of these and press Enter. The first is the most thorough.

| Type this | What it does |
|---|---|
| `npm test` | Runs everything in all five browsers (roughly 10 to 20 minutes) |
| `npm run test:chromium` | Chrome/Edge only (fast, about 3 minutes) |
| `npm run test:firefox` | Firefox only |
| `npm run test:webkit` | Safari only |
| `npm run test:mobile` | The two phone setups only |

You do not need to start a web server yourself. The checker starts a tiny one, runs the tests, and stops it.

### Sharing the results (small file)

Every run also saves a short text file, `failures-summary.txt`, in this folder. It lists only what failed, in which browser, and why, and is usually a few kilobytes. Send that file (or paste its contents) when asking for help. Please do not zip the `playwright-report` or `test-results` folders: they hold screenshots and recordings and can be tens of megabytes.

### Reading the results

Each test prints a line with a tick (passed) or a cross (failed). At the end you get totals such as `223 passed, 19 failed`.

For the full picture type:

```
npm run report
```

**What this does:** Opens a web page listing every test. Clicking a failed one shows a **screenshot of the page at the moment it failed** and a step-by-step recording, which is usually enough to see what went wrong.

---

## What is checked

- **Every page loads with no errors.** No missing files, no red error messages hidden in the browser.
- **Every section of every companion opens**, and only one shows at a time.
- **Checkpoint questions:** a right answer locks, and is still remembered after the page is reloaded.
- **Flashcards actually flip** to show the answer, by click and by keyboard. (Safari has a history of getting this wrong.)
- **Hands-on activities** can all be completed, and their results survive a reload.
- **Quizzes** show up and refuse to be submitted empty.
- **Saved progress:** kept separately per companion, shared with the hub, and cleared by "Clear my saved progress".
- **Private-browsing situation:** if the browser refuses to save anything, the pages still work and show the warning message.
- **Opening the file straight from a folder** (the address starts with `file://`) as well as from a website.
- **Hub:** every menu item opens, the "What is loaded right now" table shows everything loaded, and **Download backup file / Load a backup** works round trip.
- **Phone and tablet screens (360, 430, 768 pixels wide):** the menu folds behind the Menu button and works, buttons are big enough to tap, and no page needs sideways scrolling.

Not covered: whether the *content* (questions, answers, facts) is correct, and a full run through every question to reach 100%.

---

## What the first full run found (and what was done)

A run in all five browsers (549 passed, 60 failed) showed:

1. **Pages too wide for a phone** (every browser). Sorting/matching rows in the companions and the tables on the hub's "How this works" page stretched past a 360 px screen. **Fixed** in `shared/styles.css` and `index.html`; the hub's backup page also had a text box and file chooser a few pixels too wide, **fixed** too.
2. **Safari flashcard failures.** The test was asking Safari a question it answers differently from Chrome (what is on top of a card that has not been flipped), so this was a weakness in the test, not proof the cards were broken. The test now checks that both card faces hide their reverse side, that the picture really changes on flipping, and that the card turns half way round. A `-webkit-` version of the hiding rule was also added for older Safari versions.
3. **Timeouts** in Firefox and Safari. The "every section opens" test made dozens of separate requests to the page, which is slow when many browsers run at once. It now does the work in one step, and the time limit per test is 60 seconds.

After these changes everything passes in Chrome and the Android phone setup. **Please run `npm test` again** to confirm Firefox and Safari.

Two small differences between the written checklist (`companion-architecture.md`, section 12) and the real pages were also noticed, in case you want to update the checklist:

1. The checklist says `state.attempts` should be empty on a first visit. In fact each quiz prepares a blank, unanswered attempt as soon as the page opens, so the test checks that nothing has been answered.
2. Several hands-on labs save the view they open with (stored under names ending `_v`) as soon as the page loads, so `state.activities` is not literally empty. The test ignores those entries and checks that nothing is marked **done**.

---

## Adding a new companion

You do not need to change the tests. They look in the main folder for every file named like `bacteria5.html` or `viruses6.html` and test each one automatically, and the hub checks adjust their counts to match. Just add the new files (the page, plus its two files in `banks/`) and run `npm test`.

Only one case needs a hand-edit: if you add a different *kind* of companion whose file name does not start with `bacteria` or `viruses` (for example `fungi1.html`), open `tests/helpers.js` and add the new prefix to the line that says `(?:bacteria|viruses)`, e.g. `(?:bacteria|viruses|fungi)`.

## If something goes wrong

| What you see | What it means | What to do |
|---|---|---|
| `npm is not recognized` / `command not found` | Node.js is not installed, or the terminal was open during installation | Close the terminal, reopen it inside this folder, try again |
| `Executable doesn't exist` | The test browsers are not downloaded | Run `npm run install-browsers` |
| A whole browser fails with a message about missing libraries (Linux only) | The computer lacks some system files | Run `npx playwright install-deps` |
| `Port 4173 is already in use` | Something else is using that address | Close it, or run with `PORT=4180 npm test` (Mac/Linux) |
| A test fails once but passes if you run it again | The computer was busy and a page was slow | Run it again; if it keeps failing it is real |

---

## For the person maintaining the tests

- `playwright.config.js` lists the browsers and starts the server.
- `static-server.js` serves the folder above this one, exactly as a web host would.
- `tests/helpers.js` holds shared pieces such as the "watch for errors" helper.
- One file per topic in `tests/`: `companions`, `hub`, `storage`, `responsive`, `file-protocol`.
- Playwright is pinned to version 1.56.1 on purpose so results do not change on their own. Update it deliberately.
