/* ============================================================
   BANK — Bacteria III · Cocci and Rods
   Pure content: checkpoints, flashcards, and the module-quiz /
   mastery-exam question pool. No DOM, no dependency on shared/.
   Sourced only from the lecture's VISIBLE slides (1-85); slides
   86-100 are hidden in the source deck and are not used anywhere
   in this file.

   STATUS: Module 1 only. Modules 2-6 and the cumulative Mastery
   Challenge pool will be appended here in later work sessions —
   see the note at the top of bacteria3.manifest.js.
   ============================================================ */
var TOPIC_ID    = 'bacteria3';
var TOPIC_TITLE = 'Bacteria III \u00b7 Cocci and Rods';

/* ---------- CHECKPOINTS (in-section "can you predict it?" questions) ---------- */
var CHECKPOINTS = {

  /* m1s1 — staph vs strep at a glance (slides 6-7) */
  c1a: {
    options: ['Staphylococcus', 'Streptococcus', 'Enterococcus', 'Neisseria'],
    answer: 0,
    why: 'Catalase is the first branch point among the gram-positive cocci: Staphylococcus is catalase-positive, while Streptococcus and Enterococcus are both catalase-negative. Neisseria is a gram-negative diplococcus, so it would already be excluded by the Gram stain itself.'
  },
  c1b: {
    options: ['Streptococcus', 'Staphylococcus', 'Corynebacterium', 'Bacillus'],
    answer: 0,
    why: 'Streptococcus characteristically grows in chains, while Staphylococcus grows in grape-like clusters. Corynebacterium and Bacillus are both gram-positive rods, not cocci, so the chain arrangement already rules them out.'
  },

  /* m1s2 — sorting the staphylococci (slides 8-11) */
  c2a: {
    options: ['A positive coagulase test', 'A positive catalase test', 'Growth in grape-like clusters', 'A gram-positive cell wall'],
    answer: 0,
    why: 'Coagulase is the defining split: S. aureus is coagulase-positive, while S. epidermidis and S. saprophyticus are both coagulase-negative. Catalase activity, clustered growth, and the gram-positive cell wall are shared by all three species, so none of those separates S. aureus from the others.'
  },
  c2b: {
    options: ['Staphylococcus epidermidis', 'Staphylococcus saprophyticus', 'Staphylococcus aureus', 'Streptococcus agalactiae'],
    answer: 0,
    why: 'S. epidermidis is novobiocin-susceptible and is the classic cause of catheter- and device-associated infections through biofilm formation. S. saprophyticus is novobiocin-resistant and instead causes urinary tract infections; S. aureus would be coagulase-positive, and S. agalactiae is a Streptococcus, not a Staphylococcus.'
  },
  c2c: {
    options: ['Staphylococcus saprophyticus', 'Staphylococcus epidermidis', 'Staphylococcus aureus', 'Enterococcus faecalis'],
    answer: 0,
    why: 'S. saprophyticus is novobiocin-resistant and community-acquired, and is a classic cause of UTI in young women. S. epidermidis is novobiocin-susceptible and associated with devices instead; S. aureus is coagulase-positive, and Enterococcus is a different genus altogether.'
  },

  /* m1s3 — sorting the streptococci and enterococcus (slides 20-21, 26, 29) */
  c3a: {
    options: ['Streptococcus pyogenes (group A)', 'Streptococcus agalactiae (group B)', 'Streptococcus pneumoniae', 'Enterococcus faecalis'],
    answer: 0,
    why: 'Beta-hemolysis with bacitracin sensitivity identifies group A Streptococcus (S. pyogenes). Group B Streptococcus (S. agalactiae) is also beta-hemolytic but is bacitracin-resistant and CAMP-positive instead. S. pneumoniae is alpha-hemolytic, and Enterococcus is typically nonhemolytic.'
  },
  c3b: {
    options: ['Streptococcus pneumoniae', 'Viridans streptococci', 'Streptococcus agalactiae', 'Enterococcus faecalis'],
    answer: 0,
    why: 'Optochin sensitivity distinguishes S. pneumoniae from the viridans streptococci, which share the same alpha-hemolytic pattern but resist optochin. S. agalactiae and Enterococcus produce different hemolysis patterns altogether (beta, and typically none).'
  },
  c3c: {
    options: ['Enterococcus', 'Streptococcus pyogenes', 'Staphylococcus epidermidis', 'Streptococcus pneumoniae'],
    answer: 0,
    why: 'Enterococcus is catalase-negative, typically nonhemolytic, part of normal colon flora, and a well-known cause of urinary tract infection and endocarditis. S. pyogenes and S. pneumoniae are both hemolytic and live in the throat rather than the colon, and S. epidermidis is a catalase-positive Staphylococcus.'
  },

  /* m2s1 — S. aureus: from factor to disease (slides 12-15) */
  c4a: {
    options: ['TSST-1', 'Enterotoxin', 'Exfoliatin', 'Alpha toxin'],
    answer: 0,
    why: 'TSST-1 (toxic shock syndrome toxin) is the superantigen responsible for tampon-associated toxic shock syndrome, triggering massive cytokine release. Enterotoxin instead causes staphylococcal food poisoning by acting on the gut; exfoliatin is a protease that separates skin layers, and alpha toxin pokes holes in cell membranes.'
  },
  c4b: {
    options: ['Exfoliatin', 'Alpha toxin', 'Enterotoxin', 'Panton-Valentine (P-V) leukocidin'],
    answer: 0,
    why: 'Exfoliatin is a protease that cleaves desmoglein, a protein that holds skin cells together, causing the separation seen in scalded skin syndrome. Alpha toxin instead pokes holes in cell membranes; enterotoxin acts on the gut, and P-V leukocidin damages and kills leukocytes.'
  },
  c4c: {
    options: ['Coagulase', 'Hyaluronidase', 'Fibrinolysin (staphylokinase)', 'Protein A'],
    answer: 0,
    why: 'Coagulase clots plasma, helping wall off the infected site. Hyaluronidase instead breaks down hyaluronic acid to help the organism spread; fibrinolysin (staphylokinase) does the opposite of coagulase by lysing thrombi, and Protein A blocks complement-mediated opsonization rather than clotting anything.'
  },

  /* m2s2 — Group A strep: a case that unfolds (slides 22-25) */
  c5a: {
    options: ['M protein', 'Streptolysin O', 'DNase', 'Hyaluronidase'],
    answer: 0,
    why: 'M protein is the most important virulence factor of S. pyogenes; it inactivates C3b, preventing complement-mediated phagocytosis. Streptolysin O causes hemolysis, DNase thins pus to aid spread, and hyaluronidase degrades connective tissue.'
  },
  c5b: {
    options: ['Erythrogenic toxin', 'Streptolysin S', 'DNase', 'IgG-degrading enzyme'],
    answer: 0,
    why: 'Erythrogenic toxin is a superantigen that produces the scarlet fever rash. Streptolysin S causes hemolysis but is not antigenic; DNase thins pus, and the IgG-degrading enzyme blocks opsonization rather than producing a rash.'
  },
  c5c: {
    options: ['An immune-mediated complication (glomerulonephritis)', 'Direct bacterial invasion of the kidney', 'A recurrence of the original throat infection', 'A toxin-mediated effect identical to the original infection'],
    answer: 0,
    why: 'Acute glomerulonephritis is an immune-mediated complication that appears weeks after the triggering infection, caused by the immune response rather than ongoing bacterial invasion. This is why antibiotics given for the original throat infection prevent rheumatic fever but not glomerulonephritis.'
  },

  /* m2s3 — the rest of the gram-positive cocci in disease (slides 27-31) */
  c6a: {
    options: ['Capsular polysaccharide', 'Pneumolysin', 'IgA protease', 'Lipoteichoic acid'],
    answer: 0,
    why: 'The capsular polysaccharide is the major antiphagocytic virulence factor of S. pneumoniae. Pneumolysin instead causes hemolysis, IgA protease facilitates mucosal colonization by breaking down IgA, and lipoteichoic acid activates complement.'
  },
  c6b: {
    options: ['Streptococcus pneumoniae', 'Viridans streptococci', 'Enterococcus faecalis', 'Staphylococcus epidermidis'],
    answer: 0,
    why: 'The spleen normally clears encapsulated organisms from the blood; without it, encapsulated pathogens like S. pneumoniae cause more severe, harder-to-clear infections. Viridans streptococci, enterococcus, and S. epidermidis are not the classic asplenia risk in this lecture.'
  },
  c6c: {
    options: ['Antibiotics during labor', 'Antibiotics immediately upon a positive screen', 'No treatment unless the newborn becomes symptomatic', 'A GBS vaccine in the third trimester'],
    answer: 0,
    why: 'Mothers who screen positive for group B strep receive antibiotics during labor to prevent transmission and neonatal sepsis, rather than being treated immediately at the time of the positive screen or withholding treatment until the newborn is symptomatic. No GBS vaccine is licensed.'
  },

  /* m3s1 — meningococcus or gonococcus? (slides 33, 35, 37, 79) */
  c7a: {
    options: ['Maltose fermentation', 'Catalase', 'Coagulase', 'Optochin sensitivity'],
    answer: 0,
    why: 'Both organisms are gram-negative diplococci, so a sugar fermentation test is used: N. meningitidis ferments maltose, while N. gonorrhoeae does not. Catalase, coagulase, and optochin are tests used to sort the gram-positive cocci, not Neisseria.'
  },
  c7b: {
    options: ['Neisseria gonorrhoeae', 'Neisseria meningitidis', 'Streptococcus pneumoniae', 'Enterococcus'],
    answer: 0,
    why: 'Seeing gram-negative diplococci inside neutrophils on a urethral or cervical Gram stain is a classic finding for N. gonorrhoeae. N. meningitidis is instead typically recovered from blood or CSF, not a genital specimen.'
  },
  c7c: {
    options: ['Factor H binding protein (FHBP)', 'Pili', 'Endotoxin', 'IgA protease'],
    answer: 0,
    why: 'Factor H binding protein lets N. meningitidis avoid phagocytosis by binding Factor H, and it is the immunogen used in the MenB vaccine. Pili are the defining attachment factor of N. gonorrhoeae instead; endotoxin and IgA protease are shared by both organisms.'
  },

  /* m3s2 — meningococcus: treatment, prophylaxis, and vaccines (slide 36) */
  c8a: {
    options: ['Ceftriaxone or penicillin G', 'Doxycycline or azithromycin', 'Vancomycin or linezolid', 'Rifampin or ciprofloxacin'],
    answer: 0,
    why: 'Ceftriaxone or penicillin G is first-line treatment for the patient. Doxycycline and azithromycin are not standard treatment, vancomycin and linezolid target resistant gram-positive organisms, and rifampin or ciprofloxacin are used to clear carriage in close contacts, not to treat invasive disease.'
  },
  c8b: {
    options: ['Chemoprophylaxis with rifampin, ceftriaxone, or ciprofloxacin', 'No action unless symptoms develop', 'Immediate vaccination only, with no antibiotics', 'Treatment with the same ceftriaxone course as the patient'],
    answer: 0,
    why: 'Close contacts of a meningococcal case receive chemoprophylaxis (rifampin, ceftriaxone, or ciprofloxacin) to eliminate nasopharyngeal carriage and prevent secondary cases, regardless of symptoms.'
  },
  c8c: {
    options: ['MenB', 'MenACWY', 'Pneumococcal conjugate vaccine', 'MMR'],
    answer: 0,
    why: 'MenB vaccines use Factor H binding protein as their immunogen. MenACWY instead targets the polysaccharide capsule of serogroups A, C, W, and Y.'
  },

  /* m3s3 — gonococcus: treatment and prevention (slides 38-39) */
  c9a: {
    options: ['Ceftriaxone 500 mg IM, single dose', 'Doxycycline 100 mg twice daily for 7 days', 'Penicillin G single dose', 'Azithromycin single dose'],
    answer: 0,
    why: 'Ceftriaxone 500 mg IM as a single dose is the standard treatment for uncomplicated gonococcal infection. Doxycycline is added only when chlamydia has not been excluded, and routine azithromycin dual therapy has been dropped.'
  },
  c9b: {
    options: ['Doxycycline 100 mg twice daily for 7 days', 'Azithromycin as routine dual therapy', 'A second dose of ceftriaxone', 'Erythromycin ointment'],
    answer: 0,
    why: 'When chlamydia has not been excluded, doxycycline 100 mg twice daily for 7 days is added to ceftriaxone. Routine azithromycin dual therapy for this purpose has been dropped from current guidance.'
  },
  c9c: {
    options: ['Erythromycin ointment applied at birth', 'A maternal vaccine given during pregnancy', 'Oral doxycycline given to the newborn', 'There is no effective prevention'],
    answer: 0,
    why: "Erythromycin ointment applied to the newborn's eyes at birth prevents gonococcal conjunctivitis. There is no vaccine against N. gonorrhoeae."
  },

  /* m4s1 — anthrax: which door did it come through? (slides 41-43) */
  c10a: {
    options: ['Cutaneous', 'Pulmonary (inhalation)', 'Gastrointestinal', 'Bloodstream via a contaminated needle'],
    answer: 0,
    why: 'Cutaneous anthrax, where spores enter through a break in the skin, accounts for nearly all cases and produces the classic black eschar. Inhalation anthrax is rarer but far more dangerous.'
  },
  c10b: {
    options: ['Edema factor', 'Protective antigen', 'Lethal factor', 'Capsule'],
    answer: 0,
    why: 'Edema factor is an adenylate cyclase that raises cAMP, contributing to the tissue edema seen in anthrax. Protective antigen binds host cells to deliver the other two components, and lethal factor is a protease that causes cell death.'
  },

  /* m4s2 — the toxin mechanism challenge (slides 44-47) */
  c11a: {
    options: ['Botulinum toxin', 'Tetanus toxin', 'Lecithinase (C. perfringens alpha toxin)', 'Diphtheria toxin'],
    answer: 0,
    why: 'Botulinum toxin blocks acetylcholine release, so muscles cannot contract, producing a limp, descending paralysis. Tetanus toxin instead blocks inhibitory neurotransmitters, and lecithinase destroys cell membranes directly.'
  },
  c11b: {
    options: ['Tetanus toxin', 'Botulinum toxin', 'Lecithinase', 'Diphtheria toxin'],
    answer: 0,
    why: 'Tetanus toxin blocks glycine and GABA release in the spinal cord, so motor neurons fire without their normal brakes, producing muscle spasms and the arched-back posture called opisthotonos.'
  },
  c11c: {
    options: ['Penicillin may antagonize GABA, worsening spasms', 'Penicillin does not reach the spinal cord', 'Metronidazole also neutralizes circulating toxin', 'Penicillin inactivates tetanus immune globulin'],
    answer: 0,
    why: 'Penicillin may antagonize GABA, working against the goal of restoring inhibitory neurotransmission, so metronidazole is preferred. The concern is not drug delivery to the spinal cord, neither antibiotic neutralizes toxin (that is the job of tetanus immune globulin), and penicillin does not inactivate the immune globulin.'
  },

  /* m4s3 — C. difficile: the antibiotic-associated cycle (slides 49-52) */
  c12a: {
    options: ['They suppress the normal colon flora that keep C. difficile in check', 'They directly stimulate C. difficile toxin production', 'They kill spores, triggering compensatory overgrowth', 'They damage the colon lining so spores can invade'],
    answer: 0,
    why: 'Antibiotics that suppress the normal, protective colon flora create an opening for C. difficile spores to germinate and cause disease. The antibiotics do not directly stimulate toxin production or kill the spores, which resist many agents, including alcohol, and the colon damage comes from C. difficile\u2019s own toxins, not from the antibiotic.'
  },
  c12b: {
    options: ['Fidaxomicin', 'Metronidazole', 'Ciprofloxacin', 'Amoxicillin'],
    answer: 0,
    why: 'Fidaxomicin is preferred for both an initial episode and for recurrences, with fewer recurrences than vancomycin. Oral vancomycin is an acceptable alternative; metronidazole is reserved for when the other agents are hard to obtain.'
  },
  c12c: {
    options: ['C. difficile spores are not killed by alcohol', 'Alcohol hand rub causes antibiotic resistance', 'Soap and water is faster to use in a hospital setting', 'Alcohol hand rub can trigger a C. difficile flare in colonized patients'],
    answer: 0,
    why: 'C. difficile spores are resistant to alcohol-based hand rubs; only mechanical removal with soap and water reliably removes them from the hands.'
  },

  /* m4s4 — Listeria and diphtheria: two more invaders (slides 53-54) */
  c13a: {
    options: ['Listeriolysin', 'Internalin', 'Diphtheria toxin', 'Endotoxin'],
    answer: 0,
    why: 'Listeriolysin facilitates escape from the phagosome once the organism has entered the cell. Internalin instead facilitates the initial attachment to human cell surfaces.'
  },
  c13b: {
    options: ['Pregnant patients, newborns, and immunosuppressed adults', 'Adolescents, college students, and military recruits', 'Splenectomy patients, sickle cell patients, and infants', 'Cystic fibrosis, burn, and ventilator patients'],
    answer: 0,
    why: 'Listeria causes meningitis and sepsis in pregnant patients, newborns, and immunosuppressed adults, consistent with its ability to survive inside cells and evade normal immune defenses. Adolescents and dormitory or barracks settings point to meningococcus, missing or poorly working spleens point to encapsulated organisms, and cystic fibrosis, burns, and ventilators point to Pseudomonas.'
  },
  c13c: {
    options: ['It ADP-ribosylates EF-2, shutting down protein synthesis', 'It forms pores in the host cell membrane', 'It blocks acetylcholine release at the neuromuscular junction', 'It clots plasma to wall off the infection'],
    answer: 0,
    why: 'Diphtheria toxin ADP-ribosylates elongation factor 2 (EF-2), halting protein synthesis in the host cell \u2014 the same target used by Pseudomonas exotoxin A.'
  },

  /* m5s1 — E. coli: same organism, opposite diarrheas (slides 56-60) */
  c14a: {
    options: ['Enterotoxigenic E. coli (ETEC)', 'Enterohemorrhagic E. coli (EHEC)', 'Uropathogenic E. coli', 'Neonatal meningitis-associated E. coli'],
    answer: 0,
    why: 'ETEC produces LT (raises cAMP) and ST (raises cGMP) toxins that act on the small intestine, causing watery diarrhea without invading tissue. EHEC instead produces Shiga toxin and causes bloody diarrhea.'
  },
  c14b: {
    options: ['They may increase the risk of hemolytic uremic syndrome', 'They reduce absorption of oral rehydration solution', 'They mask fever and delay diagnosis', 'They raise the risk of C. difficile infection'],
    answer: 0,
    why: 'Antimotility drugs can increase the risk of hemolytic uremic syndrome (HUS) in EHEC infection, possibly by prolonging exposure to Shiga toxin, so they are avoided. They do not block oral rehydration, hide fever, or cause C. difficile infection.'
  },

  /* m5s2 — Salmonella, Shigella, and Klebsiella (slide 61) */
  c15a: {
    options: ['Salmonella', 'Shigella', 'Klebsiella', 'Vibrio cholerae'],
    answer: 0,
    why: 'Salmonella is a non-lactose fermenter, is H2S positive, and can survive inside macrophages, allowing non-typhoidal disease or typhoid fever depending on the species.'
  },
  c15b: {
    options: ['Shigella', 'Salmonella', 'Klebsiella', 'Campylobacter jejuni'],
    answer: 0,
    why: "Shigella's very small infectious dose (10-200 organisms) helps explain its efficient person-to-person spread and the classic dysentery presentation."
  },
  c15c: {
    options: ['Klebsiella', 'Salmonella', 'Shigella', 'Vibrio cholerae'],
    answer: 0,
    why: "Klebsiella's large polysaccharide capsule produces mucoid colonies and is classically associated with currant-jelly sputum in pneumonia, particularly in patients with alcohol use disorder."
  },

  /* m5s3 — Vibrio, Campylobacter, and H. pylori (slide 62) */
  c16a: {
    options: ['ADP-ribosylation locks a G protein on, raising cAMP', 'Direct invasion and destruction of colon epithelial cells', 'A superantigen triggering systemic shock', 'Blockade of acetylcholine release'],
    answer: 0,
    why: "Cholera toxin ADP-ribosylates and locks the Gs protein 'on,' raising cAMP and driving massive fluid secretion into the small intestine."
  },
  c16b: {
    options: ['Campylobacter jejuni', 'Vibrio cholerae', 'Helicobacter pylori', 'Shigella'],
    answer: 0,
    why: 'Campylobacter jejuni infection is a well-known trigger for Guillain-Barr\u00e9 syndrome, an immune-mediated complication that appears weeks later, as well as reactive arthritis.'
  },
  c16c: {
    options: ['Urease converts urea to ammonia, neutralizing nearby acid', 'It forms acid-resistant spores', 'It pumps protons out faster than acid enters', 'Its capsule repels hydrogen ions'],
    answer: 0,
    why: 'H. pylori\u2019s urease enzyme converts urea to ammonia, neutralizing the acid in its immediate surroundings and allowing it to colonize the gastric mucosa. It does not form spores, and neither proton pumping nor a capsule is how it survives acid.'
  },

  /* m5s4 — where the enteric bacteria strike (slide 63) */
  c17a: {
    options: ['The small intestine', 'The colon', 'The stomach', 'The gallbladder'],
    answer: 0,
    why: "Watery diarrhea usually reflects a toxin (such as ETEC's LT/ST toxins or cholera toxin) acting on the small intestine, driving fluid secretion without invading or destroying tissue."
  },
  c17b: {
    options: ['The colon', 'The small intestine', 'The stomach', 'The esophagus'],
    answer: 0,
    why: 'Bloody diarrhea reflects invasion or Shiga toxin damage in the colon, as seen with Shigella, Salmonella, Campylobacter, and EHEC.'
  },
  c17c: {
    options: ['Helicobacter pylori', 'Vibrio cholerae', 'Shigella', 'Klebsiella'],
    answer: 0,
    why: 'H. pylori is the outlier: it colonizes the stomach itself, surviving the acid with urease, and causes gastritis, peptic ulcer disease, and is linked to gastric cancer and MALT lymphoma.'
  },

  /* m6s1 — Pseudomonas: the opportunist (slides 64-67) */
  c18a: {
    options: ['Exotoxin A', 'Endotoxin', 'Pyocyanin', 'Elastase'],
    answer: 0,
    why: 'Exotoxin A ADP-ribosylates EF-2, blocking protein synthesis, exactly like diphtheria toxin \u2014 though the two organisms are otherwise unrelated.'
  },
  c18b: {
    options: ['Patients with cystic fibrosis', 'Healthy young adults', 'Patients with a recent splenectomy', 'Pregnant patients'],
    answer: 0,
    why: 'Pseudomonas is the classic chronic lung pathogen in cystic fibrosis. It still affects many adults with CF, though far fewer since CFTR modulator therapy. Healthy young adults, splenectomy patients, and pregnant patients are not the classic chronic Pseudomonas group.'
  },

  /* m6s2 — H. influenzae and B. pertussis (slides 68-70) */
  c19a: {
    options: ['Streptococcus pneumoniae and Neisseria meningitidis', 'Staphylococcus aureus and Streptococcus pyogenes', 'Listeria monocytogenes and Enterococcus', 'Pseudomonas aeruginosa and Klebsiella'],
    answer: 0,
    why: 'H. influenzae, S. pneumoniae, and N. meningitidis are the three classic encapsulated pyogens, all covered by conjugate vaccines that have dramatically reduced childhood meningitis.'
  },
  c19b: {
    options: ['Catarrhal', 'Paroxysmal', 'Convalescent', 'Incubation'],
    answer: 0,
    why: 'The catarrhal stage, which looks like an ordinary cold, is when the patient is most contagious, before the classic paroxysmal cough with its whoop even appears. Spread falls off through the paroxysmal and convalescent stages, and during incubation the patient has no symptoms yet.'
  },
  c19c: {
    options: ['Maternal antibody levels fall over time, so each baby needs a fresh boost', 'The antibodies from the earlier dose were used up by the previous baby', 'Pertussis strains change each year, as influenza strains do', 'A dose given before pregnancy does not cross the placenta'],
    answer: 0,
    why: 'Antibody levels fall in the months after a Tdap dose, so a dose from an earlier pregnancy no longer leaves enough antibody to pass to the new baby. A fresh dose in each pregnancy boosts the mother\u2019s antibodies so they cross the placenta and protect the newborn, who is too young to be vaccinated directly. Antibodies are not used up by a previous baby, and pertussis vaccines are not updated yearly like influenza vaccines.'
  },

  /* m6s3 — tularemia and plague: zoonotic hazards (slides 71-72) */
  c20a: {
    options: ['Francisella tularensis', 'Yersinia pestis', 'Bordetella pertussis', 'Pseudomonas aeruginosa'],
    answer: 0,
    why: 'F. tularensis (tularemia) has rabbits, deer, and ticks as its reservoir. Y. pestis (plague) is instead associated with rodents.'
  },
  c20b: {
    options: ['Notify the laboratory in advance so staff can take added precautions', 'Process it on the open bench like a routine culture', 'Wait for serology results before sending the culture', 'Refrigerate it until the patient\u2019s fever resolves'],
    answer: 0,
    why: 'Both organisms are laboratory hazards, so the laboratory is notified in advance when either is suspected (as with anthrax), letting staff handle the specimen with added precautions. Open-bench processing puts staff at risk, and delaying or holding the specimen only delays the diagnosis.'
  },
  c20c: {
    options: ['Aminoglycosides (gentamicin) or fluoroquinolones', 'Macrolides', 'Penicillins', 'Vancomycin'],
    answer: 0,
    why: 'Gentamicin or a fluoroquinolone is first-line for plague; doxycycline is an alternative, and streptomycin is not widely available in the U.S.'
  },

  /* m6s4 — anaerobes and the big picture (slides 73-78) */
  c21a: {
    options: ['A polysaccharide capsule', 'A pore-forming toxin', 'An ADP-ribosylating exotoxin', 'A siderophore'],
    answer: 0,
    why: 'All three organisms share a polysaccharide capsule that resists phagocytosis, which is why the spleen (the organ that clears encapsulated bacteria from the blood) is so important for controlling these infections.'
  },
  c21b: {
    options: ['It lacks a capsule and survives by escaping the phagosome', 'It is a gram-negative rod rather than a coccus', 'It spreads person to person by respiratory droplets', 'It is reliably covered by ceftriaxone'],
    answer: 0,
    why: 'Unlike the encapsulated pyogens, Listeria is not encapsulated; it survives inside phagocytes by escaping the phagosome with listeriolysin. Listeria is a gram-positive rod, it is acquired from food rather than by respiratory droplets, and cephalosporins such as ceftriaxone do not cover it, which is why ampicillin is added.'
  },
  c21c: {
    options: ['Newborns, adults over 50, and immunocompromised patients', 'School-age children and healthy young adults', 'Patients with a penicillin allergy', 'College students living in dormitories'],
    answer: 0,
    why: 'Newborns, adults over 50, and immunocompromised patients are at increased risk for Listeria meningitis, and since cephalosporins do not cover Listeria, ampicillin is added for them. Healthy children, young adults, and college students are covered by the standard regimen, and a penicillin allergy would argue against ampicillin rather than for it.'
  }
};

/* ---------- FLASHCARDS ---------- */
var CARDS = [
  { id:'BAC3-CARD-01', t:'Catalase test', d:'Splits the gram-positive cocci by genus: Staphylococcus is catalase-positive; Streptococcus and Enterococcus are catalase-negative.', area:'Staph vs strep basics' },
  { id:'BAC3-CARD-02', t:'Coagulase test', d:'Splits the staphylococci by species: S. aureus is coagulase-positive; S. epidermidis and S. saprophyticus are both coagulase-negative.', area:'Staphylococcal identification' },
  { id:'BAC3-CARD-03', t:'Novobiocin test', d:'Splits the coagulase-negative staphylococci: S. epidermidis is susceptible (device infections); S. saprophyticus is resistant (UTI in young women).', area:'Staphylococcal identification' },
  { id:'BAC3-CARD-04', t:'Beta-hemolysis', d:'Complete clearing of red blood cells around a colony on blood agar.', area:'Streptococcal & enterococcal identification' },
  { id:'BAC3-CARD-05', t:'Alpha-hemolysis', d:'Partial clearing that turns blood agar green, from oxidation of hemoglobin to methemoglobin.', area:'Streptococcal & enterococcal identification' },
  { id:'BAC3-CARD-06', t:'Gamma-hemolysis', d:'No clearing of red blood cells at all; also called nonhemolytic. Typical of Enterococcus.', area:'Streptococcal & enterococcal identification' },
  { id:'BAC3-CARD-07', t:'Bacitracin test', d:'Splits the beta-hemolytic streptococci: group A (S. pyogenes) is sensitive; group B (S. agalactiae) is resistant.', area:'Streptococcal & enterococcal identification' },
  { id:'BAC3-CARD-08', t:'CAMP test', d:'Positive in group B Streptococcus (S. agalactiae), used alongside bacitracin resistance to confirm the identification.', area:'Streptococcal & enterococcal identification' },
  { id:'BAC3-CARD-09', t:'Optochin test', d:'Splits the alpha-hemolytic streptococci: S. pneumoniae is sensitive; viridans streptococci are resistant.', area:'Streptococcal & enterococcal identification' },
  { id:'BAC3-CARD-10', t:'Enterococcus, at a glance', d:'Catalase-negative, typically nonhemolytic, normal colon flora; a frequent cause of UTI and endocarditis.', flip:true, area:'Streptococcal & enterococcal identification' },
  { id:'BAC3-CARD-11', t:'Protein A', d:'Binds the Fc region of IgG, blocking complement activation and reducing opsonization and phagocytosis of S. aureus.', area:'S. aureus virulence and disease' },
  { id:'BAC3-CARD-12', t:'TSST-1', d:'A superantigen produced by S. aureus that triggers massive cytokine release, causing toxic shock syndrome.', area:'S. aureus virulence and disease' },
  { id:'BAC3-CARD-13', t:'Staphylococcal enterotoxin', d:'Pre-formed, heat-stable toxin in contaminated food; causes vomiting within hours, and antibiotics do not help.', area:'S. aureus virulence and disease' },
  { id:'BAC3-CARD-14', t:'Exfoliatin', d:'A protease that cleaves desmoglein, separating skin layers in scalded skin syndrome.', area:'S. aureus virulence and disease' },
  { id:'BAC3-CARD-15', t:'M protein', d:'The single most important S. pyogenes virulence factor; inactivates C3b to block phagocytosis.', area:'Group A strep virulence and disease' },
  { id:'BAC3-CARD-16', t:'Erythrogenic toxin', d:'A superantigen from S. pyogenes that produces the scarlet fever rash.', area:'Group A strep virulence and disease' },
  { id:'BAC3-CARD-17', t:'Rheumatic fever vs. glomerulonephritis', d:'Both are immune-mediated complications of group A strep appearing weeks later; antibiotics for the original infection prevent rheumatic fever but not reliably glomerulonephritis.', flip:true, area:'Group A strep virulence and disease' },
  { id:'BAC3-CARD-18', t:'Pneumococcal capsule', d:'The major antiphagocytic virulence factor of S. pneumoniae; over 100 serotypes exist.', area:'Pneumococcus, viridans, enterococcus & GBS disease' },
  { id:'BAC3-CARD-19', t:'Asplenia risk', d:'Without a spleen, encapsulated organisms like S. pneumoniae cause more severe infection, since the spleen normally clears them from the blood.', area:'Pneumococcus, viridans, enterococcus & GBS disease' },
  { id:'BAC3-CARD-20', t:'Group B strep in pregnancy', d:'Mothers who screen positive receive antibiotics during labor to prevent neonatal sepsis and meningitis.', area:'Pneumococcus, viridans, enterococcus & GBS disease' },
  { id:'BAC3-CARD-21', t:'Maltose fermentation', d:'Separates the two Neisseria species: N. meningitidis ferments maltose; N. gonorrhoeae does not.', area:'Neisseria: virulence and diagnosis' },
  { id:'BAC3-CARD-22', t:'Piliated vs. nonpiliated gonococci', d:'Pili let N. gonorrhoeae attach to mucosal cells and resist phagocytosis; only piliated organisms are pathogenic.', area:'Neisseria: virulence and diagnosis' },
  { id:'BAC3-CARD-23', t:'Factor H binding protein (FHBP)', d:'Lets N. meningitidis avoid phagocytosis by binding Factor H; the immunogen in MenB vaccines.', area:'Neisseria: virulence and diagnosis' },
  { id:'BAC3-CARD-24', t:'MenACWY vs. MenB', d:'MenACWY (age 11-12, booster at 16) covers serogroups A, C, W, Y; MenB (shared decision, about 16-18) covers serogroup B via FHBP.', flip:true, area:'Meningococcus: treatment and prevention' },
  { id:'BAC3-CARD-25', t:'Meningococcal chemoprophylaxis', d:'Close contacts receive rifampin, ceftriaxone, or ciprofloxacin; where cipro-resistant strains exist, use rifampin, ceftriaxone, or azithromycin instead.', area:'Meningococcus: treatment and prevention' },
  { id:'BAC3-CARD-26', t:'Gonorrhea first-line treatment', d:'Ceftriaxone 500 mg IM, single dose; add doxycycline only if chlamydia has not been excluded.', area:'Gonococcus: treatment and prevention' },
  { id:'BAC3-CARD-27', t:'Gonococcal Gram stain', d:'Gram-negative diplococci seen inside neutrophils on a urethral or cervical smear is classic for N. gonorrhoeae.', area:'Neisseria: virulence and diagnosis' },
  { id:'BAC3-CARD-28', t:'Gonorrhea prevention', d:'No vaccine exists; condoms and treating symptomatic patients and partners are the mainstay. Erythromycin ointment prevents newborn conjunctivitis.', area:'Gonococcus: treatment and prevention' },
  { id:'BAC3-CARD-29', t:'Neisseria portals of entry', d:'N. meningitidis enters via the respiratory tract; N. gonorrhoeae enters via the genital tract (or vertically, at birth).', flip:true, area:'Neisseria: virulence and diagnosis' },
  { id:'BAC3-CARD-30', t:'Shared Neisseria virulence factor', d:'Both species produce IgA protease and endotoxin; the capsule (meningococcus) and pili (gonococcus) are what set them apart.', area:'Neisseria: virulence and diagnosis' },
  { id:'BAC3-CARD-31', t:"Anthrax toxin's three parts", d:'Protective antigen binds host cells; edema factor (adenylate cyclase) raises cAMP; lethal factor (a protease) causes cell death.', area:'Anthrax: portals and toxin' },
  { id:'BAC3-CARD-32', t:'Cutaneous vs. pulmonary anthrax', d:'Cutaneous: spores enter a wound, nearly all cases, black eschar. Pulmonary: spores inhaled, rare but often fatal.', flip:true, area:'Anthrax: portals and toxin' },
  { id:'BAC3-CARD-33', t:'Botulinum toxin', d:'Blocks acetylcholine release at the neuromuscular junction; produces descending flaccid paralysis.', area:'Toxin mechanism: flaccid, spastic, and destructive' },
  { id:'BAC3-CARD-34', t:'Tetanus toxin', d:'Blocks release of glycine and GABA in the spinal cord; produces spastic paralysis, lockjaw, and opisthotonos.', area:'Toxin mechanism: flaccid, spastic, and destructive' },
  { id:'BAC3-CARD-35', t:'C. perfringens alpha toxin (lecithinase)', d:'Destroys cell membranes directly, causing gas gangrene; treated with penicillin G plus debridement.', area:'Toxin mechanism: flaccid, spastic, and destructive' },
  { id:'BAC3-CARD-36', t:'C. difficile treatment ladder', d:'Fidaxomicin preferred (initial and recurrent episodes); oral vancomycin acceptable; metronidazole reserved for when the others are hard to obtain.', area:'C. difficile: the antibiotic-associated cycle' },
  { id:'BAC3-CARD-37', t:'C. difficile hand hygiene', d:'Alcohol hand rub does not kill C. difficile spores; wash hands with soap and water instead.', area:'C. difficile: the antibiotic-associated cycle' },
  { id:'BAC3-CARD-38', t:'Listeria virulence factors', d:'Internalin enables attachment; listeriolysin enables escape from the phagosome after the cell engulfs the organism.', area:'Listeria and diphtheria' },
  { id:'BAC3-CARD-39', t:'Diphtheria toxin', d:'ADP-ribosylates EF-2, shutting down host protein synthesis \u2014 the same target as Pseudomonas exotoxin A.', area:'Listeria and diphtheria' },
  { id:'BAC3-CARD-40', t:'Diphtheria diagnosis', d:'Tellurite agar culture plus the Elek test (or PCR) to confirm the isolate actually produces toxin.', area:'Listeria and diphtheria' },
  { id:'BAC3-CARD-41', t:'ETEC toxins (LT/ST)', d:'LT raises cAMP; ST raises cGMP. Both act on the small intestine, causing watery, non-bloody diarrhea.', area:'E. coli: ETEC vs EHEC' },
  { id:'BAC3-CARD-42', t:'EHEC and Shiga toxin', d:'E. coli O157:H7 produces Shiga toxin, which inhibits protein synthesis and causes bloody diarrhea; can progress to HUS.', area:'E. coli: ETEC vs EHEC' },
  { id:'BAC3-CARD-43', t:'EHEC treatment warning', d:'Avoid antimotility drugs and use antibiotics cautiously in EHEC \u2014 both may precipitate hemolytic uremic syndrome (HUS).', flip:true, area:'E. coli: ETEC vs EHEC' },
  { id:'BAC3-CARD-44', t:'Salmonella, at a glance', d:'Non-lactose fermenter, H2S-positive, survives inside macrophages; non-typhoidal disease from poultry/eggs, or typhoid fever.', area:'Salmonella, Shigella & Klebsiella' },
  { id:'BAC3-CARD-45', t:'Shigella, at a glance', d:'Nonmotile, tiny infectious dose (10-200 organisms); S. dysenteriae makes Shiga toxin, causing bloody dysentery.', area:'Salmonella, Shigella & Klebsiella' },
  { id:'BAC3-CARD-46', t:'Klebsiella, at a glance', d:'Large capsule, mucoid colonies; pneumonia with currant-jelly sputum, especially with alcohol use disorder.', area:'Salmonella, Shigella & Klebsiella' },
  { id:'BAC3-CARD-47', t:'Cholera toxin mechanism', d:'ADP-ribosylates and locks Gs \u2018on,\u2019 raising cAMP and driving profuse, rice-water watery diarrhea.', area:'Vibrio, Campylobacter & H. pylori' },
  { id:'BAC3-CARD-48', t:'Campylobacter complications', d:'Guillain-Barr\u00e9 syndrome and reactive arthritis can follow weeks after the initial gastroenteritis.', area:'Vibrio, Campylobacter & H. pylori' },
  { id:'BAC3-CARD-49', t:'H. pylori urease', d:'Converts urea to ammonia, neutralizing stomach acid locally so the organism can colonize the gastric mucosa.', area:'Vibrio, Campylobacter & H. pylori' },
  { id:'BAC3-CARD-50', t:'Watery vs. bloody diarrhea', d:'Watery = toxin acting on the small intestine (ETEC, cholera). Bloody = invasion or Shiga toxin in the colon (Shigella, Salmonella, Campylobacter, EHEC). H. pylori is the stomach outlier.', flip:true, area:'Where the enteric bacteria strike' },
  { id:'BAC3-CARD-51', t:'Pseudomonas exotoxin A', d:'ADP-ribosylates EF-2, blocking protein synthesis \u2014 the same mechanism as diphtheria toxin.', area:'Pseudomonas: the opportunist' },
  { id:'BAC3-CARD-52', t:'Pseudomonas identification', d:'Oxidase-positive; blue-green pigment (pyocyanin) with a fruity smell; metallic sheen on TSI agar.', area:'Pseudomonas: the opportunist' },
  { id:'BAC3-CARD-53', t:'Three encapsulated pyogens', d:'S. pneumoniae, N. meningitidis, and H. influenzae \u2014 all share an antiphagocytic capsule and are covered by conjugate vaccines.', area:'Anaerobes & the encapsulated-organism synthesis' },
  { id:'BAC3-CARD-54', t:'Pertussis toxin', d:'ADP-ribosylates Gi, raising cAMP and causing lymphocytosis; distinct from tracheal cytotoxin, which kills ciliated cells.', area:'H. influenzae & B. pertussis: vaccine-preventable' },
  { id:'BAC3-CARD-55', t:'Pertussis stages', d:'Catarrhal (most contagious, cold-like) \u2192 paroxysmal (whooping cough fits) \u2192 convalescent.', flip:true, area:'H. influenzae & B. pertussis: vaccine-preventable' },
  { id:'BAC3-CARD-56', t:'Tularemia vs. plague reservoirs', d:'F. tularensis: rabbits, deer, ticks. Y. pestis: rodents. Both are laboratory hazards \u2014 notify the lab.', area:'Tularemia and plague: zoonotic hazards' },
  { id:'BAC3-CARD-57', t:'Anaerobe rule of thumb', d:'Mouth anaerobes (Prevotella, Fusobacterium) point to aspiration/lung/brain abscess; colon anaerobes (B. fragilis) point to intra-abdominal abscess.', area:'Anaerobes & the encapsulated-organism synthesis' },
  { id:'BAC3-CARD-58', t:'Why aminoglycosides fail against anaerobes', d:'Their uptake into bacterial cells is oxygen-dependent \u2014 useless where there is no oxygen.', area:'Anaerobes & the encapsulated-organism synthesis' },
  { id:'BAC3-CARD-59', t:'Listeria, the meningitis exception', d:'Not encapsulated; escapes the phagosome via listeriolysin instead. Needs ampicillin, which cephalosporins can\u2019t substitute for.', area:'Anaerobes & the encapsulated-organism synthesis' },
  { id:'BAC3-CARD-60', t:'Ampicillin for meningitis, by age', d:'Added specifically to cover Listeria in newborns and in adults over 50 or immunocompromised.', flip:true, area:'Anaerobes & the encapsulated-organism synthesis' }
];

/* ---------- POOL (module quiz + future mastery-exam questions) ---------- */
var POOL = [
  {
    id:'BAC3-001', m:'m1', area:'Staph vs strep basics', level:'concept',
    stem:'Which laboratory test is used to separate Staphylococcus from Streptococcus among the gram-positive cocci?',
    options:['Catalase', 'Coagulase', 'Optochin', 'Bacitracin'],
    answer:0,
    why:'Catalase is the first branch point: Staphylococcus is catalase-positive, while Streptococcus and Enterococcus are catalase-negative. Coagulase, optochin, and bacitracin are used later, to separate species within each catalase group.'
  },
  {
    id:'BAC3-002', m:'m1', area:'Staph vs strep basics', level:'concept',
    stem:'On Gram stain, which growth arrangement is characteristic of Staphylococcus?',
    options:['Grape-like clusters', 'Long chains', 'Comma-shaped curves', 'Club-shaped palisades'],
    answer:0,
    why:'Staphylococcus characteristically grows in irregular clusters resembling a bunch of grapes. Chains describe Streptococcus, curved shapes describe organisms such as Vibrio or Campylobacter, and club-shaped palisades describe Corynebacterium.'
  },
  {
    id:'BAC3-003', m:'m1', area:'Staph vs strep basics', level:'application',
    stem:'A blood culture grows gram-positive cocci in clusters that are catalase-positive and facultatively anaerobic. Which genus best fits these findings?',
    options:['Staphylococcus', 'Streptococcus', 'Enterococcus', 'Neisseria'],
    answer:0,
    why:'Clustered arrangement plus a positive catalase result together point to Staphylococcus. Streptococcus and Enterococcus are catalase-negative, and Neisseria is a gram-negative diplococcus rather than a clustered gram-positive coccus.'
  },
  {
    id:'BAC3-004', m:'m1', area:'Staphylococcal identification', level:'application',
    stem:'A wound isolate of gram-positive cocci in clusters is catalase-positive and clots rabbit plasma. Which organism is it?',
    options:['S. aureus', 'S. epidermidis', 'S. saprophyticus', 'S. pyogenes'],
    answer:0,
    why:'Clotting plasma is a positive coagulase test, which identifies S. aureus. S. epidermidis and S. saprophyticus are coagulase-negative, and S. pyogenes is a catalase-negative streptococcus that grows in chains.'
  },
  {
    id:'BAC3-005', m:'m1', area:'Staphylococcal identification', level:'concept',
    stem:'Which property lets Staphylococcus epidermidis cause infections of catheters and prosthetic devices?',
    options:['Biofilm formation', 'Coagulase production', 'TSST-1 production', 'Novobiocin resistance'],
    answer:0,
    why:'S. epidermidis forms a biofilm on plastic and metal surfaces, which is why it is the classic cause of catheter- and device-associated infections. It is coagulase-negative, does not make TSST-1 (an S. aureus toxin), and is novobiocin-susceptible; novobiocin resistance belongs to S. saprophyticus.'
  },
  {
    id:'BAC3-006', m:'m1', area:'Staphylococcal identification', level:'concept',
    stem:'Which finding correctly separates Staphylococcus saprophyticus from Staphylococcus epidermidis?',
    options:['Novobiocin resistance versus susceptibility', 'Coagulase-positive versus coagulase-negative', 'Catalase-positive versus catalase-negative', 'Beta-hemolytic versus alpha-hemolytic'],
    answer:0,
    why:'Both organisms are coagulase-negative and catalase-positive staphylococci, so those tests cannot separate them. Novobiocin does: S. saprophyticus is resistant, while S. epidermidis is susceptible. Hemolysis pattern is not used to distinguish these two species.'
  },
  {
    id:'BAC3-007', m:'m1', area:'Streptococcal & enterococcal identification', level:'concept',
    stem:'Which type of hemolysis produces complete clearing of red blood cells around a colony on blood agar?',
    options:['Beta-hemolysis', 'Alpha-hemolysis', 'Gamma-hemolysis', 'Delta-hemolysis'],
    answer:0,
    why:'Beta-hemolysis is complete clearing of the red blood cells. Alpha-hemolysis is partial clearing that turns the agar green, and gamma-hemolysis (nonhemolytic) produces no clearing at all. "Delta-hemolysis" is not one of the patterns used to classify these organisms.'
  },
  {
    id:'BAC3-008', m:'m1', area:'Streptococcal & enterococcal identification', level:'application',
    stem:'A throat culture grows a beta-hemolytic, gram-positive coccus that is resistant to bacitracin and gives a positive CAMP test. Which organism does this identify?',
    options:['Streptococcus agalactiae (group B)', 'Streptococcus pyogenes (group A)', 'Streptococcus pneumoniae', 'Viridans streptococci'],
    answer:0,
    why:'Bacitracin resistance combined with a positive CAMP test identifies group B Streptococcus (S. agalactiae). Group A Streptococcus (S. pyogenes) is also beta-hemolytic but is bacitracin-sensitive instead. S. pneumoniae and the viridans streptococci are both alpha-hemolytic.'
  },
  {
    id:'BAC3-009', m:'m1', area:'Streptococcal & enterococcal identification', level:'concept',
    stem:'Which test result separates Streptococcus pneumoniae from the viridans streptococci?',
    options:['Optochin sensitivity versus resistance', 'Bacitracin sensitivity versus resistance', 'Beta-hemolysis versus alpha-hemolysis', 'A positive versus negative CAMP test'],
    answer:0,
    why:'Both organisms are alpha-hemolytic, so hemolysis pattern cannot separate them. Optochin does: S. pneumoniae is sensitive, while the viridans streptococci are resistant. Bacitracin and the CAMP test are used to sort the beta-hemolytic streptococci, not this pair.'
  },
  {
    id:'BAC3-010', m:'m1', area:'Streptococcal & enterococcal identification', level:'integration',
    stem:'A catalase-negative, gram-positive coccus recovered from a patient with endocarditis is nonhemolytic and identified as normal colon flora. Which genus best fits this description?',
    options:['Enterococcus', 'Streptococcus pyogenes', 'Staphylococcus epidermidis', 'Streptococcus pneumoniae'],
    answer:0,
    why:'Enterococcus is catalase-negative, typically nonhemolytic, lives as normal colon flora, and is a recognized cause of endocarditis. S. pyogenes and S. pneumoniae are hemolytic organisms of the throat, and S. epidermidis is a catalase-positive Staphylococcus.'
  },
  {
    id:'BAC3-011', m:'m2', area:'S. aureus virulence and disease', level:'concept',
    stem:'Which Staphylococcus aureus virulence factor prevents complement activation by blocking IgG binding?',
    options:['Protein A', 'Coagulase', 'Alpha toxin', 'Hyaluronidase'],
    answer:0,
    why:'Protein A binds the Fc portion of IgG, preventing complement activation and reducing opsonization and phagocytosis. Coagulase clots plasma, alpha toxin damages cell membranes, and hyaluronidase breaks down connective tissue.'
  },
  {
    id:'BAC3-012', m:'m2', area:'S. aureus virulence and disease', level:'application',
    stem:'A person develops vomiting and watery diarrhea within three hours of eating potato salad left out at a picnic. Which mechanism best explains the rapid onset?',
    options:['A pre-formed, heat-stable toxin already present in the food', 'Active bacterial invasion of the gut lining', 'A superantigen-driven immune response that takes days to develop', 'A toxin that requires bacterial growth in the gut before symptoms occur'],
    answer:0,
    why:'Staphylococcal enterotoxin is pre-formed and heat-stable in contaminated food, so illness begins within hours because no bacterial growth or invasion needs to occur first, and antibiotics do not help.'
  },
  {
    id:'BAC3-013', m:'m2', area:'S. aureus virulence and disease', level:'application',
    stem:'An infant develops widespread skin peeling with a positive Nikolsky sign. Which toxin is responsible?',
    options:['Exfoliatin', 'Alpha toxin', 'TSST-1', 'Panton-Valentine leukocidin'],
    answer:0,
    why:'Exfoliatin causes scalded skin syndrome by cleaving desmoglein in the skin\u2019s desmosomes. TSST-1 causes toxic shock rather than skin peeling, alpha toxin causes cell death and necrosis, and P-V leukocidin targets leukocytes.'
  },
  {
    id:'BAC3-014', m:'m2', area:'Group A strep virulence and disease', level:'concept',
    stem:'Which Group A Streptococcus virulence factor thins pus and helps the organism spread through tissue?',
    options:['DNase', 'M protein', 'Streptolysin O', 'Erythrogenic toxin'],
    answer:0,
    why:'DNase digests DNA in necrotic tissue and exudates, thinning pus so the organism can spread. M protein resists phagocytosis, streptolysin O causes hemolysis, and erythrogenic toxin produces the scarlet fever rash.'
  },
  {
    id:'BAC3-015', m:'m2', area:'Group A strep virulence and disease', level:'concept',
    stem:'Which feature do rheumatic fever and acute glomerulonephritis share as complications of group A streptococcal infection?',
    options:['Both are immune-mediated and appear weeks after the infection', 'Both are prevented by antibiotic treatment of the pharyngitis', 'Both result from direct bacterial invasion of the affected organ', 'Both are caused by erythrogenic toxin acting on the organ'],
    answer:0,
    why:'Rheumatic fever and acute glomerulonephritis are both immune-mediated complications that appear weeks after the infection, once the bacteria are gone. Antibiotics for strep throat prevent rheumatic fever but not glomerulonephritis, and neither complication comes from direct invasion or from erythrogenic toxin, which causes the scarlet fever rash.'
  },
  {
    id:'BAC3-016', m:'m2', area:'Group A strep virulence and disease', level:'application',
    stem:'A patient with a group A streptococcal skin infection develops a diffuse rash, fever, and hypotension. Which toxin\u2019s mechanism best explains this presentation?',
    options:['A superantigen triggering massive cytokine release', 'A protease digesting fibrin clots', 'An enzyme thinning pus in the wound', 'A capsule preventing phagocytosis'],
    answer:0,
    why:'Pyrogenic exotoxin A is a superantigen that triggers massive, nonspecific T-cell activation and cytokine release, producing streptococcal toxic shock syndrome. Streptokinase digests fibrin and DNase thins pus, and group A strep is not defined by a prominent antiphagocytic capsule in this lecture.'
  },
  {
    id:'BAC3-017', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'concept',
    stem:'Which Streptococcus pneumoniae virulence factor helps it colonize the mucosa by cleaving the main antibody class found on mucosal surfaces?',
    options:['IgA protease', 'Pneumolysin', 'Capsular polysaccharide', 'Lipoteichoic acid'],
    answer:0,
    why:'IgA protease breaks down IgA, facilitating mucosal colonization. Pneumolysin instead causes hemolysis, the capsule resists phagocytosis, and lipoteichoic acid activates complement.'
  },
  {
    id:'BAC3-018', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'application',
    stem:'A patient with heavy alcohol use is hospitalized with pneumococcal pneumonia and rust-colored sputum. Which mechanism best explains why alcohol use raises the risk of this infection?',
    options:['Depressed cough reflex and aspiration of secretions', 'Loss of splenic clearance of encapsulated bacteria', 'Low IgA levels on the airway lining', 'Reduced stomach acid allowing swallowed bacteria to survive'],
    answer:0,
    why:'Alcohol intoxication depresses the cough reflex and increases aspiration of secretions, lowering resistance to pneumococcal infection. Loss of the spleen is a separate risk factor that alcohol use does not cause, and low airway IgA or reduced stomach acid are not how alcohol raises pneumococcal risk.'
  },
  {
    id:'BAC3-019', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'concept',
    stem:'Which organism is most associated with subacute endocarditis following a dental procedure?',
    options:['Viridans streptococci', 'Streptococcus pneumoniae', 'Streptococcus agalactiae', 'Enterococcus faecalis'],
    answer:0,
    why:'Viridans streptococci are normal oropharyngeal flora classically associated with subacute endocarditis, often following dental procedures. S. pneumoniae causes pneumonia and meningitis rather than classic subacute endocarditis here, S. agalactiae is associated with neonatal disease, and Enterococcus is more closely tied to the colon and urinary tract.'
  },
  {
    id:'BAC3-020', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'integration',
    stem:'A newborn develops sepsis shortly after birth. The mother\u2019s prenatal culture had been positive for a pyogenic, catalase-negative, beta-hemolytic organism that colonizes the vagina. Which organism is the most likely cause?',
    options:['Streptococcus agalactiae (group B)', 'Streptococcus pyogenes (group A)', 'Enterococcus faecalis', 'Streptococcus pneumoniae'],
    answer:0,
    why:'S. agalactiae (group B Streptococcus) colonizes the vagina and is a leading cause of neonatal sepsis and meningitis when the mother is not treated with intrapartum antibiotics. S. pyogenes and S. pneumoniae are not primarily vaginal colonizers, and Enterococcus is primarily colon flora.'
  },
  {
    id:'BAC3-021', m:'m3', area:'Neisseria: virulence and diagnosis', level:'concept',
    stem:'Which virulence factor is made by both N. meningitidis and N. gonorrhoeae and helps them colonize mucosa by cleaving secretory antibody?',
    options:['IgA protease', 'Pili', 'Factor H binding protein', 'Polysaccharide capsule'],
    answer:0,
    why:'IgA protease is produced by both Neisseria species (and by S. pneumoniae), helping the organism attach to mucosal surfaces by breaking down IgA. Pili and Factor H binding protein are specific to one organism or the other, and the polysaccharide capsule is specific to N. meningitidis.'
  },
  {
    id:'BAC3-022', m:'m3', area:'Neisseria: virulence and diagnosis', level:'concept',
    stem:'Nonpiliated Neisseria gonorrhoeae organisms are characteristically:',
    options:['Nonpathogenic', 'More virulent than piliated organisms', 'Resistant to ceftriaxone', 'Unable to produce endotoxin'],
    answer:0,
    why:'Pili are required for attachment to mucosal cells and for resisting phagocytosis; piliated gonococci are pathogenic, while nonpiliated gonococci are nonpathogenic.'
  },
  {
    id:'BAC3-023', m:'m3', area:'Neisseria: virulence and diagnosis', level:'application',
    stem:'A patient with suspected disseminated gonococcal or meningococcal infection needs rapid identification. Which single test distinguishes the two species?',
    options:['Maltose fermentation', 'Gram stain morphology alone', 'Catalase', 'Growth on blood agar alone'],
    answer:0,
    why:'Both organisms are gram-negative diplococci with similar morphology and growth requirements, so maltose fermentation is the test that separates N. meningitidis (positive) from N. gonorrhoeae (negative).'
  },
  {
    id:'BAC3-024', m:'m3', area:'Meningococcus: treatment and prevention', level:'concept',
    stem:'Which meningococcal vaccine is recommended for adolescents at age 11-12 with a booster at 16?',
    options:['MenACWY', 'MenB', 'Hib conjugate', 'PCV20'],
    answer:0,
    why:'MenACWY is routinely recommended at age 11-12 with a booster at 16. MenB is a shared clinical decision, ideally given around age 16-18, and the combined MenABCWY vaccine can be used when both MenACWY and MenB are due at the same visit. Hib conjugate and PCV20 protect against H. influenzae type b and pneumococcus, not meningococcus.'
  },
  {
    id:'BAC3-025', m:'m3', area:'Meningococcus: treatment and prevention', level:'application',
    stem:'Meningococcal prophylaxis is being planned in an area with documented ciprofloxacin-resistant strains. Which agents remain appropriate choices?',
    options:['Rifampin, ceftriaxone, or azithromycin', 'Ciprofloxacin at a higher dose', 'Doxycycline alone', 'No prophylaxis is effective against resistant strains'],
    answer:0,
    why:'Where ciprofloxacin-resistant meningococcal strains have appeared, current guidance recommends using rifampin, ceftriaxone, or azithromycin for prophylaxis instead.'
  },
  {
    id:'BAC3-026', m:'m3', area:'Meningococcus: treatment and prevention', level:'application',
    stem:'Serogroup B Neisseria meningitidis is identified as the cause of a case of meningitis. Which vaccine, if given earlier, targets this serogroup\u2019s key virulence factor?',
    options:['MenB', 'MenACWY', 'PCV15', 'Hib vaccine'],
    answer:0,
    why:'MenB vaccines target Factor H binding protein and protect against serogroup B disease, which is not covered by MenACWY.'
  },
  {
    id:'BAC3-027', m:'m3', area:'Gonococcus: treatment and prevention', level:'concept',
    stem:'Which statement about prevention of gonorrhea is accurate?',
    options:['No vaccine exists; prevention relies on condoms and treating symptomatic patients and partners', 'A vaccine given in adolescence prevents most cases', 'Erythromycin ointment is given to sexually active adults to prevent transmission', 'Annual antibiotic prophylaxis is recommended for high-risk patients'],
    answer:0,
    why:'There is no vaccine against N. gonorrhoeae. Prevention relies on condoms and treatment of symptomatic patients and their sexual partners; erythromycin ointment is specifically used in newborns, not adults.'
  },
  {
    id:'BAC3-028', m:'m3', area:'Gonococcus: treatment and prevention', level:'application',
    stem:'A patient with a documented cephalosporin allergy is diagnosed with uncomplicated gonococcal infection. Which regimen is appropriate?',
    options:['Gentamicin plus azithromycin', 'Ceftriaxone at a reduced dose', 'Doxycycline alone', 'Penicillin G'],
    answer:0,
    why:'Gentamicin plus azithromycin is the recommended alternative regimen for patients who cannot receive a cephalosporin.'
  },
  {
    id:'BAC3-029', m:'m3', area:'Gonococcus: treatment and prevention', level:'concept',
    stem:'After treatment for gonococcal infection, when should a patient be retested for reinfection?',
    options:['About 3 months after treatment', 'Immediately after finishing the antibiotic', 'Only if symptoms return', 'At 24 hours post-treatment'],
    answer:0,
    why:'Retesting for reinfection about 3 months after treatment is recommended; a test of cure at 7-14 days is reserved specifically for pharyngeal infection.'
  },
  {
    id:'BAC3-030', m:'m3', area:'Gonococcus: treatment and prevention', level:'concept',
    stem:'Which measure is given routinely to every newborn at birth to prevent gonococcal conjunctivitis?',
    options:['Erythromycin ointment applied to the newborn\u2019s eyes', 'Oral doxycycline for the newborn', 'A single dose of the MenB vaccine for the newborn', 'Isolating the newborn from the mother'],
    answer:0,
    why:'Erythromycin eye ointment is applied to every newborn at birth to prevent gonococcal conjunctivitis. A newborn whose mother had untreated gonorrhea at delivery also receives a single injected dose of ceftriaxone. Doxycycline is not given to newborns, MenB protects against meningococcus rather than gonococcus, and separating the baby from the mother does not prevent infection acquired during birth.'
  },
  {
    id:'BAC3-031', m:'m4', area:'Anthrax: portals and toxin', level:'concept',
    stem:'Which component of the Bacillus anthracis exotoxin binds host cells and delivers the other two toxin components?',
    options:['Protective antigen', 'Edema factor', 'Lethal factor', 'Capsule'],
    answer:0,
    why:'Protective antigen binds host cells and forms the channel that delivers edema factor and lethal factor into the cell. It is also the immunogen used in the anthrax vaccine.'
  },
  {
    id:'BAC3-032', m:'m4', area:'Anthrax: portals and toxin', level:'application',
    stem:'A patient who works at a wool-processing facility develops a painless black eschar on the forearm. Which organism and portal of entry are most consistent with this presentation?',
    options:['Bacillus anthracis, cutaneous', 'Bacillus anthracis, pulmonary', 'Clostridium perfringens, wound', 'Corynebacterium diphtheriae, respiratory'],
    answer:0,
    why:'A painless black eschar from an occupational exposure is classic for cutaneous anthrax, which accounts for nearly all anthrax cases.'
  },
  {
    id:'BAC3-033', m:'m4', area:'Anthrax: portals and toxin', level:'application',
    stem:'A family begins vomiting within 2 hours of eating fried rice that was held at room temperature. Which feature of Bacillus cereus explains the rapid onset?',
    options:['A heat-stable toxin was already formed in the food', 'Spores germinate in the colon and invade its wall', 'Shiga toxin damages the intestinal lining', 'The organism must first multiply in the small intestine'],
    answer:0,
    why:'In the vomiting form of B. cereus food poisoning, spores germinate in the cooked rice and the bacteria make a heat-stable toxin in the food itself, so symptoms start within hours and reheating does not destroy it. The slower diarrheal form, starting 8 to 16 hours after eating, comes from toxins made after the bacteria reach the small intestine. B. cereus does not invade the colon wall or make Shiga toxin.'
  },
  {
    id:'BAC3-034', m:'m4', area:'Toxin mechanism: flaccid, spastic, and destructive', level:'concept',
    stem:'Which organism\u2019s toxin destroys cell membranes directly, through lecithinase activity, rather than acting on the nervous system?',
    options:['Clostridium perfringens', 'Clostridium botulinum', 'Clostridium tetani', 'Bacillus anthracis'],
    answer:0,
    why:'C. perfringens alpha toxin (lecithinase) destroys cell membranes, producing gas gangrene\u2019s tissue destruction \u2014 a different mechanism from the neurotoxins of botulinum and tetanus.'
  },
  {
    id:'BAC3-035', m:'m4', area:'Toxin mechanism: flaccid, spastic, and destructive', level:'application',
    stem:'A patient develops descending muscle weakness beginning with the cranial nerves, days after eating improperly canned food. Which toxin mechanism explains this presentation?',
    options:['Blockade of acetylcholine release at the neuromuscular junction', 'Blockade of inhibitory neurotransmitter release in the spinal cord', 'Direct destruction of cell membranes', 'ADP-ribosylation of EF-2'],
    answer:0,
    why:'Botulinum toxin blocks acetylcholine release, producing descending flaccid paralysis that classically begins with the cranial nerves, consistent with improperly canned food as the source.'
  },
  {
    id:'BAC3-036', m:'m4', area:'Toxin mechanism: flaccid, spastic, and destructive', level:'application',
    stem:'A wound contaminated with soil becomes infected, and the patient develops gas gangrene. Which treatment approach is most appropriate?',
    options:['Penicillin G plus surgical debridement of the wound', 'Antitoxin and respiratory support alone', 'Metronidazole plus benzodiazepines', 'Erythromycin ointment applied to the wound'],
    answer:0,
    why:'Gas gangrene from C. perfringens needs urgent surgical debridement of dead tissue plus penicillin G, and current guidelines add clindamycin to reduce toxin production. Antitoxin and respiratory support are the treatment for botulism, metronidazole and benzodiazepines fit tetanus, and erythromycin ointment is used for newborn eye prophylaxis.'
  },
  {
    id:'BAC3-037', m:'m4', area:'C. difficile: the antibiotic-associated cycle', level:'application',
    stem:'A hospitalized patient develops watery diarrhea 6 days after starting clindamycin. Testing confirms C. difficile infection. What is an important first step in management?',
    options:['Discontinue the causative antibiotic if possible', 'Start an antimotility agent to control the diarrhea', 'Give prophylactic ciprofloxacin', 'Wait for symptoms to resolve on their own before treating'],
    answer:0,
    why:'Discontinuing the causative antibiotic, if clinically possible, is a key step in managing C. difficile infection, alongside starting fidaxomicin (or oral vancomycin as an alternative).'
  },
  {
    id:'BAC3-038', m:'m4', area:'C. difficile: the antibiotic-associated cycle', level:'concept',
    stem:'Why should C. difficile testing be reserved for patients with new, unexplained diarrhea rather than performed routinely?',
    options:['Colonization without symptoms is common, and a positive test in a well patient does not indicate infection', 'The test is too expensive to use routinely', 'PCR testing cannot detect the organism at all', 'C. difficile cannot be transmitted between asymptomatic patients'],
    answer:0,
    why:'Colonization without symptoms is common, so testing a patient whose diarrhea has another explanation can lead to a false impression of infection; testing is reserved for new, unexplained diarrhea.'
  },
  {
    id:'BAC3-039', m:'m4', area:'Listeria and diphtheria', level:'application',
    stem:'A pregnant patient develops a febrile illness after eating soft cheese made from unpasteurized milk, and blood cultures grow a gram-positive rod. Which empiric treatment is most appropriate?',
    options:['Ampicillin, with or without gentamicin', 'Ceftriaxone alone', 'Vancomycin alone', 'Erythromycin alone'],
    answer:0,
    why:'Listeria monocytogenes, associated with unpasteurized dairy products, is treated with ampicillin, often combined with gentamicin, or given as trimethoprim-sulfamethoxazole; cephalosporins alone do not reliably cover Listeria.'
  },
  {
    id:'BAC3-040', m:'m4', area:'Listeria and diphtheria', level:'application',
    stem:'A child with a gray pseudomembrane in the throat and swollen neck nodes (\u201cbull neck\u201d) is found to have toxin-producing Corynebacterium diphtheriae. Beyond antibiotics, which treatment is essential?',
    options:['Diphtheria antitoxin, to neutralize circulating toxin', 'Surgical debridement of the pseudomembrane', 'Fidaxomicin', 'Erythromycin ointment applied to the throat'],
    answer:0,
    why:'Diphtheria antitoxin neutralizes circulating toxin and is essential for respiratory diphtheria, in addition to antibiotics (penicillin or erythromycin) to eliminate the organism.'
  },
  {
    id:'BAC3-041', m:'m5', area:'E. coli: ETEC vs EHEC', level:'concept',
    stem:'Which E. coli toxin raises intracellular cGMP, leading to electrolyte efflux into the intestinal lumen?',
    options:['Heat-stable toxin (ST)', 'Heat-labile toxin (LT)', 'Shiga toxin', 'Cholera toxin'],
    answer:0,
    why:'Heat-stable toxin (ST) stimulates guanylate cyclase, raising cGMP; heat-labile toxin (LT) instead stimulates adenylate cyclase, raising cAMP. Both are ETEC toxins that cause watery diarrhea.'
  },
  {
    id:'BAC3-042', m:'m5', area:'E. coli: ETEC vs EHEC', level:'application',
    stem:'A patient develops bloody diarrhea after eating undercooked ground beef. Laboratory testing later shows a rising creatinine, anemia, and low platelets. What has this patient developed?',
    options:['Hemolytic uremic syndrome (HUS)', 'Guillain-Barr\u00e9 syndrome', 'Toxic shock syndrome', 'Rheumatic fever'],
    answer:0,
    why:'Hemolytic uremic syndrome (HUS) \u2014 kidney failure, hemolytic anemia, and thrombocytopenia \u2014 is a life-threatening complication of Shiga toxin from EHEC (E. coli O157:H7).'
  },
  {
    id:'BAC3-043', m:'m5', area:'E. coli: ETEC vs EHEC', level:'concept',
    stem:'Why is antibiotic use controversial in suspected EHEC infection?',
    options:['Antibiotics may increase the risk of precipitating HUS', 'EHEC is intrinsically resistant to beta-lactams', 'Antibiotics worsen dehydration by increasing stool output', 'Antibiotics interfere with oral rehydration'],
    answer:0,
    why:'Antibiotic use in EHEC infection is controversial because certain agents may increase Shiga toxin release and precipitate HUS, similar to the concern with antimotility drugs. EHEC is not intrinsically resistant to beta-lactams, and antibiotics do not worsen dehydration or block oral rehydration.'
  },
  {
    id:'BAC3-044', m:'m5', area:'Salmonella, Shigella & Klebsiella', level:'concept',
    stem:'Which organism is nonmotile and has an extremely small infectious dose, with one species producing Shiga toxin?',
    options:['Shigella', 'Salmonella', 'Klebsiella', 'Vibrio cholerae'],
    answer:0,
    why:'Shigella is nonmotile, has a very small infectious dose (10-200 organisms), and S. dysenteriae produces Shiga toxin, causing bloody, mucoid dysentery.'
  },
  {
    id:'BAC3-045', m:'m5', area:'Salmonella, Shigella & Klebsiella', level:'application',
    stem:'A patient hospitalized for pneumonia with thick, blood-tinged (\u201ccurrant-jelly\u201d) sputum and a history of alcohol use disorder is found to have an ESBL-producing gram-negative rod. Which class of antibiotic is appropriate?',
    options:['A carbapenem', 'A first-generation cephalosporin', 'Oral nitrofurantoin', 'A macrolide alone'],
    answer:0,
    why:'Klebsiella causing pneumonia in a patient with alcohol use disorder, with ESBL production, is treated with a carbapenem; carbapenem-resistant strains require newer beta-lactam/inhibitor combinations.'
  },
  {
    id:'BAC3-046', m:'m5', area:'Salmonella, Shigella & Klebsiella', level:'application',
    stem:'A patient with gastroenteritis after eating undercooked poultry has a non-lactose-fermenting, H2S-positive organism recovered from stool. The patient is otherwise healthy, with mild illness. Which management is appropriate?',
    options:['Oral fluids and supportive care, without antibiotics', 'Ceftriaxone for 7 days', 'Loperamide as first-line therapy', 'Ciprofloxacin for 14 days to prevent carriage'],
    answer:0,
    why:'Non-typhoidal Salmonella gastroenteritis in a healthy patient with mild illness is managed with fluids and supportive care. Antibiotics are reserved for severe illness or high-risk patients, because they do not help mild illness and can prolong carriage. Antimotility drugs are avoided in invasive diarrhea.'
  },
  {
    id:'BAC3-047', m:'m5', area:'Vibrio, Campylobacter & H. pylori', level:'concept',
    stem:'Which organism is a curved, \u201cgull-wing\u201d rod that grows at 42\u00b0C and is linked to poultry and unpasteurized milk?',
    options:['Campylobacter jejuni', 'Vibrio cholerae', 'Helicobacter pylori', 'Shigella'],
    answer:0,
    why:'Campylobacter jejuni is a curved, gull-wing-shaped rod that grows at 42\u00b0C and is classically linked to poultry and unpasteurized milk.'
  },
  {
    id:'BAC3-048', m:'m5', area:'Vibrio, Campylobacter & H. pylori', level:'concept',
    stem:'Which regimen is first-line for confirmed Helicobacter pylori infection?',
    options:['Bismuth quadruple therapy for 14 days', 'Clarithromycin triple therapy for 7 days', 'Doxycycline monotherapy', 'A single dose of azithromycin'],
    answer:0,
    why:'Bismuth quadruple therapy (a proton pump inhibitor, bismuth, tetracycline, and a nitroimidazole) for 14 days is first-line for H. pylori, with cure confirmed 4 or more weeks later. Short clarithromycin triple therapy fails often because of clarithromycin resistance, and single antibiotics do not reliably cure the infection.'
  },
  {
    id:'BAC3-049', m:'m5', area:'Vibrio, Campylobacter & H. pylori', level:'application',
    stem:'A patient with profuse, rice-water diarrhea after drinking contaminated water is severely dehydrated. What is the single most important intervention?',
    options:['Rehydration, oral or IV', 'Doxycycline alone', 'Loperamide', 'Broad-spectrum antibiotics without fluids'],
    answer:0,
    why:'Rehydration is the life-saving intervention in cholera; doxycycline or azithromycin can shorten the illness but does not replace the need for aggressive fluid replacement.'
  },
  {
    id:'BAC3-050', m:'m5', area:'Where the enteric bacteria strike', level:'integration',
    stem:'A patient has watery, non-bloody diarrhea with no fever. Which mechanism and site are most consistent with this presentation?',
    options:['A toxin acting on the small intestine, without tissue invasion', 'Bacterial invasion and destruction of the colon wall', 'Shiga toxin damage to the colon', 'Direct colonization of the stomach'],
    answer:0,
    why:'Watery, non-bloody, afebrile diarrhea is most consistent with a toxin-mediated mechanism acting on the small intestine (such as ETEC or cholera), without invading or destroying tissue.'
  },
  {
    id:'BAC3-051', m:'m5', area:'Where the enteric bacteria strike', level:'concept',
    stem:'Which single enteric organism in this module is best described as living in the stomach rather than the small intestine or colon?',
    options:['Helicobacter pylori', 'Campylobacter jejuni', 'Vibrio cholerae', 'Shigella'],
    answer:0,
    why:'H. pylori is the outlier of the group: it colonizes the stomach itself rather than causing disease via toxin action in the small intestine or invasion of the colon.'
  },
  {
    id:'BAC3-052', m:'m6', area:'Pseudomonas: the opportunist', level:'concept',
    stem:'Which Pseudomonas aeruginosa feature enhances adherence to mucous membranes and prevents antibody binding?',
    options:['The glycocalyx (slime layer)', 'Exotoxin A', 'Pyocyanin', 'Elastase'],
    answer:0,
    why:'The glycocalyx (slime layer) enhances mucous membrane adherence and helps the organism evade antibody binding, contributing to chronic infections such as those in cystic fibrosis.'
  },
  {
    id:'BAC3-053', m:'m6', area:'Pseudomonas: the opportunist', level:'application',
    stem:'A blood culture grows an oxidase-positive, gram-negative rod producing a blue-green pigment with a fruity smell. Which organism is this?',
    options:['Pseudomonas aeruginosa', 'Klebsiella pneumoniae', 'Vibrio cholerae', 'Francisella tularensis'],
    answer:0,
    why:'Blue-green pigment (pyocyanin) with a fruity odor and a positive oxidase test are classic identifying features of Pseudomonas aeruginosa.'
  },
  {
    id:'BAC3-054', m:'m6', area:'Pseudomonas: the opportunist', level:'concept',
    stem:'A patient with a difficult-to-treat, resistant Pseudomonas aeruginosa infection needs an agent from the newer beta-lactam/beta-lactamase-inhibitor class. Which of the following fits?',
    options:['Ceftazidime-avibactam', 'Amoxicillin-clavulanate', 'Nitrofurantoin', 'Trimethoprim-sulfamethoxazole'],
    answer:0,
    why:'Ceftazidime-avibactam is one of the newer agents (along with ceftolozane-tazobactam, imipenem-relebactam, and cefiderocol) reserved for difficult-to-treat, resistant P. aeruginosa.'
  },
  {
    id:'BAC3-055', m:'m6', area:'H. influenzae & B. pertussis: vaccine-preventable', level:'concept',
    stem:'Which toxin does Bordetella pertussis produce that ADP-ribosylates a G protein and causes lymphocytosis?',
    options:['Pertussis toxin', 'Tracheal cytotoxin', 'Adenylate cyclase toxin', 'Diphtheria toxin'],
    answer:0,
    why:'Pertussis toxin ADP-ribosylates the Gi protein, raising cAMP and causing the characteristic lymphocytosis of pertussis. Tracheal cytotoxin instead kills ciliated respiratory cells.'
  },
  {
    id:'BAC3-056', m:'m6', area:'H. influenzae & B. pertussis: vaccine-preventable', level:'application',
    stem:'A 2-week-old infant\u2019s cough sounds like an ordinary cold. Three weeks later, the infant develops severe coughing fits ending in vomiting. What is the most likely diagnosis and current stage?',
    options:['Pertussis, paroxysmal stage', 'Pertussis, catarrhal stage', 'Diphtheria, respiratory stage', 'Tularemia, pulmonary stage'],
    answer:0,
    why:'The initial cold-like illness is the catarrhal stage of pertussis; the subsequent severe coughing fits with vomiting mark the paroxysmal stage.'
  },
  {
    id:'BAC3-057', m:'m6', area:'H. influenzae & B. pertussis: vaccine-preventable', level:'concept',
    stem:'Which diagnostic test is now preferred for Bordetella pertussis, over the older fluorescent antibody method?',
    options:['PCR of a nasopharyngeal swab', 'Blood culture', 'Urine antigen testing', 'Skin biopsy'],
    answer:0,
    why:'PCR of a nasopharyngeal swab is now the preferred diagnostic method for pertussis; culture on Bordet-Gengou or Regan-Lowe medium is slower and less sensitive.'
  },
  {
    id:'BAC3-058', m:'m6', area:'Tularemia and plague: zoonotic hazards', level:'concept',
    stem:'Which of the following organisms produces endotoxin but no exotoxin?',
    options:['Francisella tularensis', 'Yersinia pestis', 'Bordetella pertussis', 'Pseudomonas aeruginosa'],
    answer:0,
    why:'F. tularensis produces endotoxin but no exotoxin. Y. pestis produces an antiphagocytic capsule, endotoxin, exotoxin, and Yops; B. pertussis makes pertussis toxin, and Pseudomonas makes exotoxin A.'
  },
  {
    id:'BAC3-059', m:'m6', area:'Tularemia and plague: zoonotic hazards', level:'application',
    stem:'A hunter develops fever and a skin ulcer with swollen lymph nodes after skinning a wild rabbit. Which organism and treatment are most appropriate?',
    options:['Francisella tularensis; a fluoroquinolone or doxycycline', 'Yersinia pestis; gentamicin', 'Bacillus anthracis; ciprofloxacin', 'Corynebacterium diphtheriae; penicillin'],
    answer:0,
    why:'Exposure to a wild rabbit is classic for tularemia (F. tularensis), treated with a fluoroquinolone or doxycycline, with an aminoglycoside reserved for severe disease.'
  },
  {
    id:'BAC3-060', m:'m6', area:'Anaerobes & the encapsulated-organism synthesis', level:'concept',
    stem:'Which finding is a classic clinical clue for an anaerobic infection?',
    options:['Foul-smelling discharge and gas in the tissue', 'A bright red, well-demarcated rash', 'A rapidly rising white blood cell count alone', 'Photophobia and neck stiffness'],
    answer:0,
    why:'Foul-smelling discharge, gas in the tissue, and necrotic tissue are classic clinical clues that point toward an anaerobic infection.'
  },
  {
    id:'BAC3-061', m:'m6', area:'Anaerobes & the encapsulated-organism synthesis', level:'application',
    stem:'A patient develops a lung abscess after an episode of aspiration. Which anaerobes, based on their mouth origin, are most likely involved?',
    options:['Prevotella and Fusobacterium', 'Bacteroides fragilis and Enterococcus faecalis', 'Clostridium perfringens and Clostridium tetani', 'Pseudomonas aeruginosa and Escherichia coli'],
    answer:0,
    why:'Prevotella and Fusobacterium are mouth anaerobes associated with aspiration pneumonia and lung or brain abscess. Bacteroides fragilis and Enterococcus are colon organisms that point toward intra-abdominal abscess, the clostridia cause toxin-mediated and wound disease, and Pseudomonas and E. coli are not anaerobes.'
  },
  {
    id:'BAC3-062', m:'m6', area:'Anaerobes & the encapsulated-organism synthesis', level:'concept',
    stem:'In suspected pneumococcal meningitis, when should dexamethasone be started?',
    options:['With or just before the first antibiotic dose', 'After the first 24 hours of antibiotics', 'After the antibiotic course is complete', 'Once culture confirms pneumococcus'],
    answer:0,
    why:'Dexamethasone is started with or just before the first antibiotic dose. It blunts the inflammatory surge from bacterial lysis, which lowers the rates of hearing loss and death. The benefit is lost if it is started after antibiotics are already running, so it is not delayed until culture results or the end of treatment.'
  },

  /* ---- Added in the coverage pass: pool expanded to 18-19 questions per module ---- */
  {
    id:'BAC3-063', m:'m1', area:'Staph vs strep basics', level:'concept',
    stem:'Which oxygen requirement describes both Staphylococcus and Streptococcus?',
    options:['Facultative anaerobe', 'Obligate aerobe', 'Obligate anaerobe', 'Microaerophile'],
    answer:0,
    why:'Both genera grow with or without oxygen, which makes them facultative anaerobes. They differ in arrangement (clusters versus chains) and in catalase activity, not in their oxygen requirement.'
  },
  {
    id:'BAC3-064', m:'m1', area:'Staph vs strep basics', level:'application',
    stem:'A Gram stain shows gram-positive cocci in chains. When hydrogen peroxide is added to a colony, no bubbles form. What does the absence of bubbles indicate?',
    options:['The organism lacks catalase', 'The organism lacks coagulase', 'The organism makes beta-lactamase', 'The organism has a capsule'],
    answer:0,
    why:'Catalase breaks hydrogen peroxide into water and oxygen, and the oxygen appears as bubbles. No bubbles means the organism is catalase-negative, which fits Streptococcus or Enterococcus rather than Staphylococcus.'
  },
  {
    id:'BAC3-065', m:'m6', area:'Anaerobes & the encapsulated-organism synthesis', level:'concept',
    stem:'Anaerobes are inhibited by oxygen partly because they lack or have reduced amounts of which pair of enzymes?',
    options:['Catalase and superoxide dismutase', 'Coagulase and hyaluronidase', 'Beta-lactamase and penicillinase', 'Urease and oxidase'],
    answer:0,
    why:'Oxygen use produces hydrogen peroxide and superoxide. Catalase and superoxide dismutase neutralize them, and anaerobes lack or have reduced amounts of both, so these toxic products accumulate and oxidize enzyme thiols.'
  },
  {
    id:'BAC3-066', m:'m1', area:'Staphylococcal identification', level:'application',
    stem:'A colony on blood agar is golden-yellow and beta-hemolytic, and Gram stain shows grape-like clusters. Which test confirms the species?',
    options:['Coagulase', 'Optochin', 'Bacitracin', 'Novobiocin'],
    answer:0,
    why:'Golden-yellow, beta-hemolytic colonies with clustered cocci suggest Staphylococcus aureus, and a positive coagulase test confirms it. Optochin and bacitracin are used for streptococci, and novobiocin separates the coagulase-negative staphylococci from each other.'
  },
  {
    id:'BAC3-067', m:'m1', area:'Staphylococcal identification', level:'application',
    stem:'A prosthetic joint infection persists despite antibiotics. The organism is Staphylococcus epidermidis. Which feature best explains why the infection is so hard to clear?',
    options:['A biofilm shields the bacteria from phagocytes and drugs', 'A pre-formed toxin remains active in the infected tissue', 'A missing cell wall makes beta-lactam drugs ineffective', 'Growth takes place inside host macrophages and neutrophils'],
    answer:0,
    why:'S. epidermidis attaches to the device and builds a slime-layer biofilm. Bacteria inside it are shielded from phagocytes and antibiotics and grow slowly, which is why treatment often requires removing the device.'
  },
  {
    id:'BAC3-068', m:'m1', area:'Staphylococcal identification', level:'integration',
    stem:'Which set of results identifies an unknown clustered gram-positive coccus as Staphylococcus saprophyticus?',
    options:['Catalase-positive, coagulase-negative, novobiocin-resistant', 'Catalase-positive, coagulase-positive, novobiocin-resistant', 'Catalase-positive, coagulase-negative, novobiocin-susceptible', 'Catalase-negative, coagulase-negative, novobiocin-susceptible'],
    answer:0,
    why:'Catalase-positive places the organism in Staphylococcus, coagulase-negative rules out S. aureus, and novobiocin resistance separates S. saprophyticus from S. epidermidis, which is susceptible.'
  },
  {
    id:'BAC3-069', m:'m1', area:'Streptococcal & enterococcal identification', level:'concept',
    stem:'Lancefield grouping of the streptococci is based on which cell wall component?',
    options:['The C carbohydrate antigen', 'The M protein', 'The polysaccharide capsule', 'The lipoteichoic acid'],
    answer:0,
    why:'Lancefield groups (A, B, D, and so on) are defined by the C carbohydrate antigen in the cell wall. M protein is a group A virulence factor, and capsules and teichoic acids are not used for grouping.'
  },
  {
    id:'BAC3-070', m:'m1', area:'Streptococcal & enterococcal identification', level:'application',
    stem:'A throat culture grows beta-hemolytic, catalase-negative cocci in chains that are susceptible to bacitracin. Which organism is identified?',
    options:['Streptococcus pyogenes (group A)', 'Streptococcus agalactiae (group B)', 'Streptococcus pneumoniae', 'Enterococcus faecalis'],
    answer:0,
    why:'Beta-hemolytic, catalase-negative chains point to a beta-hemolytic streptococcus, and bacitracin susceptibility identifies group A (S. pyogenes). Group B (S. agalactiae) is bacitracin-resistant, while pneumococcus is alpha-hemolytic and enterococcus is nonhemolytic.'
  },
  {
    id:'BAC3-071', m:'m1', area:'Streptococcal & enterococcal identification', level:'concept',
    stem:'Enterococcus faecalis belongs to which Lancefield group, and where does it normally live?',
    options:['Group D; the colon', 'Group A; the skin and throat', 'Group B; the vagina', 'No group; the oropharynx'],
    answer:0,
    why:'E. faecalis (with S. bovis) is a group D organism and is normal flora of the colon, which is why it causes urinary tract infection and endocarditis. Group A lives on skin and throat, group B colonizes the vagina, and viridans streptococci are oropharyngeal.'
  },
  {
    id:'BAC3-072', m:'m2', area:'S. aureus virulence and disease', level:'concept',
    stem:'The golden pigment staphyloxanthin enhances Staphylococcus aureus pathogenicity by doing what?',
    options:['Absorbing reactive oxygen species in neutrophils', 'Cleaving desmoglein in skin desmosomes', 'Forming pores in leukocyte membranes', 'Binding the Fc region of IgG antibodies'],
    answer:0,
    why:'Staphyloxanthin absorbs the reactive oxygen species that neutrophils use to kill ingested bacteria. Cleaving desmoglein is exfoliatin, pore formation is the leukocidin and alpha toxin, and binding IgG is protein A.'
  },
  {
    id:'BAC3-073', m:'m2', area:'S. aureus virulence and disease', level:'application',
    stem:'A hospital isolate of Staphylococcus aureus is resistant to nafcillin. Which mechanism explains this resistance?',
    options:['Mutant penicillin-binding proteins', 'Synthesis of beta-lactamase', 'Loss of the peptidoglycan layer', 'An efflux pump that exports the drug'],
    answer:0,
    why:'Methicillin- or nafcillin-resistant S. aureus (MRSA) carries mutant penicillin-binding proteins that the drug cannot bind. Beta-lactamase explains resistance to penicillin G, which nafcillin is designed to withstand; S. aureus keeps its peptidoglycan, and efflux pumps are not how it resists nafcillin. MRSA is treated with vancomycin or daptomycin.'
  },
  {
    id:'BAC3-074', m:'m2', area:'S. aureus virulence and disease', level:'application',
    stem:'A healthy adult has a 3-cm skin abscess. Which step is the most important first treatment?',
    options:['Drainage of the abscess', 'Intranasal mupirocin', 'Intravenous vancomycin', 'Removal of an indwelling device'],
    answer:0,
    why:'Drainage is the foundation of treating a skin abscess; adding an active antibiotic such as TMP-SMX or clindamycin modestly improves cure. Mupirocin is for nasal decolonization, and device removal applies only when a device is involved.'
  },
  {
    id:'BAC3-075', m:'m2', area:'Group A strep virulence and disease', level:'concept',
    stem:'Which group A streptococcal virulence factor is considered the most important and inactivates C3b?',
    options:['M protein', 'Streptokinase', 'Hyaluronidase', 'Streptolysin S'],
    answer:0,
    why:'M protein protrudes from the cell surface and inactivates C3b, so complement-mediated phagocytosis is blocked. Streptokinase digests clots, hyaluronidase degrades subcutaneous tissue, and streptolysin S is a hemolysin that oxygen does not inactivate.'
  },
  {
    id:'BAC3-076', m:'m2', area:'Group A strep virulence and disease', level:'integration',
    stem:'Three weeks after strep pharyngitis, a child has dark urine and facial swelling. Which complication has developed, and does treating the sore throat prevent it?',
    options:['Acute glomerulonephritis; antibiotics have no protective effect', 'Acute glomerulonephritis; antibiotics are protective', 'Rheumatic fever; antibiotics have no protective effect', 'Rheumatic fever; antibiotics are protective'],
    answer:0,
    why:'Dark urine weeks after strep infection points to immune-mediated acute glomerulonephritis. Treating strep throat prevents rheumatic fever but does not prevent glomerulonephritis, so the two complications must be kept apart.'
  },
  {
    id:'BAC3-077', m:'m2', area:'Group A strep virulence and disease', level:'application',
    stem:'A patient with group A streptococcal pharyngitis has a non-anaphylactic penicillin allergy. Which drug is an appropriate alternative?',
    options:['A first-generation cephalosporin', 'Gentamicin', 'Ciprofloxacin', 'Metronidazole'],
    answer:0,
    why:'For penicillin-allergic patients without anaphylaxis, a first-generation cephalosporin is appropriate. Clindamycin, clarithromycin, and azithromycin are other alternatives. Aminoglycosides, fluoroquinolones, and metronidazole are not used for group A strep.'
  },
  {
    id:'BAC3-078', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'application',
    stem:'After a childhood vaccination program, the number of pneumococcal infections falls less than expected. Which concern from the lecture explains this?',
    options:['Serotypes outside the vaccine can take over and cause disease', 'The vaccine removes the capsule from carried strains', 'The vaccine strips normal flora from the oropharynx', 'The vaccine selects for penicillin-resistant strains'],
    answer:0,
    why:'Serotype replacement means pneumococcal serotypes not covered by the vaccine can cause disease, so total incidence may not fall as far as the vaccine alone would predict. The vaccine targets capsular serotypes; it does not alter flora or resistance.'
  },
  {
    id:'BAC3-079', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'application',
    stem:'A patient with Enterococcus faecalis endocarditis has no drug allergies. Which regimen is appropriate?',
    options:['Ampicillin plus ceftriaxone', 'Ceftriaxone by itself', 'Penicillin V by itself', 'Gentamicin by itself'],
    answer:0,
    why:'Enterococci are cephalosporin-resistant, so ceftriaxone works only when combined with ampicillin; ampicillin plus gentamicin is the other accepted combination. Single agents do not provide the synergy needed for endocarditis.'
  },
  {
    id:'BAC3-080', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'application',
    stem:'An Enterococcus faecium isolate from a bloodstream infection is resistant to vancomycin because of an altered D-Ala-D-Lac cell wall target. Which drug is an appropriate choice?',
    options:['Linezolid', 'Cefazolin', 'Penicillin G', 'Gentamicin'],
    answer:0,
    why:'Vancomycin-resistant enterococci (VRE), mostly E. faecium, are treated with linezolid or daptomycin. Cephalosporins and penicillin G are not reliable against enterococci, and gentamicin is not an effective single agent.'
  },
  {
    id:'BAC3-081', m:'m3', area:'Neisseria: virulence and diagnosis', level:'concept',
    stem:'On Gram stain, which appearance is shared by Neisseria meningitidis and Neisseria gonorrhoeae?',
    options:['Gram-negative diplococci', 'Gram-positive diplococci', 'Gram-negative coccobacilli', 'Gram-positive cocci in clusters'],
    answer:0,
    why:'Both Neisseria species are gram-negative diplococci, so Gram stain cannot separate them from each other. Tests such as maltose fermentation, or the specimen source, do that work.'
  },
  {
    id:'BAC3-082', m:'m3', area:'Neisseria: virulence and diagnosis', level:'concept',
    stem:'Which meningococcal component serves as the immunogen in the MenACWY vaccines?',
    options:['Polysaccharide capsule', 'Factor H binding protein', 'IgA protease', 'Pili'],
    answer:0,
    why:'The polysaccharide capsule resists phagocytosis and is the immunogen in the MenACWY vaccines. Factor H binding protein is the immunogen in the group B (MenB) vaccine instead.'
  },
  {
    id:'BAC3-083', m:'m3', area:'Neisseria: virulence and diagnosis', level:'application',
    stem:'A urethral discharge Gram stain from a man shows gram-negative diplococci inside neutrophils. Which organism is identified?',
    options:['Neisseria gonorrhoeae', 'Neisseria meningitidis', 'Escherichia coli', 'Chlamydia trachomatis'],
    answer:0,
    why:'Gram-negative diplococci inside neutrophils on a urethral or cervical specimen identify the gonococcus. Meningococcus is a respiratory pathogen, E. coli is a rod, and Chlamydia is not readily Gram stained.'
  },
  {
    id:'BAC3-084', m:'m3', area:'Neisseria: virulence and diagnosis', level:'integration',
    stem:'Why does a past gonococcal infection fail to protect a person from reinfection?',
    options:['Antigenic variation of surface structures', 'A thick capsule that blocks antibody binding', 'Hiding inside macrophages between infections', 'Endotoxin that destroys memory B cells'],
    answer:0,
    why:'Antigenic variation of surface structures such as pili thwarts the immune system, so antibodies against one form miss the next. This is also why no gonococcal vaccine exists. The gonococcus is a pyogenic, extracellular pathogen without the capsule that the meningococcus has.'
  },
  {
    id:'BAC3-085', m:'m3', area:'Meningococcus: treatment and prevention', level:'application',
    stem:'A college student has confirmed meningococcal meningitis. Which drug is an appropriate treatment?',
    options:['Ceftriaxone', 'Trimethoprim-sulfamethoxazole', 'Doxycycline', 'Gentamicin'],
    answer:0,
    why:'Ceftriaxone or penicillin G is the treatment, and penicillin-resistant strains are rare. Sulfonamide resistance is common, so trimethoprim-sulfamethoxazole is a poor choice, and doxycycline and gentamicin are not standard therapy.'
  },
  {
    id:'BAC3-086', m:'m3', area:'Meningococcus: treatment and prevention', level:'integration',
    stem:'Which finding points to meningococcemia rather than meningitis alone?',
    options:['A purpuric, necrotic rash', 'A gray throat pseudomembrane', 'A painless black eschar', 'Blood-tinged “currant-jelly” sputum'],
    answer:0,
    why:'Meningococcemia produces a purpuric, necrotic rash from bloodstream spread. A gray pseudomembrane suggests diphtheria, a black eschar suggests cutaneous anthrax, and currant-jelly sputum suggests Klebsiella pneumonia.'
  },
  {
    id:'BAC3-087', m:'m3', area:'Gonococcus: treatment and prevention', level:'application',
    stem:'A patient has uncomplicated gonorrhea with possible chlamydial coinfection. Which regimen is appropriate?',
    options:['Ceftriaxone plus doxycycline', 'Penicillin G plus azithromycin', 'Ciprofloxacin by itself', 'Doxycycline by itself'],
    answer:0,
    why:'Treat with a single intramuscular dose of ceftriaxone, and add doxycycline for 7 days when chlamydia has not been excluded. Routine azithromycin dual therapy was dropped, and penicillin or ciprofloxacin alone are not reliable because of resistance.'
  },
  {
    id:'BAC3-088', m:'m3', area:'Gonococcus: treatment and prevention', level:'concept',
    stem:'For which site of gonococcal infection is a test of cure recommended 7 to 14 days after treatment?',
    options:['Pharynx', 'Urethra', 'Cervix', 'Conjunctiva'],
    answer:0,
    why:'A test of cure at 7 to 14 days is recommended only for pharyngeal infection; for other sites the follow-up step is retesting for reinfection at about 3 months.'
  },
  {
    id:'BAC3-089', m:'m4', area:'Anthrax: portals and toxin', level:'concept',
    stem:'Which anthrax toxin component is a protease that kills host cells, including macrophages?',
    options:['Lethal factor', 'Edema factor', 'Protective antigen', 'Poly-D-glutamate capsule'],
    answer:0,
    why:'Lethal factor is a protease that causes cell death. Edema factor is an adenylate cyclase that raises cAMP, protective antigen binds host cells and delivers the other two, and the poly-D-glutamate capsule resists phagocytosis but is not part of the toxin.'
  },
  {
    id:'BAC3-090', m:'m4', area:'Anthrax: portals and toxin', level:'application',
    stem:'A patient has inhalation anthrax, and meningitis has not yet been ruled out. Which treatment plan is recommended?',
    options:['Two bactericidal drugs, a protein synthesis inhibitor, and antitoxin', 'A single oral fluoroquinolone course given for 7 days', 'A single oral penicillin course given for 3 days', 'Supportive care followed by a booster dose of vaccine'],
    answer:0,
    why:'When meningitis has not been ruled out, systemic anthrax is treated with two bactericidal drugs from different classes plus a protein synthesis inhibitor (for example linezolid or clindamycin) for 2 weeks or longer, plus antitoxin. If meningitis is ruled out, one bactericidal drug plus a protein synthesis inhibitor is enough. Single-agent oral courses fit cutaneous disease without systemic illness, and vaccination is prevention, not treatment.'
  },
  {
    id:'BAC3-091', m:'m4', area:'Toxin mechanism: flaccid, spastic, and destructive', level:'concept',
    stem:'Tetanus toxin blocks the release of which neurotransmitters?',
    options:['Glycine and GABA', 'Acetylcholine', 'Dopamine and serotonin', 'Norepinephrine'],
    answer:0,
    why:'Tetanus toxin blocks release of the inhibitory neurotransmitters glycine and GABA in the spinal cord, so motor neurons fire without brakes. Blocking acetylcholine release is the action of botulinum toxin.'
  },
  {
    id:'BAC3-092', m:'m4', area:'Toxin mechanism: flaccid, spastic, and destructive', level:'application',
    stem:'After a puncture wound, a patient has sustained, painful muscle contraction with a rigidly arched back. Which type of paralysis and cause fit this presentation?',
    options:['Spastic paralysis from blocked inhibitory neurotransmitter release', 'Flaccid paralysis from blocked acetylcholine release', 'Flaccid paralysis from membrane damage by lecithinase', 'Spastic paralysis from a pore-forming enterotoxin'],
    answer:0,
    why:'An arched back (opisthotonos) with sustained contraction is spastic paralysis from tetanus toxin, which blocks inhibitory transmitters. Flaccid paralysis from blocked acetylcholine release is botulism, and lecithinase damage is gas gangrene.'
  },
  {
    id:'BAC3-093', m:'m4', area:'Toxin mechanism: flaccid, spastic, and destructive', level:'concept',
    stem:'Which toxin action causes Clostridium perfringens food poisoning?',
    options:['A pore-forming enterotoxin that binds claudins at tight junctions', 'A superantigen that triggers cytokine release', 'A lecithinase that destroys cell membranes', 'An ADP-ribosyltransferase that inactivates EF-2'],
    answer:0,
    why:'C. perfringens food poisoning is caused by a pore-forming enterotoxin that binds claudin receptors at intestinal tight junctions. Lecithinase is the gas gangrene toxin, and EF-2 inactivation belongs to diphtheria toxin and Pseudomonas exotoxin A.'
  },
  {
    id:'BAC3-094', m:'m4', area:'C. difficile: the antibiotic-associated cycle', level:'concept',
    stem:'Fidaxomicin is unavailable for a patient with a first episode of C. difficile infection. Which alternative is recommended?',
    options:['Oral vancomycin', 'IV vancomycin', 'Clindamycin', 'Ciprofloxacin'],
    answer:0,
    why:'Fidaxomicin is preferred for a first episode, and oral vancomycin is the recommended alternative. IV vancomycin does not reach the colon, and clindamycin and ciprofloxacin are high-risk causes of the disease.'
  },
  {
    id:'BAC3-095', m:'m4', area:'C. difficile: the antibiotic-associated cycle', level:'application',
    stem:'Staff are caring for a patient with C. difficile infection. Which hand hygiene method is appropriate after contact?',
    options:['Washing with soap and water', 'Using an alcohol-based hand rub', 'Wearing gloves and skipping handwashing', 'Rinsing with water alone'],
    answer:0,
    why:'Alcohol hand rubs do not kill C. difficile spores, so hands are washed with soap and water, together with gloves and gowns and sporicidal cleaning of the room.'
  },
  {
    id:'BAC3-096', m:'m4', area:'Listeria and diphtheria', level:'concept',
    stem:'Diphtheria toxin shuts down protein synthesis by ADP-ribosylating which target?',
    options:['Elongation factor 2 (EF-2)', 'The Gs regulatory protein', 'The Gi regulatory protein', 'The adenylate cyclase enzyme'],
    answer:0,
    why:'Diphtheria toxin ADP-ribosylates EF-2, the same target as Pseudomonas exotoxin A. ADP-ribosylation of Gs is cholera toxin, and of Gi is pertussis toxin.'
  },
  {
    id:'BAC3-097', m:'m4', area:'Listeria and diphtheria', level:'concept',
    stem:'Which Listeria monocytogenes surface protein lets it attach to and enter intestinal cells?',
    options:['Internalin', 'Listeriolysin', 'Protein A', 'M protein'],
    answer:0,
    why:'Internalin lets Listeria attach to and enter human cells. Listeriolysin acts later, letting it escape the phagosome; protein A belongs to S. aureus, and M protein belongs to group A strep.'
  },
  {
    id:'BAC3-098', m:'m5', area:'E. coli: ETEC vs EHEC', level:'concept',
    stem:'Which ETEC product stimulates adenylate cyclase and raises intracellular cAMP?',
    options:['Heat-labile toxin (LT)', 'Heat-stable toxin (ST)', 'Shiga toxin', 'Exfoliatin'],
    answer:0,
    why:'The heat-labile toxin (LT) stimulates adenylate cyclase and raises cAMP, causing watery diarrhea. The heat-stable toxin (ST) acts through guanylate cyclase and cGMP, and Shiga toxin belongs to EHEC.'
  },
  {
    id:'BAC3-099', m:'m5', area:'E. coli: ETEC vs EHEC', level:'application',
    stem:'A patient with bloody diarrhea from E. coli O157:H7 asks to take loperamide. Why should this be discouraged?',
    options:['Anti-motility drugs can precipitate hemolytic uremic syndrome', 'Anti-motility drugs inactivate oral rehydration solutions', 'Anti-motility drugs raise the Shiga toxin dose ingested', 'Anti-motility drugs cause pseudomembranes to form'],
    answer:0,
    why:'Slowing gut transit can precipitate hemolytic uremic syndrome, so anti-motility drugs are avoided in EHEC infection. Management is rehydration, with supportive therapy such as dialysis if HUS develops.'
  },
  {
    id:'BAC3-100', m:'m5', area:'Salmonella, Shigella & Klebsiella', level:'application',
    stem:'A traveler returns with sustained fever, abdominal pain, and rose spots, and later becomes a chronic gallbladder carrier. Which organism is responsible?',
    options:['Salmonella Typhi', 'Non-typhoidal Salmonella', 'Shigella dysenteriae', 'Vibrio cholerae'],
    answer:0,
    why:'Sustained fever, abdominal pain, rose spots, and later gallbladder carriage describe typhoid fever, caused by S. Typhi; a typhoid vaccine is advised for travelers. Non-typhoidal Salmonella (poultry, eggs, reptiles) causes gastroenteritis instead, Shigella causes bloody diarrhea, and Vibrio cholerae causes watery diarrhea without carriage in the gallbladder.'
  },
  {
    id:'BAC3-101', m:'m5', area:'Salmonella, Shigella & Klebsiella', level:'integration',
    stem:'A stool isolate is a non-lactose fermenter, oxidase-negative, nonmotile, and H2S-negative. Which organism fits these results?',
    options:['Shigella', 'Salmonella', 'Escherichia coli', 'Pseudomonas aeruginosa'],
    answer:0,
    why:'Non-lactose fermentation excludes E. coli, and oxidase-negative excludes Pseudomonas. Salmonella is H2S-positive, while Shigella is nonmotile and H2S-negative.'
  },
  {
    id:'BAC3-102', m:'m5', area:'Vibrio, Campylobacter & H. pylori', level:'concept',
    stem:'Cholera toxin raises cAMP by ADP-ribosylating and locking on which G protein?',
    options:['Gs', 'Gi', 'Gq', 'Ras'],
    answer:0,
    why:'Cholera toxin ADP-ribosylates Gs and locks it on, so cAMP stays high and profuse rice-water diarrhea results. Pertussis toxin acts on Gi instead.'
  },
  {
    id:'BAC3-103', m:'m5', area:'Vibrio, Campylobacter & H. pylori', level:'application',
    stem:'Two weeks after gastroenteritis linked to undercooked poultry, a patient develops ascending limb weakness. Which preceding organism is the likely trigger?',
    options:['Campylobacter jejuni', 'Vibrio cholerae', 'Shigella dysenteriae', 'Klebsiella pneumoniae'],
    answer:0,
    why:'Campylobacter jejuni infection can be followed by Guillain-Barré syndrome (and reactive arthritis). It is linked to poultry and unpasteurized milk, and the other organisms are not associated with this complication.'
  },
  {
    id:'BAC3-104', m:'m5', area:'Where the enteric bacteria strike', level:'integration',
    stem:'A patient has fever and bloody diarrhea. Which mechanism and site fit this presentation?',
    options:['Invasion or Shiga toxin affecting the colon', 'A toxin acting on the small intestine without invasion', 'Urease-mediated injury of the stomach lining', 'Overgrowth after antibiotics in the small intestine'],
    answer:0,
    why:'Bloody diarrhea points to invasion or Shiga toxin in the colon (Shigella, Salmonella, Campylobacter, EHEC). Watery diarrhea is the toxin pattern of the small intestine, and urease-mediated injury describes H. pylori in the stomach.'
  },
  {
    id:'BAC3-105', m:'m6', area:'Pseudomonas: the opportunist', level:'concept',
    stem:'How does Pseudomonas exotoxin A cause tissue necrosis?',
    options:['It blocks protein synthesis by modifying EF-2', 'It cleaves desmoglein in skin desmosomes', 'It locks the Gs protein on to raise cAMP', 'It breaks down IgA on mucosal surfaces'],
    answer:0,
    why:'Exotoxin A ADP-ribosylates elongation factor 2 and blocks protein synthesis, the same target as diphtheria toxin. Cleaving desmoglein is exfoliatin, locking on Gs is cholera toxin, and IgA breakdown is IgA protease.'
  },
  {
    id:'BAC3-106', m:'m6', area:'Pseudomonas: the opportunist', level:'application',
    stem:'Which patient group is at highest risk of chronic Pseudomonas aeruginosa lung infection?',
    options:['Patients with cystic fibrosis', 'Patients who had a splenectomy', 'Patients who inject drugs', 'Patients with sickle cell disease'],
    answer:0,
    why:'P. aeruginosa chronically infects the lungs of many adults with cystic fibrosis. Its slime layer helps it adhere to mucous membranes and avoid antibodies.'
  },
  {
    id:'BAC3-107', m:'m6', area:'H. influenzae & B. pertussis: vaccine-preventable', level:'concept',
    stem:'Which Haemophilus influenzae serotype is the most important, and is the target of the conjugate vaccine?',
    options:['Type b', 'Type a', 'Type c', 'Type d'],
    answer:0,
    why:'The type b serotype, defined by its capsular polysaccharide, is the most important and the most antigenic. Conjugate vaccination reduced H. influenzae meningitis in children.'
  },
  {
    id:'BAC3-108', m:'m6', area:'H. influenzae & B. pertussis: vaccine-preventable', level:'application',
    stem:'A child has H. influenzae type b meningitis. Which drug is used as prophylaxis for close contacts?',
    options:['Rifampin', 'Azithromycin', 'Doxycycline', 'Amoxicillin'],
    answer:0,
    why:'Rifampin is the prophylaxis for contacts of H. influenzae meningitis. Azithromycin is the contact prophylaxis for pertussis, a similar-looking pairing that is easy to swap.'
  },
  {
    id:'BAC3-109', m:'m6', area:'H. influenzae & B. pertussis: vaccine-preventable', level:'concept',
    stem:'Which vaccine is recommended during pregnancy to protect the newborn from pertussis?',
    options:['Tdap', 'DTaP', 'MenACWY', 'PCV20'],
    answer:0,
    why:'Tdap is recommended in each pregnancy so maternal antibodies protect the newborn. DTaP is the childhood series, and MenACWY and PCV20 protect against meningococcus and pneumococcus.'
  },
  {
    id:'BAC3-110', m:'m6', area:'Tularemia and plague: zoonotic hazards', level:'concept',
    stem:'Which antibiotic is a first-line choice for plague caused by Yersinia pestis?',
    options:['Gentamicin', 'Penicillin G', 'Cefazolin', 'Clindamycin'],
    answer:0,
    why:'Gentamicin or a fluoroquinolone is first-line for plague, with doxycycline as an alternative. Streptomycin is not widely available in the United States, and beta-lactams and clindamycin are not standard therapy.'
  },
  {
    id:'BAC3-111', m:'m6', area:'Anaerobes & the encapsulated-organism synthesis', level:'concept',
    stem:'Why are aminoglycosides such as gentamicin ineffective against anaerobes?',
    options:['Their uptake into bacterial cells depends on oxygen', 'Anaerobes destroy them with beta-lactamase', 'Anaerobes lack the ribosome they bind', 'They cannot penetrate abscess walls'],
    answer:0,
    why:'Aminoglycoside uptake into bacterial cells requires oxygen, so these drugs fail against anaerobes and in oxygen-free abscesses. Metronidazole, clindamycin, and penicillin are among the drugs that work, with drainage of the abscess.'
  }
];
