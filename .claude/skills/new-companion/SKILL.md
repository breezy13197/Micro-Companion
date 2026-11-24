---
name: new-companion
description: Build a new interactive study companion (a new <topic>.html page plus its question bank and manifest) from a lecture PowerPoint, following this project's architecture doc and AGENTS.md rules. Stops for the instructor to choose the color scheme and approve the outline before building. Use when the user asks to build, create or start a new companion.
disable-model-invocation: true
argument-hint: "<topic-id> [path to lecture .pptx]"
---

# Build a new companion

You are building one new companion for the Microbiology Study Hub. The rules
already exist; this skill puts them in order so none get skipped. The
instructor is not a programmer: explain what you are doing in plain language,
use American English (color, not colour), and never assume a decision they
have not made.

**Sources of truth, in this order:**
1. `AGENTS.md`: the instructor's own rules (colors, activities, adaptive exams).
2. `docs/companion-architecture.md`: how a companion is built. Section numbers
   below (§) refer to this file. It is large (~145 KB): read the sections each
   phase names, not the whole file at once.
3. `docs/Question Writing Guidelines.docx`: read it with
   `pandoc "docs/Question Writing Guidelines.docx" -t plain`.
4. `bacteria1.html` and `banks/bacteria1*.js`: the reference implementation.
   Copy from it; don't rebuild from memory.

If the doc and the code disagree, the code in `shared/` wins. Tell the instructor
and fix the doc in the same pull request (the note at the top of the doc).

Arguments given: `$ARGUMENTS`

---

## Phase 0: Gather what you need

You need all of these. Ask for anything missing in **one** message, not one at a time.

- **Topic id**: short, lowercase, no spaces, such as `bacteria5` or `helminths`
  (§4). It names every file, so confirm it before creating anything. Check that
  `<id>.html` and `banks/<id>.js` do not already exist.
- **The lecture**: the `.pptx` file. If it isn't in the project folder, ask the
  instructor to upload it or say where it is in Google Drive. Don't write content
  from general knowledge in place of their lecture.
- **Learning objectives**, if they have them (often on an early slide).
- **Course code and lecture title** as they should appear on the page.

Then pull out the lecture's text and images:

```bash
python3 - <<'EOF'
from pptx import Presentation
p = Presentation("LECTURE.pptx")
for i, s in enumerate(p.slides, 1):
    print(f"--- slide {i}")
    for sh in s.shapes:
        if sh.has_text_frame and sh.text_frame.text.strip():
            print(sh.text_frame.text)
    if s.has_notes_slide:
        print("[notes]", s.notes_slide.notes_text_frame.text)
EOF
mkdir -p "$SCRATCH/slides-media" && unzip -o -q LECTURE.pptx 'ppt/media/*' -d "$SCRATCH/slides-media"
```

(`$SCRATCH` means your scratchpad folder. Keep extracted files out of the project.)
AGENTS.md says to use the PowerPoint's images as the starting point for
figures. Note which slide each useful image came from.

## Phase 1: Plan, then STOP for decisions

Do no building in this phase. Put together one plan message for the instructor
covering the three items below.

### 1a. Three color schemes (required by AGENTS.md)

Propose **three two-tone schemes** (a dark primary plus a bright highlight).
Each needs a name pair in the style of the table, such as "Petrol / Apricot".
- Each must differ clearly from **every** row of the Color Scheme table in
  `AGENTS.md`. Compare actual hues, not only names.
- Never use green as the primary or highlight. Green means "correct / done" (§7, §15.2).
- For each scheme, give the hex values and check the three contrast pairs in
  §15.2 (4.5:1, 4.5:1, 3:1). Calculate the ratios and show them; don't guess.
- If you can, show a small visual preview of all three side by side, such as an
  image or a quick HTML swatch page.
- Tie each to the topic if there's a natural link (for example Giemsa Rose for
  Parasitology).

### 1b. The outline

- Modules (`m1`, `m2`, ...), each with 3–5 content sections, a guiding question,
  and an end-of-module quiz (§15.4, §5).
- Each section: its title, the lecture slides it covers, and its checkpoints (§7).
- A final mastery exam module (`unlockAfter:'*'`, `quiz:'final'`), and a
  `flashcards` section (§15.4).

### 1c. The activity plan

Run the inventory first:

```bash
node .claude/skills/new-companion/scripts/activity-inventory.js
```

Then give each content section one hands-on activity. Rules from AGENTS.md:
- Activities supply practice, prediction, visualization and feedback. They must
  not just repeat the slides in a different format.
- Use a **variety** of types within this companion: no single builder for more
  than about a third of the activities. Lean on the types the inventory shows
  are least used across the project.
- Include at least one activity where students change a variable and watch
  the effect (`Act.explore`, `Act.stepper`, or a custom one), and at least one
  Predict → Interact → Explain (`Act.predict`).
- AGENTS.md welcomes ideas beyond the list. If a hand-built activity would teach
  something better, propose it, and say it will need `Act.register()` with a
  `solve()` (§5, §12).

For each activity, name the builder and give one line on what the student does
and what it teaches.

**Then stop.** Ask the instructor to pick a color scheme and approve or change
the outline and activities. Do not create any files until they answer.

## Phase 2: Build

Work through §11 (the 11-step checklist) in order. Highlights and the places
it's easiest to go wrong:

1. **Start a branch** from the latest `main` before editing anything.
2. **Bank** `banks/<id>.js` (§5, §10). Set `TOPIC_ID` and `TOPIC_TITLE`, then
   `CHECKPOINTS`, `CARDS` and `POOL`. Assign permanent ids as you write
   (`<PREFIX>-001`, `<PREFIX>-CARD-01`) and pick a prefix no other bank uses.
   - Every question follows §10 and the Guidelines docx: single best answer,
     3 to 5 parallel choices, positive stem, no always/never, no all/none of the
     above, and a teaching `why`.
   - **Adaptive exams (AGENTS.md):** these come from `area` tags, not extra
     code (§8 "The targeted round"). Give every `POOL` question an `area`, and
     every area **at least 2 questions** (3+ is better), so a student who
     misses an area can be re-tested on it with a different question.
   - The final exam needs enough questions at each `level` (default 8 concept,
     10 application, 7 integration, §10).
3. **Manifest** `banks/<id>.manifest.js` (§5, §14.2, §15.4). It's the only place
   the structure is written. Every `POOL` area maps to a section in
   `areaSection`. Use the chosen primary color for `accent`.
4. **Page** `<id>.html`: copy `bacteria1.html` and replace its content. Keep the
   page shell (§6), the flashcard markup (§7) and the script order (§3)
   exactly. Copy the derivation block line for line (§11 step 4). Apply
   the colors in all the places §7 "Giving a companion its own accent color"
   and §15.2 / §16.4 / §17.4 list, including the ring's two inline `stroke`s.
   Call `initWelcome()` once at the end of the content script (§15.3).
5. **Images**: if you use slide images, put them in `banks/<id>.images.js` as
   data URIs, with a comment naming the slide each came from (copy the shape of
   `banks/parasitology.images.js`). Load it as script 2b (§3). Give every image
   meaningful `alt` text.
6. **Leave `shared/` alone** (§11 step 5). If a builder almost fits, say so, and
   ask before generalizing it.
7. **Register with the hub** (§14.5): add a `HUB.META` entry and the three
   bank/manifest/`HUB.capture('<id>')` lines in `index.html`, next to the others.
8. **Update the records:** add the scheme's row to the Color Scheme table in
   `AGENTS.md`. Add the new files to the file table and folder diagram in
   `README.md`.

## Phase 3: Check

Run each of these and fix what it finds before telling the instructor it's done.

1. **Cross-check the files against each other** (catches the silent failures in §14.4):
   ```bash
   node .claude/skills/new-companion/scripts/check-companion.js <id>
   ```
   ERRORS must reach zero. Read each WARNING and fix it, or say why it's fine.
2. **Syntax**: `node --check` on the bank, manifest and images file.
3. **The browser tests** find the new companion automatically (`browser-tests/README.md`):
   ```bash
   cd browser-tests && npm ci && npx playwright test --project=chromium --grep "<id>" --trace off
   ```
   In a cloud session Chromium is preinstalled. If the pinned Playwright
   version can't find it, launch with `executablePath: '/opt/pw-browsers/chromium'`
   rather than running `playwright install`. A custom activity may need a small
   test helper (README, "When you add a new companion").
4. **Walk the §12 smoke test** in a real browser (Playwright), plus the
   additions in §15.6, §16.5 and §17.5. Make sure the progress ring can reach
   exactly 100% after `Act.solveAll()` and every quiz is submitted.
5. **Look at it.** Take screenshots of the Start page, one content section and
   one activity, at desktop and 375 px phone width, and show them to the instructor.

## Phase 4: Hand over

1. Commit, push, and open a draft pull request. The GitHub browser tests then
   run in all five browsers.
2. Write the instructor a plain-language summary:
   - What was built: modules, number of activities by type, questions, flashcards.
   - Exact results of the checks, including any warnings left on purpose.
   - **What needs their expert eye:** any fact you couldn't trace to a slide, any
     answer key you're less than sure of, and every place you went beyond the
     lecture. Mark these clearly. Don't present them as verified.
   - How to view it: open `<id>.html`, or the pull request preview.
