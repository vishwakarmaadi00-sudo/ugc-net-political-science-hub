import { useState } from 'react';
import { ArrowLeft, Book, HelpCircle, BarChart3, CheckCircle, XCircle, Bookmark } from 'lucide-react';
import { Unit } from '../data/mockData';

type Props = {
  unit: Unit;
  onBack: () => void;
};

export default function UnitPage({ unit, onBack }: Props) {
  const [activeTab, setActiveTab] = useState<'notes' | 'pyqs' | 'analysis'>('notes');
  const [selectedTopic, setSelectedTopic] = useState<string>(unit.topics[0] || '');
  const [selectedAns, setSelectedAns] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [revised, setRevised] = useState<Record<number, boolean>>({});

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <p className="text-[11px] text-sky-400 font-bold tracking-widest">UNIT {unit.id}</p>
          <h1 className="font-bold text-sm sm:text-base">{unit.name}</h1>
        </div>
        <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">{unit.pyqCount} PYQs</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left: Topics */}
        <div className="lg:col-span-1">
          <h3 className="text-xs text-slate-400 font-bold tracking-widest mb-3">TOPICS IN THIS UNIT</h3>
          <div className="space-y-2">
            {unit.topics.map((t, i) => (
              <button key={i} onClick={() => setSelectedTopic(t)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm border transition-all ${selectedTopic === t? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'}`}>
                {t}
              </button>
            ))}
          </div>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-xs text-slate-500 mb-1">Current Topic</p>
            <p className="font-semibold text-sm mb-3">{selectedTopic}</p>
            <div className="w-full bg-slate-800 h-2 rounded-full mb-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${unit.mastery}%` }} />
            </div>
            <p className="text-xs text-slate-500">{unit.mastery}% Mastery</p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-3">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-slate-900 border border-slate-800 p-1 rounded-xl w-fit">
            <button onClick={() => setActiveTab('notes')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold ${activeTab === 'notes'? 'bg-white text-black' : 'text-slate-400'}`}>
              <Book className="w-4 h-4" /> Notes
            </button>
            <button onClick={() => setActiveTab('pyqs')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold ${activeTab === 'pyqs'? 'bg-white text-black' : 'text-slate-400'}`}>
              <HelpCircle className="w-4 h-4" /> PYQs ({unit.pyqs.length})
            </button>
            <button onClick={() => setActiveTab('analysis')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold ${activeTab === 'analysis'? 'bg-white text-black' : 'text-slate-400'}`}>
              <BarChart3 className="w-4 h-4" /> Analysis
            </button>
          </div>

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-2">{selectedTopic}</h2>
                <p className="text-blue-100 text-sm">{unit.description}</p>
              </div>
              {unit.notes.map((note, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                  <p className="text-sm text-slate-300 leading-relaxed">{note}</p>
                  <button onClick={() => setRevised({...revised, [idx]:!revised[idx] })}
                    className={`ml-auto flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${revised[idx]? 'bg-green-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    <CheckCircle className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-xs text-yellow-200">
                Note: These are structured sample notes. Real verified UGC NET notes with sources will replace them before launch.
              </div>
            </div>
          )}

          {activeTab === 'pyqs' && (
            <div className="space-y-4">
              {unit.pyqs.map((q) => {
                const ans = selectedAns[q.id];
                const isChecked = checked[q.id];
                const isCorrect = ans === q.correctAns;
                return (
                  <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[11px] px-2 py-1 bg-slate-800 text-slate-400 rounded-full">PYQ {q.year || 2023} {q.isSample? '• SAMPLE' : ''}</span>
                      <button className="text-slate-500 hover:text-blue-400"><Bookmark className="w-4 h-4" /></button>
                    </div>
                    <p className="font-medium mb-4 text-sm leading-relaxed">{q.question}</p>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {[
                        { k: 'A', v: q.optionA },
                        { k: 'B', v: q.optionB },
                        { k: 'C', v: q.optionC },
                        { k: 'D', v: q.optionD },
                      ].map((opt) => (
                        <button key={opt.k} onClick={() =>!isChecked && setSelectedAns({...selectedAns, [q.id]: opt.k })}
                          className={`text-left px-4 py-3 rounded-xl border text-sm flex gap-3 ${ans === opt.k? 'border-blue-500 bg-blue-500/10 text-white' : 'border-slate-800 bg-slate-800/50 text-slate-300 hover:border-slate-700'} ${isChecked && opt.k === q.correctAns? '!border-green-500!bg-green-500/10' : ''} ${isChecked && ans === opt.k &&!isCorrect? '!border-red-500!bg-red-500/10' : ''}`}>
                          <span className="font-bold">{opt.k}.</span> {opt.v}
                        </button>
                      ))}
                    </div>
                    {!isChecked? (
                      <button disabled={!ans} onClick={() => setChecked({...checked, [q.id]: true })}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl py-2.5 text-sm font-semibold">Check Answer</button>
                    ) : (
                      <div className={`rounded-xl p-4 ${isCorrect? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                        <div className="flex gap-2 items-center mb-2">
                          {isCorrect? <CheckCircle className="w-5 h-5 text-green-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
                          <span className={`font-bold text-sm ${isCorrect? 'text-green-300' : 'text-red-300'}`}>{isCorrect? 'Correct!' : `Wrong. Correct is ${q.correctAns}`}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{q.explanation}</p>
                        <button onClick={() => { setSelectedAns({...selectedAns, [q.id]: '' }); setChecked({...checked, [q.id]: false }); }}
                          className="mt-3 text-xs text-slate-400 hover:text-white underline">Reset</button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'analysis' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-bold mb-6">Topic-wise Mastery</h3>
              {unit.analysis.map((a, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between text-sm mb-2"><span className="text-slate-300">{a.topic}</span><span className="text-blue-400">{a.percentage}%</span></div>
                  <div className="w-full bg-slate-800 h-2 rounded-full"><div className="bg-blue-500 h-2 rounded-full" style={{ width: `${a.percentage}%` }} /></div>
                </div>
              ))}
              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <p className="text-sm text-blue-200">💡 <strong>Focus:</strong> {unit.analysis.reduce((prev, curr) => curr.percentage < prev.percentage? curr : prev).topic} needs more revision.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}