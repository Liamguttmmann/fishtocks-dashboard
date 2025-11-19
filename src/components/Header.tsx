import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
          FishStocks
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
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
        <Link
          to="/login"
          className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-md md:text-sm"
        >
          Entrar
        </Link>
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
