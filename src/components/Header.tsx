const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
          FishStocks
        </span>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a className="transition hover:text-slate-900" href="#como-funciona">
            Como funciona
          </a>
          <a className="transition hover:text-slate-900" href="#seguranca">
            Segurança
          </a>
          <a className="transition hover:text-slate-900" href="#contato">
            Contato
          </a>
        </nav>
        <a
          className="rounded-full border border-emerald-600/30 bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-md md:text-sm"
          href="#login"
        >
          Entrar
        </a>
      </div>
      <div className="md:hidden">
        <nav className="flex items-center justify-center gap-6 pb-4 text-xs font-medium text-slate-600">
          <a className="transition hover:text-slate-900" href="#como-funciona">
            Como funciona
          </a>
          <a className="transition hover:text-slate-900" href="#seguranca">
            Segurança
          </a>
          <a className="transition hover:text-slate-900" href="#contato">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
