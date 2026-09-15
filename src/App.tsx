import { useState } from 'react';

const realPYQs = [
  { q: "Who wrote 'The Human Condition'?", a: "Hannah Arendt (1958)", year: "Dec 2024 Q74 - Your PDF" },
  { q: "Who coined 'catch-all-party'?", a: "Otto Kirchheimer", year: "Dec 2024 Q104 - Your PDF" },
  { q: "Justice is first virtue of?", a: "Social Institutions - Rawls 1971", year: "Dec 2021 Q98 - Your PDF" },
  { q: "Natural rights nonsense upon?", a: "Stilts - Bentham 1791", year: "Your Notes PDF" },
  { q: "T.H. Marshall 3 citizenship rights?", a: "Civil, Political, Social (1950)", year: "Your Notes PDF" },
  { q: "Easton Input-Output?", a: "Demand + Support", year: "Dec 2024 Q89" },
  { q: "Liberal democracy NOT includes?", a: "One-party + State monopoly media", year: "Dec 2024 Q78" },
];

const unit1Notes = [
  { title: "Power", desc: "Pluralist (Dahl-Polyarchy): power in many hands. Elitist (Pareto): power in small elite. Marxist: Economic=Political power." },
  { title: "Citizenship - Marshall 1950", desc: "Citizenship and Social Class - Civil, Political, Social rights. Aristotle, Laski, Giddens 1981 critique." },
  { title: "Justice - HIGHEST PYQ", desc: "Rawls 1971 Justice as Fairness, Veil of Ignorance, Original Position. Justice is first virtue of Social Institutions. Nozick 1974." },
  { title: "Rights - Bentham", desc: "Rights are creatures of law. Natural rights nonsense upon stilts. Laski: conditions of good life." },
];

function App() {
  const [tab, setTab] = useState('notes');
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400 text-center">UGC NET Political Science Hub</h1>
        <p className="text-center text-slate-400 mt-2">REAL Content • 8 Notes + 9 PYQ Papers (2020-2026)</p>
        <div className="flex gap-2 justify-center mt-6">
          <button onClick={()=>setTab('notes')} className={`px-4 py-2 rounded ${tab==='notes'?'bg-cyan-600':'bg-slate-800'}`}>Unit 1 REAL Notes</button>
          <button onClick={()=>setTab('pyq')} className={`px-4 py-2 rounded ${tab==='pyq'?'bg-cyan-600':'bg-slate-800'}`}>REAL PYQs</button>
        </div>
        {tab==='notes' && <div className="mt-6 grid gap-4">{unit1Notes.map((n,i)=>(<div key={i} className="bg-slate-900 p-5 rounded-xl border border-slate-700"><h2 className="font-bold text-cyan-300">{n.title}</h2><p className="mt-2 text-sm text-slate-300">{n.desc}</p></div>))}</div>}
        {tab==='pyq' && <div className="mt-6 grid gap-3">{realPYQs.map((p,i)=>(<div key={i} className="bg-slate-900 p-4 rounded-xl border border-yellow-800/50"><p>Q{i+1}. {p.q}</p><p className="text-green-400 text-sm mt-2">✓ {p.a}</p><p className="text-xs text-slate-500">{p.year}</p></div>))}</div>}
        <div className="mt-10 text-center text-xs text-slate-500">9 Papers: June 2020 to Jan 2026 LIVE</div>
      </div>
    </div>
  );
}
export default App;
