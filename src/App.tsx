import { useEffect, useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoginScreen from './components/LoginScreen';

type Theme = 'light' | 'dark';
type View = 'landing' | 'login';

const STORAGE_KEY = 'fishstocks_theme';

const App = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [view, setView] = useState<View>('landing');
  const [hasResolvedTheme, setHasResolvedTheme] = useState(false);

  const applyTheme = (value: Theme, persist = true) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.classList.toggle('dark', value === 'dark');
    root.style.colorScheme = value;
    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, value);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let initial: Theme = 'light';

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        initial = stored;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        initial = 'dark';
      }
    } catch (error) {
      console.error(error);
    }

    applyTheme(initial, false);
    setTheme(initial);
    setHasResolvedTheme(true);
  }, []);

  useEffect(() => {
    if (!hasResolvedTheme) return;
    applyTheme(theme);
  }, [theme, hasResolvedTheme]);

  const handleToggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Header theme={theme} onToggleTheme={handleToggleTheme} onEnter={() => setView('login')} />
      <main className="flex flex-1 flex-col">
        {view === 'landing' ? <LandingPage /> : <LoginScreen onBack={() => setView('landing')} />}
      </main>
      {view === 'landing' && <Footer />}
    </div>
  );
};

export default App;
