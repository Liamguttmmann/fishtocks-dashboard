const HowItWorks = () => {
  const steps = [
    { emoji: '1️⃣', title: 'Cadastre-se', desc: 'Crie sua conta grátis em 2 minutos' },
    { emoji: '2️⃣', title: 'Conecte seus investimentos', desc: 'Integre suas contas de corretoras' },
    { emoji: '3️⃣', title: 'Acompanhe tudo', desc: 'Veja seus ativos em tempo real' },
    { emoji: '4️⃣', title: 'Tome decisões', desc: 'Use insights para investir melhor' },
  ];

  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Como funciona</h2>
        <p className="mt-4 text-center text-sm text-slate-600">
          Em 4 passos simples, você estará no controle dos seus investimentos.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 text-center transition ${
                idx === 0
                  ? 'bg-emerald-500 text-white shadow-lg ring-2 ring-emerald-300'
                  : 'bg-slate-50 text-slate-700'
              }`}
            >
              <div className="text-4xl">{step.emoji}</div>
              <h3 className={`mt-4 text-lg font-semibold ${idx === 0 ? 'text-white' : 'text-slate-900'}`}>
                {step.title}
              </h3>
              <p className={`mt-2 text-sm ${idx === 0 ? 'text-emerald-50' : 'text-slate-600'}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
