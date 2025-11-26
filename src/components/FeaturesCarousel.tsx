const FeaturesCarousel = () => {
  // Por enquanto é um "falso carrossel": só uma faixa horizontal.
  // Depois dá pra trocar por algo com swipe / setinhas se quiser.
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-stretch sm:gap-6">
        <div className="flex-1 rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
            Triagem inteligente
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Entenda seu perfil em poucos minutos
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Uma triagem guiada que cruza renda, objetivos e tolerância a risco para
            montar um perfil de investidor realmente fiel à sua realidade.
          </p>
        </div>

        <div className="flex-1 rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
            Conexão com mercado
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Dados em tempo real do Yahoo Finance
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Visualize cotações, variação e indicadores principais sem sair da plataforma,
            usando dados consolidados do Yahoo Finance.
          </p>
        </div>

        <div className="flex-1 rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
            Visão de carteira
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Dashboard claro de ganhos e perdas
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Acompanhe rentabilidade líquida, concentração por ativo e evolução da carteira
            em um painel único e fácil de entender.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
