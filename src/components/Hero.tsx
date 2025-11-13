const Hero = () => {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-navy pb-16 pt-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Veja sua vida financeira com clareza e propósito.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
            Organize seus investimentos, acompanhe ativos em tempo real e receba análises feitas para o seu perfil — tudo em um único
            painel, simples e inteligente.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center rounded-full bg-mint px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-mint/90 sm:w-auto"
            >
              Começar agora
            </a>
            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:border-mint hover:text-mint sm:w-auto"
            >
              Ver como funciona
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute -right-6 -top-6 rounded-full border border-mint/60 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint shadow">
              Dados em tempo real
            </div>
            <h2 className="text-sm font-semibold text-slate-200">Resumo da sua carteira</h2>
            <p className="mt-3 text-2xl font-bold text-white">Patrimônio total: R$ 52.430,12</p>
            <div className="mt-6 h-32 rounded-xl bg-gradient-to-br from-mint/30 via-mint/10 to-transparent p-4">
              <div className="flex h-full items-end gap-2">
                <div className="h-6 w-full rounded-t bg-mint/60"></div>
                <div className="h-12 w-full rounded-t bg-mint/70"></div>
                <div className="h-16 w-full rounded-t bg-mint/80"></div>
                <div className="h-24 w-full rounded-t bg-mint"></div>
                <div className="h-20 w-full rounded-t bg-mint/90"></div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/90 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Score da carteira</p>
                <p className="mt-2 text-lg font-bold text-white">83/100</p>
                <p className="mt-1 text-xs text-slate-400">Equilíbrio saudável entre risco e retorno</p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/90 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Renda passiva mensal</p>
                <p className="mt-2 text-lg font-bold text-white">R$ 327,40</p>
                <p className="mt-1 text-xs text-slate-400">Baseada em dividendos e cupons</p>
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
