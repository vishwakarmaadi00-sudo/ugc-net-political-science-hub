import { useState } from 'react';

const UNITS = [
  {
    id: 1, name: "Unit 1: Political Theory", color: "#22d3ee",
    qs: [
      { q: "Pluralist view of Power - Polyarchy (1956) given by?", o: ["Robert Dahl", "Pareto", "Marx", "Weber"], a: 0 },
      { q: "Natural rights are 'nonsense upon stilts' (1791) said by?", o: ["Jeremy Bentham", "Locke", "Burke", "Laski"], a: 0 },
      { q: "Justice is first virtue of Social Institutions - Book A Theory of Justice (1971) author?", o: ["John Rawls", "Nozick", "Walzer", "Hayek"], a: 0 },
      { q: "T.H. Marshall 1950 - Citizenship and Social Class - 3 rights?", o: ["Civil, Political, Social", "Legal, Economic, Social", "Civil, Cultural, Political", "All"], a: 0 },
      { q: "Negative vs Positive Liberty - Two Concepts (1958) by?", o: ["Isaiah Berlin", "J.S. Mill", "Hobbes", "Rousseau"], a: 0 },
    ]
  },
  {
    id: 2, name: "Unit 2: Western Political Thought", color: "#a78bfa",
    qs: [
      { q: "Who wrote 'The Human Condition' (1958)?", o: ["Hannah Arendt", "Simone Weil", "Butler", "Wollstonecraft"], a: 0, src: "Dec 2024 Q74 - Your PDF" },
      { q: "Author of Leviathan (1651) - State of nature 'nasty, brutish, short'?", o: ["Thomas Hobbes", "John Locke", "Rousseau", "Machiavelli"], a: 0 },
      { q: "Man is born free but everywhere in chains - Social Contract (1762)?", o: ["Rousseau", "Hobbes", "Locke", "Hegel"], a: 0 },
      { q: "Catch-all-party concept coined by?", o: ["Otto Kirchheimer", "Dahl", "Sartori", "Duverger"], a: 0, src: "Dec 2024 Q104 - Your PDF" },
      { q: "Anarchy, State and Utopia (1974) - Entitlement Theory vs Rawls?", o: ["Robert Nozick", "Rawls", "Walzer", "MacIntyre"], a: 0 },
    ]
  },
  {
    id: 3, name: "Unit 3: Indian Political Thought", color: "#f59e0b",
    qs: [
      { q: "Arthashastra author - Saptanga theory of state?", o: ["Kautilya / Chanakya", "Manu", "Shukra", "Kamandaka"], a: 0 },
      { q: "Hind Swaraj (1909) author?", o: ["M.K. Gandhi", "Tilak", "Aurobindo", "Savarkar"], a: 0 },
      { q: "Annihilation of Caste (1936) author?", o: ["B.R. Ambedkar", "Periyar", "Gandhi", "Nehru"], a: 0 },
      { q: "Who called Gandhi 'Father of Nation' first?", o: ["Subhash Chandra Bose", "Tagore", "Nehru", "Patel"], a: 0 },
    ]
  },
  {
    id: 4, name: "Unit 4: Comparative Politics", color: "#4ade80",
    qs: [
      { q: "Easton Input-Output model - Inputs are?", o: ["Demand + Support", "Money + Power", "Vote + Pressure", "Legitimacy + Authority"], a: 0, src: "Dec 2024 Q89" },
      { q: "Which is NOT feature of Liberal Democracy? (Your PDF)", o: ["One-party + State monopoly media", "Free Elections", "Rule of Law", "Independent Judiciary"], a: 0, src: "Dec 2024 Q78" },
      { q: "Polyarchy concept (1956) by?", o: ["Robert Dahl", "Michels", "Mills", "Pareto"], a: 0 },
      { q: "Iron Law of Oligarchy by?", o: ["Robert Michels", "Mosca", "Pareto", "Dahl"], a: 0 },
    ]
  },
  {
    id: 5, name: "Unit 10: PYQ Mix (9 Papers 2020-2026)", color: "#f87171",
    qs: [
      { q: "Dec 2024 Q74 - Human Condition author?", o: ["Hannah Arendt 1958", "Arendt 1960", "Weil 1958", "Butler"], a: 0 },
      { q: "Veil of Ignorance - Original Position?", o: ["Rawls 1971", "Nozick 1974", "Habermas", "Foucault"], a: 0 },
      { q: "Justice first virtue of? (Repeated 5 times in PYQ)", o: ["Social Institutions", "State", "Law", "Society"], a: 0 },
      { q: "Behavioural Revolution started by? (Dec 2022)", o: ["David Easton 1953 + Chicago School", "Merriam only", "Wallas", "Bentley"], a: 0 },
    ]
  },
];

export default function App() {
  const [unit, setUnit] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<{[key:number]: (number|null)[]}>({});
  const [showRes, setShowRes] = useState(false);

  const curUnit = UNITS[unit];
  const curQs = curUnit.qs;
  const curAns = answers[curUnit.id] || Array(curQs.length).fill(null);
  const p = curQs[qIdx];

  const select = (i: number) => {
    const updated = [...curAns];
    updated[qIdx] = i;
    setAnswers({...answers, [curUnit.id]: updated });
  };

  const totalAttempted = Object.values(answers).flat().filter(v=>v!==null).length;
  const totalCorrect = UNITS.reduce((acc,u)=>{
    const a = answers[u.id]||[];
    return acc + a.filter((v,idx)=> v===u.qs[idx].a).length;
  },0);
  const totalQs = UNITS.reduce((s,u)=>s+u.qs.length,0);

  if (showRes) {
    return (
      <div style={{background:'#020617',color:'#fff',minHeight:'100vh',padding:'16px',fontFamily:'system-ui'}}>
        <div style={{maxWidth:'800px',margin:'0 auto'}}>
          <h1 style={{textAlign:'center',color:'#22d3ee'}}>📊 Overall Progress</h1>
          <div style={{background:'#0f172a',padding:'20px',borderRadius:'14px',textAlign:'center',marginTop:'16px'}}>
            <p style={{fontSize:'44px',margin:0,color:'#4ade80',fontWeight:'bold'}}>{totalCorrect} / {totalQs}</p>
            <p>Attempted: {totalAttempted} | Accuracy: {totalAttempted? Math.round(totalCorrect/totalAttempted*100):0}%</p>
            <button onClick={()=>setShowRes(false)} style={{marginTop:'12px',padding:'10px 20px',background:'#0891b2',border:'none',borderRadius:'8px',color:'#fff',cursor:'pointer'}}>Back to Units</button>
          </div>
          {UNITS.map(u=>{
            const a = answers[u.id]||[];
            const correct = a.filter((v,i)=>v===u.qs[i].a).length;
            return (
              <div key={u.id} style={{background:'#0f172a',padding:'14px',borderRadius:'10px',marginTop:'12px',borderLeft:`4px solid ${u.color}`}}>
                <b style={{color:u.color}}>{u.name}</b> - {correct} / {u.qs.length} correct {a.filter(v=>v!==null).length}/{u.qs.length} attempted
              </div>
            )
          })}
        </div>
      </div>
    );
  }

  return (
    <div style={{background:'#020617',color:'#fff',minHeight:'100vh',padding:'12px',fontFamily:'system-ui'}}>
      <div style={{maxWidth:'900px',margin:'0 auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1 style={{color:'#22d3ee',fontSize:'20px',margin:0}}>UGC NET POL SCI - Unit Wise MCQs</h1>
          <button onClick={()=>setShowRes(true)} style={{padding:'8px 14px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',color:'#22d3ee',fontSize:'12px',cursor:'pointer'}}>📊 Progress {totalCorrect}/{totalQs}</button>
        </div>

        {/* Unit Tabs */}
        <div style={{display:'flex',gap:'6px',overflowX:'auto',marginTop:'14px',paddingBottom:'6px'}}>
          {UNITS.map((u,i)=> {
            const a = answers[u.id]||[];
            const done = a.filter(v=>v!==null).length;
            return (
              <button key={u.id} onClick={()=>{setUnit(i); setQIdx(0);}} style={{
                padding:'8px 12px',borderRadius:'20px',border:'none',whiteSpace:'nowrap',fontSize:'12px',cursor:'pointer',
                background: unit===i? u.color : '#1e293b', color: unit===i? '#000':'#fff', fontWeight: unit===i? 'bold':'normal'
              }}>
                {u.name.split(':')[0]} ({done}/{u.qs.length})
              </button>
            );
          })}
        </div>

        {/* Progress Bar for Unit */}
        <div style={{background:'#1e293b',height:'8px',borderRadius:'10px',overflow:'hidden',marginTop:'12px'}}>
          <div style={{height:'100%',width:`${(curAns.filter(v=>v!==null).length/curQs.length)*100}%`,background:curUnit.color,transition:'0.3s'}}/>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',color:'#94a3b8',marginTop:'4px'}}>
          <span style={{color:curUnit.color,fontWeight:'bold'}}>{curUnit.name}</span>
          <span>Q {qIdx+1}/{curQs.length} | Score {curAns.filter((v,i)=>v===curQs[i].a).length}/{curQs.length}</span>
        </div>

        {/* Question */}
        <div style={{background:'#0f172a',padding:'18px',borderRadius:'14px',marginTop:'14px',border:`1px solid ${curUnit.color}40`}}>
          <h2 style={{fontSize:'16px',margin:'0 0 14px 0',lineHeight:'1.4'}}>{qIdx+1}. {p.q}</h2>
          <div style={{display:'grid',gap:'8px'}}>
            {p.o.map((opt,i)=>{
              const sel = curAns[qIdx]===i;
              const isCorrect = p.a===i;
              const show = curAns[qIdx]!==null;
              return (
                <button key={i} onClick={()=>select(i)} style={{
                  textAlign:'left',padding:'12px',borderRadius:'10px',border:'1px solid',
                  borderColor:!show? '#334155' : sel? (isCorrect? '#22c55e':'#ef4444') : isCorrect? '#22c55e':'#334155',
                  background:!show? '#1e293b' : sel? (isCorrect? '#052e16':'#450a0a') : isCorrect? '#052e16':'#1e293b',
                  color:'#fff',cursor:'pointer',fontSize:'13px'
                }}>
                  {String.fromCharCode(65+i)}. {opt} {show && isCorrect? ' ✓ Correct' : ''} {show && sel &&!isCorrect? ' ✗' : ''}
                </button>
              );
            })}
          </div>
          {curAns[qIdx]!==null && <div style={{marginTop:'10px',fontSize:'12px',color: curAns[qIdx]===p.a? '#4ade80':'#f87171'}}>{curAns[qIdx]===p.a? '✅ Correct!' : `❌ Wrong. Correct: ${p.o[p.a]}`} {(p as any).src? ` | ${(p as any).src}`:''}</div>}
        </div>

        <div style={{display:'flex',justifyContent:'space-between',marginTop:'14px'}}>
          <button disabled={qIdx===0} onClick={()=>setQIdx(qIdx-1)} style={{padding:'10px 16px',background:qIdx===0?'#1e293b':'#334155',border:'none',borderRadius:'8px',color:'#fff',cursor:'pointer'}}>← Prev</button>
          {qIdx===curQs.length-1? (
            <button onClick={()=>{ if(unit < UNITS.length-1){setUnit(unit+1); setQIdx(0);} else setShowRes(true);}} style={{padding:'10px 16px',background:curUnit.color,border:'none',borderRadius:'8px',color:'#000',fontWeight:'bold',cursor:'pointer'}}>{unit < UNITS.length-1? 'Next Unit →' : 'View Result →'}</button>
          ) : (
            <button onClick={()=>setQIdx(qIdx+1)} style={{padding:'10px 16px',background:curUnit.color,border:'none',borderRadius:'8px',color:'#000',fontWeight:'bold',cursor:'pointer'}}>Next →</button>
          )}
        </div>

        <div style={{display:'flex',flexWrap:'wrap',gap:'5px',marginTop:'14px',justifyContent:'center'}}>
          {curQs.map((_,i)=>(
            <button key={i} onClick={()=>setQIdx(i)} style={{width:'28px',height:'28px',borderRadius:'6px',border:'none',fontSize:'11px',cursor:'pointer',background:curAns[i]===null?'#1e293b':curAns[i]===curQs[i].a?'#16a34a':'#dc2626',color:'#fff',outline: qIdx===i? `2px solid ${curUnit.color}`:'none'}}>{i+1}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
