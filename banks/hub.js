/* ==========================================================================
   banks/hub.js — the Microbiology hub's OWN question bank
   Cross-lecture questions that need two or more Bacteria companions at once.
   Each question's `m` names its home companion(s), joined by "+" when the
   question draws on more than one (for example "bacteria2+bacteria4").
   The hub uses `m` to (a) filter these questions when you pick specific
   companions and (b) send you back to the right companion after a miss.
   IDs are permanent: never reuse or renumber one.
   ========================================================================== */
var TOPIC_ID    = 'hub';
var TOPIC_TITLE = 'Microbiology Integration';

var CHECKPOINTS = {};

var CARDS = [
  {
    "id": "HUB-CARD-01",
    "t": "Why vancomycin misses Gram-negative rods",
    "d": "It is too large to cross the outer membrane, so it never reaches its D-Ala-D-Ala target in the wall precursors."
  },
  {
    "id": "HUB-CARD-02",
    "t": "Five selective drug targets",
    "d": "Peptidoglycan, 70S ribosomes, folate synthesis, DNA gyrase and topoisomerase, and bacterial membranes."
  },
  {
    "id": "HUB-CARD-03",
    "t": "Four routes to resistance",
    "d": "Drug inactivation, target change, reduced entry, and efflux."
  },
  {
    "id": "HUB-CARD-04",
    "t": "MRSA versus VRE",
    "d": "MRSA alters the target enzyme (PBP2a). VRE alters the drug’s binding substrate (D-Ala-D-Lac in place of D-Ala-D-Ala)."
  },
  {
    "id": "HUB-CARD-05",
    "t": "Why beta-lactams fail against Mycoplasma",
    "d": "It has no cell wall, so there is no peptidoglycan cross-linking to block. Treat with a macrolide, tetracycline, or fluoroquinolone."
  },
  {
    "id": "HUB-CARD-06",
    "t": "Why Mycoplasma is invisible on Gram stain",
    "d": "No cell wall means nothing retains the dye, so sputum smears show no organisms."
  },
  {
    "id": "HUB-CARD-07",
    "t": "Gram stain versus acid-fast for mycobacteria",
    "d": "A mycolic acid-rich wall resists the Gram dyes but holds carbol fuchsin after an acid-alcohol wash."
  },
  {
    "id": "HUB-CARD-08",
    "t": "Why aminoglycosides fail against anaerobes",
    "d": "Their uptake into bacterial cells depends on oxygen."
  },
  {
    "id": "HUB-CARD-09",
    "t": "Why metronidazole spares aerobes",
    "d": "It is a prodrug that is reductively activated in anaerobic organisms. The radical breaks DNA strands."
  },
  {
    "id": "HUB-CARD-10",
    "t": "The antibiotic-associated C. difficile chain",
    "d": "Antibiotic depletes flora, colonization resistance is lost, toxin-producing C. difficile overgrows, and watery diarrhea follows."
  },
  {
    "id": "HUB-CARD-11",
    "t": "C. difficile hand hygiene",
    "d": "Use soap and water, because alcohol rub does not kill spores. Use a sporicidal disinfectant such as dilute bleach on surfaces."
  },
  {
    "id": "HUB-CARD-12",
    "t": "Prodrugs and resistance in TB",
    "d": "Isoniazid (activated by KatG) and pyrazinamide can fail when the activating enzyme is lost or mutated."
  },
  {
    "id": "HUB-CARD-13",
    "t": "Why TB needs combination therapy",
    "d": "Drugs with different targets lower the chance that a resistant mutant survives."
  },
  {
    "id": "HUB-CARD-14",
    "t": "Rifampin across pathogens",
    "d": "Inhibits DNA-dependent RNA polymerase. Used for tuberculosis, leprosy, and meningococcal contact prophylaxis."
  },
  {
    "id": "HUB-CARD-15",
    "t": "Doxycycline across pathogens",
    "d": "Binds the 30S subunit and blocks aminoacyl-tRNA entry. Treats Lyme disease, anaplasmosis, RMSF, and chlamydia, and kills Wolbachia."
  },
  {
    "id": "HUB-CARD-16",
    "t": "Toxoid versus antitoxin",
    "d": "Toxoid: active immunity with memory. Antitoxin: passive, immediate protection that fades. Tetanus can use both together."
  },
  {
    "id": "HUB-CARD-17",
    "t": "Toxins that target EF-2",
    "d": "Diphtheria toxin and Pseudomonas exotoxin A both ADP-ribosylate EF-2 and stop host protein synthesis."
  },
  {
    "id": "HUB-CARD-18",
    "t": "Why conjugate vaccines work in infants",
    "d": "A protein carrier makes the response T-dependent, with memory. Plain polysaccharide gives a weaker T-independent response."
  },
  {
    "id": "HUB-CARD-19",
    "t": "The encapsulated trio",
    "d": "S. pneumoniae, N. meningitidis, and H. influenzae share an antiphagocytic capsule. Asplenia raises the risk; conjugate vaccines protect."
  },
  {
    "id": "HUB-CARD-20",
    "t": "Gonorrhea plus chlamydia",
    "d": "Ceftriaxone treats gonorrhea. Add doxycycline when chlamydia has not been excluded."
  },
  {
    "id": "HUB-CARD-21",
    "t": "The newborn conjunctivitis pair",
    "d": "N. gonorrhoeae and C. trachomatis, both acquired from the birth canal."
  },
  {
    "id": "HUB-CARD-22",
    "t": "Ixodes tick coinfections",
    "d": "The same tick can carry Lyme disease and anaplasmosis. Doxycycline covers both."
  },
  {
    "id": "HUB-CARD-23",
    "t": "Q fever route",
    "d": "Coxiella burnetii is acquired from aerosols of livestock birth products or unpasteurized dairy, not from ticks."
  },
  {
    "id": "HUB-CARD-24",
    "t": "Actinomyces versus Nocardia",
    "d": "Actinomyces: anaerobic oral flora, sulfur granules, penicillin. Nocardia: aerobic soil organism, weakly acid-fast, TMP-SMX."
  },
  {
    "id": "HUB-CARD-25",
    "t": "Listeria in meningitis",
    "d": "Not encapsulated; escapes the phagosome with listeriolysin. Ampicillin is added for newborns and adults over 50, since cephalosporins do not cover it."
  }
];

var POOL = [
  {
    "id": "HUB-001",
    "m": "bacteria1+bacteria2",
    "area": "Envelope structure and drug access",
    "level": "application",
    "stem": "A Gram-negative isolate tolerates vancomycin, which works against staphylococci. Which structure best explains this?",
    "options": [
      "A thick peptidoglycan layer that traps the drug at the surface",
      "An outer membrane that keeps the drug from reaching the peptidoglycan",
      "Terminal D-Ala-D-Lac on the peptide side chains",
      "A polysaccharide capsule that binds the drug in the periplasm"
    ],
    "answer": 1,
    "why": "Vancomycin is a large glycopeptide that binds D-Ala-D-Ala on wall precursors. It cannot cross the Gram-negative outer membrane, so it never reaches its target. A thick wall is a Gram-positive feature, and D-Ala-D-Lac is the enterococcal change that alters the binding substrate."
  },
  {
    "id": "HUB-002",
    "m": "bacteria1+bacteria2",
    "area": "Envelope structure and drug access",
    "level": "concept",
    "stem": "A Gram-negative rod loses its porin channels and becomes less susceptible to several unrelated antibiotics. Which route to resistance does this describe?",
    "options": [
      "Inactivation of the drug by an enzyme",
      "Alteration of the drug’s target",
      "Active export of the drug from the cell",
      "Reduced entry of the drug into the cell"
    ],
    "answer": 3,
    "why": "Porins are channels in the outer membrane that let small hydrophilic drugs cross. Losing them lowers the amount of drug that reaches the cell. Inactivation, target change, and efflux are separate routes that would not depend on porin loss."
  },
  {
    "id": "HUB-003",
    "m": "bacteria1+bacteria2",
    "area": "Envelope structure and drug access",
    "level": "integration",
    "stem": "Colistin (polymyxin E) is held in reserve for resistant Gram-negative infections. Which drug property most limits its routine use?",
    "options": [
      "Poor selectivity for bacterial over human cell membranes",
      "Poor penetration of the outer membrane of Gram-negative rods",
      "Rapid destruction by beta-lactamases in the periplasm",
      "A requirement for oxygen-dependent uptake into the cell"
    ],
    "answer": 0,
    "why": "Polymyxins act like cationic detergents on phospholipid bilayers. Human cells also have phospholipid bilayers, so selective toxicity is poor and toxicity limits use. The drug does act on the Gram-negative outer membrane, and beta-lactamases and oxygen-dependent uptake are not part of its mechanism."
  },
  {
    "id": "HUB-004",
    "m": "bacteria2+bacteria4",
    "area": "Wall-less and wall-different organisms",
    "level": "application",
    "stem": "A college student has a dry cough and lung infiltrates. Gram stain of sputum shows no organisms, and the illness persists on amoxicillin. Which explanation fits both findings?",
    "options": [
      "The organism carries PBP2a, which has low affinity for beta-lactams",
      "The organism produces a metallo-beta-lactamase",
      "The organism lacks a peptidoglycan cell wall",
      "The organism is an obligate anaerobe that the stain misses"
    ],
    "answer": 2,
    "why": "Mycoplasma pneumoniae has no cell wall. Without a wall there is nothing to retain the Gram stain, and beta-lactams have no cross-linking step to block. An organism with PBP2a or a beta-lactamase would still appear on the stain, so each of those explains only one finding. Macrolides, tetracyclines, or fluoroquinolones treat it."
  },
  {
    "id": "HUB-005",
    "m": "bacteria1+bacteria4",
    "area": "Wall-less and wall-different organisms",
    "level": "application",
    "stem": "A sputum smear from a patient with suspected tuberculosis shows no organisms on Gram stain, but an acid-fast stain is positive. Which feature explains the Gram stain result?",
    "options": [
      "A missing cell wall that cannot retain crystal violet",
      "An outer membrane with LPS that prevents decolorization",
      "A lipid-rich, mycolic acid wall that resists the Gram stain dyes",
      "A polysaccharide capsule that blocks the safranin counterstain"
    ],
    "answer": 2,
    "why": "Mycobacteria have a waxy, mycolic acid-rich wall that keeps the Gram stain dyes out, but the same property lets them hold carbol fuchsin after an acid-alcohol wash. A missing wall describes Mycoplasma, which is a different problem."
  },
  {
    "id": "HUB-006",
    "m": "bacteria1+bacteria4",
    "area": "Wall-less and wall-different organisms",
    "level": "application",
    "stem": "A patient has a draining sinus tract with sulfur granules after dental trauma. A smear shows branching Gram-positive filaments. Which oxygen requirement and first-line drug fit best?",
    "options": [
      "Anaerobic; penicillin",
      "Aerobic; penicillin",
      "Anaerobic; trimethoprim-sulfamethoxazole",
      "Aerobic; trimethoprim-sulfamethoxazole"
    ],
    "answer": 0,
    "why": "Actinomyces israelii is an anaerobic member of the oral flora that causes sulfur-granule sinus tracts after mucosal trauma, and penicillin treats it. Nocardia looks similar under the microscope but is aerobic, comes from soil, and is treated with trimethoprim-sulfamethoxazole."
  },
  {
    "id": "HUB-007",
    "m": "bacteria2+bacteria3",
    "area": "Resistance in Gram-positive cocci",
    "level": "integration",
    "stem": "A patient with enterococcal endocarditis has an isolate resistant to vancomycin. Which change explains this?",
    "options": [
      "PBP2a with low affinity replaces the usual transpeptidase",
      "A metallo-beta-lactamase in the periplasm cleaves the drug",
      "Methylation of 23S rRNA in the 50S subunit blocks binding",
      "D-Ala-D-Lac replaces D-Ala-D-Ala at the end of the precursor"
    ],
    "answer": 3,
    "why": "Vancomycin-resistant enterococci change the substrate the drug binds. MRSA changes the enzyme instead (PBP2a). Beta-lactamases and 23S rRNA methylation are resistance routes to other drug classes."
  },
  {
    "id": "HUB-008",
    "m": "bacteria2+bacteria3",
    "area": "Resistance in Gram-positive cocci",
    "level": "integration",
    "stem": "A skin abscess yields Gram-positive cocci in clusters that are coagulase positive. The isolate grows despite oxacillin, and adding a beta-lactamase inhibitor makes no difference. Which change best explains this?",
    "options": [
      "Terminal D-Ala-D-Lac on the peptidoglycan wall precursor",
      "PBP2a, encoded by mecA, with low affinity for beta-lactams",
      "A plasmid gene for a sulfonamide-insensitive synthase",
      "A mutation in DNA gyrase that lowers drug binding"
    ],
    "answer": 1,
    "why": "Coagulase-positive cocci in clusters are S. aureus. Resistance to oxacillin that an inhibitor cannot reverse points to an altered target, PBP2a, rather than a beta-lactamase. D-Ala-D-Lac, sulfonamide resistance, and gyrase changes belong to other drug classes."
  },
  {
    "id": "HUB-009",
    "m": "bacteria2+bacteria3",
    "area": "Resistance in Gram-positive cocci",
    "level": "concept",
    "stem": "A patient has a bloodstream infection with vancomycin-resistant Enterococcus. Which alternative drug binds 23S rRNA in the 50S subunit and blocks formation of the 70S initiation complex?",
    "options": [
      "Linezolid",
      "Azithromycin",
      "Gentamicin",
      "Ciprofloxacin"
    ],
    "answer": 0,
    "why": "Linezolid binds 23S rRNA and blocks 70S initiation. Azithromycin also binds the 50S subunit but stops tRNA from leaving. Gentamicin binds the 30S subunit, and ciprofloxacin targets DNA gyrase."
  },
  {
    "id": "HUB-010",
    "m": "bacteria2+bacteria3",
    "area": "Anaerobes, oxygen, and drug activity",
    "level": "application",
    "stem": "A patient has an abdominal abscess containing anaerobic bacteria. Why is an aminoglycoside a poor single agent here?",
    "options": [
      "Anaerobes lack the 30S ribosomal subunit",
      "Anaerobes lack a peptidoglycan wall",
      "Drug uptake into bacterial cells depends on oxygen",
      "Anaerobes destroy the drug with beta-lactamases"
    ],
    "answer": 2,
    "why": "Aminoglycosides bind the 30S subunit, but they enter bacterial cells by an oxygen-dependent process, so they fail where there is no oxygen. Anaerobes have 30S subunits and walls, and beta-lactamases do not inactivate aminoglycosides."
  },
  {
    "id": "HUB-011",
    "m": "bacteria2+bacteria3",
    "area": "Anaerobes, oxygen, and drug activity",
    "level": "concept",
    "stem": "Metronidazole kills Clostridioides difficile but spares aerobic bacteria. Which property explains this selectivity?",
    "options": [
      "It binds D-Ala-D-Ala on precursors that anaerobes make",
      "It is reduced to a DNA-damaging radical inside anaerobes",
      "It blocks a folate-pathway step that anaerobes use",
      "It enters through porins that anaerobes express"
    ],
    "answer": 1,
    "why": "Metronidazole is a prodrug that is reductively activated in anaerobic organisms. The activated radical breaks DNA strands. The other options describe targets or entry routes that are not part of its action."
  },
  {
    "id": "HUB-012",
    "m": "bacteria1+bacteria3",
    "area": "Anaerobes, oxygen, and drug activity",
    "level": "application",
    "stem": "A soil-contaminated wound develops gas gangrene. Penicillin G is started, and surgery is planned. What is the main benefit of debridement?",
    "options": [
      "It removes the capsule that shields the organism from penicillin",
      "It removes the pili that anchor the organism",
      "It removes the endotoxin that penicillin releases",
      "It removes oxygen-poor dead tissue where anaerobes multiply"
    ],
    "answer": 3,
    "why": "Clostridium perfringens is an anaerobe. Its alpha toxin destroys tissue and leaves oxygen-poor, poorly perfused dead tissue that supports growth and limits drug delivery. Treatment is penicillin G plus debridement."
  },
  {
    "id": "HUB-013",
    "m": "bacteria1+bacteria3",
    "area": "C. difficile: cause, drug, and infection control",
    "level": "integration",
    "stem": "A patient develops watery diarrhea days after clindamycin for a skin infection. Which sequence best links the drug to the diarrhea?",
    "options": [
      "The drug selects Gram-negative rods that release endotoxin in the colon",
      "The drug damages colon cells directly, which lets flora invade",
      "The drug transfers a toxin gene to resident flora by conjugation",
      "The drug depletes normal flora, so toxin-producing C. difficile overgrows"
    ],
    "answer": 3,
    "why": "Resident flora normally limit colonization by competing for sites and nutrients. Broad antibiotic exposure removes that colonization resistance, and toxin-producing C. difficile expands and causes watery diarrhea."
  },
  {
    "id": "HUB-014",
    "m": "bacteria2+bacteria3",
    "area": "C. difficile: cause, drug, and infection control",
    "level": "application",
    "stem": "Oral vancomycin is an accepted treatment for C. difficile colitis. Which property of the organism makes it susceptible?",
    "options": [
      "An outer membrane with porins that admit the drug",
      "A Gram-positive wall with D-Ala-D-Ala on its precursors",
      "No cell wall, so the drug has no wall target to bind",
      "An aerobic metabolism that activates the drug"
    ],
    "answer": 1,
    "why": "C. difficile is a Gram-positive rod, so vancomycin can reach the D-Ala-D-Ala termini of its wall precursors. It has a wall, no outer membrane, and is an anaerobe."
  },
  {
    "id": "HUB-015",
    "m": "bacteria1+bacteria3",
    "area": "C. difficile: cause, drug, and infection control",
    "level": "application",
    "stem": "A hospital room houses a patient with C. difficile colitis. Which hand hygiene product is preferred after contact, and why?",
    "options": [
      "Alcohol rub, because it kills endospores on contact",
      "Alcohol rub, because spores are removed as it evaporates",
      "Soap and water, because spores survive alcohol rub",
      "Soap and water, because it neutralizes the toxin on the skin"
    ],
    "answer": 2,
    "why": "C. difficile forms endospores that resist alcohol. Washing with soap and water removes them mechanically, and sporicidal disinfectant such as dilute bleach is used on surfaces."
  },
  {
    "id": "HUB-016",
    "m": "bacteria2+bacteria4",
    "area": "Mycobacterial therapy and resistance",
    "level": "integration",
    "stem": "An isoniazid-resistant TB isolate lacks catalase-peroxidase (KatG) activity. Which other antituberculosis drug can fail through the same kind of change?",
    "options": [
      "Pyrazinamide",
      "Ethambutol",
      "Rifampin",
      "Ciprofloxacin"
    ],
    "answer": 0,
    "why": "Isoniazid and pyrazinamide are prodrugs that must be activated inside the microbe, so losing the activating enzyme causes resistance. Ethambutol, rifampin, and ciprofloxacin act directly on their targets."
  },
  {
    "id": "HUB-017",
    "m": "bacteria2+bacteria4",
    "area": "Mycobacterial therapy and resistance",
    "level": "application",
    "stem": "A patient with active tuberculosis is prescribed four drugs at once. Which principle best explains this approach?",
    "options": [
      "It lets each drug activate the next one",
      "It lowers the chance that a resistant mutant survives",
      "It replaces the need for susceptibility testing",
      "It allows shorter dosing intervals for each drug"
    ],
    "answer": 1,
    "why": "A single drug selects spontaneous resistant mutants. Drugs with different targets make it much less likely that one cell resists them all."
  },
  {
    "id": "HUB-018",
    "m": "bacteria2+bacteria4",
    "area": "Mycobacterial therapy and resistance",
    "level": "integration",
    "stem": "A TB isolate is resistant to isoniazid, rifampin, and a fluoroquinolone. Which change most directly explains the fluoroquinolone resistance?",
    "options": [
      "Loss of catalase-peroxidase activity",
      "An altered RNA polymerase",
      "An altered arabinogalactan synthase",
      "An altered DNA gyrase"
    ],
    "answer": 3,
    "why": "Fluoroquinolones inhibit DNA gyrase and topoisomerase IV, and chromosomal mutations that alter gyrase reduce binding. Loss of KatG explains isoniazid resistance, and an altered RNA polymerase explains rifampin resistance."
  },
  {
    "id": "HUB-019",
    "m": "bacteria2+bacteria4",
    "area": "Mycobacterial therapy and resistance",
    "level": "concept",
    "stem": "Which feature of M. leprae best explains why leprosy is treated with three drugs for a prolonged course?",
    "options": [
      "A doubling time of 12 to 14 days, which slows drug killing",
      "Endospore formation that protects the cells from drug exposure",
      "Growth in an extracellular polysaccharide biofilm on tissue",
      "An outer membrane that excludes hydrophilic drugs from the cell"
    ],
    "answer": 0,
    "why": "M. leprae is an obligate intracellular organism with an exceptionally long doubling time, and most antibacterial drugs act best on dividing cells. Rifampin, dapsone, and clofazimine are combined and given for a long period."
  },
  {
    "id": "HUB-020",
    "m": "bacteria2+bacteria3",
    "area": "Toxins, toxoids, and antitoxins",
    "level": "application",
    "stem": "A child with diphtheria receives antitoxin and also needs the diphtheria vaccine. What explains the need for both?",
    "options": [
      "It is a live vaccine that needs boosters",
      "It neutralizes the capsule instead of the toxin",
      "It gives passive protection without a memory response",
      "It is a conjugate that recruits T-cell help"
    ],
    "answer": 2,
    "why": "Antitoxin is preformed antibody, which protects immediately but fades and leaves no memory. The toxoid vaccine provides active, long-term immunity."
  },
  {
    "id": "HUB-021",
    "m": "bacteria2+bacteria3",
    "area": "Toxins, toxoids, and antitoxins",
    "level": "concept",
    "stem": "Diphtheria toxin and Pseudomonas exotoxin A both stop host protein synthesis. Which molecule do both modify?",
    "options": [
      "The 30S ribosomal subunit",
      "DNA gyrase",
      "Elongation factor 2 (EF-2)",
      "RNA polymerase"
    ],
    "answer": 2,
    "why": "Both toxins ADP-ribosylate EF-2 in host cells. The 30S subunit and DNA gyrase are bacterial drug targets, and RNA polymerase is the rifampin target."
  },
  {
    "id": "HUB-022",
    "m": "bacteria1+bacteria3",
    "area": "Toxins, toxoids, and antitoxins",
    "level": "application",
    "stem": "Tetanus toxin acts at nerve endings, and the bacteria stay in the wound. Which preventive tool fits this mechanism?",
    "options": [
      "A toxoid vaccine that induces neutralizing antibody",
      "A plain polysaccharide vaccine against the capsule",
      "A live attenuated vaccine that colonizes the wound",
      "Rifampin prophylaxis for close contacts"
    ],
    "answer": 0,
    "why": "When disease is caused by a secreted exotoxin, vaccination aims at the toxin. Formaldehyde-inactivated toxin (toxoid) induces antibody that neutralizes it. Tetanus is not spread person to person, so contact prophylaxis does not apply."
  },
  {
    "id": "HUB-023",
    "m": "bacteria1+bacteria3",
    "area": "Encapsulated organisms and vaccines",
    "level": "integration",
    "stem": "A patient without a spleen is advised to receive pneumococcal, Hib, and meningococcal vaccines. Which shared feature makes these organisms dangerous when the spleen is absent?",
    "options": [
      "An exotoxin that blocks host protein synthesis",
      "An endospore that survives in the blood",
      "An outer membrane that lacks lipid A",
      "A polysaccharide capsule that resists phagocytosis"
    ],
    "answer": 3,
    "why": "S. pneumoniae, H. influenzae, and N. meningitidis share an antiphagocytic capsule. The spleen normally clears encapsulated organisms from the blood, so asplenia raises the risk of severe infection."
  },
  {
    "id": "HUB-024",
    "m": "bacteria2+bacteria3",
    "area": "Encapsulated organisms and vaccines",
    "level": "application",
    "stem": "A 2-month-old receives a pneumococcal conjugate vaccine and responds well. Which feature of the vaccine makes this response possible at this age?",
    "options": [
      "Live organisms that replicate in the nasopharynx",
      "A protein carrier that recruits T-cell help",
      "Inactivated toxin that induces antitoxin",
      "A plain polysaccharide that stimulates B cells directly"
    ],
    "answer": 1,
    "why": "Plain polysaccharides give a T-independent response that is weak in infants. Linking the polysaccharide to a carrier protein makes the response T-dependent, with memory and effective boosters."
  },
  {
    "id": "HUB-025",
    "m": "bacteria2+bacteria3",
    "area": "Encapsulated organisms and vaccines",
    "level": "concept",
    "stem": "Which three organisms cause meningitis after the newborn period, share an antiphagocytic capsule, and are covered by conjugate vaccines?",
    "options": [
      "S. pneumoniae, N. meningitidis, and H. influenzae",
      "L. monocytogenes, S. agalactiae, and E. coli",
      "S. aureus, S. epidermidis, and S. pyogenes",
      "B. pertussis, C. diphtheriae, and C. tetani"
    ],
    "answer": 0,
    "why": "Pneumococcus, meningococcus, and Haemophilus influenzae are the three encapsulated pyogens, and Hib, PCV, and MenACWY are conjugate vaccines. Listeria and group B strep are neonatal causes, and the last two lists include organisms without this shared capsule feature."
  },
  {
    "id": "HUB-026",
    "m": "bacteria2+bacteria3+bacteria4",
    "area": "Choosing a drug: targets and organisms",
    "level": "concept",
    "stem": "Rifampin treats tuberculosis, protects close contacts of meningococcal disease, and is part of leprosy therapy. Which target explains its activity across these three uses?",
    "options": [
      "DNA gyrase",
      "The 23S rRNA of the 50S subunit",
      "DNA-dependent RNA polymerase",
      "Dihydropteroate synthase"
    ],
    "answer": 2,
    "why": "Rifampin inhibits bacterial DNA-dependent RNA polymerase and blocks mRNA synthesis, whatever the organism. DNA gyrase, 23S rRNA, and dihydropteroate synthase are targets of fluoroquinolones, linezolid, and sulfonamides."
  },
  {
    "id": "HUB-027",
    "m": "bacteria2+bacteria4",
    "area": "Choosing a drug: targets and organisms",
    "level": "concept",
    "stem": "Doxycycline treats Lyme disease, anaplasmosis, and Rocky Mountain spotted fever. Which mechanism underlies its antibacterial action?",
    "options": [
      "Binding the 50S subunit so tRNA cannot leave after transfer",
      "Binding the 30S subunit to block aminoacyl-tRNA entry at the A site",
      "Inhibiting DNA gyrase and topoisomerase IV to stop replication",
      "Mimicking PABA to block an early folate-pathway step"
    ],
    "answer": 1,
    "why": "Tetracyclines bind the 30S subunit and stop aminoacyl-tRNA from entering the A site. Macrolides block tRNA exit from the 50S subunit, fluoroquinolones target gyrase, and sulfonamides mimic PABA."
  },
  {
    "id": "HUB-028",
    "m": "bacteria2+bacteria4",
    "area": "Choosing a drug: targets and organisms",
    "level": "integration",
    "stem": "A patient bitten by an Ixodes tick is treated for Lyme disease with amoxicillin but stays febrile. Which change to the regimen also covers the likely coinfection?",
    "options": [
      "Add ceftriaxone to broaden coverage against Gram-negative rods",
      "Add metronidazole to cover anaerobic organisms",
      "Add vancomycin to cover Gram-positive cocci",
      "Switch to doxycycline, which also treats anaplasmosis"
    ],
    "answer": 3,
    "why": "The blacklegged tick can transmit both Borrelia and Anaplasma. Doxycycline is active against both, whereas amoxicillin does not treat anaplasmosis, and the other additions cover organisms that are not the concern here."
  },
  {
    "id": "HUB-029",
    "m": "bacteria1+bacteria2+bacteria3",
    "area": "Choosing a drug: targets and organisms",
    "level": "application",
    "stem": "An adult over 50 has meningitis from a non-encapsulated organism that escapes the phagosome using listeriolysin. Which drug must be added because cephalosporins cannot substitute?",
    "options": [
      "Ceftriaxone",
      "Vancomycin",
      "Rifampin",
      "Ampicillin"
    ],
    "answer": 3,
    "why": "This describes Listeria monocytogenes. Ampicillin is added to empiric meningitis therapy for newborns and for adults over 50 or immunocompromised, because cephalosporins do not cover Listeria."
  },
  {
    "id": "HUB-030",
    "m": "bacteria3+bacteria4",
    "area": "Sexually transmitted pathogens",
    "level": "application",
    "stem": "A young adult has urethral discharge, and a smear shows Gram-negative diplococci inside neutrophils. Ceftriaxone is given while chlamydia testing is pending. Which additional drug covers Chlamydia trachomatis?",
    "options": [
      "Vancomycin",
      "Doxycycline",
      "Metronidazole",
      "Rifampin"
    ],
    "answer": 1,
    "why": "Gonorrhea is treated with ceftriaxone, and doxycycline is added when chlamydia has not been excluded, because the two infections often coexist."
  },
  {
    "id": "HUB-031",
    "m": "bacteria3+bacteria4",
    "area": "Sexually transmitted pathogens",
    "level": "application",
    "stem": "A newborn develops purulent conjunctivitis during the first two weeks of life. Which pair of organisms acquired at delivery should be considered?",
    "options": [
      "S. aureus and S. pyogenes",
      "H. influenzae and B. pertussis",
      "N. gonorrhoeae and C. trachomatis",
      "T. pallidum and B. burgdorferi"
    ],
    "answer": 2,
    "why": "Both the gonococcus and Chlamydia trachomatis are transmitted from an infected birth canal and cause neonatal conjunctivitis. Eye prophylaxis at birth is aimed at the gonococcus."
  },
  {
    "id": "HUB-032",
    "m": "bacteria3+bacteria4",
    "area": "Sexually transmitted pathogens",
    "level": "integration",
    "stem": "Patient A has a painless genital ulcer consistent with primary syphilis. Patient B has urethral discharge with intracellular Gram-negative diplococci. Which drug pairing fits best for patients A and B?",
    "options": [
      "A: benzathine penicillin G; B: ceftriaxone",
      "A: ceftriaxone; B: benzathine penicillin G",
      "A: azithromycin; B: benzathine penicillin G",
      "A: doxycycline; B: azithromycin"
    ],
    "answer": 0,
    "why": "T. pallidum has never developed documented resistance to penicillin and is typically resistant to macrolides, so benzathine penicillin G is first line. Gonorrhea is treated with ceftriaxone."
  },
  {
    "id": "HUB-033",
    "m": "bacteria1+bacteria4",
    "area": "Transmission routes and reservoirs",
    "level": "application",
    "stem": "A farm worker develops fever after helping with lambing and reports no tick bites. Which organism and route fit best?",
    "options": [
      "Rickettsia rickettsii, through a Dermacentor tick bite",
      "Coxiella burnetii, through aerosols from birth products",
      "Anaplasma phagocytophilum, through an Ixodes tick bite",
      "Chlamydia psittaci, through inhaled bird droppings"
    ],
    "answer": 1,
    "why": "Q fever is acquired by inhaling aerosols from infected livestock birth products or by unpasteurized dairy, not by ticks. The other options name real routes for different organisms."
  },
  {
    "id": "HUB-034",
    "m": "bacteria1+bacteria3",
    "area": "Transmission routes and reservoirs",
    "level": "concept",
    "stem": "A worker who handles animal hides develops a painless black eschar. Which structure lets the causative organism persist in hides for years?",
    "options": [
      "Capsule",
      "Biofilm",
      "Pilus",
      "Endospore"
    ],
    "answer": 3,
    "why": "Bacillus anthracis forms endospores that resist heat, drying, and many disinfectants. Spores entering a wound cause cutaneous anthrax with a black eschar."
  },
  {
    "id": "HUB-035",
    "m": "bacteria2+bacteria3",
    "area": "Transmission routes and reservoirs",
    "level": "application",
    "stem": "A daycare outbreak of bloody diarrhea spreads quickly from child to child. Shigella has a low infectious dose of 10 to 200 organisms. Which measure best interrupts spread?",
    "options": [
      "Hand hygiene and contact precautions",
      "Toxoid vaccination of the daycare contacts",
      "Chemoprophylaxis with rifampin for the daycare",
      "Antitoxin for the exposed children"
    ],
    "answer": 0,
    "why": "A tiny infectious dose means small amounts of fecal contamination can transmit disease person to person. Hand hygiene and contact precautions break that chain. Shigella disease is not prevented by a toxoid, and antitoxin or rifampin prophylaxis is not standard."
  },
  {
    "id": "HUB-036",
    "m": "bacteria3+bacteria4",
    "area": "Reading the lab and the patient",
    "level": "application",
    "stem": "Two patients have pneumonia. Sputum from patient 1 shows Gram-positive diplococci. Sputum from patient 2 shows no organisms on Gram stain. Which organism pair fits patients 1 and 2?",
    "options": [
      "M. pneumoniae and S. pneumoniae",
      "H. influenzae and S. pneumoniae",
      "S. pneumoniae and M. pneumoniae",
      "S. aureus and K. pneumoniae"
    ],
    "answer": 2,
    "why": "Pneumococcus is a Gram-positive diplococcus. Mycoplasma pneumoniae has no cell wall, so the stain does not reveal it. The other pairs reverse the order or include organisms with a different stain appearance."
  },
  {
    "id": "HUB-037",
    "m": "bacteria1+bacteria3",
    "area": "Reading the lab and the patient",
    "level": "application",
    "stem": "One of four blood culture bottles grows S. epidermidis in a patient with no prosthetic material and no fever. Which interpretation fits best?",
    "options": [
      "True endocarditis, so start vancomycin and search for a source",
      "Catheter infection, so remove the line and culture its tip",
      "Skin contamination, so correlate with the clinical picture first",
      "Laboratory error, so repeat the identification on the same isolate"
    ],
    "answer": 2,
    "why": "S. epidermidis is a coagulase-negative skin organism that causes device infections but is also a frequent contaminant. A single positive bottle without a device or symptoms must be read with the clinical picture before treating."
  },
  {
    "id": "HUB-038",
    "m": "bacteria1+bacteria3",
    "area": "Reading the lab and the patient",
    "level": "integration",
    "stem": "A patient with a central line has persistent S. epidermidis bacteremia even though the isolate tests susceptible to the chosen drug. Which feature best explains the persistence?",
    "options": [
      "Biofilm on the catheter that shields cells from the drug",
      "Endospores that let the cells tolerate the drug",
      "Loss of the cell wall that removes the drug’s target",
      "An exotoxin that inactivates the drug in the blood"
    ],
    "answer": 0,
    "why": "S. epidermidis is the classic device-infection organism. A biofilm of proteins, polysaccharides, and extracellular DNA protects the cells, so a susceptible MIC does not guarantee clearance while the device stays in place."
  }
];
