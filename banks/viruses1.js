/* ============================================================
   VIRUSES I · INTRODUCTION — question bank
   Pure data: no code, no page dependencies. Built module by module.
   Currently contains: Module 1 (Build a Virus), Module 2 (Replicate It), and Module 3 (Change It), Module 4 (Through the Patient), and Module 5 (Fight It), and Module 6 (Diagnose It).
   Writing standard: single best answer, positive stems, 3-5 parallel
   options, plausible distractors, no absolute or vague terms, a
   rationale ("why") on every item. See companion-architecture.md §10.
   ============================================================ */
var TOPIC_ID    = 'viruses1';
var TOPIC_TITLE = 'Viruses I · Introduction';

var CHECKPOINTS = {

  /* ---- Module 1, Section 1: Virus or cell? ---- */
  c1a: {
    options: [
      "They divide by binary fission once they are inside a host cell",
      "They carry mitochondria that power their replication",
      "They rely on host ribosomes and enzymes to build new particles",
      "They make proteins with their own full set of ribosomes"
    ],
    answer: 2,
    why: "A virus has no functional protein-making machinery of its own, so it hijacks the host cell's ribosomes and enzymes. That dependence is what \"obligate intracellular parasite\" means."
  },
  c1b: {
    options: ["Bacterium", "Virus", "Yeast", "Protozoan"],
    answer: 1,
    why: "One type of nucleic acid, a protein coat, and no ribosomes or mitochondria describe a virus. Every cell, bacterial or eukaryotic, carries both DNA and RNA and has ribosomes."
  },

  /* ---- Module 1, Section 2: Build a virion ---- */
  c2a: {
    options: ["Nucleocapsids", "Matrix proteins", "Capsomers", "Glycoprotein spikes"],
    answer: 2,
    why: "Capsomers (also called protomers) are the repeating protein units that assemble into the capsid. A nucleocapsid is the whole capsid plus the genome inside it."
  },
  c2b: {
    options: ["Capsomers", "Matrix proteins", "Glycoprotein spikes", "Host ribosomes"],
    answer: 1,
    why: "Matrix proteins sit between the capsid and the envelope and connect the two layers."
  },
  c2c: {
    options: ["Capsid proteins", "Glycoprotein spikes", "Viral polymerase", "Host ribosomes"],
    answer: 0,
    why: "The capsid wraps the genome and protects it from nuclease-mediated degradation. Spikes attach to cells, the polymerase copies the genome, and host ribosomes make proteins."
  },

  /* ---- Module 1, Section 3: Envelope consequences ---- */
  c3a: {
    options: [
      "Norovirus lacks an envelope, so alcohol disrupts it less effectively",
      "Norovirus has a thick envelope that shields it from alcohol",
      "Norovirus replicates inside alcohol-based sanitizer",
      "Norovirus carries an enzyme that breaks down alcohol"
    ],
    answer: 0,
    why: "Alcohol and detergents work largely by disrupting lipid membranes. A nonenveloped virus has no lipid layer to disrupt, so CDC guidance favors washing with soap and water for norovirus."
  },
  c3b: {
    options: [
      "A capsid built from repeating capsomers",
      "A genome made of DNA or RNA",
      "Surface proteins that bind host receptors",
      "A lipid membrane that these agents can disrupt"
    ],
    answer: 3,
    why: "Detergents and solvents dissolve or disrupt lipids. The envelope is a lipoprotein membrane, so it is the vulnerable part of an enveloped virion."
  },
  c3c: {
    options: [
      "Greater sensitivity to detergents",
      "Greater sensitivity to drying",
      "Greater persistence on dry surfaces",
      "Greater sensitivity to solvents"
    ],
    answer: 2,
    why: "Without the fragile lipid envelope, the virus behaves like a nonenveloped virus: it resists drying, detergents, and solvents and persists on surfaces for much longer."
  },

  /* ================= MODULE 2 · Replicate It ================= */

  /* ---- M2 S1: Put the cycle in order ---- */
  c4a: {
    options: [
      "Release by budding or lysis",
      "Entry and uncoating of the genome",
      "Assembly of new virions",
      "Protein production by host ribosomes"
    ],
    answer: 1,
    why: "After a virion binds host receptors, it enters the cell and the genome is released from its coat (uncoating). Copying, protein production, assembly, and release all come later."
  },
  c4b: {
    options: [
      "Attachment to receptors",
      "Budding from the membrane",
      "Protein production",
      "Genome copying by viral polymerase"
    ],
    answer: 2,
    why: "Viruses lack their own functional ribosomes, so host ribosomes translate viral mRNA into viral proteins. A viral polymerase copies the genome, and attachment and budding involve receptors and membranes."
  },

  /* ---- M2 S2: Where would a drug work? ---- */
  c5a: {
    options: [
      "Attachment to host receptors",
      "Cleavage of long protein precursors",
      "Release from the cell",
      "Conversion of viral RNA into DNA"
    ],
    answer: 3,
    why: "Tenofovir is a reverse transcriptase inhibitor. Reverse transcriptase makes DNA from the retroviral RNA genome, so blocking it stalls HIV before integration."
  },
  c5b: {
    options: [
      "Release of new virions",
      "Entry into the host cell",
      "Copying of the genome",
      "Insertion into host DNA"
    ],
    answer: 0,
    why: "Oseltamivir is a neuraminidase inhibitor. It acts at the assembly and release step of influenza replication."
  },
  c5c: {
    options: [
      "New virions stay attached to the cell surface",
      "Long precursor proteins stay uncut",
      "Viral RNA stays outside the cell",
      "Viral DNA cannot join the host chromosome"
    ],
    answer: 1,
    why: "Viral protease cuts long precursors into working proteins. A protease inhibitor leaves the precursors uncut, so functional proteins are not available for new virions."
  },

  /* ---- M2 S3: Lytic or lysogenic? ---- */
  c6a: {
    options: [
      "Phage DNA is destroyed by the host cell",
      "The phage capsid stays outside and the DNA enters",
      "Phage DNA joins the host genome and progeny are made later",
      "Many progeny phage form and the cell ruptures"
    ],
    answer: 2,
    why: "In the lysogenic cycle the phage DNA is incorporated into the host genome, and progeny are not made until the prophage is stimulated. Many progeny plus rupture describes the lytic cycle."
  },
  c6b: {
    options: ["Capsomer", "Plasmid", "Nucleocapsid", "Prophage"],
    answer: 3,
    why: "Integrated viral DNA is called the prophage. A capsomer is a capsid subunit, and a nucleocapsid is a capsid together with its genome."
  },
  c6c: {
    options: [
      "Specialized transduction",
      "Lysogenic conversion",
      "Antigenic drift",
      "Reassortment"
    ],
    answer: 0,
    why: "When phage DNA is excised, part of the neighboring bacterial DNA can leave with it. The lecture calls this specialized transduction."
  },

  /* ---- M2 S4: When a phage changes a bacterium ---- */
  c7a: {
    options: [
      "Corynebacterium diphtheriae",
      "Escherichia coli (STEC)",
      "Staphylococcus aureus"
    ],
    answer: 0,
    why: "C. diphtheriae makes diphtheria toxin after it is infected by phage \u03B2. STEC and S. aureus also carry prophage-encoded virulence genes, but not the diphtheria toxin gene."
  },
  c7b: {
    options: [
      "The bacterium becomes a different species",
      "The phage speeds up bacterial division",
      "The prophage carries a gene the bacterium lacked before",
      "The phage destroys the bacterial chromosome"
    ],
    answer: 2,
    why: "Lysogenic conversion adds prophage genes, such as a toxin gene, to the bacterial chromosome. The species stays the same while its virulence changes."
  },

  /* ================= MODULE 3 · Change It ================= */

  /* ---- M3 S1: Make a mutation ---- */
  c8a: {
    options: [
      "Drug-resistant mutant",
      "Reassortant",
      "Prophage",
      "Antigenic variant"
    ],
    answer: 3,
    why: "A mutation that alters a surface antigen so existing antibodies no longer recognize it produces an antigenic variant. A drug-resistant mutant changes a drug target instead."
  },
  c8b: {
    options: [
      "An error-prone polymerase",
      "A segmented genome",
      "A lipid envelope",
      "A helical capsid"
    ],
    answer: 0,
    why: "Influenza viruses, HIV, and hepatitis C virus copy their genomes with error-prone polymerases, which introduces mutations at a high rate. Segmentation and the envelope do not cause point mutations."
  },

  /* ---- M3 S2: Drift, shift, or swap? ---- */
  c9a: {
    options: ["Lysogenic conversion", "Reassortment", "Recombination", "Antigenic drift"],
    answer: 1,
    why: "Reassortment exchanges whole segments of a segmented genome, as in influenza. Recombination exchanges homologous regions instead."
  },
  c9b: {
    options: ["Antigenic drift", "Uncoating", "Recombination", "Reassortment"],
    answer: 2,
    why: "Recombination is an exchange of genetic information between homologous regions of chromosomes. It occurs in DNA viruses and is also documented in coronaviruses."
  },
  c9c: {
    options: ["Antigenic shift", "Recombination", "Lysogenic conversion", "Antigenic drift"],
    answer: 3,
    why: "Small, gradual changes in influenza surface proteins are antigenic drift. Antigenic shift comes from reassortment and produces new strains."
  },

  /* ---- M3 S3: Viruses as gene-delivery tools ---- */
  c10a: {
    options: ["Adeno-associated virus", "Adenovirus", "Lentivirus"],
    answer: 2,
    why: "A lentivirus is a retrovirus that integrates into host DNA, giving long-lasting expression. It is often used to modify cells outside the body."
  },
  c10b: {
    options: [
      "Spontaneous mutation of the vector",
      "A strong immune response to the vector",
      "Integration into the host chromosome",
      "A small cargo capacity"
    ],
    answer: 1,
    why: "Adenovirus vectors carry large genes, but the strong immune response they provoke limits repeat dosing."
  },

  /* ---- M3 S4: Identify the virus ---- */
  c11a: {
    options: ["dsRNA", "dsDNA", "+ssRNA", "\u2212ssRNA"],
    answer: 2,
    why: "A +ssRNA genome has the same sense as mRNA, so it acts as mRNA after entering the cell. \u2212ssRNA and dsRNA viruses carry their own polymerase in the virion."
  },
  c11b: {
    options: ["Picornaviridae", "Retroviridae", "Rhabdoviridae", "Reoviridae"],
    answer: 3,
    why: "Rotavirus is in Reoviridae: dsRNA with a naked virion. Picornaviridae is naked +ssRNA, Retroviridae is enveloped with reverse transcriptase, and Rhabdoviridae is enveloped \u2212ssRNA."
  },

  /* ================= MODULE 4 · Through the Patient ================= */

  /* ---- M4 S1: What happens to the cell? ---- */
  c12a: {
    options: [
      "Malignant transformation",
      "A persistent infection with no visible change",
      "Fusion that forms multinucleated cells",
      "Death of the infected cell"
    ],
    answer: 2,
    why: "Measles virus, RSV, and HSV can cause membrane fusion, producing multinucleated giant cells. Cells may also round up or darken, which is the cytopathic effect (CPE)."
  },
  c12b: {
    options: [
      "Poliovirus and rotavirus",
      "Measles virus and RSV",
      "Influenza virus and rhinovirus",
      "HPV and EBV"
    ],
    answer: 3,
    why: "HPV, EBV, HBV, HCV, and HTLV-1 are linked to malignant transformation, which promotes tumor growth. Measles virus and RSV cause cell fusion, and poliovirus causes cell death."
  },

  /* ---- M4 S2: Why does the patient feel sick? ---- */
  c13a: {
    options: [
      "Immunopathogenesis",
      "Uncoating",
      "Lysogenic conversion",
      "Antigenic drift"
    ],
    answer: 0,
    why: "Immunopathogenesis means the immune response itself causes the symptoms, as with cytokine-driven fever in influenza."
  },
  c13b: {
    options: [
      "Neutrophils",
      "Cytotoxic T cells",
      "Natural killer cells",
      "Macrophages"
    ],
    answer: 1,
    why: "In hepatitis B, liver injury is mainly caused by cytotoxic T cells killing infected hepatocytes."
  },
  c13c: {
    options: [
      "It blocks viral entry into the gut cells it targets",
      "It degrades the viral mRNA made in gut cells",
      "It helps activate enteric nerves that raise fluid secretion",
      "It kills infected gut cells directly through lysis"
    ],
    answer: 2,
    why: "In rotavirus infection, NSP4 (a viral enterotoxin) and serotonin released from gut cells activate enteric nerves, which raises fluid secretion and gut motility."
  },

  /* ---- M4 S3: Local or systemic? ---- */
  c14a: {
    options: ["Latency", "Syncytium", "Transformation", "Viremia"],
    answer: 3,
    why: "Viremia is virus in the blood after spread through lymph nodes. It is one route to systemic infection, and antibodies can stop a virus during viremia."
  },
  c14b: {
    options: [
      "Rabies and herpesviruses",
      "Rhinovirus and rotavirus",
      "HPV and rhinovirus",
      "Rotavirus and HPV"
    ],
    answer: 0,
    why: "Rabies and herpesviruses travel along nerves. Rhinovirus, rotavirus, and HPV cause local infections at or near the entry site."
  },

  /* ================= MODULE 5 · Fight It (part 1) ================= */

  /* ---- M5 S1: Interferon alarm ---- */
  c15a: {
    options: ["Perforin", "PKR", "RNase L", "APOBEC3G"],
    answer: 1,
    why: "PKR is a protein kinase that phosphorylates eIF2-alpha and shuts down protein synthesis. RNase L degrades viral mRNA instead."
  },
  c15b: {
    options: [
      "By the organ they protect",
      "By the size of their genes",
      "By the receptor they bind",
      "By the virus they inhibit"
    ],
    answer: 2,
    why: "Interferons are classified by receptor: Type I (alpha, beta), Type II (gamma), and Type III (lambda)."
  },

  /* ---- M5 S2: Nonspecific defenses ---- */
  c16a: {
    options: ["Fever", "Phagocytosis", "Mucociliary clearance", "APOBEC3G"],
    answer: 3,
    why: "APOBEC3G causes hypermutation of viral DNA. Fever, phagocytosis, and mucociliary clearance act by other means."
  },
  c16b: {
    options: ["Alpha-defensins", "Interferons", "Perforin", "Complement"],
    answer: 0,
    why: "Alpha-defensins are positively charged peptides that interfere with HIV binding its receptor."
  },
  c16c: {
    options: [
      "It increases mucociliary clearance",
      "It impairs antiviral immunity",
      "It enhances interferon production",
      "It prevents reactivation of latent viruses"
    ],
    answer: 1,
    why: "Corticosteroids impair antiviral immunity. Higher doses raise the risk of severe infection and of reactivation of latent viruses such as HBV and herpesviruses."
  },

  /* ---- M5 S3: Antibody defense ---- */
  c17a: {
    options: ["IgM", "IgE", "IgA", "IgG"],
    answer: 2,
    why: "IgA at mucosal surfaces, such as the respiratory tract and gut, provides a first line of protection."
  },
  c17b: {
    options: [
      "By degrading the viral genome inside the capsid",
      "By inserting into the host chromosome",
      "By cutting viral precursor proteins",
      "By binding outer surface proteins"
    ],
    answer: 3,
    why: "Antibodies neutralize infectivity by binding outer surface proteins. Binding may prevent the virus from binding cell receptors."
  },

  /* ================= MODULE 5 · Fight It (part 2) ================= */

  /* ---- M5 S4: Active, passive, or herd? ---- */
  c18a: {
    options: ["Herd immunity", "Mucosal immunity", "Active immunity", "Passive immunity"],
    answer: 2,
    why: "Vaccination produces active immunity: protection by your own immune response, as after infection."
  },
  c18b: {
    options: [
      "A child protected after recovering from infection",
      "An adult protected after vaccination",
      "A community protected because most people are immune",
      "A newborn protected by maternal IgG"
    ],
    answer: 3,
    why: "Passive immunity is protection by antibodies made by someone else, such as maternal IgG or immune globulin. Recovery and vaccination give active immunity, and community protection is herd immunity."
  },

  /* ---- M5 S5: CD8 or NK? ---- */
  c19a: {
    options: [
      "Missing MHC class I",
      "Excess MHC class II",
      "A viral capsid",
      "Complement proteins"
    ],
    answer: 0,
    why: "NK cells can detect the missing MHC class I on infected cells that have lowered it to escape CD8 T cells."
  },
  c19b: {
    options: [
      "RNase L and PKR",
      "Perforin and granzymes",
      "IgA and IgG",
      "Interferon and complement"
    ],
    answer: 1,
    why: "A CD8 cytotoxic T cell releases perforin and granzymes, and the infected cell undergoes apoptosis."
  },

  /* ---- M5 S6: Escape and persistence ---- */
  c20a: {
    options: [
      "Vaccinia virus and rotavirus",
      "Rhinovirus and norovirus",
      "HIV, HSV, CMV, and adenovirus",
      "Measles virus and EBV"
    ],
    answer: 2,
    why: "HIV, HSV, CMV, and adenovirus reduce MHC class I proteins, which decreases killing by cytotoxic T cells."
  },
  c20b: {
    options: ["Measles virus", "Vaccinia virus", "Adenovirus", "EBV"],
    answer: 3,
    why: "EBV blocks synthesis of interferon by virus-infected cells. HIV, influenza, and HSV block the kinase (PKR) instead."
  },
  c20c: {
    options: [
      "Antibodies made earlier no longer match its surface",
      "Its genome is converted into a prophage in the host",
      "Its envelope is replaced by a capsid after budding",
      "Its polymerase stops making copying errors"
    ],
    answer: 0,
    why: "Rapid antigenic variation helps a virus persist because antibodies made earlier may no longer recognize its changed surface proteins."
  },

  /* ================= MODULE 6 · Diagnose It ================= */

  /* ---- M6 S1: Choose the test ---- */
  c21a: {
    options: ["Serology", "Cell culture", "Light microscopy", "RT-PCR"],
    answer: 3,
    why: "RT-PCR amplifies specific viral RNA sequences, and RNA levels for HIV and hepatitis C are used to monitor therapy."
  },
  c21b: {
    options: [
      "Viral antigens",
      "Cytopathic effect",
      "Viral genomes by amplification",
      "Fusion of cultured cells"
    ],
    answer: 0,
    why: "ELISA is often used to detect viral antigens, such as HIV antigen or hepatitis B surface antigen. It is very sensitive."
  },
  c21c: {
    options: [
      "RT-PCR and DNA probes on the specimen",
      "Light, fluorescence, and electron microscopy",
      "ELISA, PCR, and serology with paired samples",
      "Cell culture and paired titers over weeks"
    ],
    answer: 1,
    why: "Microscopic identification uses light, fluorescence (immunofluorescence), or electron microscopy to visualize cells or viral particles."
  },

  /* ---- M6 S2: Interpret the result ---- */
  c22a: {
    options: [
      "Any detectable rise",
      "A fourfold fall",
      "Fourfold or greater",
      "Twofold or greater"
    ],
    answer: 2,
    why: "A fourfold or greater rise in titer between acute and convalescent samples indicates recent infection."
  },
  c22b: {
    options: [
      "About 2 to 4 days",
      "About 6 to 12 months",
      "At the same visit",
      "About 2 to 4 weeks"
    ],
    answer: 3,
    why: "Acute and convalescent samples are collected about 2 to 4 weeks apart, which gives antibody levels time to rise."
  },

  /* ---- M6 S3: Unknown patient ---- */
  c23a: {
    options: [
      "dsRNA genome, naked virion",
      "+ssRNA genome, enveloped virion",
      "dsDNA genome, enveloped virion",
      "\u2212ssRNA genome, enveloped virion"
    ],
    answer: 0,
    why: "Rotavirus is in Reoviridae: dsRNA with a naked virion that carries its own polymerase."
  },
  c23b: {
    options: [
      "Electron microscopy of cells",
      "Antigen detection",
      "Paired serology",
      "Cell culture"
    ],
    answer: 1,
    why: "Detecting a viral protein in a specimen is antigen detection, often by ELISA."
  }
};

var CARDS = [
  { id:'VI1-CARD-01', t:'Obligate intracellular parasite', d:'An organism that can replicate only by using the machinery of a host cell. Viruses hijack host ribosomes and enzymes to make hundreds of progeny.' },
  { id:'VI1-CARD-02', t:'Virus vs. cell: nucleic acid', d:'A virus carries DNA or RNA, not both. A cell carries both DNA and RNA.' },
  { id:'VI1-CARD-03', t:'Capsid', d:'The protein coat around the viral genome. It protects the genome from nucleases and carries surface proteins that mediate attachment.' },
  { id:'VI1-CARD-04', t:'Capsomer (protomer)', d:'One repeating protein unit of the capsid.' },
  { id:'VI1-CARD-05', t:'Nucleocapsid', d:'The capsid proteins together with the genome they enclose.' },
  { id:'VI1-CARD-06', t:'Icosahedral vs. helical capsid', d:'Icosahedral: a 20-sided polyhedron that looks spherical. Helical: capsomers form a hollow, rod-shaped coil.' },
  { id:'VI1-CARD-07', t:'Viral envelope', d:'A lipoprotein membrane made of lipids from the host cell membrane plus virus-specific proteins.' },
  { id:'VI1-CARD-08', t:'Matrix protein', d:'Links the envelope to the capsid.' },
  { id:'VI1-CARD-09', t:'Glycoprotein spikes', d:'Envelope proteins that help the virion attach to and enter cells. Variable glycoproteins can help a virus evade antibodies.' },
  { id:'VI1-CARD-10', t:'Enveloped vs. nonenveloped: stability', d:'Enveloped viruses are more sensitive to heat, drying, detergents, and solvents. Nonenveloped viruses persist on surfaces much longer.' },
  { id:'VI1-CARD-11', t:'Norovirus hand hygiene', d:'Norovirus is nonenveloped. Soap and water works better than alcohol-based hand sanitizer (CDC).' },
  { id:'VI1-CARD-12', t:'Viral replication: the order', d:'Attachment, entry and uncoating, genome replication, protein production, assembly, release.' },
  { id:'VI1-CARD-13', t:'Uncoating', d:'The step in which the genome is released from its protein coat inside the host cell.' },
  { id:'VI1-CARD-14', t:'Reverse transcriptase and integrase', d:'Retroviral enzymes. Reverse transcriptase makes DNA from RNA, and integrase inserts that DNA into host DNA. Tenofovir and dolutegravir block them.' },
  { id:'VI1-CARD-15', t:'Viral protease', d:'Cuts long viral precursor proteins into working pieces. Protease inhibitors, including nirmatrelvir for SARS-CoV-2, block it.' },
  { id:'VI1-CARD-16', t:'Entry inhibitors', d:'Block attachment and entry. Examples for HIV: maraviroc and enfuvirtide.' },
  { id:'VI1-CARD-17', t:'Polymerase inhibitors and nucleoside analogs', d:'Block genome copying. Examples: acyclovir for HSV and sofosbuvir for HCV.' },
  { id:'VI1-CARD-18', t:'Neuraminidase inhibitors', d:'Act at assembly and release. Example: oseltamivir for influenza.' },
  { id:'VI1-CARD-19', t:'Lytic cycle', d:'A phage makes many progeny and the cell ruptures. In some cases progeny are released without damaging the cell.' },
  { id:'VI1-CARD-20', t:'Lysogenic cycle', d:'Phage DNA is incorporated into the host genome, and progeny are not made until the phage is stimulated.' },
  { id:'VI1-CARD-21', t:'Prophage', d:'Integrated viral DNA in a bacterial chromosome.' },
  { id:'VI1-CARD-22', t:'Specialized transduction', d:'When phage DNA is excised, part of the bacterial DNA can be excised with it and carried into progeny phage.' },
  { id:'VI1-CARD-23', t:'Lysogenic conversion', d:'A prophage adds genes that raise a bacterium\u2019s virulence. Example: phage \u03B2 gives Corynebacterium diphtheriae its diphtheria toxin gene.' },
  { id:'VI1-CARD-24', t:'Antigenic variant', d:'A virus whose surface antigen has mutated so existing antibodies no longer recognize it (immune escape).' },
  { id:'VI1-CARD-25', t:'Antigenic drift', d:'Small, gradual changes in influenza surface proteins.' },
  { id:'VI1-CARD-26', t:'Drug-resistant mutant', d:'A virus whose drug target has mutated, so the drug no longer works.' },
  { id:'VI1-CARD-27', t:'Error-prone polymerase', d:'A viral polymerase that makes copying mistakes at a high rate. Seen in influenza viruses, HIV, and hepatitis C virus.' },
  { id:'VI1-CARD-28', t:'Recombination', d:'Exchange of genetic information between homologous regions of chromosomes. Occurs in DNA viruses and is documented in coronaviruses, including SARS-CoV-2.' },
  { id:'VI1-CARD-29', t:'Reassortment', d:'Exchange of genetic information within a segmented genome. More frequent than recombination, for example in influenza.' },
  { id:'VI1-CARD-30', t:'Antigenic shift', d:'The appearance of a new flu strain through reassortment.' },
  { id:'VI1-CARD-31', t:'Gene therapy', d:'Delivering a working gene into a patient\u2019s cells. Viruses are useful vectors because they enter cells efficiently, and they are modified so they cannot cause disease.' },
  { id:'VI1-CARD-32', t:'AAV vector', d:'Adeno-associated virus: not known to cause disease in humans, low immunogenicity, mostly stays outside host chromosomes. Examples: Zolgensma, Luxturna, Hemgenix.' },
  { id:'VI1-CARD-33', t:'Lentivirus vector', d:'A retrovirus that integrates into host DNA: long-lasting expression with a small risk of insertional mutagenesis. Often used to modify cells outside the body.' },
  { id:'VI1-CARD-34', t:'Adenovirus vector', d:'Carries large genes, but a strong immune response limits repeat dosing.' },
  { id:'VI1-CARD-35', t:'Genomes and the virion polymerase', d:'+ssRNA genomes act as mRNA. \u2212ssRNA and dsRNA viruses carry their own polymerase in the virion.' },
  { id:'VI1-CARD-36', t:'The seven DNA virus families', d:'Naked dsDNA: adenovirus, papillomavirus, polyomavirus. Enveloped dsDNA: hepadnavirus, herpesvirus, poxvirus. Naked ssDNA: parvovirus.' },
  { id:'VI1-CARD-37', t:'RNA virus families: naked or enveloped', d:'Naked: Picornaviridae and Caliciviridae (+ssRNA), Reoviridae (dsRNA). Enveloped: Coronaviridae, Flaviviridae, Togaviridae (+ssRNA); Orthomyxoviridae, Paramyxoviridae, Rhabdoviridae, Filoviridae (\u2212ssRNA); Retroviridae (RNA with reverse transcriptase).' },
  { id:'VI1-CARD-38', t:'Four things a virus can do to a cell', d:'Kill it (host macromolecule synthesis is inhibited), fuse it with neighbors into giant cells, transform it toward malignancy, or leave it with no visible change (persistent or latent infection).' },
  { id:'VI1-CARD-39', t:'Cytopathic effect (CPE)', d:'Visible changes in infected cells, such as membrane fusion into multinucleated giant cells, rounding up, or darkening. Seen with measles virus, RSV, and HSV.' },
  { id:'VI1-CARD-40', t:'Malignant transformation', d:'Infection that promotes tumor growth. Examples: HPV, EBV, HBV, HCV, HTLV-1.' },
  { id:'VI1-CARD-41', t:'Persistent or latent infection', d:'Cell and virus coexist without visible damage. Example: herpesvirus latency.' },
  { id:'VI1-CARD-42', t:'Causes of symptoms', d:'Death of infected cells (functional loss), the immune response itself (immunopathogenesis), or a viral toxin such as rotavirus NSP4.' },
  { id:'VI1-CARD-43', t:'Immunopathogenesis', d:'Symptoms caused by the immune response. Influenza fever and muscle aches come from cytokines. Hepatitis B liver injury is mainly caused by cytotoxic T cells.' },
  { id:'VI1-CARD-44', t:'Rotavirus diarrhea', d:'NSP4 (a viral enterotoxin) and serotonin released from gut cells activate enteric nerves, increasing fluid secretion and gut motility.' },
  { id:'VI1-CARD-45', t:'Local infection', d:'Replication and disease at or near the entry site. Examples: rhinovirus, rotavirus, HPV.' },
  { id:'VI1-CARD-46', t:'Systemic infection', d:'Spread through lymph nodes into the blood (viremia) or along nerves to distant organs. Usually means a longer incubation period and damage to distant organs. Antibodies can stop a virus during viremia.' },
  { id:'VI1-CARD-47', t:'Systemic examples', d:'Measles, poliovirus, and varicella-zoster virus have an incubation period while the virus spreads. Rabies and herpesviruses travel along nerves.' },
  { id:'VI1-CARD-48', t:'Interferon: the pathway', d:'An infected cell detects viral double-stranded RNA and releases interferons. Interferon binds a receptor on a nearby cell, which activates genes for antiviral proteins.' },
  { id:'VI1-CARD-49', t:'RNase L and PKR', d:'Interferon-stimulated antiviral proteins. RNase L degrades viral mRNA. PKR phosphorylates eIF2-alpha and shuts down protein synthesis.' },
  { id:'VI1-CARD-50', t:'Interferon types', d:'Classified by receptor: Type I (alpha, beta), Type II (gamma), Type III (lambda).' },
  { id:'VI1-CARD-51', t:'Nonspecific defenses', d:'Interferons, natural killer cells (perforin, granzymes, apoptosis), phagocytosis, alpha-defensins, APOBEC3G, fever, and mucociliary clearance.' },
  { id:'VI1-CARD-52', t:'APOBEC3G', d:'An editing enzyme that causes hypermutation of viral DNA.' },
  { id:'VI1-CARD-53', t:'Host factors that change risk', d:'Neonates and older adults are most susceptible. Higher-dose corticosteroids impair antiviral immunity and raise the risk of severe infection and reactivation of latent viruses. Circumcision reduces the risk of HIV, HPV, and HSV-2 acquisition in men.' },
  { id:'VI1-CARD-54', t:'How antibodies neutralize viruses', d:'By binding outer surface proteins: blocking receptor binding, cross-linking virions so the capsid cannot uncoat, enhancing phagocytosis, and activating complement, which can lyse enveloped viruses.' },
  { id:'VI1-CARD-55', t:'IgA', d:'The antibody class at mucosal surfaces (respiratory tract and gut). A first line of protection.' },
  { id:'VI1-CARD-56', t:'Active, passive, and herd immunity', d:'Active: protection by your own immune response, after infection or vaccination. Passive: protection by antibodies made by someone else (maternal IgG, immune globulin). Herd: when enough people are immune, a virus cannot spread easily, which also protects people who are not immune.' },
  { id:'VI1-CARD-57', t:'CD8 cytotoxic T cell killing', d:'The infected cell displays viral peptides on MHC class I. A CD8 T cell recognizes the peptide\u2013MHC I complex and releases perforin and granzymes. The infected cell undergoes apoptosis.' },
  { id:'VI1-CARD-58', t:'CD4 helper T cells', d:'Release cytokines that help B cells make antibody and help activate CD8 T cells.' },
  { id:'VI1-CARD-59', t:'NK cells and MHC class I', d:'Viruses that lower MHC class I escape CD8 T cells, but NK cells can detect the missing MHC I.' },
  { id:'VI1-CARD-60', t:'Evasion: T cells and interferon', d:'Reduce MHC I (HIV, HSV, CMV, adenovirus). Block IL-12, reducing Th-1 cells (measles). Block interferon synthesis (EBV). Block the kinase that phosphorylates initiation factor-2 (HIV, influenza, HSV).' },
  { id:'VI1-CARD-61', t:'Evasion: cytokines and complement', d:'Vaccinia virus encodes a decoy IL-1 receptor. Vaccinia virus and CMV encode a chemokine receptor. HSV encodes a protein that binds C3b and blocks complement.' },
  { id:'VI1-CARD-62', t:'Persistent infection', d:'The virus persists intact or as a subviral component (the genome). Contributing factors: DNA provirus, immune tolerance, infectious virus\u2013antibody complexes, immunologic shelter (brain), rapid antigenic variation, cell-to-cell spread, immunosuppression.' },
  { id:'VI1-CARD-63', t:'PCR and RT-PCR', d:'Amplify specific viral sequences; DNA or RNA probes are also used. RNA levels for HIV and hepatitis C are used to monitor therapy.' },
  { id:'VI1-CARD-64', t:'Antigen detection', d:'ELISA is often used and is very sensitive. May detect HIV antigen or hepatitis B surface antigen.' },
  { id:'VI1-CARD-65', t:'Serology', d:'Compares acute and convalescent samples. A fourfold or greater rise in titer indicates recent infection. Samples are collected about 2 to 4 weeks apart.' },
  { id:'VI1-CARD-66', t:'Titer', d:'The reciprocal of the highest dilution of serum that still gives a positive result. A rise from 1:8 to 1:32 is fourfold.' },
  { id:'VI1-CARD-67', t:'Cell culture and CPE', d:'Viral growth in cells produces a cytopathic effect. Changes in size, shape, and fusion of cells help identify the type of virus.' },
  { id:'VI1-CARD-68', t:'Microscopic identification', d:'Light, fluorescence (immunofluorescence), or electron microscopy. Visualizing cells and viral particles aids identification.' },
  { id:'VI1-CARD-69', t:'Matching the test to the question', d:'Burden over time: nucleic acid. Is the viral protein present: antigen. Has the patient responded: serology. What virus grew: culture and CPE. What does it look like: microscopy.' }
];

var POOL = [

  /* ===== Area: Viruses versus cells ===== */
  { id:'VI1-001', m:'m1', area:'Viruses versus cells', level:'concept',
    stem:"Which feature distinguishes a virus's genome from the genetic material of a human cell?",
    options:[
      "A virus carries DNA and RNA in equal amounts",
      "A virus keeps its genome inside a membrane-bound nucleus",
      "A virus carries one type of nucleic acid, either DNA or RNA",
      "A virus stores its genome on a circular plasmid"
    ], answer:2,
    why:"A virion contains one type of nucleic acid. A human cell contains both DNA and RNA, and its DNA sits in a nucleus." },

  { id:'VI1-002', m:'m1', area:'Viruses versus cells', level:'concept',
    stem:"Which statement explains why viruses are called obligate intracellular parasites?",
    options:[
      "They multiply by binary fission within host cells",
      "They carry mitochondria that supply energy for replication",
      "They synthesize proteins with their own ribosomes",
      "They rely on host ribosomes and enzymes to build new particles"
    ], answer:3,
    why:"Viruses lack the machinery to make proteins and copy themselves, so each replication cycle depends on a host cell's ribosomes and enzymes." },

  { id:'VI1-003', m:'m1', area:'Viruses versus cells', level:'application',
    stem:"A particle contains single-stranded RNA, a protein coat, and a few nonfunctional ribosomes. It cannot divide on its own. Which classification fits?",
    options:["Bacterium", "Virus", "Yeast", "Protozoan"], answer:1,
    why:"Arenaviruses are a known exception: they package a few nonfunctional ribosomes, yet they still cannot make proteins or divide without a host cell. Nonfunctional ribosomes do not make a particle a cell." },

  { id:'VI1-004', m:'m1', area:'Viruses versus cells', level:'integration',
    stem:"A pathogen contains DNA and RNA, has ribosomes, and divides by fission. A clinician proposes a drug that blocks a viral polymerase. Which statement evaluates this plan?",
    options:[
      "It is a cell, so a drug designed around a viral enzyme is aimed at the wrong target",
      "It is a cell, so polymerase inhibitors act on viruses and cells equally",
      "It is a virus, so the plan fits the evidence",
      "It is a virus, so ribosomes are the intended drug target"
    ], answer:0,
    why:"Division by fission, both nucleic acids, and ribosomes identify a cellular organism. Antiviral polymerase inhibitors are designed around viral enzymes, so this plan matches the wrong target." },

  /* ===== Area: Virion components ===== */
  { id:'VI1-005', m:'m1', area:'Virion components', level:'concept',
    stem:"Which term names a capsid together with the genome it surrounds?",
    options:["Capsomer", "Nucleocapsid", "Glycoprotein", "Matrix protein"], answer:1,
    why:"A nucleocapsid is the capsid proteins plus the nucleic acid they enclose. A capsomer is a single repeating protein unit." },

  { id:'VI1-006', m:'m1', area:'Virion components', level:'concept',
    stem:"Which component of an enveloped virion contains lipids taken from the host cell?",
    options:["The capsomers", "The viral genome", "The envelope", "The matrix proteins"], answer:2,
    why:"The envelope is a lipoprotein membrane built from host-cell membrane lipids plus virus-specific proteins." },

  { id:'VI1-007', m:'m1', area:'Virion components', level:'application',
    stem:"Which structure of an enveloped virus helps it attach to and enter a host cell?",
    options:["Matrix proteins", "Envelope glycoproteins", "Nucleic acid core", "Host ribosomes"], answer:1,
    why:"Glycoproteins in the envelope bind host receptors and help the virion enter. Matrix proteins link the envelope to the capsid, and the genome is cargo." },

  { id:'VI1-008', m:'m1', area:'Virion components', level:'application',
    stem:"During assembly of an enveloped virion, the envelope fails to connect to a finished nucleocapsid. Which missing component best explains the failure?",
    options:["Matrix proteins", "Glycoprotein spikes", "Host ribosomes", "Capsomers"], answer:0,
    why:"Matrix proteins bridge the capsid and the envelope. A nucleocapsid already includes the capsomers, and spikes sit on the outside of the envelope." },

  /* ===== Area: Capsid structure ===== */
  { id:'VI1-009', m:'m1', area:'Capsid structure', level:'concept',
    stem:"Which description fits an icosahedral capsid?",
    options:[
      "A hollow rod-shaped coil of capsomers",
      "A lipid layer with embedded glycoproteins",
      "A 20-sided polyhedron that appears spherical",
      "A set of separate RNA segments"
    ], answer:2,
    why:"Icosahedral capsids have 20 faces and look spherical. The rod-shaped coil is a helical capsid, the lipid layer is the envelope, and separate RNA segments describe a segmented genome." },

  { id:'VI1-010', m:'m1', area:'Capsid structure', level:'application',
    stem:"A disinfectant breaks open the capsids of a virus preparation. What is the most direct consequence for the viral genome?",
    options:[
      "It begins translating into viral proteins",
      "It becomes exposed to nucleases that can degrade it",
      "It is converted from RNA into DNA",
      "It integrates into host DNA"
    ], answer:1,
    why:"One job of the capsid is protecting the genome from nuclease-mediated degradation. Without that coat, nucleases can destroy it." },

  { id:'VI1-011', m:'m1', area:'Capsid structure', level:'application',
    stem:"A vaccine presents a virus's outer surface proteins to the immune system. What immune result is expected?",
    options:[
      "New capsid assembly inside host cells",
      "Faster replication of the viral genome",
      "Integration of the virus into host DNA",
      "Production of neutralizing antibodies"
    ], answer:3,
    why:"Outer viral proteins are antigens. They induce neutralizing antibodies and activate cytotoxic T cells that kill infected cells." },

  { id:'VI1-012', m:'m1', area:'Capsid structure', level:'integration',
    stem:"Two virions both look spherical under an electron microscope. The first has a 20-faced capsid and no envelope. The second has a coiled nucleocapsid inside an envelope. Which statement pairs each virion with its structure?",
    options:[
      "First: helical and enveloped; second: icosahedral and nonenveloped",
      "First: icosahedral and nonenveloped; second: helical and enveloped",
      "First: helical and nonenveloped; second: icosahedral and enveloped",
      "First: icosahedral and enveloped; second: helical and nonenveloped"
    ], answer:1,
    why:"Twenty faces means icosahedral, and no envelope means nonenveloped. A coiled nucleocapsid is helical, and the lipid layer around it is the envelope. An envelope can make a helical virion look round." },

  /* ===== Area: Envelope consequences ===== */
  { id:'VI1-013', m:'m1', area:'Envelope consequences', level:'concept',
    stem:"Which trait distinguishes enveloped viruses from nonenveloped viruses?",
    options:[
      "Greater sensitivity to drying",
      "Greater persistence on surfaces",
      "Resistance to detergents",
      "Absence of any lipid component"
    ], answer:0,
    why:"The lipid envelope is fragile. Enveloped viruses are more sensitive to heat, drying, detergents, and solvents, while nonenveloped viruses persist on surfaces much longer." },

  { id:'VI1-014', m:'m1', area:'Envelope consequences', level:'concept',
    stem:"Why can variable envelope glycoproteins help a virus evade immunity?",
    options:[
      "Variation prevents the virus from reaching host receptors",
      "Variation causes antibodies to attack host cells instead",
      "Variation can leave existing antibodies unable to recognize the virus",
      "Variation lets the virus replicate without a host cell"
    ], answer:2,
    why:"Surface proteins are the main antigens. If a glycoprotein changes, antibodies made against the old form may no longer bind it." },

  { id:'VI1-015', m:'m1', area:'Envelope consequences', level:'application',
    stem:"A cleaning team must remove norovirus from a bathroom. Which fact about norovirus should guide the choice of method?",
    options:[
      "It has an envelope that alcohol dissolves",
      "It cannot persist outside the human body",
      "It is a bacterium that grows on surfaces",
      "It lacks an envelope and persists on surfaces"
    ], answer:3,
    why:"Norovirus is nonenveloped, so it resists drying and many solvent-based products and can remain infectious on surfaces. Cleaning plans have to account for that persistence." },

  { id:'VI1-016', m:'m1', area:'Envelope consequences', level:'integration',
    stem:"A family is recovering from a norovirus illness and asks a pharmacist about hand hygiene. Which recommendation fits norovirus structure and CDC advice?",
    options:[
      "Wash with soap and water, because the virus lacks an envelope that alcohol disrupts",
      "Use alcohol sanitizer, because the virus has an envelope that alcohol dissolves",
      "Use alcohol sanitizer, because drying on the hands kills the virus",
      "Use antibiotic soap, because the virus is a bacterium"
    ], answer:0,
    why:"Norovirus is nonenveloped, so alcohol sanitizers are less effective against it, and soap and water works better (CDC). Antibiotics act on bacteria, not viruses." },

  /* ===== MODULE 2 ===== */

  /* ===== Area: Replication steps ===== */
  { id:'VI1-017', m:'m2', area:'Replication steps', level:'concept',
    stem:"Which event is the first step of the viral replication cycle?",
    options:[
      "Copying of the viral genome",
      "Assembly of new virions",
      "Budding from the host membrane",
      "Binding to host cell receptors"
    ], answer:3,
    why:"A virion has to bind a host cell receptor before anything else can happen. Genome copying, assembly, and budding follow." },

  { id:'VI1-018', m:'m2', area:'Replication steps', level:'concept',
    stem:"Which process frees the viral genome from its capsid inside the host cell?",
    options:["Uncoating", "Assembly", "Budding", "Attachment"], answer:0,
    why:"Uncoating releases the genome once the virion has entered. Assembly and budding build and release new virions, and attachment is the first step." },

  { id:'VI1-019', m:'m2', area:'Replication steps', level:'application',
    stem:"A virus makes long precursor proteins that must be cut into working pieces. Which viral enzyme cuts them?",
    options:["Neuraminidase", "Protease", "Polymerase", "Integrase"], answer:1,
    why:"Viral protease cuts long precursors during protein processing. Polymerase copies the genome, integrase inserts DNA into host DNA, and neuraminidase acts at release." },

  { id:'VI1-020', m:'m2', area:'Replication steps', level:'application',
    stem:"A retrovirus has released its RNA genome into a cell. Which event has to happen before integration into host DNA?",
    options:[
      "Budding from the membrane",
      "Cleavage of precursor proteins",
      "Reverse transcription of RNA into DNA",
      "Assembly of progeny virions"
    ], answer:2,
    why:"Integrase inserts DNA into the host chromosome, so reverse transcriptase must first make DNA from the RNA genome." },

  /* ===== Area: Antiviral targets ===== */
  { id:'VI1-021', m:'m2', area:'Antiviral targets', level:'concept',
    stem:"Which drug class includes oseltamivir?",
    options:["Entry inhibitors", "Integrase inhibitors", "Protease inhibitors", "Neuraminidase inhibitors"], answer:3,
    why:"Oseltamivir is a neuraminidase inhibitor used for influenza. It acts at assembly and release." },

  { id:'VI1-022', m:'m2', area:'Antiviral targets', level:'application',
    stem:"A patient with HIV takes dolutegravir. Which replication step does the drug block?",
    options:[
      "Insertion of viral DNA into host DNA",
      "Binding to host receptors",
      "Cleavage of precursor proteins",
      "Release of new virions"
    ], answer:0,
    why:"Dolutegravir is an integrase inhibitor, so it blocks insertion of viral DNA into the host chromosome." },

  { id:'VI1-023', m:'m2', area:'Antiviral targets', level:'application',
    stem:"A new drug stops a viral polymerase from copying the genome. Which existing drug acts at the same step?",
    options:["Nirmatrelvir", "Acyclovir", "Maraviroc", "Oseltamivir"], answer:1,
    why:"Acyclovir is a nucleoside analog that blocks genome replication in HSV. Maraviroc blocks entry, oseltamivir acts at release, and nirmatrelvir blocks protein processing." },

  { id:'VI1-024', m:'m2', area:'Antiviral targets', level:'integration',
    stem:"A mutation changes a viral protease so a protease inhibitor no longer binds. Which replication step resumes?",
    options:[
      "Reverse transcription of RNA into DNA",
      "Release of virions by budding",
      "Cleavage of precursor proteins into working proteins",
      "Binding of the virion to host receptors"
    ], answer:2,
    why:"The inhibitor was holding up protein processing. When it no longer binds, the protease cuts precursors again. This is how a drug-target mutation produces resistance." },

  /* ===== Area: Phage replication cycles ===== */
  { id:'VI1-025', m:'m2', area:'Phage replication cycles', level:'concept',
    stem:"What happens to the host cell at the end of a lytic cycle?",
    options:[
      "The phage DNA joins the bacterial chromosome",
      "The cell divides with phage DNA inside",
      "The cell stops making proteins and stays intact",
      "The cell ruptures and releases many progeny phage"
    ], answer:3,
    why:"In the lytic cycle the phage makes many progeny and the cell ruptures to release them." },

  { id:'VI1-026', m:'m2', area:'Phage replication cycles', level:'concept',
    stem:"Why are progeny phage absent right after phage DNA integrates during the lysogenic cycle?",
    options:[
      "The prophage waits for a stimulus to trigger it",
      "The phage capsid is destroyed on arrival",
      "Bacterial ribosomes digest the phage DNA",
      "The phage DNA stays outside the bacterium"
    ], answer:0,
    why:"In the lysogenic cycle, progeny are made only after the prophage is stimulated, for example by UV irradiation." },

  { id:'VI1-027', m:'m2', area:'Phage replication cycles', level:'application',
    stem:"Bacteria that carry a prophage are exposed to UV light and then rupture, releasing phage. Which event explains this?",
    options:[
      "Conversion of the bacterial capsid into a phage capsid",
      "Excision of the prophage triggers progeny production",
      "Integration of new phage DNA into the chromosome",
      "Acquisition of a toxin gene from the environment"
    ], answer:1,
    why:"UV irradiation stimulates excision of the prophage, and the phage then makes progeny and lyses the cell." },

  { id:'VI1-028', m:'m2', area:'Phage replication cycles', level:'integration',
    stem:"A phage excises imprecisely and carries a neighboring bacterial gene into its progeny. What do those progeny deliver to the next bacterium?",
    options:[
      "Ribosomes from the previous host",
      "A bacterial cell wall",
      "Bacterial genes from the previous host",
      "A second complete phage genome"
    ], answer:2,
    why:"This is specialized transduction. Progeny phage that carry bacterial DNA can pass those genes to the next cell they infect." },

  /* ===== Area: Lysogenic conversion ===== */
  { id:'VI1-029', m:'m2', area:'Lysogenic conversion', level:'concept',
    stem:"What changes in a bacterium after lysogenic conversion?",
    options:[
      "It loses its own chromosome during infection",
      "It becomes a different bacterial species",
      "It stops dividing for the rest of its life",
      "It gains a prophage gene that can raise virulence"
    ], answer:3,
    why:"A prophage adds genes to the bacterial chromosome, and some of them, such as toxin genes, increase virulence. The species stays the same." },

  { id:'VI1-030', m:'m2', area:'Lysogenic conversion', level:'application',
    stem:"A strain of Corynebacterium diphtheriae causes no disease until phage \u03B2 infects it. Which explains the change?",
    options:[
      "The prophage adds a diphtheria toxin gene to the chromosome",
      "The phage lyses the bacterium and releases toxin",
      "The bacterium copies the toxin gene from a human host",
      "The phage makes the bacterium divide quickly"
    ], answer:0,
    why:"Phage \u03B2 carries the diphtheria toxin gene. Once it integrates, the bacterium produces the toxin and becomes pathogenic." },

  { id:'VI1-031', m:'m2', area:'Lysogenic conversion', level:'application',
    stem:"A laboratory finds that a harmless E. coli strain now produces Shiga toxin. Which event likely occurred?",
    options:[
      "Mutation of the ribosomes that make its proteins",
      "Acquisition of a prophage with the toxin gene",
      "Loss of the capsule around its cell wall",
      "Infection by a virus that targets human cells"
    ], answer:1,
    why:"Shiga toxin in STEC is carried by a prophage, so a strain can gain toxin production by lysogenic conversion." },

  { id:'VI1-032', m:'m2', area:'Lysogenic conversion', level:'integration',
    stem:"Two S. aureus isolates differ in virulence, and one carries a prophage with virulence genes. Which conclusion fits?",
    options:[
      "Prophage genes are lost when bacteria divide",
      "Virulence genes cannot move between strains",
      "The prophage can explain the difference within one species",
      "The isolates belong to different species"
    ], answer:2,
    why:"S. aureus prophages can carry virulence and immune-evasion genes, so prophage content can change virulence without changing the species." },

  /* ===== MODULE 3 ===== */

  /* ===== Area: Mutations ===== */
  { id:'VI1-033', m:'m3', area:'Mutations', level:'concept',
    stem:"Which change creates an antigenic variant?",
    options:[
      "A surface antigen changes shape and escapes antibodies",
      "A capsid loses its genome during uncoating",
      "Two RNA segments swap between coinfecting viruses",
      "A prophage integrates into the bacterial chromosome"
    ], answer:0,
    why:"An antigenic variant has a mutated surface antigen that existing antibodies no longer recognize. Uncoating, segment swapping, and prophage integration are different events." },

  { id:'VI1-034', m:'m3', area:'Mutations', level:'concept',
    stem:"Why does an error-prone polymerase matter for viral evolution?",
    options:[
      "It integrates DNA into host chromosomes",
      "It introduces mutations that can create new variants",
      "It prevents capsids from assembling",
      "It carries genes between bacteria"
    ], answer:1,
    why:"Copying errors become mutations. Influenza viruses, HIV, and hepatitis C virus rely on error-prone polymerases, which gives them many chances to produce variants." },

  { id:'VI1-035', m:'m3', area:'Mutations', level:'application',
    stem:"A patient\u2019s viral load rises during antiviral therapy, and sequencing shows a changed drug-binding site. Which term fits the virus?",
    options:["Reassortant", "Prophage", "Drug-resistant mutant", "Antigenic variant"], answer:2,
    why:"A mutation in a viral drug target that stops the drug from binding creates a drug-resistant mutant." },

  { id:'VI1-036', m:'m3', area:'Mutations', level:'integration',
    stem:"One mutation alters a viral drug target, and a second alters a surface antigen. What does each mutation affect?",
    options:[
      "The first causes immune escape and the second causes drug resistance",
      "Both cause drug resistance",
      "Both cause immune escape",
      "The first causes drug resistance and the second causes immune escape"
    ], answer:3,
    why:"A changed drug target stops the drug from binding. A changed surface antigen stops existing antibodies from recognizing the virus. The two changes act on different defenses." },

  /* ===== Area: Recombination and reassortment ===== */
  { id:'VI1-037', m:'m3', area:'Recombination and reassortment', level:'concept',
    stem:"Which description defines recombination?",
    options:[
      "Exchange of information between homologous regions of chromosomes",
      "Exchange of whole segments of a segmented genome",
      "Small, gradual changes in surface proteins",
      "Integration of phage DNA into a host chromosome"
    ], answer:0,
    why:"Recombination exchanges genetic information between homologous regions. Whole-segment exchange is reassortment, gradual surface changes are drift, and phage integration is lysogeny." },

  { id:'VI1-038', m:'m3', area:'Recombination and reassortment', level:'concept',
    stem:"Reassortment of influenza viruses produces new flu strains. What is this change called?",
    options:["Specialized transduction", "Antigenic shift", "Antigenic drift", "Recombination"], answer:1,
    why:"New flu strains produced by reassortment are antigenic shift. Drift is the small, gradual change that accumulates through mutation." },

  { id:'VI1-039', m:'m3', area:'Recombination and reassortment', level:'application',
    stem:"Two coronaviruses infect one cell, and a stretch of homologous sequence is exchanged between their genomes. Which process occurred?",
    options:["Antigenic drift", "Reverse transcription", "Recombination", "Reassortment"], answer:2,
    why:"Coronaviruses have unsegmented genomes, so exchange of a homologous stretch is recombination, which is documented in SARS-CoV-2. Reassortment needs a segmented genome." },

  { id:'VI1-040', m:'m3', area:'Recombination and reassortment', level:'integration',
    stem:"One year, small changes gradually accumulate in influenza surface proteins. In another year, a coinfected cell produces a virus with a new combination of whole segments. Which terms fit, in that order?",
    options:[
      "Antigenic shift, then antigenic drift",
      "Recombination, then antigenic drift",
      "Antigenic drift, then recombination",
      "Antigenic drift, then antigenic shift"
    ], answer:3,
    why:"Gradual changes from mutation are drift. A new combination of segments from reassortment is shift." },

  /* ===== Area: Gene therapy vectors ===== */
  { id:'VI1-041', m:'m3', area:'Gene therapy vectors', level:'concept',
    stem:"Why are viruses useful as gene-therapy vectors?",
    options:[
      "They enter cells efficiently and can be modified to avoid causing disease",
      "They replicate on their own without needing a host cell",
      "They avoid triggering any immune response in patients",
      "They carry small genes that are easy to control"
    ], answer:0,
    why:"Viruses already enter cells efficiently. Vectors are modified so they cannot cause disease. They still need a host cell and can trigger immune responses." },

  { id:'VI1-042', m:'m3', area:'Gene therapy vectors', level:'application',
    stem:"A therapy must modify a patient\u2019s cells outside the body and keep the gene long term. Which vector fits?",
    options:["Lentivirus", "Adeno-associated virus", "Adenovirus"], answer:0,
    why:"A lentivirus integrates into host DNA, giving long-lasting expression, and is often used to modify cells outside the body. The trade-off is a small risk of insertional mutagenesis." },

  { id:'VI1-043', m:'m3', area:'Gene therapy vectors', level:'application',
    stem:"A team must deliver a large gene and can accept that immune response will limit repeat dosing. Which vector fits?",
    options:["Lentivirus", "Adenovirus", "Adeno-associated virus"], answer:1,
    why:"Adenovirus carries large genes, but its strong immune response limits repeat dosing." },

  { id:'VI1-044', m:'m3', area:'Gene therapy vectors', level:'integration',
    stem:"A patient receiving an AAV-based therapy has liver function monitored. Which vector safety concern does this follow?",
    options:[
      "Insertion of the vector into host DNA",
      "Reversion of the vector to a disease-causing virus",
      "Loss of the therapeutic gene from the genome",
      "Immune response to the vector, including liver inflammation"
    ], answer:3,
    why:"The lecture lists immune response to the vector, for example liver inflammation, as a safety concern. Vector shedding and insertion into host DNA are other concerns." },

  /* ===== Area: Virus classification ===== */
  { id:'VI1-045', m:'m3', area:'Virus classification', level:'concept',
    stem:"Which viruses carry their own polymerase in the virion?",
    options:[
      "\u2212ssRNA and dsRNA viruses",
      "+ssRNA viruses",
      "Naked ssDNA viruses",
      "Enveloped +ssRNA viruses"
    ], answer:0,
    why:"\u2212ssRNA and dsRNA genomes cannot be translated directly, so those viruses carry a polymerase in the virion. +ssRNA genomes act as mRNA." },

  { id:'VI1-046', m:'m3', area:'Virus classification', level:'concept',
    stem:"Which family includes influenza virus?",
    options:["Filoviridae", "Orthomyxoviridae", "Paramyxoviridae", "Rhabdoviridae"], answer:1,
    why:"Influenza is in Orthomyxoviridae. Measles and mumps are in Paramyxoviridae, rabies is in Rhabdoviridae, and Ebola is in Filoviridae. All four families are enveloped \u2212ssRNA." },

  { id:'VI1-047', m:'m3', area:'Virus classification', level:'application',
    stem:"A virus has an enveloped +ssRNA genome. Which family could it belong to?",
    options:["Orthomyxoviridae", "Reoviridae", "Coronaviridae", "Picornaviridae"], answer:2,
    why:"Coronaviridae, Flaviviridae, and Togaviridae are enveloped +ssRNA. Picornaviridae is naked +ssRNA, Orthomyxoviridae is enveloped \u2212ssRNA, and Reoviridae is naked dsRNA." },

  { id:'VI1-048', m:'m3', area:'Virus classification', level:'application',
    stem:"A naked virus with an icosahedral capsid and a dsDNA genome is identified. Which family fits?",
    options:["Herpesvirus", "Poxvirus", "Parvovirus", "Adenovirus"], answer:3,
    why:"Adenovirus, papillomavirus, and polyomavirus are naked dsDNA. Herpesvirus and poxvirus are enveloped, and parvovirus has an ssDNA genome." },

  /* ===== MODULE 4 ===== */

  /* ===== Area: Cell alterations ===== */
  { id:'VI1-049', m:'m4', area:'Cell alterations', level:'concept',
    stem:"Which change leads to death of a cell infected with poliovirus?",
    options:[
      "Persistent coexistence of cell and virus",
      "Inhibition of host macromolecule synthesis",
      "Fusion with neighboring cells",
      "Activation of tumor-growth pathways"
    ], answer:1,
    why:"Poliovirus inhibits host macromolecule synthesis while viral protein synthesis continues, and the cell dies." },

  { id:'VI1-050', m:'m4', area:'Cell alterations', level:'concept',
    stem:"What forms when infected cells fuse their membranes?",
    options:["Hollow nucleocapsids", "Enveloped virions", "Multinucleated giant cells", "Integrated prophages"], answer:2,
    why:"Membrane fusion produces multinucleated giant cells, as with measles virus, RSV, and HSV." },

  { id:'VI1-051', m:'m4', area:'Cell alterations', level:'application',
    stem:"A culture infected with measles virus shows giant cells and rounded cells. Which term describes these changes?",
    options:["Lysogenic conversion", "Antigenic drift", "Malignant transformation", "Cytopathic effect"], answer:3,
    why:"Giant cells and cells that round up or darken are the cytopathic effect (CPE)." },

  { id:'VI1-052', m:'m4', area:'Cell alterations', level:'integration',
    stem:"Four infections are sorted by their effect on the infected cell: poliovirus, measles virus, HPV, and a latent herpesvirus. Which list gives the effects in that order?",
    options:[
      "Death; fusion; transformation; no visible change",
      "Fusion; death; transformation; no visible change",
      "Death; transformation; fusion; no visible change",
      "Death; fusion; no visible change; transformation"
    ], answer:0,
    why:"Poliovirus kills cells, measles virus fuses them, HPV promotes transformation, and a latent herpesvirus coexists with its cell without visible damage." },

  /* ===== Area: Causes of symptoms ===== */
  { id:'VI1-053', m:'m4', area:'Causes of symptoms', level:'concept',
    stem:"Which process underlies the symptoms of many viral infections?",
    options:[
      "Increased host protein synthesis",
      "Loss of function when infected cells die",
      "Gain of function in uninfected cells",
      "Reduced release of cytokines"
    ], answer:1,
    why:"Death of infected cells, caused by virus-induced inhibition of macromolecular synthesis, leads to functional loss and symptom onset." },

  { id:'VI1-054', m:'m4', area:'Causes of symptoms', level:'concept',
    stem:"Which viral protein acts as an enterotoxin in rotavirus infection?",
    options:["Matrix protein", "Integrase", "NSP4", "Reverse transcriptase"], answer:2,
    why:"NSP4 is the rotavirus enterotoxin. Together with serotonin from gut cells, it activates enteric nerves." },

  { id:'VI1-055', m:'m4', area:'Causes of symptoms', level:'application',
    stem:"A child with rotavirus infection has watery diarrhea. Which sequence explains it?",
    options:[
      "Cytotoxic T cells kill gut cells, which stops fluid absorption",
      "Cytokines raise body temperature, which dilates gut vessels",
      "Viral DNA integrates into gut cells and blocks absorption",
      "NSP4 and serotonin activate enteric nerves that raise secretion and motility"
    ], answer:3,
    why:"Rotavirus diarrhea is driven by NSP4 and serotonin activating enteric nerves, which raises fluid secretion and motility." },

  { id:'VI1-056', m:'m4', area:'Causes of symptoms', level:'integration',
    stem:"Which pair correctly matches a symptom with its source?",
    options:[
      "Rotavirus diarrhea: a viral enterotoxin and serotonin",
      "Rotavirus diarrhea: cytokines from the immune response",
      "Influenza fever: cytotoxic T cells killing liver cells",
      "Influenza muscle aches: death of infected muscle cells"
    ], answer:0,
    why:"Rotavirus diarrhea comes from NSP4 and serotonin. Influenza fever and muscle aches are driven by cytokines, and cytotoxic T cells cause hepatitis B liver injury." },

  /* ===== Area: Immunopathogenesis ===== */
  { id:'VI1-057', m:'m4', area:'Immunopathogenesis', level:'concept',
    stem:"What is immunopathogenesis?",
    options:[
      "Spread of virus along nerves",
      "Symptoms caused by the immune response itself",
      "Symptoms caused by a viral toxin",
      "Death of cells from viral protein shutoff"
    ], answer:1,
    why:"In immunopathogenesis, the immune response itself causes the symptoms." },

  { id:'VI1-058', m:'m4', area:'Immunopathogenesis', level:'concept',
    stem:"What drives fever and muscle aches in influenza?",
    options:[
      "Cytotoxic T cells killing hepatocytes",
      "NSP4 activating enteric nerves",
      "Cytokines released during the immune response",
      "Direct viral destruction of muscle cells"
    ], answer:2,
    why:"Fever and muscle aches in influenza are driven by cytokines released during the immune response." },

  { id:'VI1-059', m:'m4', area:'Immunopathogenesis', level:'application',
    stem:"Liver injury in hepatitis B is mainly caused by which process?",
    options:[
      "Direct inhibition of host protein synthesis",
      "Release of a viral enterotoxin",
      "Fusion of hepatocytes into giant cells",
      "Cytotoxic T cells killing infected hepatocytes"
    ], answer:3,
    why:"Cytotoxic T cells kill infected hepatocytes, and that immune attack is the main cause of liver injury in hepatitis B." },

  { id:'VI1-060', m:'m4', area:'Immunopathogenesis', level:'integration',
    stem:"Why can higher-dose corticosteroids lead to reactivation of latent viruses such as HBV and herpesviruses?",
    options:[
      "They impair antiviral immunity",
      "They increase interferon production",
      "They destroy the viral capsid",
      "They raise cytotoxic T-cell killing"
    ], answer:0,
    why:"Corticosteroids impair antiviral immunity, and higher doses raise the risk of severe infection and reactivation of latent viruses. A weaker immune response also means less immune-driven injury, but the virus is less well controlled." },

  /* ===== Area: Local versus systemic spread ===== */
  { id:'VI1-061', m:'m4', area:'Local versus systemic spread', level:'concept',
    stem:"What defines a local viral infection?",
    options:[
      "Integration into host DNA",
      "Replication and disease at or near the entry site",
      "Spread through lymph nodes into the blood",
      "Travel along nerves to distant organs"
    ], answer:1,
    why:"A local infection stays at or near the entry site, as with rhinovirus, rotavirus, and HPV." },

  { id:'VI1-062', m:'m4', area:'Local versus systemic spread', level:'concept',
    stem:"What is viremia?",
    options:[
      "Fusion of infected cells into giant cells",
      "Release of cytokines during infection",
      "Virus in the blood after spread through lymph nodes",
      "Virus held latent in nerve ganglia"
    ], answer:2,
    why:"Viremia is virus circulating in the blood after spread through lymph nodes. It is one route to systemic infection." },

  { id:'VI1-063', m:'m4', area:'Local versus systemic spread', level:'application',
    stem:"Which virus spreads along nerves after entry through a bite?",
    options:["Rhinovirus", "Rotavirus", "HPV", "Rabies virus"], answer:3,
    why:"Rabies virus travels along nerves. Rhinovirus, rotavirus, and HPV cause local infections." },

  { id:'VI1-064', m:'m4', area:'Local versus systemic spread', level:'integration',
    stem:"Rhinovirus causes disease in the nose and throat, while measles virus spreads through the body. Which difference would you expect?",
    options:[
      "Measles has the longer incubation period, because the virus spreads before symptoms begin",
      "Rhinovirus has the longer incubation period, because it spreads to distant organs first",
      "The incubation periods are equal, because both replicate in cells",
      "Measles has the shorter incubation period, because antibodies stop it during viremia"
    ], answer:0,
    why:"Systemic spread usually means a longer incubation period and damage to distant organs. A local infection such as rhinovirus produces disease at the entry site." },

  /* ===== MODULE 5 (part 1) ===== */

  /* ===== Area: Interferon ===== */
  { id:'VI1-065', m:'m5', area:'Interferon', level:'concept',
    stem:"What do infected cells detect that leads to interferon release?",
    options:["Viral double-stranded RNA", "Viral lipid envelopes", "Host ribosomes", "Complement proteins"], answer:0,
    why:"Infected cells detect viral double-stranded RNA and release interferons." },

  { id:'VI1-066', m:'m5', area:'Interferon', level:'application',
    stem:"A nearby cell has been exposed to interferon and is now infected. Which interferon-stimulated protein degrades the viral mRNA?",
    options:["Perforin", "RNase L", "PKR", "APOBEC3G"], answer:1,
    why:"RNase L degrades viral mRNA. PKR shuts down protein synthesis, APOBEC3G causes hypermutation of viral DNA, and perforin is released by killer cells." },

  { id:'VI1-067', m:'m5', area:'Interferon', level:'integration',
    stem:"A cell makes RNase L but lacks functional PKR after interferon exposure. What is expected when it is infected?",
    options:[
      "Viral mRNA is degraded and protein synthesis is shut down",
      "Viral mRNA persists, and host proteins are made at the usual rate",
      "Viral mRNA is degraded, while protein synthesis continues",
      "Viral mRNA persists, and protein synthesis is shut down"
    ], answer:2,
    why:"RNase L still degrades viral mRNA, but without PKR the cell cannot phosphorylate eIF2-alpha to shut down protein synthesis. Removing either arm leaves the other working." },

  /* ===== Area: Nonspecific defenses ===== */
  { id:'VI1-068', m:'m5', area:'Nonspecific defenses', level:'concept',
    stem:"Which defense moves pathogens out of the respiratory tract?",
    options:["Fever", "APOBEC3G", "Alpha-defensins", "Mucociliary clearance"], answer:3,
    why:"Mucociliary clearance moves pathogens out of the respiratory tract." },

  { id:'VI1-069', m:'m5', area:'Nonspecific defenses', level:'application',
    stem:"Which nonspecific defense kills infected cells by releasing perforin and granzymes?",
    options:["Natural killer cells", "Alpha-defensins", "Macrophages", "Mucociliary clearance"], answer:0,
    why:"Natural killer cells kill infected cells with perforin and granzymes, which causes apoptosis." },

  { id:'VI1-070', m:'m5', area:'Nonspecific defenses', level:'integration',
    stem:"A patient has a fever during infection with an enveloped virus. Which effect could help limit the virus?",
    options:[
      "Heat converts the virus into a prophage in the host",
      "Heat may destabilize the envelope and reduce replication",
      "Heat strengthens the viral capsid against antibodies",
      "Heat blocks interferon synthesis in neighboring cells"
    ], answer:1,
    why:"Enveloped viruses are sensitive to heat, as Module 1 showed. Fever may destabilize enveloped viruses and may reduce replication." },

  /* ===== Area: Antibody defense ===== */
  { id:'VI1-071', m:'m5', area:'Antibody defense', level:'concept',
    stem:"Which part of a virus do neutralizing antibodies bind?",
    options:[
      "The internal polymerase",
      "Matrix protein inside the envelope",
      "Outer surface proteins",
      "The genome inside the capsid"
    ], answer:2,
    why:"Antibody production neutralizes infectivity by binding outer surface proteins." },

  { id:'VI1-072', m:'m5', area:'Antibody defense', level:'application',
    stem:"Antibodies cross-link virions so the capsid cannot uncoat. Which step of replication is blocked?",
    options:["Assembly", "Genome replication", "Release", "Entry and uncoating"], answer:3,
    why:"Uncoating releases the genome inside the cell. Cross-linking by antibody blocks it." },

  { id:'VI1-073', m:'m5', area:'Antibody defense', level:'integration',
    stem:"A nonenveloped virus and an enveloped virus are both coated with antibody. Which mechanism can lyse the enveloped virus by damaging its membrane?",
    options:["Complement activation", "Enhanced phagocytosis", "Blocking of receptor binding", "Cross-linking of capsids"], answer:0,
    why:"Antibody can activate complement, which can lyse enveloped viruses. The envelope is the lipid membrane that complement can damage." },

  /* ===== MODULE 5 (part 2) ===== */

  /* ===== Area: Immunization and herd immunity ===== */
  { id:'VI1-074', m:'m5', area:'Immunization and herd immunity', level:'concept',
    stem:"What does herd immunity mean?",
    options:[
      "A single infection protects a person from reinfection for life",
      "Enough people are immune that spread is limited, which also protects people without immunity",
      "Each person in a population has personally made antibodies against the virus",
      "Antibodies made by one person are transferred to another person"
    ], answer:1,
    why:"Herd immunity is a population effect. When enough people are immune, spread is limited, and people who are not immune are protected indirectly." },

  { id:'VI1-075', m:'m5', area:'Immunization and herd immunity', level:'application',
    stem:"A patient exposed to a virus receives immune globulin. Which type of immunity does this provide?",
    options:["Herd immunity", "Cell-mediated immunity", "Passive immunity", "Active immunity"], answer:2,
    why:"Immune globulin supplies antibodies made by someone else, which is passive immunity. Active immunity would come from the patient\u2019s own response." },

  { id:'VI1-076', m:'m5', area:'Immunization and herd immunity', level:'integration',
    stem:"As the proportion of immune people in a community rises, what happens to chains of transmission, and who benefits?",
    options:[
      "Chains become easier to sustain, and immune people are protected",
      "Chains are unchanged, and immune people are protected",
      "Chains become harder to sustain, and immune people are protected",
      "Chains become harder to sustain, and some non-immune people are protected"
    ], answer:3,
    why:"Immune people block transmission paths. Chains break more often, which protects the immune and also shields some people who are not immune." },

  /* ===== Area: CD8 and NK cells ===== */
  { id:'VI1-077', m:'m5', area:'CD8 and NK cells', level:'concept',
    stem:"Which cell recognizes a viral peptide displayed on MHC class I?",
    options:["CD8 cytotoxic T cell", "CD4 helper T cell", "NK cell", "B cell"], answer:0,
    why:"A CD8 cytotoxic T cell recognizes the peptide\u2013MHC I complex on an infected cell." },

  { id:'VI1-078', m:'m5', area:'CD8 and NK cells', level:'application',
    stem:"A virus lowers MHC class I on infected cells. Which cell can still detect them?",
    options:["B cell", "NK cell", "CD8 cytotoxic T cell", "Th-1 cell"], answer:1,
    why:"CD8 T cells need peptide on MHC I, so they are weakened. NK cells can detect the missing MHC I." },

  { id:'VI1-079', m:'m5', area:'CD8 and NK cells', level:'integration',
    stem:"Which sequence describes how a CD8 T cell eliminates an infected cell?",
    options:[
      "It recognizes missing MHC I, releases antibody, and the cell lyses",
      "It recognizes viral RNA, releases interferon, and the virus is uncoated",
      "It recognizes peptide\u2013MHC I, releases perforin and granzymes, and the cell undergoes apoptosis",
      "It recognizes peptide\u2013MHC II, releases cytokines, and the cell is phagocytosed"
    ], answer:2,
    why:"CD8 T cells recognize the peptide\u2013MHC I complex and kill by perforin and granzymes, which induce apoptosis." },

  /* ===== Area: Immune evasion and persistence ===== */
  { id:'VI1-080', m:'m5', area:'Immune evasion and persistence', level:'concept',
    stem:"Which viruses can persist as a DNA provirus integrated into host cell DNA?",
    options:["Picornaviruses", "Orthomyxoviruses", "Reoviruses", "Retroviruses"], answer:3,
    why:"Retroviruses make DNA from their RNA and integrate it into host DNA as a provirus, so the genome persists in the cell." },

  { id:'VI1-081', m:'m5', area:'Immune evasion and persistence', level:'application',
    stem:"Measles virus blocks IL-12. What is the expected effect?",
    options:[
      "Fewer Th-1 cells form, reducing cell-mediated immunity",
      "More Th-1 cells form, increasing cell-mediated immunity",
      "MHC class I rises on infected cells",
      "Interferon synthesis rises in infected cells"
    ], answer:0,
    why:"IL-12 drives formation of Th-1 cells. Blocking it reduces Th-1 cells and so decreases cell-mediated immunity." },

  { id:'VI1-082', m:'m5', area:'Immune evasion and persistence', level:'integration',
    stem:"A virus spreads directly from one cell to the next without exiting a cell. Which defense does this avoid?",
    options:[
      "NK cells, because MHC class I rises",
      "Antibody, because the virus stays inside cells, out of reach",
      "Cytotoxic T cells, because infected cells are hidden",
      "Interferon, because no cell detects viral RNA"
    ], answer:1,
    why:"With cell-to-cell spread, no antibody exposure occurs. Antibodies act on virions outside cells." },

  /* ===== MODULE 6 ===== */

  /* ===== Area: Choosing a test ===== */
  { id:'VI1-083', m:'m6', area:'Choosing a test', level:'concept',
    stem:"Which assay amplifies specific viral sequences?",
    options:["Serology", "Cell culture", "PCR or RT-PCR", "ELISA"], answer:2,
    why:"PCR (or RT-PCR for RNA viruses) amplifies specific viral sequences." },

  { id:'VI1-084', m:'m6', area:'Choosing a test', level:'application',
    stem:"A patient with chronic hepatitis C is on therapy. Which result best shows whether viral burden is falling?",
    options:[
      "A single positive hepatitis B surface antigen",
      "Cell fusion seen in a culture",
      "A twofold rise in paired titers",
      "A falling HCV RNA level on repeat testing"
    ], answer:3,
    why:"HCV RNA levels are used to monitor therapy, and nucleic acid testing measures them." },

  { id:'VI1-085', m:'m6', area:'Choosing a test', level:'application',
    stem:"A clinician wants to detect hepatitis B surface antigen in a patient\u2019s blood. Which assay category fits?",
    options:["Antigen detection", "Paired serology", "Cell culture", "Electron microscopy"], answer:0,
    why:"Detecting a viral protein such as hepatitis B surface antigen is antigen detection, often by ELISA." },

  { id:'VI1-086', m:'m6', area:'Choosing a test', level:'integration',
    stem:"Which choice best matches a test to monitoring HIV therapy?",
    options:[
      "Light microscopy, because virions are counted in blood",
      "RT-PCR for HIV RNA, because RNA levels are used to monitor therapy",
      "Serology on acute and convalescent samples, because titers fall with therapy",
      "Cell culture, because CPE measures viral load"
    ], answer:1,
    why:"HIV is an RNA virus, and HIV RNA levels are used to monitor therapy. RT-PCR measures them." },

  /* ===== Area: Serology and titers ===== */
  { id:'VI1-087', m:'m6', area:'Serology and titers', level:'concept',
    stem:"What does serology compare to identify a recent infection?",
    options:[
      "Culture results from two cell types",
      "Viral RNA levels in two patients",
      "Acute and convalescent samples",
      "Two samples from the same day"
    ], answer:2,
    why:"Serology compares acute and convalescent samples and looks for a fourfold or greater rise in titer." },

  { id:'VI1-088', m:'m6', area:'Serology and titers', level:'application',
    stem:"A patient\u2019s acute titer is 1:8 and the convalescent titer is 1:64. What is the interpretation?",
    options:[
      "A twofold rise, which falls short of recent infection",
      "An eightfold fall, which indicates past infection",
      "No change, which excludes infection",
      "An eightfold rise, which indicates recent infection"
    ], answer:3,
    why:"1:8 to 1:64 is an eightfold rise. A fourfold or greater rise indicates recent infection." },

  { id:'VI1-089', m:'m6', area:'Serology and titers', level:'application',
    stem:"A patient\u2019s acute titer is 1:16 and the convalescent titer is 1:32. What is the interpretation?",
    options:[
      "A twofold rise, which falls short of the fourfold criterion",
      "A fourfold rise, which indicates recent infection",
      "A twofold rise, which indicates recent infection",
      "A fourfold fall, which indicates past infection"
    ], answer:0,
    why:"1:16 to 1:32 is only a twofold rise, below the fourfold threshold for recent infection." },

  { id:'VI1-090', m:'m6', area:'Serology and titers', level:'integration',
    stem:"Why are the two serology samples collected about 2 to 4 weeks apart?",
    options:[
      "It lets viral antigen fall below the detection limit",
      "It gives antibody levels time to rise by fourfold",
      "It lets the virus grow in culture between the two samples",
      "It lets the acute sample be amplified by PCR first"
    ], answer:1,
    why:"If the second sample came too soon, antibodies might not have risen enough to show a fourfold or greater change." },

  /* ===== Area: Culture and CPE ===== */
  { id:'VI1-091', m:'m6', area:'Culture and CPE', level:'concept',
    stem:"What does cytopathic effect (CPE) describe?",
    options:[
      "Amplification of viral sequences from a specimen",
      "Staining of viral particles by fluorescent antibody",
      "Changes in size, shape, or fusion of cultured cells caused by viral growth",
      "A fourfold rise in antibody titer between two samples"
    ], answer:2,
    why:"Viral growth in cells produces CPE: changes in size, shape, and fusion of cells that help identify the type of virus." },

  { id:'VI1-092', m:'m6', area:'Culture and CPE', level:'application',
    stem:"A culture shows cells fused into multinucleated giant cells. What does this provide?",
    options:[
      "A titer rise that shows a recent infection",
      "A measure of the HIV RNA level in blood",
      "A viral antigen result from an ELISA plate",
      "A CPE pattern that helps identify the virus"
    ], answer:3,
    why:"Fusion of cells is one CPE pattern, and the pattern of change helps indicate the type of virus." },

  { id:'VI1-093', m:'m6', area:'Culture and CPE', level:'application',
    stem:"Which technique visualizes viral particles directly?",
    options:["Electron microscopy", "ELISA on serum", "RT-PCR on blood", "Paired titers"], answer:0,
    why:"Electron microscopy visualizes cells and viral particles. The other assays detect antigen, nucleic acid, or antibody." },

  { id:'VI1-094', m:'m6', area:'Culture and CPE', level:'integration',
    stem:"A virus grows in cell culture, and the cells round up and fuse. What do these findings show?",
    options:[
      "A viral protein was detected in the specimen",
      "Infectious virus grew, and the CPE suggests the virus type",
      "The patient has made antibodies against the virus",
      "The viral RNA level has fallen with therapy"
    ], answer:1,
    why:"Growth in cells produces CPE, and changes in size, shape, and fusion help identify the type of virus." },

  /* ===== Area: Integrated cases ===== */
  { id:'VI1-095', m:'m6', area:'Integrated cases', level:'application',
    stem:"A virion is naked, has a dsRNA genome, and carries its own polymerase. Which family and which hand-hygiene implication fit?",
    options:[
      "Reoviridae; alcohol sanitizer dissolves its capsid",
      "Picornaviridae; the genome acts as mRNA and needs no polymerase",
      "Reoviridae; alcohol sanitizer is less effective on a naked virion",
      "Orthomyxoviridae; alcohol sanitizer disrupts its lipid envelope"
    ], answer:2,
    why:"A naked dsRNA virion with its own polymerase fits Reoviridae. With no lipid envelope, alcohol has little to disrupt." },

  { id:'VI1-096', m:'m6', area:'Integrated cases', level:'application',
    stem:"A newborn is protected from a gut virus by maternal IgG. Which type of immunity is this, and which antibody gives first-line mucosal protection?",
    options:[
      "Active immunity; IgA",
      "Passive immunity; IgM",
      "Herd immunity; IgG",
      "Passive immunity; IgA"
    ], answer:3,
    why:"Maternal IgG is antibody made by someone else, which is passive immunity. IgA at mucosal surfaces is a first line of protection." },

  { id:'VI1-097', m:'m6', area:'Integrated cases', level:'integration',
    stem:"A clinician has an acute-phase sample from a patient with a systemic viral illness and wants to show recent infection by antibody response. What should be done next?",
    options:[
      "Collect a convalescent sample about 2 to 4 weeks later and compare titers",
      "Repeat the acute sample the same day and compare titers",
      "Grow the acute sample in culture and look for antibodies",
      "Stain the acute sample for fusion of cells"
    ], answer:0,
    why:"Serology needs a second, convalescent sample collected about 2 to 4 weeks later, so a fourfold or greater rise can be detected." },

  { id:'VI1-098', m:'m6', area:'Integrated cases', level:'integration',
    stem:"Which pairing of test and target is correct?",
    options:[
      "PCR: viral nucleic acid; ELISA: antibody response; paired titers: viral antigen",
      "PCR: viral nucleic acid; ELISA: viral antigen; paired titers: antibody response",
      "PCR: viral antigen; ELISA: viral nucleic acid; paired titers: antibody response",
      "PCR: antibody response; ELISA: viral antigen; paired titers: viral nucleic acid"
    ], answer:1,
    why:"PCR detects nucleic acid, ELISA is often used to detect viral antigen, and paired titers show the antibody response." }
];
