import { ArrowLeft } from 'lucide-react';
import { Unit } from '../data/mockData';
import { useState } from 'react';

export default function UnitPage({ unit, onBack }: { unit: Unit; onBack: () => void }) {
  const [tab, setTab] = useState('notes');
  const [topic, setTopic] = useState(unit?.topics?.[0] || 'Overview');

  if (!unit) return <div className="p-10 bg-black text-white">Unit not found <button onClick={onBack}>Back</button></div>;

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="sticky top-0 bg-slate-950 border-b border-slate-800 p-3 flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center"><ArrowLeft className="w-5 h-5"/></button>
        <div><p className="text-xs text-sky-400">UNIT {unit.id}</p><h1 className="font-bold">{unit.name}</h1></div>
      </div>
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="space-y-2">
          <h3 className="text-xs text-slate-500 font-bold">TOPICS</h3>
          {unit.topics.map((t,i)=><button key={i} onClick={()=>setTopic(t)} className={`w-full text-left p-3 rounded-xl border text-sm ${topic===t?'bg-blue-600 border-blue-500':'bg-slate-900 border-slate-800 text-slate-400'}`}>{t}</button>)}
        </div>
        <div className="lg:col-span-3">
          <div className="flex gap-2 mb-4">
            <button onClick={()=>setTab('notes')} className={`px-4 py-2 rounded-lg text-sm font-bold ${tab==='notes'?'bg-white text-black':'bg-slate-900 text-slate-400'}`}>Notes</button>
            <button onClick={()=>setTab('pyqs')} className={`px-4 py-2 rounded-lg text-sm font-bold ${tab==='pyqs'?'bg-white text-black':'bg-slate-900 text-slate-400'}`}>PYQs {unit.pyqs.length}</button>
            <button onClick={()=>setTab('analysis')} className={`px-4 py-2 rounded-lg text-sm font-bold ${tab==='analysis'?'bg-white text-black':'bg-slate-900 text-slate-400'}`}>Analysis</button>
          </div>
          {tab==='notes' && <div className="space-y-3"><div className="bg-blue-600 p-6 rounded-2xl"><h2 className="text-xl font-bold">{topic}</h2><p className="text-sm text-blue-100 mt-2">{unit.description}</p></div>{unit.notes.map((n,i)=><div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-sm">{n}</div>)}</div>}
          {tab==='pyqs' && <div className="space-y-3">{unit.pyqs.length===0?<div className="bg-slate-900 border border-slate-800 p-10 rounded-xl text-center text-slate-500">No PYQs yet for this unit - will add verified PYQs</div>:unit.pyqs.map((q:any)=><div key={q.id} className="bg-slate-900 border border-slate-800 p-5 rounded-xl"><p className="text-sm font-medium mb-3">{q.question}</p><div className="space-y-2">{['A','B','C','D'].map(k=><div key={k} className="p-3 bg-slate-800 rounded-xl text-sm"><b>{k}.</b> {q[`option${k}` as any]}</div>)}</div><p className="text-xs text-green-400 mt-3">Ans: {q.correctAns} - {q.explanation}</p></div>)}</div>}
          {tab==='analysis' && <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">{unit.analysis.map((a,i)=><div key={i} className="mb-4"><div className="flex justify-between text-sm mb-1"><span>{a.topic}</span><span>{a.percentage}%</span></div><div className="w-full bg-slate-800 h-2 rounded-full"><div className="bg-blue-500 h-2 rounded-full" style={{width:`${a.percentage}%`}}/></div></div>)}</div>}
        </div>
      </div>
    </div>
  );
}