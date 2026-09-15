import { useState } from 'react';
import HomePage from '@/components/HomePage';
import UnitPage from '@/components/UnitPage';

function App() {
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);

  if (selectedUnitId !== null) {
    return <UnitPage unitId={selectedUnitId} onBack={() => setSelectedUnitId(null)} />;
  }

  return <HomePage onSelectUnit={setSelectedUnitId} />;
}

export default App;
