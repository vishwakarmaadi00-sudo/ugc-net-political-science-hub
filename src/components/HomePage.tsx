import { Unit } from '../data/mockData';
type Props = { units: Unit[]; onUnitSelect: (id: number) => void; };
export default function HomePage({ units, onUnitSelect }: Props) {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">
      <h1 className="text-2xl font-bold mb-2">Political Science Hub</h1>
      <p className="text-slate-400 text-sm mb-6">Select a unit to start learning</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
        {units.map((unit) => (
          <button key={unit.id} onClick={() => onUnitSelect(Number(unit.id))} className="text-left bg-slate-900 border border-slate-700 p-5 rounded-2xl hover:border-blue-500">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold mb-3">{unit.id}</div>
            <p className="text-[10px] text-blue-400 font-bold">UNIT {unit.id}</p>
            <h3 className="font-bold mt-1">{unit.name}</h3>
            <p className="text-xs text-slate-400 mt-1">{unit.pyqCount} PYQs</p>
            <div className="mt-3 w-full bg-slate-800 h-1.5 rounded-full"><div className="bg-white h-1.5 rounded-full" style={{width: `${unit.mastery}%`}} /></div>
          </button>
        ))}
      </div>
    </div>
  );
}