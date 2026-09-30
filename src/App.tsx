import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import UnitPage from './components/UnitPage';
import Admin from './pages/Admin';
import { units as mockUnits } from './data/mockData';
import { supabase } from './lib/supabase';

function App() {
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);
  const [units, setUnits] = useState(mockUnits);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if URL is /admin
    if (window.location.pathname === '/admin') {
      setIsAdmin(true);
    }
    // Fetch units from Supabase (real data)
    const fetchUnits = async () => {
      const { data, error } = await supabase.from('units').select('*').order('id');
      if (!error && data && data.length > 0) {
        setUnits(data as any);
      }
    };
    fetchUnits();
  }, []);

  const handleUnitSelect = (id: any) => {
    const numId = Number(id);
    console.log("Selected unit:", numId);
    setSelectedUnitId(numId);
  };

  const handleBack = () => {
    setSelectedUnitId(null);
  };

  if (isAdmin) {
    return <Admin />;
  }

  if (selectedUnitId !== null) {
    const unit = units.find(u => u.id === selectedUnitId);
    console.log("Found unit:", unit);
    if (!unit) {
      return (
        <div className="min-h-screen bg-black text-white p-10">
          <p>Unit {selectedUnitId} not found - available: {units.map(u=>u.id).join(',')}</p>
          <button onClick={handleBack} className="mt-4 bg-white text-black px-4 py-2 rounded">Back</button>
        </div>
      );
    }
    return <UnitPage unit={unit} onBack={handleBack} />;
  }

  return <HomePage units={units} onUnitSelect={handleUnitSelect} />;
}

export default App;
