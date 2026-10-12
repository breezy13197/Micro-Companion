// banks/viruses3.js
// Viruses III · Herpes to Flu
// Last edited 2026-10-12 with BankBridge v1.0.
// Question IDs are permanent: never renumber them, never reuse a retired one.

var TOPIC_ID    = 'viruses3';
var TOPIC_TITLE = 'Viruses III · Herpes to Flu';

var CHECKPOINTS = {
  c1a: {
    options: [
      'Matrix protein M1',
      'Tegument',
      'Fiber protein',
      'Core protein'
    ],
    answer: 1,
    why: 'The tegument associates the nucleocapsid with the envelope and carries regulatory proteins.'
  },
  c1b: {
    options: [
      'Linear double-stranded DNA',
      'Circular double-stranded DNA',
      'Segmented negative-sense RNA',
      'Single-stranded positive-sense RNA'
    ],
    answer: 0,
    why: 'Herpesviruses carry linear dsDNA inside an icosahedral capsid. Circular dsDNA belongs to HPV.'
  },
  c1c: {
    options: [
      'Cytoplasm',
      'Endoplasmic reticulum',
      'Mitochondrion',
      'Nucleus'
    ],
    answer: 3,
    why: 'Herpesviruses replicate in the nucleus, in contrast to poxviruses, which replicate in the cytoplasm.'
  },
  c2a: {
    options: [
      'Viral DNA integrated into host chromosomes with full lytic gene expression',
      'Linear viral DNA inside assembled virions',
      'Circular viral DNA that is separate from host chromosomes, with LATs transcribed',
      'Viral RNA copied into host DNA by reverse transcriptase'
    ],
    answer: 2,
    why: 'Latent HSV DNA is circular and unintegrated, and noncoding LATs are the main transcripts.'
  },
  c2b: {
    options: [
      'They encode the capsid',
      'They suppress viral replication',
      'They copy viral DNA',
      'They bind heparan sulfate'
    ],
    answer: 1,
    why: 'LATs are noncoding regulatory RNAs that suppress viral replication and early gene expression.'
  },
  c2c: {
    options: [
      'Latent virus is dormant, so DNA synthesis is idle',
      'Latent virus lacks a nucleus',
      'Acyclovir enters dying cells alone',
      'Acyclovir is destroyed by LATs'
    ],
    answer: 0,
    why: 'Acyclovir stops viral DNA synthesis, and latent virus is not replicating.'
  },
  c3a: {
    options: [
      'Cellular DNA polymerase',
      'Viral DNA polymerase',
      'Viral protease',
      'Viral thymidine kinase'
    ],
    answer: 3,
    why: 'Viral thymidine kinase starts activation, and cellular kinases add the next two phosphates. This makes the drug selective for infected cells.'
  },
  c3b: {
    options: [
      'It needs activation by viral thymidine kinase',
      'It is a nucleoside chain terminator',
      'It blocks viral DNA polymerase directly, without activation',
      'It blocks the viral terminase complex'
    ],
    answer: 2,
    why: 'Foscarnet works directly on the viral polymerase, so it skips the activation step. It is used when HSV is acyclovir resistant.'
  },
  c3c: {
    options: [
      'Wait for lesions to appear',
      'Start intravenous acyclovir immediately',
      'Start oral valacyclovir at home',
      'Give the vaccine'
    ],
    answer: 1,
    why: 'Neonatal HSV is an emergency, and IV acyclovir starts immediately. No HSV vaccine exists.'
  },
  c4a: {
    options: [
      'Shingles (zoster)',
      'Chickenpox',
      'Mononucleosis',
      'Cold sores'
    ],
    answer: 0,
    why: 'Primary VZV infection causes chickenpox. Reactivation from latency causes zoster in a dermatome.'
  },
  c4b: {
    options: [
      'Zoster is harmless to contacts',
      'Zoster spreads through blood alone',
      'Zoster is spread by mosquito',
      'Zoster vesicles can pass chickenpox to a susceptible contact'
    ],
    answer: 3,
    why: 'Zoster vesicle fluid is infectious. A susceptible contact develops chickenpox, not shingles.'
  },
  c4c: {
    options: [
      'Varivax',
      'Zostavax',
      'Shingrix',
      'JYNNEOS'
    ],
    answer: 2,
    why: 'Shingrix uses a recombinant envelope glycoprotein. Varivax and Zostavax are live attenuated, and Zostavax was discontinued in the U.S.'
  },
  c5a: {
    options: [
      'Neurons',
      'B lymphocytes',
      'Hepatocytes',
      'Respiratory epithelium'
    ],
    answer: 1,
    why: 'EBV infects B lymphocytes and can remain latent in them.'
  },
  c5b: {
    options: [
      'Supportive care, with recovery in 2 to 3 weeks',
      'Intravenous ganciclovir',
      'Shingrix',
      'Letermovir prophylaxis'
    ],
    answer: 0,
    why: 'Uncomplicated mononucleosis resolves spontaneously, and no EBV vaccine or antiviral is part of routine care.'
  },
  c6a: {
    options: [
      'Healthy school-age children',
      'Healthy young adults',
      'Healthy older adults',
      'Transplant recipients on immunosuppression'
    ],
    answer: 3,
    why: 'CMV is asymptomatic in healthy people and causes serious disease when cell-mediated immunity is diminished.'
  },
  c6b: {
    options: [
      'Viral thymidine kinase',
      'Cellular polymerase',
      'Viral UL97 kinase',
      'Viral terminase'
    ],
    answer: 2,
    why: 'The CMV UL97 kinase phosphorylates ganciclovir, which is given IV or as the oral prodrug valganciclovir.'
  },
  c6c: {
    options: [
      'Maribavir',
      'Letermovir',
      'Foscarnet',
      'Acyclovir'
    ],
    answer: 1,
    why: 'Letermovir is used for prophylaxis in transplant recipients. Maribavir inhibits pUL97, and foscarnet inhibits DNA polymerase.'
  },
  c7a: {
    options: [
      'Poxviruses',
      'Herpesviruses',
      'Papillomaviruses',
      'Adenoviruses'
    ],
    answer: 0,
    why: 'Poxviruses are the DNA virus exception because they bring their own transcription machinery.'
  },
  c7b: {
    options: [
      'Herpesviruses are circular; papillomaviruses are linear',
      'Each family carries a circular genome',
      'Each family carries a linear genome',
      'Herpesviruses are linear; papillomaviruses are circular'
    ],
    answer: 3,
    why: 'Herpesviruses carry linear dsDNA and papillomaviruses carry circular dsDNA.'
  },
  c7c: {
    options: [
      'A large animal reservoir',
      'Many antigenic variants',
      'A single stable serotype with humans as the sole host',
      'A common asymptomatic carrier state'
    ],
    answer: 2,
    why: 'One stable serotype and a human-only host made vaccination effective, and cases were recognizable.'
  },
  c8a: {
    options: [
      'Vesicle',
      'Pustule',
      'Cauliflower-like wart',
      'Umbilicated papule'
    ],
    answer: 1,
    why: 'Smallpox causes pustules. Vesicles belong to HSV and VZV, and warts to HPV.'
  },
  c8b: {
    options: [
      'Fleshy papule with an umbilicated center',
      'Pustule',
      'Vesicle',
      'Flat purple lesion'
    ],
    answer: 0,
    why: 'Molluscum is a poxvirus with fleshy umbilicated papules. The flat or nodular purple lesion belongs to HHV-8.'
  },
  c9a: {
    options: [
      'E6',
      'L1',
      'E2',
      'E7'
    ],
    answer: 3,
    why: 'E7 inactivates pRb and E6 degrades p53. Together they allow malignant transformation.'
  },
  c9b: {
    options: [
      'HPV-6 and HPV-11',
      'HPV-1 and HPV-4',
      'HPV-16 and HPV-18',
      'HPV-2 and HPV-3'
    ],
    answer: 2,
    why: 'High-risk HPV-16 and HPV-18 cause most cervical cancers.'
  },
  c9c: {
    options: [
      'It clears existing infection',
      'It prevents new infections with the included types',
      'It treats cervical lesions',
      'It replaces cervical screening'
    ],
    answer: 1,
    why: 'Gardasil 9 is prophylactic, and existing infection or disease needs other care.'
  },
  c10a: {
    options: [
      'Hemagglutinin',
      'Neuraminidase',
      'M1 matrix protein',
      'Nucleoprotein'
    ],
    answer: 0,
    why: 'Hemagglutinin attaches to receptors, and neuraminidase frees new virions.'
  },
  c10b: {
    options: [
      'Two H and two N',
      'Three H and one N',
      'Eight H and eight N',
      'One H and one N'
    ],
    answer: 3,
    why: 'Each virus carries one H subtype and one N subtype, such as H3N2.'
  },
  c10c: {
    options: [
      'Hemagglutinin subtype',
      'Neuraminidase subtype',
      'The internal ribonucleoprotein',
      'Envelope lipid'
    ],
    answer: 2,
    why: 'Type depends on the internal ribonucleoprotein, and subtype depends on H and N.'
  },
  c11a: {
    options: [
      'Reassortment (shift)',
      'Point mutations (drift)',
      'Integration',
      'Lysogeny'
    ],
    answer: 1,
    why: 'Drift is minor change from gradual mutation and explains why seasonal vaccine strains are reviewed.'
  },
  c11b: {
    options: [
      'Reassortment (shift)',
      'Point mutation (drift)',
      'Splicing',
      'Integration'
    ],
    answer: 0,
    why: 'Antigenic shift results from reassortment of entire segments.'
  },
  c11c: {
    options: [
      'A single RNA molecule',
      'A circular DNA genome',
      'A DNA provirus',
      'Eight RNA segments'
    ],
    answer: 3,
    why: 'A segmented genome lets coinfecting viruses exchange segments as units.'
  },
  c12a: {
    options: [
      'Virus replicating in muscle',
      'Bacterial toxin',
      'Circulating cytokines',
      'Autoantibodies'
    ],
    answer: 2,
    why: 'Influenza stays in the respiratory tract and cytokines cause systemic symptoms.'
  },
  c12b: {
    options: [
      'H5N1 avian influenza',
      '2009 swine-origin H1N1',
      'Influenza C',
      'Influenza D'
    ],
    answer: 1,
    why: 'The 2009 pandemic H1N1 virus carried segments from North American swine, Eurasian swine, North American avian, and human viruses.'
  },
  c13a: {
    options: [
      'Release of new virions',
      'Entry of the virion',
      'Packaging of genome segments',
      'Transcription of viral mRNA'
    ],
    answer: 0,
    why: 'Oseltamivir inhibits neuraminidase, so new virions remain attached.'
  },
  c13b: {
    options: [
      'Neuraminidase',
      'Hemagglutinin',
      'Viral protease',
      'Cap-dependent endonuclease'
    ],
    answer: 3,
    why: 'Baloxavir stops the endonuclease that viral mRNA synthesis needs.'
  },
  c14a: {
    options: [
      'Intravenous infusion',
      'Oral capsule',
      'Oral inhalation',
      'Intramuscular injection'
    ],
    answer: 2,
    why: 'Zanamivir is inhaled, which explains the concern in reactive airway disease.'
  },
  c14b: {
    options: [
      'Inhaled zanamivir',
      'Oral oseltamivir or intravenous peramivir',
      'An HSV DNA polymerase inhibitor',
      'A varicella vaccine'
    ],
    answer: 1,
    why: 'Oral and IV options avoid airway delivery. A real prescribing decision depends on a prescriber and current guidance.'
  },
  c15a: {
    options: [
      'MDCK (Madin–Darby canine kidney) cells',
      'Chicken eggs',
      'Insect cells',
      'Human neurons'
    ],
    answer: 0,
    why: 'MDCK cells host the cell-culture vaccine virus, which is then inactivated.'
  },
  c15b: {
    options: [
      'Live attenuated vaccine',
      'Inactivated egg vaccine',
      'Cell-culture inactivated vaccine',
      'Recombinant HA vaccine'
    ],
    answer: 3,
    why: 'The recombinant platform uses insect cells that express the HA gene, and the purified HA is the antigen.'
  },
  c16a: {
    options: [
      'Parainfluenza virus',
      'RSV',
      'Influenza virus',
      'Coronavirus'
    ],
    answer: 2,
    why: 'Influenza has eight negative-sense RNA segments, and the other viruses in the set have a single RNA molecule.'
  },
  c16b: {
    options: [
      'Rhinovirus',
      'Adenovirus',
      'RSV',
      'Coronavirus'
    ],
    answer: 1,
    why: 'Adenovirus is a nonenveloped dsDNA virus with fibers at its vertices.'
  },
  c16c: {
    options: [
      '33 °C',
      '37 °C',
      '40 °C',
      '20 °C'
    ],
    answer: 0,
    why: 'Rhinovirus replicates best at nasal temperature, about 33 °C.'
  },
  c17a: {
    options: [
      'G protein',
      'Nucleoprotein',
      'Matrix protein',
      'F protein'
    ],
    answer: 3,
    why: 'The F protein fuses neighboring cell membranes into multinucleated giant cells.'
  },
  c17b: {
    options: [
      'HA and NA',
      'G and F',
      'HN and F',
      'E6 and E7'
    ],
    answer: 2,
    why: 'Parainfluenza has HN for attachment and neuraminidase activity and F for fusion.'
  },
  c18a: {
    options: [
      'Active immunity from the infant’s own response',
      'Passive immunity from maternal antibody',
      'Immunity from a live vaccine strain',
      'Protection that depends on ribavirin'
    ],
    answer: 1,
    why: 'Maternal vaccination passes antibody to the infant before birth.'
  },
  c18b: {
    options: [
      'Nirmatrelvir-ritonavir',
      'Remdesivir',
      'Molnupiravir',
      'Tecovirimat'
    ],
    answer: 0,
    why: 'Nirmatrelvir-ritonavir blocks the viral protease. Remdesivir is an IV nucleotide analog, and molnupiravir causes viral mutagenesis.'
  },
  c18c: {
    options: [
      'Chickenpox',
      'Infectious mononucleosis',
      'Neonatal HSV',
      'RSV bronchiolitis'
    ],
    answer: 3,
    why: 'RSV stays in the respiratory tract. Severity comes from local infection and immunopathology.'
  }
};

var CARDS = [
  { id:'V3-CARD-01', t:'Tegument', d:'The layer of a herpesvirion between the nucleocapsid and the envelope. It contains regulatory proteins.' },
  { id:'V3-CARD-02', t:'Herpesvirus genome', d:'Linear double-stranded DNA in an icosahedral capsid with a lipoprotein envelope. Replication happens in the nucleus.' },
  { id:'V3-CARD-03', t:'HSV latency', d:'Circular, unintegrated HSV DNA persists in neurons. Latency-associated transcripts (LATs) suppress viral replication.' },
  { id:'V3-CARD-04', t:'Latency-associated transcripts (LATs)', d:'Noncoding regulatory RNAs made during latency. They suppress viral replication and early gene expression.' },
  { id:'V3-CARD-05', t:'Heparan sulfate', d:'The cell-surface proteoglycan that HSV-1 binds during attachment.' },
  { id:'V3-CARD-06', t:'Acyclovir', d:'Nucleoside analog activated first by viral thymidine kinase, then by cellular kinases. Its triphosphate is an obligate chain terminator of viral DNA synthesis.' },
  { id:'V3-CARD-07', t:'Why acyclovir is selective', d:'Activation happens mainly in infected cells, so uninfected cells are largely spared.' },
  { id:'V3-CARD-08', t:'Foscarnet', d:'Blocks viral DNA polymerase directly and needs no activation. Used for acyclovir-resistant HSV and for CMV.' },
  { id:'V3-CARD-09', t:'Valacyclovir and famciclovir', d:'Oral drugs that suppress recurrent HSV lesions, especially for HSV-2. No HSV vaccine exists.' },
  { id:'V3-CARD-10', t:'Neonatal herpes', d:'Acquired mostly at delivery, with skin/eye/mouth, CNS, or disseminated forms. Start IV acyclovir immediately.' },
  { id:'V3-CARD-11', t:'Tzanck smear', d:'Shows multinucleated giant cells from HSV and VZV. It is a cytopathic effect, not a definitive species test.' },
  { id:'V3-CARD-12', t:'Varicella-zoster virus (VZV)', d:'Primary infection causes chickenpox. Latency in nerve ganglia lets it reactivate as shingles in a dermatome.' },
  { id:'V3-CARD-13', t:'Zoster and household contacts', d:'Zoster vesicles contain infectious virus and can transmit chickenpox to non-immune contacts.' },
  { id:'V3-CARD-14', t:'Varivax', d:'Live attenuated vaccine that prevents chickenpox in children. Not for people who are immunocompromised.' },
  { id:'V3-CARD-15', t:'Shingrix', d:'Recombinant envelope glycoprotein vaccine to prevent zoster in adults 50 and older and in adults 19 and older who are immunocompromised. Two doses, 2–6 months apart.' },
  { id:'V3-CARD-16', t:'Zostavax', d:'Live attenuated zoster vaccine that was discontinued in the U.S. in November 2020.' },
  { id:'V3-CARD-17', t:'Epstein-Barr virus (EBV)', d:'Infects B lymphocytes, spreads by saliva, and causes infectious mononucleosis and hairy leukoplakia. It can remain latent in B cells.' },
  { id:'V3-CARD-18', t:'Infectious mononucleosis', d:'Fever, sore throat, lymphadenopathy, splenomegaly, and hepatitis. Uncomplicated cases need supportive care and resolve in 2–3 weeks.' },
  { id:'V3-CARD-19', t:'Cytomegalovirus (CMV)', d:'Most common infectious cause of birth defects in the U.S. Usually asymptomatic unless cell-mediated immunity is diminished.' },
  { id:'V3-CARD-20', t:'Ganciclovir and valganciclovir', d:'Activated by viral UL97 kinase. Used for CMV retinitis, pneumonia, and congenital CMV.' },
  { id:'V3-CARD-21', t:'Letermovir', d:'Blocks the viral terminase (DNA packaging) complex. Used as prophylaxis in transplant recipients.' },
  { id:'V3-CARD-22', t:'Maribavir', d:'Inhibits the viral pUL97 enzyme. Used for post-transplant CMV that does not respond to available treatment.' },
  { id:'V3-CARD-23', t:'Poxviruses', d:'Largest, most complex viruses. They replicate in the cytoplasm and carry a DNA-dependent RNA polymerase.' },
  { id:'V3-CARD-24', t:'Why smallpox was eradicated', d:'Single stable serotype, human-only host, rapid protection after vaccination, clinical recognition, and no carrier state.' },
  { id:'V3-CARD-25', t:'Mpox', d:'An orthopoxvirus related to smallpox and vaccinia. JYNNEOS is given as 2 subcutaneous doses, 28 days apart.' },
  { id:'V3-CARD-26', t:'Tecovirimat', d:'Approved for smallpox and investigational for mpox. Two trials did not show faster lesion resolution.' },
  { id:'V3-CARD-27', t:'Vesicle', d:'The typical lesion of HSV-1, HSV-2, and VZV.' },
  { id:'V3-CARD-28', t:'Pustule', d:'The typical lesion of smallpox.' },
  { id:'V3-CARD-29', t:'Molluscum contagiosum', d:'Poxvirus that causes fleshy papules with umbilicated centers.' },
  { id:'V3-CARD-30', t:'Human papillomavirus (HPV)', d:'Nonenveloped icosahedral virus with circular dsDNA. More than 200 types exist, and it is the most common sexually transmitted infection in the U.S.' },
  { id:'V3-CARD-31', t:'HPV-6 and HPV-11', d:'Low-risk types that cause genital warts (condylomata acuminata).' },
  { id:'V3-CARD-32', t:'HPV-16 and HPV-18', d:'High-risk types estimated to cause roughly 70% of cervical cancers.' },
  { id:'V3-CARD-33', t:'E6 and E7', d:'HPV early proteins. E6 inactivates p53 and E7 inactivates pRb, allowing malignant transformation.' },
  { id:'V3-CARD-34', t:'E1 and E2', d:'HPV early proteins that drive replication and transcription.' },
  { id:'V3-CARD-35', t:'L1 and L2', d:'HPV late genes that encode capsid proteins.' },
  { id:'V3-CARD-36', t:'Gardasil 9', d:'Protein subunit vaccine against 9 HPV types (2 wart types and 7 cancer types). It prevents new infection and does not treat existing disease.' },
  { id:'V3-CARD-37', t:'HPV vaccine schedule', d:'Start before age 15: 2 doses, 6–12 months apart. Start at 15–26 or immunocompromised: 3 doses. Ages 27–45: shared clinical decision-making.' },
  { id:'V3-CARD-38', t:'Hemagglutinin (H)', d:'Influenza spike protein that binds host cell receptors. A major surface antigen.' },
  { id:'V3-CARD-39', t:'Neuraminidase (N)', d:'Influenza enzyme that breaks down neuraminic acid so virions can leave the cell. It also breaks down the mucus layer after inhalation.' },
  { id:'V3-CARD-40', t:'Influenza genome', d:'Segmented, single-stranded, negative-sense RNA with a helical nucleocapsid and an envelope. The virion carries an RNA polymerase.' },
  { id:'V3-CARD-41', t:'Influenza types A to D', d:'Type is set by the internal ribonucleoprotein. Subtype is set by H and N.' },
  { id:'V3-CARD-42', t:'NS-1', d:'Nonstructural protein 1 of influenza. A virulence factor that can inhibit interferon production.' },
  { id:'V3-CARD-43', t:'Antigenic drift', d:'Minor change from gradual point mutations. It explains seasonal change in H and N.' },
  { id:'V3-CARD-44', t:'Antigenic shift', d:'Major change from reassortment, in which whole RNA segments are exchanged between viruses.' },
  { id:'V3-CARD-45', t:'Reassortment', d:'Exchange of whole RNA segments between influenza viruses that infect the same cell.' },
  { id:'V3-CARD-46', t:'2009 swine-origin H1N1', d:'Quadruple reassortant of North American swine, Eurasian swine, North American avian, and human viruses.' },
  { id:'V3-CARD-47', t:'Influenza pathogenesis', d:'Respiratory epithelium is infected and viremia is rare. Myalgia results from circulating cytokines.' },
  { id:'V3-CARD-48', t:'Oseltamivir', d:'Oral neuraminidase inhibitor active against influenza A and B.' },
  { id:'V3-CARD-49', t:'Zanamivir', d:'Inhaled neuraminidase inhibitor. Avoid with asthma or COPD because of bronchospasm risk.' },
  { id:'V3-CARD-50', t:'Peramivir', d:'Intravenous neuraminidase inhibitor.' },
  { id:'V3-CARD-51', t:'Baloxavir', d:'Oral inhibitor of cap-dependent endonuclease, which acts during viral mRNA synthesis.' },
  { id:'V3-CARD-52', t:'Egg-based influenza vaccines', d:'Inactivated or live attenuated temperature-sensitive vaccines grown in fertilized chicken eggs.' },
  { id:'V3-CARD-53', t:'MDCK cells', d:'Madin–Darby canine kidney cells used to grow the cell-culture influenza vaccine virus.' },
  { id:'V3-CARD-54', t:'Recombinant influenza vaccine', d:'Hemagglutinin made in insect cells from a recombinant virus. Purified HA is the antigen.' },
  { id:'V3-CARD-55', t:'Trivalent influenza vaccine', d:'Contains influenza A(H1N1), influenza A(H3N2), and influenza B components. Composition is reviewed each season.' },
  { id:'V3-CARD-56', t:'Parainfluenza virus', d:'Paramyxovirus with HN and F surface proteins. Causes croup (acute laryngotracheobronchitis). No vaccine or antiviral.' },
  { id:'V3-CARD-57', t:'Respiratory syncytial virus (RSV)', d:'Pneumoviridae member with G attachment and F fusion proteins. Leading cause of infant bronchiolitis and pneumonia.' },
  { id:'V3-CARD-58', t:'Syncytium', d:'A multinucleated giant cell formed when a viral fusion protein merges neighboring cell membranes.' },
  { id:'V3-CARD-59', t:'RSV prevention', d:'Infants: maternal Abrysvo at 32–36 weeks, or nirsevimab or clesrovimab. Adults: one dose of a licensed vaccine for adults 75 and older and for adults 50–74 at increased risk.' },
  { id:'V3-CARD-60', t:'Coronavirus', d:'Enveloped, nonsegmented, positive-sense RNA virus. The spike protein binds ACE-2 and mediates fusion.' },
  { id:'V3-CARD-61', t:'COVID-19 antivirals', d:'Nirmatrelvir-ritonavir (oral protease inhibitor), remdesivir (IV nucleotide analog), molnupiravir (oral alternative that causes mutagenesis).' },
  { id:'V3-CARD-62', t:'Rhinovirus', d:'Picornavirus with a nonenveloped positive-sense RNA genome. More than 100 serotypes, best replication at 33 °C, no vaccine or approved antiviral.' },
  { id:'V3-CARD-63', t:'Adenovirus', d:'Nonenveloped icosahedral dsDNA virus with a fiber at each of 12 vertices. A live oral vaccine for types 4 and 7 is available for U.S. military personnel.' },
  { id:'V3-CARD-64', t:'Local versus systemic infection', d:'Influenza, RSV, and rhinovirus stay in the respiratory tract. Chickenpox, EBV, and neonatal HSV have systemic features.' }
];

var POOL = [
  {
    id: 'V3-M1-01',
    m: 'm1',
    area: 'Herpesvirion structure',
    level: 'concept',
    stem: 'Which structural features are shared by herpesvirus virions?',
    options: [
      'A lipoprotein envelope around an icosahedral capsid with linear dsDNA',
      'A naked helical nucleocapsid with linear dsDNA',
      'A segmented single-stranded RNA genome in a helical capsid',
      'A circular dsDNA genome inside a nonenveloped icosahedral capsid'
    ],
    answer: 0,
    why: 'Herpesviruses are enveloped, icosahedral, linear double-stranded DNA viruses, 120–200 nm across. Only poxviruses are larger.'
  },
  {
    id: 'V3-M1-02',
    m: 'm1',
    area: 'Herpesvirion structure',
    level: 'concept',
    stem: 'In a herpesvirion, which layer lies between the capsid and the envelope?',
    options: [
      'The nuclear membrane',
      'The capsomere ring',
      'The glycoprotein spike layer',
      'The tegument'
    ],
    answer: 3,
    why: 'The tegument associates the nucleocapsid with the envelope and carries regulatory proteins. Glycoprotein spikes sit in the envelope itself.'
  },
  {
    id: 'V3-M1-03',
    m: 'm1',
    area: 'Herpesvirion structure',
    level: 'application',
    stem: 'A detergent dissolves the outer lipid layer of a herpesvirion. What infectivity change is expected?',
    options: [
      'It rises, because the exposed capsid reaches the nucleus faster',
      'It stays the same, because the capsid carries the entry proteins',
      'It falls, because the envelope glycoproteins that mediate entry are lost',
      'It stays the same, because the tegument replaces the envelope'
    ],
    answer: 2,
    why: 'Herpesviruses are enveloped. Entry depends on envelope glycoproteins, so damaging the lipid envelope reduces infectivity. The answer is qualitative: no infection percentage is implied.'
  },
  {
    id: 'V3-M1-04',
    m: 'm1',
    area: 'Herpesvirion structure',
    level: 'application',
    stem: 'Where in the host cell does a herpesvirus replicate its DNA?',
    options: [
      'In the cytoplasm, using a virion RNA polymerase',
      'In the nucleus',
      'In the Golgi apparatus',
      'In the mitochondria'
    ],
    answer: 1,
    why: 'Herpesviruses replicate in the nucleus, with a viral DNA polymerase encoded in their own genome. Replication in the cytoplasm is the exception seen in poxviruses.'
  },
  {
    id: 'V3-M1-05',
    m: 'm1',
    area: 'Herpesvirion structure',
    level: 'integration',
    stem: 'Herpesviruses and poxviruses are large enveloped DNA viruses. Which property identifies the herpesvirus?',
    options: [
      'Replication in the nucleus using host RNA polymerase',
      'Replication in the cytoplasm with a virion RNA polymerase',
      'A disc-shaped core inside a double membrane',
      'A nonenveloped icosahedral capsid'
    ],
    answer: 0,
    why: 'Herpesviruses transcribe in the nucleus with host RNA polymerase. Poxviruses carry their own DNA-dependent RNA polymerase and replicate in the cytoplasm.'
  },
  {
    id: 'V3-M1-06',
    m: 'm1',
    area: 'HSV latency and reactivation',
    level: 'concept',
    stem: 'In what form does HSV DNA persist in a latently infected neuron?',
    options: [
      'As a provirus integrated into a host chromosome',
      'As linear DNA packaged into new virions',
      'As an RNA copy in the cytoplasm',
      'As separate circular DNA outside the host chromosomes'
    ],
    answer: 3,
    why: 'In latently infected cells, circular HSV DNA stays separate from cellular DNA (an episome) and is transcribed to make latency-associated transcripts.'
  },
  {
    id: 'V3-M1-07',
    m: 'm1',
    area: 'HSV latency and reactivation',
    level: 'concept',
    stem: 'What are latency-associated transcripts (LATs)?',
    options: [
      'Capsid proteins made during latency',
      'Viral enzymes that copy DNA during latency',
      'Noncoding regulatory RNAs made during latency',
      'Envelope glycoproteins that bind heparan sulfate'
    ],
    answer: 2,
    why: 'LATs are noncoding regulatory RNAs. They help suppress viral replication in the latent state.'
  },
  {
    id: 'V3-M1-08',
    m: 'm1',
    area: 'HSV latency and reactivation',
    level: 'application',
    stem: 'A patient has a fresh cold sore full of infectious virions. Which viral state produced them?',
    options: [
      'Latent persistence with LAT expression',
      'Lytic replication after reactivation',
      'Integration of viral DNA into the host chromosome',
      'Persistent viremia in the bloodstream'
    ],
    answer: 1,
    why: 'Infectious virions come from lytic replication. Reactivation means renewed lytic gene expression, driven by complex regulatory changes. It does not mean the LAT region is cut out of the genome.'
  },
  {
    id: 'V3-M1-09',
    m: 'm1',
    area: 'HSV latency and reactivation',
    level: 'application',
    stem: 'Between outbreaks a person feels well and is free of lesions. Where is the HSV genome?',
    options: [
      'In neurons as circular DNA, with LAT expression',
      'In skin cells as newly assembled virions',
      'In the bloodstream as free virions',
      'In lymph nodes as integrated DNA'
    ],
    answer: 0,
    why: 'Between outbreaks the virus is latent: circular episomal DNA persists in neurons and few or no infectious virions are made.'
  },
  {
    id: 'V3-M1-10',
    m: 'm1',
    area: 'HSV latency and reactivation',
    level: 'integration',
    stem: 'An antiviral blocks viral DNA synthesis. Why does it leave the latent genome in neurons unchanged?',
    options: [
      'Latent genomes are integrated and protected by host repair',
      'Neurons pump the drug out of the nucleus',
      'The drug binds to the capsid of mature virions',
      'Latent genomes are idle rather than being copied'
    ],
    answer: 3,
    why: 'Antivirals such as acyclovir act on replicating virus. A latent episome is not being copied, so the drug shortens lesions and shedding but does not cure latency.'
  },
  {
    id: 'V3-M1-11',
    m: 'm1',
    area: 'Acyclovir and foscarnet',
    level: 'concept',
    stem: 'Which enzyme performs the first phosphorylation of acyclovir?',
    options: [
      'Viral DNA polymerase',
      'Host DNA polymerase',
      'Viral thymidine kinase',
      'Host thymidylate synthase'
    ],
    answer: 2,
    why: 'Viral thymidine kinase adds the first phosphate. Cellular kinases add the second and third phosphates.'
  },
  {
    id: 'V3-M1-12',
    m: 'm1',
    area: 'Acyclovir and foscarnet',
    level: 'concept',
    stem: 'How does acyclovir triphosphate stop viral DNA synthesis?',
    options: [
      'It blocks entry through heparan sulfate',
      'It acts as an obligate chain terminator',
      'It degrades viral mRNA',
      'It prevents capsid assembly'
    ],
    answer: 1,
    why: 'Acyclovir triphosphate is incorporated by viral DNA polymerase and ends the growing chain.'
  },
  {
    id: 'V3-M1-13',
    m: 'm1',
    area: 'Acyclovir and foscarnet',
    level: 'application',
    stem: 'An HSV isolate lacks thymidine kinase activity. What is the expected effect on acyclovir?',
    options: [
      'Activation falls, so the drug loses potency',
      'Activation rises, so the drug becomes stronger',
      'Activation is unchanged, because host kinases make the first phosphate',
      'Chain termination increases, because more drug reaches the nucleus'
    ],
    answer: 0,
    why: 'Without viral thymidine kinase the first phosphorylation is missing, so little acyclovir triphosphate forms.'
  },
  {
    id: 'V3-M1-14',
    m: 'm1',
    area: 'Acyclovir and foscarnet',
    level: 'application',
    stem: 'Which antiviral inhibits HSV DNA polymerase directly, without activation by thymidine kinase?',
    options: [
      'Acyclovir',
      'Valacyclovir',
      'Ganciclovir',
      'Foscarnet'
    ],
    answer: 3,
    why: 'Foscarnet blocks the viral DNA polymerase directly and is used when HSV is resistant to acyclovir. Valacyclovir is a prodrug of acyclovir and shares its activation requirement.'
  },
  {
    id: 'V3-M1-15',
    m: 'm1',
    area: 'Acyclovir and foscarnet',
    level: 'integration',
    stem: 'Why does acyclovir spare most uninfected cells?',
    options: [
      'Uninfected cells lack DNA polymerase',
      'Uninfected cells destroy the drug in lysosomes',
      'The first phosphorylation happens mainly in cells making viral thymidine kinase',
      'Uninfected cells exclude the drug at the cell membrane'
    ],
    answer: 2,
    why: 'Activation depends on a viral enzyme, so the active form builds up mainly in infected cells. This is the basis of its selectivity.'
  },
  {
    id: 'V3-M1-16',
    m: 'm1',
    area: 'Acyclovir and foscarnet',
    level: 'integration',
    stem: 'Lesions persist during acyclovir therapy, and the isolate lacks thymidine kinase. Which change fits the mechanism?',
    options: [
      'A longer course of the same drug',
      'Foscarnet, which blocks the polymerase without activation',
      'Valacyclovir, a prodrug converted to acyclovir',
      'Letermovir, which blocks DNA packaging'
    ],
    answer: 1,
    why: 'Switching to a drug that needs no thymidine kinase bypasses the resistance. Letermovir is a CMV agent. This is a classroom vignette, not a prescribing decision.'
  },
  {
    id: 'V3-M1-17',
    m: 'm1',
    area: 'HSV disease and urgency',
    level: 'concept',
    stem: 'How can oral HSV-1 reach the genital tract?',
    options: [
      'Through contact during oral sex',
      'Through airborne respiratory particles',
      'Through contaminated food',
      'Through a blood transfusion'
    ],
    answer: 0,
    why: 'Either HSV type can infect either site. Lesion location does not identify the virus type.'
  },
  {
    id: 'V3-M1-18',
    m: 'm1',
    area: 'HSV disease and urgency',
    level: 'application',
    stem: 'A newborn has skin vesicles and lethargy, and neonatal herpes is suspected. Which decision fits the lecture?',
    options: [
      'Wait for culture results before treating',
      'Give a topical antiviral alone',
      'Give oral suppressive therapy at home',
      'Start IV acyclovir immediately'
    ],
    answer: 3,
    why: 'Neonatal herpes is acquired mostly at delivery and can disseminate or reach the CNS, so IV acyclovir is started immediately. No dose is taught here.'
  },
  {
    id: 'V3-M1-19',
    m: 'm1',
    area: 'HSV disease and urgency',
    level: 'integration',
    stem: 'Which pairing of syndrome and first-line drug matches the lecture?',
    options: [
      'HSV keratoconjunctivitis treated with ganciclovir',
      'HSV encephalitis treated with letermovir',
      'HSV encephalitis treated with acyclovir',
      'Herpes labialis treated with oseltamivir'
    ],
    answer: 2,
    why: 'Encephalitis and systemic HSV disease are treated with acyclovir. Eye infection uses topical antiviral therapy. Ganciclovir, letermovir, and oseltamivir are agents for other viruses.'
  },
  {
    id: 'V3-M2-01',
    m: 'm2',
    area: 'VZV chickenpox and zoster',
    level: 'concept',
    stem: 'Which disease results from primary VZV infection?',
    options: [
      'Shingles',
      'Chickenpox',
      'Infectious mononucleosis',
      'Herpes labialis'
    ],
    answer: 1,
    why: 'Primary VZV infection causes chickenpox. Shingles (zoster) is reactivation of the latent virus.'
  },
  {
    id: 'V3-M2-02',
    m: 'm2',
    area: 'VZV chickenpox and zoster',
    level: 'concept',
    stem: 'How does VZV spread?',
    options: [
      'By airborne particles and contact with vesicle fluid',
      'By the fecal-oral route',
      'By blood exposure',
      'By sexual contact'
    ],
    answer: 0,
    why: 'VZV spreads through breathing in particles from blisters and through direct contact with blister fluid.'
  },
  {
    id: 'V3-M2-03',
    m: 'm2',
    area: 'VZV chickenpox and zoster',
    level: 'application',
    stem: 'A grandfather has painful vesicles along one thoracic dermatome. His grandchild lacks immunity to VZV. What is the risk to the child?',
    options: [
      'The child can acquire shingles directly',
      'The child is protected, because zoster vesicles lack infectious virus',
      'The child can acquire a latent infection without any illness',
      'The child can acquire chickenpox from contact with vesicle fluid'
    ],
    answer: 3,
    why: 'Zoster vesicles contain infectious virus, and zoster can transmit chickenpox to non-immune contacts.'
  },
  {
    id: 'V3-M2-04',
    m: 'm2',
    area: 'VZV chickenpox and zoster',
    level: 'integration',
    stem: 'A child has widespread vesicles on an erythematous base. An adult has vesicles confined to one dermatome. Which pairing is correct?',
    options: [
      'The child has reactivation, and the adult has primary infection',
      'The child has zoster, and the adult has chickenpox',
      'The child has primary infection, and the adult has reactivation',
      'The child and the adult each have a new primary infection'
    ],
    answer: 2,
    why: 'Widespread vesicles fit chickenpox (primary, systemic). Vesicles along one dermatome fit zoster (reactivation, local).'
  },
  {
    id: 'V3-M2-05',
    m: 'm2',
    area: 'VZV chickenpox and zoster',
    level: 'integration',
    stem: 'Which patient is most likely to develop shingles?',
    options: [
      'A child without prior VZV exposure',
      'An older adult who had chickenpox decades ago',
      'A child with a fresh chickenpox exposure',
      'An adult without prior VZV infection'
    ],
    answer: 1,
    why: 'Zoster requires prior VZV infection and latency. Reactivation is more likely as cell-mediated immunity declines with age or immunosuppression.'
  },
  {
    id: 'V3-M2-06',
    m: 'm2',
    area: 'VZV prevention',
    level: 'concept',
    stem: 'Which VZV vaccine is a live attenuated virus given to prevent chickenpox in children?',
    options: [
      'Varivax',
      'Shingrix',
      'Zostavax',
      'Gardasil 9'
    ],
    answer: 0,
    why: 'Varivax is the live attenuated chickenpox vaccine. It is not given to immunocompromised patients.'
  },
  {
    id: 'V3-M2-07',
    m: 'm2',
    area: 'VZV prevention',
    level: 'application',
    stem: 'A 62-year-old adult wants to prevent shingles. Which vaccine fits?',
    options: [
      'Varivax, a live vaccine for children',
      'Zostavax, a live vaccine still marketed in the U.S.',
      'Gardasil 9, a protein subunit vaccine',
      'Shingrix, a recombinant glycoprotein vaccine'
    ],
    answer: 3,
    why: 'Shingrix is given in 2 doses, 2–6 months apart, to adults 50 and older. Zostavax was discontinued in the U.S. in November 2020.'
  },
  {
    id: 'V3-M2-08',
    m: 'm2',
    area: 'VZV prevention',
    level: 'application',
    stem: 'An immunocompromised 30-year-old needs zoster prevention. Which vaccine fits the lecture?',
    options: [
      'Varivax, because live vaccines protect immunocompromised adults best',
      'Zostavax, because it is discontinued and therefore safe',
      'Shingrix, which is recombinant and used from age 19 in immunocompromised adults',
      'Gardasil 9, because it prevents viral reactivation'
    ],
    answer: 2,
    why: 'Shingrix is recombinant, so it can be used in immunocompromised adults 19 and older. Live vaccines are not given to immunocompromised patients.'
  },
  {
    id: 'V3-M2-09',
    m: 'm2',
    area: 'VZV prevention',
    level: 'integration',
    stem: 'Which statement contrasts Varivax and Shingrix by what they prevent?',
    options: [
      'Varivax prevents zoster, and Shingrix prevents chickenpox',
      'Varivax prevents chickenpox, and Shingrix prevents zoster',
      'Varivax and Shingrix each prevent chickenpox',
      'Varivax and Shingrix each treat established shingles'
    ],
    answer: 1,
    why: 'The key contrast is which illness and stage is prevented: primary varicella (Varivax) versus reactivation as zoster (Shingrix).'
  },
  {
    id: 'V3-M2-10',
    m: 'm2',
    area: 'EBV features',
    level: 'concept',
    stem: 'Which cells does EBV infect and remain latent in?',
    options: [
      'B lymphocytes',
      'T lymphocytes',
      'Sensory neurons',
      'Skin keratinocytes'
    ],
    answer: 0,
    why: 'EBV infects B lymphocytes and can remain latent within them.'
  },
  {
    id: 'V3-M2-11',
    m: 'm2',
    area: 'EBV features',
    level: 'concept',
    stem: 'How is EBV transmitted?',
    options: [
      'Through mosquito bites',
      'Through contaminated food',
      'Through the fecal-oral route',
      'Through saliva'
    ],
    answer: 3,
    why: 'EBV is transmitted through saliva, which is why infectious mononucleosis is called the kissing disease.'
  },
  {
    id: 'V3-M2-12',
    m: 'm2',
    area: 'EBV features',
    level: 'application',
    stem: 'A teenager has fever, sore throat, lymphadenopathy, and splenomegaly. Which virus is consistent?',
    options: [
      'Human papillomavirus',
      'Rhinovirus',
      'Epstein–Barr virus',
      'Mpox virus'
    ],
    answer: 2,
    why: 'This picture fits infectious mononucleosis from EBV. Hepatitis and encephalitis can also occur.'
  },
  {
    id: 'V3-M2-13',
    m: 'm2',
    area: 'EBV features',
    level: 'application',
    stem: 'A young adult has uncomplicated infectious mononucleosis. Which approach fits the lecture?',
    options: [
      'IV acyclovir for two weeks',
      'Supportive care, with recovery in 2–3 weeks',
      'IV ganciclovir for two weeks',
      'A Shingrix dose'
    ],
    answer: 1,
    why: 'Uncomplicated mononucleosis needs supportive care and resolves spontaneously. There is no EBV vaccine.'
  },
  {
    id: 'V3-M2-14',
    m: 'm2',
    area: 'CMV disease',
    level: 'concept',
    stem: 'Of which outcome is CMV the most common infectious cause in the U.S.?',
    options: [
      'Birth defects',
      'Childhood croup',
      'Neonatal herpes',
      'Adult encephalitis'
    ],
    answer: 0,
    why: 'CMV is the most common infectious cause of birth defects in the U.S. Most infections are asymptomatic in healthy hosts.'
  },
  {
    id: 'V3-M2-15',
    m: 'm2',
    area: 'CMV disease',
    level: 'application',
    stem: 'A transplant recipient on immunosuppressants develops CMV pneumonia. What best explains the severe disease?',
    options: [
      'Infection with a second CMV serotype',
      'Loss of the viral envelope',
      'Integration of CMV DNA into host chromosomes',
      'Reactivation when cell-mediated immunity is diminished'
    ],
    answer: 3,
    why: 'CMV has one serotype and enters latency. It reactivates when cell-mediated immunity falls.'
  },
  {
    id: 'V3-M2-16',
    m: 'm2',
    area: 'CMV disease',
    level: 'integration',
    stem: 'Which person is most likely to have symptomatic CMV disease?',
    options: [
      'A healthy teenager after first exposure',
      'A healthy adult with latent infection',
      'A patient with AIDS and CMV retinitis',
      'A healthy school-age child'
    ],
    answer: 2,
    why: 'CMV infections are asymptomatic unless the patient is immunocompromised, as in AIDS or after transplant.'
  },
  {
    id: 'V3-M2-17',
    m: 'm2',
    area: 'CMV drug targets',
    level: 'concept',
    stem: 'Which viral enzyme activates ganciclovir in infected cells?',
    options: [
      'Thymidine kinase',
      'The UL97 kinase',
      'The terminase complex',
      'The viral protease'
    ],
    answer: 1,
    why: 'Ganciclovir (and its oral prodrug valganciclovir) is activated by the viral UL97 kinase, then inhibits viral DNA synthesis.'
  },
  {
    id: 'V3-M2-18',
    m: 'm2',
    area: 'CMV drug targets',
    level: 'application',
    stem: 'A transplant recipient needs CMV prophylaxis. Which drug blocks the viral terminase (DNA packaging) complex?',
    options: [
      'Letermovir',
      'Ganciclovir',
      'Foscarnet',
      'Maribavir'
    ],
    answer: 0,
    why: 'Letermovir is used as prophylaxis in transplant recipients and blocks the terminase complex that packages viral DNA.'
  },
  {
    id: 'V3-M2-19',
    m: 'm2',
    area: 'CMV drug targets',
    level: 'application',
    stem: 'Post-transplant CMV is refractory to available treatment. Which drug inhibits pUL97?',
    options: [
      'Letermovir',
      'Foscarnet',
      'Acyclovir',
      'Maribavir'
    ],
    answer: 3,
    why: 'Maribavir inhibits pUL97 and is used for post-transplant CMV that is refractory to available treatment.'
  },
  {
    id: 'V3-M2-20',
    m: 'm2',
    area: 'CMV drug targets',
    level: 'integration',
    stem: 'Which pairing of CMV drug and target is correct?',
    options: [
      'Letermovir needs activation by UL97 before it blocks the polymerase',
      'Ganciclovir blocks the terminase complex',
      'Foscarnet blocks the DNA polymerase without needing activation',
      'Maribavir blocks the DNA polymerase after activation by thymidine kinase'
    ],
    answer: 2,
    why: 'Foscarnet needs no activation. Ganciclovir needs UL97. Letermovir targets the terminase. Maribavir inhibits UL97 itself.'
  },
  {
    id: 'V3-M3-01',
    m: 'm3',
    area: 'DNA virus replication site',
    level: 'concept',
    stem: 'Which DNA viruses in the lecture replicate in the host cell nucleus?',
    options: [
      'Herpesviruses and HPV',
      'Poxviruses and HPV',
      'Poxviruses and herpesviruses'
    ],
    answer: 0,
    why: 'Herpesviruses and papillomaviruses replicate in the nucleus. Poxviruses are the lecture’s cytoplasmic exception.'
  },
  {
    id: 'V3-M3-02',
    m: 'm3',
    area: 'DNA virus replication site',
    level: 'application',
    stem: 'Poxviruses replicate in the cytoplasm. Why does the virion carry its own transcription enzyme?',
    options: [
      'Host RNA polymerase sits in the nucleus, out of reach',
      'To convert viral RNA into DNA',
      'To cut the host genome into fragments',
      'To package viral DNA into the capsid'
    ],
    answer: 0,
    why: 'Poxviruses cannot access the host RNA polymerase, so they bring their own enzyme to transcribe their genes in the cytoplasm.'
  },
  {
    id: 'V3-M3-03',
    m: 'm3',
    area: 'DNA virus replication site',
    level: 'integration',
    stem: 'A newly found virus has a linear dsDNA genome and carries an RNA polymerase inside the virion. Where does it most likely transcribe its genes?',
    options: [
      'In the nucleus',
      'In the nucleolus',
      'In the endoplasmic reticulum',
      'In the cytoplasm'
    ],
    answer: 3,
    why: 'A virion-associated DNA-dependent RNA polymerase is the poxvirus strategy for cytoplasmic transcription.'
  },
  {
    id: 'V3-M3-04',
    m: 'm3',
    area: 'Poxviruses and mpox',
    level: 'concept',
    stem: 'Why could smallpox be eradicated?',
    options: [
      'Animal reservoirs were vaccinated',
      'Humans were the sole host without carrier states',
      'The virus had many serotypes',
      'Subclinical infections let workers find cases early'
    ],
    answer: 1,
    why: 'Smallpox had one stable serotype, humans as the sole host, rapid protection after vaccination, clinical recognition, and no carrier state or subclinical infection.'
  },
  {
    id: 'V3-M3-05',
    m: 'm3',
    area: 'Poxviruses and mpox',
    level: 'application',
    stem: 'A contact of a person with mpox was exposed 3 days ago. Which preventive step fits the lecture?',
    options: [
      'JYNNEOS vaccination, best given within 4 days of exposure',
      'Tecovirimat, approved for mpox prevention',
      'A Shingrix dose',
      'Acyclovir for 14 days'
    ],
    answer: 0,
    why: 'JYNNEOS can be used as post-exposure prophylaxis, best within 4 days. Tecovirimat is investigational for mpox.'
  },
  {
    id: 'V3-M3-06',
    m: 'm3',
    area: 'Poxviruses and mpox',
    level: 'application',
    stem: 'A patient with mild mpox asks about tecovirimat. Which statement matches the evidence in the lecture?',
    options: [
      'It is approved for mpox and shortens lesion duration',
      'It cures mpox when started within 4 days',
      'It is a vaccine given 28 days apart',
      'It is investigational, and trials failed to shorten lesions'
    ],
    answer: 3,
    why: 'Tecovirimat is FDA-approved for smallpox and investigational for mpox. PALM007 and STOMP found it safe but did not shorten time to lesion resolution. Mild to moderate cases recover with supportive care.'
  },
  {
    id: 'V3-M3-07',
    m: 'm3',
    area: 'Poxviruses and mpox',
    level: 'application',
    stem: 'How is the JYNNEOS vaccine series given?',
    options: [
      'One dose with a booster at 10 years',
      'Two doses, 6–12 months apart',
      'Two subcutaneous doses, 28 days apart',
      'Three doses at 0, 1–2, and 6 months'
    ],
    answer: 2,
    why: 'The JYNNEOS series is 2 subcutaneous doses 28 days apart. The 6–12 month and 0, 1–2, 6 month schedules belong to HPV vaccination.'
  },
  {
    id: 'V3-M3-08',
    m: 'm3',
    area: 'Poxviruses and mpox',
    level: 'concept',
    stem: 'Mpox virus belongs to which group?',
    options: [
      'Papillomaviruses',
      'Orthopoxviruses',
      'Herpesviruses',
      'Adenoviruses'
    ],
    answer: 1,
    why: 'Mpox is an orthopoxvirus, related to smallpox and vaccinia, with clade I and clade II viruses.'
  },
  {
    id: 'V3-M3-09',
    m: 'm3',
    area: 'Skin lesion patterns',
    level: 'concept',
    stem: 'Which skin lesion is typical of HSV and VZV?',
    options: [
      'Vesicle',
      'Pustule',
      'Umbilicated papule',
      'Cauliflower-like wart'
    ],
    answer: 0,
    why: 'HSV-1, HSV-2, and VZV typically cause vesicles. Smallpox causes pustules, molluscum causes umbilicated papules, and HPV causes warts.'
  },
  {
    id: 'V3-M3-10',
    m: 'm3',
    area: 'Skin lesion patterns',
    level: 'application',
    stem: 'A child has fleshy papules with umbilicated centers. Which virus is most consistent?',
    options: [
      'Herpes simplex virus',
      'Human papillomavirus',
      'Cytomegalovirus',
      'Molluscum contagiosum virus'
    ],
    answer: 3,
    why: 'Molluscum contagiosum is a poxvirus that causes fleshy, umbilicated papules. A lesion pattern narrows a differential and does not replace testing.'
  },
  {
    id: 'V3-M3-11',
    m: 'm3',
    area: 'Skin lesion patterns',
    level: 'integration',
    stem: 'A photograph shows a vesicle. Which reasoning is best?',
    options: [
      'The vesicle identifies HSV type 1 as the cause',
      'Several viruses cause vesicles, so history and testing narrow it',
      'The vesicle confirms VZV as the cause',
      'The vesicle indicates a poxvirus infection'
    ],
    answer: 1,
    why: 'A lesion appearance supports a differential, not a diagnosis. HSV-1, HSV-2, and VZV can each cause vesicles.'
  },
  {
    id: 'V3-M3-12',
    m: 'm3',
    area: 'HPV oncogenesis',
    level: 'concept',
    stem: 'Which HPV types cause genital warts?',
    options: [
      'HPV-6 and HPV-11',
      'HPV-16 and HPV-18',
      'HPV-1 and HPV-4',
      'HPV-31 and HPV-33'
    ],
    answer: 0,
    why: 'HPV-6 and HPV-11 cause genital warts (low risk). HPV-1 to 4 cause skin warts. HPV-16 and HPV-18 cause roughly 70% of cervical cancers.'
  },
  {
    id: 'V3-M3-13',
    m: 'm3',
    area: 'HPV oncogenesis',
    level: 'concept',
    stem: 'Which HPV early protein inactivates p53?',
    options: [
      'E7',
      'L1',
      'E1',
      'E6'
    ],
    answer: 3,
    why: 'E6 targets p53 and E7 targets pRb. L1 and L2 are capsid proteins, and E1 and E2 drive replication and transcription.'
  },
  {
    id: 'V3-M3-14',
    m: 'm3',
    area: 'HPV oncogenesis',
    level: 'application',
    stem: 'E7 is blocked in a high-risk HPV-infected cell. Which checkpoint protein stays functional?',
    options: [
      'pRb',
      'p53',
      'p53 and pRb together'
    ],
    answer: 0,
    why: 'E7 inactivates pRb. Blocking E7 leaves pRb working, although E6 can still degrade p53.'
  },
  {
    id: 'V3-M3-15',
    m: 'm3',
    area: 'HPV oncogenesis',
    level: 'application',
    stem: 'What is the expected result of losing p53 and pRb checkpoints in an HPV-infected epithelial cell?',
    options: [
      'Immediate cell lysis',
      'Unchecked cell division and tumor risk',
      'Clearance by the immune system',
      'Conversion to a latent state'
    ],
    answer: 1,
    why: 'E6 and E7 allow malignant transformation and tumor progression when p53 and pRb checkpoints are lost.'
  },
  {
    id: 'V3-M3-16',
    m: 'm3',
    area: 'HPV oncogenesis',
    level: 'integration',
    stem: 'Which gene-function pairing is correct for HPV?',
    options: [
      'E1 and E2 drive replication; L1 and L2 form the capsid',
      'E6 and E7 drive replication; L1 and L2 inactivate p53',
      'E1 and E2 form the capsid; E6 and E7 drive replication',
      'L1 and L2 drive replication; E1 and E2 form the capsid'
    ],
    answer: 0,
    why: 'Early genes E1 and E2 drive replication and transcription, and E6 and E7 inactivate p53 and pRb. Late genes L1 and L2 encode capsid proteins.'
  },
  {
    id: 'V3-M3-17',
    m: 'm3',
    area: 'HPV vaccination',
    level: 'concept',
    stem: 'Gardasil 9 protects against which types?',
    options: [
      'HPV-1, 2, 3, 4, 16, and 18',
      'HPV-6, 11, 16, and 18 alone',
      'HPV-6, 11, 16, 18, 31, 33, 45, 52, and 58',
      'HPV-16, 18, and 31 with HSV-2'
    ],
    answer: 2,
    why: 'Gardasil 9 is a protein subunit vaccine against 9 types: 2 that cause warts and 7 that cause cancer.'
  },
  {
    id: 'V3-M3-18',
    m: 'm3',
    area: 'HPV vaccination',
    level: 'application',
    stem: 'A 12-year-old starts HPV vaccination. Which schedule fits?',
    options: [
      'One dose',
      'Two doses, 6–12 months apart',
      'Three doses over 6 months',
      'Two doses, 28 days apart'
    ],
    answer: 1,
    why: 'Starting before age 15 uses 2 doses 6–12 months apart. Starting at 15–26, or being immunocompromised, uses 3 doses.'
  },
  {
    id: 'V3-M3-19',
    m: 'm3',
    area: 'HPV vaccination',
    level: 'application',
    stem: 'A 20-year-old with a normal immune system starts HPV vaccination. Which schedule fits?',
    options: [
      'Three doses',
      'One dose',
      'Two doses, 6–12 months apart',
      'Two doses, 28 days apart'
    ],
    answer: 0,
    why: 'Starting at ages 15–26 uses 3 doses (0, 1–2, and 6 months). Catch-up vaccination runs through age 26.'
  },
  {
    id: 'V3-M3-20',
    m: 'm3',
    area: 'HPV vaccination',
    level: 'application',
    stem: 'A 40-year-old asks about HPV vaccination. Which guidance fits the lecture?',
    options: [
      'Routine vaccination with 2 doses',
      'Vaccination is contraindicated',
      'Vaccination is replaced by liquid nitrogen',
      'Shared clinical decision-making with a healthcare provider'
    ],
    answer: 3,
    why: 'For ages 27–45, vaccination is a shared clinical decision with a provider.'
  },
  {
    id: 'V3-M3-21',
    m: 'm3',
    area: 'HPV vaccination',
    level: 'integration',
    stem: 'A patient with existing genital warts asks if Gardasil 9 will clear them. Which answer is best?',
    options: [
      'It treats existing warts within weeks',
      'It cures the infection and prevents recurrence',
      'It prevents new infections, and existing warts need other care',
      'It replaces imiquimod or podophyllin'
    ],
    answer: 2,
    why: 'Gardasil 9 is prophylactic. Existing warts are treated with measures such as topical imiquimod or podophyllin, and the vaccine does not treat established infection or disease.'
  },
  {
    id: 'V3-M4-01',
    m: 'm4',
    area: 'Influenza structure',
    level: 'concept',
    stem: 'Which genome describes influenza virus?',
    options: [
      'Nonsegmented, single-stranded RNA with negative polarity',
      'Segmented, single-stranded RNA with negative polarity',
      'Segmented, single-stranded RNA with positive polarity',
      'Linear double-stranded DNA'
    ],
    answer: 1,
    why: 'Influenza (Orthomyxoviridae) has a segmented negative-sense RNA genome, a helical nucleocapsid, and an envelope.'
  },
  {
    id: 'V3-M4-02',
    m: 'm4',
    area: 'Influenza structure',
    level: 'application',
    stem: 'Why does an influenza virion carry its own RNA polymerase?',
    options: [
      'Its negative-polarity RNA must be transcribed into mRNA',
      'Its DNA genome must be copied in the cytoplasm',
      'It must convert RNA into DNA for integration',
      'It must cleave host mRNA to avoid detection'
    ],
    answer: 0,
    why: 'Negative-sense RNA cannot be translated directly. The virion RNA polymerase transcribes the genome into mRNA.'
  },
  {
    id: 'V3-M4-03',
    m: 'm4',
    area: 'Influenza structure',
    level: 'concept',
    stem: 'What distinguishes influenza types A, B, C, and D?',
    options: [
      'The hemagglutinin subtype',
      'The neuraminidase subtype',
      'The envelope lipid composition',
      'The internal ribonucleoprotein antigen'
    ],
    answer: 3,
    why: 'Type is set by the group-specific internal ribonucleoprotein. Subtype within a type is set by H and N.'
  },
  {
    id: 'V3-M4-04',
    m: 'm4',
    area: 'Influenza structure',
    level: 'integration',
    stem: 'Which influenza protein can inhibit interferon production?',
    options: [
      'HA',
      'NA',
      'NS-1',
      'M1'
    ],
    answer: 2,
    why: 'NS-1 is a nonstructural protein and an important virulence factor that can inhibit interferon production.'
  },
  {
    id: 'V3-M4-05',
    m: 'm4',
    area: 'HA and NA',
    level: 'concept',
    stem: 'Which influenza protein binds host cell surface receptors?',
    options: [
      'Neuraminidase',
      'Hemagglutinin',
      'Nucleoprotein',
      'NS-1'
    ],
    answer: 1,
    why: 'Hemagglutinin (H) binds host receptors. Neuraminidase (N) cleaves neuraminic acid to free new virions.'
  },
  {
    id: 'V3-M4-06',
    m: 'm4',
    area: 'HA and NA',
    level: 'concept',
    stem: 'What does neuraminidase do?',
    options: [
      'It breaks down neuraminic acid so virions can leave the cell',
      'It fuses the envelope with the endosome',
      'It integrates viral RNA into host mRNA',
      'It binds the host receptor and facilitates viral entry'
    ],
    answer: 0,
    why: 'Neuraminidase is an enzyme that allows virion escape from the host cell. After inhalation it also breaks down the protective mucus layer.'
  },
  {
    id: 'V3-M4-07',
    m: 'm4',
    area: 'HA and NA',
    level: 'application',
    stem: 'A virus is labeled H3N2. What does the label describe?',
    options: [
      'Its type and number of genome segments',
      'Its host and year of isolation',
      'Its two internal ribonucleoprotein genes',
      'Its hemagglutinin subtype 3 and neuraminidase subtype 2'
    ],
    answer: 3,
    why: 'Subtype names reflect the H and N surface proteins. Each virus carries one H and one N.'
  },
  {
    id: 'V3-M4-08',
    m: 'm4',
    area: 'HA and NA',
    level: 'application',
    stem: 'An antibody blocks hemagglutinin from binding. Which step is affected?',
    options: [
      'Release of new virions',
      'Transcription of viral mRNA',
      'Attachment to host cell receptors',
      'Packaging of genome segments'
    ],
    answer: 2,
    why: 'Hemagglutinin mediates attachment. Antibodies to H and N, the main surface antigens, can limit infection.'
  },
  {
    id: 'V3-M4-09',
    m: 'm4',
    area: 'HA and NA',
    level: 'integration',
    stem: 'A neuraminidase inhibitor is present. Which defect would be seen in infected cells?',
    options: [
      'Viral RNA fails to enter the nucleus',
      'Newly formed virions remain attached to the cell surface',
      'Viral mRNA fails to be capped',
      'Virions fail to bind sialic acid receptors'
    ],
    answer: 1,
    why: 'Neuraminidase cleaves the link that keeps new virions attached. Blocking it traps virions on the infected cell.'
  },
  {
    id: 'V3-M4-10',
    m: 'm4',
    area: 'Drift and shift',
    level: 'concept',
    stem: 'Which process causes antigenic drift?',
    options: [
      'Gradual point mutations',
      'Exchange of whole RNA segments',
      'Integration of host DNA',
      'Switching to a DNA genome'
    ],
    answer: 0,
    why: 'Drift is a minor change in the genome from gradual mutation. Shift is a major change from reassortment.'
  },
  {
    id: 'V3-M4-11',
    m: 'm4',
    area: 'Drift and shift',
    level: 'concept',
    stem: 'Which process causes antigenic shift?',
    options: [
      'Gradual point mutations',
      'Antibody-driven selection of a single mutant',
      'Recombination within one segment',
      'Reassortment of RNA segments'
    ],
    answer: 3,
    why: 'Antigenic shift results from reassortment, in which entire RNA segments are exchanged.'
  },
  {
    id: 'V3-M4-12',
    m: 'm4',
    area: 'Drift and shift',
    level: 'application',
    stem: 'This year’s H3N2 virus differs slightly in its hemagglutinin from last year’s. Which term fits?',
    options: [
      'Antigenic shift',
      'Reassortment',
      'Antigenic drift',
      'Recombination'
    ],
    answer: 2,
    why: 'A small change from accumulated mutations is drift. Shift would introduce a very different H or N.'
  },
  {
    id: 'V3-M4-13',
    m: 'm4',
    area: 'Drift and shift',
    level: 'integration',
    stem: 'Why can a person who had influenza last year still become ill from this year’s drifted strain?',
    options: [
      'Mutations altered epitopes on H and N, so earlier antibodies bind poorly',
      'The virus integrated into the person’s genome',
      'The person’s antibodies were destroyed by the virus',
      'The virus switched to a new host cell type'
    ],
    answer: 0,
    why: 'Drift changes amino acids on H and N gradually, reducing recognition by antibodies from earlier infection or vaccination.'
  },
  {
    id: 'V3-M4-14',
    m: 'm4',
    area: 'Reassortment',
    level: 'concept',
    stem: 'In reassortment, what is exchanged between viruses?',
    options: [
      'Parts of single segments',
      'Envelope lipids',
      'Capsid proteins',
      'Whole RNA segments'
    ],
    answer: 3,
    why: 'Reassortment swaps entire segments. It is not cutting and joining inside a gene.'
  },
  {
    id: 'V3-M4-15',
    m: 'm4',
    area: 'Reassortment',
    level: 'application',
    stem: 'Why can reassortment occur in influenza but be impossible for a virus with one RNA molecule?',
    options: [
      'Influenza is a DNA virus that recombines',
      'A segmented genome lets whole segments be swapped between coinfecting viruses',
      'Influenza lacks an envelope, so segments mix freely',
      'Influenza integrates its genome into host chromosomes'
    ],
    answer: 1,
    why: 'Reassortment depends on a segmented genome. A virus with a single genome molecule cannot trade whole pieces this way.'
  },
  {
    id: 'V3-M4-16',
    m: 'm4',
    area: 'Reassortment',
    level: 'integration',
    stem: 'The 2009 swine-origin H1N1 virus arose from which kind of event?',
    options: [
      'Reassortment among swine, avian, and human influenza viruses',
      'Mutation of a single human virus',
      'Recombination with a herpesvirus',
      'Transfer of a plasmid between bacteria'
    ],
    answer: 0,
    why: 'Swine-origin H1N1 was a quadruple reassortant of North American swine, Eurasian swine, North American avian, and human viruses.'
  },
  {
    id: 'V3-M4-17',
    m: 'm4',
    area: 'Reassortment',
    level: 'integration',
    stem: 'Which statement about reassortment and pandemic risk is best?',
    options: [
      'Each reassortant causes a pandemic',
      'A reassortant carries negligible risk of spread',
      'Reassortment lowers pandemic risk',
      'A reassortant can raise pandemic risk, but spread varies'
    ],
    answer: 3,
    why: 'Shift can increase pandemic risk, but outcomes depend on the new combination and on population immunity. Probabilities are not implied.'
  },
  {
    id: 'V3-M4-18',
    m: 'm4',
    area: 'Influenza pathogenesis',
    level: 'concept',
    stem: 'What causes myalgia in influenza?',
    options: [
      'Viremia with muscle infection',
      'Direct viral replication in muscle',
      'Cytokines circulating in the blood',
      'Bacterial toxin release'
    ],
    answer: 2,
    why: 'Viremia is rare in influenza. Muscle aches result from cytokines in circulation.'
  },
  {
    id: 'V3-M4-19',
    m: 'm4',
    area: 'Influenza pathogenesis',
    level: 'application',
    stem: 'After inhalation, which function of neuraminidase helps the virus reach respiratory cells?',
    options: [
      'Fusing the envelope with the plasma membrane',
      'Breaking down the protective mucus layer',
      'Capping viral mRNA',
      'Binding interferon receptors'
    ],
    answer: 1,
    why: 'Neuraminidase breaks down the protective mucus layer, giving the virus access to respiratory tract cells.'
  },
  {
    id: 'V3-M4-20',
    m: 'm4',
    area: 'Influenza pathogenesis',
    level: 'integration',
    stem: 'Which statement describes influenza as a local infection with systemic symptoms?',
    options: [
      'Virus stays in the respiratory tract, and circulating cytokines cause aches and fever',
      'Virus circulates in the blood and infects muscle',
      'Virus is confined to the nose and spares the whole body',
      'Virus colonizes the colon and spreads to the lung'
    ],
    answer: 0,
    why: 'Superficial respiratory epithelium is infected and may undergo necrosis. Systemic symptoms come from cytokines, not from viremia.'
  },
  {
    id: 'V3-M5-01',
    m: 'm5',
    area: 'Flu antiviral mechanisms',
    level: 'concept',
    stem: 'Which target do oseltamivir, zanamivir, and peramivir share?',
    options: [
      'Hemagglutinin',
      'Cap-dependent endonuclease',
      'Viral DNA polymerase',
      'Neuraminidase'
    ],
    answer: 3,
    why: 'All three block neuraminidase, so new virions stay attached to the infected cell.'
  },
  {
    id: 'V3-M5-02',
    m: 'm5',
    area: 'Flu antiviral mechanisms',
    level: 'concept',
    stem: 'Which target does baloxavir block?',
    options: [
      'Neuraminidase',
      'Hemagglutinin',
      'Cap-dependent endonuclease',
      'Viral protease'
    ],
    answer: 2,
    why: 'Baloxavir inhibits the cap-dependent endonuclease that viral mRNA synthesis needs.'
  },
  {
    id: 'V3-M5-03',
    m: 'm5',
    area: 'Flu antiviral mechanisms',
    level: 'application',
    stem: 'Which step in the life cycle is blocked by oseltamivir?',
    options: [
      'Attachment to sialic acid receptors',
      'Release of new virions from the cell surface',
      'Transcription of viral mRNA',
      'Packaging of the eight segments'
    ],
    answer: 1,
    why: 'Neuraminidase inhibitors act late, at virion release. Baloxavir acts earlier, during mRNA synthesis.'
  },
  {
    id: 'V3-M5-04',
    m: 'm5',
    area: 'Flu antiviral mechanisms',
    level: 'application',
    stem: 'Which drug acts earlier in the life cycle than the neuraminidase inhibitors?',
    options: [
      'Baloxavir',
      'Oseltamivir',
      'Peramivir',
      'Zanamivir'
    ],
    answer: 0,
    why: 'Baloxavir stops viral mRNA synthesis inside the cell. Neuraminidase inhibitors act at virion release.'
  },
  {
    id: 'V3-M5-05',
    m: 'm5',
    area: 'Flu antiviral mechanisms',
    level: 'integration',
    stem: 'Infected cells in culture are treated with a neuraminidase inhibitor. Which observation is expected?',
    options: [
      'Viral mRNA is missing from the cytoplasm',
      'Virions fail to attach to new cells',
      'The eight segments fail to assemble',
      'Virions form, but cluster at the cell surface'
    ],
    answer: 3,
    why: 'Blocking neuraminidase traps completed virions on the cell, so mRNA synthesis and assembly proceed.'
  },
  {
    id: 'V3-M5-06',
    m: 'm5',
    area: 'Flu antiviral mechanisms',
    level: 'integration',
    stem: 'Infected cells in culture are treated with baloxavir. Which observation is expected?',
    options: [
      'Virions form and cluster at the surface',
      'Hemagglutinin fails to bind receptors',
      'Viral mRNA synthesis falls',
      'Mucus layers stay intact'
    ],
    answer: 2,
    why: 'Without cap-dependent endonuclease activity, viral mRNA is not made efficiently, so downstream steps are reduced.'
  },
  {
    id: 'V3-M5-07',
    m: 'm5',
    area: 'Flu antiviral mechanisms',
    level: 'application',
    stem: 'Which drug is given by intravenous infusion?',
    options: [
      'Oseltamivir',
      'Peramivir',
      'Zanamivir',
      'Baloxavir'
    ],
    answer: 1,
    why: 'Peramivir (Rapivab) is IV. Oseltamivir and baloxavir are oral, and zanamivir is inhaled.'
  },
  {
    id: 'V3-M5-08',
    m: 'm5',
    area: 'Flu antiviral mechanisms',
    level: 'concept',
    stem: 'Which spectrum describes the four approved influenza antivirals in the lecture?',
    options: [
      'Influenza A and B',
      'Influenza A alone',
      'Influenza A and C',
      'Influenza B and D'
    ],
    answer: 0,
    why: 'The lecture lists all four drugs with activity against both influenza A and B.'
  },
  {
    id: 'V3-M5-09',
    m: 'm5',
    area: 'Zanamivir caution',
    level: 'concept',
    stem: 'Which route does zanamivir use?',
    options: [
      'Oral tablet',
      'Intravenous infusion',
      'Topical skin application',
      'Oral inhalation'
    ],
    answer: 3,
    why: 'Zanamivir (Relenza) is an inhaled neuraminidase inhibitor.'
  },
  {
    id: 'V3-M5-10',
    m: 'm5',
    area: 'Zanamivir caution',
    level: 'application',
    stem: 'A patient with influenza has asthma. Which drug should be avoided because of its route?',
    options: [
      'Oseltamivir',
      'Peramivir',
      'Zanamivir',
      'Baloxavir'
    ],
    answer: 2,
    why: 'Inhaled zanamivir carries a bronchospasm risk with reactive airway disease such as asthma or COPD.'
  },
  {
    id: 'V3-M5-11',
    m: 'm5',
    area: 'Zanamivir caution',
    level: 'application',
    stem: 'A patient has COPD and influenza. Which choice is a defensible alternative class or route?',
    options: [
      'Inhaled zanamivir',
      'Oral oseltamivir',
      'A DNA polymerase inhibitor',
      'Liquid nitrogen'
    ],
    answer: 1,
    why: 'An oral or IV neuraminidase inhibitor avoids airway delivery. A classroom vignette does not replace a prescriber’s decision.'
  },
  {
    id: 'V3-M5-12',
    m: 'm5',
    area: 'Zanamivir caution',
    level: 'integration',
    stem: 'Why is the route of zanamivir the issue in asthma?',
    options: [
      'Inhaled drug delivered to the airways can trigger bronchospasm',
      'The drug blocks the cap-dependent endonuclease',
      'The drug is cleared by the kidney',
      'The drug binds hemagglutinin in the airway'
    ],
    answer: 0,
    why: 'The concern is airway delivery in reactive airway disease. Its mechanism, neuraminidase inhibition, matches oseltamivir.'
  },
  {
    id: 'V3-M5-13',
    m: 'm5',
    area: 'Zanamivir caution',
    level: 'integration',
    stem: 'Which pair shares a mechanism but differs in route?',
    options: [
      'Oseltamivir and baloxavir',
      'Zanamivir and baloxavir',
      'Peramivir and baloxavir',
      'Oseltamivir and zanamivir'
    ],
    answer: 3,
    why: 'Both inhibit neuraminidase, and one is oral while the other is inhaled. Baloxavir has a different target.'
  },
  {
    id: 'V3-M5-14',
    m: 'm5',
    area: 'Flu vaccines',
    level: 'concept',
    stem: 'Which type of influenza vaccine is made in embryonated chicken eggs?',
    options: [
      'Recombinant HA protein vaccines',
      'Cell-culture vaccines',
      'Inactivated or live attenuated vaccines',
      'mRNA vaccines'
    ],
    answer: 2,
    why: 'Most flu vaccines come from fertilized chicken eggs. Cell-culture and recombinant vaccines are made without eggs.'
  },
  {
    id: 'V3-M5-15',
    m: 'm5',
    area: 'Flu vaccines',
    level: 'concept',
    stem: 'In which cells is the cell-culture influenza vaccine grown?',
    options: [
      'Chicken embryo cells',
      'MDCK (Madin–Darby canine kidney) cells',
      'Human lung cells',
      'Bacterial cells'
    ],
    answer: 1,
    why: 'The cell-culture vaccine is grown in MDCK cells and then inactivated.'
  },
  {
    id: 'V3-M5-16',
    m: 'm5',
    area: 'Flu vaccines',
    level: 'application',
    stem: 'Which antigen is the purified component of the recombinant influenza vaccine?',
    options: [
      'Hemagglutinin',
      'Neuraminidase',
      'Nucleoprotein',
      'Cap-dependent endonuclease'
    ],
    answer: 0,
    why: 'A recombinant insect virus carrying the HA gene is grown in insect cells and the purified HA serves as antigen.'
  },
  {
    id: 'V3-M5-17',
    m: 'm5',
    area: 'Flu vaccines',
    level: 'application',
    stem: 'Which vaccine type contains a temperature-sensitive mutant virus?',
    options: [
      'Inactivated vaccine',
      'Recombinant HA vaccine',
      'Cell-culture inactivated vaccine',
      'Live attenuated vaccine'
    ],
    answer: 3,
    why: 'The live vaccine uses an attenuated temperature-sensitive mutant that is grown in eggs.'
  },
  {
    id: 'V3-M5-18',
    m: 'm5',
    area: 'Flu vaccines',
    level: 'integration',
    stem: 'Why does influenza vaccine composition require annual review?',
    options: [
      'Antibodies disappear within hours',
      'The vaccine converts into a DNA virus',
      'Drift and circulating subtypes change the H and N antigens',
      'Egg supplies alter the virus each year'
    ],
    answer: 2,
    why: 'Hemagglutinin and neuraminidase change gradually, so vaccine strains are matched to circulating viruses.'
  },
  {
    id: 'V3-M5-19',
    m: 'm5',
    area: 'Flu vaccines',
    level: 'integration',
    stem: 'Which set describes the U.S. vaccine components in the lecture for the 2026–27 season?',
    options: [
      'Influenza A(H1N1), A(H3N2), and two influenza B viruses',
      'Influenza A(H1N1), influenza A(H3N2), and influenza B',
      'Influenza A(H5N1) and influenza B',
      'Influenza A, B, C, and D'
    ],
    answer: 1,
    why: 'The lecture states that U.S. flu vaccines are trivalent. Season composition is a versioned fact to confirm with current CDC guidance.'
  },
  {
    id: 'V3-M6-01',
    m: 'm6',
    area: 'Respiratory classification',
    level: 'concept',
    stem: 'Which respiratory virus has a double-stranded DNA genome?',
    options: [
      'Adenovirus',
      'Rhinovirus',
      'Parainfluenza virus',
      'Coronavirus'
    ],
    answer: 0,
    why: 'Adenovirus is a nonenveloped icosahedral dsDNA virus. The other three have RNA genomes.'
  },
  {
    id: 'V3-M6-02',
    m: 'm6',
    area: 'Respiratory classification',
    level: 'concept',
    stem: 'Which family does parainfluenza virus belong to?',
    options: [
      'Pneumoviridae',
      'Orthomyxoviridae',
      'Picornaviridae',
      'Paramyxoviridae'
    ],
    answer: 3,
    why: 'Parainfluenza viruses are paramyxoviruses. RSV and metapneumovirus are placed in Pneumoviridae in current taxonomy.'
  },
  {
    id: 'V3-M6-03',
    m: 'm6',
    area: 'Respiratory classification',
    level: 'concept',
    stem: 'Which family does RSV belong to in current taxonomy?',
    options: [
      'Paramyxoviridae',
      'Coronaviridae',
      'Pneumoviridae',
      'Adenoviridae'
    ],
    answer: 2,
    why: 'The lecture tables group RSV with paramyxoviruses (older taxonomy). RSV is now classified in Pneumoviridae.'
  },
  {
    id: 'V3-M6-04',
    m: 'm6',
    area: 'Respiratory classification',
    level: 'application',
    stem: 'A respiratory virus has a nonsegmented positive-sense RNA genome and a helical envelope. Which virus fits?',
    options: [
      'Rhinovirus',
      'Coronavirus',
      'Influenza virus',
      'Parainfluenza virus'
    ],
    answer: 1,
    why: 'Coronavirus has a positive-sense genome in an enveloped helical nucleocapsid. Rhinovirus is positive-sense but nonenveloped.'
  },
  {
    id: 'V3-M6-05',
    m: 'm6',
    area: 'Respiratory classification',
    level: 'application',
    stem: 'A respiratory virus has a segmented negative-sense RNA genome. Which virus fits?',
    options: [
      'Influenza virus',
      'Parainfluenza virus',
      'RSV',
      'Coronavirus'
    ],
    answer: 0,
    why: 'Only influenza has a segmented genome among these. Parainfluenza and RSV have a single negative-sense RNA molecule.'
  },
  {
    id: 'V3-M6-06',
    m: 'm6',
    area: 'Respiratory classification',
    level: 'integration',
    stem: 'A nonenveloped virus with a DNA genome and vertex fibers infects the conjunctiva. Which virus fits?',
    options: [
      'Rhinovirus',
      'Influenza virus',
      'Adenovirus',
      'RSV'
    ],
    answer: 2,
    why: 'Adenovirus has an icosahedral capsid with a fiber on each of 12 vertices and can infect respiratory, GI, and conjunctival tissue.'
  },
  {
    id: 'V3-M6-07',
    m: 'm6',
    area: 'Fusion proteins',
    level: 'concept',
    stem: 'Which RSV protein causes cells to fuse into giant cells?',
    options: [
      'G protein',
      'F protein',
      'HN protein',
      'Hemagglutinin'
    ],
    answer: 1,
    why: 'The RSV F protein causes giant-cell (syncytium) formation. G is used for attachment.'
  },
  {
    id: 'V3-M6-08',
    m: 'm6',
    area: 'Fusion proteins',
    level: 'application',
    stem: 'Which pair describes the parainfluenza surface proteins?',
    options: [
      'HA for attachment, NA for release',
      'G for attachment, F for fusion',
      'H for fusion, N for release',
      'HN for attachment and release, F for fusion'
    ],
    answer: 3,
    why: 'Parainfluenza has HN and F spikes. Do not confuse them with influenza H and N, or with RSV G and F.'
  },
  {
    id: 'V3-M6-09',
    m: 'm6',
    area: 'Fusion proteins',
    level: 'integration',
    stem: 'A drug blocks the RSV F protein. Which observation is expected?',
    options: [
      'Attachment to host cells is eliminated',
      'Fewer syncytia form in infected cell layers',
      'The genome converts into DNA',
      'Neuraminidase activity rises'
    ],
    answer: 1,
    why: 'Blocking F reduces fusion and syncytia. Attachment depends on G.'
  },
  {
    id: 'V3-M6-10',
    m: 'm6',
    area: 'Fusion proteins',
    level: 'integration',
    stem: 'Which respiratory virus carries a spike that binds the ACE-2 receptor?',
    options: [
      'SARS coronavirus',
      'Rhinovirus',
      'Adenovirus',
      'Parainfluenza virus'
    ],
    answer: 0,
    why: 'The coronavirus spike binds ACE-2 on respiratory epithelial cells and also mediates fusion.'
  },
  {
    id: 'V3-M6-11',
    m: 'm6',
    area: 'RSV prevention',
    level: 'application',
    stem: 'A child has a harsh barking cough and croup. Which virus is most likely?',
    options: [
      'RSV',
      'Adenovirus',
      'Parainfluenza virus',
      'Rhinovirus'
    ],
    answer: 2,
    why: 'Croup (acute laryngotracheobronchitis) is a parainfluenza consequence. Management is supportive, and no antiviral or vaccine exists.'
  },
  {
    id: 'V3-M6-12',
    m: 'm6',
    area: 'RSV prevention',
    level: 'application',
    stem: 'An infant is born during RSV season to an unvaccinated mother. Which preventive option fits the lecture?',
    options: [
      'A Shingrix dose given to the infant',
      'A monoclonal antibody, such as nirsevimab',
      'Oseltamivir given for the season',
      'Gardasil 9 given to the infant'
    ],
    answer: 1,
    why: 'Infants get passive protection through maternal Abrysvo at 32–36 weeks or a monoclonal antibody given October–March.'
  },
  {
    id: 'V3-M6-13',
    m: 'm6',
    area: 'RSV prevention',
    level: 'application',
    stem: 'Which timing fits maternal RSV vaccination with Abrysvo?',
    options: [
      '32–36 weeks of pregnancy',
      'The first trimester',
      'At delivery',
      'Six months postpartum'
    ],
    answer: 0,
    why: 'Maternal Abrysvo is given at 32–36 weeks, passing antibodies to the infant.'
  },
  {
    id: 'V3-M6-14',
    m: 'm6',
    area: 'RSV prevention',
    level: 'integration',
    stem: 'An adult age 75 asks about RSV vaccination. Which statement matches the lecture?',
    options: [
      'A yearly dose is required',
      'Two doses 28 days apart are given',
      'Vaccination is limited to military personnel',
      'A single dose is recommended'
    ],
    answer: 3,
    why: 'Adults 75 and older, and adults 50–74 at increased risk, receive one dose. Guidance is version-dependent, so check current CDC recommendations.'
  },
  {
    id: 'V3-M6-15',
    m: 'm6',
    area: 'Coronavirus drugs',
    level: 'concept',
    stem: 'Which drug is a protease inhibitor used for COVID-19?',
    options: [
      'Remdesivir',
      'Nirmatrelvir-ritonavir',
      'Molnupiravir',
      'Baloxavir'
    ],
    answer: 1,
    why: 'Nirmatrelvir-ritonavir (Paxlovid) is an oral protease inhibitor.'
  },
  {
    id: 'V3-M6-16',
    m: 'm6',
    area: 'Coronavirus drugs',
    level: 'concept',
    stem: 'Which COVID-19 antiviral is given intravenously?',
    options: [
      'Remdesivir',
      'Nirmatrelvir-ritonavir',
      'Molnupiravir',
      'Oseltamivir'
    ],
    answer: 0,
    why: 'Remdesivir is an IV nucleotide analog that inhibits the viral RNA polymerase.'
  },
  {
    id: 'V3-M6-17',
    m: 'm6',
    area: 'Coronavirus drugs',
    level: 'application',
    stem: 'Which mechanism describes molnupiravir?',
    options: [
      'A protease inhibitor',
      'A neuraminidase inhibitor',
      'A fusion inhibitor',
      'A nucleoside analog that causes viral mutagenesis'
    ],
    answer: 3,
    why: 'Molnupiravir introduces errors during replication. It is an alternative option rather than a first choice.'
  },
  {
    id: 'V3-M6-18',
    m: 'm6',
    area: 'Rhinovirus and adenovirus',
    level: 'concept',
    stem: 'At which temperature does rhinovirus replicate best?',
    options: [
      '37 °C, core body temperature',
      '33 °C, the nasal temperature',
      '41 °C, febrile temperature',
      '25 °C, room temperature'
    ],
    answer: 1,
    why: 'Rhinovirus replication is best at about 33 °C and poor at 37 °C, which keeps it in the upper airway.'
  },
  {
    id: 'V3-M6-19',
    m: 'm6',
    area: 'Rhinovirus and adenovirus',
    level: 'application',
    stem: 'Why is a rhinovirus vaccine impractical?',
    options: [
      'Immunity is serotype-specific across 100+ types',
      'The virus is a DNA virus',
      'The virus integrates into the genome',
      'The virus infects neurons'
    ],
    answer: 0,
    why: 'Immunity to one serotype leaves a person susceptible to the others.'
  },
  {
    id: 'V3-M6-20',
    m: 'm6',
    area: 'Rhinovirus and adenovirus',
    level: 'application',
    stem: 'Which feature of adenovirus acts as a hemagglutinin and primary antigen?',
    options: [
      'The envelope glycoprotein G',
      'The neuraminidase spike',
      'The helical nucleocapsid',
      'The fiber protruding from each vertex'
    ],
    answer: 3,
    why: 'A fiber at each of 12 vertices mediates attachment and serves as hemagglutinin and primary antigen.'
  },
  {
    id: 'V3-M6-21',
    m: 'm6',
    area: 'Rhinovirus and adenovirus',
    level: 'application',
    stem: 'Who can receive the live oral adenovirus vaccine in the lecture?',
    options: [
      'Infants in daycare',
      'Pregnant patients',
      'U.S. military personnel',
      'Patients with asthma'
    ],
    answer: 2,
    why: 'A live oral vaccine against adenovirus types 4 and 7 is available for U.S. military personnel ages 17–50.'
  },
  {
    id: 'V3-M6-22',
    m: 'm6',
    area: 'Rhinovirus and adenovirus',
    level: 'integration',
    stem: 'A patient has a cold from rhinovirus. Which management fits the lecture?',
    options: [
      'Oseltamivir by mouth',
      'Supportive care while symptoms resolve',
      'Nirmatrelvir-ritonavir by mouth',
      'A maternal Abrysvo dose'
    ],
    answer: 1,
    why: 'No antiviral therapy is approved for rhinovirus, and no vaccines exist.'
  },
  {
    id: 'V3-M6-23',
    m: 'm6',
    area: 'Local vs systemic',
    level: 'concept',
    stem: 'Which statement fits the usual course of RSV in infants?',
    options: [
      'Disease is severe yet localized to the airway',
      'Viremia carries the virus to the liver',
      'Virus spreads through blood to the brain',
      'Disease is restricted to the skin'
    ],
    answer: 0,
    why: 'RSV in infants can be severe, but it is localized and viremia does not occur.'
  },
  {
    id: 'V3-M6-24',
    m: 'm6',
    area: 'Local vs systemic',
    level: 'application',
    stem: 'Which condition is a systemic manifestation of HSV?',
    options: [
      'A cold sore on the lip',
      'A genital vesicle',
      'Neonatal disseminated disease or encephalitis',
      'A herpetic whitlow'
    ],
    answer: 2,
    why: 'Mucocutaneous lesions are local. Encephalitis and neonatal disseminated disease are systemic.'
  },
  {
    id: 'V3-M6-25',
    m: 'm6',
    area: 'Local vs systemic',
    level: 'integration',
    stem: 'Which respiratory illness is severe without viremia?',
    options: [
      'Chickenpox',
      'RSV bronchiolitis',
      'Infectious mononucleosis',
      'Neonatal HSV'
    ],
    answer: 1,
    why: 'Severity does not require spread through the blood. RSV infects respiratory epithelium and immunopathology contributes.'
  },
  {
    id: 'V3-M6-26',
    m: 'm6',
    area: 'Local vs systemic',
    level: 'integration',
    stem: 'Which pairing of virus and local or systemic pattern is correct?',
    options: [
      'VZV zoster is local to one dermatome, chickenpox is widespread',
      'HPV warts are systemic bloodborne disease',
      'CMV is symptomatic in healthy adults',
      'EBV is restricted to a single dermatome'
    ],
    answer: 0,
    why: 'Zoster is local, chickenpox is systemic, and HPV warts are local. EBV infects B lymphocytes with systemic features.'
  }
];
