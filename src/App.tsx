```tsx
import { useState, useMemo } from 'react';
import { units } from '@/data/mockData';
import {
  Search,
  BookOpen,
  TrendingUp,
  ChevronRight,
  FileText,
  Target,
  GraduationCap,
} from 'lucide-react';

interface HomePageProps {
  onSelectUnit: (id: number) => void;
}

export default function HomePage({ onSelectUnit }: HomePageProps) {
  const [search, setSearch] = useState('');

  const filteredUnits = useMemo(() => {
    const q = search.toLowerCase().trim();

    if (!q) return units;

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

  const avgMastery = startedUnits
    ? Math.round(
        units
          .filter((unit) => unit.mastery > 0)
          .reduce((sum, unit) => sum + unit.mastery, 0) /
          startedUnits
      )
    : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO HEADER */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-10 sm:pt-14 sm:pb-12">

          {/* BRAND */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <GraduationCap className="w-6 h-6 text-blue-200" />
            </div>

            <div>
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                UGC NET
              </p>

              <p className="text-white font-semibold">
                Political Science
              </p>
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Your Preparation Hub
          </h1>

          <p className="text-blue-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Study unit-wise, practice previous year questions,
            revise important concepts and track your preparation.
          </p>

          {/* QUICK STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">

            <div className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
              <BookOpen className="w-5 h-5 text-blue-200 mb-2" />

              <p className="text-2xl font-bold">
                {units.length}
              </p>

              <p className="text-blue-200 text-xs">
                Units
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
              <FileText className="w-5 h-5 text-blue-200 mb-2" />

              <p className="text-2xl font-bold">
                {totalPYQs}
              </p>

              <p className="text-blue-200 text-xs">
                PYQs
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
              <Target className="w-5 h-5 text-blue-200 mb-2" />

              <p className="text-2xl font-bold">
                {startedUnits}
              </p>

              <p className="text-blue-200 text-xs">
                Started
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 text-blue-200 mb-2" />

              <p className="text-2xl font-bold">
                {avgMastery}%
              </p>

              <p className="text-blue-200 text-xs">
                Avg. Mastery
              </p>
            </div>

          </div>

          {/* SEARCH */}
          <div className="relative max-w-2xl mt-8">

            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Political Science units..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/50 transition-all"
            />

          </div>

        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">

          <div>
            <p className="text-blue-400 text-sm font-semibold mb-1">
              PAPER 2
            </p>

            <h2 className="text-2xl font-bold text-white">
              Political Science
            </h2>

            <p className="text-slate-500 text-sm mt-1">
              Select a unit to start learning.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            {filteredUnits.length} of {units.length} units
          </div>

        </div>

        {/* UNIT CARDS */}
        {filteredUnits.length === 0 ? (

          <div className="text-center py-20 border border-slate-800 rounded-2xl bg-slate-900/50">
            <Search className="w-8 h-8 text-slate-600 mx-auto mb-3" />

            <p className="text-slate-400 text-lg">
              No units found
            </p>

            <p className="text-slate-600 text-sm mt-1">
              Try a different search term.
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

                {/* CARD TOP */}
                <div className="flex items-start justify-between mb-5">

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center">

                    <span className="text-blue-300 font-bold text-lg">
                      {unit.id}
                    </span>

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

                  <span>
                    {unit.pyqCount} PYQs
                  </span>

                </div>

                {/* PROGRESS */}
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

                  <div className="flex items-center gap-2">

                    <div className="h-1.5 flex-1 bg-slate-800 rounded-full" />

                    <span className="text-slate-600 text-xs">
                      Not started
                    </span>

                  </div>

                )}

              </button>

            ))}

          </div>

        )}

      </main>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-center">

        <div className="border-t border-slate-900 pt-6">

          <p className="text-slate-600 text-sm">
            UGC NET Political Science Hub
          </p>

          <p className="text-slate-700 text-xs mt-1">
            Learn • Practice
```
