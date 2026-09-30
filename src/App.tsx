import { useState, useEffect } from 'react';
import HomePage from '../components/HomePage';
import UnitPage from '../components/UnitPage';
import Admin from './Admin';
import { units as mockUnits } from '../data/mockData';
import { supabase } from '../lib/supabase';

function App() {
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);
  const [units, setUnits] = useState(mockUnits);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/admin') setIsAdmin(true);
    const fetchUnits = async () => {
      const { data } = await supabase.from('units').select('*').order('id');
      if (data && data.length > 0) setUnits(data as any);
    };
    fetchUnits();
  }, []);

  if (isAdmin) return <Admin />;
  if (selectedUnitId !== null) {
    const unit = units.find(u => u.id === selectedUnitId);
    return unit ? <UnitPage unit={unit} onBack={()=>setSelectedUnitId(null)} /> : <div className="p-10">Not found <button onClick={()=>setSelectedUnitId(null)} className="bg-black text-white px-4 py-2 rounded ml-4">Back</button></div>;
  }
  return <HomePage units={units} onUnitSelect={setSelectedUnitId} />;
}
export default App;
