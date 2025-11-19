const FeaturesCarousel = () => {
  const features = [
    { emoji: '📊', title: 'Gráficos em tempo real', desc: 'Acompanhe a evolução do seu patrimônio' },
    { emoji: '🔔', title: 'Alertas personalizados', desc: 'Seja notificado sobre suas ações' },
    { emoji: '📈', title: 'Análise de performance', desc: 'Veja como seus investimentos estão performando' },
    { emoji: '🔒', title: 'Segurança total', desc: 'Seus dados protegidos com criptografia' },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Recursos principais</h2>
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl">{feature.emoji}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
