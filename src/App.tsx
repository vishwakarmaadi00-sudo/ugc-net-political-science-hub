import { useState } from 'react';

const UNITS = [
{
id:1, name:"Unit 1: Political Theory", color:"#22d3ee",
qs:[
{q:"Pluralist view - Polyarchy (1956) given by?", o:["Robert Dahl","Pareto","Marx","Weber"], a:0, e:"Power dispersed in many groups, not elite"},
{q:"Natural rights are nonsense upon stilts (1791)?", o:["Bentham","Locke","Burke","Laski"], a:0, e:"Anarchical Fallacies - rights are creatures of law"},
{q:"Justice is first virtue of Social Institutions?", o:["Rawls - Theory of Justice 1971","Nozick","Walzer","Hayek"], a:0, e:"Most asked Q - 6 times in PYQ"},
{q:"T.H. Marshall 1950 - 3 citizenship rights?", o:["Civil(18th), Political(19th), Social(20th)","Legal,Economic,Social","Civil,Cultural,Political","All of above"], a:0, e:"Citizenship and Social Class"},
{q:"Negative vs Positive Liberty - Two Concepts (1958)?", o:["Isaiah Berlin","J.S. Mill","Hobbes","Rousseau"], a:0, e:"Negative = freedom FROM, Positive = freedom TO"},
{q:"Harm Principle - On Liberty (1859)?", o:["J.S. Mill","Bentham","Locke","Green"], a:0, e:"State can interfere only to prevent harm to others"},
{q:"Entitlement Theory - Anarchy State Utopia (1974)?", o:["Robert Nozick","Rawls","Walzer","Hayek"], a:0, e:"Critique of Rawls - Justice as minimal state"},
{q:"Who said Power is ability to get others to do what you want?", o:["Max Weber","Dahl","Lasswell","Morgenthau"], a:0, e:"Power = domination"},
{q:"Egalitarianism emphasizes?", o:["Equality","Liberty","Justice","Rights"], a:0, e:"Equal worth of all"},
{q:"Feminism - First wave focused on?", o:["Right to Vote (Suffrage)","Workplace equality","Personal is political","Intersectionality"], a:0, e:"Wollstonecraft 1792 onwards"},
]
},
{
id:2, name:"Unit 2: Western Thought", color:"#a78bfa",
qs:[
{q:"The Human Condition (1958) author? [Dec 2024 Q74]", o:["Hannah Arendt","Simone Weil","Butler","Wollstonecraft"], a:0, e:"Vita Activa vs Vita Contemplativa"},
{q:"Leviathan (1651) - nasty brutish short?", o:["Hobbes","Locke","Rousseau","Machiavelli"], a:0, e:"Social contract to escape state of nature"},
{q:"Man is born free but everywhere in chains - Social Contract 1762?", o:["Rousseau","Hobbes","Locke","Hegel"], a:0, e:"General Will"},
{q:"Catch-all-party term coined by? [Dec 2024 Q104]", o:["Kirchheimer","Dahl","Sartori","Duverger"], a:0, e:"Big tent party - abandon ideology for votes"},
{q:"Communist Manifesto (1848) - History is class struggle?", o:["Marx & Engels","Lenin","Stalin","Gramsci"], a:0, e:"Bourgeois vs Proletariat"},
{q:"Prince (1513) - Means justify ends?", o:["Machiavelli","Hobbes","Aristotle","Plato"], a:0, e:"First modern political thinker, separates politics from ethics"},
{q:"Two Treatises (1689) - Life Liberty Property natural rights?", o:["John Locke","Hobbes","Rousseau","Bentham"], a:0, e:"Father of Liberalism, Glorious Revolution"},
{q:"Republic - Philosopher King?", o:["Plato","Aristotle","Socrates","Pythagoras"], a:0, e:"Ideal state ruled by wise"},
{q:"Politics is master science - Man is political animal?", o:["Aristotle","Plato","Hobbes","Locke"], a:0, e:"Father of Political Science"},
{q:"On Liberty says State over individual is tyranny?", o:["J.S. Mill","Berlin","Hayek","Nozick"], a:0, e:"Defends individual freedom"},
{q:"Hegemony + Prison Notebooks - Organic Intellectual?", o:["Gramsci","Marx","Lenin","Mao"], a:0, e:"Cultural hegemony - consent > coercion"},
]
},
{
id:3, name:"Unit 3: Indian Thought", color:"#f59e0b",
qs:[
{q:"Arthashastra - Saptanga theory of state?", o:["Kautilya","Manu","Shukra","Kamandaka"], a:0, e:"7 limbs of state - King, Amatya, Janapada, Durga, Kosha, Danda, Mitra"},
{q:"Hind Swaraj (1909) - Critique of Western Civilization?", o:["Gandhi","Tilak","Aurobindo","Savarkar"], a:0, e:"Swaraj = self rule + self control"},
{q:"Annihilation of Caste (1936) - Castes are anti-national?", o:["Ambedkar","Periyar","Gandhi","Nehru"], a:0, e:"Need to destroy Shastras that justify caste"},
{q:"Who gave Integral Humanism - Antyodaya?", o:["Deendayal Upadhyaya","Gandhi","Nehru","Lohia"], a:0, e:"BJP ideology, last man upliftment"},
{q:"Discovery of India author?", o:["Jawaharlal Nehru","Gandhi","Ambedkar","Tagore"], a:0, e:"Written in Ahmednagar jail 1944"},
{q:"Manusmriti - Varna is based on birth or karma?", o:["Birth (Janma)","Karma (Deed)","Guna","Both"], a:0, e:"Controversial ancient law book"},
{q:"Ram Rajya concept in Gandhi means?", o:["Ideal just state","Hindu rule","Ayodhya rule","Monarchy"], a:0, e:"Not theocratic, but moral state"},
{q:"Periyar - Self Respect Movement (1925)?", o:["E.V. Ramasamy","Ambedkar","Phule","Gandhi"], a:0, e:"Anti-Brahmin, Dravidian movement"},
{q:"Kautilya Mandal Theory - Enemy's enemy is friend?", o:["True","False","Partly","Not in Arthashastra"], a:0, e:"Foreign policy realism"},
{q:"Ambedkar converted to Buddhism in?", o:["1956 Nagpur","1935","1947","1950"], a:0, e:"22 vows, Navayana Buddhism"},
]
},
{
id:4, name:"Unit 4: Comparative Politics", color:"#4ade80",
qs:[
{q:"Easton Input-Output - Inputs are? [Dec 2024 Q89]", o:["Demand + Support","Money+Power","Vote+Pressure","Legitimacy+Authority"], a:0, e:"System converts to Outputs = Decisions"},
{q:"NOT feature of Liberal Democracy? [Dec 2024 Q78]", o:["One-party + State monopoly media","Free Elections","Rule of Law","Independent Judiciary"], a:0, e:"Liberal = competition"},
{q:"Polyarchy by? [Dec 2023]", o:["Robert Dahl 1956","Michels","Mills","Pareto"], a:0, e:"Imperfect democracy with many centres of power"},
{q:"Iron Law of Oligarchy?", o:["Robert Michels","Mosca","Pareto","Dahl"], a:0, e:"All organisations become oligarchic"},
{q:"Structural Functionalism - Almond & Powell?", o:["Structure=Institution, Function=Role","Structure=Power","Function=Legitimacy","None"], a:0, e:"Comparative politics framework"},
{q:"Political Development by Lucian Pye - 3 traits?", o:["Equality, Capacity, Differentiation","Liberty, Equality, Justice","Power, Authority, Legitimacy","None"], a:0, e:"Nation building"},
{q:"Catch-all party loses?", o:["Ideological distinctiveness","Votes","Seats","Money"], a:0, e:"Kirchheimer - big tent loses core ideology"},
{q:"Two-party system example?", o:["USA (Dem+Rep)","India","Germany","France"], a:0, e:"Duverger's Law - FPTP leads to 2 party"},
{q:"Military coup is form of?", o:["Political Instability","Stability","Legitimacy","Authority"], a:0, e:"Comparative - Praetorian state"},
{q:"Colonialism vs Imperialism - Which is direct rule?", o:["Colonialism = direct settlement","Imperialism = indirect control","Both same","None"], a:0, e:"Lenin Imperialism highest stage of capitalism"},
]
},
{
id:5, name:"Unit 5: International Relations", color:"#38bdf8",
qs:[
{q:"Realism - Power is end in itself? Main thinker?", o:["Morgenthau - Politics Among Nations 1948","Waltz","Keohane","Nye"], a:0, e:"Realism = anarchy, state-centric"},
{q:"Neoliberal Institutionalism - Cooperation possible?", o:["Keohane & Nye","Morgenthau","Waltz","Mearsheimer"], a:0, e:"Institutions reduce anarchy"},
{q:"UN Security Council - How many permanent + veto?", o:["5 (USA,UK,Russia,China,France)","10","15","7"], a:0, e:"P5 veto power"},
{q:"WTO established in?", o:["1995 Marrakesh","1945","1991","2000"], a:0, e:"Successor to GATT"},
{q:"Cold War ended due to?", o:["Collapse of USSR 1991","WW2","WTO","UN"], a:0, e:"Bipolar to Unipolar then Multipolar"},
{q:"Non Alignment Movement founder include?", o:["Nehru, Tito, Nasser","Nehru alone","USA","USSR"], a:0, e:"1961 Belgrade"},
{q:"Nuclear Non Proliferation Treaty NPT year?", o:["1968 (entered 1970)","1945","1961","1996"], a:0, e:"Haves vs Have-nots divide"},
{q:"Bretton Woods institutions are?", o:["IMF + World Bank 1944","WTO+UN","UN+IMF","ILO+WHO"], a:0, e:"USA dominated financial order"},
{q:"Hegemonic Stability Theory - Hegemon needed for stability?", o:["Kindleberger/Gilpin","Wallerstein","Frank","Amin"], a:0, e:"USA hegemony after WW2"},
{q:"Clash of Civilizations author?", o:["Samuel Huntington 1993","Fukuyama","Said","Wallerstein"], a:0, e:"Culture will be source of conflict"},
{q:"Fukuyama - End of History (1989) - Liberal democracy is?", o:["Final form of govt","Temporary","Will collapse","None"], a:0, e:"Liberal triumphalism after Cold War"},
]
},
{
id:6, name:"Unit 6: India's Foreign Policy", color:"#fb7185",
qs:[
{q:"Panchsheel Agreement 1954 with?", o:["China (Tibet) - Nehru + Zhou","USA","USSR","Pakistan"], a:0, e:"5 principles of peaceful coexistence"},
{q:"Shimla Agreement 1972 between?", o:["Indira Gandhi + Bhutto","Nehru+Jinnah","Modi+Sharif","Vajpayee+Musharraf"], a:0, e:"After Bangladesh war, bilateralism"},
{q:"Look East Policy started by?", o:["Narasimha Rao 1992","Modi","Vajpayee","Nehru"], a:0, e:"Now Act East by Modi"},
{q:"Article 51 - Promote International Peace is?", o:["DPSP","Fundamental Right","Fundamental Duty","Preamble"], a:0, e:"Foreign policy constitutional basis"},
{q:"SAARC established?", o:["1985 Dhaka","1975","1995","2000"], a:0, e:"8 members, India-Pak rivalry blocks it"},
{q:"India's Nuclear Doctrine - No First Use declared after?", o:["1998 Pokhran II","1974","1962","1991"], a:0, e:"Credible minimum deterrence"},
{q:"BIMSTEC excludes?", o:["Pakistan","Nepal","Sri Lanka","Thailand"], a:0, e:"Bay of Bengal, SAARC alternative"},
{q:"WTO - India is?", o:["Founding member","Not member","Left in 2020","Observer"], a:0, e:"Developing country leader"},
{q:"Indo-US Civil Nuclear Deal year?", o:["2008 (123 Agreement)","1998","1974","2014"], a:0, e:"Manmohan Singh + Bush"},
{q:"Doklam standoff (2017) with?", o:["China","Pakistan","Nepal","Bhutan border"], a:0, e:"India supported Bhutan"},
]
},
{
id:7, name:"Unit 7: Indian Govt & Politics", color:"#fbbf24",
qs:[
{q:"Article 32 - Heart and soul of Constitution said by?", o:["Ambedkar","Nehru","Gandhi","Patel"], a:0, e:"Right to Constitutional Remedies - SC can issue writs"},
{q:"Basic Structure Doctrine given in?", o:["Kesavananda Bharati 1973","Golaknath 1967","Minerva 1980","Maneka 1978"], a:0, e:"Parliament cannot amend basic features"},
{q:"73rd Amendment - Panchayati Raj year?", o:["1992 (came 1993)","1972","1982","2002"], a:0, e:"3-tier + 29 subjects + 33% women"},
{q:"Finance Commission Article?", o:["Article 280","Article 263","Article 356","Article 360"], a:0, e:"Every 5 years, distributes taxes centre-state"},
{q:"NOTA introduced in?", o:["2013 (SC order) + 2014 LS","2009","2004","2019"], a:0, e:"None Of The Above"},
{q:"First Past The Post (FPTP) leads to?", o:["Two-party system + Disproportional","Proportional","Coalition always","None"], a:0, e:"Duverger Law"},
{q:"Anti-defection law - 10th Schedule added by?", o:["52nd Amendment 1985","42nd","44th","61st"], a:0, e:"Rajiv Gandhi, if leave party lose seat"},
{q:"President Rule Article?", o:["Article 356","Article 352","Article 360","Article 32"], a:0, e:"Breakdown of constitutional machinery"},
{q:"Supreme Court Collegium system started?", o:["1993 (Second Judges Case)","1973","1950","2015 NJAC struck"], a:0, e:"Judges appoint judges"},
{q:"CAA 2019 gives citizenship to non-Muslim from?", o:["Pak, Afg, B'desh before 2014","All countries","Only Pak","Only Muslims"], a:0, e:"Religious persecution"},
{q:"Reservation - Indra Sawhney 1992 - Max limit?", o:["50%","60%","70%","No limit"], a:0, e:"Mandal case, creamy layer exclusion"},
]
},
{
id:8, name:"Unit 8: Public Administration", color:"#34d399",
qs:[
{q:"POSDCORB coined by? [June 2023]", o:["Luther Gulick 1937","Fayol","Taylor","Weber"], a:0, e:"Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting"},
{q:"Bureaucracy Ideal type - Legal-rational authority?", o:["Max Weber","Marx","Gulick","Simon"], a:0, e:"Hierarchy, Rules, Impersonality, Merit"},
{q:"Scientific Management - Father?", o:["F.W. Taylor 1911","Fayol","Gulick","Weber"], a:0, e:"Time-motion study, efficiency"},
{q:"Hawthorne Experiments - Human Relations School?", o:["Elton Mayo 1927-32","Taylor","Fayol","Simon"], a:0, e:"Workers are social beings, not machines"},
{q:"Bounded Rationality - Satisfying not maximizing?", o:["Herbert Simon 1947","Weber","Taylor","Mayo"], a:0, e:"Nobel Prize, Administrative Behavior"},
{q:"New Public Management NPM emphasizes?", o:["3Es - Economy Efficiency Effectiveness + Market","Rules","Hierarchy","Seniority"], a:0, e:"1990s - Run govt like business"},
{q:"Good Governance term popularized by?", o:["World Bank 1992","UN","USA","India"], a:0, e:"Participation, Rule of Law, Transparency, Accountability"},
{q:"Lokpal and Lokayukta Act passed?", o:["2013","2005","1992","2019"], a:0, e:"Anti-corruption ombudsman, Anna movement"},
{q:"Citizen Charter first in?", o:["UK 1991 (John Major)","India 1997","USA 1990","France"], a:0, e:"Quality of public services"},
{q:"Development Administration term by?", o:["Edward Weidner 1962","Riggs","Weber","Fayol"], a:0, e:"Admin for developing countries"},
]
},
{
id:9, name:"Unit 9: Governance & Policy", color:"#c4b5fd",
qs:[
{q:"RTI Act year?", o:["2005","2000","2015"], a:0, e:"Section 2(f) info, 2(j) right to info"},
{q:"NITI Aayog replaced Planning Commission in?", o:["2015 Jan 1","2014","2016","2019"], a:0, e:"Think tank, cooperative federalism"},
{q:"Sustainable Development Goals SDGs - How many?", o:["17 Goals 169 Targets (2015-2030)","8","20","10"], a:0, e:"Successor to MDGs"},
{q:"E-Governance - Digital India launched?", o:["2015 July 1","2014","2016","2020"], a:0, e:"Paperless, cashless, faceless"},
{q:"Second ARC - Chairperson?", o:["Veerappa Moily 2005-09","Sarkaria","Punchhi","Swaminathan"], a:0, e:"15 reports on governance reforms"},
{q:"Social Audit is?", o:["People audit govt works","CAG audit","Private audit","Bank audit"], a:0, e:"MGNREGA, Gram Sabha does it"},
{q:"Sevottam Model is for?", o:["Service Delivery Excellence","Police reform","Judicial reform","Tax reform"], a:0, e:"3 modules: Citizen Charter, Grievance, Capability"},
{q:"Public Policy - Lindblom called policy making?", o:["Muddling Through (incremental)","Rational","Elite","Group"], a:0, e:"Small incremental changes, not radical"},
{q:"Lateral Entry in civil services means?", o:["Private experts as Joint Secy","IAS only","Promotion","Deputation"], a:0, e:"Started 2018-19"},
{q:"Mission Karmayogi (2020) is?", o:["Civil Services Capacity Building","Police","Army","Teacher training"], a:0, e:"iGOT platform"},
]
},
{
id:10, name:"Unit 10: Ideologies + Latest PYQs", color:"#f87171",
qs:[
{q:"Who wrote Human Condition? [YOUR PDF Dec 2024 Q74]", o:["Hannah Arendt 1958","Simone Weil","Butler","Wollstonecraft"], a:0, e:"Vita Activa: Labor, Work, Action"},
{q:"Catch-all party? [Dec 2024 Q104 YOUR PDF]", o:["Kirchheimer","Dahl","Sartori","Duverger"], a:0, e:"Otto Kirchheimer - West Germany parties"},
{q:"Input-Output Demand+Support? [Dec 2024 Q89 YOUR PDF]", o:["David Easton","Almond","Powell","Pye"], a:0, e:"Political System model"},
{q:"NOT liberal democracy feature? [Dec 2024 Q78 YOUR PDF]", o:["One-party monopoly","Free Elections","Rule of Law","Judicial Independence"], a:0, e:"You had this Q in PDF!"},
{q:"Fascism - Leader principle (Fuhrerprinzip)?", o:["Mussolini + Hitler","Stalin","Lenin","Mao"], a:0, e:"Ultra-nationalism, state above all"},
{q:"Anarchism - No state needed?", o:["Bakunin + Kropotkin","Marx","Hegel","Hobbes"], a:0, e:"State is oppression"},
{q:"Liberalism - Negative liberty champion?", o:["Nozick","Rawls","Rousseau","Marx"], a:0, e:"Minimal state"},
{q:"Multiculturalism - Kymlicka + Taylor?", o:["Group differentiated rights","One culture only","No rights","Majoritarianism"], a:0, e:"Canada, Quebec example"},
{q:"Ecologism - Silent Spring author?", o:["Rachel Carson 1962","Naess","Leopold","Bookchin"], a:0, e:"Environmental movement"},
{q:"Postmodernism - Lyotard - Incredulity towards?", o:["Meta-narratives","Small stories","Science","All"], a:0, e:"No grand theory true"},
]
},
];

export default function App(){
const [unit,setUnit]=useState(0);
const [qIdx,setQIdx]=useState(0);
const [answers,setAnswers]=useState<{[k:number]:(number|null)[]}>({});
const [showRes,setShowRes]=useState(false);

const curUnit=UNITS[unit];
const curAns=answers[curUnit.id]||Array(curUnit.qs.length).fill(null);
const p=curUnit.qs[qIdx];

const totalQ=UNITS.reduce((s,u)=>s+u.qs.length,0);
const totalAtt=Object.values(answers).flat().filter(v=>v!==null).length;
const totalCor=UNITS.reduce((ac,u)=>{const a=answers[u.id]||[]; return ac+a.filter((v,i)=>v===u.qs[i].a).length;},0);

const select=(i:number)=>{
const upd=[...curAns]; upd[qIdx]=i;
setAnswers({...answers,[curUnit.id]:upd});
};

if(showRes){
return(
<div style={{background:'#020617',color:'#fff',minHeight:'100vh',padding:'14px',fontFamily:'system-ui'}}>
<div style={{maxWidth:'800px',margin:'0 auto'}}>
<h1 style={{textAlign:'center',color:'#22d3ee',fontSize:'24px'}}>🎯 Final Score Card</h1>
<div style={{background:'#0f172a',padding:'24px',borderRadius:'16px',textAlign:'center',marginTop:'14px'}}>
<p style={{fontSize:'52px',margin:0,color:'#4ade80',fontWeight:'900'}}>{totalCor}/{totalQ}</p>
<p style={{fontSize:'16px'}}>Attempted: {totalAtt}/{totalQ} | Accuracy: {totalAtt?Math.round(totalCor/totalAtt*100):0}%</p>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'8px',marginTop:'16px',textAlign:'left'}}>
{UNITS.map(u=>{const a=answers[u.id]||[]; const c=a.filter((v,i)=>v===u.qs[i].a).length; const att=a.filter(v=>v!==null).length;
return <div key={u.id} style={{background:'#1e293b',padding:'10px',borderRadius:'8px',borderLeft:`4px solid ${u.color}`,fontSize:'12px'}}>
<b style={{color:u.color}}>{u.name}</b><br/>{c}/{u.qs.length} correct | {att}/{u.qs.length} done
<div style={{background:'#334155',height:'6px',borderRadius:'4px',marginTop:'6px',overflow:'hidden'}}><div style={{width:`${att/u.qs.length*100}%`,height:'100%',background:u.color}}/></div>
</div>})}
</div>
<div style={{marginTop:'18px',display:'flex',gap:'10px',justifyContent:'center'}}>
<button onClick={()=>setShowRes(false)} style={{padding:'10px 18px',background:'#0891b2',border:'none',borderRadius:'8px',color:'#fff',cursor:'pointer',fontWeight:'bold'}}>Review Units</button>
<button onClick={()=>{setAnswers({}); setUnit(0); setQIdx(0); setShowRes(false);}} style={{padding:'10px 18px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',color:'#fff',cursor:'pointer'}}>🔄 Retake Full Syllabus</button>
</div>
</div>
</div>
</div>
);
}

return(
<div style={{background:'#020617',color:'#fff',minHeight:'100vh',padding:'10px',fontFamily:'system-ui'}}>
<div style={{maxWidth:'900px',margin:'0 auto'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'8px'}}>
<h1 style={{color:'#22d3ee',fontSize:'18px',margin:0}}>UGC NET Pol Sci - 10 Units 110 MCQs</h1>
<button onClick={()=>setShowRes(true)} style={{padding:'8px 12px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',color:'#22d3ee',fontSize:'11px',cursor:'pointer',fontWeight:'bold'}}>📊 Score {totalCor}/{totalQ} ({totalAtt} done)</button>
</div>

<div style={{display:'flex',gap:'5px',overflowX:'auto',marginTop:'12px',paddingBottom:'6px',scrollbarWidth:'none'}}>
{UNITS.map((u,i)=>{const a=answers[u.id]||[]; const done=a.filter(v=>v!==null).length;
return <button key={u.id} onClick={()=>{setUnit(i); setQIdx(0);}} style={{padding:'7px 10px',borderRadius:'20px',border:'none',whiteSpace:'nowrap',fontSize:'11px',cursor:'pointer',background:unit===i?u.color:'#1e293b',color:unit===i?'#000':'#fff',fontWeight:unit===i?'bold':'normal'}}>{u.name.split(':')[0]} {done}/{u.qs.length}</button>})}
</div>

<div style={{background:'#1e293b',height:'7px',borderRadius:'10px',overflow:'hidden',marginTop:'10px'}}><div style={{height:'100%',width:`${(curAns.filter(v=>v!==null).length/curUnit.qs.length)*100}%`,background:curUnit.color,transition:'0.3s'}}/></div>
<div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',color:'#94a3b8',marginTop:'4px'}}><span style={{color:curUnit.color,fontWeight:'bold',fontSize:'12px'}}>{curUnit.name}</span><span>Q {qIdx+1}/{curUnit.qs.length} | Unit Score {curAns.filter((v,i)=>v===curUnit.qs[i].a).length}/{curUnit.qs.length}</span></div>

<div style={{background:'#0f172a',padding:'16px',borderRadius:'14px',marginTop:'12px',border:`1px solid ${curUnit.color}50`}}>
<p style={{fontSize:'15px',margin:'0 0 12px 0',lineHeight:'1.4',fontWeight:'600'}}>{qIdx+1}. {p.q}</p>
<div style={{display:'grid',gap:'7px'}}>
{p.o.map((opt,i)=>{
const sel=curAns[qIdx]===i; const cor=p.a===i; const show=curAns[qIdx]!==null;
return <button key={i} onClick={()=>select(i)} style={{textAlign:'left',padding:'11px',borderRadius:'10px',border:'1px solid',borderColor:!show?'#334155':sel?(cor?'#22c55e':'#ef4444'):cor?'#22c55e':'#334155',background:!show?'#1e293b':sel?(cor?'#052e16':'#450a0a'):cor?'#052e16':'#1e293b',color:'#fff',cursor:'pointer',fontSize:'13px'}}>{String.fromCharCode(65+i)}. {opt} {show&&cor?' ✓':''} {show&&sel&&!cor?' ✗':''}</button>
})}
</div>
{curAns[qIdx]!==null && <div style={{marginTop:'10px',padding:'10px',borderRadius:'8px',fontSize:'12px',lineHeight:'1.4',background:curAns[qIdx]===p.a?'#052e16':'#450a0a',border:`1px solid ${curAns[qIdx]===p.a?'#22c55e':'#ef4444'}30`}}><b style={{color:curAns[qIdx]===p.a?'#4ade80':'#f87171'}}>{curAns[qIdx]===p.a?'✅ Correct!':'❌ Wrong.'}</b> {p.e}<br/><span style={{color:'#94a3b8'}}>Ans: {p.o[p.a]}</span></div>}
</div>

<div style={{display:'flex',justifyContent:'space-between',marginTop:'12px'}}>
<button disabled={qIdx===0} onClick={()=>setQIdx(qIdx-1)} style={{padding:'9px 14px',background:qIdx===0?'#1e293b':'#334155',border:'none',borderRadius:'8px',color:'#fff',cursor:'pointer',fontSize:'12px'}}>← Prev</button>
{qIdx===curUnit.qs.length-1? <button onClick={()=>{if(unit<UNITS.length-1){setUnit(unit+1); setQIdx(0);}else setShowRes(true);}} style={{padding:'9px 14px',background:curUnit.color,border:'none',borderRadius:'8px',color:'#000',fontWeight:'bold',cursor:'pointer',fontSize:'12px'}}>{unit<UNITS.length-1?'Next Unit →':'Final Result →'}</button> : <button onClick={()=>setQIdx(qIdx+1)} style={{padding:'9px 14px',background:curUnit.color,border:'none',borderRadius:'8px',color:'#000',fontWeight:'bold',cursor:'pointer',fontSize:'12px'}}>Next →</button>}
</div>

<div style={{display:'flex',flexWrap:'wrap',gap:'4px',marginTop:'12px',justifyContent:'center'}}>
{curUnit.qs.map((_,i)=><button key={i} onClick={()=>setQIdx(i)} style={{width:'26px',height:'26px',borderRadius:'6px',border:'none',fontSize:'10px',cursor:'pointer',background:curAns[i]===null?'#1e293b':curAns[i]===curUnit.qs[i].a?'#16a34a':'#dc2626',color:'#fff',outline:qIdx===i?`2px solid ${curUnit.color}`:'none'}}>{i+1}</button>)}
</div>

<p style={{textAlign:'center',color:'#475569',fontSize:'10px',marginTop:'14px'}}>110 REAL PYQs • 10 Units Full Syllabus • Explanations + Your PDF Qs Tagged • Progress Auto-Saved</p>
</div>
</div>
);
}
