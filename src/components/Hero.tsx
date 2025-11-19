import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-emerald-200 blur-3xl opacity-40"></div>
        <div className="absolute right-16 bottom-10 h-96 w-96 rounded-full bg-blue-200 blur-3xl opacity-40"></div>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-100">
              Nova experiência do cliente
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Entre e acompanhe seus investimentos sem telas piscando.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Criamos um painel principal estável e claro para você navegar pelas funcionalidades do FishStocks. Faça login, veja seus atalhos e siga direto para o que importa.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
              >
                Criar conta grátis
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:bg-slate-50"
              >
                Já tenho conta
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-emerald-700">Acesso seguro</p>
            <h2 className="mt-4 text-center text-2xl font-bold text-slate-900">Comece agora</h2>
            <p className="mt-2 text-center text-sm text-slate-600">
              Crie sua conta em menos de 2 minutos e comece a organizar seus investimentos.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700 ring-1 ring-emerald-100">
              <span className="text-xl">✨</span>
              Sem cartão de crédito. Sem compromisso.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
