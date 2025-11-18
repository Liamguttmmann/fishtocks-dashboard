import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    root.style.colorScheme = isDark ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-slate-50/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
        <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-2xl">FishStocks</span>
        <nav className="hidden items-center gap-3 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="rounded-full border border-slate-300 bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 transition-all duration-150 ease-out hover:translate-y-[1px] hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-slate-900/10 bg-mint px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
            href="#contato"
          >
            Entrar
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M12 3v2" />
                <path d="M12 19v2" />
                <path d="M5.64 5.64l1.41 1.41" />
                <path d="M16.95 16.95l1.41 1.41" />
                <path d="M3 12h2" />
                <path d="M19 12h2" />
                <path d="M5.64 18.36l1.41-1.41" />
                <path d="M16.95 7.05l1.41-1.41" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="border-t border-slate-200 px-6 py-4 md:hidden dark:border-slate-800">
        <div className="flex flex-col items-center gap-3">
          <nav className="flex w-full items-center justify-center gap-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="flex-1 rounded-full border border-slate-300 bg-slate-100 px-4 py-1.5 text-center text-sm font-medium text-slate-700 transition-all duration-150 ease-out hover:translate-y-[1px] hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="inline-flex w-full items-center justify-center rounded-full bg-mint px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lg"
            href="#contato"
          >
            Entrar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
