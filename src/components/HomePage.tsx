```tsx
import { useMemo, useState } from 'react';
import {
  Search,
  BookOpen,
  TrendingUp,
  ChevronRight,
  FileText,
  Target,
  GraduationCap,
  ClipboardCheck,
  Clock3,
  Bookmark,
  Newspaper,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { units } from '@/data/mockData';

interface HomePageProps {
  onSelectUnit: (id: number) => void;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  badge,
}: FeatureCardProps) {
  return (
    <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all duration-300">
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wide text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full">
          {badge}
        </span>
      )}

      <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-white font-semibold text-base mb-1">
        {title}
      </h3>

      <p className="text-slate-500 text-sm leading-5">
        {description}
      </p>
    </div>
  );
}

export default function HomePage({ onSelectUnit }: HomePageProps) {
  const [search, setSearch] = useState('');

  const filteredUnits = useMemo(() => {
    const q = search.toLowerCase().trim();

    if (!q) {
      return units;
    }

    return units.filter(
      (unit) =>
        unit.name.toLowerCase().includes(q) ||
        `unit ${unit.id}`.includes(q)
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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-10 sm:pt-12 sm:pb-12">
          {/* TOP BAR */}
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center backdrop-blur-sm">
                <GraduationCap className="w-6 h-6 text-blue-200" />
              </div>

              <div>
                <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase">
                  UGC NET
                </p>

                <p className="text-white text-sm font-medium">
                  Political Science Hub
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-blue-200 text-sm">
              <Sparkles className="w-4 h-4" />
              Learn • Practice • Revise
            </div>
          </div>

          {/* HERO TEXT */}
          <div className="max-w-3xl">
            <p className="text-blue-300 text-sm font-semibold mb-2">
              YOUR UGC NET PREPARATION SPACE
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Prepare smarter for
              <span className="text-blue-300"> UGC NET Political Science</span>
            </h1>

            <p className="text-blue-100/80 text-base sm:text-lg leading-7 max-w-2xl">
              Study the syllabus unit-wise, practice questions,
              revise concepts and gradually build your preparation
              from one place.
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative max-w-3xl mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-200/70" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Political Science units..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all"
            />
          </div>

          {/* QUICK STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
            <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-blue-200" />

                <div>
                  <p className="text-xl font-bold">
                    {units.length}
                  </p>

                  <p className="text-blue-200 text-xs">
                    Political Science Units
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-200" />

                <div>
                  <p className="text-xl font-bold">
                    {totalPYQs}
                  </p>

                  <p className="text-blue-200 text-xs">
                    Question Bank
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-200" />

                <div>
                  <p className="text-xl font-bold">
                    {startedUnits}
                  </p>

                  <p className="text-blue-200 text-xs">
                    Units Started
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-blue-200" />

                <div>
                  <p className="text-xl font-bold">
                    {avgMastery}%
                  </p>

                  <p className="text-blue-200 text-xs">
                    Current Mastery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* PREPARATION AREAS */}
        <section className="mb-10">
          <div className="mb-5">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-1">
              Preparation
            </p>

            <h2 className="text-xl sm:text-2xl font-bold">
              Your Study Toolkit
            </h2>

            <p className="text-slate-500 text-sm mt-1">
              Everything will gradually be brought together in one
              preparation platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={<BookOpen className="w-5 h-5 text-blue-300" />}
              title="Paper 1"
              description="Teaching aptitude, research aptitude, reasoning, ICT and other Paper 1 areas."
              badge="Coming soon"
            />

            <FeatureCard
              icon={<GraduationCap className="w-5 h-5 text-blue-300" />}
              title="Paper 2"
              description="Political Science syllabus organised unit-wise for focused preparation."
            />

            <FeatureCard
              icon={<ClipboardCheck className="w-5 h-5 text-blue-300" />}
              title="Practice Tests"
              description="Topic-wise and unit-wise practice will be added here."
              badge="Coming soon"
            />

            <FeatureCard
              icon={<Clock3 className="w-5 h-5 text-blue-300" />}
              title="Mock Tests"
              description="Full-length examination-style tests with results and analysis."
              badge="Coming soon"
            />

            <FeatureCard
              icon={<FileText className="w-5 h-5 text-blue-300" />}
              title="PYQs"
              description="Previous year questions organised by unit, topic and examination."
              badge="Coming soon"
            />

            <FeatureCard
              icon={<Bookmark className="w-5 h-5 text-blue-300" />}
              title="Revision"
              description="Save important concepts and create a focused revision list."
              badge="Coming soon"
            />

            <FeatureCard
              icon={<Newspaper className="w-5 h-5 text-blue-300" />}
              title="Current Affairs"
              description="Relevant political, national and international developments."
              badge="Coming soon"
            />

            <FeatureCard
              icon={<BarChart3 className="w-5 h-5 text-blue-300" />}
              title="My Progress"
              description="Track preparation, test performance and unit-wise progress."
              badge="Coming soon"
            />
          </div>
        </section>

        {/* PAPER 2 */}
        <section>
          <div className="mb-6">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-1">
              Paper 2
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Political Science
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                  Select a unit to study notes, practice questions and
                  view topic analysis.
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
                    {unit.pyqCount} questions in current dataset
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
        </section>
      </main>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 py-10 text-center">
        <div className="border-t border-slate-900 pt-8">
          <p className="text-slate-500 text-sm font-medium">
            UGC NET Political Science Hub
          </p>

          <p className="text-slate-700 text-xs mt-2">
            A focused space for learning, practice and revision.
          </p>
        </div>
      </footer>
    </div>
  );
}
```
