import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import UnitPage from './components/UnitPage';

type Page = 'home' | 'unit';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [page, setPage] = useState<Page>('home');
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedLogin = localStorage.getItem('net_login');
    if (savedLogin) {
      setIsLogged(true);
    }
  }, []);

  const login = () => {
    if (email.trim() && pass.trim()) {
      setIsLogged(true);
      setError('');
      localStorage.setItem('net_login', JSON.stringify({ loggedIn: true }));
    } else {
      setError('Please enter email and password.');
    }
  };

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem('net_login');
    setEmail('');
    setPass('');
  };

  const handleSelectUnit = (id: number) => {
    setSelectedUnit(id);
    setPage('unit');
  };

  const handleBack = () => {
    setPage('home');
    setSelectedUnit(null);
  };

  if (!isLogged) {
    return (
      <div style={{ minHeight: '100vh', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
        <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '24px', padding: '32px', width: '100%', maxWidth: '400px' }}>
          <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Welcome Back</h1>
          <p style={{ color: '#94a3b8', marginBottom: '24px' }}>UGC NET Political Science Hub</p>
          
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', background: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '12px', color: 'white', marginBottom: '12px' }}
          />
          <input
            placeholder="Password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={{ width: '100%', background: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '12px', color: 'white', marginBottom: '12px' }}
          />
          
          {error && <p style={{ color: '#f87171', fontSize: '14px', marginBottom: '12px' }}>{error}</p>}
          
          <button
            onClick={login}
            style={{ width: '100%', background: '#3b82f6', color: 'white', borderRadius: '12px', padding: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}
          >
            Login
          </button>
          <p style={{ color: '#475569', fontSize: '12px', marginTop: '12px', textAlign: 'center' }}>Enter any email & password to login</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {page === 'home' && <HomePage onSelectUnit={handleSelectUnit} />}
      {page === 'unit' && selectedUnit && <UnitPage unitId={selectedUnit} onBack={handleBack} onLogout={logout} />}
    </div>
  );
}