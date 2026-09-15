export interface PYQ {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAns: 'A' | 'B' | 'C' | 'D';
  explanation: string;
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
  pyqCount: number;
  mastery: number;
  notes: string[];
  pyqs: PYQ[];
  analysis: AnalysisItem[];
}

export const units: Unit[] = [
  {
    id: 1,
    name: 'Political Theory',
    pyqCount: 142,
    mastery: 89,
    notes: [
      'Liberty is divided into positive liberty (self-mastery) and negative liberty (absence of interference), as conceptualized by Isaiah Berlin in 1958.',
      'Justice as fairness was proposed by John Rawls in "A Theory of Justice" (1971), emphasizing the "veil of ignorance" and the "original position".',
      'Equality can be formal (equality before law) or substantive (equality of opportunity and outcome). Amartya Sen introduced the capability approach.',
      'Rights are classified as natural, legal, moral, and human rights. Hohfeld identified four types: liberty, claim, power, and immunity.',
      'Democracy evolved from direct (Athens) to representative forms. Schumpeter defined it as a method for choosing decision-makers.',
    ],
    pyqs: [
      { id: 1, question: 'What does negative liberty mean?', optionA: 'Absence of interference', optionB: 'Self-mastery', optionC: 'Equality', optionD: 'Vote', correctAns: 'A', explanation: 'Berlin (1958) defined negative liberty as the absence of external interference or coercion by others.' },
      { id: 2, question: 'Who said "Justice is the first virtue of social institutions"?', optionA: 'Nozick', optionB: 'Rawls', optionC: 'Sen', optionD: 'Dworkin', correctAns: 'B', explanation: 'John Rawls opens "A Theory of Justice" (1971) with this statement, building justice as fairness.' },
      { id: 3, question: 'The concept of "veil of ignorance" was introduced by:', optionA: 'Isaiah Berlin', optionB: 'Amartya Sen', optionC: 'John Rawls', optionD: 'Robert Nozick', correctAns: 'C', explanation: 'Rawls used the veil of ignorance in his original position thought experiment to derive principles of justice.' },
      { id: 4, question: 'Amartya Sen\'s capability approach primarily critiques:', optionA: 'Utilitarianism', optionB: 'Libertarianism', optionC: 'Communitarianism', optionD: 'Totalitarianism', correctAns: 'A', explanation: 'Sen argued that utilitarianism focuses on resources or happiness rather than what people can actually do and be (capabilities).' },
      { id: 5, question: 'Hohfeld\'s four types of rights include all EXCEPT:', optionA: 'Liberty', optionB: 'Claim', optionC: 'Power', optionD: 'Property', correctAns: 'D', explanation: 'Hohfeld identified liberty, claim, power, and immunity as the four fundamental legal relations. Property is not one of them.' },
    ],
    analysis: [
      { topic: 'Liberty', percentage: 24 },
      { topic: 'Justice', percentage: 18 },
      { topic: 'Equality', percentage: 15 },
      { topic: 'Rights', percentage: 14 },
      { topic: 'Democracy', percentage: 12 },
      { topic: 'Others', percentage: 17 },
    ],
  },
  {
    id: 2,
    name: 'Political Thought',
    pyqCount: 138,
    mastery: 76,
    notes: [
      'Plato\'s "Republic" advocates rule by philosopher-kings and describes justice as each class performing its proper function.',
      'Aristotle is called the father of political science; he classified constitutions and called man a "political animal".',
      'Machiavelli\'s "The Prince" separates politics from morality, earning him the title "father of modern political theory".',
      'Hobbes in "Leviathan" justified absolute sovereignty through the social contract to escape the state of nature (war of all against all).',
      'Locke\'s "Two Treatises" argued for natural rights to life, liberty, and property, and the right to revolution against tyranny.',
    ],
    pyqs: [
      { id: 1, question: 'Who is known as the "father of modern political theory"?', optionA: 'Plato', optionB: 'Aristotle', optionC: 'Machiavelli', optionD: 'Hobbes', correctAns: 'C', explanation: 'Machiavelli separated politics from ethics in "The Prince", marking the beginning of modern political thought.' },
      { id: 2, question: 'Plato\'s ideal state is ruled by:', optionA: 'Soldiers', optionB: 'Philosopher-kings', optionC: 'Democrats', optionD: 'Merchants', correctAns: 'B', explanation: 'In "The Republic", Plato argued that philosopher-kings, who possess wisdom, should rule the ideal state.' },
      { id: 3, question: 'Hobbes described the state of nature as:', optionA: 'A golden age', optionB: 'War of all against all', optionC: 'A peaceful community', optionD: 'A democratic assembly', correctAns: 'B', explanation: 'Hobbes in "Leviathan" described the state of nature as "nasty, brutish, and short" — a war of all against all.' },
      { id: 4, question: 'Locke\'s natural rights include all EXCEPT:', optionA: 'Life', optionB: 'Liberty', optionC: 'Property', optionD: 'Equality', correctAns: 'D', explanation: 'Locke identified life, liberty, and property as natural rights. Equality was not part of his original list.' },
      { id: 5, question: 'Aristotle called man a:', optionA: 'Rational animal', optionB: 'Political animal', optionC: 'Social animal', optionD: 'Economic animal', correctAns: 'B', explanation: 'Aristotle in "Politics" stated that man is by nature a political animal (zoon politikon).' },
    ],
    analysis: [
      { topic: 'Machiavelli', percentage: 22 },
      { topic: 'Plato', percentage: 19 },
      { topic: 'Aristotle', percentage: 17 },
      { topic: 'Hobbes', percentage: 14 },
      { topic: 'Locke', percentage: 12 },
      { topic: 'Others', percentage: 16 },
    ],
  },
  {
    id: 3,
    name: 'Indian Political Thought',
    pyqCount: 126,
    mastery: 0,
    notes: [
      'Kautilya\'s "Arthashastra" is an ancient Indian treatise on statecraft, economic policy, and military strategy.',
      'Gandhi\'s concept of "Sarvodaya" means the upliftment of all, and "Satyagraha" means truth-force or soul-force as a method of non-violent resistance.',
      'Ambedkar emphasized annihilation of caste, constitutional democracy, and the protection of minority rights.',
      'Nehru\'s vision of India was secular, socialist, and modern, articulated in "The Discovery of India" and "Glimpses of World History".',
      'Aurobindo\'s "spiritual nationalism" combined Indian spirituality with the political goal of independence.',
    ],
    pyqs: [
      { id: 1, question: 'Kautilya\'s "Arthashastra" primarily deals with:', optionA: 'Religion', optionB: 'Statecraft and economics', optionC: 'Philosophy', optionD: 'Poetry', correctAns: 'B', explanation: 'The Arthashastra is a comprehensive treatise on statecraft, economic policy, and military strategy written by Kautilya (Chanakya).' },
      { id: 2, question: 'Gandhi\'s concept of "Satyagraha" means:', optionA: 'Armed struggle', optionB: 'Truth-force / soul-force', optionC: 'Boycott', optionD: 'Civil war', correctAns: 'B', explanation: 'Satyagraha, coined by Gandhi, means holding onto truth through non-violent resistance or soul-force.' },
      { id: 3, question: 'Who authored "The Discovery of India"?', optionA: 'Gandhi', optionB: 'Nehru', optionC: 'Ambedkar', optionD: 'Aurobindo', correctAns: 'B', explanation: 'Jawaharlal Nehru wrote "The Discovery of India" during his imprisonment in Ahmednagar Fort prison.' },
      { id: 4, question: 'Ambedkar is most associated with the concept of:', optionA: 'Sarvodaya', optionB: 'Annihilation of caste', optionC: 'Spiritual nationalism', optionD: 'Trusteeship', correctAns: 'B', explanation: 'Ambedkar wrote "The Annihilation of Caste" (1936), arguing for the dismantling of the caste system.' },
      { id: 5, question: 'Aurobindo\'s political philosophy is known as:', optionA: 'Democratic socialism', optionB: 'Spiritual nationalism', optionC: 'Utilitarianism', optionD: 'Liberalism', correctAns: 'B', explanation: 'Aurobindo combined Indian spirituality with nationalism, calling his approach "spiritual nationalism".' },
    ],
    analysis: [
      { topic: 'Gandhi', percentage: 26 },
      { topic: 'Ambedkar', percentage: 21 },
      { topic: 'Kautilya', percentage: 16 },
      { topic: 'Nehru', percentage: 13 },
      { topic: 'Aurobindo', percentage: 10 },
      { topic: 'Others', percentage: 14 },
    ],
  },
  {
    id: 4,
    name: 'Indian Government & Politics',
    pyqCount: 156,
    mastery: 0,
    notes: [
      'The Indian Constitution is the longest written constitution in the world, originally with 395 articles in 22 parts and 8 schedules.',
      'Fundamental Rights are in Part III (Articles 12–35), DPSP in Part IV (Articles 36–51), and Fundamental Duties in Part IVA (Article 51A).',
      'Parliament consists of the President, Rajya Sabha (250 members), and Lok Sabha (543 elected + 2 Anglo-Indian, now removed).',
      'The President is elected by an electoral college of elected MPs and MLAs using the single transferable vote system.',
      'Judicial review is exercised by the Supreme Court under Article 32 and High Courts under Article 226 for enforcement of fundamental rights.',
    ],
    pyqs: [
      { id: 1, question: 'Fundamental Rights in the Indian Constitution are contained in:', optionA: 'Part II', optionB: 'Part III', optionC: 'Part IV', optionD: 'Part IVA', correctAns: 'B', explanation: 'Fundamental Rights are enshrined in Part III (Articles 12–35) of the Indian Constitution.' },
      { id: 2, question: 'The Indian President is elected by:', optionA: 'Direct vote', optionB: 'Electoral college of MPs and MLAs', optionC: 'Parliament only', optionD: 'Supreme Court', correctAns: 'B', explanation: 'The President is elected by an electoral college consisting of elected members of both Houses of Parliament and State Legislative Assemblies using single transferable vote.' },
      { id: 3, question: 'Writ of Habeas Corpus is issued for:', optionA: 'Quashing an order', optionB: 'Producing a detained person', optionC: 'Performing a duty', optionD: 'Prohibiting an action', correctAns: 'B', explanation: 'Habeas Corpus ("produce the body") is a writ requiring a person under arrest to be brought before a court to determine if the detention is lawful.' },
      { id: 4, question: 'The maximum strength of the Lok Sabha is:', optionA: '500', optionB: '545', optionC: '550', optionD: '552', correctAns: 'D', explanation: 'The maximum strength of the Lok Sabha is 552 (530 from states + 20 from UTs + 2 Anglo-Indian, though the Anglo-Indian seats were abolished in 2020).' },
      { id: 5, question: 'Directive Principles of State Policy are in:', optionA: 'Part III', optionB: 'Part IV', optionC: 'Part V', optionD: 'Part VI', correctAns: 'B', explanation: 'DPSP are in Part IV (Articles 36–51) and are non-justiciable guidelines for governance.' },
    ],
    analysis: [
      { topic: 'Constitution', percentage: 23 },
      { topic: 'Parliament', percentage: 19 },
      { topic: 'President', percentage: 16 },
      { topic: 'Judiciary', percentage: 15 },
      { topic: 'Federalism', percentage: 12 },
      { topic: 'Others', percentage: 15 },
    ],
  },
  {
    id: 5,
    name: 'Comparative Politics',
    pyqCount: 98,
    mastery: 0,
    notes: [
      'Comparative politics emerged as a distinct field after WWII, moving from formal-legal institutional study to behavioral and systemic approaches.',
      'Gabriel Almond\'s structural-functional analysis identifies input functions (political socialization, recruitment, interest articulation, aggregation) and output functions (rule-making, application, adjudication).',
      'Political systems can be classified as democratic, authoritarian, totalitarian, and theocratic based on power distribution and participation.',
      'The "Westminster model" (UK) features parliamentary sovereignty, fused executive-legislative powers, and a two-party dominant system.',
      'The US presidential system features separation of powers with checks and balances among the executive, legislature, and judiciary.',
    ],
    pyqs: [
      { id: 1, question: 'Who developed the structural-functional approach to comparative politics?', optionA: 'David Easton', optionB: 'Gabriel Almond', optionC: 'Samuel Huntington', optionD: 'Max Weber', correctAns: 'B', explanation: 'Gabriel Almond developed the structural-functional framework, analyzing political systems through their input and output functions.' },
      { id: 2, question: 'The Westminster model is associated with:', optionA: 'USA', optionB: 'France', optionC: 'UK', optionD: 'India', correctAns: 'C', explanation: 'The Westminster model originated in the UK, featuring parliamentary sovereignty and a fused executive-legislative relationship.' },
      { id: 3, question: 'Separation of powers is a key feature of:', optionA: 'Parliamentary system', optionB: 'Presidential system', optionC: 'Monarchy', optionD: 'Theocracy', correctAns: 'B', explanation: 'The presidential system (e.g., USA) is built on strict separation of powers among executive, legislative, and judicial branches.' },
      { id: 4, question: 'David Easton\'s system theory defines politics as:', optionA: 'Class struggle', optionB: 'Authoritative allocation of values', optionC: 'Power distribution', optionD: 'Conflict resolution', correctAns: 'B', explanation: 'Easton defined the political system as the authoritative allocation of values for a society.' },
      { id: 5, question: 'Totalitarian regimes differ from authoritarian regimes because they:', optionA: 'Allow limited opposition', optionB: 'Seek to control all aspects of life', optionC: 'Have elections', optionD: 'Respect civil liberties', correctAns: 'B', explanation: 'Totalitarian regimes (e.g., Nazi Germany) attempt to control all aspects of public and private life, unlike authoritarian regimes which mainly control politics.' },
    ],
    analysis: [
      { topic: 'Almond', percentage: 20 },
      { topic: 'Easton', percentage: 18 },
      { topic: 'Westminster', percentage: 16 },
      { topic: 'Presidential', percentage: 14 },
      { topic: 'Regimes', percentage: 12 },
      { topic: 'Others', percentage: 20 },
    ],
  },
  {
    id: 6,
    name: 'International Relations',
    pyqCount: 134,
    mastery: 0,
    notes: [
      'Realism (Morgenthau) emphasizes power, national interest, and state sovereignty as the core drivers of international politics.',
      'Liberalism emphasizes cooperation, international institutions, and interdependence (Keohane & Nye\'s "complex interdependence").',
      'The Cold War (1947–1991) was a bipolar ideological struggle between the US and USSR, marked by proxy wars and nuclear deterrence.',
      'The UN was established in 1945 with 6 principal organs: General Assembly, Security Council, ECOSOC, Trusteeship Council, ICJ, and Secretariat.',
      'Marxist/dependency theories (Wallerstein\'s world-systems) explain international inequality through core-periphery exploitation.',
    ],
    pyqs: [
      { id: 1, question: 'Hans Morgenthau is associated with which IR theory?', optionA: 'Liberalism', optionB: 'Realism', optionC: 'Marxism', optionD: 'Constructivism', correctAns: 'B', explanation: 'Morgenthau\'s "Politics Among Nations" (1948) is a foundational text of classical realism, emphasizing power and national interest.' },
      { id: 2, question: 'The United Nations was established in:', optionA: '1942', optionB: '1945', optionC: '1947', optionD: '1950', correctAns: 'B', explanation: 'The UN was established on October 24, 1945, after the UN Charter was ratified by the permanent members of the Security Council and a majority of signatories.' },
      { id: 3, question: 'Keohane and Nye\'s concept of "complex interdependence" challenges:', optionA: 'Realism', optionB: 'Marxism', optionC: 'Constructivism', optionD: 'Post-modernism', correctAns: 'A', explanation: 'Complex interdependence challenges realism by showing that military force is not always the primary instrument and multiple channels connect societies.' },
      { id: 4, question: 'The Cold War was primarily a conflict between:', optionA: 'China and Japan', optionB: 'US and USSR', optionC: 'India and Pakistan', optionD: 'France and Germany', correctAns: 'B', explanation: 'The Cold War (1947–1991) was an ideological and geopolitical struggle between the US (capitalism) and USSR (communism).' },
      { id: 5, question: 'Wallerstein\'s world-systems theory divides the world into:', optionA: 'East and West', optionB: 'Core, semi-periphery, periphery', optionC: 'First, second, third world', optionD: 'North and South', correctAns: 'B', explanation: 'Wallerstein categorized nations into core, semi-periphery, and periphery, explaining global inequality through economic dependency.' },
    ],
    analysis: [
      { topic: 'Realism', percentage: 22 },
      { topic: 'Liberalism', percentage: 18 },
      { topic: 'Cold War', percentage: 16 },
      { topic: 'UN', percentage: 14 },
      { topic: 'Marxist IR', percentage: 12 },
      { topic: 'Others', percentage: 18 },
    ],
  },
  {
    id: 7,
    name: 'Public Administration',
    pyqCount: 112,
    mastery: 0,
    notes: [
      'Woodrow Wilson\'s 1887 essay "The Study of Administration" is considered the founding document of public administration as a discipline.',
      'Weber\'s bureaucracy model features hierarchy, division of labor, rules, impersonality, and merit-based selection as key characteristics.',
      'Riggs\' "Prismatic Society" model describes developing societies as "sala" — a blend of fused (traditional) and diffracted (modern) characteristics.',
      'New Public Management (NPM) emphasizes market-oriented reforms, performance measurement, and customer-centric service delivery.',
      'Good governance principles include transparency, accountability, participation, rule of law, and responsiveness.',
    ],
    pyqs: [
      { id: 1, question: 'Who is regarded as the father of public administration?', optionA: 'Max Weber', optionB: 'Woodrow Wilson', optionC: 'Fred Riggs', optionD: 'Luther Gulick', correctAns: 'B', explanation: 'Wilson\'s 1887 essay "The Study of Administration" separated administration from politics, founding the discipline.' },
      { id: 2, question: 'Weber\'s ideal type of bureaucracy includes all EXCEPT:', optionA: 'Hierarchy', optionB: 'Impersonality', optionC: 'Patronage', optionD: 'Rules', correctAns: 'C', explanation: 'Weber\'s bureaucracy is based on merit and rules, not patronage. Patronage is a feature of pre-modern administration.' },
      { id: 3, question: 'Fred Riggs\' model for developing societies is called:', optionA: 'Fused', optionB: 'Diffracted', optionC: 'Prismatic (Sala)', optionD: 'Bureaucratic', correctAns: 'C', explanation: 'Riggs called developing societies "prismatic" (sala model), a blend of traditional (fused) and modern (diffracted) features.' },
      { id: 4, question: 'New Public Management emphasizes:', optionA: 'Hierarchy', optionB: 'Market-oriented reforms', optionC: 'Centralization', optionD: 'Strict rules', correctAns: 'B', explanation: 'NPM promotes market-oriented reforms, privatization, performance measurement, and customer-centric service delivery.' },
      { id: 5, question: 'Good governance includes all EXCEPT:', optionA: 'Transparency', optionB: 'Accountability', optionC: 'Secrecy', optionD: 'Rule of law', correctAns: 'C', explanation: 'Good governance requires transparency, accountability, participation, rule of law, and responsiveness — not secrecy.' },
    ],
    analysis: [
      { topic: 'Wilson', percentage: 21 },
      { topic: 'Weber', percentage: 19 },
      { topic: 'Riggs', percentage: 16 },
      { topic: 'NPM', percentage: 15 },
      { topic: 'Governance', percentage: 13 },
      { topic: 'Others', percentage: 16 },
    ],
  },
  {
    id: 8,
    name: 'Political Institutions',
    pyqCount: 76,
    mastery: 0,
    notes: [
      'The Election Commission of India is a permanent constitutional body under Article 324, responsible for conducting free and fair elections.',
      'The Panchayati Raj system was constitutionalized by the 73rd Amendment (1992), creating a three-tier structure: Gram Panchayat, Block, and Zila.',
      'The 74th Amendment (1992) constitutionalized urban local self-government (municipalities) with provisions for devolution of powers.',
      'Pressure groups in India include business associations (FICCI, CII), trade unions (AITUC, INTUC), and caste/religious organizations.',
      'The party system in India has evolved from a one-party dominant system (Congress, 1952–67) to a multi-party coalition era (1989 onwards).',
    ],
    pyqs: [
      { id: 1, question: 'The Election Commission of India is established under:', optionA: 'Article 324', optionB: 'Article 325', optionC: 'Article 326', optionD: 'Article 327', correctAns: 'A', explanation: 'Article 324 of the Constitution establishes the Election Commission to supervise, direct, and control elections.' },
      { id: 2, question: 'Panchayati Raj was constitutionalized by which amendment?', optionA: '42nd', optionB: '44th', optionC: '73rd', optionD: '74th', correctAns: 'C', explanation: 'The 73rd Constitutional Amendment (1992) gave Panchayati Raj institutions constitutional status, creating a three-tier rural local government.' },
      { id: 3, question: 'The 74th Amendment deals with:', optionA: 'Rural local government', optionB: 'Urban local government', optionC: 'Anti-defection', optionD: 'Fundamental duties', correctAns: 'B', explanation: 'The 74th Constitutional Amendment (1992) constitutionalized urban local self-government (municipalities).' },
      { id: 4, question: 'FICCI is an example of:', optionA: 'Political party', optionB: 'Pressure group', optionC: 'Constitutional body', optionD: 'Judicial body', correctAns: 'B', explanation: 'FICCI (Federation of Indian Chambers of Commerce and Industry) is a business pressure group that lobbies for industry interests.' },
      { id: 5, question: 'India\'s one-party dominant system (1952–1967) was led by:', optionA: 'BJP', optionB: 'Janata Party', optionC: 'Congress', optionD: 'CPI', correctAns: 'C', explanation: 'The Indian National Congress dominated Indian politics from 1952 to 1967, a period described as the "Congress system" by Rajni Kothari.' },
    ],
    analysis: [
      { topic: 'Election Commission', percentage: 22 },
      { topic: 'Panchayati Raj', percentage: 19 },
      { topic: 'Municipalities', percentage: 16 },
      { topic: 'Pressure Groups', percentage: 15 },
      { topic: 'Party System', percentage: 14 },
      { topic: 'Others', percentage: 14 },
    ],
  },
  {
    id: 9,
    name: 'Concepts & Theories',
    pyqCount: 88,
    mastery: 0,
    notes: [
      'Power, according to Robert Dahl, is the ability of A to get B to do something B would not otherwise do.',
      'Authority is legitimate power — Max Weber identified three types: traditional, charismatic, and legal-rational authority.',
      'Sovereignty, as articulated by Jean Bodin and Hobbes, means the supreme and absolute power of the state within its territory.',
      'Political culture (Almond & Verba) includes parochial, subject, and participant types, determining how citizens relate to the political system.',
      'Legitimacy refers to the belief in the rightness of authority; it can be based on tradition, charisma, or legal-rational rules.',
    ],
    pyqs: [
      { id: 1, question: 'Robert Dahl defined power as:', optionA: 'Use of force', optionB: 'Ability of A to make B do what B would not otherwise do', optionC: 'Legal authority', optionD: 'Economic control', correctAns: 'B', explanation: 'Dahl\'s classic definition: power is the ability of A to get B to do something B would not otherwise do.' },
      { id: 2, question: 'Weber\'s three types of authority are:', optionA: 'Economic, political, social', optionB: 'Traditional, charismatic, legal-rational', optionC: 'Formal, informal, mixed', optionD: 'Absolute, limited, divided', correctAns: 'B', explanation: 'Weber classified authority into traditional (custom), charismatic (personal qualities), and legal-rational (rules and procedures).' },
      { id: 3, question: 'The concept of sovereignty was first systematically articulated by:', optionA: 'Hobbes', optionB: 'Locke', optionC: 'Jean Bodin', optionD: 'Rousseau', correctAns: 'C', explanation: 'Jean Bodin in "Six Books of the Commonwealth" (1576) first systematically articulated the concept of sovereignty as supreme state power.' },
      { id: 4, question: 'Almond and Verba identified which types of political culture?', optionA: 'Liberal, conservative, radical', optionB: 'Parochial, subject, participant', optionC: 'Modern, traditional, transitional', optionD: 'Open, closed, mixed', correctAns: 'B', explanation: 'In "The Civic Culture" (1963), Almond and Verba identified parochial, subject, and participant political cultures.' },
      { id: 5, question: 'Legitimacy refers to:', optionA: 'Use of force', optionB: 'Belief in the rightness of authority', optionC: 'Economic power', optionD: 'Military strength', correctAns: 'B', explanation: 'Legitimacy is the belief that those in authority have the right to govern — it is the moral basis of power.' },
    ],
    analysis: [
      { topic: 'Power', percentage: 23 },
      { topic: 'Authority', percentage: 20 },
      { topic: 'Sovereignty', percentage: 17 },
      { topic: 'Political Culture', percentage: 15 },
      { topic: 'Legitimacy', percentage: 13 },
      { topic: 'Others', percentage: 12 },
    ],
  },
  {
    id: 10,
    name: 'Contemporary Issues',
    pyqCount: 102,
    mastery: 0,
    notes: [
      'Globalization refers to the increasing interconnectedness of economies, cultures, and peoples through trade, technology, and communication.',
      'Terrorism is defined as the use of violence against civilians for political purposes; it challenges state sovereignty and human security.',
      'Environmental politics addresses climate change, sustainable development, and the tension between economic growth and ecological protection.',
      'Human rights have expanded to include second-generation (socio-economic) and third-generation (collective/environmental) rights beyond civil-political rights.',
      'Gender politics examines patriarchy, representation, and the intersection of gender with class, caste, and religion in political participation.',
    ],
    pyqs: [
      { id: 1, question: 'Globalization primarily refers to:', optionA: 'Military expansion', optionB: 'Increasing interconnectedness of economies and cultures', optionC: 'Colonialism', optionD: 'Isolationism', correctAns: 'B', explanation: 'Globalization is the process of increasing interconnectedness of economies, cultures, and peoples through trade, technology, and communication.' },
      { id: 2, question: 'Terrorism is distinguished from other violence by:', optionA: 'Use of weapons', optionB: 'Political purpose against civilians', optionC: 'State sponsorship', optionD: 'Religious motivation', correctAns: 'B', explanation: 'Terrorism specifically involves the use or threat of violence against civilians to achieve political objectives.' },
      { id: 3, question: 'The concept of "sustainable development" was popularized by:', optionA: 'Rio Conference', optionB: 'Brundtland Commission (1987)', optionC: 'Kyoto Protocol', optionD: 'Paris Agreement', correctAns: 'B', explanation: 'The Brundtland Commission\'s 1987 report "Our Common Future" defined sustainable development as meeting present needs without compromising future generations.' },
      { id: 4, question: 'Third-generation human rights include:', optionA: 'Freedom of speech', optionB: 'Right to work', optionC: 'Right to development and environment', optionD: 'Right to property', correctAns: 'C', explanation: 'Third-generation (solidarity) rights include the right to development, a healthy environment, peace, and self-determination.' },
      { id: 5, question: 'The term "patriarchy" in gender politics refers to:', optionA: 'Female rule', optionB: 'Male-dominated social system', optionC: 'Equal gender roles', optionD: 'Class struggle', correctAns: 'B', explanation: 'Patriarchy is a social system in which men hold primary power, dominating political leadership, moral authority, and control of property.' },
    ],
    analysis: [
      { topic: 'Globalization', percentage: 24 },
      { topic: 'Terrorism', percentage: 19 },
      { topic: 'Environment', percentage: 17 },
      { topic: 'Human Rights', percentage: 15 },
      { topic: 'Gender', percentage: 13 },
      { topic: 'Others', percentage: 12 },
    ],
  },
];
