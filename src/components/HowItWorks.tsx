const highlights = [
  {
    title: 'Triagem inteligente',
    summary: 'Coletamos suas respostas sobre objetivos, horizonte e tolerância a risco em poucos cliques.',
    detail:
      'O algoritmo cruza os dados e cria um perfil de aderência exclusivo. Ele se atualiza conforme você ajusta metas e patrimônio.',
    icon: '🎯',
  },
  {
    title: 'Leitura da carteira',
    summary: 'Importe ou registre ativos e nós os categorizamos automaticamente em segundos.',
    detail:
      'A identificação mapeia exposição por setor, classe de risco e concentração. Assim você entende os pontos fortes e os gargalos da carteira.',
    icon: '📊',
  },
  {
    title: 'Estratégia montada pra você',
    summary: 'Receba sugestões de alocação, rebalanceamento e score de cada ativo sem planilhas.',
    detail:
      'Mostramos oportunidades alinhadas ao seu perfil, projeções de crescimento e alertas quando algo sai da rota ideal.',
    icon: '🧠',
  },
  {
    title: 'Acompanhamento contínuo',
    summary: 'Monitore performance, fluxo de caixa e riscos em tempo real direto do dashboard.',
    detail:
      'Com dados atualizados, você acompanha metas, vê alertas inteligentes e recebe insights acionáveis para decidir com tranquilidade.',
    icon: '📈',
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-mint">Experiência guiada</span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-50">Como o FishStocks funciona</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Cada etapa combina inteligência de dados e orientação prática para que você tenha clareza desde a primeira interação até o acompanhamento diário.
          </p>
        </div>
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-full gap-6 pr-4 md:pr-6">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="group relative flex w-72 shrink-0 flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/60 sm:w-80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint/20 text-lg">
                  <span aria-hidden>{highlight.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2 sm:text-base dark:text-slate-300">{highlight.summary}</p>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-slate-600 opacity-0 transition-all duration-200 ease-out group-hover:max-h-40 group-hover:opacity-100 dark:text-slate-300">
                    {highlight.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
