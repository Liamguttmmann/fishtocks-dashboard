type HeaderProps = {
  onLoginClick: () => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
};

const Header = ({ onLoginClick, onToggleTheme, isDarkMode }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200/60 bg-slate-50/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-2xl">
            FishStocks
          </span>
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-400/70 dark:hover:text-emerald-200"
            aria-label="Alternar tema"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-200 md:flex">
          <a className="transition hover:text-slate-900 dark:hover:text-white" href="#como-funciona">
            Como funciona
          </a>
          <a className="transition hover:text-slate-900 dark:hover:text-white" href="#seguranca">
            Segurança
          </a>
          <a className="transition hover:text-slate-900 dark:hover:text-white" href="#contato">
            Contato
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full border border-mint/70 bg-mint px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-mint/90 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 md:text-sm"
            onClick={onLoginClick}
          >
            Entrar
          </button>
          <button
            type="button"
            className="h-9 w-9 rounded-full bg-slate-200 text-xs font-semibold text-slate-700 shadow-sm transition hover:ring-2 hover:ring-emerald-400/70 dark:bg-slate-700 dark:text-slate-100"
            title="Abrir menu do usuário"
          >
            LG
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <nav className="flex items-center justify-center gap-6 pb-4 text-xs font-medium text-slate-600 dark:text-slate-300">
          <a className="transition hover:text-slate-900 dark:hover:text-white" href="#como-funciona">
            Como funciona
          </a>
          <a className="transition hover:text-slate-900 dark:hover:text-white" href="#seguranca">
            Segurança
          </a>
          <a className="transition hover:text-slate-900 dark:hover:text-white" href="#contato">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
