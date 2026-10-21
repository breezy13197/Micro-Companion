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
  },
  { "id": "HUB-CARD-26", "t": "Which virions carry their own polymerase", "d": "Negative-sense RNA viruses (measles, mumps, influenza) and dsRNA viruses (rotavirus) carry an RNA polymerase because host cells cannot copy their genomes into mRNA. Poxviruses carry a DNA-dependent RNA polymerase because they replicate in the cytoplasm. Positive-sense viruses such as norovirus do not." },
  { "id": "HUB-CARD-27", "t": "Herpesvirus drugs: who activates what", "d": "Acyclovir is first phosphorylated by viral thymidine kinase. Ganciclovir is activated by the CMV UL97 kinase. Foscarnet needs no activation and blocks the viral DNA polymerase directly." },
  { "id": "HUB-CARD-28", "t": "Protease inhibitors across viruses", "d": "Nirmatrelvir (SARS-CoV-2), darunavir and saquinavir (HIV), and glecaprevir (HCV NS3/4A) all block a viral protease, so the long polypeptide stays uncut." },
  { "id": "HUB-CARD-29", "t": "Boosters and CYP3A", "d": "Ritonavir (with nirmatrelvir or darunavir) and cobicistat inhibit CYP3A. The partner drug stays high, and levels of other medicines can rise too, so review the full medicine list." },
  { "id": "HUB-CARD-30", "t": "Influenza drugs by stage", "d": "Amantadine blocks uncoating (stage 2) and is no longer used. Baloxavir blocks cap-snatching during mRNA synthesis (stage 5). Oseltamivir, zanamivir, and peramivir block release (stage 8)." },
  { "id": "HUB-CARD-31", "t": "Prevention drugs versus treatment drugs", "d": "Prevention: lenacapavir (HIV PrEP, every 6 months), cabotegravir (PrEP, every 2 months), letermovir (CMV in transplant recipients), nirsevimab (RSV in infants), ensitrelvir (COVID-19 post-exposure), baloxavir (influenza post-exposure)." },
  { "id": "HUB-CARD-32", "t": "Live versus non-live vaccines in vulnerable patients", "d": "Live vaccines (MMR, Varivax, rotavirus) can cause disease when immunity is impaired and are not given in pregnancy (MMR). Non-live choices include Shingrix, inactivated influenza vaccine, and recombinant Abrysvo." },
  { "id": "HUB-CARD-33", "t": "Passive plus active protection", "d": "Rabies category III: wound washing, vaccine, and immune globulin or monoclonal antibodies. Newborn of an HBsAg-positive mother: hepatitis B vaccine within 24 hours plus HBIG. Pre-formed antibody covers the early gap while the vaccine builds lasting immunity." },
  { "id": "HUB-CARD-34", "t": "Herd immunity thresholds", "d": "Measles needs about 95% immunity and polio about 80%. Below the threshold, each case can infect more than one person, and infants and immunocompromised people are exposed." },
  { "id": "HUB-CARD-35", "t": "OPV versus IPV", "d": "OPV is live and oral, builds gut IgA plus serum antibody, and carries a rare risk of vaccine-associated paralysis. IPV is injected and builds serum antibody with little effect in the gut." },
  { "id": "HUB-CARD-36", "t": "What persists after antiviral therapy", "d": "HSV: circular, unintegrated DNA in neurons. HBV: cccDNA in the hepatocyte nucleus. HIV: DNA integrated into the host genome. Current drugs do not remove these, whereas HCV has no such reservoir and can be cured." },
  { "id": "HUB-CARD-37", "t": "Prophage versus herpesvirus latency", "d": "A prophage is integrated into the bacterial chromosome. Latent HSV DNA is circular and unintegrated in neurons. Both persist without making progeny until reactivation or induction." },
  { "id": "HUB-CARD-38", "t": "Herpesviruses in transplant recipients", "d": "CMV and HHV-6 stay latent and reactivate when cell-mediated immunity is impaired. Ganciclovir or foscarnet are listed for treatment, and letermovir is used as CMV prophylaxis." },
  { "id": "HUB-CARD-39", "t": "Cytotoxic T cells as a cause of injury", "d": "The measles rash, hepatitis A liver damage, and hepatitis B liver injury are attributed to cytotoxic T cells attacking virus-infected cells." },
  { "id": "HUB-CARD-40", "t": "Cell fusion viruses", "d": "Measles virus, RSV, HSV, and VZV can fuse infected cells into multinucleated giant cells. A Tzanck smear shows this cytopathic effect for HSV and VZV but does not name the species." },
  { "id": "HUB-CARD-41", "t": "Which test answers which question", "d": "HCV RNA by RT-PCR 12 weeks after therapy confirms SVR. HBsAg detection shows current infection. Anti-HBs shows recovery or vaccine immunity. A fourfold or greater titer rise between acute and convalescent samples shows recent infection." },
  { "id": "HUB-CARD-42", "t": "Tumor viruses and vaccines", "d": "HPV, EBV, HBV, HCV, and HTLV-1 are linked to malignant transformation. Only HPV (Gardasil 9) and HBV have vaccines among them." },
  { "id": "HUB-CARD-43", "t": "Nonenveloped enteric viruses and hygiene", "d": "Norovirus and rotavirus lack an envelope, so they survive stomach acid and persist on surfaces. Hepatitis A is also fecal-oral. Wash with soap and water for at least 20 seconds." },
  { "id": "HUB-CARD-44", "t": "Nerves versus blood", "d": "Rabies and herpesviruses travel along nerves. Poliovirus, measles virus, arboviruses, and B19 spread through lymph or blood. Rotavirus and norovirus stay local to the gut." },
  { "id": "HUB-CARD-45", "t": "Viruses and pregnancy", "d": "Rubella: malformations, worst in the first trimester. Parvovirus B19: fetal anemia and hydrops. CMV: birth defects. HEV: high maternal mortality in the third trimester. MMR is not given in pregnancy." },
  { "id": "HUB-CARD-46", "t": "Perinatal prevention", "d": "HBV: birth-dose vaccine within 24 hours, plus HBIG if the mother is HBsAg-positive. HIV: antiretroviral therapy, plus scheduled cesarean at 38 weeks if HIV RNA is above 1,000 copies/mL or unknown. Neonatal HSV: IV acyclovir immediately." },
  { "id": "HUB-CARD-47", "t": "Interferon: evasion and therapy", "d": "Influenza NS-1 can inhibit interferon production, two Ebola proteins block interferon induction and action, and EBV blocks interferon synthesis. Recombinant interferon alpha is used for chronic hepatitis B." }
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
  },
    {
    "id": "HUB-039",
    "m": "viruses1+viruses4",
    "area": "Genome strategy and virion enzymes",
    "level": "application",
    "stem": "A laboratory compares measles virus, norovirus, and rotavirus virions. Which set carries its own polymerase?",
    "options": [
      "Measles virus and norovirus",
      "Norovirus and rotavirus",
      "Measles virus and rotavirus",
      "Measles virus, norovirus, and rotavirus"
    ],
    "answer": 2,
    "why": "Measles virus has a negative-sense RNA genome and rotavirus has double-stranded RNA, and host cells cannot copy either into mRNA, so both bring a polymerase. Norovirus has a positive-sense genome that acts as mRNA, so it does not."
  },
  {
    "id": "HUB-040",
    "m": "viruses1+viruses3",
    "area": "Genome strategy and virion enzymes",
    "level": "application",
    "stem": "Influenza virions carry a polymerase that makes viral mRNA, whereas a herpesvirus uses a host enzyme in the nucleus. Which explanation fits?",
    "options": [
      "Influenza has negative-sense RNA that host cells cannot copy into mRNA, whereas herpesvirus DNA can be transcribed by host RNA polymerase in the nucleus",
      "Influenza has double-stranded DNA that must be copied in the cytoplasm, whereas herpesvirus RNA is translated directly",
      "Influenza replicates in the nucleus without an envelope, whereas herpesvirus replicates in the cytoplasm",
      "Influenza carries reverse transcriptase to make DNA, whereas herpesvirus carries integrase"
    ],
    "answer": 0,
    "why": "A negative-sense RNA genome cannot be translated, and host cells have no enzyme that copies it, so influenza brings its own polymerase. Herpesviruses replicate in the nucleus and use host RNA polymerase to transcribe their DNA."
  },
  {
    "id": "HUB-041",
    "m": "viruses3+viruses4",
    "area": "Genome strategy and virion enzymes",
    "level": "integration",
    "stem": "Poxviruses and rotavirus each carry a transcription polymerase in the virion. Which pair of reasons is correct?",
    "options": [
      "Poxvirus: a negative-sense RNA genome. Rotavirus: a single-stranded DNA genome",
      "Poxvirus: a positive-sense RNA genome that needs editing. Rotavirus: an envelope that blocks host enzymes",
      "Poxvirus: replication in the nucleus with host RNA polymerase. Rotavirus: a positive-sense RNA genome",
      "Poxvirus: replication in the cytoplasm, out of reach of host RNA polymerase. Rotavirus: a double-stranded RNA genome that host enzymes cannot read"
    ],
    "answer": 3,
    "why": "Poxviruses replicate in the cytoplasm, where host RNA polymerase is not available, so they carry a DNA-dependent RNA polymerase. Rotavirus carries a polymerase because host cells cannot make mRNA from double-stranded RNA."
  },
  {
    "id": "HUB-042",
    "m": "viruses2+viruses3",
    "area": "Antiviral targets across viruses",
    "level": "application",
    "stem": "Which pairing correctly names the viral enzyme that first activates each drug in infected cells?",
    "options": [
      "Acyclovir: UL97 kinase. Ganciclovir: viral thymidine kinase. Foscarnet: none",
      "Acyclovir: viral thymidine kinase. Ganciclovir: UL97 kinase. Foscarnet: none",
      "Acyclovir: none. Ganciclovir: viral thymidine kinase. Foscarnet: UL97 kinase",
      "Acyclovir: viral thymidine kinase. Ganciclovir: none. Foscarnet: UL97 kinase"
    ],
    "answer": 1,
    "why": "Viral thymidine kinase starts activation of acyclovir, and the CMV UL97 kinase phosphorylates ganciclovir. Foscarnet blocks the viral DNA polymerase directly, so it needs no activation."
  },
  {
    "id": "HUB-043",
    "m": "viruses2+viruses5",
    "area": "Antiviral targets across viruses",
    "level": "concept",
    "stem": "Nirmatrelvir (COVID-19), darunavir (HIV), and glecaprevir (HCV) share which mechanism?",
    "options": [
      "They end the growing DNA chain because they lack a 3′ hydroxyl",
      "They block cleavage of sialic acid so virions cannot be released",
      "They block a viral protease that cuts a long polypeptide into working proteins",
      "They bind gp41 and prevent fusion of the envelope with the cell membrane"
    ],
    "answer": 2,
    "why": "All three are protease inhibitors. Glecaprevir acts on the HCV NS3/4A protease. Chain termination describes nucleoside analogs, release blockade describes neuraminidase inhibitors, and gp41 binding describes enfuvirtide."
  },
  {
    "id": "HUB-044",
    "m": "viruses2+viruses5",
    "area": "Antiviral targets across viruses",
    "level": "application",
    "stem": "Nirmatrelvir is given with ritonavir, and darunavir is given with ritonavir or cobicistat. What is the shared practical consequence?",
    "options": [
      "Both boosters block the viral protease directly, so the partner dose can be lowered",
      "Both boosters convert the partner drug into its active form in the liver",
      "Both boosters prevent the partner drug from entering infected cells",
      "Both boosters inhibit CYP3A, so levels of other medicines can rise and interactions need review"
    ],
    "answer": 3,
    "why": "Ritonavir and cobicistat inhibit CYP3A, which slows breakdown of the partner drug. The same effect can raise levels of other CYP3A substrates, so the full medicine list is reviewed."
  },
  {
    "id": "HUB-045",
    "m": "viruses2+viruses3",
    "area": "Antiviral targets across viruses",
    "level": "integration",
    "stem": "Which pairing correctly places each influenza drug at its step of the replication cycle?",
    "options": [
      "Oseltamivir: uncoating. Baloxavir: release. Amantadine: mRNA synthesis",
      "Amantadine: uncoating. Baloxavir: mRNA synthesis through cap-snatching. Oseltamivir: release",
      "Amantadine: release. Baloxavir: uncoating. Oseltamivir: mRNA synthesis",
      "Baloxavir: attachment. Amantadine: mRNA synthesis. Oseltamivir: uncoating"
    ],
    "answer": 1,
    "why": "Amantadine blocks the M2 channel and prevents uncoating (stage 2), although it is no longer used for influenza. Baloxavir inhibits the cap-dependent endonuclease during mRNA synthesis (stage 5). Oseltamivir inhibits neuraminidase and blocks release (stage 8)."
  },
  {
    "id": "HUB-046",
    "m": "viruses2+viruses5",
    "area": "Antiviral targets across viruses",
    "level": "application",
    "stem": "Which pairing correctly matches each nucleoside or nucleotide analog with its target?",
    "options": [
      "Sofosbuvir: reverse transcriptase. Entecavir: NS5B polymerase. Tenofovir: integrase",
      "Sofosbuvir: NS3/4A protease. Entecavir: HBV integrase. Tenofovir: reverse transcriptase",
      "Sofosbuvir: HCV NS5B RNA polymerase. Entecavir: HBV polymerase (reverse transcriptase activity). Tenofovir: HIV reverse transcriptase",
      "Sofosbuvir: NS5A protein. Entecavir: HBV protease. Tenofovir: gp41"
    ],
    "answer": 2,
    "why": "Sofosbuvir inhibits the NS5B RNA polymerase of hepatitis C virus. Entecavir inhibits the reverse transcriptase activity of the HBV polymerase. Tenofovir inhibits reverse transcriptase and is used for both HIV and HBV."
  },
  {
    "id": "HUB-047",
    "m": "viruses2+viruses3+viruses5",
    "area": "Antiviral targets across viruses",
    "level": "integration",
    "stem": "Lenacapavir and letermovir are used for prevention. Which pairing of target and use is correct?",
    "options": [
      "Lenacapavir: terminase, to prevent CMV disease. Letermovir: capsid protein, as HIV PrEP",
      "Lenacapavir: integrase, to treat HIV. Letermovir: terminase, to treat CMV",
      "Lenacapavir: gp41, as passive immunization. Letermovir: protease, to prevent RSV",
      "Lenacapavir: capsid protein, as HIV PrEP every 6 months. Letermovir: terminase, as CMV prophylaxis in transplant recipients"
    ],
    "answer": 3,
    "why": "Lenacapavir binds the HIV capsid protein and is given every 6 months as PrEP. Letermovir inhibits the CMV terminase complex and prevents CMV disease in high-risk transplant recipients."
  },
  {
    "id": "HUB-048",
    "m": "viruses2+viruses5",
    "area": "Antiviral targets across viruses",
    "level": "application",
    "stem": "On the eight-stage replication roadmap, which stages does a regimen of dolutegravir plus lamivudine block?",
    "options": [
      "Genome copying (stage 3) and integration (stage 4)",
      "Attachment and entry (stage 1) and uncoating (stage 2)",
      "Integration (stage 4) and release (stage 8)",
      "Protein making and cutting (stage 6) and assembly (stage 7)"
    ],
    "answer": 0,
    "why": "Lamivudine is a nucleoside analog that stops reverse transcription, which is genome copying for HIV (stage 3). Dolutegravir is an integrase inhibitor and blocks integration (stage 4). The two drugs act on different enzymes, which slows resistance."
  },
  {
    "id": "HUB-049",
    "m": "viruses2+viruses3",
    "area": "Vaccines and passive protection",
    "level": "application",
    "stem": "A 35-year-old receiving chemotherapy needs protection against zoster and influenza. Which pair of vaccines fits?",
    "options": [
      "Varivax and live attenuated influenza vaccine",
      "Shingrix and inactivated influenza vaccine",
      "Zostavax and inactivated influenza vaccine",
      "Shingrix and live attenuated influenza vaccine"
    ],
    "answer": 1,
    "why": "Live-attenuated vaccines can cause disease in immunocompromised patients. Shingrix is a recombinant, non-live vaccine used from age 19 in immunocompromised adults, and an inactivated influenza vaccine contains no live virus. Zostavax was live and has been discontinued in the U.S."
  },
  {
    "id": "HUB-050",
    "m": "viruses2+viruses3+viruses4",
    "area": "Vaccines and passive protection",
    "level": "integration",
    "stem": "Abrysvo is given at 32 to 36 weeks of pregnancy, whereas MMR is not given during pregnancy. Which explanation fits?",
    "options": [
      "Abrysvo is a live attenuated vaccine, whereas MMR is a killed vaccine",
      "Abrysvo is given only after delivery, whereas MMR is given in the third trimester",
      "Abrysvo is an mRNA vaccine that cannot reach the fetus, whereas MMR can",
      "Abrysvo is a recombinant protein vaccine with no live virus, whereas MMR contains live attenuated viruses"
    ],
    "answer": 3,
    "why": "Abrysvo is a recombinant subunit vaccine, so there is no virus that can replicate. Maternal vaccination passes antibody to the infant. MMR contains live attenuated viruses, so a non-immune woman is vaccinated before pregnancy or after delivery."
  },
  {
    "id": "HUB-051",
    "m": "viruses2+viruses5",
    "area": "Vaccines and passive protection",
    "level": "integration",
    "stem": "A newborn of an HBsAg-positive mother receives hepatitis B vaccine plus HBIG, and a person with a category III rabies exposure receives vaccine plus immune globulin. What principle explains both?",
    "options": [
      "The vaccine gives immediate protection, and the immune globulin builds lasting memory",
      "The immune globulin makes later vaccine doses unnecessary because its protection is long-lasting",
      "Pre-formed antibody gives immediate protection while the vaccine builds the person’s own lasting immunity",
      "Both products supply pre-formed antibody, so the combination extends protection through repeated passive doses"
    ],
    "answer": 2,
    "why": "Passive antibody protects immediately but fades over weeks to months and creates no memory. Active immunity from the vaccine takes days to weeks to start and then lasts. Combining them covers the early gap."
  },
  {
    "id": "HUB-052",
    "m": "viruses2+viruses4",
    "area": "Vaccines and passive protection",
    "level": "application",
    "stem": "A community has 90% measles vaccine coverage, and a child with fever, rash, and Koplik spots attends a crowded clinic. Which statement is supported?",
    "options": [
      "Coverage exceeds the measles threshold, so outbreaks fade and infants are protected indirectly",
      "Coverage is below the threshold of about 95%, so sustained spread is possible and infants too young for MMR remain at risk",
      "Coverage is adequate, because the polio threshold of about 80% applies to measles",
      "Coverage has no bearing, because measles does not spread through the air"
    ],
    "answer": 1,
    "why": "About 95% immunity is needed to stop sustained measles spread. Below that, each case can infect more than one person. Measles can remain infectious in the air for up to 2 hours, and infants and immunocompromised people are protected only when community immunity is high."
  },
  {
    "id": "HUB-053",
    "m": "viruses1+viruses2+viruses4",
    "area": "Vaccines and passive protection",
    "level": "integration",
    "stem": "Why can oral poliovirus vaccine interrupt gut transmission better than inactivated vaccine, and what is its trade-off?",
    "options": [
      "It is live and given by mouth, so it builds gut IgA as well as serum antibody, with a rare risk of vaccine-associated paralysis",
      "It is killed and injected, so it builds serum IgG, with a risk of vaccine-associated paralysis",
      "It is a subunit vaccine that supplies pre-formed IgA, with a short duration of protection",
      "It is injected and builds serum antibody and gut IgA, with local pain as its trade-off"
    ],
    "answer": 0,
    "why": "A live vaccine given by the natural route produces secretory IgA at the mucosal surface in addition to serum antibody. OPV carries vaccine-associated paralysis in about 1 per 2 to 4 million doses. IPV is injected and has little effect in the gut."
  },
  {
    "id": "HUB-054",
    "m": "viruses2+viruses4",
    "area": "Vaccines and passive protection",
    "level": "concept",
    "stem": "An infant with severe combined immunodeficiency should not receive rotavirus vaccine, and MMR is avoided in severe immunocompromise. Which principle covers both?",
    "options": [
      "Live-attenuated vaccines can cause disease when the immune system is impaired",
      "Killed vaccines can revert to virulence in infants",
      "Subunit vaccines replicate in immunocompromised patients",
      "Live vaccines give weaker protection than killed vaccines"
    ],
    "answer": 0,
    "why": "The weakened virus in a live vaccine still replicates, so it can cause disease in a patient who cannot control it. Killed and subunit vaccines contain no replicating virus."
  },
  {
    "id": "HUB-055",
    "m": "viruses1+viruses3",
    "area": "Latency and persistence",
    "level": "concept",
    "stem": "A bacterial prophage and a latent herpes simplex virus both persist without making progeny. Which comparison is correct?",
    "options": [
      "Both persist as circular DNA separate from the host chromosome",
      "The prophage is integrated into the bacterial chromosome, whereas latent HSV DNA is circular and unintegrated in neurons",
      "The prophage is a circular episome, whereas latent HSV DNA is integrated into a chromosome",
      "Both persist as RNA copies in the cytoplasm"
    ],
    "answer": 1,
    "why": "A prophage is viral DNA integrated into the bacterial genome. Latent HSV DNA stays as circular, unintegrated DNA in neurons, and its main transcripts are the noncoding LATs."
  },
  {
    "id": "HUB-056",
    "m": "viruses2+viruses3+viruses5",
    "area": "Latency and persistence",
    "level": "integration",
    "stem": "Which pairing correctly states the viral genome form that persists after antiviral therapy?",
    "options": [
      "HSV: DNA integrated into the host genome. HBV: circular unintegrated DNA in neurons. HIV: cccDNA",
      "HSV: RNA in the cytoplasm. HBV: integrated DNA. HIV: cccDNA",
      "HSV: cccDNA in the hepatocyte nucleus. HBV: integrated DNA. HIV: circular DNA in neurons",
      "HSV: circular unintegrated DNA in neurons. HBV: cccDNA in the hepatocyte nucleus. HIV: DNA integrated into the host genome"
    ],
    "answer": 3,
    "why": "HSV latency is a circular episome in neurons, HBV persists as cccDNA in the hepatocyte nucleus, and HIV persists as integrated DNA. Current drugs do not remove any of these, so none of the three infections is cured by antivirals."
  },
  {
    "id": "HUB-057",
    "m": "viruses1+viruses3+viruses4",
    "area": "Latency and persistence",
    "level": "application",
    "stem": "CMV and HHV-6 both cause serious disease in transplant recipients receiving immunosuppression. Which explanation fits both?",
    "options": [
      "Both are herpesviruses that remain latent and reactivate when cell-mediated immunity is impaired",
      "Both are nonenveloped DNA viruses that integrate into host DNA",
      "Both lack a latent state, so replication continues at a low level",
      "Both cause disease only when acquired as a new primary infection"
    ],
    "answer": 0,
    "why": "CMV and HHV-6 are herpesviruses. They persist after the first infection and reactivate when immunity falls, as with immunosuppressive drugs or corticosteroids."
  },
  {
    "id": "HUB-058",
    "m": "viruses3+viruses4",
    "area": "Latency and persistence",
    "level": "application",
    "stem": "Which antiviral is listed for both CMV disease and HHV-6 reactivation in transplant recipients and acts without activation by a viral kinase?",
    "options": [
      "Ganciclovir",
      "Foscarnet",
      "Letermovir",
      "Acyclovir"
    ],
    "answer": 1,
    "why": "Foscarnet blocks the viral DNA polymerase directly and is listed for both. Ganciclovir is also listed for both but needs the UL97 kinase. Letermovir is CMV prophylaxis, and acyclovir is not listed for either."
  },
  {
    "id": "HUB-059",
    "m": "viruses1+viruses4+viruses5",
    "area": "Immunopathogenesis and cell injury",
    "level": "concept",
    "stem": "The measles rash and the liver injury of hepatitis A are both attributed to which mechanism?",
    "options": [
      "A toxin released by the infected cell",
      "Antibody and complement lysing infected cells",
      "Direct viral lysis of the infected cells",
      "Cytotoxic T cells attacking virus-infected cells"
    ],
    "answer": 3,
    "why": "The measles rash appears when cytotoxic T cells attack infected skin cells. Hepatitis A shows no cytopathic effect, and cytotoxic T cells that target viral antigen on hepatocytes are thought to cause the damage."
  },
  {
    "id": "HUB-060",
    "m": "viruses1+viruses3+viruses4+viruses5",
    "area": "Immunopathogenesis and cell injury",
    "level": "integration",
    "stem": "Which pairing correctly matches each condition with its mechanism?",
    "options": [
      "Influenza myalgia: circulating cytokines. Rotavirus diarrhea: NSP4 and serotonin activating enteric nerves. Hepatitis B liver injury: cytotoxic T cells",
      "Influenza myalgia: viral replication in muscle. Rotavirus diarrhea: cytokines. Hepatitis B liver injury: NSP4",
      "Influenza myalgia: cytotoxic T cells. Rotavirus diarrhea: viremia. Hepatitis B liver injury: circulating cytokines",
      "Influenza myalgia: NSP4. Rotavirus diarrhea: cytotoxic T cells killing gut cells. Hepatitis B liver injury: a viral toxin"
    ],
    "answer": 0,
    "why": "Influenza stays in the respiratory tract, and viremia is rare, so aches come from circulating cytokines. Rotavirus NSP4 and serotonin activate enteric nerves, raising fluid secretion and motility. Cytotoxic T cells cause most hepatitis B liver injury."
  },
  {
    "id": "HUB-061",
    "m": "viruses1+viruses3+viruses4",
    "area": "Immunopathogenesis and cell injury",
    "level": "application",
    "stem": "A Tzanck smear of an HSV vesicle and a measles-infected cell culture both show multinucleated giant cells. Which process produces these cells?",
    "options": [
      "Integration of viral DNA into the host chromosome",
      "Malignant transformation of the infected cell",
      "Fusion of neighboring cell membranes by viral fusion proteins",
      "Lysogenic conversion by a prophage"
    ],
    "answer": 2,
    "why": "Viral fusion proteins join infected cells together. Measles virus, RSV, HSV, and VZV can all produce giant cells. The Tzanck finding is a cytopathic effect and does not by itself name the species."
  },
  {
    "id": "HUB-062",
    "m": "viruses1+viruses5",
    "area": "Diagnosis and testing",
    "level": "application",
    "stem": "A patient completes a course of direct-acting antivirals for chronic hepatitis C. Which test and timing confirm a sustained virologic response?",
    "options": [
      "Paired measles-style titers, looking for a fourfold rise",
      "RT-PCR for HCV RNA 12 weeks after treatment ends",
      "ELISA for HBsAg on the last day of treatment",
      "Cell culture for cytopathic effect 4 weeks after treatment starts"
    ],
    "answer": 1,
    "why": "Nucleic acid testing measures viral burden, and SVR is undetectable HCV RNA 12 weeks after treatment completion. Titers, HBsAg, and culture answer different questions."
  },
  {
    "id": "HUB-063",
    "m": "viruses1+viruses5",
    "area": "Diagnosis and testing",
    "level": "application",
    "stem": "Which pairing of hepatitis B marker and test category is correct?",
    "options": [
      "HBsAg: serology showing recovery. Anti-HBs: antigen detection showing active infection",
      "HBsAg: a nucleic acid test. Anti-HBs: cell culture",
      "HBsAg: an antibody that shows vaccine immunity. Anti-HBs: an antigen that shows replication",
      "HBsAg: antigen detection showing infection. Anti-HBs: antibody (serology) showing recovery or vaccine immunity"
    ],
    "answer": 3,
    "why": "HBsAg is a viral protein, so detecting it is antigen detection and shows infection. Anti-HBs is the host antibody, so it is a serologic marker of recovery or vaccine immunity."
  },
  {
    "id": "HUB-064",
    "m": "viruses1+viruses4",
    "area": "Diagnosis and testing",
    "level": "application",
    "stem": "A child with a maculopapular rash has a measles-specific titer of 1:16 in the acute sample and 1:64 in a sample taken 3 weeks later. Which interpretation fits?",
    "options": [
      "A fourfold rise, consistent with recent measles infection",
      "A twofold rise, below the threshold for recent infection",
      "A fourfold rise, which shows that the child is still shedding virus",
      "A fourfold fall, which indicates past infection"
    ],
    "answer": 0,
    "why": "1:16 to 1:64 is a fourfold rise, and a fourfold or greater rise between acute and convalescent samples collected 2 to 4 weeks apart indicates recent infection. The titer shows the antibody response, not how much virus is being shed."
  },
  {
    "id": "HUB-065",
    "m": "viruses1+viruses3+viruses5",
    "area": "Vaccines and passive protection",
    "level": "concept",
    "stem": "Which pair of tumor-associated viruses each have a vaccine that prevents infection?",
    "options": [
      "EBV and HCV",
      "HPV and HCV",
      "HPV and HBV",
      "HBV and EBV"
    ],
    "answer": 2,
    "why": "HPV (Gardasil 9) and HBV (a recombinant HBsAg subunit vaccine) are both linked to malignant transformation and have vaccines. EBV and HCV are also linked to cancer, but no vaccine is available for either."
  },
  {
    "id": "HUB-066",
    "m": "viruses1+viruses4+viruses5",
    "area": "Transmission and hygiene",
    "level": "application",
    "stem": "A daycare reports a child with hepatitis A and an outbreak of norovirus gastroenteritis. Which hygiene measure addresses both?",
    "options": [
      "Washing hands with soap and water for at least 20 seconds",
      "Alcohol-based sanitizer alone, because both viruses are enveloped",
      "Antibiotic prophylaxis for classmates",
      "Airborne Precautions for exposed contacts"
    ],
    "answer": 0,
    "why": "Both viruses spread by the fecal-oral route, and norovirus lacks an envelope, so alcohol sanitizer is less effective. Soap and water removes virus from the hands. Antibiotics do not act on viruses."
  },
  {
    "id": "HUB-067",
    "m": "viruses1+viruses4",
    "area": "Transmission and hygiene",
    "level": "concept",
    "stem": "Norovirus and rotavirus survive stomach acid, and norovirus persists on surfaces for days. Which structural feature explains this?",
    "options": [
      "A DNA genome",
      "Lack of a lipid envelope",
      "A thick peptidoglycan wall",
      "Matrix proteins that link the capsid to an envelope"
    ],
    "answer": 1,
    "why": "A nonenveloped virion has no lipid layer to dissolve, so it resists acid, bile, drying, and many disinfectants. Both viruses have RNA genomes, and viruses have no peptidoglycan."
  },
  {
    "id": "HUB-068",
    "m": "viruses1+viruses4+viruses5",
    "area": "Spread within the body and pregnancy",
    "level": "integration",
    "stem": "Which pairing of virus and route to distant tissue is correct?",
    "options": [
      "Rabies: bloodstream viremia. Poliovirus: peripheral nerves from the gut. Dengue: the local bite site",
      "Rabies: lymph, then liver. Poliovirus: skin. Dengue: along nerves",
      "Rabies: along peripheral nerves. Poliovirus: lymphatic tissue and blood, then the nervous system in a small fraction. Dengue: viremia through the bloodstream",
      "Rabies: along peripheral nerves. Poliovirus: confined to the gut epithelium. Dengue: viremia through the bloodstream"
    ],
    "answer": 2,
    "why": "Rabies replicates at the bite site and moves along nerves, not through blood. Poliovirus enters through the gut, spreads through lymphatic tissue and blood, and reaches the nervous system in about 1% of infections in non-immunized people. Arboviruses cause viremia."
  },
  {
    "id": "HUB-069",
    "m": "viruses3+viruses4+viruses5",
    "area": "Spread within the body and pregnancy",
    "level": "application",
    "stem": "Which pairing of virus and pregnancy-related concern is correct?",
    "options": [
      "Rubella: fetal anemia and hydrops. Parvovirus B19: congenital malformations. HEV: infant skin lesions",
      "Rubella: malformations in the first trimester. Parvovirus B19: maternal rash only. HEV: mild illness in pregnancy",
      "Rubella: fetal anemia and hydrops. Parvovirus B19: malformations. HEV: high maternal mortality in the third trimester",
      "Rubella: malformations, greatest in the first trimester. Parvovirus B19: fetal anemia and hydrops. HEV: high maternal mortality in the third trimester"
    ],
    "answer": 3,
    "why": "Rubella causes congenital rubella syndrome, with the worst damage in the first trimester. B19 infects fetal erythroid precursors, causing anemia that can progress to hydrops. HEV reaches up to about 20 to 25% mortality in third-trimester pregnancy."
  },
  {
    "id": "HUB-070",
    "m": "viruses3+viruses5",
    "area": "Spread within the body and pregnancy",
    "level": "integration",
    "stem": "Which pairing of perinatal infection and prevention or management matches the lectures?",
    "options": [
      "HBV: antiretroviral therapy. HIV: vaccine within 24 hours. Neonatal HSV: oral valacyclovir at home",
      "HBV: vaccine within 24 hours, plus HBIG if the mother is HBsAg-positive. HIV: antiretroviral therapy, plus scheduled cesarean at 38 weeks if HIV RNA is above 1,000 copies/mL or unknown. Neonatal HSV: IV acyclovir started immediately",
      "HBV: scheduled cesarean at 38 weeks. HIV: HBIG. Neonatal HSV: observation until lesions appear",
      "HBV: vaccine at 6 months. HIV: no therapy because the mother is treated. Neonatal HSV: IV acyclovir after culture results"
    ],
    "answer": 1,
    "why": "HBV is prevented with a birth-dose vaccine, plus HBIG when the mother is HBsAg-positive. HIV prevention uses antiretroviral therapy, and a scheduled cesarean at 38 weeks is recommended when HIV RNA is above 1,000 copies/mL or unknown. Neonatal herpes is an emergency, and IV acyclovir starts immediately."
  },
  {
    "id": "HUB-071",
    "m": "viruses1+viruses3",
    "area": "Vaccine platforms and vectors",
    "level": "application",
    "stem": "Which statement correctly describes adenovirus, both as a wild-type virus and as a gene-therapy vector?",
    "options": [
      "Wild-type adenovirus is nonenveloped dsDNA with a fiber at each vertex. As a vector it carries large genes, but its strong immune response limits repeat dosing",
      "Wild-type adenovirus is an enveloped RNA virus. As a vector it integrates into host DNA for long-lasting expression",
      "Wild-type adenovirus is nonenveloped ssDNA. As a vector it is not known to cause disease and has low immunogenicity",
      "Wild-type adenovirus is enveloped dsDNA with a tegument. As a vector it is used mainly outside the body"
    ],
    "answer": 0,
    "why": "Adenovirus is a nonenveloped, icosahedral dsDNA virus with a fiber at each of 12 vertices. As a vector it accepts large genes, but the strong immune response limits repeat dosing. The low-immunogenicity profile belongs to AAV, and integration belongs to lentivirus."
  },
  {
    "id": "HUB-072",
    "m": "viruses2+viruses3",
    "area": "Vaccine platforms and vectors",
    "level": "concept",
    "stem": "Which influenza vaccine fits the definition of a recombinant subunit vaccine?",
    "options": [
      "Inactivated virus grown in embryonated chicken eggs",
      "A live temperature-sensitive mutant virus",
      "Inactivated virus grown in MDCK cells",
      "Purified hemagglutinin made in insect cells"
    ],
    "answer": 3,
    "why": "A subunit vaccine delivers a purified viral protein. The recombinant influenza vaccine uses a recombinant insect virus carrying the HA gene, and the purified HA is the antigen."
  },
  {
    "id": "HUB-073",
    "m": "viruses2+viruses5",
    "area": "Vaccine platforms and vectors",
    "level": "application",
    "stem": "Which statement about Ervebo is supported?",
    "options": [
      "It is an mRNA vaccine that protects against Zaire and Sudan viruses",
      "It is a recombinant subunit vaccine with an adjuvant that protects against Sudan and Bundibugyo viruses",
      "It is a live, attenuated viral vector vaccine carrying an Ebola glycoprotein gene, approved for Zaire ebolavirus and not for Sudan or Bundibugyo virus",
      "It is a killed whole-virus vaccine approved for Zaire ebolavirus and Bundibugyo virus"
    ],
    "answer": 2,
    "why": "Ervebo is a live, attenuated recombinant vesicular stomatitis virus that carries an Ebola surface glycoprotein gene, which is the viral vector platform. It is approved for Zaire ebolavirus, and no vaccine is approved for Sudan or Bundibugyo virus."
  },
  {
    "id": "HUB-074",
    "m": "viruses1+viruses2+viruses3+viruses5",
    "area": "Host defenses and viral evasion",
    "level": "integration",
    "stem": "Which statement correctly links the interferon response to viral evasion and to therapy?",
    "options": [
      "Influenza NS-1 boosts interferon production, Ebola proteins strengthen interferon action, and recombinant interferon alpha treats influenza",
      "Influenza NS-1 can inhibit interferon production, two Ebola proteins block interferon induction and action, and recombinant interferon alpha is used for chronic hepatitis B",
      "Influenza NS-1 blocks complement, Ebola proteins degrade MHC class I, and recombinant interferon alpha is used for HIV",
      "Influenza NS-1 inhibits neuraminidase, Ebola proteins cut precursor proteins, and recombinant interferon alpha is used for rabies"
    ],
    "answer": 1,
    "why": "NS-1 is an influenza virulence factor that can inhibit interferon production, and two Ebola proteins blunt the early antiviral response by blocking interferon induction and action. Recombinant interferon alpha inhibits viral protein synthesis and is used for chronic hepatitis B."
  },
  {
    "id": "HUB-075",
    "m": "viruses1+viruses5",
    "area": "Host defenses and viral evasion",
    "level": "application",
    "stem": "Inmazeb and Ebanga neutralize Zaire ebolavirus. Which mechanism from the immunity lecture do they use?",
    "options": [
      "Binding the outer surface glycoprotein, which can block receptor binding and mark virions for clearance",
      "Entering infected cells to degrade the viral genome inside the capsid",
      "Cutting viral precursor proteins to leave immature particles",
      "Blocking viral DNA from joining the host chromosome"
    ],
    "answer": 0,
    "why": "Both products are monoclonal antibodies that target the Ebola glycoprotein. Antibodies neutralize infectivity by binding outer surface proteins, and they do not act on the genome or enzymes inside the cell."
  },
  {
    "id": "HUB-076",
    "m": "viruses1+viruses3+viruses4",
    "area": "Spread within the body and pregnancy",
    "level": "integration",
    "stem": "Which pairing of virus and pattern of spread is correct?",
    "options": [
      "RSV: viremia to the liver. Measles: confined to the airway. Zoster: spread through blood to many dermatomes",
      "RSV: replication in the skin. Measles: local replication at the entry site. Zoster: viremia",
      "RSV: systemic spread through viremia. Measles: local infection. Zoster: a systemic primary infection",
      "RSV: local infection of respiratory epithelium without viremia. Measles: respiratory tract, then blood and reticuloendothelial cells, then skin. Zoster: local reactivation in one dermatome"
    ],
    "answer": 3,
    "why": "RSV can be severe in infants but stays in the airway, with no viremia. Measles spreads systemically and replicates a second time in reticuloendothelial cells. Zoster is reactivation of latent VZV in one dermatome."
  },
  {
    "id": "HUB-077",
    "m": "viruses3+viruses4",
    "area": "Spread within the body and pregnancy",
    "level": "application",
    "stem": "Which pairing of clinical finding and virus is correct?",
    "options": [
      "Koplik spots: rubella virus. Slapped-cheek rash: HHV-6. Vesicles: parvovirus B19",
      "Koplik spots: mumps virus. Slapped-cheek rash: measles virus. Vesicles: HHV-6",
      "Koplik spots: measles virus. Slapped-cheek rash: parvovirus B19. Vesicles: VZV",
      "Koplik spots: parvovirus B19. Slapped-cheek rash: rubella virus. Vesicles: measles virus"
    ],
    "answer": 2,
    "why": "Koplik spots on the cheek lining point to measles, the slapped-cheek rash is classic for parvovirus B19, and vesicles are typical of HSV and VZV. HHV-6 causes roseola, with a rash after the fever resolves."
  },
  {
    "id": "HUB-078",
    "m": "viruses1+viruses2+viruses5",
    "area": "Host defenses and viral evasion",
    "level": "integration",
    "stem": "Why do missed doses of an antiretroviral regimen risk resistance, and why do drug combinations help?",
    "options": [
      "HIV copies its genome with a proofreading polymerase, so resistance arises when the patient stops therapy",
      "HIV copies its genome with an error-prone polymerase, so missed doses let resistant mutants multiply, and drugs from different classes make it harder for one mutant to escape",
      "HIV integrates into host DNA, so resistance is inherited from the host cell",
      "HIV mutates in the presence of a drug, so combination therapy prevents mutation"
    ],
    "answer": 1,
    "why": "HIV is one of the viruses with an error-prone polymerase, so mutants arise often. Incomplete drug exposure lets resistant mutants multiply. Drugs from different classes block different steps, so a single mutation is unlikely to defeat the whole regimen."
  }
];
