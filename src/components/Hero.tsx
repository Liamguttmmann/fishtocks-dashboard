const Hero = () => {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 pb-20 pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-emerald-200 blur-3xl"></div>
        <div className="absolute right-16 bottom-10 h-48 w-48 rounded-full bg-blue-200 blur-3xl"></div>
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <p className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 shadow-sm ring-1 ring-emerald-100">
            Nova experiência do cliente
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Entre e acompanhe seus investimentos sem telas piscando.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            Criamos um painel principal estável e claro para você navegar pelas funcionalidades do FishStocks. Faça login, veja seus atalhos e siga direto para o que importa.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a
              href="#login"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-600 sm:w-auto"
            >
              Acessar painel
            </a>
            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:border-emerald-400 hover:text-emerald-700 sm:w-auto"
            >
              Ver como funciona
            </a>
          </div>
        </div>
        <div id="login" className="flex w-full justify-center md:w-1/2">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Acesso seguro</p>
                <h2 className="text-xl font-bold text-slate-900">Login do cliente</h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Estável</span>
            </div>
            <form className="mt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  placeholder="voce@fishstocks.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-200 transition focus:border-emerald-300 focus:ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-200 transition focus:border-emerald-300 focus:ring"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                  Lembrar-me neste dispositivo
                </label>
                <a className="font-semibold text-emerald-700 hover:text-emerald-800" href="#">Esqueci a senha</a>
              </div>
              <button
                type="button"
                className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
              >
                Entrar no painel
              </button>
            </form>
            <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Atalhos do main frame</p>
              <ul className="mt-3 grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <li className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">📈</span>
                  Fluxo geral de investimentos
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700">🧭</span>
                  Navegador de funcionalidades
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">🔔</span>
                  Alertas e tarefas rápidas
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-700">🧾</span>
                  Relatórios e documentos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
