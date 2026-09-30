import { useState } from 'react';
import { BookOpen, FileText, Target, Award, Search, GraduationCap, Library, ClipboardCheck, Layers, Bookmark, Newspaper, BarChart3, X } from 'lucide-react';
import { units } from '../data/mockData';

type Props = {
  onSelectUnit: (id: number) => void;
};

export default function HomePage({ onSelectUnit }: Props) {
  const [search, setSearch] = useState('');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const filteredUnits = units.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPyqs = units.reduce((acc, u) => acc + u.pyqCount, 0);
  const started = units.filter(u => u.mastery > 0).length;
  const avgMastery = Math.round(units.reduce((acc, u) => acc + u.mastery, 0) / units.length);

  const toolkit = [
    { id: 'paper1', title: 'Paper 1', desc: 'Teaching & Research Aptitude', icon: GraduationCap, color: 'bg-blue-500', status: 'coming' },
    { id: 'paper2', title: 'Paper 2', desc: 'Political Science - 10 Units', icon: Library, color: 'bg-violet-500', status: 'active' },
    { id: 'practice', title: 'Practice Tests', desc: 'Topic & Unit wise tests', icon: ClipboardCheck, color: 'bg-emerald-500', status: 'coming' },
    { id: 'mock', title: 'Mock Tests', desc: 'Full length Paper 1 + 2', icon: Layers, color: 'bg-orange-500', status: 'coming' },
    { id: 'pyqs', title: 'PYQs', desc: `${totalPyqs}+ Verified Questions`, icon: FileText, color: 'bg-pink-500', status: 'coming' },
    { id: 'revision', title: 'Revision', desc: 'Bookmarks & Weak topics', icon: Bookmark, color: 'bg-yellow-500', status: 'coming' },
    { id: 'current', title: 'Current Affairs', desc: 'Polity & IR relevant', icon: Newspaper, color: 'bg-red-500', status: 'coming' },
    { id: 'progress', title: 'My Progress', desc: 'Analytics & Insights', icon: BarChart3, color: 'bg-cyan-500', status: 'coming' },
  ];

  const handleToolkitClick = (item: any) => {
    if (item.id === 'paper2') {
      document.getElementById('political-science-units')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveModal(item.title);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 opacity-90">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-wide">UGC NET<br/>Political Science</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">Your Preparation Hub</h1>
          <p className="text-blue-100 max-w-2xl mb-8 text-base sm:text-lg">
            Study unit-wise, practice previous year questions, revise important concepts and track your preparation. Learn → Practice → Test → Analyse → Revise.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3">
              <BookOpen className="w-6 h-6" /> <div><p className="font-bold text-xl">10</p><p className="text-xs opacity-80">Units</p></div>
            </div>
            <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3">
              <FileText className="w-6 h-6" /> <div><p className="font-bold text-xl">{totalPyqs}</p><p className="text-xs opacity-80">PYQs</p></div>
            </div>
            <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3">
              <Target className="w-6 h-6" /> <div><p className="font-bold text-xl">{started}</p><p className="text-xs opacity-80">Started</p></div>
            </div>
            <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3">
              <Award className="w-6 h-6" /> <div><p className="font-bold text-xl">{avgMastery}%</p><p className="text-xs opacity-80">Avg. Mastery</p></div>
            </div>
          </div>

          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Political Science units..."
              className="w-full bg-white/15 backdrop-blur border border-white/20 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20"
            />
          </div>
        </div>
      </div>

      {/* Toolkit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl font-bold mb-2">Your Study Toolkit</h2>
        <p className="text-slate-400 text-sm mb-6">Everything for UGC NET in one place. Building feature by feature - no fake buttons.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {toolkit.map((item) => (
            <div key={item.id} onClick={() => handleToolkitClick(item)}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 cursor-pointer hover:border-slate-700 hover:bg-slate-800/80 transition-all group">
              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-blue-400">{item.title}</h3>
              <p className="text-xs text-slate-400">{item.desc}</p>
              {item.status === 'coming' && <span className="inline-block mt-2 text-[10px] px-2 py-1 bg-slate-800 text-slate-400 rounded-full">Coming Soon</span>}
              {item.status === 'active' && <span className="inline-block mt-2 text-[10px] px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">Active</span>}
            </div>
          ))}
        </div>

        {/* Units */}
        <div id="political-science-units">
          <h2 className="text-sm text-sky-400 font-semibold tracking-widest mb-1">PAPER 2</h2>
          <h3 className="text-2xl font-bold mb-2">Political Science</h3>
          <p className="text-slate-400 text-sm mb-6">Select a unit to start learning. Verified syllabus structure coming next.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUnits.map((unit) => (
              <div key={unit.id} onClick={() => onSelectUnit(unit.id)}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-5 cursor-pointer hover:border-blue-500/50 hover:bg-slate-800/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center font-bold text-blue-400">{unit.id}</div>
                  <span className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">›</span>
                </div>
                <p className="text-[11px] text-sky-400 font-bold tracking-widest mb-1">UNIT {unit.id}</p>
                <h4 className="font-semibold mb-2 group-hover:text-blue-300">{unit.name}</h4>
                <p className="text-xs text-slate-400 mb-4">{unit.pyqCount} Previous Year Questions</p>
                {unit.mastery > 0? (
                  <div><div className="flex justify-between text-xs mb-1"><span className="text-slate-500">Mastery</span><span className="text-blue-400">{unit.mastery}%</span></div><div className="w-full bg-slate-800 h-1.5 rounded-full"><div className="bg-blue-500 h-1.5 rounded-full" style={{width: `${unit.mastery}%`}} /></div></div>
                ) : <p className="text-xs text-slate-600">Not started</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold">{activeModal}</h3>
              <button onClick={() => setActiveModal(null)} className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center"><X className="w-4 h-4" /></button>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              We are building this properly. This will have real functionality - not a fake button.
              <br/><br/>
              <strong className="text-white">Next up:</strong> Paper 1, Practice Engine, Mock Test Engine with Timer & Analysis, and Supabase Auth for your personal progress.
            </p>
            <button onClick={() => setActiveModal(null)} className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold">Got it</button>
          </div>
        </div>
      )}
    </div>
  );
}
