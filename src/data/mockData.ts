export interface PYQ {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAns: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  year?: number;
  isSample?: boolean;
}

export interface UnitNote {
  id: number;
  text: string;
}

export interface AnalysisItem {
  topic: string;
  percentage: number;
}

export interface Unit {
  id: number;
  name: string;
  officialTitle: string;
  description: string;
  pyqCount: number;
  mastery: number;
  topics: string[];
  notes: string[];
  pyqs: PYQ[];
  analysis: AnalysisItem[];
}

export const units: Unit[] = [
  {
    id: 1,
    name: "Political Theory",
    officialTitle: "Unit 1: Political Theory",
    description: "Liberty, Equality, Justice, Rights, Democracy, Power, Citizenship, Ideologies",
    pyqCount: 127,
    mastery: 83,
    topics: ["Liberty & Equality", "Justice & Rights", "Democracy", "Power & Authority", "Liberalism, Marxism, Feminism"],
    notes: [
      "Political Theory = Ideas about state, power, justice.",
      "Liberty: Negative (freedom from) vs Positive (freedom to).",
      "Equality: Formal vs Substantive equality.",
      "Justice: Procedural vs Distributive - Rawls Theory of Justice imp.",
      "Rights: Natural, Legal, Human Rights evolution."
    ],
    pyqs: [
      { id: 101, question: "Who said 'Liberty is the opposite of over-government'?", optionA: "Locke", optionB: "Seeley", optionC: "Laski", optionD: "Green", correctAns: "B", explanation: "Seeley defined liberty as absence of over-government. SAMPLE QUESTION - will be replaced with verified PYQ.", isSample: true },
      { id: 102, question: "Rawls' veil of ignorance is associated with:", optionA: "Liberty", optionB: "Justice as Fairness", optionC: "Power", optionD: "Equality", correctAns: "B", explanation: "John Rawls - Justice as Fairness uses veil of ignorance to choose principles. SAMPLE.", isSample: true }
    ],
    analysis: [{ topic: "Liberty", percentage: 85 }, { topic: "Justice", percentage: 78 }, { topic: "Rights", percentage: 65 }]
  },
  {
    id: 2,
    name: "Political Thought",
    officialTitle: "Unit 2: Political Thought",
    description: "Western Thinkers: Plato to Marx, Modern: Gramsci, Rawls",
    pyqCount: 142,
    mastery: 75,
    topics: ["Plato & Aristotle", "Machiavelli to Rousseau", "Marx & Gramsci", "Rawls & Nozick"],
    notes: ["Plato: Ideal State, Philosopher King", "Aristotle: State as natural, classification of governments", "Hobbes: Leviathan, Social Contract", "Rousseau: General Will"],
    pyqs: [{ id: 201, question: "Plato's Republic is about:", optionA: "Ideal State", optionB: "Laws", optionC: "Democracy", optionD: "Justice only", correctAns: "A", explanation: "Republic describes Ideal State with Philosopher King. SAMPLE.", isSample: true }],
    analysis: [{ topic: "Greek Thought", percentage: 90 }, { topic: "Social Contract", percentage: 70 }]
  },
  {
    id: 3,
    name: "Indian Political Thought",
    officialTitle: "Unit 3: Indian Political Thought",
    description: "Dharamshastra, Kautilya, Gandhi, Ambedkar, Nehru, Lohia",
    pyqCount: 98,
    mastery: 60,
    topics: ["Ancient: Kautilya, Manu", "Reformers: Vivekananda, Tagore", "Gandhi & Ambedkar", "Nehru to Upadhyaya"],
    notes: ["Kautilya Arthashastra = Saptanga theory", "Gandhi: Swaraj, Satyagraha, Trusteeship", "Ambedkar: Social Justice, Constitutional Morality"],
    pyqs: [{ id: 301, question: "Kautilya's Saptanga theory has how many elements?", optionA: "5", optionB: "7", optionC: "8", optionD: "6", correctAns: "B", explanation: "Sapta = 7 Angas of state. SAMPLE.", isSample: true }],
    analysis: [{ topic: "Gandhi", percentage: 80 }, { topic: "Ambedkar", percentage: 75 }]
  },
  {
    id: 4,
    name: "Comparative Political Analysis",
    officialTitle: "Unit 4: Comparative Political Analysis",
    description: "Approaches, Colonialism, State Theory, Regimes, Democratisation",
    pyqCount: 87,
    mastery: 45,
    topics: ["Approaches to Comparative", "Colonialism & Nationalism", "State Theory", "Political Regimes"],
    notes: ["Institutional approach focuses on formal institutions", "Political Culture - Almond & Verba", "Welfare State vs Post-colonial state"],
    pyqs: [{ id: 401, question: "Comparative Politics as independent subject started after:", optionA: "WW1", optionB: "WW2", optionC: "Cold War", optionD: "1990s", correctAns: "B", explanation: "After WW2 comparative politics developed. SAMPLE.", isSample: true }],
    analysis: [{ topic: "Approaches", percentage: 60 }]
  },
  {
    id: 5,
    name: "International Relations",
    officialTitle: "Unit 5: International Relations",
    description: "IR Theories, Cold War, Non-alignment, International Organisations",
    pyqCount: 135,
    mastery: 50,
    topics: ["Realism & Liberalism", "Cold War & Post Cold War", "NAM", "UN & Regional Orgs"],
    notes: ["Realism: Morgenthau, state as power seeker", "Liberalism: Cooperation possible", "UN has 6 principal organs"],
    pyqs: [{ id: 501, question: "Father of Realism in IR?", optionA: "Morgenthau", optionB: "Waltz", optionC: "Carr", optionD: "Mearsheimer", correctAns: "A", explanation: "Hans Morgenthau classical realism. SAMPLE.", isSample: true }],
    analysis: [{ topic: "IR Theory", percentage: 55 }]
  },
  {
    id: 6,
    name: "India's Foreign Policy",
    officialTitle: "Unit 6: India's Foreign Policy",
    description: "Determinants, NAM, Relations with neighbours, Major Powers",
    pyqCount: 112,
    mastery: 30,
    topics: ["Determinants & NAM", "India-Pakistan-China", "India-USA-Russia", "SAARC, BRICS, UNO"],
    notes: ["Panchsheel 1954", "NAM 1961 Belgrade", "Look East now Act East Policy"],
    pyqs: [{ id: 601, question: "Panchsheel Agreement was between:", optionA: "India-Pakistan", optionB: "India-China", optionC: "India-Nepal", optionD: "India-USSR", correctAns: "B", explanation: "1954 India-China Panchsheel. SAMPLE.", isSample: true }],
    analysis: [{ topic: "NAM", percentage: 70 }]
  },
  {
    id: 7,
    name: "Political Institutions in India",
    officialTitle: "Unit 7: Political Institutions in India",
    description: "Constituent Assembly, Constitution, Executive, Legislature, Judiciary, Federalism",
    pyqCount: 158,
    mastery: 92,
    topics: ["Making of Constitution", "President & PM", "Parliament", "Supreme Court", "Federalism & Local Govt"],
    notes: ["Constituent Assembly formed 1946, 389 members", "42nd Amendment 1976 - Mini Constitution", "Basic Structure doctrine - Kesavananda Bharati 1973"],
    pyqs: [{ id: 701, question: "Basic Structure doctrine given in which case?", optionA: "Kesavananda Bharati", optionB: "Maneka Gandhi", optionC: "Golaknath", optionD: "Minerva Mills", correctAns: "A", explanation: "1973 Kesavananda Bharati case. SAMPLE.", isSample: true }],
    analysis: [{ topic: "Constitution", percentage: 95 }, { topic: "Federalism", percentage: 80 }]
  },
  {
    id: 8,
    name: "Political Processes in India",
    officialTitle: "Unit 8: Political Processes in India",
    description: "State & Economy, Identity Politics, Social Movements, Gender & Politics",
    pyqCount: 124,
    mastery: 68,
    topics: ["Caste, Religion, Region", "Social Movements", "Civil Society", "Electoral Politics"],
    notes: ["Caste politicisation vs Politicisation of caste - Rajni Kothari", "Chipko movement = environmental", "Gender reservation 33% in Panchayat"],
    pyqs: [{ id: 801, question: "Who coined 'Politicization of caste'?", optionA: "M.N. Srinivas", optionB: "Rajni Kothari", optionC: "Lohia", optionD: "Ambedkar", correctAns: "B", explanation: "Rajni Kothari concept. SAMPLE.", isSample: true }],
    analysis: [{ topic: "Caste Politics", percentage: 72 }]
  },
  {
    id: 9,
    name: "Public Administration",
    officialTitle: "Unit 9: Public Administration",
    description: "Meaning, Evolution, Theories, Organization, Budget, Accountability",
    pyqCount: 105,
    mastery: 55,
    topics: ["Meaning & Evolution", "Theories - Wilson to Simon", "Bureaucracy", "Budget & Accountability"],
    notes: ["Woodrow Wilson: Politics-Administration dichotomy 1887", "POSDCORB - Luther Gulick", "Weber Bureaucracy: Hierarchy, Rules, Impersonality"],
    pyqs: [{ id: 901, question: "Father of Public Administration?", optionA: "Wilson", optionB: "Weber", optionC: "Fayol", optionD: "Taylor", correctAns: "A", explanation: "Woodrow Wilson essay 1887. SAMPLE.", isSample: true }],
    analysis: [{ topic: "Theories", percentage: 65 }]
  },
  {
    id: 10,
    name: "Governance and Public Policy in India",
    officialTitle: "Unit 10: Governance and Public Policy in India",
    description: "Governance, RTI, Lokpal, Panchayati Raj, NITI Aayog, Policy Monitoring",
    pyqCount: 94,
    mastery: 40,
    topics: ["Good Governance", "RTI & Citizen Charter", "Panchayati Raj", "NITI Aayog & Policy Making"],
    notes: ["Governance = Good + Administration + Ethics", "RTI Act 2005", "73rd & 74th Amendment 1992", "NITI Aayog replaced Planning Commission 2015"],
    pyqs: [{ id: 1001, question: "RTI Act enacted in?", optionA: "2005", optionB: "2002", optionC: "2008", optionD: "2010", correctAns: "A", explanation: "Right to Information Act 2005. SAMPLE.", isSample: true }],
    analysis: [{ topic: "RTI", percentage: 80 }]
  }
];

// For future Paper 1 - placeholder
export const paper1Units = [
  "Teaching Aptitude", "Research Aptitude", "Comprehension", "Communication",
  "Mathematical Reasoning", "Logical Reasoning", "Data Interpretation", "ICT",
  "People, Development & Environment", "Higher Education System"
];