import { useState } from 'react';
import { Unit } from '../data/mockData';
import { BookOpen, FileText, Target, Award, Search } from 'lucide-react';

type Props = { units: Unit[]; onUnitSelect: (id: number) => void; };

export default function HomePage({ units, onUnitSelect }: Props) {
  const [search, setSearch] = useState("");
  const filtered = units.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
  const totalPyqs = units.reduce((a,b)=>a+b.pyqCount,0);
  const avgMastery = Math.round(units.reduce((a,b)=>a+b.mastery,0)/units.length);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 md:p-8">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Your Preparation Hub</h1>
        <p className="text-blue-100 max-w-2xl mb-8 text-base opacity-80">Study unit-wise, practice previous year questions, revise important concepts and track your preparation.</p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3"><BookOpen className="w-6 h-6" /><div><p className="font-bold text-xl">10</p><p className="text-xs opacity-80">Units</p></div></div>
          <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3"><FileText className="w-6 h-6" /><div><p className="font-bold text-xl">{totalPyqs}</p><p className="text-xs opacity-80">PYQs</p></div></div>
          <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3"><Target className="w-6 h-6" /><div><p className="font-bold text-xl">0</p><p className="text-xs opacity-80">Started</p></div></div>
          <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3"><Award className="w-6 h-6" /><div><p className="font-bold text-xl">{avgMastery}%</p><p className="text-xs opacity-80">Avg Mastery</p></div></div>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Political Science units..." className="w-full bg-white/15 backdrop-blur border border-white/20 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/60" />
        </div>

        {/* Paper Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl opacity-60"><p className="text-xs text-slate-400">Paper 1</p><p className="font-bold">Teaching & Research Aptitude</p><span className="text-[10px] bg-slate-800 px-2 py-1 rounded-full mt-2 inline-block">Coming Soon</span></div>
          <div className="bg-slate-900 border border-blue-500/40 p-5 rounded-2xl"><p className="text-xs text-blue-400">Paper 2</p><p className="font-bold">Political Science - 10 Units</p><span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full mt-2 inline-block">Active</span></div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl opacity-60"><p className="text-xs text-slate-400">Practice Tests</p><p className="font-bold">Topic & Unit wise tests</p><span className="text-[10px] bg-slate-800 px-2 py-1 rounded-full mt-2 inline-block">Coming Soon</span></div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl opacity-60"><p className="text-xs text-slate-400">Mock Tests</p><p className="font-bold">Full length Paper 1 + 2</p><span className="text-[10px] bg-slate-800 px-2 py-1 rounded-full mt-2 inline-block">Coming Soon</span></div>
        </div>

        {/* Units Grid */}
        <div>
          <h2 className="text-xs tracking-widest text-slate-500 font-bold mb-1">PAPER 2</h2>
          <h3 className="text-2xl font-bold mb-6">Political Science</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filtered.map((unit) => (
              <button key={unit.id} onClick={() => onUnitSelect(Number(unit.id))} className="text-left bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-5 rounded-2xl hover:border-blue-500 hover:scale-[1.02] transition-all">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm mb-3">{unit.id}</div>
                <p className="text-[10px] text-blue-400 font-bold tracking-widest">UNIT {unit.id}</p>
                <h3 className="font-bold text-[15px] leading-tight mt-1">{unit.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{unit.pyqCount} Previous Year Questions</p>
                <div className="mt-4"><div className="flex justify-between text-[11px] text-slate-400 mb-1"><span>Mastery</span><span>{unit.mastery}%</span></div><div className="w-full bg-slate-800 h-1.5 rounded-full"><div className="bg-white h-1.5 rounded-full" style={{width: `${unit.mastery}%`}} /></div></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}