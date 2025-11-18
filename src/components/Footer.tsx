const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-100/80 py-8 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-500 md:flex-row md:text-left dark:text-slate-400">
        <span className="font-medium text-slate-700 dark:text-slate-200">FishStocks © 2025</span>
        <nav className="flex flex-wrap items-center justify-center gap-4">
          <a className="transition-colors duration-150 hover:text-slate-900 dark:hover:text-slate-100" href="#termos">
            Termos de Uso
          </a>
          <a className="transition-colors duration-150 hover:text-slate-900 dark:hover:text-slate-100" href="#privacidade">
            Política de Privacidade
          </a>
          <a className="transition-colors duration-150 hover:text-slate-900 dark:hover:text-slate-100" href="#contato">
            Contato
          </a>
        </nav>
        <p className="max-w-md text-xs leading-relaxed text-slate-500 md:text-right dark:text-slate-400">
          FishStocks é uma plataforma de organização financeira e análise. Decisões de investimento são responsabilidade exclusiva do usuário.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
