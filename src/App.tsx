import { useState, useEffect } from "react"
type MCQ = { q: string; options: string[]; answer: number; tag?: string }
const ADMIN_EMAIL = "vishwakarmaadi00@gmail.com"
const STUDENT_PASS = "ugckey01"

const mcqData: Record<string, MCQ[]> = {
  "Unit 1": [
    { q: "Who said 'Political Science begins and ends with the State'?", options: ["Garner", "Paul Janet", "Bluntschli", "Dimock"], answer: 0, tag: "June 2024" },
    { q: "Behaviouralism is associated with?", options: ["Traditional", "Post-behaviouralism", "Scientific value-free", "Philosophical"], answer: 2 },
    { q: "Who wrote 'A Grammar of Politics'?", options: ["Laski", "Barker", "Garner", "Marx"], answer: 0 },
    { q: "Systems theory by?", options: ["David Easton", "Almond", "Lasswell", "Kaplan"], answer: 0, tag: "Dec 2024 Q12 YOUR PDF" },
    { q: "Credo of relevance is?", options: ["Behaviouralism", "Post-behaviouralism", "Marxism", "Liberalism"], answer: 1 },
    { q: "Who distinguished State from Govt?", options: ["Hobbes", "Locke", "Rousseau", "All"], answer: 3 },
    { q: "Power as capacity to affect others by?", options: ["Morgenthau", "Dahl", "Weber", "Marx"], answer: 1 },
    { q: "Decline of Political Theory by?", options: ["Easton & Cobban", "Berlin", "Strauss", "Dahl"], answer: 0 },
    { q: "Who said 'Everywhere state is, freedom is not'?", options: ["Marx", "Bakunin", "Lenin", "Gramsci"], answer: 1 },
    { q: "8-fold classification of Constitutions by?", options: ["Aristotle", "Plato", "Polybius", "Cicero"], answer: 0, tag: "Dec 2023" },
    { q: "Structural-functionalism by?", options: ["Almond & Powell", "Easton", "Apter", "Pye"], answer: 0 },
  ],
  "Unit 2": [
    { q: "Plato's Justice means?", options: ["Each doing its own job", "Equality", "Liberty", "Fraternity"], answer: 0 },
    { q: "Aristotle's best practicable state is?", options: ["Polity", "Kingship", "Aristocracy", "Democracy"], answer: 0 },
    { q: "Machiavelli's Prince should be?", options: ["Fox & Lion", "Only Lion", "Only Fox", "Sheep"], answer: 0, tag: "Dec 2024 Q45" },
    { q: "Hobbes social contract gives?", options: ["Absolute Sovereign", "Limited Govt", "Anarchism", "Const Monarchy"], answer: 0 },
    { q: "Locke's natural rights?", options: ["Life, Liberty, Property", "Equality, Fraternity", "Justice, Liberty", "Life, Equality"], answer: 0 },
    { q: "Rousseau's General Will is?", options: ["Majority will", "Common good", "Will of all", "State will"], answer: 1 },
    { q: "Hegel's State is?", options: ["March of God on earth", "Necessary evil", "Class instrument", "Contract"], answer: 0 },
    { q: "Marx's historical materialism stages?", options: ["5", "4", "6", "3"], answer: 0 },
    { q: "Gramsci's Hegemony means?", options: ["Domination by consent", "Force", "Dictatorship", "Revolution"], answer: 0, tag: "YOUR PDF P-9" },
    { q: "Rawls's Justice uses?", options: ["Veil of ignorance", "Original contract", "Both", "None"], answer: 2 },
    { q: "Kautilya's Saptanga has?", options: ["7 elements", "4 elements", "5 elements", "8 elements"], answer: 0 },
  ],
  "Unit 3": [
    { q: "Fathers of Indian Constitution were influenced by?", options: ["GOI Act 1935", "US Constitution", "Both", "None"], answer: 2 },
    { q: "Preamble amended by?", options: ["42nd Amendment", "44th", "86th", "73rd"], answer: 0, tag: "June 2024" },
    { q: "Fundamental Rights are in?", options: ["Part III", "Part IV", "Part II", "Part V"], answer: 0 },
    { q: "DPSP are?", options: ["Justiciable", "Non-justiciable", "Both", "None"], answer: 1 },
    { q: "Article 32 is called soul of Constitution by?", options: ["Ambedkar", "Nehru", "Gandhi", "Patel"], answer: 0 },
    { q: "Panchayati Raj by?", options: ["73rd Amendment", "74th", "42nd", "44th"], answer: 0 },
    { q: "President's veto power?", options: ["Absolute", "Suspensive", "Pocket", "All three"], answer: 3 },
    { q: "Supreme Court original jurisdiction in?", options: ["Centre-State disputes", "Appeals", "Advisory", "None"], answer: 0 },
    { q: "CAG appointed by?", options: ["President", "PM", "Parliament", "CJI"], answer: 0 },
    { q: "NITI Aayog replaced?", options: ["Planning Commission", "Finance Commission", "UPSC", "EC"], answer: 0 },
    { q: "Party system in India is?", options: ["Multi-party", "Bi-party", "Single", "No party"], answer: 0 },
  ],
  "Unit 4": [
    { q: "Comparative Politics father?", options: ["Aristotle", "Machiavelli", "Bryce", "Easton"], answer: 0 },
    { q: "UK Constitution is?", options: ["Unwritten", "Written", "Flexible", "Both A & C"], answer: 3 },
    { q: "US President is elected by?", options: ["Electoral College", "Direct", "Senate", "House"], answer: 0 },
    { q: "Swiss direct democracy device?", options: ["Referendum", "Initiative", "Recall", "All"], answer: 3 },
    { q: "China's National People's Congress is?", options: ["Unicameral", "Bicameral", "Tricameral", "None"], answer: 0 },
    { q: "Interest groups are called?", options: ["Anomic", "Institutional", "Associational", "All"], answer: 3, tag: "Dec 2024 Q23" },
    { q: "Duverger's law relates to?", options: ["Party system & Electoral system", "Federalism", "Presidentialism", "None"], answer: 0 },
    { q: "Dependency theory by?", options: ["A.G. Frank", "Wallerstein", "Both", "None"], answer: 2 },
    { q: "Political Development by?", options: ["Lucian Pye", "Almond", "Both", "None"], answer: 0 },
    { q: "Revolution is studied under?", options: ["Political Culture", "Political Development", "Both", "None"], answer: 0 },
    { q: "Constitutionalism means?", options: ["Limited Govt", "Unlimited Govt", "Dictatorship", "None"], answer: 0 },
  ],
  "Unit 5": [
    { q: "Public Administration father?", options: ["Woodrow Wilson", "Weber", "Taylor", "Fayol"], answer: 0 },
    { q: "POSDCORB by?", options: ["Gulick & Urwick", "Wilson", "Weber", "Simon"], answer: 0 },
    { q: "Bureaucracy ideal type by?", options: ["Max Weber", "Marx", "Durkheim", "Parsons"], answer: 0 },
    { q: "Scientific Management by?", options: ["Taylor", "Fayol", "Mayo", "Simon"], answer: 0 },
    { q: "Hawthorne experiments by?", options: ["Elton Mayo", "Taylor", "Weber", "Gulick"], answer: 0 },
    { q: "Decision-making theory by?", options: ["Herbert Simon", "Barnard", "Weber", "Mayo"], answer: 0, tag: "Dec 2024 Q51" },
    { q: "Ecological approach by?", options: ["F.W. Riggs", "Weber", "Taylor", "Wilson"], answer: 0 },
    { q: "New Public Management emphasizes?", options: ["3Es Efficiency", "Bureaucracy", "Hierarchy", "None"], answer: 0 },
    { q: "Good Governance concept by?", options: ["World Bank 1992", "UN 1995", "IMF", "WTO"], answer: 0 },
    { q: "Article 315 relates to?", options: ["UPSC", "CAG", "EC", "Finance Commission"], answer: 0 },
    { q: "Lokpal created by?", options: ["2013 Act", "2011 Act", "2014 Act", "2012 Act"], answer: 0 },
  ],
  "Unit 6": [
    { q: "International Relations idealist is?", options: ["Woodrow Wilson", "Morgenthau", "Carr", "Kennan"], answer: 0 },
    { q: "Realism power concept by?", options: ["Morgenthau", "Wilson", "Keohane", "Nye"], answer: 0 },
    { q: "UN Charter signed in?", options: ["1945", "1944", "1946", "1947"], answer: 0 },
    { q: "NATO formed in?", options: ["1949", "1945", "1950", "1947"], answer: 0 },
    { q: "Cold War term coined by?", options: ["Bernard Baruch", "Lippmann", "Orwell", "Churchill"], answer: 0 },
    { q: "Non-alignment by?", options: ["Nehru, Tito, Nasser", "Nehru only", "Tito only", "None"], answer: 0, tag: "June 2024" },
    { q: "WTO formed in?", options: ["1995", "1994", "1996", "1993"], answer: 0 },
    { q: "Bretton Woods created?", options: ["IMF & World Bank", "UN", "WTO", "NATO"], answer: 0 },
    { q: "India's Look East Policy started?", options: ["1992", "1991", "1993", "1990"], answer: 0 },
    { q: "Sustainable Development Goals are?", options: ["17", "8", "15", "21"], answer: 0 },
    { q: "Paris Climate Agreement in?", options: ["2015", "2016", "2014", "2017"], answer: 0 },
  ],
  "Unit 7": [
    { q: "Plato's Philosopher King is?", options: ["Ideal ruler", "Military ruler", "Democratic ruler", "None"], answer: 0 },
    { q: "Aristotle's Revolution cause?", options: ["Inequality", "Poverty", "Wealth", "All"], answer: 3 },
    { q: "Augustine's two cities?", options: ["City of God & Earthly city", "Heaven & Hell", "State & Church", "None"], answer: 0 },
    { q: "Aquinas's law types are?", options: ["4", "3", "5", "2"], answer: 0 },
    { q: "Machiavelli's book?", options: ["The Prince", "Discourses", "Both", "None"], answer: 2 },
    { q: "Bentham's principle?", options: ["Greatest happiness", "Liberty", "Equality", "Justice"], answer: 0 },
    { q: "J.S. Mill's On Liberty supports?", options: ["Negative liberty", "Positive liberty", "Both", "None"], answer: 0 },
    { q: "Marx's Das Kapital Vol 1 in?", options: ["1867", "1848", "1860", "1870"], answer: 0 },
    { q: "Gandhi's Hind Swaraj in?", options: ["1909", "1910", "1908", "1920"], answer: 0 },
    { q: "Ambedkar's Annihilation of Caste in?", options: ["1936", "1935", "1937", "1940"], answer: 0 },
    { q: "Nehru's Discovery of India in?", options: ["1946", "1944", "1947", "1945"], answer: 0 },
  ],
  "Unit 8": [
    { q: "Parliamentary sovereignty in?", options: ["UK", "USA", "India", "Switzerland"], answer: 0 },
    { q: "Judicial Review originated in?", options: ["USA Marbury vs Madison", "UK", "India", "France"], answer: 0 },
    { q: "Federalism in India is?", options: ["Quasi-federal", "True federal", "Confederal", "Unitary"], answer: 0 },
    { q: "Article 356 is?", options: ["President's rule", "Emergency", "Finance emergency", "None"], answer: 0 },
    { q: "Right to Property now is?", options: ["Legal right", "Fundamental right", "Constitutional right", "Both A & C"], answer: 3 },
    { q: "NOTA introduced in?", options: ["2013", "2014", "2012", "2015"], answer: 0 },
    { q: "Model Code of Conduct by?", options: ["Election Commission", "SC", "Parliament", "President"], answer: 0 },
    { q: "Coalition govt era started from?", options: ["1989", "1991", "1984", "1996"], answer: 0 },
    { q: "Right to Information Act?", options: ["2005", "2004", "2006", "2003"], answer: 0 },
    { q: "GST introduced by?", options: ["101st Amendment", "100th", "99th", "102nd"], answer: 0 },
    { q: "National Emergency under?", options: ["Art 352", "Art 356", "Art 360", "Art 368"], answer: 0 },
  ],
  "Unit 9": [
    { q: "Modernization theory by?", options: ["Rostow", "Frank", "Wallerstein", "Amin"], answer: 0 },
    { q: "Political participation highest in?", options: ["Democracy", "Authoritarian", "Monarchy", "Oligarchy"], answer: 0 },
    { q: "Civic culture by?", options: ["Almond & Verba", "Pye & Verba", "Easton", "Dahl"], answer: 0 },
    { q: "Caste politics studied by?", options: ["Rajni Kothari", "Myron Weiner", "Both", "None"], answer: 2 },
    { q: "Green Revolution in India in?", options: ["1960s", "1950s", "1970s", "1980s"], answer: 0 },
    { q: "Naxalism started from?", options: ["Naxalbari 1967", "1969", "1965", "1970"], answer: 0 },
    { q: "Reservation for OBC by?", options: ["Mandal Commission", "Kaka Kalelkar", "Both", "None"], answer: 0 },
    { q: "Social Justice means?", options: ["Fair distribution", "Equality only", "Liberty only", "None"], answer: 0 },
    { q: "Women's Reservation Bill is?", options: ["106th Amendment 2023", "108th", "107th", "105th"], answer: 0 },
    { q: "Poverty line measured by?", options: ["Tendulkar, Rangarajan", "Lakdawala only", "Both", "None"], answer: 0 },
    { q: "Human Development Index by?", options: ["Mahbub ul Haq & Amartya Sen", "Sen only", "Haq only", "UNDP"], answer: 0 },
  ],
  "Unit 10": [
    { q: "[Dec 2024 Q74 YOUR PDF] Match Feminist thinkers - Works", options: ["Simone-Second Sex, Millett-Sexual Politics correct", "All wrong", "Only Wollstonecraft", "None"], answer: 0, tag: "Dec 2024 Q74 YOUR PDF" },
    { q: "Wollstonecraft wrote?", options: ["Vindication of Rights of Woman 1792", "Subjection", "Feminine Mystique", "Second Sex"], answer: 0 },
    { q: "Second Wave feminism time?", options: ["1960s-80s", "1940s", "1990s", "2000s"], answer: 0 },
    { q: "Black feminism by?", options: ["Bell hooks, Crenshaw", "Wollstonecraft", "De Beauvoir", "Millett"], answer: 0 },
    { q: "Ecofeminism by?", options: ["Vandana Shiva", "Maria Mies", "Both", "None"], answer: 2 },
    { q: "Liberal feminism demands?", options: ["Equal rights within system", "Revolution", "Separatism", "None"], answer: 0 },
    { q: "Radical feminism says patriarchy is?", options: ["Root oppression", "Secondary", "Not important", "None"], answer: 0 },
    { q: "Intersectionality term by?", options: ["Kimberle Crenshaw 1989", "Hooks", "Collins", "Davis"], answer: 0 },
    { q: "Gender is?", options: ["Social construct", "Biological", "Both", "None"], answer: 0 },
    { q: "CEDAW adopted in?", options: ["1979", "1975", "1980", "1985"], answer: 0 },
    { q: "Feminization of poverty means?", options: ["More women in poverty", "Less women", "Equal", "None"], answer: 0 },
  ]
}

export default function App(){
  const [isLogged,setIsLogged]=useState(false)
  const [isAdmin,setIsAdmin]=useState(false)
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const [err,setErr]=useState("")
  const [unit,setUnit]=useState("Unit 1")
  const [curr,setCurr]=useState(0)
  const [showAns,setShowAns]=useState(false)
  const [score,setScore]=useState(0)

  useEffect(()=>{ const s=localStorage.getItem("net_login"); if(s){ const d=JSON.parse(s); setIsLogged(true); setIsAdmin(d.isAdmin)}},[])

  const login=()=>{
    if(email.toLowerCase().trim()===ADMIN_EMAIL){ setIsAdmin(true); setIsLogged(true); localStorage.setItem("net_login",JSON.stringify({isAdmin:true})); }
    else if(pass===STUDENT_PASS){ setIsAdmin(false); setIsLogged(true); localStorage.setItem("net_login",JSON.stringify({isAdmin:false})); }
    else setErr("Wrong! Admin: vishwakarmaadi00@gmail.com | Students Pass: ugckey01")
  }
  const logout=()=>{localStorage.removeItem("net_login"); setIsLogged(false); setIsAdmin(false); setEmail(""); setPass("")}

  if(!isLogged){
    return <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0f172a",padding:20}}>
      <div style={{background:"white",padding:28,borderRadius:16,width:"100%",maxWidth:380}}>
        <h2>🔒 UGC NET Hub - Private</h2>
        <p style={{fontSize:13}}>Admin & Students Login</p>
        <input placeholder="Admin Email (vishwakarmaadi00@gmail.com)" value={email} onChange={e=>setEmail(e.target.value)} style={{width:"100%",padding:10,margin:"8px 0",borderRadius:8,border:"1px solid #ccc"}}/>
        <input placeholder="Student Password: ugckey01" type="password" value={pass} onChange={e=>setPass(e.target.value)} style={{width:"100%",padding:10,margin:"8px 0",borderRadius:8,border:"1px solid #ccc"}}/>
        <button onClick={login} style={{width:"100%",padding:12,background:"#2563eb",color:"white",border:"none",borderRadius:8,fontWeight:"bold",marginTop:8}}>Login</button>
        {err && <p style={{color:"red",fontSize:12,marginTop:8}}>{err}</p>}
        <p style={{fontSize:11,color:"#666",marginTop:12}}>Admin use your gmail | Students use ugckey01</p>
      </div>
    </div>
  }

  const qs=mcqData[unit]; const q=qs[curr]
  return <div style={{padding:16,maxWidth:700,margin:"0 auto",fontFamily:"system-ui"}}>
    <div style={{display:"flex",justifyContent:"space-between"}}><b>{isAdmin?"👑 ADMIN":"🎓 STUDENT"} - {unit}</b><button onClick={logout}>Logout</button></div>
    {isAdmin && <div style={{background:"#fef3c7",padding:10,borderRadius:8,margin:"10px 0",fontSize:12}}><b>Admin Panel:</b> 110 Qs LIVE | Student Pass: {STUDENT_PASS} | You can edit App.tsx anytime to add more Qs | Total Units: {Object.keys(mcqData).length}</div>}
    <div style={{display:"flex",gap:5,flexWrap:"wrap",margin:"12px 0"}}>{Object.keys(mcqData).map(u=><button key={u} onClick={()=>{setUnit(u);setCurr(0);setShowAns(false)}} style={{padding:"6px 10px",borderRadius:6,border:"none",background:unit===u?"#2563eb":"#e5e7eb",color:unit===u?"white":"black"}}>{u}</button>)}</div>
    <div style={{border:"1px solid #ddd",padding:16,borderRadius:12}}>
      <p><b>Q{curr+1}. {q.q}</b> {q.tag && <span style={{background:"#dcfce7",fontSize:10,padding:"2px 6px",borderRadius:4,marginLeft:6}}>{q.tag}</span>}</p>
      {q.options.map((op,i)=><button key={i} onClick={()=>setShowAns(true)} style={{display:"block",width:"100%",textAlign:"left",padding:10,margin:"6px 0",borderRadius:8,border:"1px solid #ccc",background:showAns?(i===q.answer?"#bbf7d0":"#fecaca"):"white"}}>{op}</button>)}
      {showAns && <button onClick={()=>{if(curr<qs.length-1){setCurr(curr+1);setShowAns(false)}else{alert(`Unit ${unit} Done! Score ${score+1}/${qs.length}`); setCurr(0); setShowAns(false)}}} style={{marginTop:10,padding:"8px 16px",background:"black",color:"white",borderRadius:8}}>{curr===qs.length-1?"Finish Unit":"Next →"}</button>}
    </div>
    <p style={{fontSize:12,marginTop:10}}>Score: {score} | {curr+1}/{qs.length} | Login: {isAdmin?ADMIN_EMAIL:STUDENT_PASS}</p>
  </div>
}
