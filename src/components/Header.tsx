import ThemeToggle from './ThemeToggle';

type Theme = 'light' | 'dark';

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
  onEnter: () => void;
};

const Header = ({ theme, onToggleTheme, onEnter }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:py-4">
        <div className="flex flex-1 justify-start">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
        <div className="hidden flex-1 justify-center md:flex" aria-hidden />
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            onClick={onEnter}
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Entrar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
