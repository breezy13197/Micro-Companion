/* ============================================================
   MANIFEST: Bacteria I · Introduction
   The table of contents for this companion — the ONLY place its
   modules and sections are written. The page (bacteria1.html)
   builds its menu and its "what counts as done" rules from this,
   and the hub reads the same file for its dashboard.

   How to read a section line:
     { key:'m1s1', label:'…', checks:['c1a','c1b','c1c'], activity:'microbeMatch' }
        key       = the section's id in bacteria1.html (data-key)
        label     = the name shown in the menu
        checks    = the "Can you predict it?" questions that must be answered correctly
        activity  = the hands-on activity that must be completed
     { key:'m1quiz', label:'…', quiz:'m1' }   = a quiz (counts once submitted)
     { key:'m1home', label:'…' }               = a landing page (never blocks progress)
   ============================================================ */
var MANIFEST = {
  topic      : 'bacteria1',
  title      : 'Bacteria I · Introduction',
  file       : 'bacteria1.html',
  accent     : '#163C94',
  accentSoft : '#E8EEFC',

  modules: [
    { id:'home', title:'Start here', sections:[
      { key:'start', label:'Welcome' }
    ]},

    { id:'m1', title:'Module 1 · What makes a bacterium a bacterium?', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'Microbes at a glance',         checks:['c1a','c1b','c1c'], activity:'microbeMatch' },
      { key:'m1s2', label:'Bacterial vs. human cells',     checks:['c2a','c2b','c2c'], activity:'cellSort' },
      { key:'m1s3', label:'Shape and arrangement',         checks:['c3a','c3b'],       activity:'divideLab' },
      { key:'m1s4', label:'Outside the cell wall',         checks:['c4a','c4b','c4c'], activity:'cellExplore' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 · The envelope and selective toxicity', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Peptidoglycan: the wall',                 checks:['c5a','c5b'],       activity:'wallBuild' },
      { key:'m2s2', label:'Gram-positive vs. Gram-negative',          checks:['c6a','c6b','c6c'], activity:'envSort' },
      { key:'m2s3', label:'The Gram stain',                           checks:['c7a','c7b'],       activity:'gramSim' },
      { key:'m2s4', label:'When Gram staining falls short',           checks:['c8a','c8b'],       activity:'exceptMatch' },
      { key:'m2s5', label:'Targeting the microbe, not the patient',    checks:['c9a','c9b','c9c'], activity:'targetProbe' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 · Growth, survival, genetics, and resistance', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'Oxygen and where bacteria grow',  checks:['c10a','c10b','c10c'], activity:'oxygenProbe' },
      { key:'m3s2', label:'Endospores',                      checks:['c11a','c11b'],        activity:'sporeCase' },
      { key:'m3s3', label:'Moving DNA between bacteria',      checks:['c12a','c12b','c12c'], activity:'hgtSteps' },
      { key:'m3s4', label:'How resistance takes over',        checks:['c13a','c13b'],        activity:'selectionLab' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 · From colonization to disease', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'The human microbiome',                   checks:['c14a','c14b','c14c'], activity:'bodyMap' },
      { key:'m4s2', label:'Colonization, infection, and disease',     checks:['c15a','c15b'],        activity:'termSort' },
      { key:'m4s3', label:'How microbes travel',                     checks:['c16a','c16b'],        activity:'travelMatch' },
      { key:'m4s4', label:'Adherence, spread, and immune evasion',     checks:['c17a','c17b','c17c'], activity:'virulenceFill' },
      { key:'m4s5', label:'Toxins and immune-mediated damage',         checks:['c18a','c18b','c18c'], activity:'toxinSort' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 · From specimen to treatment decision', sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'The diagnostic sequence',   checks:['c19a','c19b'],        activity:'dxOrder' },
      { key:'m5s2', label:'Reading culture results',    checks:['c21a','c21b'],        activity:'caseSort' },
      { key:'m5s3', label:'MIC and susceptibility',     checks:['c22a','c22b','c22c'], activity:'micLab' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},

    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', sections:[
      { key:'final', label:'25 Question Mastery Exam', quiz:'final' }
    ]}
  ],

  /* Where "revisit this" sends a student after a quiz. Every key must match
     an `area` used in the question pool (spelling and capitalization). */
  areaSection: {
    'Microbial categories'                    : 'm1s1',
    'Bacteria vs. human cells'                 : 'm1s2',
    'Shape and arrangement'                    : 'm1s3',
    'Bacterial structures'                     : 'm1s4',
    'Peptidoglycan'                            : 'm2s1',
    'Envelope architecture'                    : 'm2s2',
    'Gram staining'                            : 'm2s3',
    'Gram stain exceptions'                    : 'm2s4',
    'Selective toxicity'                       : 'm2s5',
    'Oxygen and intracellular growth'          : 'm3s1',
    'Endospores'                               : 'm3s2',
    'Gene transfer'                            : 'm3s3',
    'Antimicrobial resistance'                 : 'm3s4',
    'Microbiome and colonization resistance'    : 'm4s1',
    'Colonization and infection'               : 'm4s2',
    'Transmission'                             : 'm4s3',
    'Virulence and immune evasion'             : 'm4s4',
    'Toxins and immunopathogenesis'            : 'm4s5',
    'Diagnostic sequence'                      : 'm5s1',
    'Interpreting cultures'                    : 'm5s2',
    'Susceptibility testing'                   : 'm5s3'
  }
};
