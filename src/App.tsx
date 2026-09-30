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

      localStorage.setItem(
        'net_login',
        JSON.stringify({
          loggedIn: true,
        })
      );
    } else {
      setError('Please enter email and password.');
    }
  };

  const logout = () => {
    localStorage.removeItem('net_login');

    setIsLogged(false);
    setPage('home');
    setSelectedUnit(null);
    setEmail('');
    setPass('');
  };

  const handleSelectUnit = (unitId: number) => {
    setSelectedUnit(unitId);
    setPage('unit');
  };

  const handleBack = () => {
    setSelectedUnit(null);
    setPage('home');
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="text-center mb-7">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>

              <h1 className="text-2xl font-bold text-white">
                UGC NET Political Science
              </h1>

              <p className="text-slate-400 text-sm mt-2">
                Your preparation hub for UGC NET
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      login();
                    }
                  }}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <button
                onClick={login}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all"
              >
                Login
              </button>

              {error && (
                <p className="text-red-400 text-sm text-center">
                  {error}
                </p>
              )}
            </div>

            <p className="text-slate-600 text-xs text-center mt-6">
              UGC NET Political Science Hub
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'unit' && selectedUnit !== null) {
    return (
      <div>
        <UnitPage
          unitId={selectedUnit}
          onBack={handleBack}
        />

        <div className="fixed bottom-4 right-4">
          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-sm transition-all shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <HomePage onSelectUnit={handleSelectUnit} />

      <div className="fixed bottom-4 right-4">
        <button
          onClick={logout}
          className="px-4 py-2 rounded-lg bg-slate-800/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-sm transition-all shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
