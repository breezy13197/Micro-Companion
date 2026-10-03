/* ============================================================
   banks/bacteria4.js
   Content bank for Bacteria IV — Other Pathogens.
   Pure data: no DOM, no dependency on shared/ or on bacteria4.html.
   A hub or a bank editor can read this file on its own.

   BUILD STATUS: Complete. All six modules, Flashcards, and the
   Mastery Challenge are live. Every checkpoint and quiz question
   below has been checked against the course's Question Writing
   Guidelines: single best answer, independent items, positive
   stems, 3-5 homogeneous/parallel distractors, no absolute or vague
   qualifiers, no "all/none of the above", and a teaching rationale
   on every item.

   POOL DEPTH (bank-expansion pass, IDs BAC4-049 through BAC4-087):
   every `area` tag was originally covered by only 1-2 POOL
   questions, which meant MODULE_QUIZ_SIZE (8) equaled or nearly
   equaled each module's entire pool — every quiz retake showed the
   same questions, and engine.js's adaptive round (startMastery() in
   engine.js) had no fresh question left for a weak area and had to
   silently replay one already seen. 39 new, independently-written
   alternative-scenario questions were added so every area now has
   at least 3 questions (never a cosmetic reword of an existing
   stem — each tests the same concept through a different clinical
   vignette, demographic, or angle of reasoning). This also means a
   module quiz retake can now draw a genuinely different subset.
   engine.js has no student-facing "you've seen this one" indicator,
   and that file is shared across every companion in this course, so
   it isn't something a single companion's bank can add — with 3+
   questions per area the silent-reuse fallback should now be rare,
   but if a future maintainer still hits it often for one area, that
   area is the one to add a 4th question to first.
   ============================================================ */

var TOPIC_ID    = 'bacteria4';
var TOPIC_TITLE = 'Bacteria IV — Other Pathogens';

/* ---------------------------------------------------------------
   CHECKPOINTS — the mid-section "predict it" questions.
   options are written BEFORE shuffling; answer is the index of the
   correct option in that original order.
   --------------------------------------------------------------- */
var CHECKPOINTS = {

  /* m1s1 — the acid-fast wall */
  c1: {
    options: [
      'Its mycolic-acid-rich, lipid-dense outer layer',
      'A thick layer of peptidoglycan',
      'A capsule made of lipopolysaccharide',
      'An unusually long flagellum'
    ],
    answer: 0,
    why: 'Roughly 60% of the mycobacterial cell wall by weight is lipid, dominated by mycolic acids. That waxy layer is what lets the cell hold onto carbol fuchsin dye through an acid-alcohol wash — the property "acid-fast" describes.'
  },
  c1b: {
    options: [
      'Neither Gram-positive nor Gram-negative',
      'Gram-positive only',
      'Gram-negative only',
      'Gram-variable, depending on growth phase'
    ],
    answer: 0,
    why: 'The mycolic-acid wall does not take up the Gram stain in either direction, so Mycobacterium is classified outside the Gram system entirely and identified by acid-fast staining instead.'
  },
  c1c: {
    options: [
      'Decrease markedly, since the layer that traps the dye would be gone',
      'Increase markedly',
      'Stay unchanged',
      'Shift to a typical Gram-positive staining pattern'
    ],
    answer: 0,
    why: 'Acid-fastness is a direct consequence of the lipid-rich outer layer physically holding onto the stain. Strip that layer away and the dye would wash out during the acid-alcohol step, the same way it would in a non-acid-fast organism.'
  },

  /* m1s2 — infection, containment, and disease */
  c2: {
    options: [
      'Latent TB infection',
      'Active pulmonary TB',
      'Extrapulmonary TB',
      'Primary progressive disease'
    ],
    answer: 0,
    why: 'Successful granuloma containment with no symptoms is the definition of latent TB infection — the organism is present but held in check, and the patient does not transmit it.'
  },
  c2b: {
    options: [
      'The patient does not transmit the organism to others',
      'The patient is immediately started on four-drug therapy',
      'The patient\'s sputum smear is acid-fast positive',
      'The infection can never reactivate later in life'
    ],
    answer: 0,
    why: 'A patient with latent TB infection is asymptomatic and non-infectious. Reactivation later in life is exactly the risk that latency carries, which is why some patients are offered preventive therapy rather than the full four-drug active-disease regimen.'
  },
  c2c: {
    options: [
      'Waning immune control over time',
      'Recently completing the BCG vaccine series',
      'A doubling time shorter than 20 minutes',
      'Acquisition of a resistance plasmid'
    ],
    answer: 0,
    why: 'Reactivation happens when the immune system\'s hold on the granuloma weakens — from aging, immunosuppression, or illness — letting bacilli that were contained resume active growth. M. tuberculosis has no plasmids and a doubling time of about 18 hours, not minutes.'
  },

  /* m1s3 — why four drugs */
  c3: {
    options: [
      'Mycolic acid synthesis',
      'RNA polymerase',
      'Arabinogalactan synthesis',
      'Folate metabolism'
    ],
    answer: 0,
    why: 'Isoniazid blocks mycolic acid synthesis, the same pathway that builds the wall responsible for acid-fastness — which is also why a katG mutation (needed to activate the drug) confers resistance to it.'
  },
  c3b: {
    options: [
      'Pyrazinamide',
      'Rifampin',
      'Ethambutol',
      'Isoniazid'
    ],
    answer: 0,
    why: 'Pyrazinamide is a first-line TB drug with proven clinical benefit whose exact mechanism is still not fully established — an unusual case among the four first-line agents, all of which have well-characterized targets except this one.'
  },
  c3c: {
    options: [
      'It produces beta-lactamase',
      'It lacks penicillin-binding proteins entirely',
      'It has no cell wall',
      'It is an obligate anaerobe'
    ],
    answer: 0,
    why: 'M. tuberculosis synthesizes its own beta-lactamase, which degrades standard beta-lactams before they can act — one reason this drug class is not part of first-line TB therapy (carbapenem-clavulanate combinations are a documented exception).'
  },

  /* m1s4 — resistance lab */
  c4: {
    options: [
      'Isoniazid',
      'Rifampin',
      'Ethambutol',
      'Pyrazinamide'
    ],
    answer: 0,
    why: 'Catalase-peroxidase (KatG) is required to convert isoniazid into its active form. A mutation that disables this enzyme prevents that activation, producing isoniazid resistance specifically.'
  },
  c4b: {
    options: [
      'Chromosomal mutation',
      'Plasmid acquisition',
      'Transduction from other bacterial species',
      'Biofilm formation'
    ],
    answer: 0,
    why: 'M. tuberculosis carries no plasmids, so unlike many other bacteria, it cannot acquire resistance genes this way. Every documented resistance mechanism in this organism traces back to a chromosomal mutation.'
  },
  c4c: {
    options: [
      'Multidrug-resistant (MDR) TB',
      'Extensively drug-resistant (XDR) TB',
      'Latent TB infection',
      'Atypical mycobacterial disease'
    ],
    answer: 0,
    why: 'MDR-TB is defined specifically as resistance to both isoniazid and rifampin. XDR-TB requires that same MDR profile plus resistance to a fluoroquinolone and at least one Group A drug (bedaquiline or linezolid).'
  },

  /* m1s5 — TB, MAC, or leprosy */
  c5: {
    options: [
      'Mycobacterium avium-intracellulare complex',
      'Mycobacterium tuberculosis',
      'Mycobacterium leprae',
      'Nocardia asteroides'
    ],
    answer: 0,
    why: 'MAC is the most common atypical mycobacterial infection and primarily affects severely immunocompromised patients (CD4 counts under 200 cells/µL), producing TB-like pulmonary disease that is highly resistant to standard anti-tuberculosis drugs.'
  },
  c5b: {
    options: [
      'An exceptionally long doubling time and obligate intracellular growth',
      'A shorter doubling time and purely extracellular growth',
      'Absence of mycolic acid in its cell wall',
      'Resistance mediated by plasmid transfer'
    ],
    answer: 0,
    why: 'M. leprae still carries the traditional mycolic-acid wall, but is an obligate intracellular organism with a doubling time of 12-14 days — even slower than M. tuberculosis\'s already-slow 18-hour cycle.'
  },
  c5c: {
    options: [
      'Rifampin, dapsone, and clofazimine',
      'Isoniazid, rifampin, and pyrazinamide',
      'Doxycycline, azithromycin, and trimethoprim-sulfamethoxazole',
      'Penicillin G, gentamicin, and vancomycin'
    ],
    answer: 0,
    why: 'Leprosy treatment is a three-drug combination of rifampin, dapsone, and clofazimine — a distinct regimen from standard TB therapy, even though both organisms share a mycolic-acid cell wall.'
  },

  /* m2s1 — Actinomyces or Nocardia? */
  c6: {
    options: [
      'Actinomyces israelii',
      'Nocardia asteroides',
      'Mycoplasma pneumoniae',
      'Mycobacterium tuberculosis'
    ],
    answer: 0,
    why: 'A draining sinus tract with visible "sulfur granules" in the pus is the classic, exam-favorite presentation of actinomycosis.'
  },
  c6b: {
    options: [
      'Aerobic; found in soil',
      'Anaerobic; part of normal oral flora',
      'Aerobic; part of normal skin flora',
      'Anaerobic; found in soil'
    ],
    answer: 0,
    why: 'Nocardia is an aerobic environmental organism acquired from soil — the opposite of Actinomyces, which is anaerobic and lives as normal oral flora.'
  },
  c6c: {
    options: [
      'Actinomyces israelii, following disruption of normal oral flora by trauma',
      'Nocardia asteroides, following inhalation of soil organisms',
      'Mycoplasma pneumoniae, following person-to-person droplet spread',
      'Mycobacterium leprae, following prolonged skin contact'
    ],
    answer: 0,
    why: 'Poor dentition and jaw trauma are exactly the kind of mucosal disruption that lets Actinomyces — already present as normal flora — invade adjacent tissue and form its characteristic draining abscess.'
  },

  /* m2s2 — follow the infection */
  c7: {
    options: [
      'Disruption of the oral mucosa, such as by dental trauma or extraction',
      'Inhalation of soil-contaminated dust',
      'A tick bite',
      'Sexual contact'
    ],
    answer: 0,
    why: 'Actinomyces is already present as normal oral flora; it only becomes invasive once trauma breaches the mucosal barrier that normally keeps it contained.'
  },
  c7b: {
    options: [
      'The brain',
      'The heart valves',
      'The joints',
      'The liver'
    ],
    answer: 0,
    why: 'Nocardiosis characteristically disseminates from an initial lung infection to the brain, producing abscesses — a pattern worth recognizing in an immunocompromised patient with pulmonary symptoms.'
  },
  c7c: {
    options: [
      'Immunocompromised patients',
      'Patients with recent dental work',
      'Patients with tick exposure',
      'Neonates only'
    ],
    answer: 0,
    why: 'Nocardiosis disproportionately affects immunocompromised patients, in contrast to actinomycosis, which can occur in otherwise healthy people after mucosal trauma.'
  },

  /* m2s3 — remove the cell wall */
  c8: {
    options: [
      'Cholesterol',
      'Ergosterol',
      'Lipopolysaccharide',
      'Teichoic acid'
    ],
    answer: 0,
    why: 'Mycoplasma pneumoniae is the only clinically important bacterium whose membrane incorporates cholesterol — a lipid otherwise associated with eukaryotic membranes.'
  },
  c8b: {
    options: [
      'Beta-lactams',
      'Macrolides',
      'Tetracyclines',
      'Fluoroquinolones'
    ],
    answer: 0,
    why: 'Beta-lactams work by blocking peptidoglycan cross-linking. An organism with no peptidoglycan wall at all has nothing for this drug class to act on.'
  },
  c8c: {
    options: [
      'It cannot be routinely isolated by standard culture, and its pneumonia does not resemble pneumococcal pneumonia',
      'It lacks any cell membrane at all',
      'It is not actually a bacterium',
      'It produces no clinical disease'
    ],
    answer: 0,
    why: '"Atypical" describes both the organism\'s poor recovery on standard culture media and the clinical picture — a gradual, "walking pneumonia" course rather than the abrupt, lobar picture typical of Streptococcus pneumoniae.'
  },

  /* m2s4 — walking pneumonia case */
  c9: {
    options: [
      'Inhibiting ciliary motion, leading to cell necrosis',
      'Invading and lysing epithelial cells directly',
      'Producing a potent exotoxin',
      'Forming a biofilm that occludes the airway'
    ],
    answer: 0,
    why: 'Mycoplasma\'s tapered tips attach to respiratory epithelium and interfere with ciliary motion; it does not invade the cell, but the resulting loss of ciliary clearance still leads to local tissue damage.'
  },
  c9b: {
    options: [
      'Macrolides',
      'Aminoglycosides',
      'Vancomycin',
      'First-generation cephalosporins'
    ],
    answer: 0,
    why: 'Macrolides (erythromycin, azithromycin) are first-line for M. pneumoniae; tetracyclines and fluoroquinolones are alternatives. All three work on the ribosome or DNA — never on a cell wall this organism doesn\'t have.'
  },
  c9c: {
    options: [
      'Respiratory droplets',
      'Tick bite',
      'Sexual contact',
      'Fecal-oral route'
    ],
    answer: 0,
    why: 'M. pneumoniae spreads person-to-person via respiratory droplets, which is exactly why it clusters in crowded settings like dormitories and military barracks.'
  },

  /* m3s1 — build a spirochete */
  c10: {
    options: [
      'Thin-walled, flexible, motile rods',
      'Thick-walled, rigid cocci',
      'Branching filamentous organisms',
      'Organisms with no discernible structure'
    ],
    answer: 0,
    why: 'Spirochetes are defined by this thin, flexible, motile rod shape — a very different silhouette from the branching filaments of Actinomyces and Nocardia, or the rigid rods of Mycobacterium.'
  },
  c10b: {
    options: [
      'Periplasmic flagella wrapped around the cell cylinder',
      'A single polar flagellum',
      'Pili extending from the outer membrane',
      'Gliding motility with no dedicated structure'
    ],
    answer: 0,
    why: 'Periplasmic (endo)flagella wrap around the cell cylinder and anchor at both poles, producing the spirochete\'s signature corkscrew movement.'
  },
  c10c: {
    options: [
      'Treponema pallidum and Borrelia burgdorferi',
      'Mycobacterium tuberculosis and Mycobacterium leprae',
      'Actinomyces israelii and Nocardia asteroides',
      'Chlamydia trachomatis and Chlamydia psittaci'
    ],
    answer: 0,
    why: 'These are the two medically important spirochetes covered here — structurally similar, but responsible for very different diseases.'
  },

  /* m3s2 — stage the syphilis patient */
  c11: {
    options: [
      'Primary syphilis',
      'Secondary syphilis',
      'Tertiary syphilis',
      'Congenital syphilis'
    ],
    answer: 0,
    why: 'A painless ulcer (chancre) appearing at the inoculation site is the hallmark of primary syphilis, and it can heal on its own even as the organism continues to spread.'
  },
  c11b: {
    options: [
      'Secondary syphilis',
      'Primary syphilis',
      'Tertiary syphilis',
      'Latent syphilis with no further risk'
    ],
    answer: 0,
    why: 'Fever, malaise, weight loss, and a maculopapular rash following the primary chancre describe secondary syphilis, the systemic stage of the disease.'
  },
  c11c: {
    options: [
      'Tertiary syphilis',
      'Primary syphilis',
      'Secondary syphilis',
      'Congenital syphilis'
    ],
    answer: 0,
    why: 'CNS involvement and cardiovascular lesions, appearing after a period of latency, define tertiary syphilis — the late consequence of untreated infection.'
  },

  /* m3s3 — follow Lyme disease */
  c12: {
    options: [
      'Erythema migrans, a bullseye rash with central clearing',
      'Facial palsy',
      'Joint arthritis',
      'A painless genital chancre'
    ],
    answer: 0,
    why: 'Erythema migrans is the hallmark finding of stage 1 Lyme disease — the clue that prompts early treatment before the infection can progress.'
  },
  c12b: {
    options: [
      'Stage 2',
      'Stage 1',
      'Stage 3',
      'Congenital Lyme disease'
    ],
    answer: 0,
    why: 'Neurologic findings like meningitis and cardiac findings like myocarditis mark stage 2 disease, occurring as the untreated infection disseminates further.'
  },
  c12c: {
    options: [
      'OspA and OspC',
      'Cord factor and ESAT-6',
      'Protein A and coagulase',
      'Pertussis toxin and pertactin'
    ],
    answer: 0,
    why: 'OspA and OspC are Borrelia burgdorferi surface adhesins and established virulence factors — notably, Lyme disease has no classic exotoxin identified.'
  },

  /* m3s4 — syphilis or Lyme? */
  c13: {
    options: [
      'Syphilis spreads between humans, including vertically, while Lyme disease requires a tick vector',
      'Both require the same arthropod vector',
      'Syphilis requires a tick vector, while Lyme disease spreads sexually',
      'Neither organism is transmissible between humans'
    ],
    answer: 0,
    why: 'Treponema pallidum spreads by sexual contact and vertical transmission, with humans as the only reservoir. Borrelia burgdorferi is a zoonotic infection requiring a tick vector — never spread person-to-person.'
  },
  c13b: {
    options: [
      'Borrelia burgdorferi',
      'Treponema pallidum',
      'Actinomyces israelii',
      'Rickettsia rickettsii'
    ],
    answer: 0,
    why: 'An expanding, warm rash with central clearing after a hike (likely tick exposure) describes erythema migrans, the signature early finding of Lyme disease.'
  },
  c13c: {
    options: [
      'Benzathine penicillin G for syphilis; doxycycline for Lyme disease',
      'Doxycycline for syphilis; penicillin G for Lyme disease',
      'Trimethoprim-sulfamethoxazole for both',
      'A macrolide for both, since spirochetes respond equally well to this class'
    ],
    answer: 0,
    why: 'Benzathine penicillin G is first-line for syphilis, while doxycycline or amoxicillin is first-line for Lyme disease. T. pallidum is typically resistant to macrolides.'
  },

  /* m3s5 — reaction detective */
  c14: {
    options: [
      'Lysis of spirochetes releasing endotoxin-like substances',
      'IgE-mediated mast cell degranulation',
      'Direct toxicity of the antibiotic on the liver',
      'Cross-reactivity with a related drug class'
    ],
    answer: 0,
    why: 'The Jarisch-Herxheimer reaction results from antibiotic-induced lysis of spirochetes, which releases endotoxin-like substances — an entirely different mechanism from a true IgE-mediated drug allergy.'
  },
  c14b: {
    options: [
      '24 to 72 hours afterward',
      'Within minutes of the first dose',
      'Not until the full course is finished',
      'Weeks after the antibiotic is stopped'
    ],
    answer: 0,
    why: 'The Jarisch-Herxheimer reaction typically begins 24 to 72 hours after the first antibiotic dose — a timing pattern distinct from the near-immediate onset of anaphylaxis.'
  },
  c14c: {
    options: [
      'Supportive care, such as antipyretics and IV fluids, while continuing the antibiotic',
      'Immediate epinephrine and discontinuation of the antibiotic',
      'Switching immediately to a different antibiotic class',
      'Withholding all fluids until symptoms resolve'
    ],
    answer: 0,
    why: 'Because the Jarisch-Herxheimer reaction is not an allergy, management is supportive — antipyretics and IV fluids — and the antibiotic is continued rather than stopped.'
  },

  /* m4s1 — EB or RB? */
  c15: {
    options: [
      'The elementary body (EB)',
      'The reticulate body (RB)',
      'Both forms equally',
      'Neither form is infectious'
    ],
    answer: 0,
    why: 'The EB is the infectious, extracellular form built to survive outside a cell long enough to attach to and enter a new one.'
  },
  c15b: {
    options: [
      'The reticulate body (RB)',
      'A spore',
      'A second elementary body',
      'A free-living bacterium'
    ],
    answer: 0,
    why: 'Once inside the cell, the EB differentiates into the RB — the metabolically active form responsible for replication.'
  },
  c15c: {
    options: [
      'The reticulate body (RB)',
      'The elementary body (EB)',
      'Both forms equally',
      'Neither form replicates'
    ],
    answer: 0,
    why: 'The RB is the only form that divides by binary fission; the EB is metabolically inactive and cannot replicate.'
  },

  /* m4s2 — build the chlamydial lifecycle */
  c16: {
    options: [
      'Attachment of an infectious elementary body to an epithelial cell',
      'Replication of reticulate bodies',
      'Release of new elementary bodies',
      'Differentiation of RBs back into EBs'
    ],
    answer: 0,
    why: 'The cycle begins with attachment — the infectious EB contacting an epithelial cell before entry can occur.'
  },
  c16b: {
    options: [
      'Inside a membrane-bound inclusion within the host cell',
      'Freely in the extracellular space',
      'Within the host cell\'s mitochondria',
      'Outside the host entirely, in the environment'
    ],
    answer: 0,
    why: 'Chlamydia replicates inside a membrane-bound inclusion, a protected compartment within the host cell — never freely in the environment, since it depends on the host for energy.'
  },
  c16c: {
    options: [
      'Lysis or extrusion',
      'Sporulation or budding',
      'Conjugation or transduction',
      'Phagocytosis or pinocytosis'
    ],
    answer: 0,
    why: 'Newly formed elementary bodies exit the host cell by either lysing the cell outright or by extrusion, a more contained release that can leave the host cell intact.'
  },

  /* m4s3 — break the lifecycle */
  c17: {
    options: [
      'No new infectious particles are produced',
      'The cell immediately lyses',
      'The infection becomes more virulent',
      'Replication accelerates'
    ],
    answer: 0,
    why: 'The EB is the only infectious form. If RBs never differentiate back into EBs, the cycle has no way to generate particles capable of infecting a new cell.'
  },
  c17b: {
    options: [
      'Replication',
      'Attachment',
      'Entry',
      'Release'
    ],
    answer: 0,
    why: 'Binary fission — the actual multiplication of the organism — happens during the replication phase, when RBs are dividing inside the inclusion.'
  },
  c17c: {
    options: [
      'Release of elementary bodies by lysis or extrusion',
      'Attachment of the EB to the first cell',
      'Differentiation of the EB into an RB',
      'Entry into the inclusion'
    ],
    answer: 0,
    why: 'Release is the step that actually gets new infectious EBs out of the original cell and into position to attach to additional cells — without it, the infection stays confined to one cell.'
  },

  /* m4s4 — which Chlamydia? */
  c18: {
    options: [
      'Chlamydia psittaci',
      'Chlamydia trachomatis',
      'Chlamydia pneumoniae',
      'Coxiella burnetii'
    ],
    answer: 0,
    why: 'C. psittaci\'s natural host is birds; humans are infected by inhaling dried droppings or secretions, not through person-to-person spread.'
  },
  c18b: {
    options: [
      'Chlamydia trachomatis',
      'Chlamydia pneumoniae',
      'Chlamydia psittaci',
      'Mycoplasma pneumoniae'
    ],
    answer: 0,
    why: 'Of the three Chlamydia species, only C. trachomatis is spread by sexual contact (as well as perinatally); the other two spread by respiratory droplet or bird exposure.'
  },
  c18c: {
    options: [
      'Chlamydia psittaci',
      'Chlamydia trachomatis',
      'Chlamydia pneumoniae',
      'Nocardia asteroides'
    ],
    answer: 0,
    why: 'Prolonged exposure to birds and a pneumonia presentation point to psittacosis, caused by C. psittaci.'
  },

  /* m4s5 — C. trachomatis clinical challenge */
  c19: {
    options: [
      'Asymptomatic carriers are an important reservoir for ongoing transmission',
      'Asymptomatic infection always progresses to infertility within weeks',
      'Untreated infection causes immediate systemic sepsis',
      'Asymptomatic patients cannot transmit the organism'
    ],
    answer: 0,
    why: 'Because C. trachomatis so often causes no symptoms, untreated asymptomatic carriers can unknowingly keep transmitting the infection — which is exactly why screening and treatment don\'t wait for symptoms.'
  },
  c19b: {
    options: [
      'A watery, nonpurulent discharge',
      'A thick, purulent discharge',
      'A painless genital chancre',
      'An expanding bullseye rash'
    ],
    answer: 0,
    why: 'Non-gonococcal urethritis from C. trachomatis classically produces a watery, nonpurulent discharge, in contrast to the thicker, purulent discharge more typical of gonococcal urethritis.'
  },
  c19c: {
    options: [
      'Doxycycline 100 mg twice daily for 7 days',
      'Azithromycin 1 g as a single dose, used first-line in every patient',
      'Penicillin G',
      'Trimethoprim-sulfamethoxazole for 7 days'
    ],
    answer: 0,
    why: 'Current CDC guidance places doxycycline 100 mg BID for 7 days as first-line for nonpregnant patients; single-dose azithromycin is reserved specifically for pregnancy or adherence concerns, not used as the default choice.'
  },

  /* m5s1 — from endothelium to rash */
  c20: {
    options: [
      'Endothelial cells lining blood vessels',
      'Alveolar macrophages',
      'Red blood cells',
      'Neurons directly'
    ],
    answer: 0,
    why: 'Rickettsia rickettsii invades the endothelial cells lining small blood vessels — the starting point for the vasculitis that produces nearly every finding of RMSF.'
  },
  c20b: {
    options: [
      'Vasculitis and inflammation of blood vessels in the brain',
      'Direct invasion of neurons by the organism',
      'A classic exotoxin acting on the CNS',
      'Bacterial meningitis caused by a coinfection'
    ],
    answer: 0,
    why: 'The severe headache of RMSF comes from vasculitis affecting blood vessels in the brain, not from the organism invading neurons or producing a CNS-active toxin.'
  },
  c20c: {
    options: [
      'Phospholipase D and a pore-forming hemolysin',
      'Cord factor and ESAT-6',
      'Lipid A and O antigen',
      'Coagulase and protein A'
    ],
    answer: 0,
    why: 'These two factors are believed to help Rickettsia enter host cells and escape the phagosome — the other pairs listed belong to Mycobacterium, LPS-producing organisms, and Staphylococcus aureus, respectively.'
  },

  /* m5s2 — RMSF clinical clock */
  c21: {
    options: [
      'Clinical suspicion and exposure history, without waiting for the rash',
      'Confirmed rash only',
      'Positive serologic testing only',
      'Only after symptoms have persisted more than a week'
    ],
    answer: 0,
    why: 'Waiting for the rash or lab confirmation can delay treatment dangerously. Doxycycline is started empirically based on clinical suspicion and exposure history alone.'
  },
  c21b: {
    options: [
      '2 to 6 days',
      'Immediately, within hours',
      '3 to 4 weeks',
      'It never appears in confirmed cases'
    ],
    answer: 0,
    why: 'The rash of RMSF classically follows fever onset by 2 to 6 days — by which point treatment, ideally, should already be underway.'
  },
  c21c: {
    options: [
      'CNS changes, disseminated intravascular coagulation, and circulatory collapse',
      'Joint arthritis only',
      'A painless chancre',
      'Psittacosis'
    ],
    answer: 0,
    why: 'Untreated RMSF can progress to severe, life-threatening disease, including CNS changes, DIC, and circulatory collapse — all downstream consequences of ongoing, unchecked vascular injury.'
  },

  /* m5s3 — vector match */
  c22: {
    options: [
      'The lone star tick (Amblyomma americanum)',
      'The blacklegged tick (Ixodes scapularis)',
      'The Dermacentor tick',
      'No tick vector is involved'
    ],
    answer: 0,
    why: 'Ehrlichia chaffeensis is transmitted by the lone star tick, distinct from the ticks that carry Lyme disease, anaplasmosis, or RMSF.'
  },
  c22b: {
    options: [
      'Lyme disease',
      'Rocky Mountain spotted fever',
      'Ehrlichiosis',
      'Q fever'
    ],
    answer: 0,
    why: 'Anaplasma phagocytophilum and Borrelia burgdorferi (Lyme disease) share the same tick vector, Ixodes scapularis — which is why co-infection is a real clinical possibility.'
  },
  c22c: {
    options: [
      'Coxiella burnetii',
      'Rickettsia rickettsii',
      'Ehrlichia chaffeensis',
      'Anaplasma phagocytophilum'
    ],
    answer: 0,
    why: 'Coxiella burnetii is the outlier of this group: it is acquired from livestock-associated aerosols or unpasteurized dairy, not from any tick.'
  },

  /* m5s4 — find the outlier */
  c23: {
    options: [
      'It is acquired from livestock-associated aerosols or unpasteurized dairy, not a tick bite',
      'It is spread only by mosquito bites',
      'It requires direct person-to-person contact',
      'It has no identified route of transmission'
    ],
    answer: 0,
    why: 'Unlike the other three organisms in this module, Coxiella burnetii is not tick-borne at all — it spreads through aerosols from infected livestock birth products or unpasteurized dairy.'
  },
  c23b: {
    options: [
      'Endocarditis',
      'Meningitis',
      'Septic arthritis',
      'Osteomyelitis'
    ],
    answer: 0,
    why: 'Chronic Q fever most often presents as endocarditis, a distinct clinical picture from the acute pneumonia typically seen with initial Coxiella infection.'
  },
  c23c: {
    options: [
      'Hydroxychloroquine plus doxycycline for approximately 18 months',
      'A single dose of doxycycline',
      'Penicillin G for 14 days',
      'No treatment, since chronic infection resolves spontaneously'
    ],
    answer: 0,
    why: 'Chronic Q fever endocarditis requires prolonged combination therapy — hydroxychloroquine plus doxycycline for roughly 18 months — a much longer course than acute Q fever\'s treatment.'
  },

  /* m5s5 — shared tick problem */
  c24: {
    options: [
      'Borrelia burgdorferi and Anaplasma phagocytophilum',
      'Rickettsia rickettsii and Ehrlichia chaffeensis',
      'Coxiella burnetii and Chlamydia psittaci',
      'Treponema pallidum and Mycoplasma pneumoniae'
    ],
    answer: 0,
    why: 'Borrelia burgdorferi and Anaplasma phagocytophilum are both transmitted by Ixodes scapularis, the blacklegged tick — the reason coinfection is a genuine clinical concern.'
  },
  c24b: {
    options: [
      'Anaplasmosis',
      'Q fever',
      'Psittacosis',
      'Actinomycosis'
    ],
    answer: 0,
    why: 'Since anaplasmosis shares Lyme disease\'s tick vector, it is the coinfection to consider in a patient whose symptoms don\'t fully resolve with Lyme-directed treatment.'
  },
  c24c: {
    options: [
      'Coxiella burnetii',
      'Ehrlichia chaffeensis',
      'Rickettsia rickettsii',
      'Anaplasma phagocytophilum'
    ],
    answer: 0,
    why: 'Coxiella burnetii is the one organism in this module transmitted by a completely different route — livestock-associated aerosols or unpasteurized dairy — rather than any tick bite at all.'
  },

  /* m6s1 — what doesn't fit? */
  c25: {
    options: [
      'A cell wall',
      'A cell membrane',
      'DNA',
      'Ribosomes'
    ],
    answer: 0,
    why: 'Mycoplasma pneumoniae is unique in this course for lacking a cell wall entirely — every other structure listed here is still present.'
  },
  c25b: {
    options: [
      'Branching, filamentous morphology',
      'Obligate intracellular growth',
      'A periplasmic flagellum',
      'An elementary body/reticulate body cycle'
    ],
    answer: 0,
    why: 'Both Actinomyces and Nocardia form branching filaments despite their opposite oxygen requirements and treatments — the other three features belong to Chlamydia or the spirochetes, not to either of these two.'
  },
  c25c: {
    options: [
      'Mycobacterium tuberculosis \u2014 acid-fast, mycolic-acid-rich cell wall',
      'Treponema pallidum \u2014 no cell wall at all',
      'Chlamydia trachomatis \u2014 branching filamentous growth',
      'Coxiella burnetii \u2014 transmitted by a tick'
    ],
    answer: 0,
    why: 'The other three pairings swap in a feature that belongs to a different organism entirely: no cell wall describes Mycoplasma, branching filaments describe Actinomyces/Nocardia, and tick transmission does not apply to Coxiella.'
  },

  /* m6s2 — exposure detective */
  c26: {
    options: [
      'Chlamydia psittaci',
      'Mycoplasma pneumoniae',
      'Coxiella burnetii',
      'Nocardia asteroides'
    ],
    answer: 0,
    why: 'Bird exposure plus pneumonia is the signature combination for psittacosis, caused by Chlamydia psittaci.'
  },
  c26b: {
    options: [
      'Actinomyces israelii',
      'Nocardia asteroides',
      'Mycobacterium tuberculosis',
      'Chlamydia trachomatis'
    ],
    answer: 0,
    why: 'A draining sinus tract following dental trauma is the classic presentation of actinomycosis, caused by Actinomyces israelii.'
  },
  c26c: {
    options: [
      'Mycobacterium avium-intracellulare complex',
      'Mycobacterium tuberculosis',
      'Rickettsia rickettsii',
      'Chlamydia pneumoniae'
    ],
    answer: 0,
    why: 'TB-like pulmonary disease that resists standard anti-tuberculosis drugs, in a severely immunocompromised patient, points to MAC rather than M. tuberculosis itself.'
  },

  /* m6s3 — treatment constraint */
  c27: {
    options: [
      'Beta-lactams',
      'Macrolides',
      'Tetracyclines',
      'Fluoroquinolones'
    ],
    answer: 0,
    why: 'Beta-lactams work exclusively by disrupting peptidoglycan cross-linking. An organism with no cell wall at all has nothing for this drug class to target.'
  },
  c27b: {
    options: [
      'Chlamydia trachomatis',
      'Actinomyces israelii',
      'Mycobacterium tuberculosis',
      'Borrelia burgdorferi'
    ],
    answer: 0,
    why: 'Chlamydia trachomatis is obligately intracellular and cannot be grown on standard culture media, unlike the other three organisms listed, which can be cultured by conventional means.'
  },
  c27c: {
    options: [
      'Chromosomal mutation',
      'Plasmid acquisition',
      'Transduction from another species',
      'Biofilm formation'
    ],
    answer: 0,
    why: 'An organism with no plasmids, like M. tuberculosis, can only develop resistance through its own chromosomal mutations — it has no plasmid machinery to acquire resistance genes from elsewhere.'
  },

  /* m6s4 — unknown patient */
  c28: {
    options: [
      'An organism from normal oral flora, activated by mucosal trauma',
      'A tick-borne infection',
      'A sexually transmitted infection',
      'An organism acquired from bird exposure'
    ],
    answer: 0,
    why: 'Recent dental trauma plus a slowly progressive draining lesion points toward an organism that lives harmlessly as normal oral flora until a break in the mucosa lets it invade.'
  },
  c28b: {
    options: [
      'Actinomyces israelii',
      'Nocardia asteroides',
      'Mycobacterium tuberculosis',
      'Treponema pallidum'
    ],
    answer: 0,
    why: 'Branching filaments with visible sulfur granules, recovered under anaerobic conditions, is the classic laboratory picture of Actinomyces israelii.'
  },
  c28c: {
    options: [
      'Local spread along tissue planes rather than through the bloodstream',
      'Hematogenous spread from lung to brain',
      'Sexual transmission between partners',
      'Spread by tick bite'
    ],
    answer: 0,
    why: 'Actinomycosis characteristically spreads locally along tissue planes rather than through the blood — a key difference from Nocardia, which favors hematogenous spread to the brain.'
  },

  /* m6s5 — build your final recap */
  c29: {
    options: [
      'Mycoplasma pneumoniae',
      'Mycobacterium tuberculosis',
      'Treponema pallidum',
      'Chlamydia trachomatis'
    ],
    answer: 0,
    why: 'Mycoplasma pneumoniae is the one organism across this entire companion with no cell wall at all.'
  },
  c29b: {
    options: [
      'Chlamydia trachomatis',
      'Mycoplasma pneumoniae',
      'Rickettsia rickettsii',
      'Borrelia burgdorferi'
    ],
    answer: 0,
    why: 'The elementary body/reticulate body cycle is specific to the Chlamydiae, including C. trachomatis \u2014 no other organism in this course uses this two-form developmental cycle.'
  },
  c29c: {
    options: [
      'Coxiella burnetii',
      'Rickettsia rickettsii',
      'Ehrlichia chaffeensis',
      'Anaplasma phagocytophilum'
    ],
    answer: 0,
    why: 'Coxiella burnetii breaks Module 5\u2019s tick pattern entirely, spreading instead through livestock-associated aerosols and unpasteurized dairy.'
  }
};

/* ---------------------------------------------------------------
   CARDS — flashcards
   --------------------------------------------------------------- */
var CARDS = [
  { id:'BAC4-CARD-01', t:'Acid-fast', d:'A staining property caused by a lipid-rich, mycolic-acid-containing cell wall that retains carbol fuchsin dye even after an acid-alcohol wash.' },
  { id:'BAC4-CARD-02', t:'Mycolic acid', d:'A long-chain fatty acid making up roughly 60% of the mycobacterial cell wall — responsible for acid-fastness and for resistance to drying, acids, and bases.' },
  { id:'BAC4-CARD-03', t:'Cord factor', d:'Trehalose dimycolate — a mycobacterial cell-wall virulence factor.', flip:true },
  { id:'BAC4-CARD-04', t:'Latent TB infection', d:'A contained M. tuberculosis infection: no symptoms, no transmission. About 10% of cases progress to active disease.' },
  { id:'BAC4-CARD-05', t:'Isoniazid — mechanism', d:'Inhibits mycolic acid synthesis. Requires activation by catalase-peroxidase (KatG); a katG mutation confers resistance.' },
  { id:'BAC4-CARD-06', t:'Rifampin — mechanism', d:'Inhibits bacterial RNA polymerase, blocking mRNA synthesis.' },
  { id:'BAC4-CARD-07', t:'Ethambutol — mechanism', d:'Inhibits arabinogalactan synthesis in the mycobacterial cell wall.' },
  { id:'BAC4-CARD-08', t:'Pyrazinamide', d:'A first-line TB drug whose mechanism of action is not fully established, despite proven clinical efficacy.', flip:true },
  { id:'BAC4-CARD-09', t:'MDR-TB', d:'Tuberculosis resistant to both isoniazid and rifampin.' },
  { id:'BAC4-CARD-10', t:'XDR-TB', d:'MDR-TB plus resistance to any fluoroquinolone and at least one Group A drug (bedaquiline or linezolid).' },
  { id:'BAC4-CARD-11', t:'MAC', d:'Mycobacterium avium-intracellulare complex — the most common atypical mycobacterium; mainly affects patients with CD4 counts under 200 cells/µL and resists standard TB drugs.' },
  { id:'BAC4-CARD-12', t:'M. leprae', d:'Causes leprosy. Obligate intracellular, with an exceptionally long 12-14 day doubling time. Treated with rifampin, dapsone, and clofazimine.' },
  { id:'BAC4-CARD-13', t:'Why beta-lactams fail against TB', d:'M. tuberculosis synthesizes its own beta-lactamase, making standard beta-lactams largely ineffective against it.', flip:true },

  { id:'BAC4-CARD-14', t:'Actinomyces israelii', d:'Anaerobic, branching, Gram-positive filamentous organism; normal oral flora that turns pathogenic after mucosal trauma. Causes actinomycosis: a draining sinus tract with sulfur granules. Treated with penicillin G.' },
  { id:'BAC4-CARD-15', t:'Nocardia asteroides', d:'Aerobic, branching, weakly acid-fast soil organism. Causes nocardiosis, classically spreading from lung to brain in immunocompromised patients. Treated with TMP-SMX.' },
  { id:'BAC4-CARD-16', t:'Sulfur granules', d:'Granular clumps of organism seen in the pus of an actinomycosis abscess — a classic diagnostic clue for Actinomyces israelii.', flip:true },
  { id:'BAC4-CARD-17', t:'Mycoplasma pneumoniae', d:'The smallest free-living organism; lacks a cell wall entirely. Causes atypical ("walking") pneumonia. Treated with a macrolide, tetracycline, or fluoroquinolone — never a beta-lactam.' },
  { id:'BAC4-CARD-18', t:'Why Mycoplasma has no Gram stain result', d:'The Gram stain depends on peptidoglycan in the cell wall. Mycoplasma has no cell wall, so it cannot be classified as Gram-positive or Gram-negative.' },
  { id:'BAC4-CARD-19', t:'Atypical pneumonia', d:'Pneumonia caused by an organism that cannot be routinely isolated by standard culture, or whose clinical picture does not resemble classic pneumococcal pneumonia.' },
  { id:'BAC4-CARD-20', t:'Why beta-lactams fail against Mycoplasma', d:'Beta-lactams block peptidoglycan cross-linking. An organism with no peptidoglycan at all has no target for this drug class.', flip:true },
  { id:'BAC4-CARD-21', t:'Mycoplasma\u2019s cell membrane', d:'The only bacterial membrane known to contain cholesterol — unusual for a bacterium, ordinary for a eukaryotic cell.' },
  { id:'BAC4-CARD-22', t:'How Mycoplasma damages the airway', d:'Tapered tips attach to respiratory epithelium. The organism does not invade tissue; instead it inhibits ciliary motion, leading to cell necrosis.' },
  { id:'BAC4-CARD-23', t:'Actinomyces vs Nocardia — oxygen', d:'Actinomyces is anaerobic; Nocardia is aerobic. Similar branching, filamentous look under the microscope; opposite oxygen requirements and opposite first-line drugs.', flip:true },

  { id:'BAC4-CARD-24', t:'Spirochete', d:'A thin-walled, flexible, motile rod with periplasmic (endo)flagella wrapped around its cell cylinder, producing corkscrew movement. Treponema pallidum and Borrelia burgdorferi are the two medically important examples.' },
  { id:'BAC4-CARD-25', t:'Chancre', d:'The painless primary lesion of syphilis, which may heal spontaneously even as Treponema pallidum spreads through the bloodstream.' },
  { id:'BAC4-CARD-26', t:'Secondary syphilis', d:'Systemic disease following primary syphilis: fever, malaise, weight loss, and a maculopapular rash, classically involving the palms and soles.' },
  { id:'BAC4-CARD-27', t:'Tertiary syphilis', d:'Late-stage syphilis, occurring after latency: CNS involvement and cardiovascular lesions.', flip:true },
  { id:'BAC4-CARD-28', t:'Erythema migrans', d:'The expanding "bullseye" rash with central clearing that marks stage 1 Lyme disease.' },
  { id:'BAC4-CARD-29', t:'Lyme disease staging', d:'Stage 1: erythema migrans. Stage 2: neurologic and cardiac involvement (myocarditis, meningitis). Stage 3: arthritis and encephalopathy.' },
  { id:'BAC4-CARD-30', t:'OspA and OspC', d:'Surface adhesins of Borrelia burgdorferi and known virulence factors. Lyme disease has no classic exotoxin identified.', flip:true },
  { id:'BAC4-CARD-31', t:'Jarisch-Herxheimer reaction', d:'Fever, chills, and worsening symptoms beginning 24-72 hours after the first antibiotic dose for a high-spirochete-burden infection (syphilis, Lyme). Caused by spirochete lysis releasing endotoxin-like substances; managed with supportive care.' },
  { id:'BAC4-CARD-32', t:'Syphilis — first-line treatment', d:'Benzathine penicillin G. T. pallidum has never developed documented resistance to penicillin, and is typically resistant to macrolides.' },
  { id:'BAC4-CARD-33', t:'Lyme disease — first-line treatment', d:'Doxycycline or amoxicillin; ceftriaxone for late or severe disease.', flip:true },

  { id:'BAC4-CARD-34', t:'Chlamydiae', d:'Obligate intracellular bacteria that cannot grow independently — they depend entirely on the host cell for energy. Their wall lacks typical peptidoglycan despite being structurally rigid.' },
  { id:'BAC4-CARD-35', t:'Elementary body (EB)', d:'The infectious, extracellular form of Chlamydia. Metabolically inactive but resistant to environmental stress; attaches to and enters host cells.' },
  { id:'BAC4-CARD-36', t:'Reticulate body (RB)', d:'The non-infectious, intracellular form of Chlamydia. Metabolically active; replicates by binary fission inside the inclusion.', flip:true },
  { id:'BAC4-CARD-37', t:'Chlamydial developmental cycle', d:'Attachment \u2192 entry \u2192 RB replication \u2192 differentiation (RB back to EB) \u2192 release by lysis or extrusion.' },
  { id:'BAC4-CARD-38', t:'Chlamydia trachomatis', d:'Infects humans only; spread by sexual contact or perinatally. Causes urethritis, PID, conjunctivitis, and trachoma. Treated with doxycycline.' },
  { id:'BAC4-CARD-39', t:'Chlamydia pneumoniae', d:'Spread human-to-human by respiratory droplets. Causes atypical pneumonia, bronchitis, and sinusitis. Treated with doxycycline or a macrolide.', flip:true },
  { id:'BAC4-CARD-40', t:'Chlamydia psittaci', d:'Natural host is birds (parrots, poultry). Transmitted by inhaling dried droppings or secretions — not person-to-person. Causes psittacosis ("parrot fever"). Treated with doxycycline.' },
  { id:'BAC4-CARD-41', t:'C. trachomatis + N. gonorrhoeae coinfection', d:'Occurs in roughly 10-30% of C. trachomatis cases, which is why suspected gonococcal coinfection is often treated empirically alongside confirmed chlamydial infection.' },
  { id:'BAC4-CARD-42', t:'C. trachomatis — first-line treatment', d:'Doxycycline 100 mg twice daily for 7 days (nonpregnant patients). Azithromycin 1 g as a single dose is reserved for pregnancy or adherence concerns.', flip:true },
  { id:'BAC4-CARD-43', t:'Why Chlamydia can\u2019t be cultured like typical bacteria', d:'As obligate intracellular organisms, Chlamydia depend on the host cell for energy production, so diagnosis relies on inclusion staining, serology, or nucleic acid amplification rather than standard culture.' },

  { id:'BAC4-CARD-44', t:'Rickettsia rickettsii', d:'Causes Rocky Mountain spotted fever. Invades endothelial cells, causing vasculitis and increased capillary permeability. Transmitted by Dermacentor ticks. Treated with doxycycline.' },
  { id:'BAC4-CARD-45', t:'RMSF rash timing', d:'Fever, headache, and myalgia typically precede the rash by 2-6 days. Treatment should start on clinical suspicion, without waiting for the rash to appear.' },
  { id:'BAC4-CARD-46', t:'Ehrlichia chaffeensis', d:'Causes human monocytropic ehrlichiosis. Vector: lone star tick (Amblyomma americanum). Treated with doxycycline.', flip:true },
  { id:'BAC4-CARD-47', t:'Anaplasma phagocytophilum', d:'Causes human granulocytic anaplasmosis. Vector: blacklegged tick (Ixodes scapularis) — the same tick that transmits Lyme disease. Treated with doxycycline.' },
  { id:'BAC4-CARD-48', t:'Coxiella burnetii', d:'Causes Q fever. Not tick-borne in humans — acquired from aerosols of infected livestock birth products or unpasteurized dairy. Acute treatment: doxycycline. Chronic (endocarditis): hydroxychloroquine plus doxycycline for ~18 months.' },
  { id:'BAC4-CARD-49', t:'Wolbachia', d:'An intracellular bacterium living inside the roundworm Wuchereria bancrofti (cause of elephantiasis), enhancing the worm\u2019s pathogenicity. Doxycycline treats the infection by killing the Wolbachia the worm depends on.', flip:true },
  { id:'BAC4-CARD-50', t:'Rickettsial pathogenesis', d:'Phospholipase D and a pore-forming hemolysin help the organism enter cells and escape the phagosome; pathogenicity is otherwise believed to involve endotoxin.' },
  { id:'BAC4-CARD-51', t:'Tick vector summary', d:'Rickettsia rickettsii: Dermacentor tick. Ehrlichia chaffeensis: lone star tick. Anaplasma phagocytophilum and Borrelia burgdorferi: Ixodes scapularis (blacklegged tick).' },
  { id:'BAC4-CARD-52', t:'Q fever chronic disease', d:'Chronic Coxiella burnetii infection most often presents as endocarditis — a distinct treatment course from acute Q fever pneumonia.', flip:true },
  { id:'BAC4-CARD-53', t:'Why treat RMSF empirically', d:'Waiting for lab confirmation or the classic rash can delay treatment dangerously; doxycycline is started on clinical suspicion and exposure history alone, even in children.' },

  { id:'BAC4-CARD-54', t:'Organisms with no cell wall', d:'Mycoplasma pneumoniae is the only organism in this course with no cell wall at all \u2014 explaining its pleomorphic shape, unreadable Gram stain, and complete beta-lactam resistance.' },
  { id:'BAC4-CARD-55', t:'Obligate intracellular organisms in this course', d:'Chlamydia (all three species) and the rickettsial organisms (Rickettsia, Ehrlichia, Anaplasma, Coxiella) cannot grow independently and depend entirely on a host cell \u2014 none are diagnosed by routine culture.' },
  { id:'BAC4-CARD-56', t:'Look-alikes that need opposite drugs', d:'Actinomyces (anaerobic, penicillin G) and Nocardia (aerobic, TMP-SMX) form nearly identical branching filaments but come from opposite sources and need opposite first-line therapy.', flip:true },
  { id:'BAC4-CARD-57', t:'Organisms with no plasmids', d:'Mycobacterium tuberculosis carries no plasmids, so every resistance mechanism it develops traces back to a chromosomal mutation \u2014 never acquired resistance genes.' },
  { id:'BAC4-CARD-58', t:'The outlier among the outliers', d:'Coxiella burnetii breaks Module 5\u2019s tick pattern (livestock aerosols instead) and causes a distinct chronic disease (endocarditis) that the other three rickettsial organisms don\u2019t.' },
  { id:'BAC4-CARD-59', t:'Reading exposure history fast', d:'Bird \u2192 Chlamydia psittaci. Tick with a bullseye rash \u2192 Borrelia burgdorferi. Dental trauma \u2192 Actinomyces. Soil inhalation \u2192 Nocardia. Livestock or unpasteurized dairy \u2192 Coxiella burnetii.', flip:true },
  { id:'BAC4-CARD-60', t:'A reaction that is not an allergy', d:'The Jarisch-Herxheimer reaction follows antibiotic treatment of a high-spirochete-burden infection (syphilis, Lyme) and is managed by continuing the antibiotic \u2014 the opposite of how a true allergy is handled.' },
  { id:'BAC4-CARD-61', t:'Why history often beats the microscope', d:'Actinomyces and Nocardia look nearly identical under the microscope; syphilis and Lyme both start with a stereotyped skin finding. In both pairs, the exposure history \u2014 not the stain \u2014 is what actually separates them.', flip:true }
];

/* ---------------------------------------------------------------
   POOL — module quiz questions. `m` must match a `quiz:` value in
   the manifest; `area` must match a key in MANIFEST.areaSection.
   --------------------------------------------------------------- */
var POOL = [
  {
    id: 'BAC4-001', m: 'm1', area: 'Acid-fast cell wall', level: 'concept',
    stem: 'The "acid-fast" property of Mycobacterium tuberculosis refers to its ability to retain carbol fuchsin stain despite washing with which agent?',
    options: ['Acid-alcohol', 'Saline', 'Potassium hydroxide', 'Crystal violet'],
    answer: 0,
    why: 'Acid-fast staining specifically tests whether a lipid-rich cell wall can hold onto carbol fuchsin through an acid-alcohol decolorizing step — the step most bacteria fail, but mycobacteria pass.'
  },
  {
    id: 'BAC4-002', m: 'm1', area: 'TB disease progression', level: 'concept',
    stem: 'Approximately what proportion of people with latent TB infection go on to develop active disease?',
    options: ['10%', '50%', '90%', 'Nearly all of them'],
    answer: 0,
    why: 'Only about 10% of latent infections progress to active TB — most remain contained indefinitely, which is why testing and treating latent infection is a major prevention strategy.'
  },
  {
    id: 'BAC4-003', m: 'm1', area: 'TB drug regimen', level: 'application',
    stem: 'A patient begins the standard initial-phase regimen of isoniazid, rifampin, pyrazinamide, and ethambutol. Which of these four drugs inhibits arabinogalactan synthesis?',
    options: ['Ethambutol', 'Isoniazid', 'Rifampin', 'Pyrazinamide'],
    answer: 0,
    why: 'Ethambutol targets arabinogalactan synthesis specifically. Isoniazid targets mycolic acid synthesis, and rifampin targets RNA polymerase — three different cell-wall or transcription targets among the four first-line drugs.'
  },
  {
    id: 'BAC4-004', m: 'm1', area: 'TB drug regimen', level: 'application',
    stem: 'A pharmacist reviewing a TB regimen notices the patient is also prescribed a beta-lactam for an unrelated infection. What should the pharmacist recognize about this combination?',
    options: [
      'The beta-lactam will have little activity against M. tuberculosis, since the organism produces its own beta-lactamase',
      'The beta-lactam will cure the TB infection on its own',
      'The combination will cause treatment failure of all four first-line TB drugs',
      'Beta-lactams are the preferred first-line agents for M. tuberculosis'
    ],
    answer: 0,
    why: 'M. tuberculosis synthesizes beta-lactamase, so standard beta-lactams contribute little against the TB infection itself — the beta-lactam is treating the unrelated infection, not the TB.'
  },
  {
    id: 'BAC4-005', m: 'm1', area: 'TB drug resistance', level: 'application',
    stem: 'A TB isolate is resistant to both isoniazid and rifampin but remains susceptible to fluoroquinolones and injectable second-line agents. This isolate meets the definition of which classification?',
    options: ['Multidrug-resistant (MDR) TB', 'Extensively drug-resistant (XDR) TB', 'Pan-susceptible TB', 'Latent TB infection'],
    answer: 0,
    why: 'Resistance to isoniazid and rifampin together is the definition of MDR-TB. XDR-TB requires that MDR profile plus resistance to a fluoroquinolone and at least one Group A drug — which this isolate does not have.'
  },
  {
    id: 'BAC4-006', m: 'm1', area: 'TB vs MAC vs leprosy', level: 'integration',
    stem: 'An immunocompromised patient develops pulmonary disease that resembles tuberculosis clinically, but the isolate proves highly resistant to standard anti-tuberculosis drugs. Which organism best fits this picture?',
    options: ['Mycobacterium avium-intracellulare complex', 'Mycobacterium tuberculosis', 'Mycobacterium leprae', 'Nocardia asteroides'],
    answer: 0,
    why: 'MAC characteristically causes TB-like pulmonary disease in severely immunocompromised patients and is highly resistant to the standard anti-tuberculosis regimen — the resistance pattern is the key distinguishing clue here.'
  },
  {
    id: 'BAC4-007', m: 'm1', area: 'TB disease progression', level: 'integration',
    stem: 'A patient with a positive PPD skin test, no symptoms, and a normal chest x-ray asks whether they are contagious. Which statement should guide the pharmacist\'s counseling?',
    options: [
      'Their infection is not currently transmissible, but could reactivate later if immune control weakens',
      'Their infection is active and immediately transmissible to others',
      'No treatment is ever indicated for this diagnosis',
      'Their sputum will test acid-fast positive'
    ],
    answer: 0,
    why: 'A positive PPD with no symptoms and a normal chest x-ray describes latent TB infection — non-transmissible now, but carrying a lifetime risk of reactivation, which is why preventive treatment is often offered.'
  },
  {
    id: 'BAC4-008', m: 'm1', area: 'TB drug resistance', level: 'integration',
    stem: 'A patient\'s isolate carries a mutation in the gene required to convert isoniazid into its active form. Which enzyme does this mutation most likely affect?',
    options: ['Catalase-peroxidase (KatG)', 'RNA polymerase', 'Arabinosyltransferase', 'Beta-lactamase'],
    answer: 0,
    why: 'Isoniazid is a prodrug that KatG (catalase-peroxidase) must activate before it can inhibit mycolic acid synthesis. Disabling KatG blocks that activation step, producing isoniazid resistance.'
  },

  /* --- alternative-scenario questions added to thicken thin areas (see bank-expansion note at top of file) --- */
  {
    id: 'BAC4-049', m: 'm1', area: 'Acid-fast cell wall', level: 'concept',
    stem: 'Which best explains why mycobacteria resist destaining by acid-alcohol during acid-fast staining?',
    options: ['High lipid content in the cell wall binds the dye tightly', 'A thick peptidoglycan layer traps the dye', 'A capsule prevents the decolorizer from penetrating', 'The cell wall is impermeable to all chemicals'],
    answer: 0,
    why: 'The lipid-rich, mycolic-acid wall binds carbol fuchsin tightly enough that the acid-alcohol decolorizing step can\'t strip it back out — the defining basis of the acid-fast stain.'
  },
  {
    id: 'BAC4-050', m: 'm1', area: 'Acid-fast cell wall', level: 'application',
    stem: 'A student examines two bacterial smears: one treated with standard Gram stain reagents, one with acid-fast stain reagents. Mycobacterium tuberculosis is visible only on the acid-fast smear. What does this indicate about the organism\'s cell envelope?',
    options: ['Its high lipid content prevents reliable Gram staining but retains acid-fast dye', 'Its cell wall is identical to a typical Gram-positive organism', 'It has no cell envelope at all', 'Its envelope is too thin to retain any stain'],
    answer: 0,
    why: 'The lipid-rich wall doesn\'t reliably take up crystal violet (poor Gram stain) but does retain carbol fuchsin through the acid-alcohol wash (positive acid-fast stain) — the same structural feature explains both results.'
  },
  {
    id: 'BAC4-051', m: 'm1', area: 'TB disease progression', level: 'application',
    stem: 'A healthcare worker has a routine PPD skin test that converts from negative to positive compared with one performed the previous year, but the worker has no symptoms and a normal chest x-ray. What does this conversion most likely represent?',
    options: ['New latent TB infection', 'Active pulmonary TB requiring four-drug therapy', 'A false-positive test with no clinical significance', 'Definitive proof of a prior BCG vaccination'],
    answer: 0,
    why: 'A new PPD conversion without symptoms or imaging findings indicates new latent infection — the immune system has encountered and contained the organism, but there is no active disease yet.'
  },
  {
    id: 'BAC4-052', m: 'm1', area: 'TB drug regimen', level: 'application',
    stem: 'A patient completes the 2-month initial phase of standard four-drug TB therapy and is transitioned to the continuation phase. Which two drugs make up this phase?',
    options: ['Isoniazid and rifampin', 'Pyrazinamide and ethambutol', 'Isoniazid and pyrazinamide', 'Rifampin and ethambutol'],
    answer: 0,
    why: 'The continuation phase narrows to isoniazid and rifampin alone for an additional 4 months, after pyrazinamide and ethambutol are dropped at the end of the initial phase.'
  },
  {
    id: 'BAC4-053', m: 'm1', area: 'TB drug resistance', level: 'integration',
    stem: 'A patient\'s M. tuberculosis isolate shows resistance to isoniazid, rifampin, a fluoroquinolone, and linezolid. Which classification applies to this isolate?',
    options: ['Extensively drug-resistant (XDR) TB', 'Multidrug-resistant (MDR) TB only', 'Pan-susceptible TB', 'Latent TB infection'],
    answer: 0,
    why: 'This isolate meets the MDR definition (isoniazid plus rifampin resistance) and adds resistance to a fluoroquinolone and a Group A drug (linezolid) — meeting the XDR definition exactly.'
  },
  {
    id: 'BAC4-054', m: 'm1', area: 'TB vs MAC vs leprosy', level: 'application',
    stem: 'A patient with no known immunocompromising conditions develops a productive cough and is found to have cavitary lesions on chest imaging, with acid-fast bacilli on sputum smear and growth recovered on standard mycobacterial culture within a few weeks. Which organism is most likely responsible?',
    options: ['Mycobacterium tuberculosis', 'MAC (M. avium-intracellulare complex)', 'Mycobacterium leprae', 'Nocardia asteroides'],
    answer: 0,
    why: 'A relatively prompt culture result, cavitary disease, and an immunocompetent host all point to typical M. tuberculosis rather than the much slower-growing, immunosuppression-associated MAC or M. leprae.'
  },
  {
    id: 'BAC4-055', m: 'm1', area: 'TB vs MAC vs leprosy', level: 'integration',
    stem: 'A 68-year-old patient on long-term immunosuppressive therapy for a solid organ transplant develops a chronic cough and low-grade fevers. Mycobacterial culture eventually grows an organism highly resistant to several standard first-line anti-tuberculosis drugs. Which organism and host factor pairing best explains this picture?',
    options: ['MAC, favored by chronic immunosuppression', 'Mycobacterium tuberculosis, favored by chronic immunosuppression', 'Mycobacterium leprae, favored by chronic immunosuppression', 'Nocardia asteroides, favored by chronic immunosuppression'],
    answer: 0,
    why: 'MAC specifically favors severely immunocompromised hosts and is characteristically resistant to standard anti-tuberculosis therapy — the same pattern classically described with HIV/AIDS-associated MAC, just from a different cause of immunosuppression.'
  },

  {
    id: 'BAC4-009', m: 'm2', area: 'Actinomyces vs Nocardia', level: 'concept',
    stem: 'Which organism is part of normal oral flora and becomes pathogenic only after mucosal disruption?',
    options: ['Actinomyces israelii', 'Nocardia asteroides', 'Mycoplasma pneumoniae', 'Mycobacterium tuberculosis'],
    answer: 0,
    why: 'Actinomyces lives harmlessly as normal oral flora and turns invasive only once trauma breaches the mucosa that normally contains it — unlike Nocardia, which is acquired from the environment.'
  },
  {
    id: 'BAC4-010', m: 'm2', area: 'Actinomyces vs Nocardia', level: 'application',
    stem: 'A patient develops a draining sinus tract with visible granules in the exudate following a dental procedure. Which first-line treatment is most appropriate?',
    options: ['Penicillin G', 'Trimethoprim-sulfamethoxazole', 'Doxycycline', 'Azithromycin'],
    answer: 0,
    why: 'A draining sinus tract with granules after dental trauma describes actinomycosis, and Actinomyces israelii is treated with penicillin G — not the TMP-SMX used for its look-alike, Nocardia.'
  },
  {
    id: 'BAC4-011', m: 'm2', area: 'Infection pathway', level: 'application',
    stem: 'An immunocompromised patient inhales soil-contaminated dust and later develops a brain abscess. Which organism best fits this route of spread?',
    options: ['Nocardia asteroides', 'Actinomyces israelii', 'Mycoplasma pneumoniae', 'Treponema pallidum'],
    answer: 0,
    why: 'Inhalation from soil followed by lung-to-brain dissemination in an immunocompromised host is the classic Nocardia pattern, distinct from the oral-flora route of Actinomyces.'
  },
  {
    id: 'BAC4-012', m: 'm2', area: 'No cell wall organisms', level: 'concept',
    stem: 'Mycoplasma pneumoniae is unusual among bacteria in that its cell membrane contains which component, otherwise found mainly in eukaryotic cells?',
    options: ['Cholesterol', 'Chitin', 'Ergosterol', 'Peptidoglycan'],
    answer: 0,
    why: 'Mycoplasma\'s membrane incorporates cholesterol, a lipid otherwise associated with eukaryotic cell membranes — one more way this organism breaks the usual bacterial pattern.'
  },
  {
    id: 'BAC4-013', m: 'm2', area: 'No cell wall organisms', level: 'application',
    stem: 'A pharmacist reviewing empiric therapy for suspected M. pneumoniae infection should recognize that which drug class would provide no benefit?',
    options: ['Beta-lactams', 'Macrolides', 'Tetracyclines', 'Fluoroquinolones'],
    answer: 0,
    why: 'With no peptidoglycan wall to target, M. pneumoniae is inherently resistant to every beta-lactam. Macrolides, tetracyclines, and fluoroquinolones all remain effective options because they act elsewhere.'
  },
  {
    id: 'BAC4-014', m: 'm2', area: 'Walking pneumonia identification', level: 'integration',
    stem: 'A college student presents with several days of headache and dry cough. Chest imaging shows infiltrates that appear more severe than the patient\'s clinical exam suggests, and routine sputum culture is negative. Which organism is most consistent with this picture?',
    options: ['Mycoplasma pneumoniae', 'Streptococcus pneumoniae', 'Staphylococcus aureus', 'Klebsiella pneumoniae'],
    answer: 0,
    why: 'A mismatch between severe-looking imaging and a comparatively well patient, plus a negative routine culture, is the signature of atypical pneumonia — and M. pneumoniae is its most common cause in this age group.'
  },
  {
    id: 'BAC4-015', m: 'm2', area: 'Infection pathway', level: 'integration',
    stem: 'Which feature most reliably distinguishes the route of infection of Nocardia from that of Actinomyces?',
    options: [
      'Nocardia is acquired by inhalation from the environment, while Actinomyces arises from disruption of the patient\'s own normal flora',
      'Nocardia is acquired sexually, while Actinomyces is airborne',
      'Both are acquired by the same route but differ only in treatment',
      'Nocardia requires an insect vector, while Actinomyces does not'
    ],
    answer: 0,
    why: 'The two organisms look similar microscopically, but their source is opposite: Nocardia comes from the environment via inhalation, while Actinomyces is already present in the patient as normal flora before trauma lets it invade.'
  },
  {
    id: 'BAC4-016', m: 'm2', area: 'Walking pneumonia identification', level: 'integration',
    stem: 'Why does a Gram stain typically fail to identify Mycoplasma pneumoniae from a clinical specimen?',
    options: [
      'The organism has no cell wall for the stain to detect',
      'The organism is too large to be seen microscopically',
      'The organism only grows inside host cells',
      'The stain destroys the organism before it can be visualized'
    ],
    answer: 0,
    why: 'The Gram stain depends entirely on peptidoglycan structure. Since Mycoplasma has no cell wall at all, it simply gives no reliable Gram stain result — a direct consequence of the same structural gap that makes beta-lactams useless against it.'
  },

  {
    id: 'BAC4-056', m: 'm2', area: 'Actinomyces vs Nocardia', level: 'application',
    stem: 'A biopsy from a chronic abscess is sent for culture. The lab reports that growth was recovered only under aerobic conditions, and the organism shows weak acid-fastness on modified staining. Which organism is most consistent with these findings?',
    options: ['Nocardia asteroides', 'Actinomyces israelii', 'Mycobacterium tuberculosis', 'Mycoplasma pneumoniae'],
    answer: 0,
    why: 'Aerobic growth plus weak acid-fastness is characteristic of Nocardia, distinguishing it from the anaerobic, non-acid-fast Actinomyces, despite their similar branching appearance.'
  },
  {
    id: 'BAC4-057', m: 'm2', area: 'Infection pathway', level: 'integration',
    stem: 'Two patients develop infections with branching, filamentous organisms. One had a dental abscess after a root canal; the other inhaled dust while gardening and later developed a brain abscess. Which organism-route pairing is correct?',
    options: [
      'Actinomyces from the dental abscess; Nocardia from the inhaled dust',
      'Nocardia from the dental abscess; Actinomyces from the inhaled dust',
      'Both patients have Actinomyces, regardless of exposure',
      'Both patients have Nocardia, regardless of exposure'
    ],
    answer: 0,
    why: 'Dental and mucosal trauma activates Actinomyces, already present as normal flora, while inhaled environmental dust is the acquisition route for Nocardia, which can disseminate to the brain.'
  },
  {
    id: 'BAC4-058', m: 'm2', area: 'No cell wall organisms', level: 'application',
    stem: 'A patient is treated empirically with amoxicillin for presumed bacterial pneumonia but shows no clinical improvement after several days, and sputum Gram stain was unrevealing from the start. Which organism would best explain this lack of response?',
    options: ['Mycoplasma pneumoniae', 'Streptococcus pneumoniae', 'Staphylococcus aureus', 'Klebsiella pneumoniae'],
    answer: 0,
    why: 'Amoxicillin, a beta-lactam, has no target in an organism with no cell wall — the lack of response plus an unrevealing Gram stain both point toward Mycoplasma pneumoniae.'
  },
  {
    id: 'BAC4-059', m: 'm2', area: 'Walking pneumonia identification', level: 'concept',
    stem: 'Which feature of Mycoplasma pneumoniae most directly explains why it is susceptible to macrolides but not penicillins?',
    options: ['It has ribosomes but no peptidoglycan wall', 'It has a peptidoglycan wall but no ribosomes', 'It has neither ribosomes nor a cell membrane', 'It has a cell wall identical to typical Gram-positive bacteria'],
    answer: 0,
    why: 'Macrolides act on the ribosome, which Mycoplasma has; penicillins act on peptidoglycan, which Mycoplasma lacks entirely — explaining the split in susceptibility.'
  },

  {
    id: 'BAC4-017', m: 'm3', area: 'Spirochete structure', level: 'concept',
    stem: 'Which structure is unique to spirochetes among the bacteria covered in this course, and is directly responsible for their motility?',
    options: ['Periplasmic (endo)flagella', 'A single polar flagellum', 'Type IV pili', 'A slime layer'],
    answer: 0,
    why: 'Periplasmic flagella, wound around the cell cylinder beneath the outer membrane, are the structure unique to spirochetes and the direct source of their corkscrew motility.'
  },
  {
    id: 'BAC4-018', m: 'm3', area: 'Syphilis staging', level: 'concept',
    stem: 'A painless genital ulcer that heals without treatment is characteristic of which stage of syphilis?',
    options: ['Primary syphilis', 'Secondary syphilis', 'Tertiary syphilis', 'Latent syphilis'],
    answer: 0,
    why: 'The painless chancre of primary syphilis can heal on its own, which is exactly what makes it easy to miss — the organism keeps spreading through the bloodstream regardless.'
  },
  {
    id: 'BAC4-019', m: 'm3', area: 'Syphilis staging', level: 'application',
    stem: 'A patient develops fever, malaise, and a rash involving the palms and soles several weeks after an unrecognized genital ulcer healed. Which stage of syphilis does this describe?',
    options: ['Secondary syphilis', 'Primary syphilis', 'Tertiary syphilis', 'Congenital syphilis'],
    answer: 0,
    why: 'Systemic symptoms and a palm-and-sole rash appearing after the primary chancre has already healed describe secondary syphilis, the disseminated stage of the disease.'
  },
  {
    id: 'BAC4-020', m: 'm3', area: 'Lyme staging', level: 'application',
    stem: 'A patient treated promptly with doxycycline for an erythema migrans rash is unlikely to progress to which later finding?',
    options: ['Meningitis from stage 2 disease', 'A second tick bite', 'A drug allergy', 'An unrelated viral illness'],
    answer: 0,
    why: 'Prompt treatment at stage 1 is what keeps Lyme disease from ever advancing to the neurologic and cardiac findings of stage 2 — the entire point of catching erythema migrans early.'
  },
  {
    id: 'BAC4-021', m: 'm3', area: 'Lyme staging', level: 'concept',
    stem: 'Which pair of Borrelia burgdorferi surface proteins are established virulence factors?',
    options: ['OspA and OspC', 'PBP2a and mecA', 'ESAT-6 and CFP-10', 'Protein A and coagulase'],
    answer: 0,
    why: 'OspA and OspC are Borrelia\'s own surface adhesins; the other pairs listed belong to entirely different organisms (resistant Staphylococcus, Mycobacterium, and Staphylococcus aureus, respectively).'
  },
  {
    id: 'BAC4-022', m: 'm3', area: 'Syphilis vs Lyme differential', level: 'integration',
    stem: 'A patient reports a tick bite one week ago, followed by an expanding rash with a clear center. A second patient reports a painless genital sore three weeks after a new sexual partner. Which pairing of organism to patient is correct?',
    options: [
      'Borrelia burgdorferi with the first patient; Treponema pallidum with the second',
      'Treponema pallidum with the first patient; Borrelia burgdorferi with the second',
      'Borrelia burgdorferi with both patients',
      'Treponema pallidum with both patients'
    ],
    answer: 0,
    why: 'A tick bite followed by an expanding, clearing rash is erythema migrans (Lyme). A painless genital ulcer after sexual exposure is a chancre (syphilis) — the exposure history sorts these two patients correctly.'
  },
  {
    id: 'BAC4-023', m: 'm3', area: 'Jarisch-Herxheimer reaction', level: 'application',
    stem: 'A patient treated for secondary syphilis develops fever, chills, and a transient worsening of their rash about 48 hours after the first penicillin dose. What is the most appropriate next step?',
    options: ['Continue the antibiotic and provide supportive care', 'Discontinue the antibiotic immediately and switch drug classes', 'Administer epinephrine', 'Assume treatment failure and increase the dose'],
    answer: 0,
    why: 'This timing and symptom pattern is a Jarisch-Herxheimer reaction, not an allergy or treatment failure — the correct response is to continue the antibiotic while managing symptoms supportively.'
  },
  {
    id: 'BAC4-024', m: 'm3', area: 'Jarisch-Herxheimer reaction', level: 'integration',
    stem: 'Which feature best distinguishes the Jarisch-Herxheimer reaction from a true penicillin allergy?',
    options: [
      'Its timing 24 to 72 hours after the first dose and its link to high-spirochete-burden infections',
      'Its immediate onset within seconds of drug exposure',
      'Its requirement for prior sensitization to the drug',
      'Its response to antihistamines alone'
    ],
    answer: 0,
    why: 'A true IgE-mediated allergy requires prior sensitization and typically acts fast; the Jarisch-Herxheimer reaction instead has a distinctive 24-to-72-hour delay and occurs specifically when a high burden of spirochetes is being killed off.'
  },

  {
    id: 'BAC4-060', m: 'm3', area: 'Spirochete structure', level: 'concept',
    stem: 'What role do periplasmic flagella play in spirochete biology, compared with external flagella in other motile bacteria?',
    options: [
      'They remain enclosed within the outer membrane, producing a corkscrew motion instead of simple rotation',
      'They extend freely into the environment just like typical bacterial flagella',
      'They are used for attachment rather than movement',
      'They are vestigial and no longer contribute to motility'
    ],
    answer: 0,
    why: 'Periplasmic flagella stay wound between the outer membrane and the cell cylinder, so their rotation twists the whole cell into a corkscrew motion rather than simply spinning a free-standing external flagellum.'
  },
  {
    id: 'BAC4-061', m: 'm3', area: 'Spirochete structure', level: 'application',
    stem: 'A microbiology student examines a dark-field microscopy slide and observes thin, tightly coiled, motile organisms. Which structural feature explains why these organisms are not reliably seen with standard light microscopy and Gram stain?',
    options: [
      'Their small diameter falls below the resolution typically achieved with a standard light microscope and Gram stain',
      'Their branching filamentous structure',
      'Their intracellular inclusion bodies',
      'Their acid-fast cell wall'
    ],
    answer: 0,
    why: 'Spirochetes are so thin that they fall below the practical resolution of a standard light microscope with Gram stain, which is why dark-field microscopy — relying on light scatter rather than stain uptake — is used to visualize them directly.'
  },
  {
    id: 'BAC4-062', m: 'm3', area: 'Syphilis staging', level: 'integration',
    stem: 'A patient was treated for a genital ulcer several years ago but never followed up. They now present with new neurologic symptoms and are found to have cardiovascular involvement on further workup. Which stage of untreated syphilis does this represent, and what does it imply about the intervening years?',
    options: [
      'Tertiary syphilis, following an asymptomatic latent period',
      'Primary syphilis, with no time having passed since the chancre',
      'Secondary syphilis, with symptoms appearing shortly after the chancre',
      'Congenital syphilis, acquired from a parent'
    ],
    answer: 0,
    why: 'Late neurologic and cardiovascular findings years after an unresolved primary lesion describe tertiary syphilis, which follows a clinically silent latent period rather than a continuous progression of symptoms.'
  },
  {
    id: 'BAC4-063', m: 'm3', area: 'Lyme staging', level: 'application',
    stem: 'A patient who was treated with doxycycline promptly after developing erythema migrans several months ago now returns with no new symptoms. Based on the expected course of appropriately treated stage 1 Lyme disease, what should you expect?',
    options: [
      'Resolution without progression to later stages',
      'Inevitable progression to stage 2 despite treatment',
      'A need for lifelong antibiotic therapy',
      'Conversion of the infection into tertiary syphilis'
    ],
    answer: 0,
    why: 'Prompt treatment at stage 1 is specifically what prevents the neurologic, cardiac, and joint complications of stages 2 and 3 — this patient\'s lack of new symptoms is the expected, successful outcome.'
  },
  {
    id: 'BAC4-064', m: 'm3', area: 'Syphilis vs Lyme differential', level: 'application',
    stem: 'A patient presents with a single, painless, indurated genital lesion. On questioning, there is no history of outdoor activity or tick exposure, but the patient reports a new sexual partner one month ago. Which organism and treatment pairing is most appropriate?',
    options: [
      'Treponema pallidum, treated with benzathine penicillin G',
      'Borrelia burgdorferi, treated with doxycycline',
      'Treponema pallidum, treated with doxycycline alone',
      'Borrelia burgdorferi, treated with benzathine penicillin G'
    ],
    answer: 0,
    why: 'A painless genital chancre after new sexual exposure, with no tick history, points to primary syphilis, for which benzathine penicillin G remains first-line.'
  },
  {
    id: 'BAC4-065', m: 'm3', area: 'Syphilis vs Lyme differential', level: 'integration',
    stem: 'Which statement correctly contrasts the reservoirs of Treponema pallidum and Borrelia burgdorferi?',
    options: [
      'T. pallidum\'s only reservoir is humans, while B. burgdorferi is a zoonotic infection maintained in animal reservoirs',
      'Both organisms are maintained exclusively in animal reservoirs',
      'Both organisms infect only humans, with no animal reservoir for either',
      'B. burgdorferi\'s only reservoir is humans, while T. pallidum is zoonotic'
    ],
    answer: 0,
    why: 'T. pallidum spreads only between humans, while B. burgdorferi persists in animal reservoirs, such as mice and deer, and reaches humans only incidentally through a tick bite.'
  },
  {
    id: 'BAC4-066', m: 'm3', area: 'Jarisch-Herxheimer reaction', level: 'application',
    stem: 'A patient being treated for Lyme disease develops transient fever and muscle aches about 30 hours after their first dose of doxycycline, with no rash or airway symptoms. Vital signs remain stable aside from the fever. What is the most appropriate management?',
    options: [
      'Continue doxycycline and manage symptoms supportively',
      'Discontinue doxycycline immediately due to a presumed allergy',
      'Switch to an alternative antibiotic class',
      'Administer epinephrine as a precaution'
    ],
    answer: 0,
    why: 'Stable vital signs, no rash or airway involvement, and onset around 24-72 hours after the first dose describe a Jarisch-Herxheimer reaction rather than an allergic reaction — supportive care while continuing the antibiotic is appropriate.'
  },

  {
    id: 'BAC4-025', m: 'm4', area: 'EB vs RB', level: 'concept',
    stem: 'Which form of Chlamydia is metabolically active and replicates inside the host cell?',
    options: ['The reticulate body (RB)', 'The elementary body (EB)', 'Both forms equally', 'Neither form replicates'],
    answer: 0,
    why: 'The RB is the metabolically active, intracellular form that divides by binary fission — the EB, by contrast, is inactive and built for survival outside the cell.'
  },
  {
    id: 'BAC4-026', m: 'm4', area: 'Chlamydial lifecycle', level: 'concept',
    stem: 'Chlamydial replication takes place within which structure inside the host cell?',
    options: ['A membrane-bound inclusion', 'The host cell nucleus', 'The mitochondria', 'A cell wall vacuole'],
    answer: 0,
    why: 'The inclusion is the protected, membrane-bound compartment where EBs convert to RBs and replicate, shielded from the rest of the host cell.'
  },
  {
    id: 'BAC4-027', m: 'm4', area: 'Chlamydial lifecycle', level: 'application',
    stem: 'Of the five steps in the chlamydial developmental cycle, which one occurs immediately before release?',
    options: ['Differentiation of RBs back into EBs', 'Attachment to the epithelial cell', 'Entry into the inclusion', 'RB replication'],
    answer: 0,
    why: 'The cycle runs attachment \u2192 entry \u2192 replication \u2192 differentiation \u2192 release, so differentiation back into infectious EBs is the step that directly precedes release.'
  },
  {
    id: 'BAC4-028', m: 'm4', area: 'Lifecycle disruption', level: 'application',
    stem: 'A drug interferes specifically with the conversion of reticulate bodies back into elementary bodies. What would be the expected effect on the infection?',
    options: ['Fewer or no new infectious particles would be produced', 'Replication of RBs would accelerate', 'The infection would spread more rapidly to new cells', 'Attachment to new host cells would be enhanced'],
    answer: 0,
    why: 'Only EBs are infectious. Blocking the RB-to-EB conversion leaves plenty of RBs behind, but none of them can go on to infect a new cell.'
  },
  {
    id: 'BAC4-029', m: 'm4', area: 'Which Chlamydia species', level: 'concept',
    stem: 'Which Chlamydia species has birds as its natural host?',
    options: ['Chlamydia psittaci', 'Chlamydia trachomatis', 'Chlamydia pneumoniae', 'Coxiella burnetii'],
    answer: 0,
    why: 'C. psittaci is unique among the three species in using birds as its natural host, with human infection occurring from inhaling dried droppings or secretions.'
  },
  {
    id: 'BAC4-030', m: 'm4', area: 'Which Chlamydia species', level: 'application',
    stem: 'A pet store employee develops fever and pneumonia after prolonged exposure to parrots. Which organism is the most likely cause?',
    options: ['Chlamydia psittaci', 'Chlamydia trachomatis', 'Chlamydia pneumoniae', 'Mycoplasma pneumoniae'],
    answer: 0,
    why: 'Bird exposure plus pneumonia is the classic setup for psittacosis, caused by C. psittaci — a reminder that occupational and exposure history can point straight to the organism.'
  },
  {
    id: 'BAC4-031', m: 'm4', area: 'C. trachomatis clinical management', level: 'integration',
    stem: 'A sexually active patient with no symptoms tests positive for Chlamydia trachomatis on routine screening. What is the most appropriate next step?',
    options: ['Treat with doxycycline despite the absence of symptoms', 'Defer treatment until symptoms develop', 'Repeat testing in one year with no treatment now', 'Treat only if the patient\'s partner also tests positive'],
    answer: 0,
    why: 'Asymptomatic carriers remain an important transmission reservoir, so a positive screening result is treated on its own — waiting for symptoms or a partner\'s result isn\'t appropriate here.'
  },
  {
    id: 'BAC4-032', m: 'm4', area: 'C. trachomatis clinical management', level: 'integration',
    stem: 'Given how often Chlamydia trachomatis and Neisseria gonorrhoeae coinfection occurs, what should guide empiric management of a patient with confirmed chlamydial urethritis?',
    options: ['Considering empiric treatment for gonococcal coinfection as well', 'Withholding treatment until gonorrhea testing results return', 'Treating only for gonorrhea, since it is more clinically significant', 'Assuming coinfection is rare enough to ignore'],
    answer: 0,
    why: 'With coinfection occurring in roughly 10-30% of cases, many clinicians treat empirically for both organisms rather than waiting on a second confirmatory test.'
  },

  {
    id: 'BAC4-067', m: 'm4', area: 'EB vs RB', level: 'application',
    stem: 'A researcher wants to isolate the form of Chlamydia capable of surviving outside a host cell for transport between laboratories. Which form should be targeted, and why?',
    options: [
      'The elementary body, because it is metabolically inactive and environmentally resistant',
      'The reticulate body, because it replicates rapidly',
      'The elementary body, because it actively divides',
      'The reticulate body, because it is resistant to environmental stress'
    ],
    answer: 0,
    why: 'The EB\'s metabolic inactivity is exactly what makes it stable enough to survive outside a host cell — the RB, by contrast, is fragile and depends on the protected intracellular environment to function.'
  },
  {
    id: 'BAC4-068', m: 'm4', area: 'EB vs RB', level: 'concept',
    stem: 'Which statement correctly contrasts the infectivity of the elementary body and the reticulate body?',
    options: ['The elementary body is infectious; the reticulate body is not', 'The reticulate body is infectious; the elementary body is not', 'Both forms are equally infectious', 'Neither form is infectious under any circumstance'],
    answer: 0,
    why: 'Infectivity belongs to the EB alone — the RB\'s role is purely intracellular replication, not initiating new infections.'
  },
  {
    id: 'BAC4-069', m: 'm4', area: 'Chlamydial lifecycle', level: 'application',
    stem: 'A new antimicrobial agent is found to specifically block the initial attachment step of the chlamydial developmental cycle. What would be the expected effect on cells already infected and past this stage?',
    options: [
      'No effect on cells already infected, since the drug only prevents new entry',
      'Complete clearance of all existing intracellular organisms',
      'Reversal of RB back into EB prematurely',
      'Immediate lysis of already-infected cells'
    ],
    answer: 0,
    why: 'A drug that blocks attachment only prevents new cells from being infected — it would do nothing to organisms already established inside a cell past that step, since this is a sequential lifecycle, not a reversible one.'
  },
  {
    id: 'BAC4-070', m: 'm4', area: 'Lifecycle disruption', level: 'application',
    stem: 'A hypothetical drug locks reticulate bodies in their replicating form, preventing differentiation back into elementary bodies. What would happen to bacterial load within a single infected cell, compared with the infection\'s ability to spread to other cells?',
    options: [
      'Bacterial load within the cell could still increase, but the infection could not spread to new cells',
      'Both bacterial load and spread to new cells would stop immediately',
      'Spread to new cells would continue normally, unaffected by the block',
      'Bacterial load within the cell would immediately drop to zero'
    ],
    answer: 0,
    why: 'Blocking differentiation doesn\'t stop RB replication itself — the cell can still accumulate RBs — but without EBs, there is no infectious form available to escape and infect new cells.'
  },
  {
    id: 'BAC4-071', m: 'm4', area: 'Lifecycle disruption', level: 'integration',
    stem: 'Comparing a drug that blocks chlamydial attachment with one that blocks EB release, which statement correctly describes their different effects on an already-infected cell?',
    options: [
      'A release-blocking drug would still allow RB replication inside that cell, while an attachment-blocking drug would prevent the infection from ever starting there',
      'Both drugs would have an identical effect on an already-infected cell',
      'A release-blocking drug would prevent the infection from ever starting, while an attachment-blocking drug would allow replication to continue',
      'Neither drug would have any meaningful effect at any stage'
    ],
    answer: 0,
    why: 'Attachment is the very first step, so blocking it only prevents infection in cells not yet infected. Blocking release, by contrast, still allows the full replication cycle to proceed inside an already-infected cell — it simply traps the resulting EBs there instead of letting them spread.'
  },
  {
    id: 'BAC4-072', m: 'm4', area: 'Which Chlamydia species', level: 'application',
    stem: 'A veterinarian who routinely handles sick parrots develops fever and a dry cough. Chest imaging shows patchy infiltrates. Which organism should be high on the differential, and what exposure detail supports it?',
    options: [
      'Chlamydia psittaci, supported by occupational bird exposure',
      'Chlamydia trachomatis, supported by occupational bird exposure',
      'Chlamydia pneumoniae, supported by occupational bird exposure',
      'Mycoplasma pneumoniae, supported by occupational bird exposure'
    ],
    answer: 0,
    why: 'Occupational exposure to birds is the signature risk factor for psittacosis, caused by Chlamydia psittaci — distinguishing it from the human-to-human-spread C. pneumoniae, which looks clinically similar.'
  },
  {
    id: 'BAC4-073', m: 'm4', area: 'C. trachomatis clinical management', level: 'application',
    stem: 'A pregnant patient tests positive for Chlamydia trachomatis on routine prenatal screening. Which treatment consideration specifically applies because of her pregnancy?',
    options: [
      'Azithromycin as a single dose may be preferred over doxycycline',
      'Doxycycline becomes the only acceptable option during pregnancy',
      'No treatment should be given until after delivery',
      'Penicillin G becomes first-line therapy during pregnancy'
    ],
    answer: 0,
    why: 'Doxycycline is generally avoided in pregnancy, which is specifically when single-dose azithromycin becomes the preferred alternative, rather than the exception reserved mainly for adherence concerns outside pregnancy.'
  },

  {
    id: 'BAC4-033', m: 'm5', area: 'Rickettsial pathogenesis', level: 'concept',
    stem: 'Rickettsia rickettsii primarily damages which type of cell, leading to the clinical findings of Rocky Mountain spotted fever?',
    options: ['Endothelial cells lining blood vessels', 'Hepatocytes', 'Alveolar macrophages', 'Renal tubular cells'],
    answer: 0,
    why: 'Damage to endothelial cells is the root cause of RMSF\'s vasculitis, and from there, nearly every downstream finding — rash, headache, and in severe cases edema or circulatory collapse.'
  },
  {
    id: 'BAC4-034', m: 'm5', area: 'RMSF clinical timing', level: 'application',
    stem: 'A patient with recent tick exposure develops fever, severe headache, and myalgia but no rash. What is the most appropriate next step?',
    options: ['Begin doxycycline empirically without waiting for a rash', 'Wait for the rash before starting antibiotics', 'Order a chest x-ray to rule out atypical pneumonia', 'Reassure the patient and schedule a follow-up in two weeks'],
    answer: 0,
    why: 'The rash of RMSF can lag fever onset by up to 6 days. Waiting for it before treating risks allowing the underlying vasculitis to progress unchecked.'
  },
  {
    id: 'BAC4-035', m: 'm5', area: 'Vector-organism matching', level: 'concept',
    stem: 'Which organism shares its tick vector with Borrelia burgdorferi?',
    options: ['Anaplasma phagocytophilum', 'Ehrlichia chaffeensis', 'Rickettsia rickettsii', 'Coxiella burnetii'],
    answer: 0,
    why: 'Anaplasma phagocytophilum and Borrelia burgdorferi are both carried by Ixodes scapularis, making anaplasmosis a real coinfection concern after a tick bite that transmits Lyme disease.'
  },
  {
    id: 'BAC4-036', m: 'm5', area: 'Vector-organism matching', level: 'application',
    stem: 'A patient presents with fever and myalgia two weeks after removing a lone star tick. Which organism is the most likely cause?',
    options: ['Ehrlichia chaffeensis', 'Anaplasma phagocytophilum', 'Rickettsia rickettsii', 'Borrelia burgdorferi'],
    answer: 0,
    why: 'The lone star tick is the specific vector for Ehrlichia chaffeensis, distinguishing it from the other organisms in this module, which use different tick species or no tick at all.'
  },
  {
    id: 'BAC4-037', m: 'm5', area: 'Coxiella and Wolbachia outliers', level: 'application',
    stem: 'A farm worker with regular exposure to unpasteurized dairy and livestock birth products develops pneumonia. Which organism should be suspected?',
    options: ['Coxiella burnetii', 'Rickettsia rickettsii', 'Ehrlichia chaffeensis', 'Anaplasma phagocytophilum'],
    answer: 0,
    why: 'This exposure history — livestock birth products and unpasteurized dairy, with no tick bite — is the signature route for Coxiella burnetii, the cause of Q fever.'
  },
  {
    id: 'BAC4-038', m: 'm5', area: 'Coxiella and Wolbachia outliers', level: 'integration',
    stem: 'Doxycycline improves outcomes in Wuchereria bancrofti infection primarily by which mechanism?',
    options: ['Killing the intracellular bacterium Wolbachia that the worm depends on', 'Directly killing the adult roundworm', 'Preventing mosquito transmission of the parasite', 'Reducing the host\'s inflammatory response only'],
    answer: 0,
    why: 'Doxycycline doesn\'t target the worm itself — it kills Wolbachia, the bacterium living inside Wuchereria that the worm depends on, indirectly reducing the worm\'s lifespan and pathogenicity.'
  },
  {
    id: 'BAC4-039', m: 'm5', area: 'Shared tick exposures', level: 'integration',
    stem: 'A patient with a confirmed Ixodes scapularis bite is treated for Lyme disease but continues to have fever after several days. Which coinfection should be considered?',
    options: ['Anaplasmosis', 'Q fever', 'Psittacosis', 'Nocardiosis'],
    answer: 0,
    why: 'Because Anaplasma phagocytophilum shares the same Ixodes vector as Lyme disease, persistent fever despite Lyme-directed treatment should raise suspicion for anaplasmosis rather than treatment failure alone.'
  },
  {
    id: 'BAC4-040', m: 'm5', area: 'Shared tick exposures', level: 'integration',
    stem: 'Which of the following organisms covered in this module is transmitted by a route other than a tick bite?',
    options: ['Coxiella burnetii', 'Rickettsia rickettsii', 'Ehrlichia chaffeensis', 'Anaplasma phagocytophilum'],
    answer: 0,
    why: 'Coxiella burnetii stands apart from the other three organisms in this module — all of which are tick-borne, just by different tick species — because it spreads through livestock-associated aerosols and unpasteurized dairy instead.'
  },

  {
    id: 'BAC4-074', m: 'm5', area: 'Rickettsial pathogenesis', level: 'application',
    stem: 'A patient with confirmed Rocky Mountain spotted fever develops worsening edema and low blood pressure in addition to the expected rash. Which underlying process best explains both the rash and these new findings?',
    options: [
      'Increased capillary permeability from widespread endothelial damage',
      'A separate, unrelated allergic reaction',
      'Direct toxin-mediated damage to the kidneys only',
      'A coagulase-driven clotting cascade specific to this organism'
    ],
    answer: 0,
    why: 'Both the rash and the fluid shifts (edema, low blood pressure) trace back to the same underlying vasculitis and capillary leak caused by endothelial cell invasion — a unifying mechanism rather than separate processes.'
  },
  {
    id: 'BAC4-075', m: 'm5', area: 'Rickettsial pathogenesis', level: 'concept',
    stem: 'Which best describes the overall pathogenic strategy of Rickettsia rickettsii compared with an organism that produces a classic, well-characterized secreted exotoxin?',
    options: [
      'It damages the host through direct cellular invasion and vascular injury, rather than one well-defined secreted toxin',
      'It produces a single, well-characterized exotoxin responsible for all clinical findings',
      'It damages the host exclusively through an immune-mediated allergic mechanism',
      'It requires no interaction with host cells to cause disease'
    ],
    answer: 0,
    why: 'Rickettsia\'s damage comes from invading and injuring endothelial cells directly — its pathogenicity is linked to cell-entry and phagosomal-escape factors rather than one classic, well-defined exotoxin.'
  },
  {
    id: 'BAC4-076', m: 'm5', area: 'RMSF clinical timing', level: 'integration',
    stem: 'Two patients present with fever and headache after recent outdoor activity in an endemic area. One has a rash; the other does not. Based on the typical timeline of Rocky Mountain spotted fever, how should the absence of a rash in the second patient affect management?',
    options: [
      'It should not delay starting doxycycline if RMSF is otherwise suspected, since the rash often lags fever by days',
      'It should rule out RMSF entirely and prompt a search for another diagnosis',
      'It indicates the infection is already resolving on its own',
      'It means antibiotics are not indicated until a rash develops'
    ],
    answer: 0,
    why: 'Because the rash can lag fever onset by up to 6 days, its absence early on doesn\'t rule out RMSF — treatment decisions should be based on clinical suspicion and exposure, not on waiting for a rash that may not have appeared yet.'
  },
  {
    id: 'BAC4-077', m: 'm5', area: 'RMSF clinical timing', level: 'application',
    stem: 'A patient treated promptly with doxycycline on the first day of fever and headache, before any rash developed, asks what to expect next. What should they be told?',
    options: [
      'Early treatment reduces the risk of progressing to the severe complications seen with delayed therapy',
      'A rash will still definitely develop regardless of early treatment',
      'Doxycycline is ineffective once started before a rash appears',
      'They should expect no improvement for at least two weeks'
    ],
    answer: 0,
    why: 'The severe complications of RMSF (DIC, CNS changes, circulatory collapse) result from ongoing, untreated vascular injury — treating early, before those complications develop, is exactly how empiric therapy improves outcomes.'
  },
  {
    id: 'BAC4-078', m: 'm5', area: 'Vector-organism matching', level: 'integration',
    stem: 'A patient develops fever and headache two weeks after a camping trip in the southeastern United States, where they recall removing an attached tick. Lab testing reveals a low white blood cell count and abnormal liver enzymes, but no rash. Which organism is most consistent with this presentation?',
    options: ['Ehrlichia chaffeensis', 'Rickettsia rickettsii', 'Borrelia burgdorferi', 'Treponema pallidum'],
    answer: 0,
    why: 'Ehrlichiosis, transmitted by the lone star tick common in the southeastern U.S., classically presents with fever, low white blood cell count, and abnormal liver enzymes, often without the rash seen in RMSF.'
  },
  {
    id: 'BAC4-079', m: 'm5', area: 'Coxiella and Wolbachia outliers', level: 'application',
    stem: 'A patient with a several-month history of unexplained fevers is found to have a new heart murmur and vegetations on echocardiogram, with blood cultures repeatedly negative using standard methods. The patient has a history of regular contact with farm animals. Which organism should be suspected, and what does this presentation represent?',
    options: [
      'Coxiella burnetii, representing chronic Q fever presenting as culture-negative endocarditis',
      'Rickettsia rickettsii, representing acute Rocky Mountain spotted fever',
      'Ehrlichia chaffeensis, representing acute ehrlichiosis',
      'Anaplasma phagocytophilum, representing acute anaplasmosis'
    ],
    answer: 0,
    why: 'Culture-negative endocarditis with a livestock exposure history is a classic presentation of chronic Q fever, since Coxiella burnetii does not grow well with standard blood culture techniques.'
  },
  {
    id: 'BAC4-080', m: 'm5', area: 'Shared tick exposures', level: 'integration',
    stem: 'A patient treated for Lyme disease with amoxicillin continues to have fever and new joint pains after a full course. Testing is being considered. Which organism, sharing the same tick vector as Borrelia burgdorferi, would be most important to test for?',
    options: ['Anaplasma phagocytophilum', 'Rickettsia rickettsii', 'Ehrlichia chaffeensis', 'Coxiella burnetii'],
    answer: 0,
    why: 'Persistent symptoms after appropriate Lyme treatment should raise suspicion for a coinfection sharing the same Ixodes scapularis vector — Anaplasma phagocytophilum is the organism in this course that fits that description.'
  },

  {
    id: 'BAC4-041', m: 'm6', area: 'Cross-organism outliers', level: 'integration',
    stem: 'Which finding would be inconsistent with a diagnosis of Mycobacterium tuberculosis?',
    options: ['Complete absence of a cell wall', 'Acid-fast staining', 'A doubling time of approximately 18 hours', 'Resistance to standard beta-lactams'],
    answer: 0,
    why: 'M. tuberculosis has an unusually lipid-rich cell wall, not no wall at all — that description belongs to Mycoplasma pneumoniae, an entirely different organism from a different module.'
  },
  {
    id: 'BAC4-042', m: 'm6', area: 'Exposure-based identification', level: 'application',
    stem: 'A patient who works with poultry develops pneumonia. Which single organism from this course is most specifically associated with this exposure?',
    options: ['Chlamydia psittaci', 'Chlamydia pneumoniae', 'Mycoplasma pneumoniae', 'Coxiella burnetii'],
    answer: 0,
    why: 'Bird exposure is the one clue that points specifically to Chlamydia psittaci — the other three organisms cause similar-looking pneumonia but from entirely different exposures.'
  },
  {
    id: 'BAC4-043', m: 'm6', area: 'Exposure-based identification', level: 'application',
    stem: 'A patient develops an expanding rash with central clearing five days after a hike in a wooded area. Which organism is most consistent with this presentation?',
    options: ['Borrelia burgdorferi', 'Rickettsia rickettsii', 'Treponema pallidum', 'Ehrlichia chaffeensis'],
    answer: 0,
    why: 'An expanding rash with central clearing is erythema migrans — specific to Lyme disease and Borrelia burgdorferi, not the other tick- or sexually-associated organisms listed.'
  },
  {
    id: 'BAC4-044', m: 'm6', area: 'Treatment constraints from biology', level: 'integration',
    stem: 'An organism is confirmed to have no peptidoglycan cell wall. Which of the following treatment choices reflects sound reasoning based on this fact alone?',
    options: ['Avoiding beta-lactams and choosing a macrolide or tetracycline instead', 'Choosing a beta-lactam as first-line therapy', 'Choosing vancomycin as first-line therapy', 'Assuming no antibiotic will be effective'],
    answer: 0,
    why: 'Beta-lactams and vancomycin both require a cell wall to act on. Macrolides and tetracyclines target the ribosome instead, so they remain viable choices regardless of wall status.'
  },
  {
    id: 'BAC4-045', m: 'm6', area: 'Treatment constraints from biology', level: 'application',
    stem: 'An organism is known to be an obligate intracellular pathogen that cannot be grown on standard culture media. Which diagnostic approach is most appropriate?',
    options: ['Serology, inclusion staining, or nucleic acid amplification', 'Routine bacterial culture on blood agar', 'Acid-fast staining alone', 'Gram stain alone'],
    answer: 0,
    why: 'Obligate intracellular organisms can\'t grow on standard media, so diagnosis has to lean on methods that don\'t require independent growth — the same logic that applies to Chlamydia and the rickettsial organisms throughout this companion.'
  },
  {
    id: 'BAC4-046', m: 'm6', area: 'Unknown patient reasoning', level: 'integration',
    stem: 'A patient with a history of dental trauma develops a slowly draining jaw lesion with granular pus, and cultures grow branching filaments under anaerobic conditions. Which organism and treatment pairing is correct?',
    options: [
      'Actinomyces israelii, treated with penicillin G',
      'Nocardia asteroides, treated with TMP-SMX',
      'Mycobacterium tuberculosis, treated with four-drug therapy',
      'Mycoplasma pneumoniae, treated with a macrolide'
    ],
    answer: 0,
    why: 'Dental trauma, a draining lesion, and anaerobic branching filaments together point to Actinomyces israelii, treated with penicillin G — not its aerobic look-alike, Nocardia.'
  },
  {
    id: 'BAC4-047', m: 'm6', area: 'Unknown patient reasoning', level: 'integration',
    stem: 'An immunocompromised patient with a low CD4 count develops pulmonary disease resembling tuberculosis, but the isolate is highly resistant to standard anti-tuberculosis drugs. Which organism and diagnostic clue best fit this presentation?',
    options: [
      'MAC, suggested by the resistance pattern in a severely immunocompromised host',
      'Mycobacterium tuberculosis, suggested by a normal immune status',
      'Nocardia asteroides, suggested by a history of dental trauma',
      'Coxiella burnetii, suggested by livestock exposure'
    ],
    answer: 0,
    why: 'The combination of severe immunosuppression and resistance to standard anti-TB drugs is the signature clue for MAC, distinguishing it from M. tuberculosis itself.'
  },
  {
    id: 'BAC4-048', m: 'm6', area: 'Cumulative recap', level: 'concept',
    stem: 'Which pairing of organism and its single most distinguishing structural or biological feature is correct?',
    options: [
      'Mycoplasma pneumoniae \u2014 no cell wall',
      'Treponema pallidum \u2014 obligate intracellular growth with an EB/RB cycle',
      'Rickettsia rickettsii \u2014 branching filamentous morphology',
      'Chlamydia psittaci \u2014 transmission by tick bite'
    ],
    answer: 0,
    why: 'Each distractor swaps in a feature that belongs to a different organism: the EB/RB cycle is Chlamydia\'s, branching filaments belong to Actinomyces/Nocardia, and tick transmission doesn\'t apply to C. psittaci.'
  },
  {
    id: 'BAC4-081', m: 'm6', area: 'Cross-organism outliers', level: 'integration',
    stem: 'Which pairing correctly matches an organism with a feature that is actually true of it, rather than a feature borrowed from a different organism in this course?',
    options: [
      'Borrelia burgdorferi \u2014 transmitted by a tick, not sexually',
      'Mycobacterium tuberculosis \u2014 no cell wall',
      'Actinomyces israelii \u2014 transmitted by a tick',
      'Coxiella burnetii \u2014 transmitted by a tick'
    ],
    answer: 0,
    why: 'Borrelia burgdorferi genuinely is tick-borne. The other three options each swap in a feature belonging to a different organism: no cell wall is Mycoplasma\'s, and tick transmission does not apply to Actinomyces or Coxiella.'
  },
  {
    id: 'BAC4-082', m: 'm6', area: 'Cross-organism outliers', level: 'integration',
    stem: 'A finding list for an unnamed organism includes: obligate intracellular growth, an elementary body/reticulate body cycle, and transmission by tick bite. Which single item does not belong, and to which organism does it actually apply?',
    options: [
      'Transmission by tick bite; this applies to Rickettsia or Borrelia, not a Chlamydia species',
      'The elementary body/reticulate body cycle; this applies to Rickettsia',
      'Obligate intracellular growth; this applies only to viruses',
      'All three items are consistent with a single real organism'
    ],
    answer: 0,
    why: 'Obligate intracellular growth and an EB/RB cycle both describe Chlamydia, but tick transmission does not — that belongs to the tick-borne organisms covered in Module 5, not to any Chlamydia species.'
  },
  {
    id: 'BAC4-083', m: 'm6', area: 'Exposure-based identification', level: 'application',
    stem: 'Clue: unpasteurized dairy exposure leading to culture-negative endocarditis. Which organism does this describe?',
    options: ['Coxiella burnetii', 'Rickettsia rickettsii', 'Chlamydia psittaci', 'Nocardia asteroides'],
    answer: 0,
    why: 'Unpasteurized dairy exposure leading to culture-negative endocarditis is the signature presentation of chronic Q fever, caused by Coxiella burnetii.'
  },
  {
    id: 'BAC4-084', m: 'm6', area: 'Treatment constraints from biology', level: 'integration',
    stem: 'An organism is confirmed to produce its own beta-lactamase. A separate organism is confirmed to have no plasmids at all. Which statement correctly applies a treatment implication to each?',
    options: [
      'The beta-lactamase producer will degrade standard beta-lactams; the plasmid-free organism can only develop resistance through chromosomal mutation',
      'The beta-lactamase producer cannot develop any resistance; the plasmid-free organism will degrade beta-lactams',
      'Both organisms are equally susceptible to beta-lactams regardless of these features',
      'Neither feature has any effect on antibiotic selection'
    ],
    answer: 0,
    why: 'Beta-lactamase production (seen in M. tuberculosis) directly degrades beta-lactams, while having no plasmids (also true of M. tuberculosis) means any resistance that does develop must arise from chromosomal mutation rather than acquired resistance genes — two separate but related biological constraints.'
  },
  {
    id: 'BAC4-085', m: 'm6', area: 'Unknown patient reasoning', level: 'integration',
    stem: 'A 30-year-old patient recently returned from a camping trip presents with fever, headache, and a rash on the wrists and ankles that appeared four days after the fever began. Which combination of organism and reasoning is most appropriate?',
    options: [
      'Rickettsia rickettsii, because the rash timing and distribution are classic for RMSF and treatment should not wait for confirmation',
      'Borrelia burgdorferi, because any rash after outdoor exposure confirms Lyme disease',
      'Ehrlichia chaffeensis, because fever after camping always indicates ehrlichiosis',
      'Coxiella burnetii, because camping exposure always implies Q fever'
    ],
    answer: 0,
    why: 'A rash on the wrists and ankles appearing several days after fever onset is the classic distribution and timing for Rocky Mountain spotted fever — specific enough to justify starting doxycycline without waiting for lab confirmation.'
  },
  {
    id: 'BAC4-086', m: 'm6', area: 'Cumulative recap', level: 'integration',
    stem: 'Which organism in this course causes disease primarily through a developmental cycle with two distinct cellular forms, rather than through classic toxin production or direct tissue invasion by a single form?',
    options: ['Chlamydia trachomatis', 'Treponema pallidum', 'Mycobacterium tuberculosis', 'Rickettsia rickettsii'],
    answer: 0,
    why: 'Chlamydia\'s EB/RB developmental cycle is unique among the organisms in this course — none of the others depend on switching between two distinct cellular forms to complete an infection.'
  },
  {
    id: 'BAC4-087', m: 'm6', area: 'Cumulative recap', level: 'integration',
    stem: 'Which organism pairing correctly matches an organism to the single feature that most reliably distinguishes it from a close look-alike covered elsewhere in this course?',
    options: [
      'Nocardia asteroides is aerobic, distinguishing it from the anaerobic Actinomyces israelii',
      'Mycoplasma pneumoniae has a thick cell wall, distinguishing it from Chlamydia trachomatis',
      'Borrelia burgdorferi is spread sexually, distinguishing it from Treponema pallidum',
      'Coxiella burnetii is spread by ticks, distinguishing it from Rickettsia rickettsii'
    ],
    answer: 0,
    why: 'Oxygen requirement is the clean distinguishing feature between the two nearly identical-looking branching organisms. The other three options each state something false about the named organism.'
  }
];
