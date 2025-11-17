import { TouchEvent, useMemo, useRef, useState } from 'react';

type Slide = {
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    title: 'Carteira organizada automaticamente',
    description:
      'Tenha todos os seus investimentos reunidos em um lugar só, separados por tipo, objetivo, risco e desempenho. Veja quanto você colocou, quanto rendeu, quanto perdeu e como está distribuída sua carteira — tudo sem planilhas bagunçadas.',
  },
  {
    title: 'Score dos ativos e aderência ao seu perfil',
    description:
      'Cada ativo recebe um score objetivo de acordo com fundamentos, momento de mercado e risco. Além disso, você vê o quanto ele combina com o seu perfil de investidor. Você também recebe alertas quando um ativo deixa de ser ideal, recomendações de “comprar, segurar ou esperar” e justificativas claras do porquê daquela nota.',
  },
  {
    title: 'Acompanhamento em tempo real com dados oficiais',
    description:
      'O app atualiza automaticamente seus ativos usando dados do Yahoo Finance. Você enxerga preço atual, variação diária, desempenho histórico, ranking de desempenho, projeções e gráficos simples para entender rapidamente o cenário.',
  },
  {
    title: 'Metas e objetivos financeiros claros',
    description:
      'Crie objetivos como reserva de emergência, carro, intercâmbio ou independência financeira. O app calcula automaticamente quanto falta, quanto investir por mês, o tempo estimado para alcançar e se você está acima ou abaixo do ritmo ideal.',
  },
  {
    title: 'Painel lateral inteligente em tempo real',
    description:
      'O FishStocks conta com um painel lateral sempre visível — uma barra fina no canto esquerdo da tela que exibe, em tempo real, o logo, o ticket e o preço dos seus principais ativos. Basta olhar para o lado para acompanhar o mercado ao vivo, de qualquer lugar do aplicativo. Com um único clique, esse painel se expande e mostra um mini-painel interativo com mais detalhes do ativo. A partir daí, você pode abrir o pop-up de análise completa ou a tela de trade, sem precisar sair da tela atual. É uma forma rápida e visual de acompanhar o mercado enquanto navega pelo app.',
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
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">O que o FishStocks entrega na prática</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
            Conheça os diferenciais que tornam o FishStocks uma plataforma completa para acompanhar, organizar e decidir seus investimentos.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${safeCurrent * 100}%)` }}>
              {slides.map((slide, index) => (
                <article key={slide.title} className="w-full shrink-0 px-4 sm:px-10" aria-hidden={index !== safeCurrent}>
                  <div className="mx-auto h-full max-w-3xl rounded-2xl bg-white p-8 text-left text-slate-800">
                    <h3 className="text-2xl font-semibold text-slate-900">{slide.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-700">{slide.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => goTo(safeCurrent - 1)}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-md transition hover:border-emerald-300 hover:text-emerald-700 md:inline-flex"
            aria-label="Slide anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(safeCurrent + 1)}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-md transition hover:border-emerald-300 hover:text-emerald-700 md:inline-flex"
            aria-label="Próximo slide"
          >
            ›
          </button>
          <div className="mt-8 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${index === safeCurrent ? 'bg-emerald-500' : 'bg-slate-300 hover:bg-slate-400'}`}
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
