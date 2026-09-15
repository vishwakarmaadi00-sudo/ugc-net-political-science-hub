import { useState } from 'react';
import { units, PYQ } from '@/data/mockData';
import { ArrowLeft, BookOpen, FileText, BarChart3, CheckCircle2, Circle, RotateCcw } from 'lucide-react';

interface UnitPageProps {
  unitId: number;
  onBack: () => void;
}

type Tab = 'notes' | 'pyqs' | 'analysis';

export default function UnitPage({ unitId, onBack }: UnitPageProps) {
  const unit = units.find((u) => u.id === unitId);
  const [activeTab, setActiveTab] = useState<Tab>('notes');
  const [isRevised, setIsRevised] = useState(false);

  if (!unit) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400">Unit not found</p>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'pyqs', label: 'PYQs', icon: BookOpen },
    { id: 'analysis', label: 'Analysis', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Units
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <span className="text-blue-300 font-bold">{unit.id}</span>
            </div>
            <span className="text-blue-200 text-sm font-medium uppercase tracking-wide">Unit {unit.id}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{unit.name}</h1>
          <p className="text-blue-200 text-sm">{unit.pyqCount} Previous Year Questions</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex gap-1 border-b border-slate-800 -mb-px sticky top-0 bg-slate-950 z-10 pt-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-3 text-sm font-medium border-b-2 transition-all ${
                  isActive
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="py-6 pb-16">
          {activeTab === 'notes' && (
            <NotesTab
              notes={unit.notes}
              isRevised={isRevised}
              onToggleRevised={() => setIsRevised(!isRevised)}
            />
          )}
          {activeTab === 'pyqs' && <PyqsTab pyqs={unit.pyqs} />}
          {activeTab === 'analysis' && <AnalysisTab analysis={unit.analysis} />}
        </div>
      </div>
    </div>
  );
}

function NotesTab({
  notes,
  isRevised,
  onToggleRevised,
}: {
  notes: string[];
  isRevised: boolean;
  onToggleRevised: () => void;
}) {
  return (
    <div>
      <div className="space-y-3 mb-6">
        {notes.map((note, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 text-xs font-bold mt-0.5">
              {idx + 1}
            </span>
            <p className="text-slate-300 text-sm leading-relaxed">{note}</p>
          </div>
        ))}
      </div>
      <button
        onClick={onToggleRevised}
        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
          isRevised
            ? 'bg-green-500/15 border border-green-500/30 text-green-400 hover:bg-green-500/20'
            : 'bg-blue-600 hover:bg-blue-500 text-white border border-blue-500'
        }`}
      >
        {isRevised ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
        {isRevised ? 'Revised — Mark as Not Revised' : 'Mark as Revised'}
        {isRevised && <RotateCcw className="w-4 h-4 ml-1 opacity-60" />}
      </button>
    </div>
  );
}

function PyqsTab({ pyqs }: { pyqs: PYQ[] }) {
  return (
    <div className="space-y-6">
      {pyqs.map((pyq) => (
        <PyqCard key={pyq.id} pyq={pyq} />
      ))}
    </div>
  );
}

function PyqCard({ pyq }: { pyq: PYQ }) {
  const [selected, setSelected] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [checked, setChecked] = useState(false);

  const options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[] = [
    { key: 'A', text: pyq.optionA },
    { key: 'B', text: pyq.optionB },
    { key: 'C', text: pyq.optionC },
    { key: 'D', text: pyq.optionD },
  ];

  const isCorrect = selected === pyq.correctAns;

  const handleCheck = () => {
    if (selected) setChecked(true);
  };

  const handleReset = () => {
    setSelected(null);
    setChecked(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-md px-2 py-1">
          Q{pyq.id}
        </span>
      </div>
      <p className="text-white font-medium text-base mb-4 leading-relaxed">{pyq.question}</p>

      <div className="space-y-2.5 mb-5">
        {options.map((opt) => {
          const isSelected = selected === opt.key;
          const showCorrect = checked && opt.key === pyq.correctAns;
          const showWrong = checked && isSelected && opt.key !== pyq.correctAns;

          return (
            <label
              key={opt.key}
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                showCorrect
                  ? 'border-green-500/50 bg-green-500/10'
                  : showWrong
                  ? 'border-red-500/50 bg-red-500/10'
                  : isSelected
                  ? 'border-blue-500/50 bg-blue-500/10'
                  : 'border-slate-800 bg-slate-800/30 hover:border-slate-700'
              } ${checked ? 'cursor-default' : ''}`}
            >
              <input
                type="radio"
                name={`q-${pyq.id}`}
                checked={isSelected}
                disabled={checked}
                onChange={() => setSelected(opt.key)}
                className="sr-only"
              />
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                  showCorrect
                    ? 'border-green-500 text-green-400 bg-green-500/10'
                    : showWrong
                    ? 'border-red-500 text-red-400 bg-red-500/10'
                    : isSelected
                    ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                    : 'border-slate-600 text-slate-500'
                }`}
              >
                {opt.key}
              </span>
              <span className={`text-sm ${showCorrect ? 'text-green-300' : showWrong ? 'text-red-300' : 'text-slate-300'}`}>
                {opt.text}
              </span>
              {showCorrect && <CheckCircle2 className="w-4 h-4 text-green-400 ml-auto" />}
            </label>
          );
        })}
      </div>

      {!checked ? (
        <button
          onClick={handleCheck}
          disabled={!selected}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Check Answer
        </button>
      ) : (
        <div>
          <div className="rounded-xl p-4 bg-green-500/10 border border-green-500/30 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm">
                {isCorrect ? 'Correct!' : 'Incorrect'} — Answer: {pyq.correctAns}
              </span>
            </div>
            <p className="text-green-200/90 text-sm leading-relaxed">{pyq.explanation}</p>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

function AnalysisTab({ analysis }: { analysis: { topic: string; percentage: number }[] }) {
  const maxPct = Math.max(...analysis.map((a) => a.percentage));
  const sorted = [...analysis].sort((a, b) => b.percentage - a.percentage);

  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-1">Topic Distribution</h3>
      <p className="text-slate-500 text-sm mb-6">Most asked topics in this unit</p>

      <div className="space-y-4">
        {sorted.map((item, idx) => (
          <div key={item.topic}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {idx === 0 && (
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-md px-2 py-0.5">
                    MOST ASKED
                  </span>
                )}
                <span className="text-slate-300 text-sm font-medium">{item.topic}</span>
              </div>
              <span className="text-slate-400 text-sm font-semibold">{item.percentage}%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  idx === 0
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    : 'bg-gradient-to-r from-slate-600 to-slate-500'
                }`}
                style={{ width: `${(item.percentage / maxPct) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {sorted.slice(0, 3).map((item, idx) => (
          <div
            key={item.topic}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center"
          >
            <p className="text-2xl font-bold text-blue-400">{item.percentage}%</p>
            <p className="text-slate-500 text-xs mt-1">{item.topic}</p>
            {idx === 0 && (
              <p className="text-blue-400/60 text-xs mt-1.5">Top Topic</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
