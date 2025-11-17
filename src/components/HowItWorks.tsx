const steps = [
  {
    title: 'Passo 1 – Fazemos sua triagem financeira (leva menos de 1 minuto)',
    description:
      'Você responde 6 perguntas simples sobre renda, objetivos, estabilidade financeira e tolerância ao risco. Com isso criamos seu Perfil de Aderência ao Investidor, que será a base da sua carteira personalizada.',
    highlight: true,
  },
  {
    title: 'Passo 2 – Você registra seus investimentos atuais (se já tiver)',
    description:
      'Adicione seus ativos — ações, FIIs, ETFs, renda fixa ou ativos internacionais. Nós organizamos tudo automaticamente e mostramos o quanto você tem hoje, quanto já lucrou e a sua rentabilidade real.',
  },
  {
    title: 'Passo 3 – O sistema monta sua estratégia personalizada',
    description:
      'Depois da triagem e da leitura da sua carteira atual, o algoritmo calcula seu score de investidor, a aderência dos ativos ao seu perfil, o risco aceitável, as oportunidades e sugestões de alocação e rebalanceamento.',
  },
  {
    title: 'Passo 4 – Acompanhe tudo em tempo real',
    description:
      'Veja preços atualizados automaticamente com base no Yahoo Finance: gráficos, indicadores, projeções, variações e insights práticos. Tudo em um dashboard claro e objetivo.',
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-slate-900 sm:text-4xl">Como funciona na prática?</h2>
        <p className="mt-3 text-center text-sm text-slate-600 sm:text-base">
          Fluxo simples para você chegar rápido ao painel principal e navegar sem travar.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`group flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-800 shadow transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg ${
                step.highlight ? 'border-emerald-200 bg-white shadow-lg ring-2 ring-emerald-100' : ''
              }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold ${
                  step.highlight
                    ? 'bg-emerald-100 text-emerald-700 ring-2 ring-inset ring-emerald-200'
                    : 'bg-slate-200 text-slate-800'
                }`}
              >
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
