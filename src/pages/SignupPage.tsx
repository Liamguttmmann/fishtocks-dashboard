import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignupPage = () => {
  const [passwordError, setPasswordError] = useState('');

  const handleGoogleSignup = () => {
    alert('Cadastro com Google será implementado em breve!');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem');
      return;
    }

    setPasswordError('');
    alert('Cadastro será implementado em breve!');
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
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">Criar conta grátis</p>
            <h1 className="mt-4 text-3xl font-bold text-slate-900">Comece sua jornada</h1>
            <p className="mt-2 text-sm text-slate-600">
              Já tem uma conta?{' '}
              <Link to="/login" className="font-semibold text-emerald-600 hover:text-emerald-700">
                Fazer login
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={handleGoogleSignup}
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
              <span className="bg-white px-4 text-slate-500">ou cadastre-se com e-mail</span>
            </div>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                  Nome
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  placeholder="João"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-200 transition focus:border-emerald-300 focus:ring"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                  Sobrenome
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  placeholder="Silva"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-200 transition focus:border-emerald-300 focus:ring"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
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
                name="password"
                type="password"
                required
                placeholder="Mínimo 8 caracteres"
                minLength={8}
                onChange={() => setPasswordError('')}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-200 transition focus:border-emerald-300 focus:ring"
              />
              <p className="text-xs text-slate-500">Pelo menos 8 caracteres com letras e números</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Digite a senha novamente"
                minLength={8}
                onChange={() => setPasswordError('')}
                className={`w-full rounded-2xl border px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-200 transition focus:ring ${
                  passwordError
                    ? 'border-red-300 bg-red-50 focus:border-red-400'
                    : 'border-slate-200 bg-slate-50 focus:border-emerald-300'
                }`}
              />
              {passwordError && <p className="text-xs text-red-600">{passwordError}</p>}
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-slate-600">
                Eu concordo com os{' '}
                <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-700">
                  Termos de Uso
                </a>{' '}
                e{' '}
                <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-700">
                  Política de Privacidade
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
            >
              Criar conta grátis
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

export default SignupPage;
