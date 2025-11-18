import { useCallback } from 'react';

const Hero = () => {
  const handleScroll = useCallback(() => {
    if (typeof document === 'undefined') return;
    const section = document.getElementById('como-funciona');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-slate-100 to-slate-50 pb-16 pt-28 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50">
            Veja sua vida financeira com clareza e propósito.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Organize seus investimentos, acompanhe ativos em tempo real e receba análises feitas para o seu perfil — tudo em um único
            painel, simples e inteligente.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center rounded-full bg-mint px-7 py-3 text-sm font-semibold text-slate-900 shadow-md transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            >
              Começar agora
            </a>
            <button
              type="button"
              onClick={handleScroll}
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition-all duration-150 ease-out hover:translate-y-[1px] hover:shadow-md sm:w-auto dark:border-slate-600 dark:text-slate-100"
            >
              Ver como funciona
            </button>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="absolute -right-6 -top-6 rounded-full border border-mint/40 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint shadow-sm dark:border-mint/60 dark:bg-slate-900/90">
              Dados em tempo real
            </div>
            <h2 className="text-sm font-semibold text-slate-600 dark:text-slate-300">Resumo da sua carteira</h2>
            <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Patrimônio total: R$ 52.430,12</p>
            <div className="mt-6 h-32 rounded-xl bg-gradient-to-br from-mint/25 via-mint/10 to-transparent p-4">
              <div className="flex h-full items-end gap-2">
                <div className="h-6 w-full rounded-t bg-mint/60"></div>
                <div className="h-12 w-full rounded-t bg-mint/70"></div>
                <div className="h-16 w-full rounded-t bg-mint/80"></div>
                <div className="h-24 w-full rounded-t bg-mint"></div>
                <div className="h-20 w-full rounded-t bg-mint/90"></div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Score da carteira</p>
                <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">83/100</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Equilíbrio saudável entre risco e retorno</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900">
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
