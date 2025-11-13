import type { FC, FormEvent } from 'react';

type LoginScreenProps = {
  onBack: () => void;
};

const LoginScreen: FC<LoginScreenProps> = ({ onBack }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] w-full flex-1 bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-16 transition-colors dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-colors dark:border-slate-700 dark:bg-slate-900 sm:p-8">
          <header className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl">Entre na sua conta</h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Organize sua carteira e acompanhe seus investimentos com inteligência.
            </p>
          </header>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-500/30"
                placeholder="voce@exemplo.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-500/30"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-blue-400"
                />
                Lembrar de mim
              </label>
              <button type="button" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                Esqueci minha senha
              </button>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Continuar
            </button>
          </form>
          <div className="mt-6 flex flex-col gap-3 text-center text-sm text-slate-600 dark:text-slate-300">
            <p>
              Não tem conta?{' '}
              <button
                type="button"
                className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Criar conta
              </button>
            </p>
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center justify-center text-sm font-medium text-slate-600 underline-offset-4 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              Voltar para a página inicial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
