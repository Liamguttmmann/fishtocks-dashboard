const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-semibold tracking-tight text-white md:text-2xl">
          FishStocks
        </span>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          <a className="transition hover:text-white" href="#como-funciona">
            Como funciona
          </a>
          <a className="transition hover:text-white" href="#seguranca">
            Segurança
          </a>
          <a className="transition hover:text-white" href="#contato">
            Contato
          </a>
        </nav>
        <a
          className="rounded-full border border-mint/70 bg-mint px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-mint/90 hover:shadow-md md:text-sm"
          href="#contato"
        >
          Entrar
        </a>
      </div>
      <div className="md:hidden">
        <nav className="flex items-center justify-center gap-6 pb-4 text-xs font-medium text-slate-300">
          <a className="transition hover:text-white" href="#como-funciona">
            Como funciona
          </a>
          <a className="transition hover:text-white" href="#seguranca">
            Segurança
          </a>
          <a className="transition hover:text-white" href="#contato">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
