import { useEffect, useRef } from 'react';

type AppSection = 'home' | 'carteira';

type FloatingMenuProps = {
  isExpanded: boolean;
  currentSection: AppSection;
  onToggle: () => void;
  onClose: () => void;
  onSelectSection: (section: AppSection) => void;
};

const FloatingMenu = ({
  isExpanded,
  currentSection,
  onToggle,
  onClose,
  onSelectSection,
}: FloatingMenuProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isExpanded, onClose]);

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-40 flex items-end">
      <div ref={containerRef} className="pointer-events-auto">
        {isExpanded ? (
          <div className="flex items-center gap-3 rounded-full bg-slate-900/90 px-4 py-2 text-white shadow-2xl ring-1 ring-white/10 transition-all dark:bg-slate-100 dark:text-slate-900">
            <button
              type="button"
              onClick={onToggle}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/70 text-xs font-semibold uppercase tracking-wide text-slate-100 transition hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300"
              aria-label="Minimizar menu"
            >
              ×
            </button>
            <div className="hidden flex-col text-left text-xs font-semibold uppercase tracking-wider text-slate-300 sm:flex dark:text-slate-500">
              <span className="text-[10px]">FishStocks</span>
              <span className="text-sm text-white dark:text-slate-900">App</span>
            </div>
            <nav className="flex items-center gap-2 text-sm font-medium">
              <button
                type="button"
                onClick={() => onSelectSection('home')}
                className={`rounded-full px-4 py-2 transition ${
                  currentSection === 'home'
                    ? 'bg-mint text-slate-900 shadow-inner'
                    : 'bg-white/5 text-white hover:bg-white/10 dark:bg-slate-200/80 dark:text-slate-900 dark:hover:bg-slate-200'
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => onSelectSection('carteira')}
                className={`rounded-full px-4 py-2 transition ${
                  currentSection === 'carteira'
                    ? 'bg-mint text-slate-900 shadow-inner'
                    : 'bg-white/5 text-white hover:bg-white/10 dark:bg-slate-200/80 dark:text-slate-900 dark:hover:bg-slate-200'
                }`}
              >
                Carteira
              </button>
            </nav>
          </div>
        ) : (
          <button
            type="button"
            onClick={onToggle}
            className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-900/90 dark:bg-slate-100 dark:text-slate-900"
          >
            <span>Menu</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default FloatingMenu;
