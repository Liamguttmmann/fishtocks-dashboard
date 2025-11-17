const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-xs text-slate-500 md:flex-row md:text-left">
        <span className="font-medium text-slate-700">FishStocks © 2025</span>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-slate-500">
          <a className="transition hover:text-emerald-700" href="#termos">
            Termos de Uso
          </a>
          <a className="transition hover:text-emerald-700" href="#privacidade">
            Política de Privacidade
          </a>
          <a className="transition hover:text-emerald-700" href="#contato">
            Contato
          </a>
        </nav>
        <p className="max-w-md text-[11px] leading-relaxed text-slate-500 md:text-right">
          FishStocks é uma plataforma de organização financeira e análise. Decisões de investimento são responsabilidade exclusiva do usuário.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
