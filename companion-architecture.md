# Companion App Architecture

**Standard for all interactive study companions in this project.**
Reference implementation: bacteria1 companion.

This document exists so that every companion built after this one — pharmacokinetics, whatever comes next — is a variation on the same skeleton rather than a one-off. A new companion should mean writing content and copying the five `shared/` files, not re-deriving how progress tracking, quizzes, or practice activities work.

> **Keeping this document honest.** `shared/engine.js` is the actual contract; this file only describes it. An earlier version of this document omitted the `FLOW` global (§5) and the entire page shell (§6), and a companion built faithfully from the description alone rendered a sidebar and nothing else. Sections 5 and 6 have since been checked line by line against `engine.js`. If you change anything in `shared/`, update those two sections in the same sitting — and if you ever build from this document and hit something it doesn't mention, fix the document rather than only fixing the page.
>
> **Second correction.** This document listed the flashcard DOM hooks as six bare IDs with no structure, and showed only one of the two checkpoint markup shapes `engine.js` actually supports. A companion built from the description alone satisfied every listed ID with the wrong element structure, which produced a card that was permanently showing its answer face, mirrored, with no visible bug in the reasoning — every ID existed, so nothing in this document caught it. §6 and §7 now spell out the flashcard markup in full, the way the quiz section already was, and document both checkpoint shapes. §8 also gained a section on the targeted mastery round, which existed in `engine.js` but was never written down here at all.
>
> **Third correction.** The hub described in §13 as a future possibility now exists, and it needs one piece of information no file in this document previously produced: which module and section a checkpoint belongs to. `MODULES` and `SECTION_REQ` carry that, but they live inside each companion's own `.html`, not in a file the hub loads. The hub's first working version could only show quiz scores as a result — no per-module progress — until this gap was noticed and closed with a fifth file, the manifest (§14). If you add a companion and skip its manifest, the hub will not throw an error; it will just quietly fall back to quiz-scores-only for that one companion, the same degraded state this correction describes. Treat §14 as load-bearing as §5 and §6, not as an appendix.
>
> **Fourth correction.** This one is different in kind from the first three: it isn't a gap `engine.js` exposed, it's a gap *this document's own maintenance process* let through. When hub exam gating shipped (§14.7), a working copy of this file was edited with the new section and the edit was described as delivered — but the edited copy was never copied back to the file actually given out, and never listed among that turn's files. The result was a document that claimed, in conversation, to explain a rule it did not anywhere actually contain. It was caught only because the next change to this section (§14.8, flags) required rereading §14 first and the gap was visible on the page. The fix isn't a new rule so much as a reminder that "I updated the document" is a claim to verify against the file itself, the same way any other claim in here is — re-open the file that was actually written to the delivery location before describing it as current, don't trust the memory of having edited a working copy.
>
> **Fifth correction.** §14.4 named the drift between a companion's hand-typed `MODULES`/`SECTION_REQ` and its `.manifest.js` copy as a known risk, and even sketched the fix, but filed it as future work "in its own sitting." That sitting has now happened. The manifest is no longer a copy kept in sync by hand — it is the only place the structure is written. Each companion's own content script now **derives** `MODULES`, `FLOW`, `UNGRADED`, `SECTION_REQ`, `QUIZ_KEY_FOR_SECTION`, and `AREA_SECTION` from `MANIFEST` at load time, the same file the hub already read. §3, §5, §11, and §14 described the old, hand-typed shape as current when it no longer is; all four have been updated to describe the derivation instead. This also changes what a missing manifest means: it used to be a degraded-but-working state (§14.3's fallback), because only the hub's dashboard needed it. Now the companion's own page needs it to render at all — `banks/<topic>.manifest.js` is as load-bearing as `shared/engine.js` itself, and its absence is a broken deployment, not a quiet fallback. The reference implementation for this shape is the Membrane Transport / Signal Transduction companion (`signaling.html` + `signaling.manifest.js`). All 8 companions have been migrated. 

> **Sixth correction.** This one adds a file rather than fixing a gap in `engine.js`. Every earlier version of this document told a new companion to hand-build each practice activity in its own content script: §5 called everything after the derivation block "genuinely specific to that topic," §7 gave the sort-row markup to copy, and §8 described the three-call save pattern each bespoke activity had to repeat. That was reasonable while a companion had two or three activities. It stopped being reasonable when the Bacteria I companion needed twenty-one. Drag-and-drop, sorting, ordering, fill-in-the-blank, clickable diagrams, staged cases, step-through animations, and predict-first questions behave, save, and score identically in every topic, which is exactly the situation principle 3 in §1 says belongs in `shared/`. Those mechanics now live in a fifth shared file, `shared/activities.js`, which defines one global, `Act`. §1, §2, §3, §4, §5, §6, §7, §8, §9, §11, §12, and the one count in §14 have been updated to account for it, and §5 has a new subsection with its full contract: each builder's `cfg` shape, what completes it, and what it saves. Two things did *not* change. `engine.js` never references `Act` and is untouched, and the companions built before this file existed neither load it nor need to; the older statements in this document about hand-built activities remain true for a genuinely custom widget that no builder covers. The reference implementation for the toolkit is the Bacteria I companion (`bacteria1.html`). The new material was checked against `activities.js` itself rather than written from memory of it: every builder, every `cfg` field, every stored key, and every exported function named below exists in the file.

> **Seventh correction.** This one is the doc catching up to files that were already real. Two separate gaps, found the same day: First, §2's file tree never grew to list `welcome.css`, `shell.css`, `sections.css`, and `welcome.js` under `shared/` — they've been real, working files since the Bacteria III build, just never added to the tree, so a reader following §2 alone would not know they exist. Second, and more substantive: §15, §16, and §17 describe these four files as living in `_templates/welcome/`, `_templates/shell/`, and `_templates/sections/`, generated into each companion via `shell.template.html`/`module-home.template.html` and the `render_shell.py`/`render_welcome.py`/`render_sections.py` scripts, with a `README.md` in each template folder documenting the token list. None of that is how the three real companions were actually built. All four files live flat in `shared/`, next to `engine.js` and the rest — same folder, same `<link>`/`<script>` pattern as everything else. Every companion's sidebar, Start page, and section markup is hand-written to match the pattern (copied from an existing companion and re-colored), the same way the page shell in §6 always has been — not generated by a script. The `render_*.py` files and their `_template.html`/`_content_example.py` companions still exist in the project and are left in place in case that generation workflow gets adopted for real later, but nothing currently reads them, and no `_templates/` folder or `README.md` exists anywhere in the project. §2, §15, §16, and §17 below have been corrected to say `shared/` and to describe the markup as hand-written, matching what every companion actually does today. Bacteria I and Bacteria II were also brought onto these four shared files during this same pass — before this, only Bacteria III actually linked them; Bacteria I had its own hand-duplicated copy of the same CSS and JS, and Bacteria II had the full text of all four files pasted inline. Both now link the same four files Bacteria III does, verified line-for-line against them first so nothing visible changed.
>
> This correction also adds §6.4, the back-to-hub link — a new required shell element, not a pre-existing one this document had simply missed.
>
> **Eighth addition (a feature, not a correction).** Students can now write their own flashcards. They are created, edited and deleted **inside each companion** and are **view-only in the hub**. The panel is built by `shared/engine.js` itself, injected into the existing flashcards section, so no companion's HTML had to change and every companion, including ones already built, gets it as soon as it loads the updated shared files. The cards live in a new `state.myCards` field (§9) and are deliberately outside the completion model, every quiz, and every hub exam. §7, §9, §12, and a new §14.10 describe it; `storage.js`, `engine.js`, `styles.css`, and `hub.html` changed, and the hub keeps a second, deliberate copy of the cleaning rule (§14.10 explains why). It was checked by running the real shared files, and the real hub, in a simulated browser — not written from memory of them.

> **Ninth addition (assessment fixes — a behavior change in `shared/`, not a gap).** Four defects in how quizzes record and report evidence were fixed together, in `shared/engine.js`, `shared/storage.js`, `shared/styles.css`, and in `hub.html`'s own exam runner. (1) *Adaptive review declared success early*: after a targeted round the engine rebuilt its list of weak areas only from the round's own questions, so a missed concept that never got a follow-up question vanished and the page said "Every concept area is solid." Missed concepts now live on a persistent **review queue** (`state.pending`, §8, §9) and leave it only when answered correctly later. (2) *Repeated Submit inflated evidence*: `grade()` added to `areaStats` and added another Flag button on every call. Grading now happens once per attempt (§8). (3) *Completion and mastery were conflated in the UI*: they are still separate in the rules; each quiz page now shows **practice completed**, **assessment result**, and **review pending** as three indicators (§8). (4) *A refresh lost an unfinished quiz*: attempts are now saved on every answer (§9). The hub's exam runner got the same treatment (§14.11). No existing key changed meaning; every new field is added to `blank` in `loadState()` and cleaned on load, so no `v2` bump was needed. All of it was checked by running the real files in a simulated browser (see the new items in §12), not written from memory of them.

> **Tenth addition (spaced re-checks, review-linked flashcards, hub dashboard indicators).** Three follow-ons to the assessment fixes above, in the same shared files and the hub. (1) *Fixed is not mastered.* A concept answered correctly after a miss no longer simply leaves the review queue (one right answer can be luck): it is scheduled for a re-check after 2 days, and if that holds, once more after 7 days; only then is it counted as **mastered**. Missing it at any point puts it back on the list (§8, §9). (2) *Flashcards feed from review.* A third flashcard deck, "For your review list", shows the cards that belong to the concepts currently needing attention, and the review panel links to it (§7, §8). (3) *The hub dashboard* now shows the same three separate indicators on every companion card (§14.12). New saved fields `spaced` and `mastered` follow the same rule as before: added to `blank` in `loadState()`, cleaned on load, no `v2` bump. Tested by running the real files in a simulated browser; the review-linked flashcard matching is a heuristic and is the one part that should be spot-checked against real card sets (§8).

---

## 1. Why this shape

Three decisions drive everything else in this document:

1. **No server.** These files are static and get uploaded to an LMS (Brightspace) that serves them as-is. There is no database, no backend, nothing that runs code on the person's behalf. Every piece of "logic" has to be a browser-side JavaScript file.
2. **Questions should be readable without the app.** A future hub needs to pull questions from every companion to build cross-topic exams. That's only possible if each companion's question bank lives in its own file, in a predictable shape, separate from the code that renders it.
3. **One engine, many topics.** The interactive mechanics — quizzes, checkpoints, flashcards, progress tracking — are identical in kind across every topic. Only the content differs. Duplicating that mechanical code into every companion means every bug gets fixed N times instead of once. The same holds for the practice activities (drag-and-drop, sorting, ordering, fill-in-the-blank, clickable diagrams, staged cases, step-through animations, predict-first questions): they behave, save, and score the same way in every topic, so their mechanics live in `shared/activities.js` and a topic's page only describes what to show.

Everything below follows from these three points.

---

## 2. File structure

```
/companions/
  shared/
    styles.css      the whole design system — one copy, used by every companion
    storage.js       defines `state`, save/load — one copy
    helpers.js        el(), shuffle(), order(), LETTERS — one copy
    activities.js      the activity toolkit, `Act`: dnd, sort, order, fill, explore, stages, stepper, predict, gate — one copy
    engine.js          nav, checkpoints, quizzes, flashcards, completion — one copy
    welcome.css         the Start page's layout, color-neutral — one copy; see §15
    welcome.js           draws Start-page icons, live counts, and button wiring — one copy; see §15.3
    shell.css            the sidebar, top bar, and module overview pages, color-neutral — one copy; see §16
    sections.css         the small marks every content page shares (eyebrow, lede, keypoints, hands-card) — one copy; see §17
  banks/
    enzymes.js               this topic's checkpoints, quiz pool, flashcards — WITH stable IDs
    enzymes.manifest.js        this topic's module/section MAP — the ONLY place it's written; see §14
    pharmacokinetics.js
    pharmacokinetics.manifest.js
    hub.js                     the hub's own cross-topic question bank — see §14
    ...
  enzymes.html            this topic's markup + its own content script, which DERIVES its structure from enzymes.manifest.js
  pharmacokinetics.html
  ...
  hub.html                loads every bank + manifest in /banks; dashboard, exams, flashcards — see §14
```

**`shared/`** never becomes topic-specific. If a change to `engine.js` only makes sense for one companion, it doesn't belong in `engine.js` — it belongs in that companion's own content script. The same goes for `activities.js`: a builder that only makes sense for one topic belongs in that topic's content script, registered with `Act.register()` (§5).

**`banks/<topic>.js`** is the file a hub reads for questions. It should be understandable without ever opening the matching `.html` file. **`banks/<topic>.manifest.js`** is the file both the hub *and* the companion's own page read for structure: it is the single place a companion's module/section map is written. The `.html` file's content script loads it and derives `MODULES`, `SECTION_REQ`, and everything else in §5's second table from it at runtime — it does not restate that structure by hand. §14 covers why this is a fifth file instead of a few more fields on the bank, and §14.2 covers the derivation itself.

**`<topic>.html`** is a thin loader: the page's unique markup (section content, SVG figures, activity data specific to that topic) plus four `<link>` tags (`styles.css`, `welcome.css`, `shell.css`, `sections.css`) and eight `<script>` tags (bank, manifest, `storage.js`, `helpers.js`, `activities.js`, `welcome.js`, the page's own inline content script, then `engine.js` last) — one script fewer than this if the page builds none of its activities with `Act` and leaves `activities.js` out. It should contain no reusable logic, and no hand-typed copy of what the manifest already says, and no hand-typed copy of what `shared/welcome.css`, `shared/shell.css`, or `shared/sections.css` already style.

---

## 3. Load order (this is load-bearing, not a suggestion)

```html
<link rel="stylesheet" href="shared/styles.css">
...
<script src="banks/enzymes.js"></script>            <!-- 1. pure content data -->
<script src="banks/enzymes.manifest.js"></script>    <!-- 2. defines MANIFEST — structure derives from this -->
<script src="shared/storage.js"></script>            <!-- 3. defines `state` -->
<script src="shared/helpers.js"></script>             <!-- 4. el(), shuffle(), order() -->
<script src="shared/activities.js"></script>           <!-- 5. defines `Act`, the activity toolkit -->
<script>/* this topic's content script: derives MODULES/SECTION_REQ from MANIFEST, then builds its activities and figures */</script>  <!-- 6 -->
<script src="shared/engine.js"></script>               <!-- 7. builds the nav, wires everything -->
</body>
```

This order exists because of three real bugs hit while building companions against this document, and all three are worth understanding rather than just copying the fix:

- **The manifest must load before the content script that derives from it.** The content script's very first block now reads `MANIFEST.modules` to build `MODULES`, `SECTION_REQ`, and the rest of §5's second table. If `banks/<topic>.manifest.js` hasn't loaded yet, `MANIFEST` doesn't exist and that derivation throws on its first line — before a single section of the page has anything to work with. This is a new failure mode this document didn't need to describe before the manifest became load-bearing for the page itself (see the fifth correction at the top of this document); it fails in exactly the same "sidebar with nothing behind it" way §3's last paragraph already describes for a missing `FLOW`, because the root cause is the same class of problem: a global the content script needs isn't defined yet.
- **Content-script code runs immediately, not just inside click handlers.** Restoring a saved drag-and-drop layout, building a flashcard deck, rendering a sort activity — all of this happens as soon as the script tag is parsed. That means anything the content script *reads* (`MANIFEST`, `state`, `el()`, `shuffle()`) must already exist. This is why the manifest, `storage.js`, and `helpers.js` all load before the content script, not after.
- **`engine.js` must load last.** It builds the sidebar nav from `MODULES`, wires every `[data-check]` checkpoint from `CHECKPOINTS`, and renders every `.quiz-body` from `POOL` — all of which must already be defined. It also calls `goTo(0)` at the very end to show the first page, which needs the nav it just built.

**`activities.js` is the fourth link in this chain, and it sits between `helpers.js` and the content script.** What it does at load is small: it injects its own stylesheet into `<head>` and defines `Act`. It reads `state`, `saveState()`, `el()`, `shuffle()`, `order()`, and `LETTERS` only when a builder runs, not when the file loads, so the hard requirement is that all three of those files precede the content script; placing it directly after `helpers.js` keeps the dependency order readable. The content script then calls `Act.dnd(...)`, `Act.sort(...)`, and the rest the moment it runs, not inside click handlers. Load `activities.js` after the content script and the first `Act.` call throws `Act is not defined`. That stops the rest of the content script, so every later activity on the page is never built, while the sidebar and the quizzes still work. It looks like sections with an empty hands-on area, and a progress ring that stalls short of 100% because those sections can never finish. `activities.js` does not need to precede `engine.js` for its own sake (it calls `paintNav()`, which `engine.js` defines, only from inside click handlers, after the page has finished loading), but the content script must precede `engine.js`, and `activities.js` must precede the content script, so the order above follows.

If you add a new shared utility file, put it between `helpers.js` and the content script if the content script needs it while loading; put it after `engine.js` only if nothing before it depends on it (rare). `activities.js` is the first file to be added under this rule.

**`engine.js` fails loudly but looks quiet, and now so does the manifest derivation that runs just before it.** Both run top to bottom with no error handling. The derivation's first act is to read `MANIFEST.modules`; `engine.js`'s first act is to build the sidebar from the `MODULES` that derivation produced, and its second is to read `FLOW`. If any global either one expects is missing, it throws *at that line* and every later statement — showing the first page, wiring checkpoints, rendering quizzes, filling pagers — simply never runs. The visible result is a fully-rendered sidebar attached to a blank page, with one error in the browser console and nothing else on screen. That symptom almost always means a missing or malformed `MANIFEST`, a missing global from §5, or a missing DOM hook from §6 — not a styling or path problem. Check the manifest first, since it's the newest link in this chain: `node --check banks/<topic>.manifest.js` catches a syntax error, but only actually loading the page catches a manifest that parses fine but is shaped wrong (a typo'd module id, a `sections` array that isn't one).

---

## 4. Naming conventions

| What | Pattern | Example |
|---|---|---|
| Bank file | `banks/<topic-id>.js` | `banks/enzymes.js` |
| Manifest file | `banks/<topic-id>.manifest.js` | `banks/enzymes.manifest.js` |
| HTML page | `<topic-id>.html` | `enzymes.html` |
| Topic ID | short, lowercase, no spaces | `enzymes`, `pharmacokinetics` |
| Question ID | `<TOPIC>-###`, zero-padded, sequential, never reused | `ENZ-001` … `ENZ-047` |
| Flashcard ID | `<TOPIC>-CARD-##` | `ENZ-CARD-01` |
| Checkpoint ID | short key, the object's own property name serves as the ID | `c1`, `c1b`, `c11c` |
| Storage key | `companion.<topic-id>.v1` | `companion.enzymes.v1` |
| Activity name | short camelCase, unique within a companion; it is both the `activity:` value in the manifest and the key in `state.activities` (never ending in `_v`, `_n`, or `_g`; see §9) | `microbeMatch`, `gramSim` |
| Activity host element | `act-<activity name>` (a convention; a builder accepts any element id) | `act-microbeMatch` |
| Hub's own storage key | `hub.v1`, fixed — no topic id | `hub.v1` |

**IDs are permanent.** Once assigned, a question's ID is never reused and never renumbered, even if the question is edited or retired. This is what lets a hub say "this practice exam pulled ENZ-014 and PHARM-009," lets anyone track which specific questions students consistently miss, and lets a bad question be deleted without shifting every ID after it. Retrofitting IDs after several banks exist is real work — assign them the moment a question is written.

**The storage-key namespace matters more than it looks.** Brightspace serves every companion from the same origin, and browser storage is scoped to the *origin*, not the page. Without a per-topic key, two companions on the same course site would silently share (and overwrite) each other's saved progress. Every bank file must set `TOPIC_ID` before `storage.js` runs.

---

## 5. Data contracts

These are the global variables each file is responsible for defining. `engine.js` reads all of them by name — nothing is passed as a parameter, nothing is auto-detected. Get a name wrong and the engine silently does nothing (or throws), so treat this table as the actual API surface.

### Defined in `banks/<topic>.js`

```javascript
var TOPIC_ID    = 'enzymes';                    // used for the storage key
var TOPIC_TITLE = 'Biochemistry of Enzymes';     // shown in the storage-blocked fallback message

var CHECKPOINTS = {
  c1: {
    options: ['...', '...', '...', '...'],       // 4 choices, order irrelevant — shuffled at render
    answer: 0,                                    // index into options, BEFORE shuffling
    why: '...'                                     // shown after a correct answer
  },
  ...
};

var CARDS = [
  { id:'ENZ-CARD-01', t:'Term', d:'Definition shown on the flip side.' },
  { id:'ENZ-CARD-02', t:'A reversed-recall prompt works too', d:'Answer.', flip:true },  // flip:true is cosmetic only, both faces render the same way
  ...
];

var POOL = [
  {
    id: 'ENZ-001',
    m: 'm1',                                       // which module quiz this belongs to
    area: 'Enzyme basics',                          // must match a key in MANIFEST.areaSection (banks/<topic>.manifest.js)
    level: 'concept',                                // 'concept' | 'application' | 'integration' — must match FINAL_EXAM_MIX keys
    stem: '...',
    options: ['...', '...', '...', '...'],
    answer: 0,
    why: '...'
  },
  ...
];
```

### Defined in `banks/<topic>.manifest.js`

This is the **only** place a companion's module/section structure is written. Nothing else defines it by hand; the content script below derives from this file at runtime, and the hub loads the same file for its dashboard (§14).

```javascript
var MANIFEST = {
  topic  : 'enzymes',                                 // matches TOPIC_ID
  title  : 'Biochemistry of Enzymes',                  // matches TOPIC_TITLE
  file   : 'enzymes.html',                              // page the hub links to
  accent : '#2FA97A',                                    // this companion's color, for the dashboard
  accentSoft : '#E7F6EF',

  modules: [
    { id:'m1', title:'Module 1 · ...', sections:[
      { key:'m1home', label:'Module overview' },          // every module's FIRST section is its landing page
      { key:'m1s1', label:'...', checks:['c1','c1b','c1c'] },              // checkpoint IDs that gate this section
      { key:'m1s4', label:'...', checks:['c4','c4b'], activity:'sort' },   // activity: name in state.activities
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }   // every module's LAST section is its quiz; `quiz` is the POOL `m` value
    ]},
    ...
    { id:'flash', title:'Retrieval Practice', sections:[{ key:'flashcards', label:'...' }] },
    { id:'final', title:'Final Mastery Exam', unlockAfter:'*',   // optional — see below
      sections:[{ key:'final', label:'...', quiz:'final' }] }
  ],

  areaSection: {                                    // where "review this" sends a student after a quiz
    'Enzyme basics': 'm1s1',
    ...
  }
};
```

A section carries `checks`/`activity` if and only if it's gradable; a section carrying neither (a landing page, the flashcard deck) is ungraded, and a section carrying `quiz` is a quiz. There is no separate "is this ungraded" flag to set — see `UNGRADED` below.

### Derived in the page's own content script (in `<topic>.html`), from `MANIFEST`

The content script does not write `MODULES`, `SECTION_REQ`, `QUIZ_KEY_FOR_SECTION`, or `AREA_SECTION` by hand. It builds them from `MANIFEST` the moment the script runs, using this exact shape (copy it verbatim into a new companion; only `BADGES` and the two exam-tuning constants at the bottom are actually topic-specific):

```javascript
// Presentation-only sidebar icon per module id. Deliberately not part of
// the manifest — the hub has no use for it.
var BADGES = {m1:'1', m2:'2', ..., flash:'&#10022;', final:'&#9733;'};

var MODULES = MANIFEST.modules.map(function(m){
  var mod = {id:m.id, badge:BADGES[m.id]||'&#8226;', title:m.title,
             sections:m.sections.map(function(s){return {key:s.key,label:s.label};})};
  if(m.unlockAfter) mod.unlockAfter = m.unlockAfter;
  return mod;
});

// REQUIRED. The flat study path: every section from every module, in order.
// Always derive it from MODULES rather than writing it out by hand, so the
// two can never disagree.
var FLOW = []; MODULES.forEach(function(m){ m.sections.forEach(function(s){ FLOW.push(s); }); });

// Landing pages and the flashcard deck. Declared for readability; see the note below.
var UNGRADED = [];
MANIFEST.modules.forEach(function(m){ m.sections.forEach(function(s){
  if(!s.checks && !s.activity && !s.quiz) UNGRADED.push(s.key);
});});

var SECTION_REQ = {}, QUIZ_KEY_FOR_SECTION = {};
MANIFEST.modules.forEach(function(m){ m.sections.forEach(function(s){
  if(s.checks || s.activity){
    SECTION_REQ[s.key] = {checks:s.checks||[]};
    if(s.activity) SECTION_REQ[s.key].activity = s.activity;
  }
  if(s.quiz) QUIZ_KEY_FOR_SECTION[s.key] = s.quiz;
});});

var AREA_SECTION = MANIFEST.areaSection;

var MODULE_QUIZ_SIZE = 8;                              // optional, defaults to 8 if omitted — NOT part of MANIFEST
var FINAL_EXAM_MIX = {concept:8, application:10, integration:7};  // optional, this default is also the fallback — NOT part of MANIFEST
```

**Only `MANIFEST`, `BADGES`, `MODULE_QUIZ_SIZE`, and `FINAL_EXAM_MIX` are actually written by hand per topic.** `MODULES`, `FLOW`, `UNGRADED`, `SECTION_REQ`, `QUIZ_KEY_FOR_SECTION`, and `AREA_SECTION` are all derived — copy the derivation block above unchanged into a new companion rather than adapting it, the same way `shared/` files are copied unchanged. If a new companion's content script looks different from this block, that's a sign the structure has drifted back into being hand-typed, which is the exact failure mode this derivation exists to remove.

**`FLOW` is still the single most important global in this table**, and still not derived automatically from anything upstream of `MODULES` — it's the one line in this block that has to run explicitly even though everything above it is now generated. `engine.js` references it eighteen times — more than `state` — and uses it for everything positional: which section `goTo(i)` shows, what Back and Next point at, which label appears in the topbar, and how the progress percentage is counted. Omit it and the page renders a sidebar and nothing else (see §3).

**`UNGRADED` is currently vestigial.** It appears in `engine.js`'s header comment but is never read: ungraded sections are identified by *absence* from `SECTION_REQ` and `QUIZ_KEY_FOR_SECTION`, via `isGradable()`. Keep deriving it — it documents intent, and a future engine change may start reading it — but understand that adding a key to it does not make a section ungraded. The thing that actually controls gradability is whether that section's manifest entry carries `checks`, `activity`, or `quiz` — set or remove those in the manifest, not in this derived list.

**`unlockAfter` gates a module behind others, and is entirely optional.** A module without it is never locked — this is how existing companions built before this field existed keep working unchanged. It's set once, on the module object inside `MANIFEST.modules`, and carried through into `MODULES` by the derivation above. Two forms:

```javascript
unlockAfter: ['lab','m1','m2','m3','m4','m5']   // an explicit list of module ids, or
unlockAfter: '*'                                 // every other module that has gradable content
```

`'*'` automatically excludes modules with no gradable sections (Flashcards, typically) and the module itself, so it's normally the right choice for a single terminal exam. Use an explicit array only when the dependency is narrower than "everything else" — for example a mid-course checkpoint that should only wait on the first two modules.

When a module is locked, `engine.js` hides that module's normal `.card` content in every one of its sections and replaces it with one generic lock card — a checklist of the required modules with a live done/not-done dot each, and a button that jumps straight to the first incomplete one. This card is built entirely by `engine.js` from `MODULES` data; the topic's own HTML and content script need nothing beyond the `unlockAfter` field on the manifest module itself. A small lock badge also appears next to the module's title in the sidebar. Both the card and the badge disappear the instant the requirement is met — `refreshLocks()` runs at the end of `paintNav()`, so it recalculates on every navigation, checkpoint, activity, and quiz submission, the same as everything else on the page.

Everything else in the content script — the SVG figures, the data each activity is configured with, and any custom widget that no builder covers — is specific to that topic. Activities are built by calling the shared toolkit described next, not by hand-writing their event handlers. The only contract a custom widget has is the one in §8 (`state.activities.<name>` is non-null once it is finished), which the toolkit's `Act.done()` and `Act.keep()` exist to make one line each.

### Provided by `shared/activities.js`: the `Act` toolkit

`activities.js` defines one global, `Act`, and injects one `<style data-act="1">` block into `<head>` when it loads. Like `engine.js`, it knows nothing about any subject: a page passes a host element and a `cfg` object describing *what* to show, and the builder supplies how it behaves, saves, and scores. It reads `state`, `saveState()`, `el()`, `shuffle()`, `order()`, and `LETTERS` when a builder runs, and calls `paintNav()` (from `engine.js`) only from inside click handlers.

Every builder is called as `Act.<builder>(host, cfg)`. `host` is an element or an element id and must exist when the builder runs. `cfg.name` is the activity's name: the value the manifest lists as `activity:` and the key it is saved under in `state.activities` (§8, §9). Fields marked *html* are inserted as HTML. The options of `predict`, `stages`, and `gate` are shuffled when they are drawn, exactly as checkpoint options are, so their `answer` is the index *before* shuffling.

| Builder | What the student does | Key `cfg` fields | Counts as done when | Saved in `state.activities` |
|---|---|---|---|---|
| `Act.dnd` | Drags labeled pills onto rows (or selects a pill, then a row), then checks | `rows:[{text, answer, why?}]`, `pills:[label,...]` | Check is pressed with every row filled, at any score | `<name>: {layout:[...]}` |
| `Act.sort` | Picks one option per row, then checks | `options:[...]`, `rows:[{text, answer, why?}]` | Check is pressed with every row answered | `<name>: {picks:[...]}` |
| `Act.order` | Moves steps up and down, then checks | `items:[html,...]` written in the **correct** order (the builder shuffles them) | Check is pressed | `<name>: {seq:[...]}` |
| `Act.fill` | Chooses a word from a bank for each blank, then checks | `text` containing `{0}`, `{1}`, ..., `bank:[...]`, `answers:[...]` | Check is pressed with every blank filled | `<name>: {v:[...]}` |
| `Act.explore` | Opens every part of a clickable diagram | `svg` (each clickable part carries `data-hs="<id>"`), `ids:[...]`, `items:{id:{title, html}}`, `start?` | Every id has been opened | `<name>: true`; partial in `<name>_v` |
| `Act.stages` | Works through a case one question at a time, retrying until correct | `stages:[{lead?, prompt, options, answer, why, reveal?}]` | The last stage is answered correctly | `<name>: true`; progress in `<name>_n` |
| `Act.stepper` | Plays tabbed step-through animations | `scenes:[{id, label, intro, svg, steps:[{caption, set}]}]` | Every scene has been played to its last step | `<name>: true`; partial in `<name>_v` |
| `Act.predict` | Picks an item, commits to a prediction, then sees the result | `start?`, `items:[{id, title, prompt, options, answer, why, reveal?}]` | Every item has been answered, right or wrong (the prediction is the point) | `<name>: true`; answers in `<name>_v` |
| `Act.gate` | Answers one predict-first question that unlocks a page-built activity | `name`, `prompt`, `options`, `answer`, `why`, plus a callback as the third argument | Not a completion by itself; the callback runs once any answer is chosen | `<name>_g: <option index>` |

`dnd` and `sort` show a row's `why` under it after checking. `explore` also draws a chip button for every id under the figure, so a diagram can be used without a pointer, and gives every `data-hs` part keyboard focus. `stepper` steps set element properties by SVG id, `{t:[x,y], o:opacity, s:scale, c:fill}`, and the values accumulate: an element keeps its last-set value until a later step changes it, so step 0 must set everything that starts hidden or displaced. Prefix those ids per scene (`tf-donor`, `td-donor`), since ids share the page-wide id space while a scene is on screen.

**What every builder returns.** `{cfg, solve}` (`gate` returns `{answered, solve}`). `solve()` performs the activity correctly through the same code path a student's clicks use, so an automated test can drive a page to 100% (§12); students never see it. Every builder except `gate` also registers itself in `Act.registry` under `cfg.name`.

**The rest of the API.** `Act.done(name, value)` runs `state.activities[name] = value; saveState(); paintNav()`, the three calls §8 requires (the last only once `engine.js` has defined `paintNav`). `Act.keep(name, value)` is the same without `paintNav()`, for partial progress. `Act.register(name, {solve})` adds a custom activity to the registry. `Act.solve(name)` runs one registered `solve()`, and `Act.solveAll()` runs all of them.

**Writing a custom activity.** When no builder fits, write it in the content script, but keep it inside the same contract: `Act.done(name, data)` when the student finishes (and `Act.done(name, null)` on Try again), `Act.keep(name + '_v', ...)` for partial progress, and `Act.register(name, {solve: function(){...}})` so §12's test reaches it. If it uses `Act.gate()`, two rules apply. First, create the gate *after* the UI it unlocks has been built: when a saved answer exists, `gate` calls its callback during the `Act.gate()` call itself, so a callback that repaints UI which does not exist yet throws on a returning visit and works on a first visit. Second, have the custom activity's registered `solve()` call the gate's `solve()`, because gates are not in the registry and `Act.solveAll()` will not answer them.

**Styling.** `activities.js` carries its own CSS instead of adding to `styles.css`, so `styles.css` stays identical in every companion. That CSS uses only design tokens, so a companion's accent override themes it automatically. It also reads two optional tokens, `--ok` and `--ok-soft`, with green fallbacks (§7). The builders reuse existing `styles.css` classes wherever one exists (`.dnd-*`, `.sort-row`/`.sort-text`/`.sort-opts`/`.opt`, `.choices`/`.choice`/`.feedback`, `.q-stem`, `.controls`, `.btn`, `.caption`, `.figure`), so a page has to load `styles.css` for them to look right. Every rule the toolkit injects is scoped to an `.act-*` class (two more hang off the existing `.dnd-desc`), including the unprefixed `.ok` and `.no` state classes, which are styled only under `.act-*` parents. Because the injected block is appended to `<head>` when the script runs, after the page's own `<style>` block, a companion that wants to restyle an `.act-*` rule needs a more specific selector than the toolkit's own, or its override loses on source order at equal specificity.

---

## 6. Required DOM hooks (the page shell)

`engine.js` does not create the page chrome — it expects to find it and wires itself to it by `id` and by class. These elements are as much a part of the contract as the globals in §5, and most of them are **unguarded**: the engine calls `.onclick` or `.textContent` on the result directly, so a missing element throws and stops everything after it.

### Required once per page

| Hook | Where | What happens if it's missing |
|---|---|---|
| `#nav` | sidebar | Nav is never built |
| `#ringPct`, `#ringFill` | sidebar progress ring | `paintNav()` throws on every call — page dies on first render |
| `#topTitle`, `#topPill` | topbar | Same — `paintNav()` throws |
| `#resetBtn` | sidebar | Throws at the end of `engine.js` |
| `#fcCard`, `#fcFront`, `#fcBack`, `#fcCount`, `#fcPrev`, `#fcNext` | flashcards section | Throws in `paintCard()` |

These six IDs are necessary but **not sufficient** — the elements they're on have to be nested in a specific structure for the flip itself to work, and no ID makes that visible if you get it wrong. See "Flashcard markup" in §7 for the full shape; don't reconstruct it from the ID list alone.

Two are optional and properly guarded: `#topMeta` (written only when storage is blocked) and `#jumpFlash` (an optional "go to flashcards" shortcut button).

The minimum shell, which every companion should copy verbatim and only change the brand text and ring colors in:

```html
<div class="app">
  <aside class="sidebar">
    <div class="brand">
      <div class="brand-mark">A</div>
      <div><div class="brand-title">...</div><div class="brand-sub">...</div></div>
    </div>
    <nav id="nav"></nav>
    <div class="ring-wrap">
      <svg class="ring" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="18" fill="none" stroke="#C7EBDA" stroke-width="5"/>
        <circle id="ringFill" cx="22" cy="22" r="18" fill="none" stroke="#2FA97A" stroke-width="5"
                stroke-linecap="round" stroke-dasharray="113" stroke-dashoffset="113"
                transform="rotate(-90 22 22)"/>
      </svg>
      <div><div class="ring-num" id="ringPct">0%</div>
      <div class="ring-cap">of the companion<br>complete</div></div>
    </div>
    <button class="reset" id="resetBtn">Clear my saved progress</button>
  </aside>
  <main class="main">
    <div class="topbar">
      <div><h1 id="topTitle">Welcome</h1><div class="meta" id="topMeta">...</div></div>
      <div class="pill" id="topPill">Not started</div>
    </div>
    <!-- every <section class="section" data-key="..."> goes here -->
  </main>
</div>
```

The ring's two `stroke` values are the one place a hex belongs in a companion's own markup — the SVG needs literal colors, so a companion with a non-green accent sets them here (see §7, "Giving a companion its own accent color").

### Required per section type

- **Every quiz section** needs `.q-submit`, `.q-retake` and `.q-warn` inside it, plus a sibling `.q-result` card. The engine attaches the grading handlers to these; without them a student has no way to submit, and the engine throws while wiring the first quiz.
- **Every `.home-item[data-goto]`** needs a `.home-num` and a `.home-status` child. `paintNav()` writes "Done" / "Not started" into them on every navigation, so a landing-page button missing either one kills the whole page on first render.
- **Every `[data-check]`** needs a `.choices` and a `.feedback` element it can find. Two shapes both work — see "Checkpoint markup" in §7 for the full explanation and when to use which.
- **Every activity** needs its host element (usually `<div id="act-<name>"></div>` inside a `.card`) to exist in the HTML before the content script runs. A builder handed an id that isn't there throws on its first line, which stops the rest of the content script (§3). The manifest side matters too: a section that lists `activity:'x'` can only complete if something eventually sets `state.activities.x` to a non-null value, so an `activity` name with no builder or custom code behind it is a section that can never turn "done", and §12's 100% check catches it.
- **`.pager`** is guarded — a section without one just gets no Back/Next.

Two classes you'll see in `engine.js` are *created* by it rather than looked for: `.mod-badge` (the numbered circle in each nav row) and `[data-jump]` (the "revisit this section" links in a quiz result). Don't write either into a page.

### 6.4 The back-to-hub link

Every companion's sidebar opens with a plain link back to `hub.html`, sitting above `.brand`:

```html
<aside class="sidebar">
  <a class="back-to-hub" href="hub.html"><span class="arrow">&larr;</span>Back to hub</a>
  <div class="brand">...</div>
  ...
</aside>
```

`.back-to-hub`, `.back-to-hub:hover`, and `.back-to-hub .arrow` are already defined in `shared/styles.css` (color defaults to `--green`, so it needs no per-companion setup) — a companion may override just the `color` if it wants a brighter accent than `--green` gives it, the way Bacteria I (`--royal`) and Bacteria III (`--green-bright`) do. `engine.js` does not touch this element — it is a plain link, not a DOM hook, so a missing or renamed `.back-to-hub` breaks nothing else on the page. It is still required on every companion: it's the only way back to the dashboard once a student is inside one.

`href` is always the plain relative filename `hub.html`, never a full path — every companion's `.html` file, `hub.html`, and both `banks/` and `shared/` all live in one flat folder together (§2), so this link, and the `banks/…` paths `hub.html` itself loads, only work when that flat layout is kept.

---

## 7. HTML conventions

Every page section follows this shell:

```html
<section class="section" data-key="m1s1">
  <div class="card">
    <div class="eyebrow">Module 1 · Section 1</div>
    <h2>...</h2>
    ... content, figures, boxes ...
  </div>
  <div class="card pager"></div>   <!-- engine.js fills this with Back/Next -->
</section>
```

`engine.js` shows/hides sections by toggling `.active` based on `data-key`; it never reorders or removes them from the DOM.

**Section types**, distinguished only by whether they appear in `SECTION_REQ` / `QUIZ_KEY_FOR_SECTION`:

- **Content section** (`m1s1`, `m1s2`, …) — ends in one or more `.box.predict` blocks holding 2–3 `.cp-item[data-check]` questions (see §8). Gated by `SECTION_REQ`.
- **Landing / home page** (`m1home`, …) — always the *first* entry in a module's `sections` array. A `.home-list` of `.home-item[data-goto="..."]` buttons, one per sibling section. Never gated — always reads "done" once every real section under it is done.
- **Quiz section** (`m1quiz`, …) — always the *last* entry in a module's `sections` array. Gated by a first submission, not by score.
- **Flashcards** — its own top-level entry in `MODULES`, not nested inside any module. Ungraded.
- **Final exam** — its own top-level entry, always last in `MODULES`. Gated by a first submission.

### Landing-page markup

Every button needs all three children. `.home-num` and `.home-status` are written to by `paintNav()` on each navigation, so omitting either one breaks the entire page (§6).

```html
<div class="home-list">
  <button class="home-item" data-goto="m1s1">
    <span class="home-num">1</span>
    <span class="home-body">
      <span class="home-title">What enzymes do</span>
      <span class="home-desc">The catalytic cycle, and why enzymes are reusable.</span>
    </span>
    <span class="home-status">Not started</span>
  </button>
  ...
</div>
```

Use `&#10003;` as the `.home-num` for the row that points at the module's quiz.

### Quiz-section markup

```html
<section class="section" data-key="m1quiz">
  <div class="card">
    <div class="eyebrow">Module 1 · Mastery check</div>
    <h2>Module 1 quiz</h2>
    <p>...</p>
    <div class="quiz-body" data-quiz="m1"></div>
    <div class="controls" style="margin-top:22px">
      <button class="btn q-submit">Submit quiz</button>
      <button class="btn ghost q-retake">Start over</button>
      <span class="caption q-warn" style="margin:0"></span>
    </div>
  </div>
  <div class="card hidden q-result"></div>
  <div class="card pager"></div>
</section>
```

`data-quiz` holds the `POOL` `m` value, and must also appear as a value in `QUIZ_KEY_FOR_SECTION` keyed by this section's `data-key`. The `.q-result` card starts `hidden`; the engine unhides it after grading.

**Nothing here needs to change to support flagging.** Once a question is graded, `engine.js` appends a "☆ Flag for review" button directly into that question's own `.q` wrapper, right after its feedback text — it is generated entirely inside the shared quiz-grading code (`grade()` in `engine.js`), not part of this markup, and not something a content script needs to add, style, or wire up. The button toggles `state.flags[q.id]` and calls `saveState()` on click; nothing else in this markup is aware it exists. See §8 for why flagging is deliberately outside the completion model, and §9 for the storage shape.

### The review-list flashcard deck

The flashcard viewer has a third deck, **For your review list (N)**, shown only while N > 0. It contains the course cards that belong to the concepts that currently need attention (open concepts first, the ones missed twice before the ones missed once, then due re-checks), each card once. A line above the card says which concept it relates to and why ("Related to: Gram staining · Still needs practice"). When nothing is left to review, the viewer returns to the full course deck by itself. The review panel on each quiz page has a "Study the related flashcards" button that opens it directly.

**How a card is matched to a concept.** Bank files give each card only `id`, `t` and `d`, with no concept area, and the bank format was deliberately not extended (BankBridge rewrites banks from known fields). So `cardAreaIndex()` in `engine.js` matches by wording: a card belongs to an area when its front text (and, for a front written like "MIC (minimum inhibitory concentration)", the part before the parenthesis and the part inside it) appears in the area's name or in that area's quiz questions (stem, options, explanation); a singular front also matches a plural in the text. A card is linked to the area(s) where it appears most, within 60% of the best match, never to a single stray mention. A card that matches nothing is linked to nothing; it is never guessed, and it always remains in the course deck. If a card object ever carries an explicit `area` that is a real concept area, that is used instead of any matching. **This is a heuristic.** It works best for term-style fronts ("Peptidoglycan") and will skip question-style fronts ("What does the Gram stain distinguish?"). To review it, open the review-list deck with a few concepts queued and read the "Related to" line on each card. If a card is attached to the wrong concept, or a concept has no cards, the fix is to reword the card's front so it uses the same term the questions do.

### Flashcard markup

The card is a genuine two-faced flip, not a text swap. The back face exists in the DOM from the start, pre-rotated 180° and hidden by `backface-visibility` until the whole card rotates:

```html
<section class="section" data-key="flashcards">
  <div class="card">
    <div class="eyebrow">Retrieval Practice</div>
    <h2>Flashcards</h2>
    <p>...</p>
    <div class="fc-stage">
      <div class="fc" id="fcCard" tabindex="0" role="button" aria-label="Flashcard. Press Enter to flip.">
        <div class="fc-face fc-front"><div>
          <div class="fc-term" id="fcFront"></div>
          <div class="fc-hint">click, tap, or press Enter to flip</div>
        </div></div>
        <div class="fc-face fc-back"><div class="fc-def" id="fcBack"></div></div>
      </div>
    </div>
    <div class="fc-bar">
      <button class="btn ghost" id="fcPrev">Previous</button>
      <span class="fc-count" id="fcCount"></span>
      <button class="btn ghost" id="fcNext">Next</button>
    </div>
  </div>
  <div class="card pager"></div>
</section>
```

Every ID from the §6 table is here, but the IDs alone don't produce a flip — `#fcCard` needs `.fc` for the 3D transform and transition, `#fcFront`/`#fcBack` need to sit inside `.fc-face.fc-front` / `.fc-face.fc-back` for `backface-visibility` to apply, and `.fc-stage` needs to wrap the whole thing to supply the CSS `perspective` the rotation is judged against. `paintCard()` toggles a `.flipped` class on `#fcCard`; it never touches the two faces' own visibility directly. Build this from the six-ID list alone, satisfying each ID with whatever div shape seems reasonable, and you'll get a page with zero console errors and zero missing hooks — and a card that shows both faces at once, or the back face permanently mirrored, because nothing here throws on the wrong structure the way a missing ID does.

One consequence worth stating plainly: **nothing in this system should ever apply a blanket `transform: none` to `.fc` or its ancestors.** The flip *is* a transform; resetting it flattens every flashcard deck in every companion at once. If a future problem looks like it needs a broad transform reset, the fix belongs somewhere narrower than a rule matching `.fc`.

**Student-made cards need no extra markup — but they do lean on this markup's shape.** `engine.js` adds a "Course cards | My cards" switch above `.fc-stage`, an "Add your own card" panel as a new `.card` directly after the deck's card, and an empty-state message, all built in script. To find where to put them it looks for: the `.card` that contains `#fcCard`, the `.fc-stage` around it, and the parent of `#fcPrev` (the `.fc-bar`). The markup above already satisfies all three. A flashcards section that wraps these differently still works (the deck is unaffected and the panel build is inside a `try/catch`, so a failure is logged and nothing else on the page stops) but it may place the switch or panel in the wrong spot — copy the markup above verbatim, as §11 already says.

### Figure markup

Figures use `.figure` with a `p.caption` — **not** `<figure>` / `<figcaption>`, which have no styling in this system.

```html
<div class="figure">
  <svg viewBox="0 0 640 150" role="img" aria-label="...">...</svg>
  <p class="caption">What the figure is showing.</p>
</div>
```

### Checkpoint markup (`.box.predict` / `.box.apply`)

Two shapes exist in the wild, and `wireCheckpoints()` resolves both — this isn't a legacy shape being phased out, it's a real branch in `engine.js` that every companion can rely on:

**Preferred shape**, `.choices` and `.feedback` nested inside a `.cp-item[data-check]` wrapper:

```html
<div class="box predict">
  <h3><span class="tag">CAN YOU PREDICT IT?</span></h3>
  <div class="cp-item" data-check="c1">
    <p>Question stem goes here.</p>
    <div class="choices"></div><div class="feedback"></div>
  </div>
  <div class="cp-item" data-check="c1b">
    ...
  </div>
</div>
```

**Compact shape**, `data-check` on the `.choices` element itself, with `.feedback` as a sibling under the same parent — no wrapper needed when the question stem is already provided by surrounding prose rather than a dedicated `<p>` per item:

```html
<div class="box apply">
  <h3><span class="tag">1 · INTERPRET</span></h3>
  <p>On a Michaelis-Menten plot, which point on the horizontal axis corresponds to K<sub>m</sub>?</p>
  <div class="choices" data-check="c8"></div><div class="feedback"></div>
</div>
```

`wireCheckpoints()` checks `host.classList.contains('choices')` to tell which shape it's looking at: if the `[data-check]` element itself is the `.choices` div, it looks for `.feedback` as a sibling under the same parent; otherwise it looks for both `.choices` and `.feedback` as children of the `[data-check]` host. The failure mode doesn't split by shape, it splits by *which* element is missing: a missing `.choices` throws immediately while the engine is wiring the option buttons, in either shape, which stops the whole page per §3. A missing `.feedback` is quieter — the options still render and the page keeps loading, but the first click on any option throws inside `answer()`, which is much easier to miss while testing since the checkpoint looks fully working until someone actually answers it.

Prefer the wrapped shape for new content — it reads better in the HTML and keeps the question stem, options, and feedback visibly grouped. The compact shape stays fully supported because retrofitting every existing companion's Apply boxes to add a wrapper `<div>` around markup that already works isn't worth the churn.

`engine.js` shuffles and renders the options into whichever `.choices` element it finds, and wires retry-until-correct behavior (§8) the same way regardless of shape. `.box.apply` is styled differently from `.box.predict` but behaves identically — use it for a slightly higher-stakes "apply what you know" question at a section's end; use `.box.predict` for the lighter mid/end-of-section checks. Both are valid hosts for either markup shape.

### Design tokens

All color, spacing, and radius values are CSS custom properties on `:root` in `shared/styles.css` — never hardcode a hex value in a companion's own markup or inline styles.

```css
--green / --green-bright / --green-soft / --green-line     primary, success, correct
--violet / --violet-soft                                    clinical/real-world connection callouts
--amber / --amber-soft                                       predict-it checkpoints
--rose / --rose-soft                                          incorrect, needs review
--blue / --blue-soft                                          available for a topic's own accent needs
--ink / --ink-mid / --ink-soft                                 text, in decreasing emphasis
--page / --card / --line                                       backgrounds and borders
--r-lg / --r-md / --r-sm                                        border-radius scale
--shadow                                                          the one card shadow, used everywhere
--ok / --ok-soft                                                   optional, defined by a companion's own <style>: a "correct / complete" green for a companion whose --green family is another color; activities.js reads them with a green fallback
```

Reusable component classes already exist for: cards (`.card`), callout boxes (`.box.predict` / `.box.apply` / `.box.clinical`), answer choices (`.choice` / `.choices`), buttons (`.btn` / `.btn.ghost`), figures (`.figure` / `.caption`), summary lists (`.keypoints`), plain `<table>` (styled directly, no class needed), sort/match rows, drag-and-drop (`.dnd-*`), the activity toolkit's own pieces (`.act-*`, injected by `activities.js` rather than defined in `styles.css`; see §5), flashcards (`.fc-*` — see "Flashcard markup" above for the required structure, not just the class names), the quiz results screen (`.score-hero` / `.bd-row`, plus `.next-step` and the "Practice the concepts you missed" button — see §8), and the module lock screen (`.lock-card`, built automatically by `engine.js` — see §5, `unlockAfter`). Check `styles.css` before inventing a new class — a new topic's *content* should rarely need new CSS, only new combinations of what's already there.

### Activity markup (the hands-on card)

An activity needs only a host element. Bacteria I puts each one in its own card between the section's explanation and its checkpoint card; where it sits is a page decision, not something `engine.js` cares about.

```html
<section class="section" data-key="m1s1">
  <div class="card"> ...explanation, key points, figures... </div>
  <div class="card">
    <div class="eyebrow">Hands-on</div>
    <h2>Match each clue to its microbe</h2>
    <p class="caption">Drag each label onto the description it fits.</p>
    <div id="act-microbeMatch"></div>       <!-- the builder fills this in -->
  </div>
  <div class="card"> ...the .box.predict checkpoints... </div>
  <div class="card pager"></div>
</section>
```

```javascript
// in the content script, after the derivation block
Act.dnd('act-microbeMatch', {name:'microbeMatch',
  pills:['Prion','Virus','Bacterium'],
  rows:[{text:'Protein only, with no DNA or RNA...', answer:'Prion', why:'Prions are acellular and...'}, ...]});
```

The manifest section is `{ key:'m1s1', label:'...', checks:[...], activity:'microbeMatch' }`. The builder supplies its own Check and Try again buttons and score line, so the card needs nothing but a heading and the empty host.

### Match / sort activity markup

**Prefer `Act.sort`.** It produces exactly the markup below, along with the Check, Try again, and score behavior, so this section is the reference for a bespoke activity that no builder covers, and for reading what a builder puts on the page.

The three classes are `.sort-row` (the row), `.sort-text` (the prompt) and `.sort-opts` (the button strip). Option buttons are `.opt`, and they carry exactly three states: `.sel` (student's pick), `.reveal` (the correct answer, added on Check) and `.bad` (a pick that was wrong, added on Check). There is no `.on` or `.ok` / `.no` — those don't exist in the stylesheet and render as unstyled buttons.

```javascript
var row = el('div','sort-row');
row.appendChild(el('div','sort-text', item.text));
var opts = el('div','sort-opts');
shuffle(OPTIONS).forEach(function(o){
  var b = el('button','opt',o); b.dataset.val = o;
  b.onclick = function(){ picks[r] = o;
    opts.querySelectorAll('.opt').forEach(function(x){ x.classList.remove('sel'); });
    b.classList.add('sel'); };
  opts.appendChild(b);
});
row.appendChild(opts);
```

Report the score into a `<span class="caption">`, and follow the save/clear pattern in §8.

### Giving a companion its own accent color

Each companion should be visually distinct. Override the primary token family in a `<style>` block in the page's own `<head>`, after the stylesheet link — never by editing `shared/styles.css`, which would re-theme every companion at once.

```html
<link rel="stylesheet" href="shared/styles.css">
<style>
  :root{
    --green:#0D8C80; --green-bright:#14B8A6;
    --green-soft:#DDF5F1; --green-line:#A6E3DA;
  }
</style>
```

The token names stay `--green*` regardless of the actual color — they mean "this companion's primary", and renaming them would mean touching every shared component.

Three places don't pick the override up on their own, because they hold literal hex values:

1. **The progress ring**, whose two `stroke` attributes are inline SVG (§6). Set them to your accent and a light tint of it.
2. **A darker "green ink" text color (`#1C7554`)** appears in about fourteen rules in `styles.css` — sidebar current-state, `.pill`, `.ring-num`, `.opt.sel` and similar. Add a one-line override for any that look wrong: e.g. `.opt.sel{color:#0A6B62}`.
3. **`engine.js` hardcodes `#2FA97A`** for the "Strong" bar in the post-quiz mastery breakdown. Override with `.bd-fill{background:var(--green)!important}` — the `!important` is needed because the engine writes that color as an inline style.

Colors in use so far: HTML question-bank editor — deep indigo; Enzymes — green; Amino Acids &amp; Proteins — teal/cyan; Hemoglobin — deep crimson; Membrane Transport &amp; Signal Transduction — warm amber/gold; Nucleotides — slate blue/steel; Glycogen Metabolism — burnt orange/terracotta; Citric Acid Cycle — deep plum.

---

## 8. The completion model

This is the part most worth understanding deeply before extending it, because it's easy to accidentally build a section that can never read "done."

**A section counts as complete when:**
- every checkpoint listed in its `SECTION_REQ` entry has been answered **correctly** (not just attempted), **and**
- if it lists an `activity`, that activity has been checked/submitted at least once (correctness not required — activities are practice, not assessment).

**Checkpoints retry until correct.** A wrong answer shows "Not quite — try again" and stays open; only a correct answer locks the question and saves `state.checks[id] = realIndex`. This exists specifically so one honest mistake can never permanently block a section — do not reintroduce a "one attempt, then locked" pattern.

**Submitting a quiz with unanswered questions doesn't grade it.** `grade()` in `engine.js` checks every pick before scoring anything; if any are still `null` it adds a `.q-missing` class (styled in `shared/styles.css`) to each unanswered question, moves keyboard focus and scroll to the first one, and updates `.q-warn` with a count — then returns without touching `state.best` or rendering a result. The highlight on a given question clears the moment it's answered, live, without waiting for another submit attempt. Nothing about this is topic-specific; a new companion gets it for free from the shared quiz markup in §7.

**Activities save on Check, clear on Reset.** Every activity, whether built by `Act` or written by hand, follows the same three-call pattern (`Act.done(name, data)` makes exactly these calls, and `Act.done(name, null)` is the reset):
```javascript
// on "Check":
state.activities.<name> = <whatever data reconstructs the layout>;
saveState(); paintNav();
// on "Try again":
state.activities.<name> = null;
saveState(); paintNav();
```
`sectionComplete()` only checks whether `state.activities.<name>` is non-null — it doesn't grade it. If a new activity type needs *correctness*, not just *attempted*, to gate a section, that's a deliberate design change and should be called out, not assumed.

**Activities that are explored rather than checked.** `explore`, `stages`, `stepper`, and `predict` have no Check button, so they set `state.activities[name] = true` once the whole activity is finished: every part opened, every stage answered correctly, every scene played to its last step, every item predicted (right or wrong, since the prediction is the point). Partial progress is kept under the reserved `<name>_v` and `<name>_n` keys (§9), which the completion rules never look at. Resets can un-complete a section: `Try again` on `dnd`, `sort`, `order`, and `fill`, and `Start this case over` on `stages`, all write `null`, exactly as the reset pattern above requires, so a student who resets a finished activity sees its section drop back to "not started" until they finish it again.

**Quiz sections and the final exam** complete on first submission, at any score — completion and mastery are different things. Don't gate a quiz section on a passing score. `sectionComplete()` is unchanged by the assessment fixes. What changed is that the page no longer hides the difference: every quiz page opens with a three-part status strip, and a quiz's row on a module overview page reads, for example, "Done · best 75% · review pending".

| Indicator | Means | Source |
|---|---|---|
| Practice completed | How many of the checkpoint-and-activity sections under this quiz are done (all modules' sections, for the final exam) | `sectionComplete()` per section |
| Assessment result | Best percentage, and the most recent normal attempt | `state.best[quiz]`, `state.lastScore[quiz]` |
| Review pending | How many concepts in this quiz's scope are still on the review queue | `state.pending` |

**Submit grades an attempt exactly once.** `grade()` returns immediately if the attempt has already been graded, the Submit button is disabled and relabeled "Submitted", and every attempt carries an id that is written to `state.recorded` in the same save that adds to `areaStats`, so even a stray second call cannot add to the saved counts. Any Flag button already on a question is removed before a new one is added. "Start over" and any new targeted round start a new attempt, which re-enables Submit.

**The review queue.** A concept area is added to `state.pending` when a graded question about it is missed, and removed only when a *later* graded question about that same area is answered correctly (all questions asked about it in that attempt, with at least one asked). An area that a follow-up round did not ask about **stays pending**. This is the rule that prevents early "all solid" messages: the panel says "Nothing is waiting for review" only when `pendingInScope()` is genuinely empty. Each queued concept has a status: `waiting` (missed, not asked again yet) or `retry` (asked again, missed again). After any graded attempt that started with queued concepts, the results screen reports it truthfully, for example "2 concepts improved; 1 still needs practice; 1 not yet reassessed. Reassessed 3 of 4 concepts that were waiting for review." The queue is scoped per quiz: a module quiz sees the areas its own questions are tagged with, the final exam sees every area.

**Fixed is not mastered: the spaced re-check.** When a queued concept is answered correctly, it moves from `state.pending` to `state.spaced` with `step:0` and a `due` time `RECHECK_DAYS[0]` (2) days away. It is not counted as mastered, and the results panel says so ("Concepts you fixed are not marked as mastered yet"). Once `due` has passed, the concept reappears on the review list with a **Recheck due** chip and is included in targeted rounds. Passing a due re-check moves it to `step:1` with `due` `RECHECK_DAYS[1]` (7) days out; passing that moves it to `state.mastered`. Missing the concept at any point, including a miss while a re-check is scheduled but not yet due, or a miss of a mastered concept, deletes its schedule and puts it back on `state.pending` with status `retry`, reported as "slipped back". A correct answer given *before* a re-check is due changes nothing (it cannot advance the schedule early). A due re-check that an attempt never asked about simply stays due. To change the schedule, edit `RECHECK_DAYS` at the top of the quiz block in `engine.js`; nothing else needs touching. The "review pending" indicator, the module-overview label, and the number in "Review next" all count open concepts plus due re-checks, never concepts whose re-check is still in the future.

**The review panel** ("Review next: 3 concepts") lists each queued concept with its status and a button that opens the exact place that teaches it: the section `AREA_SECTION` names, scrolled to that section's hands-on activity (`#act-<name>`), or to its first `.hands-card` if it has no activity. Chips read *Newly missed*, *Not yet reassessed*, *Still needs practice*, *Slipped back*, or *Recheck due*. A footer notes how many fixed concepts are scheduled for a re-check (and the next date) and how many are mastered. If any flashcards relate to the listed concepts, a second button, "Study the related flashcards", opens the review-list deck (§7). It is shown after grading and again on every later visit to the quiz page while anything needs attention, so it survives navigation and reloads.

**The targeted round.** The panel's "Practice these N concepts" button builds a short round from `POOL` covering **every** queued concept in scope: at least one question per concept (two each when three or fewer are queued), and within a concept the questions the student has met least come first (`state.seenQ` counts how often each question id has been graded, and the questions in the attempt just finished sort last). The cap only limits extras; it never drops a concept. This runs in a `mode:'mastery'` pass through the same render/grade functions as a normal quiz, with one difference: a targeted-round score does **not** overwrite `state.best[quizId]` or `state.lastScore[quizId]`. Its answers still count as evidence (`areaStats`, `seenQ`) and still update the review queue. Nothing needs adding to a content script for any of this; it falls out of `POOL` entries tagged with `area` and `AREA_SECTION`.

**Landing pages and flashcards are never gated.** They exist outside the checks/activities system entirely (`sectionComplete()` returns `true` for any key with no `SECTION_REQ` entry and no quiz mapping). This is why the ring can reach exactly 100% without a student ever opening a module overview page.

**Flagging a question does not touch completion at all.** After a module quiz or the mastery exam is graded, each question gets a "Flag for review" toggle (added in `engine.js`, alongside the feedback text) that writes to `state.flags[questionId]` — see §9. `sectionComplete()`, `isGradable()`, and every gating check in this document and in the hub are entirely unaware `state.flags` exists. A student can flag every question in a quiz and it has zero effect on whether that section, that module, or the whole companion reads as done. This is deliberate: flagging is a personal "come back to this" marker, not a second assessment layer, and it would be a mistake to let it interact with the ring.

---

## 9. Storage shape

```javascript
state = {
  checks: { c1: 0, c4b: 2, ... },        // checkpoint id -> the option index the student picked (only set on correct answer)
  activities: {                           // activity name -> whatever shape that activity needs to restore itself
    microbeMatch: { layout: [...] },      //   Act.dnd (Act.sort saves {picks}, Act.order {seq}, Act.fill {v})
    cellExplore: true,                    //   Act.explore / stages / stepper / predict: true once finished
    cellExplore_v: ['capsule', ...],      //   partial progress, never read by the completion rules
    sporeCase_n: 2,                       //   Act.stages: stages completed so far
    selectionLab_g: 3,                    //   Act.gate: index of the option the student chose
  },
  best: { m1: 87, m2: 100, final: 76 },   // quiz id -> best percentage across attempts
  flags: { 'ENZ-014': 1788860760164, ... }, // question id -> the Date.now() timestamp when flagged
  lastSection: 'm2s3',                    // FLOW key of the section the student was last on, or null
  areaStats: {                            // concept area -> real per-question evidence from graded quizzes
    'Enzyme kinetics': { asked: 6, right: 4, lastAcc: 0.5, lastTs: 1788965696464 }
  },
  myCards: [                              // flashcards the student wrote themselves (see below)
    { id: 'u3k9fz2a', t: 'Front text', d: 'Back text', ts: 1788965696464 }
  ],
  pending: {                              // the review queue (see below): area -> status
    'Enzyme kinetics': { status: 'waiting', ts: 1788965696464 }   // 'waiting' | 'retry'
  },
  attempts: {                             // ONE unfinished quiz attempt per quiz id; deleted on grading
    m1: { id:'a9x2k', mode:'normal', heading:'', targets:[], qids:['ENZ-004',...],
          orders:[[2,0,1,3],...], picks:[null,2,...], ts:1788965696464, deadline:null }
  },
  recorded: { 'a9x2k': 1788965696464 },   // attempt ids already counted (newest 40 kept)
  lastScore: { m1: 63 },                  // most recent NORMAL attempt per quiz (best stays in `best`)
  seenQ: { 'ENZ-004': 2 },                // question id -> times graded; drives "prefer unfamiliar"
  spaced: {                               // fixed concepts waiting for a re-check: area -> schedule
    'Enzyme kinetics': { step: 0, due: 1789138496464 }            // step 0 = first re-check, 1 = second
  },
  mastered: { 'Enzyme basics': 1789138496464 }                     // area -> when it passed its last re-check
}
```

Stored under `companion.<TOPIC_ID>.v1` via `localStorage`, with an in-memory fallback (`memory[KEY]`) if storage is blocked (private browsing, restrictive iframe settings) — verified working on this project's Brightspace instance, but always re-check `storageWorks` rather than assuming.

The `v1` suffix exists so a future breaking change to the state shape can bump to `v2` without corrupting old saved progress. `flags`, `lastSection`, and `areaStats` were all added to this shape after `v1` already shipped on live companions; `loadState()`'s `Object.assign(blank, ...)` pattern is what let that happen without a version bump — any saved state from before a field existed simply gets it filled in from `blank` on next load, because the key is absent from the saved JSON rather than present with a conflicting shape. **This is the safe way to add a field to `state` going forward: extend `blank` in `loadState()`, never assume the field exists in old saved data, and never repurpose an existing key's meaning** (that would need the real `v2` bump this suffix exists for).

**Reserved key suffixes under `activities`.** The builders keep partial progress next to the completion value, under `<name>_v` (which items, parts, or scenes have been visited or answered), `<name>_n` (how many stages of a case are done), and `<name>_g` (the answer to a predict-first gate). `sectionComplete()` reads only `state.activities[<the manifest's activity name>]`, so these keys never count toward completion. It also means a manifest must never use a name ending in `_v`, `_n`, or `_g` as an `activity:` value, and two activities in one companion must not have names that differ only by such a suffix. Adding keys under `activities` needs no change to `blank` in `loadState()`, since the `activities` object already exists.

**The review queue, saved attempts, and the once-only guard (`pending`, `attempts`, `recorded`, `lastScore`, `seenQ`).** All five were added after `v1` shipped, the same safe way `flags` and `areaStats` were: extend `blank` in `loadState()`. `cleanReviewState()` in `storage.js` then rebuilds them into a known-good shape on every load (a save can come from an older version or a hub backup), dropping anything that does not fit. `pending` is a to-do list, not a tally: unlike `areaStats` it records what is *still open*. An unfinished attempt is written by `saveAttempt()` on every answer and as soon as a round is drawn, holds question **ids** (never text), the option order, the picks, and a `deadline` that is preserved but not currently set by any companion quiz (companion quizzes have no timer; hub exams do, §14.11). On load `tryRestore()` accepts a saved attempt only if every id still exists in `POOL`, every saved option order is a valid permutation for its question, every pick is `null` or a valid index, and its id is not in `recorded`; otherwise it is discarded and a fresh attempt is drawn. Grading deletes the saved attempt, and "Start over" replaces it. **Reset progress** clears all of it, as it does everything but `myCards`.

**`spaced` and `mastered`** (the re-check schedule) are cleaned by the same `cleanReviewState()`: an entry without a numeric `due` is dropped, `step` is forced to 0 or 1, and a `mastered` value that is not a number is dropped. `due` is an absolute time, so it keeps counting while the student is away, and a concept that falls due while the page is closed appears on the review list the next time the quiz page loads.

**Where a flag can be set, and where it's read.** A flag can only be created after a quiz question is graded — see §7's Quiz-section markup update, and §8 above for why this is deliberately outside the completion system. `state.flags` is written by this companion's own page during normal use, exactly like `checks`, `activities`, and `best`. The one exception in the whole project to "a companion's storage is written only by that companion's own page" is the hub, which — after the student explicitly removes a flag from its Flagged questions list — writes `false` into that one key of that one companion's stored object. §14 covers why that specific exception exists and how narrowly it's scoped.

**Resuming a section, and linking to one directly.** `state.lastSection` is written by `engine.js`'s `goTo()` on every navigation, and mirrored into a `?s=<sectionKey>` query parameter on the page's own URL via `history.replaceState` — deliberately `replaceState`, not `pushState`, so browsing between sections never grows the browser's back/forward history; the in-page Back/Next pager already covers that. On load, `engine.js` resolves the starting section itself: an explicit `?s=` in the URL wins first (so a link posted in Brightspace always opens where it says it will, even for a student with older saved progress elsewhere), `state.lastSection` resumes a returning student otherwise, and section 0 is the final fallback — including when a `?s=` value or a saved key doesn't match any real section, which is treated as absent rather than as an error. A locked module's sections already show their lock card instead of real content regardless of how a student navigates there (§8), so landing on one via a resumed or linked section needs no extra handling beyond what already exists for a normal nav click.

**Recording real per-concept evidence.** `grade()` already computes a per-`area` right/wrong breakdown (`byArea`) for every quiz submission, purely to render the "Mastery by concept area" panel on the results screen. `state.areaStats` is that same breakdown, kept: on every submission — a retake, a `mode:'mastery'` targeted round, not only a new personal best, since each is real evidence about specific concepts even when the overall score isn't a new high — `grade()` adds that attempt's `asked`/`right` into the matching area's running totals and overwrites `lastAcc` (that attempt's own accuracy for the area) and `lastTs`. `lastAcc` is deliberately *not* part of the running average: it exists so a later reader can tell "this area's lifetime accuracy looks fine, but the most recent attempt on it came back wrong" apart from "this area has always been shaky" — see §14.9 for what the hub does with that distinction. This is the one piece of the completion/mastery system that exists purely to feed the hub; a companion's own page never reads `state.areaStats` back.

**The student's own flashcards (`state.myCards`).** A list of `{id, t, d, ts}`: a short unique `id`, the front `t`, the back `d` (the same field names as `CARDS`), and the time it was made. The rules, all enforced by `cleanMyCards()` in `storage.js`:

- `id` must be 1–40 characters of letters, digits, `_` or `-`, and unique within the list. This is what lets the hub safely build its `my:<companion>:<id>` mark key from it (§14.10).
- Front: at most **120** characters. Back: at most **300**. At most **200** cards per companion. These are `MYCARD_LIMITS`.
- Both sides must have text after trimming. Anything that doesn't fit (wrong type, bad id, empty side, duplicate id, over the count limit) is silently dropped, and over-long text is cut to the limit.

`loadState()` runs every load through `cleanMyCards()`, because a saved state can arrive from an older save (the key is simply absent), or from a backup file the hub restored. This follows the safe pattern already described above: `myCards` was added to `blank` in `loadState()`, with no `v2` bump.

**Student cards are not progress.** They are never read by `sectionComplete()`, `isGradable()`, any quiz, the progress ring, or any hub exam or adaptive review, exactly like `flags` (§8). The **Reset progress** button in the companion keeps them: it clears the saved state and writes back only `{myCards: [...]}`, and its confirmation says how many cards will be kept. Deleting a student's own writing as a side effect of "reset progress" would be a far worse surprise than leaving it.

---

## 10. Question-writing standard

Every checkpoint and every `POOL` question follows the same rules, sourced from the course's question-writing guidelines:

- Single best answer, never "select all that apply"
- Independent of other items — no item should depend on a previous one
- Clear, focused stem in **positive** wording (no "NOT," "EXCEPT")
- 3–5 homogeneous, parallel-structured answer choices
- Every distractor should be plausible, not a throwaway
- No absolute terms ("always," "never," "only," "all")
- No vague terms ("frequently," "usually," "commonly")
- No "All of the Above" / "None of the Above"
- Every question carries a `why` — a teaching rationale shown after answering, not just "correct"/"incorrect"

`POOL` questions additionally carry a `level` (`concept` / `application` / `integration`) used to build a stratified final exam, matching the source guidelines' 8/10/7 split by default (configurable per topic via `FINAL_EXAM_MIX`).

---

## 11. Building a new companion — checklist

1. **Copy `<topic>.html`** from the reference implementation (`signaling.html`, not an unmigrated companion — see the fifth correction at the top of this document). Update the `<title>`, sidebar brand text, and course code. Keep the page shell from §6 exactly as it is — the `.app` wrapper, the sidebar with `#nav` and the ring, the topbar, `#resetBtn`, **and the flashcard section's full markup from §7** are all wired to by `engine.js`. Copying these verbatim is much safer than rebuilding them from the ID lists in §6 alone — the flashcard flip in particular has no visible failure mode from a missing ID, only from a wrong shape.
   Then set the companion's accent color per §7, including the ring's two inline `stroke` values.
2. **Write `banks/<new-topic>.js`**: set `TOPIC_ID` / `TOPIC_TITLE`, then `CHECKPOINTS`, `CARDS`, `POOL` — assign stable IDs as you go, not after the fact.
3. **Write `banks/<new-topic>.manifest.js`**: this is now where the module/section structure actually lives — `MODULES`, `SECTION_REQ`, `QUIZ_KEY_FOR_SECTION`, and `AREA_SECTION` all come from here, not from the HTML. Follow the `MANIFEST` shape in §5's first table: every module's `sections` array, in order, landing page first and (if the module has one) quiz last; `checks`/`activity`/`quiz` on each section that needs them; `areaSection` mapping every `POOL` area to the section a student should revisit. §14.6 has a short checklist for a manifest specifically.
4. **Copy the derivation block into the content script** exactly as shown in §5's second table — the `MANIFEST.modules.map(...)` for `MODULES`, then `FLOW`, `UNGRADED`, `SECTION_REQ`, `QUIZ_KEY_FOR_SECTION`, `AREA_SECTION`. Set `BADGES` for this topic's sidebar icons, and `MODULE_QUIZ_SIZE`/`FINAL_EXAM_MIX` if they differ from the defaults — these four are the only structure-adjacent things still written by hand in the content script. Then build this topic's activities after the derivation block by calling the `Act` builders from §5 (`Act.dnd`, `Act.sort`, `Act.order`, `Act.fill`, `Act.explore`, `Act.stages`, `Act.stepper`, `Act.predict`, `Act.gate`). Write a hand-built activity only when none of them fits, and register it with `Act.register()` so it can be tested (§12). The figures the `explore` and `stepper` builders display are SVG strings written in the same script. `bacteria1.html` is the reference for all of this.
   *Easiest way to get this wrong:* editing the derivation block to add a shortcut for this topic instead of changing the manifest data it reads. If a new companion's derivation block doesn't match the reference implementation's line for line, the structure has drifted back into being hand-typed — fix the manifest, not the derivation.
5. **Leave `shared/` untouched.** If something in `shared/` genuinely doesn't fit a new topic, that's a signal to generalize it, not to fork it. That includes `activities.js`: if a builder almost fits, add an option to the builder so every companion benefits, or write a custom activity in the content script. Don't copy the file into one topic's version of it.
6. **Update the eight `<script>`/`<link>` tags** (§2) to point at the new bank and manifest filenames; leave the order exactly as in §3 — the manifest loads second, right after the bank and before `storage.js`, and `activities.js` loads fifth, right after `helpers.js` and before the content script.
7. **Test** per the checklist below before calling it done.

---

## 12. Testing checklist

Run this on every new companion (and after any change to `shared/`, since a shared-file bug now affects every companion at once):

- [ ] Every JS file passes a syntax check on its own (`node --check`)
- [ ] Serve the real folder over HTTP (not `file://`) and confirm all files return 200 — relative paths between `<topic>.html`, `banks/`, and `shared/` are the most common way this breaks

**Smoke test — do this first, it catches the §5 and §6 failures in seconds:**

- [ ] Load the page and confirm zero console errors
- [ ] In the console, confirm `typeof Act` is `'object'`. `'undefined'` means `activities.js` didn't load, or loads after the content script (§3)
- [ ] Confirm the page is not *just* a sidebar. A rendered nav above a blank page with one console error means a missing global or DOM hook, not a CSS problem — read the error, then check §5 and §6. `FLOW` is the usual culprit, and a malformed or missing `banks/<topic>.manifest.js` is the usual reason `FLOW` (and everything derived alongside it) never got built in the first place.
- [ ] Confirm the topbar shows a section title and a status pill, and the ring shows `0%` rather than staying empty
- [ ] Open the first content section and confirm answer buttons actually appear under a checkpoint (they're injected by the engine, so an empty `.choices` means the engine stopped before reaching them)
- [ ] Open a quiz section and confirm questions render *and* a Submit button is present
- [ ] Open a section with a hands-on activity and confirm its host element isn't empty. An empty `#act-<name>` means its builder never ran, usually because an earlier line in the content script threw (a builder handed an id that doesn't exist throws immediately)
- [ ] Open the flashcards section, confirm a term appears on the card, **then click it and confirm the card actually rotates to show the answer** — a card that shows both the term and the answer at once, or shows the answer mirrored/upside-down without rotating, means the flashcard markup doesn't match §7 even though every ID from §6 is present. Zero console errors will not catch this.
- [ ] On the flashcards page, confirm the "Course cards | My cards" switch appears above the card and the "Your own cards" box appears below it. Add a card, confirm it appears in the list and in the **My cards** deck, then reload and confirm it is still there. Edit it, then delete it (confirm the delete asks first). Add a card whose front is `<b>test</b>` and confirm it shows as the literal characters, not bold text.
- [ ] Confirm `state` has empty `checks`, `activities`, `best`, `myCards`, `pending` and `attempts` on a first-ever visit

**Then the full pass:**

- [ ] Click a checkpoint's wrong answer — confirm it stays open and lets you try again; click the right one — confirm it locks and saves
- [ ] Complete every checkpoint and activity across every section, submit every quiz and the final exam, and confirm the progress ring reaches **exactly 100%** — not 95%, not 100% with a section still showing "not started." If it can't reach 100%, either a section is wired into `SECTION_REQ` with a checkpoint ID that doesn't exist in `CHECKPOINTS`, or an activity name mismatch between the HTML and the content script.
- [ ] Drive every activity with `Act.solveAll()` (from the console or an automated test), then confirm each `activity:` name in the manifest reads non-null in `state.activities`. First confirm none is missing a `solve()`:
  ```javascript
  MANIFEST.modules.forEach(function(m){ m.sections.forEach(function(s){
    if(s.activity && !Act.registry[s.activity]) console.log('no solve() for', s.activity);
  });});
  ```
  A custom activity that never called `Act.register()` shows up here, and one that uses `Act.gate()` also needs its registered `solve()` to call the gate's `solve()`, because gates are not in the registry
- [ ] Reload after partial progress and confirm it's still there
- [ ] After finishing everything, reload and open each section that has an activity. Restoring saved progress runs different code from a fresh load (a saved gate answer, for example, fires its callback during the `Act.gate()` call itself, before the code after it has run), so a page that works on a first visit can still throw on the second
- [ ] Retake a quiz and confirm both the question set and each question's option order reshuffle
- [ ] Submit a quiz with at least one wrong answer and confirm "Review next: N concepts" appears, that each concept's button opens its section scrolled to the activity, and that "Practice these N concepts" builds a round covering **every** queued concept
- [ ] Answer a targeted round so that all but one concept is right, and confirm the result reads "N concepts improved; 1 still needs practice" and does **not** say "Nothing is waiting for review"
- [ ] Reload, and confirm the review panel and the "review pending" label on the module overview row are still there
- [ ] Click Submit repeatedly (or re-enable it in the console and click): confirm `state.areaStats` and `state.seenQ` do not change after the first grading and each question has exactly one Flag button; confirm "Start over" re-enables Submit
- [ ] Answer part of a quiz, reload, and confirm the same questions, the same option order, and the same selections come back with a "Restored your unfinished attempt" message; confirm a graded attempt is not restored
- [ ] Fix a missed concept, and confirm it shows "improved" with a re-check in 2 days, is **not** called mastered, and does not count under "review pending" until it is due. To test without waiting, set that concept's `due` in `state.spaced` to a past time (browser console), reload, and confirm it returns as "Recheck due"
- [ ] Pass a due re-check and confirm the next one is 7 days out; pass that one and confirm the concept is counted as mastered; miss a concept in any of these states and confirm it returns as "slipped back"
- [ ] Queue a concept, open the flashcards, and confirm the "For your review list" deck appears with sensible cards and a "Related to" line that names the right concept; confirm it disappears (back to the course deck) once nothing is left to review
- [ ] Confirm each quiz page shows three separate indicators (practice completed, assessment result, review pending) and that a 0% submission still counts as complete
- [ ] Click a module title in the sidebar — confirm it navigates to that module's landing page; click the chevron — confirm it only expands/collapses the list without navigating
- [ ] If any module declares `unlockAfter`: confirm it shows the lock card and nav badge with the other required modules incomplete, confirm "Take me to what's left" jumps to the first incomplete one, and confirm both the card and the badge disappear the moment the last requirement is met — no reload needed
- [ ] If storage is unavailable (private browsing), confirm the app still functions for that session and shows the fallback message rather than failing silently

---

## 13. What this enables next

This structure was built specifically to support two things beyond a single companion:

- **A hub that reads multiple `banks/*.js` files** to build cross-topic practice exams, without ever loading a full companion page. This is why bank files have no dependency on `shared/` or on any DOM element — they're pure data. *(This hub now exists — see §14. Building it surfaced one thing this section didn't anticipate: a bank file alone tells the hub nothing about a companion's module or section structure, only its questions. That gap is what the manifest file in §14 closes.)*
- **A question-bank editor**: a standalone local tool that opens a bank file, presents every question in an editable table, enforces the writing-standard rules from §10 as you type, and exports an updated bank file. This is only possible because bank files are plain, uniformly-shaped JavaScript objects — resist the temptation to put anything non-obvious or presentation-specific into `CHECKPOINTS`/`CARDS`/`POOL`. *(This tool — BankBridge — also now exists, and its existence is the reason manifests are a separate file rather than new fields on the bank: BankBridge rewrites a bank file completely from five known fields every time it saves, so anything else placed in a bank file would be silently deleted the next time someone edited a question in it.)*

Anything that would make a bank file harder to read in isolation, or make a shared file aware of a specific topic, is working against both of these.

---

## 14. The hub, and the manifest file each companion needs to feed it

The hub (`hub.html`) is the student's entry point: one dashboard showing progress across every companion, one place to build a practice exam or an adaptive review pulling from any combination of companions, one shared flashcard deck, and its own small bank of cross-topic questions. It is a sixth kind of page in this project, alongside the `shared/` files, the per-topic banks, the per-topic HTML pages, and BankBridge — and like BankBridge, it is a standalone tool that reads companion output without ever being loaded by, or loading, a companion page itself.

### 14.1 Why a hub needs more than the bank files

§13 originally assumed a hub could be built from `banks/*.js` alone, because that's all a cross-topic *exam* needs — a flat list of questions with an `id`, an `area`, and a `level`. A dashboard needs something the bank was never designed to carry: which module and section each checkpoint belongs to, so the hub can say "Module 2 is 60% done" rather than just "here is a quiz score." That structure — `MODULES`, `SECTION_REQ`, `QUIZ_KEY_FOR_SECTION`, `AREA_SECTION` — used to exist only inside each companion's own `.html` file, hand-typed into the content script described in §5. The hub could not load a companion's full HTML page just to read four variables out of it; that would have meant re-running that companion's entire content script, figures and all, for every topic, just to draw a dashboard.

### 14.2 The fix: a manifest file per companion — now the *only* copy of the structure

`banks/<topic>.manifest.js` holds that structure as plain data, loadable the same way the hub loads a bank — a `<script>` tag, nothing else. When manifests were first introduced, this file was a hand-maintained *copy*: someone wrote `MODULES`/`SECTION_REQ`/`QUIZ_KEY_FOR_SECTION`/`AREA_SECTION` into the companion's `.html` first, then copied the same shape into the manifest by hand, and §14.4 named the resulting drift as an open risk. That is no longer how this works. **The manifest is written first, and it is the only place this structure is written at all.** The companion's own content script loads its manifest and derives `MODULES` and the rest from it (§5's second table); there is no second, independent copy left to drift.

```javascript
var MANIFEST = {
  topic  : 'enzymes',                              // matches TOPIC_ID
  title  : 'Biochemistry of Enzymes',               // matches TOPIC_TITLE
  file   : 'enzymes.html',                            // page the hub links to
  accent : '#2FA97A',                                  // this companion's --green, for the dashboard
  accentSoft : '#E7F6EF',

  modules: [
    { id:'m1', title:'Module 1 · Fundamentals & catalysis', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'What enzymes do', checks:['c1','c1b','c1c'] },
      { key:'m1s4', label:'Enzyme terminology', checks:['c4','c4b'], activity:'sort' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},
    ...
    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', sections:[
      { key:'final', label:'25-question exam', quiz:'final' }
    ]}
  ],

  areaSection: {
    'Enzyme basics' : 'm1s1',
    ...
  }
};
```

Each section entry folds what used to be `SECTION_REQ` and `QUIZ_KEY_FOR_SECTION` together: a section carries `checks`/`activity` if it's gradable, `quiz` if it's a quiz, or neither if it's a landing page or the flashcard deck — exactly mirroring how `isGradable()` in `engine.js` treats them (§8). The companion's content script reconstructs `SECTION_REQ` and `QUIZ_KEY_FOR_SECTION` as separate objects from this one shape at load time (§5); the manifest itself never carries them as separate top-level fields.

**Why a separate file, and not just more fields on the bank.** BankBridge (see its own section below) opens a bank file, lets you edit questions, and writes a complete replacement when you save. It only knows about five things: `TOPIC_ID`, `TOPIC_TITLE`, `CHECKPOINTS`, `CARDS`, `POOL`. Anything else placed inside `banks/<topic>.js` — a `MANIFEST` block included — would be silently dropped the next time someone edited a single question through BankBridge and saved. A manifest living in its own file can't be destroyed that way, because BankBridge never opens it.

**Where the derivation itself lives.** The content script doesn't just read a couple of fields off `MANIFEST` — it rebuilds `MODULES`, `FLOW`, `UNGRADED`, `SECTION_REQ`, `QUIZ_KEY_FOR_SECTION`, and `AREA_SECTION` from it every time the page loads, with `MANIFEST.modules.map(...)` at the center of it. §5 has the exact block to copy; §3 has the load-order requirement that makes it work (the manifest script tag has to run before the content script that reads `MANIFEST`).

### 14.3 What the hub does with a manifest — and what a missing one means now

The hub reads a companion's live progress the same way `engine.js` computes it, because it is running the same completion rule from §8 — a section with `checks` is done once every listed checkpoint has been answered *correctly*, a section with `activity` also needs that activity submitted at least once, and a `quiz` section is done once submitted at any score. It gets the checkpoints' correct answers from the bank (`CHECKPOINTS[id].answer`) and the student's saved answers from `companion.<topic>.v1` in `localStorage` (§9) — the same storage key every companion already writes to, which the hub only ever reads, with one narrow, deliberate exception covered in §14.8.

**A companion with no manifest used to be treated as merely degraded; it is now treated as broken, and correctly so.** The original design (see the third correction at the top of this document) had the hub fall back to reporting only `state.best` — quiz scores, no module breakdown — for the short window between a companion being built and its manifest being written, since only the hub's dashboard needed the manifest at all. That window no longer exists in the same way: since a companion's own content script now derives its structure from `MANIFEST` (§5, §14.2), a missing or malformed manifest means the companion's *own page* fails to render, not just that the hub's dashboard shows a plainer card for it. If the hub ever encounters a companion with no manifest under this architecture, that companion's own students are already seeing a broken page, not a working one with a smaller dashboard footprint — see the fifth correction at the top of this document. Treat a missing manifest as a build defect to fix immediately, not a known, tolerable gap to fill in later.

The same progress figure this section computes is also what decides whether a companion's own questions are allowed into a hub exam at all — see §14.7.

### 14.4 Keeping the manifest itself correct

Because the manifest is now the single source of this structure rather than one of two copies, the old drift risk this section used to describe — a hand-typed `.html` structure and a hand-typed `.manifest.js` silently disagreeing — is gone by construction: there is only one place to edit. What replaces it is a narrower risk, and it's still worth a checklist entry (§14.6 has the full one): a manifest that is internally wrong — a `checks` id that doesn't exist in `CHECKPOINTS`, a `quiz` value that doesn't match anything in `POOL`, a section `key` that's misspelled — will still derive cleanly (the derivation code doesn't validate content, only shape) and then fail later, either silently (a checkpoint that can never be satisfied) or loudly (the quiz-rendering code finds no matching `POOL` questions). Test a new or edited manifest by actually loading the companion page, not just by eyeballing the file, for the same reason §12's smoke test exists at all.

### 14.5 The hub's own question bank

`banks/hub.js` is a bank file like any other — same five fields, same ID rules from §4, same writing standard from §10 — with one difference: it has no companion page of its own, so `CHECKPOINTS` is always empty, and it needs no manifest, since the hub is not one of the companions it reports progress on. Its `POOL` questions each carry an `m` field pointing at a companion's `topic` id rather than a module id, because the hub uses that to decide which companion's page to send a student back to after a miss. Its reason for existing is that a hub built only from stitching together the four companion banks would only ever test one topic per question; deliberately writing items that require two topics at once (a drug's kinetics *and* the physiology it acts on, say) is practice a single-topic companion structurally cannot offer, and is the kind of integration a live lecture has the least time for.

**Hub question `m` field can name several companions.** In `banks/hub.js`, `m` is a companion topic id, or several ids joined by `+` with no spaces (for example `bacteria2+bacteria4`). `homeTopics(q)` in `hub.html` splits it. It is used in two places:
1. `poolFor()`: when specific unlocked companions are picked alongside the hub bank, a hub question is offered if **any** of its companions is among them.
2. The results page: a missed hub question sends the student back to **every** companion it names ("Where to go back to").

**Per-companion look lives in `hub.html`.** `HUB.META` holds each companion's display title, tagline, and mockup colors. The manifest's single `accent` only supplies one dark ink color. Viruses I is the fifth companion and follows this pattern. To add another, add a `HUB.META` block and three lines (bank, manifest, `HUB.capture('id')`) in the bank-loading section. The headline ("Five companions.") and the hero ring row adjust to the number of companions automatically.

**Module counts.** Headlines count numbered modules only. The final exam is shown as a starred row and an arc segment, and it counts toward the percentage.

**Backup files** are tagged `micro-hub-backup`. A file from the biochemistry hub is rejected on purpose so the two courses cannot overwrite each other.

**Manifest file names use a dot, not an underscore.** The hub and each companion load `banks/<id>.manifest.js`. If the manifest is missing or misnamed, the hub shows a warning on the dashboard naming the file it expected, and that companion's exam questions stay locked.

### 14.6 Testing a manifest

Before trusting a new or edited manifest, confirm:

- [ ] `node --check banks/<topic>.manifest.js` passes — this only catches a syntax error, not a shape problem, but it's free and it's first
- [ ] **Load the actual `<topic>.html` page and confirm it renders past the sidebar** (§3, §12's smoke test) — this is the check that didn't exist before the manifest became load-bearing for the page itself, and it catches most shape problems the syntax check can't
- [ ] Every id in a section's `checks` array exists in that companion's `CHECKPOINTS` (in `banks/<topic>.js`)
- [ ] Every section carrying a `quiz` value matches an `m` value actually used in that companion's `POOL`
- [ ] Every key in `areaSection` matches an `area` string actually used in that companion's `POOL` — spelling and capitalisation both, the same requirement §10 already places on `AREA_SECTION` itself
- [ ] The hub's dashboard shows a green "manifest loaded" state for this companion (its "how this works" page lists this per companion) rather than the no-manifest fallback described in §14.3 — seeing that fallback now means the companion's own page is broken, not just that its dashboard card is plainer, so treat it as a stop-what-you're-doing signal

### 14.7 Gating: a companion's questions only unlock at 100%

The hub can compute a companion's progress (§14.3); what it does with that number is refuse to draw questions from a companion until that number is 100%. This is deliberate, not incidental: a hub exam that could be sat on a companion's material before that companion's checkpoints, activities and quizzes were actually completed would let a student route around the practice §8's completion model exists to enforce — sit the hub exam, skip the section, still see the material "covered." Gating closes that.

The rule is simple and applied in one place students can't route around:

- **A companion unlocks at exactly the progress-ring 100%** computed in §14.3 — no partial credit, no separate threshold to tune.
- **A companion with no manifest is locked, not exempted.** Under the current architecture this case shouldn't arise in a working deployment at all — a companion without its manifest can't render its own page (§14.3) — but the gate still checks for it explicitly rather than assuming it can't happen, the same defensive posture the rest of this rule takes toward a stale or programmatically-set topic id.
- **The hub's own bank (`hub.js`, §14.5) is never gated.** It belongs to no single companion — there is no companion-specific practice to route around by using it — so it stays available from the moment the hub loads.
- **Flashcards are not gated.** A flashcard deck is retrieval practice, not a graded round standing in for a companion's own checkpoints, so restricting it would close no real loophole while making review needlessly harder. The same goes for the student's own cards (§14.10).

The check is enforced in the function that actually assembles a question pool for an exam (`poolFor()`), not only in the picker UI that lets a student choose companions. That's a deliberate second layer: the UI disables the checkbox for a locked companion and explains why, but even if a locked topic id ends up in the exam configuration some other way — a stale selection carried across a view change, a future feature that sets it programmatically — the pool-building step drops it regardless. A UI-only lock is the kind of thing this document's second correction already warned about: it looks like a rule ("the checkbox is disabled") while leaving a path around it un-checked. Anywhere else this project adds a way to configure and start an exam, route the topic list through this same gate rather than trusting the caller to have already filtered it.

### 14.8 Flags: the one thing the hub is allowed to write

Every other section of §14 describes the hub as read-only against companion storage — it computes progress, builds exams, and shows a dashboard, but it never writes into `companion.<topic>.v1`. Flagging breaks that pattern in one narrow, deliberate way, and it's worth being explicit about exactly how narrow.

**Where a flag can be created.** Only two places, both already covered elsewhere in this document: inside a companion, after a quiz question is graded (§7's Quiz-section markup, §8, §9); or during a hub exam, where the hub already has its own flag mechanism for that one attempt. Either way, the flag ends up recorded against a question id — in `state.flags` if it came from a companion, in the hub's own storage if it came from a hub exam.

**Where every flag is shown.** The hub's Flagged questions view reads `state.flags` out of every companion's storage (the same read-only `companionState()` helper used everywhere else in the hub) and merges it with its own flags, deduplicating a question flagged in both places into a single entry. This merge is read-only, same as the dashboard.

**The one write.** When a student removes a flag from the hub's Flagged questions list, and that flag originated in a companion, the hub deletes `state.flags[questionId]` for that companion — nothing else in that companion's stored object is touched. This exists because the alternative is worse: without it, a flag set inside a companion could only ever be cleared by going back into that companion, which defeats the point of collecting flags in one place. The write is scoped as tightly as it can be — a read-modify-write against the *current* stored value (never a cached copy), touching only the `flags` key — specifically so it cannot corrupt checks, activities, or quiz scores even if something else about the write goes wrong.

**The residual risk, named rather than hidden.** If a companion is open in another tab at the moment its flag is cleared from the hub, that tab is holding its own in-memory `state` and could overwrite the hub's change on its own next `saveState()` call — the same race any two-tab edit of the same storage key has, and not something either file guards against. Clearing a flag is cheap to redo, which is why this was judged an acceptable, documented tradeoff rather than something worth building tab-coordination for.

If a future change needs the hub to write anything else into companion storage, hold it to this same bar: touch the single key it needs, read-modify-write against the current value, and write the reasoning down here — not because the pattern is hard to repeat, but because "the hub only reads" is a rule worth enforcing on the exceptions, not just quietly eroding one write at a time.

### 14.9 Adaptive review: how a weak area is actually detected

`weaknessMap()` (in `hub.html`) is what every "what should this student review" surface reads from — the dashboard's "Your weakest area right now is…" line, the adaptive-round builder's "What this round will target" preview, and `buildAdaptive()`'s actual question selection all go through it, directly or via `rankedWeak()`. It blends evidence from every companion's stored state (never anything a companion computes fresh — `companionState()` reads storage the same read-only way the rest of the hub does) into one entry per `(topic, area)` pair.

**Two things this function must never conflate**, because both are live bugs it used to have:

1. *A module quiz's one overall score is not the same claim as "every area that quiz touched is equally weak."* A five-area module quiz where a student aced four areas and missed every question in the fifth used to flag all five identically, because the only signal available was the quiz's single `state.best[quizId]` percentage, spread across every area `q.m` mapped to that quiz. Fixed by reading `state.areaStats` instead (§9) — real per-question evidence, already computed by `engine.js`'s `grade()` for the results screen, now kept rather than discarded. An area's `missRate` comes from questions actually asked about *that area*, not from whatever else happened to share its quiz.

2. *An unfinished section is not evidence of a gap — it's the absence of any evidence at all.* The old third evidence source in `weaknessMap()` scored an incomplete checkpoint section as roughly 75%-weak, on the theory that not doing something is a little like doing it badly. It isn't: a section a student hasn't reached yet says nothing about whether they'd struggle with it, and blending that guess into the same score as a real, evidenced gap let an untouched section outrank one the student had actually gotten wrong. Section completion is now tracked as `e.practiced` (a boolean, never a weighted score) and used only to set `e.status`, never `e.score`.

**`e.status`** is one of three values, computed from evidence and practice separately rather than from one blended number:
- `"not-practiced"` — zero assessed evidence anywhere (no quiz questions asked, no hub exam has touched it) *and* the section covering it hasn't been completed. Genuinely untouched material.
- `"practiced-unassessed"` — the section is done, but no quiz or hub exam has asked about it yet. Not a gap; just nothing to judge yet.
- `"assessed"` — there's real evidence (`e.evidence > 0`). `rankedWeak()`'s own `minEvidence`/score thresholds decide whether that evidence is bad enough to count as "needs review"; `weaknessMap()` itself doesn't draw that second line.

`rankedNotPracticed(topicIds)` is the `"not-practiced"` counterpart to `rankedWeak()` — same shape, same `weaknessMap()` underneath, filtered the other way — so a caller can show "N concepts you haven't studied yet" distinctly from "N concepts to review" instead of a single number that could mean either.

**The companion's review queue feeds this too.** `weaknessMap()` also reads each companion's `state.pending`: a queued concept gets an extra evidence part (stronger for `retry` than for `waiting`). And once a concept is resolved in its companion (no longer queued, and its latest attempt perfect), the latest perfect result stands in for its lifetime miss rate, so a concept the student has since fixed stops outranking ones still open. A companion that predates the queue (no `recorded` list) is read as before. Raw `asked`/`right` totals are never altered, so accuracy figures stay honest.

**Regression: "used to get this, now missing it."** `state.areaStats[area].lastAcc` holds only the *most recent* attempt's accuracy for that area, deliberately kept separate from the running `asked`/`right` totals. When lifetime accuracy for an area is decent (≥70%) but `lastAcc` shows the latest attempt came back wrong, `weaknessMap()` adds a second, lighter-weighted evidence part on top of the ordinary miss-rate one, plus a distinct `why` message. This is what stops a student who understood a concept two months ago but has since forgotten it from reading as "fine" just because an early strong attempt is still dragging up their lifetime average.

**What still isn't done here, on purpose.** Regression detection currently only looks at a companion's own quiz history (`state.areaStats`), not hub exam history — a student who aced an area on a companion quiz months ago but has since missed it on hub exams isn't caught by this signal, only by the ordinary recency-weighted blend hub history already contributes. Merging both sources' "most recent outcome" into one regression check would need each hub exam history entry to carry more than the `byArea` aggregate it does today (see §14.6-adjacent exam history notes) — worth doing if regression turns out to matter for hub-exam-only evidence too, but not built speculatively ahead of that need.

### 14.10 The student's own flashcards in the hub: read-only

Students write cards inside a companion (§9, §7). The hub lets them **study** those cards but never creates, edits, or deletes one. §14.8 named flags as the single narrow exception to "the hub never writes to a companion's storage"; own cards are **not** a second exception — the hub only reads them. To change or remove a card, the student goes back to that companion's Flashcards page, and the hub says so on screen.

**Where they appear.** In the hub's Flashcards view, below the course-card picker, a "Your own cards" box lists one row per companion that has at least one card ("Bacteria I — my cards, 2 cards"), each with a checkbox (on by default). Ticked rows are shuffled into the same deck as the course cards. A student's card is marked with a dashed edge and a tag reading "My card · Bacteria I". If there are none, the box explains how to make one. The deck's card count and the "Only cards I marked for review" button include them.

**How the hub keeps them straight.** A student's card is filed under the id `my:<companionId>:<cardId>` in the hub's own `known`/`again` marks (`H.cards`). The `my:` prefix and the companion id mean it can never collide with a course card's id (`B1-001`), or with the same short id in another companion. These cards are **not** in a topic's `cards` list, so `flashMastered()` and the "Flashcards · N% mastered" figures on the dashboard still count course cards only.

**A second copy of the cleaning rule — on purpose.** The hub does not load `storage.js`, so `hub.html` carries its own `MYCARD_LIMITS` and `cleanMyCards()`. It has to, because the hub reads card text straight from storage, and that text can come from a backup file as well as from a companion page. If you change a limit or a rule in one place, **change both**. When this feature was built, both copies were run against the same 25 messy inputs (wrong types, bad ids, over-long text, duplicates, 250 cards) and produced identical output; if you ever edit one, repeat that comparison rather than assuming they still match.

**Card text is never HTML.** Card text is written to the page with `textContent` (the hub's `el()` helper with the `text` option), never `innerHTML`. A card whose front is `<img src=x onerror=...>` shows those literal characters and nothing runs. The one place the hub uses `innerHTML` near this feature, `renderHelp()`, only contains fixed text.

**Stale marks are cleaned up.** When a student deletes a card in a companion, any "known" or "review" mark the hub kept for it would be left behind and would inflate the "Marked known" count. `pruneOwnCardMarks()` runs when the Flashcards view opens and removes marks for cards that no longer exist. It deliberately **skips** a companion that isn't loaded in this hub, and one whose saved text can't be read at all, rather than guessing and deleting marks by mistake.

**Backup and restore.** A student's cards are stored inside each companion's saved data, so they are in the backup file automatically and a restore replaces them along with that companion's progress. Three consequences are handled in `hub.html`:

- `validateCompanionRaw()` rejects a companion whose `myCards`, if present, is not a list. A rejected companion is skipped on restore and the existing data is left alone, the same rule as every other malformed field. Individual bad cards inside a valid list are not rejected; `cleanMyCards()` drops them on the next read.
- The backup page and the restore preview each show a "Flashcards you wrote yourself" row.
- The preview warns, in words, when loading a backup would **remove** cards that are on this device but not in the file ("This device has 2 flashcards you wrote, but this backup only has 1…"). This is the same silent-data-loss risk the rest of the restore preview exists to prevent, and a restore is a whole-companion replacement, so an old backup really would delete newer cards.

**Residual risk, named.** If a companion is open in a second tab while the hub or the other tab changes the same companion's saved data, the tab holding the older in-memory `state` can overwrite the newer data on its next save. This is the same two-tab race §14.8 describes for flags, and no tab-coordination was built for it. It affects a card the student added in one tab and not yet saved from the other, which is rare and cheap to redo.

**Testing it.** Beyond the §12 checklist: (1) in a companion, add cards, then open the hub and confirm they are listed and appear in a deck, tagged as the student's own; (2) delete one in the companion and confirm the hub no longer lists it and its "known" mark is gone; (3) download a backup, delete a card, load the backup, and confirm the card comes back; (4) build a backup with fewer cards than the device and confirm the preview warns before anything is replaced; (5) confirm the hub's own-card area has no edit, delete, or add controls.

### 14.11 Hub exams: saved, resumable, graded once

The hub's exam runner (a separate piece of code from the companions' quiz engine) had the same two defects, and got the same two fixes. **Graded once:** `gradeExam()` returns immediately unless `EXAM.live` is true, and `EXAM.stop()` clears it, so a second call (a double click, a timer firing as Submit is pressed) cannot add a second history entry or double `H.seen`. **Saved:** every redraw of the exam screen calls `persistExam()`, which writes `H.attempt` (question ids with their companions, option order, answers, flags, current position, mode, targets, and the timer's `endsAt` deadline); ids only, never text. Leaving the exam, refreshing, or closing the tab no longer loses it. A "You have an unfinished exam" banner with **Resume exam** and **Discard it** shows on the dashboard and the exam-builder screens. `loadSavedExam()` accepts a saved exam only if every question still exists in its bank and every order and answer is valid, otherwise it is ignored with no banner. The timer's deadline is an absolute time, so it keeps running while the student is away; resuming an exam whose time has run out grades it immediately with what was answered. `H.attempt` is cleared on grading and by "Clear my hub history". `validateCompanionRaw()` also rejects a backup whose `pending`, `attempts`, `recorded`, `lastScore`, or `seenQ` is not an object.

### 14.12 Dashboard indicators and due re-checks

Each companion card on the hub dashboard shows the same three separate facts as the quiz pages, because completion and mastery are different things and are never merged into one number: **Practice completed** (the checkpoint-and-activity sections done, out of all of them, quizzes excluded), **Assessment results** (quizzes taken out of quizzes available, and the average of their best scores), and **Review pending** (concepts missed and not yet fixed, plus re-checks that are due, with the due count in brackets). `assessmentSummary()` builds them from the manifest and the companion's saved state; concept areas that no longer exist in the bank are ignored, so a bank edit cannot leave a phantom "pending" count. A brand-new student sees "None" and "No quizzes taken". A companion with no manifest shows no strip. `weaknessMap()` also reads `state.spaced`: a re-check that has come due adds a small evidence part ("due for a spaced re-check in the companion") so the hub's adaptive review can surface it; a re-check still in the future adds nothing. `validateCompanionRaw()` rejects a backup whose `spaced` or `mastered` is not an object.

---

## 15. The Start page (welcome) — one shared look, per-companion colors

Every companion opens on the same kind of Start page, modeled on `bacteria1.html`. Its layout comes from one shared, color-neutral stylesheet, `shared/welcome.css` — not designed per companion. Each companion's own Start-page markup is hand-written (copied from an existing companion and re-colored, the same way the rest of the page shell in §6 is), and supplies only its **colors, wording, and hero illustration**; the CSS supplies the layout.

### 15.1 What the page contains, top to bottom

1. **Hero:** kicker, a two-line headline (second line in the accent color), one paragraph, two buttons ("Start Module 1", "Try the flashcards"), a one-line note with three colored dots, and an illustration with a floating module-count badge.
2. **Stat band:** four numbers with icons: modules, hands-on activities, quiz questions, flashcards.
3. **"Your path":** one card per module, each with an icon in a colored circle, the module title, its guiding question, and an "Open module →" link.
4. **"How it works":** a picture (predict, interact, explain) beside five or six bulleted principles.
5. **Closing banner:** "Ready to begin?" with a highlight-colored "Start Module 1 →" button.
6. **Pager.**

### 15.2 Color tokens, not colors

The shared stylesheet (`welcome.css`) contains **no colors.** It reads named `--w-*` tokens that each companion defines in its own `:root` block. Because of this, a companion's two-tone scheme is preserved on the Start page automatically, and a layout fix in the template reaches every companion at once.

The token names appear throughout `shared/welcome.css`, `shared/shell.css`, and `shared/sections.css` wherever you see `var(--w-...)`; any companion's own `:root` block (Bacteria III's is the clearest-commented one) is a complete worked example to copy from. The three tokens below carry contrast requirements:

| Token pair | Minimum contrast |
|---|---|
| `--w-hl-ink` on white (small link text) | 4.5 : 1 |
| `--w-on-hl` on `--w-hl` (text on highlight buttons) | 4.5 : 1 |
| `--w-hl-strong` on `--w-hero-1` (large headline text) | 3 : 1 |

Keep green reserved for "correct / done" (see §7). Never use it as a highlight or primary.

### 15.3 DOM hooks the template's script uses

| Hook | Filled or wired by `initWelcome()` |
|---|---|
| `[data-ico="name"]` | Replaced with the named SVG icon (a base set lives in `welcome.js`; a companion may add more). |
| `[data-stat="modules\|activities\|questions\|cards"]` | Replaced with a **live count**: modules (manifest ids matching `/^m\d/`), activities (`Object.keys(Act.registry).length`, else manifest sections with an `activity`), `POOL.length`, `CARDS.length`. These are never typed by hand. |
| `[data-go="section-key"]` | On click, calls `goTo()` for that section's index in `FLOW`. |

`initWelcome()` must be called **once, at the very end of the companion's content script,** after every activity has been built (so the activity registry is complete). It only calls `goTo()` on click, so it does not depend on `engine.js` having loaded yet.

### 15.4 Manifest requirements

- The first module's first section is the Start page. Its key must match `START_KEY` in the companion's welcome content. Bacteria I uses `start`; new companions should use `start`. (Bacteria II, built first, uses `welcome`.)
- Module ids are `m1`, `m2`, ... and each module's landing page is `m1home`, `m2home`, ...
- A flashcards section exists with the key `flashcards`.
- The Start page carries neither `checks`, `activity`, nor `quiz`, so it is ungraded and never gated (§8, §14).

### 15.5 Single source of truth for module titles

The module-card title and question come from the **same table that builds the module landing pages.** Do not retype them in the welcome content. Then the two cannot disagree.

### 15.6 Testing checklist additions (§12)

- [ ] The hero headline occupies exactly two lines (each line 19 characters or fewer).
- [ ] The four stat numbers equal the real counts (modules, activities, pool size, card count).
- [ ] Every `[data-ico]` element contains an `<svg>` (no empty icon circles).
- [ ] Every `[data-go]` button and every module card navigates to its named section.
- [ ] Each module card's title equals its landing page's heading.
- [ ] At 375 px wide the page does not scroll sideways; the illustration moves to the top, the stat band becomes 2 × 2, and the cards stack to one column.
- [ ] Only one `<h1>` exists on the page (the top bar's). The hero headline is an `<h2>`.

## 16. The sidebar, top bar, and module overview pages — one shared look

Every companion uses the same sidebar, top bar, and module overview pages, modeled on `bacteria1.html`. Their layout comes from one shared, color-neutral stylesheet, `shared/shell.css`. Each companion supplies its **colors, wording, and logo icon** in hand-written markup that matches the pattern; the CSS supplies the layout.

### 16.1 The sidebar and top bar

The markup is hand-written in each page, copied from an existing companion (`bacteria1.html` is the reference) rather than generated. It keeps every id `engine.js` needs (`nav`, `ringFill`, `ringPct`, `resetBtn`, `topTitle`, `topMeta`, `topPill`) exactly as §6 defines them, plus the back-to-hub link from §6.4. What differs per companion:

| Slot | What goes there |
|---|---|
| `BRAND_ICON` | A 24 × 24 line icon drawn with `currentColor`, stroke width 1.8. It is shown in the highlight color on a gradient rounded square. |
| `BRAND_TITLE` | "*Name* · *Word*", about 27 characters or fewer so it stays on one line. |
| `BRAND_SUB` | The course line, for example "PHA3109 Microbiology & Immunology". |
| `TOP_META` | "*Companion name* · *course line*". |

Behavior the kit sets:
- **Module titles wrap** in the sidebar instead of being truncated with an ellipsis. On screens 900 px wide or narrower they truncate again, so the stacked mobile sidebar stays short.
- The current module's number badge is white; the current page's dot is the strong highlight color.
- The status pill uses the highlight tint. The progress ring's colors come from tokens.

**Length rule.** Because titles wrap, manifest module titles must stay short (about 32 characters including "Module N · "). Three-line titles push the progress ring off the screen. The sidebar must fit a 1280 × 900 window with any one module expanded.

### 16.2 The module overview page

Each module's first section (`m1home`, `m2home`, ...) is hand-written to match the pattern below and carries the class `modhome`, which scopes its styles. From top to bottom:

1. **Banner** (`.modhero`): kicker "Module N", the module headline, a two-or-three-sentence framing paragraph, a **"Pharmacist's question"** strip (`.q-strip`), and a large faded module numeral (`.ghost-num`).
2. **Goals card** (`.goal-card`): eyebrow "By the end you can" and exactly **three** check-marked learning goals, each starting with a verb.
3. **Page list**: eyebrow "In this module" and a `.home-list` with one `.home-item[data-goto]` per sibling section, plus the module quiz. The technical rules in §7 still apply: every `.home-item` needs a `.home-num` and a `.home-status` child, because `paintNav()` writes "Done" / "Not started" into them.
4. **Pager.**

The overview page is ungraded and never gated (§8, §14).

### 16.3 One module table, two consumers

Each module's `title`, `q` (the pharmacist's question), `frame`, `goals`, and `items` live in **one table** (`module_content.py`). It builds both the module overview pages and the welcome page's "Your path" cards (§15), so the two cannot disagree. Do not retype a module's title or question anywhere else.

### 16.4 Color tokens

The kit uses the same `--w-*` tokens as the Start page (§15.2), plus three for the sidebar:

| Token | Colors |
|---|---|
| `--w-hl-soft` | The status pill's background |
| `--w-ring-track` | The unfilled part of the progress ring |
| `--w-ring-fill` | The filled part of the progress ring (at least 3 : 1 against the ring's panel) |

### 16.5 Testing checklist additions (§12)

- [ ] The sidebar title occupies one line and the logo icon is drawn.
- [ ] With each module expanded in turn, the reset button stays visible on a 1280 × 900 window.
- [ ] Module titles in the sidebar wrap on desktop, and truncate at 900 px wide or narrower.
- [ ] Every module overview page has a banner, a framing paragraph, a question strip, a faded numeral, exactly three goals, and a page list.
- [ ] Each banner headline and question equals the matching card on the Start page.
- [ ] Each page list matches the manifest's sections for that module, and each entry opens its section.
- [ ] The status labels change from "Not started" to "Done" as sections complete.
- [ ] At 375 px wide, no overview page scrolls sideways.

## 17. Content section pages — one shared set of marks

Every content page (a section inside a module, a module quiz, the flashcards, the final exam) uses the same small visual marks, modeled on `bacteria1.html`. They come from one color-neutral stylesheet, `shared/sections.css`. Unlike the Start page and sidebar kits, these rules apply **to every page on purpose.** Section pages themselves are written by hand; the stylesheet supplies only the styling and the naming pattern.

### 17.1 The marks and their class names

| Class | Used on | Look |
|---|---|---|
| `.eyebrow` | The small label above a heading | Uppercase, 0.72 rem, letter-spaced, with a 26 × 3 px bar in the highlight color to its left |
| `.eyebrow.hands` | The eyebrow of a hands-on card | The same, in the deeper highlight ink (`--w-hl-ink`) |
| `.lede` | The first paragraph under a page heading | 1.06 rem, softer color, up to 66 characters wide |
| `.keypoints` | A short list inside a section's opening card | Pale tint (`--w-kp-bg`) with a 4 px left edge in the highlight color |
| `.card.hands-card` | Every card where the student acts (drag, sort, simulate, predict) | A 4 px top edge in the highlight color |
| `.try-note` | The instruction line under a hands-on card's heading | 0.9 rem, soft color, sits **above** the activity |

### 17.2 The pattern

A content section is normally three cards: (1) an opening card with the eyebrow, heading, `.lede`, and optionally `.keypoints`; (2) one or more `.hands-card` cards; (3) a checkpoint card. Then the pager. Rules:

- Every card that asks the student to do something is a `.hands-card`. Cards that only explain or only hold checkpoint questions are not.
- The first paragraph under a page heading is always `.lede`, including on quiz, flashcard, and final-exam pages.
- A hands-on card's instruction is a `.try-note`, never a `.caption`. A `.caption` belongs under a figure.
- A card hidden until a prediction is answered (`.card.hands-card.hidden`) keeps the same classes. The predict-first pattern that hides and reveals a card is unaffected.

### 17.3 Eyebrow wording

| Page | Eyebrow |
|---|---|
| Content section | "Module *N* · Section *M*" |
| Hands-on card | "Hands-on", optionally followed by " · Step *i* of *n* · a short label" |
| Module quiz | "Module *N* · Mastery check" |
| Flashcards | "Retrieval practice" |
| Final exam | The exam's name |

### 17.4 Color tokens

The kit uses the `--w-*` tokens already defined for the Start page (§15.2) and one added token:

| Token | Colors |
|---|---|
| `--w-kp-bg` | The background of `.keypoints` |

The highlight bar, the key-points edge, and the hands-card top edge use `--w-hl`; the hands-on eyebrow text uses `--w-hl-ink`, which already meets the 4.5 : 1 text-contrast requirement on white (§15.2).

**Meaning-based boxes keep their own colors.** The amber "predict" box (`.box.predict`) and the violet "clinical" box (`.box.clinical`) tell the student what kind of box they are reading, so they do not take the highlight color. Keep green reserved for "correct / done" (§7).

### 17.5 Testing checklist additions (§12)

- [ ] Every `.eyebrow` shows the highlight bar (26 × 3 px) and is uppercase.
- [ ] The number of `.hands-card` cards equals the number of eyebrows that begin "Hands-on", and each `.hands-card` contains an `.eyebrow.hands`.
- [ ] Cards that are not hands-on have no top edge.
- [ ] The first paragraph under every page heading (skipping the lock card on locked pages) has class `lede`.
- [ ] Every hands-on instruction line is a `.try-note`; none is left as `.caption`.
- [ ] `.keypoints` shows a 4 px left edge in the highlight color on the `--w-kp-bg` tint.
- [ ] At 375 px wide, no section page scrolls sideways.

### 17.6 Update to §7's hands-on card example

§7's "Activity markup (the hands-on card)" example shows a plain card with `class="eyebrow"` and `class="caption"`. Replace that snippet with the version below. Nothing else about it changes: the card still needs only a heading and an empty host element, and where it sits is still a page decision.

```html
<section class="section" data-key="m1s1">
  <div class="card">
    <div class="eyebrow">Module 1 · Section 1</div>
    <h2>...</h2>
    <p class="lede">...</p>
    <div class="keypoints"><h4>Key points</h4><ul>...</ul></div>
  </div>
  <div class="card hands-card">
    <div class="eyebrow hands">Hands-on</div>
    <h2>Match each clue to its microbe</h2>
    <p class="try-note">Drag each label onto the description it fits.</p>
    <div id="act-microbeMatch"></div>       <!-- the builder fills this in -->
  </div>
  <div class="card"> ...the .box.predict checkpoints... </div>
  <div class="card pager"></div>
</section>
```

The only differences from the earlier example are three class names (`hands-card`, `hands`, `try-note`) and a `.lede` on the opening paragraph.

