const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pb-20 pt-28 transition-colors dark:from-slate-950 dark:via-slate-950 dark:to-navy"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">FishStocks</h1>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl dark:text-slate-300">
            Veja sua vida financeira com clareza e propósito.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Organize seus investimentos, acompanhe ativos em tempo real e receba análises feitas para o seu perfil — tudo em um único
            painel, simples e inteligente.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center rounded-full bg-mint px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-mint/90 sm:w-auto"
            >
              Começar agora
            </a>
            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:border-mint hover:text-mint sm:w-auto dark:border-slate-500 dark:text-slate-100"
            >
              Ver como funciona
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800/60 dark:bg-slate-900/70">
            <div className="absolute -right-6 -top-6 rounded-full border border-mint/60 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint shadow dark:bg-slate-900/80">
              Dados em tempo real
            </div>
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Resumo da sua carteira</h2>
            <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Patrimônio total: R$ 52.430,12</p>
            <div className="mt-6 h-32 rounded-xl bg-gradient-to-br from-mint/40 via-mint/10 to-transparent p-4">
              <div className="flex h-full items-end gap-2">
                <div className="h-6 w-full rounded-t bg-mint/60" />
                <div className="h-12 w-full rounded-t bg-mint/70" />
                <div className="h-16 w-full rounded-t bg-mint/80" />
                <div className="h-24 w-full rounded-t bg-mint" />
                <div className="h-20 w-full rounded-t bg-mint/90" />
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 transition-colors dark:border-slate-800/80 dark:bg-slate-900/90">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Score da carteira</p>
                <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">83/100</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Equilíbrio saudável entre risco e retorno</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 transition-colors dark:border-slate-800/80 dark:bg-slate-900/90">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Renda passiva mensal</p>
                <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">R$ 327,40</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Baseada em dividendos e cupons</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-mint/40 bg-mint/10 px-4 py-3 text-xs text-mint">
              Dados atualizados em tempo real com base no Yahoo Finance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
