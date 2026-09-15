import { useState, useMemo } from 'react';
import { units } from '@/data/mockData';
import { Search, BookOpen, TrendingUp, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onSelectUnit: (id: number) => void;
}

export default function HomePage({ onSelectUnit }: HomePageProps) {
  const [search, setSearch] = useState('');

  const filteredUnits = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return units;
    return units.filter((u) => u.name.toLowerCase().includes(q));
  }, [search]);

  const totalPYQs = units.reduce((sum, u) => sum + u.pyqCount, 0);
  const avgMastery = Math.round(
    units.filter((u) => u.mastery > 0).reduce((sum, u) => sum + u.mastery, 0) /
      units.filter((u) => u.mastery > 0).length
  );

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10 sm:pt-16 sm:pb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center backdrop-blur-sm">
              <BookOpen className="w-6 h-6 text-blue-300" />
            </div>
            <span className="text-blue-200 text-sm font-medium tracking-wide uppercase">UGC NET Preparation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Exam Mastery Hub
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl mb-8">
            UGC NET Political Science — Previous Year Questions, Notes & Analysis
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{units.length}</p>
                <p className="text-blue-300 text-xs">Units</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                <span className="text-blue-300 text-sm font-bold">PYQ</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{totalPYQs}</p>
                <p className="text-blue-300 text-xs">Questions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{avgMastery}%</p>
                <p className="text-blue-300 text-xs">Avg Mastery</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search units..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all"
            />
          </div>
        </div>
      </header>

      {/* Cards Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {filteredUnits.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No units found matching "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredUnits.map((unit) => (
              <button
                key={unit.id}
                onClick={() => onSelectUnit(unit.id)}
                className="group text-left bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-300 font-bold text-lg">{unit.id}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  {unit.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{unit.pyqCount} PYQs</p>
                {unit.mastery > 0 ? (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-slate-500">Mastery</span>
                      <span className="text-xs font-semibold text-blue-400">{unit.mastery}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${unit.mastery}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-slate-600 text-xs">
                    <div className="h-1.5 flex-1 bg-slate-800 rounded-full" />
                    <span>Not started</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </main>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-center">
        <p className="text-slate-600 text-sm">Exam Mastery Hub — UGC NET Political Science</p>
      </footer>
    </div>
  );
}
