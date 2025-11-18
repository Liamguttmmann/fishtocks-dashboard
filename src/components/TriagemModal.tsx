export type TriagemModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TriagemModal = ({ isOpen, onClose }: TriagemModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="triagem-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200/70 dark:bg-slate-900 dark:ring-slate-800"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Fechar triagem"
          className="absolute right-3 top-3 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          onClick={onClose}
        >
          <span className="sr-only">Fechar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>

        <div className="flex flex-col gap-3 text-center sm:text-left">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-500/30">
            Nova experiência
          </div>
          <div className="space-y-2">
            <h2 id="triagem-title" className="text-2xl font-semibold text-slate-900 dark:text-white">
              Começar triagem financeira
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Vamos entender seu perfil para personalizar sua experiência.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-700 ring-1 ring-slate-200/60 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:ring-slate-700/80">
            Em breve você poderá conectar sua conta Google ou criar um login próprio. A triagem vai garantir que seus dados e
            preferências fiquem seguros e personalizados.
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600"
            onClick={onClose}
          >
            Fechar
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            onClick={() => console.log('Triagem iniciada')}
          >
            Começar agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default TriagemModal;
