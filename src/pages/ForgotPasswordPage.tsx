import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Funcionalidade de recuperação de senha será implementada em breve!');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-6 py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-emerald-200 blur-3xl"></div>
        <div className="absolute right-16 bottom-10 h-48 w-48 rounded-full bg-blue-200 blur-3xl"></div>
      </div>
      
      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur">
          <div className="text-center">
            <Link to="/" className="inline-block text-2xl font-bold text-slate-900 hover:text-emerald-600 transition">
              FishStocks
            </Link>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">Recuperação de senha</p>
            <h1 className="mt-4 text-3xl font-bold text-slate-900">Esqueceu sua senha?</h1>
            <p className="mt-2 text-sm text-slate-600">
              Sem problema! Digite seu e-mail e enviaremos instruções para redefinir sua senha.
            </p>
          </div>

          <form onSubmit={handleReset} className="mt-8 space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                E-mail cadastrado
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="voce@exemplo.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-200 transition focus:border-emerald-300 focus:ring"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
            >
              Enviar instruções
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Lembrou sua senha?{' '}
              <Link to="/login" className="font-semibold text-emerald-600 hover:text-emerald-700">
                Voltar para login
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-slate-600 hover:text-emerald-600">
            ← Voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
