const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-xs text-slate-400 md:flex-row md:text-left">
        <span className="font-medium text-slate-300">FishStocks © 2025</span>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
          <a className="transition hover:text-mint" href="#termos">
            Termos de Uso
          </a>
          <a className="transition hover:text-mint" href="#privacidade">
            Política de Privacidade
          </a>
          <a className="transition hover:text-mint" href="#contato">
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
