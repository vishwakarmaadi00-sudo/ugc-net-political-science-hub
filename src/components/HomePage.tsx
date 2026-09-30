import { useMemo, useState } from 'react';
import {
  Search,
  BookOpen,
  TrendingUp,
  ChevronRight,
  FileText,
  Target,
  GraduationCap,
} from 'lucide-react';
import { units } from '@/data/mockData';

interface HomePageProps {
  onSelectUnit: (id: number) => void;
}

export default function HomePage({ onSelectUnit }: HomePageProps) {
  const [search, setSearch] = useState('');

  const filteredUnits = useMemo(() => {
    const q = search.toLowerCase().trim();

    if (!q) {
      return units;
    }

    return units.filter((unit) =>
      unit.name.toLowerCase().includes(q)
    );
  }, [search]);

  const totalPYQs = units.reduce(
    (sum, unit) => sum + unit.pyqCount,
    0
  );

  const startedUnits = units.filter(
    (unit) => unit.mastery > 0
  ).length;

  const masteryUnits = units.filter(
    (unit) => unit.mastery > 0
  );

  const avgMastery =
    masteryUnits.length > 0
      ? Math.round(
          masteryUnits.reduce(
            (sum, unit) => sum + unit.mastery,
            0
          ) / masteryUnits.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* HEADER */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-10 sm:pt-14 sm:pb-12">
          {/* BRAND */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center backdrop-blur-sm">
              <GraduationCap className="w-6 h-6 text-blue-200" />
            </div>

            <div>
              <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase">
                UGC NET
              </p>

              <p className="text-white text-sm font-medium">
                Political Science
              </p>
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Your Preparation Hub
          </h1>

          <p className="text-blue-200 text-base sm:text-lg max-w-2xl mb-8">
            Study unit-wise, practice previous year questions,
            revise important concepts and track your preparation.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-200" />
                </div>

                <div>
                  <p className="text-xl font-bold text-white">
                    {units.length}
                  </p>

                  <p className="text-blue-200 text-xs">
                    Units
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-200" />
                </div>

                <div>
                  <p className="text-xl font-bold text-white">
                    {totalPYQs}
                  </p>

                  <p className="text-blue-200 text-xs">
                    PYQs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-200" />
                </div>

                <div>
                  <p className="text-xl font-bold text-white">
                    {startedUnits}
                  </p>

                  <p className="text-blue-200 text-xs">
                    Started
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-200" />
                </div>

                <div>
                  <p className="text-xl font-bold text-white">
                    {avgMastery}%
                  </p>

                  <p className="text-blue-200 text-xs">
                    Avg. Mastery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SEARCH */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-200/70" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Political Science units..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-1">
            Paper 2
          </p>

          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Political Science
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                Select a unit to start learning.
              </p>
            </div>

            {search && (
              <p className="text-slate-500 text-sm">
                {filteredUnits.length} result
                {filteredUnits.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>

        {filteredUnits.length === 0 ? (
          <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-2xl">
            <Search className="w-10 h-10 text-slate-700 mx-auto mb-4" />

            <p className="text-slate-300 text-lg font-medium">
              No units found
            </p>

            <p className="text-slate-500 text-sm mt-2">
              Try searching with a different keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredUnits.map((unit) => (
              <button
                key={unit.id}
                onClick={() => onSelectUnit(unit.id)}
                className="group text-left bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-300 font-bold text-lg">
                      {unit.id}
                    </span>
                  </div>

                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wide mb-1">
                  Unit {unit.id}
                </p>

                <h3 className="text-white font-semibold text-base sm:text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  {unit.name}
                </h3>

                <p className="text-slate-400 text-sm mb-5">
                  {unit.pyqCount} Previous Year Questions
                </p>

                {unit.mastery > 0 ? (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-slate-500">
                        Mastery
                      </span>

                      <span className="text-xs font-semibold text-blue-400">
                        {unit.mastery}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                        style={{
                          width: `${unit.mastery}%`,
                        }}
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

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-center">
        <div className="border-t border-slate-900 pt-8">
          <p className="text-slate-500 text-sm font-medium">
            UGC NET Political Science Hub
          </p>

          <p className="text-slate-700 text-xs mt-2">
            Learn • Practice • Revise • Improve
          </p>
        </div>
      </footer>
    </div>
  );
}
