import { TouchEvent, useMemo, useRef, useState } from 'react';

type Slide = {
  title: string;
  summary: string;
  detail: string;
};

const slides: Slide[] = [
  {
    title: 'Carteira organizada automaticamente',
    summary: 'Os ativos entram classificados por classe, objetivo e risco para você enxergar o todo sem esforço.',
    detail:
      'A plataforma calcula aportes, rentabilidade e concentração e sugere reorganizações em segundos — sem planilhas intermináveis.',
  },
  {
    title: 'Score dos ativos e aderência ao seu perfil',
    summary: 'Cada ativo recebe nota automática e mostra o quanto combina com seu perfil investidor.',
    detail:
      'Recomendações de comprar, segurar ou esperar vêm com justificativas claras e alertas quando o risco sobe ou cai demais.',
  },
  {
    title: 'Acompanhamento em tempo real com dados oficiais',
    summary: 'Cotações, variações e gráficos são atualizados automaticamente via dados oficiais do mercado.',
    detail:
      'Veja histórico, projeções e ranking de performance com contexto para agir rápido mesmo longe do home broker.',
  },
  {
    title: 'Metas e objetivos financeiros claros',
    summary: 'Defina objetivos e receba planos de aporte com status sempre atualizado.',
    detail:
      'Acompanhamos o ritmo ideal, avisamos atrasos e sugerimos ajustes para manter suas metas no tempo certo.',
  },
  {
    title: 'Painel lateral inteligente em tempo real',
    summary: 'Uma barra lateral sempre visível mostra logo, ticket e preço dos ativos favoritos.',
    detail:
      'Um clique expande para exibir histórico, atalhos de análise e opções de trade — tudo sem sair da tela principal.',
  },
];

const FeaturesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const maxIndex = slides.length - 1;
  const safeCurrent = useMemo(() => Math.min(Math.max(current, 0), maxIndex), [current, maxIndex]);
  const touchStart = useRef<number | null>(null);

  const goTo = (index: number) => {
    if (index < 0) {
      setCurrent(maxIndex);
    } else if (index > maxIndex) {
      setCurrent(0);
    } else {
      setCurrent(index);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? safeCurrent - 1 : safeCurrent + 1);
    }
    touchStart.current = null;
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-50">O que o FishStocks entrega na prática</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Conheça os diferenciais que tornam o FishStocks uma plataforma completa para acompanhar, organizar e decidir seus investimentos.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${safeCurrent * 100}%)` }}>
              {slides.map((slide, index) => (
                <article key={slide.title} className="w-full shrink-0 px-3 sm:px-8" aria-hidden={index !== safeCurrent}>
                  <div className="group mx-auto h-full max-w-3xl rounded-3xl border border-slate-200 bg-white/90 p-8 text-left shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/70">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{slide.title}</h3>
                    <p className="mt-4 text-sm text-slate-600 sm:text-base dark:text-slate-300">{slide.summary}</p>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm text-slate-600 opacity-0 transition-all duration-200 ease-out group-hover:max-h-40 group-hover:opacity-100 dark:text-slate-300">
                      {slide.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => goTo(safeCurrent - 1)}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-300 bg-white/90 p-3 text-slate-600 shadow-sm transition-all duration-150 hover:text-slate-900 hover:shadow-md md:inline-flex dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            aria-label="Slide anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(safeCurrent + 1)}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-300 bg-white/90 p-3 text-slate-600 shadow-sm transition-all duration-150 hover:text-slate-900 hover:shadow-md md:inline-flex dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            aria-label="Próximo slide"
          >
            ›
          </button>
          <div className="mt-8 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${index === safeCurrent ? 'bg-mint' : 'bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'}`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
