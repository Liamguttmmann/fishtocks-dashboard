import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleEmailLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await loginWithEmail(email, password);
      navigate('/onboarding');
    } catch (err) {
      setError('Não foi possível entrar. Verifique seus dados e tente novamente.');
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      await loginWithGoogle();
      navigate('/onboarding');
    } catch (err) {
      setError('Falha ao entrar com Google. Tente novamente em instantes.');
    }
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
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">Entrar na sua conta</p>
            <h1 className="mt-4 text-3xl font-bold text-slate-900">Bem-vindo de volta</h1>
            <p className="mt-2 text-sm text-slate-600">
              Não tem uma conta?{' '}
              <Link to="/signup" className="font-semibold text-emerald-600 hover:text-emerald-700">
                Criar conta grátis
              </Link>
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-2xl bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div className="mt-8">
            <button
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400 hover:bg-slate-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar com Google
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-4 text-slate-500">ou entre com e-mail</span>
            </div>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@exemplo.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-200 transition focus:border-emerald-300 focus:ring"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-200 transition focus:border-emerald-300 focus:ring"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-slate-600">
                  Lembrar-me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
            >
              Entrar
            </button>
          </form>
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

export default LoginPage;
