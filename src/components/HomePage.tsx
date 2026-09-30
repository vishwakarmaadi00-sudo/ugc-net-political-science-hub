import { ChevronRight, FileText, BookOpen, Award, Target } from 'lucide-react';
import { units } from '../data/mockData';

type Props = {
  onSelectUnit: (id: number) => void;
};

export default function HomePage({ onSelectUnit }: Props) {
  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            UGC NET Political Science Hub
          </h1>
          <p className="text-slate-400">10 Units • PYQs • Mastery Tracker</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <BookOpen className="w-5 h-5 text-blue-400 mb-2" />
            <p className="text-white font-bold text-lg">10</p>
            <p className="text-slate-500 text-xs">Total Units</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <FileText className="w-5 h-5 text-green-400 mb-2" />
            <p className="text-white font-bold text-lg">450+</p>
            <p className="text-slate-500 text-xs">PYQs</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <Target className="w-5 h-5 text-purple-400 mb-2" />
            <p className="text-white font-bold text-lg">0%</p>
            <p className="text-slate-500 text-xs">Avg Mastery</p>
          </div>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {units.map((unit) => (
            <div
              key={unit.id}
              onClick={() => onSelectUnit(unit.id)}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-5 cursor-pointer hover:border-blue-500/50 hover:bg-slate-900/80 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">{unit.id}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </div>

              {/* TITLE */}
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2 group-hover:text-blue-300 transition-colors">
                Unit {unit.id}: {unit.name}
              </h3>

              {/* PYQ COUNT */}
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-5">
                <FileText className="w-4 h-4" />
                <span>{unit.pyqCount} PYQs</span>
              </div>

              {/* PROGRESS */}
              {unit.mastery > 0 ? (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-slate-500">Mastery</span>
                    <span className="text-xs font-semibold text-blue-400">{unit.mastery}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full transition-all"
                      style={{ width: `${unit.mastery}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-600">Not started yet</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}