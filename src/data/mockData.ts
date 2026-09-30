export type PYQ = {
  id: number;
  year?: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAns: 'A'|'B'|'C'|'D';
  explanation: string;
  isSample?: boolean;
};

export type UnitAnalysis = { topic: string; percentage: number; };

export type Unit = {
  id: number;
  name: string;
  officialTitle: string;
  description: string;
  topics: string[];
  notes: string[];
  pyqs: PYQ[];
  analysis: UnitAnalysis[];
  pyqCount: number;
  mastery: number;
};

export const units: Unit[] = [
  {
    id: 1, name: "Political Theory", officialTitle: "Political Theory",
    description: "Core concepts of liberty, equality, justice, rights, democracy",
    topics: ["Liberty", "Equality", "Justice", "Rights", "Democracy", "Power"],
    notes: ["Liberty = freedom from constraints + freedom to develop", "Equality has 3 dimensions: political, social, economic", "Justice = Rawls fairness + Nozick entitlement", "Rights are justified claims", "Democracy = demos + kratos"],
    pyqCount: 118, mastery: 60,
    pyqs: [
      { id: 101, year: 2023, question: "Who said liberty is the opposite of over-government?", optionA: "Laski", optionB: "Seeley", optionC: "MacIver", optionD: "Hobbes", correctAns: "B", explanation: "Seeley defined liberty as absence of over-government.", isSample: false },
      { id: 102, year: 2022, question: "Equality means?", optionA: "Same treatment", optionB: "Absence of special privileges", optionC: "Equal wealth", optionD: "Same marks", correctAns: "B", explanation: "Laski: equality is absence of special privileges.", isSample: false },
    ],
    analysis: [{topic:"Liberty",percentage:70},{topic:"Equality",percentage:50},{topic:"Justice",percentage:60}]
  },
  {
    id: 2, name: "Political Thought", officialTitle: "Political Thought",
    description: "Western political thought from Plato to Rawls",
    topics: ["Plato", "Aristotle", "Machiavelli", "Hobbes", "Locke", "Rousseau", "Mill", "Marx", "Rawls"],
    notes: ["Plato's ideal state = justice", "Aristotle: man is political animal", "Machiavelli: ends justify means", "Hobbes: Leviathan for security", "Rawls: justice as fairness"],
    pyqCount: 95, mastery: 45,
    pyqs: [{ id: 201, year: 2023, question: "Who wrote Republic?", optionA: "Plato", optionB: "Aristotle", optionC: "Hobbes", optionD: "Locke", correctAns: "A", explanation: "Plato wrote Republic.", isSample: true }],
    analysis: [{topic:"Plato",percentage:60},{topic:"Aristotle",percentage:45},{topic:"Rawls",percentage:30}]
  },
  {
    id: 3, name: "Indian Political Thought", officialTitle: "Indian Political Thought",
    description: "From Manu to Ambedkar and Gandhi",
    topics: ["Manu", "Kautilya", "Gandhi", "Ambedkar", "Nehru", "Savarkar"],
    notes: ["Kautilya's Saptanga theory", "Gandhi: Satya and Ahimsa", "Ambedkar: annihilation of caste", "Nehru: democratic socialism"],
    pyqCount: 110, mastery: 50, pyqs: [], analysis: [{topic:"Gandhi",percentage:55},{topic:"Ambedkar",percentage:45}]
  },
  {
    id: 4, name: "Comparative Political Analysis", officialTitle: "Comparative Political Analysis",
    description: "Comparative politics approaches",
    topics: ["Political Systems", "Political Culture", "Political Development", "Dependency"],
    notes: ["Almond's structural functionalism", "Political culture = attitudes", "Lucian Pye on political development"],
    pyqCount: 85, mastery: 30, pyqs: [], analysis: [{topic:"Systems",percentage:30}]
  },
  {
    id: 5, name: "International Relations", officialTitle: "International Relations",
    description: "IR theories, UN, Cold War",
    topics: ["Realism", "Liberalism", "UN", "Cold War", "Globalization"],
    notes: ["Realism = Morgenthau power struggle", "Liberalism = cooperation", "UN has 6 organs", "Cold War 1945-1991"],
    pyqCount: 132, mastery: 70, pyqs: [], analysis: [{topic:"Realism",percentage:70}]
  },
  {
    id: 6, name: "India's Foreign Policy", officialTitle: "India's Foreign Policy",
    description: "NAM, relations, security",
    topics: ["NAM", "India-US", "India-China", "India-Pak", "Security"],
    notes: ["Nehru started NAM", "Panchsheel 1954", "India's nuclear policy No First Use"],
    pyqCount: 105, mastery: 40, pyqs: [], analysis: [{topic:"NAM",percentage:40}]
  },
  {
    id: 7, name: "Political Institutions in India", officialTitle: "Political Institutions in India",
    description: "Constitution, President, Parliament, Judiciary",
    topics: ["Constituent Assembly", "President", "Parliament", "Judiciary", "Federalism"],
    notes: ["Constituent Assembly 1946", "President is nominal head", "Parliament bicameral", "Supreme Court guardian of constitution"],
    pyqCount: 140, mastery: 65, pyqs: [], analysis: [{topic:"Parliament",percentage:65}]
  },
  {
    id: 8, name: "Political Processes in India", officialTitle: "Political Processes in India",
    description: "Parties, caste, religion, elections",
    topics: ["Parties", "Caste", "Elections", "Movements"],
    notes: ["Congress system by Rajni Kothari", "Caste politicization", "Election Commission independent"],
    pyqCount: 125, mastery: 55, pyqs: [], analysis: [{topic:"Parties",percentage:55}]
  },
  {
    id: 9, name: "Public Administration", officialTitle: "Public Administration",
    description: "Theories, bureaucracy",
    topics: ["Wilson", "Weber", "Budget", "Bureaucracy"],
    notes: ["Woodrow Wilson father of PA", "Weber bureaucracy ideal type", "POSDCORB by Gulick"],
    pyqCount: 98, mastery: 35, pyqs: [], analysis: [{topic:"Weber",percentage:35}]
  },
  {
    id: 10, name: "Governance and Public Policy", officialTitle: "Governance and Public Policy in India",
    description: "Governance, e-governance, RTI",
    topics: ["Governance", "E-governance", "RTI", "Policy Models"],
    notes: ["Good governance = SMART", "E-governance Digital India", "RTI 2005 transparency"],
    pyqCount: 112, mastery: 45, pyqs: [], analysis: [{topic:"Governance",percentage:45}]
  },
];