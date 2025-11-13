import { useEffect, useMemo, useState } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import FloatingMenu from './components/FloatingMenu';
import RiskAssessmentModal, { RiskProfile } from './components/RiskAssessmentModal';

type AppSection = 'home' | 'carteira';

const RISK_PROFILE_STORAGE_KEY = 'fishstocks_risk_profile';

const isValidRiskProfile = (value: string): value is RiskProfile => {
  return ['ultraConservador', 'conservador', 'moderado', 'arrojado', 'agressivo'].includes(value);
};

const App = () => {
  const [isAppMode, setIsAppMode] = useState(false);
  const [currentSection, setCurrentSection] = useState<AppSection>('home');
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [riskProfile, setRiskProfile] = useState<RiskProfile | null>(null);
  const [isRiskModalOpen, setIsRiskModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedProfile = window.localStorage.getItem(RISK_PROFILE_STORAGE_KEY);

    if (storedProfile && isValidRiskProfile(storedProfile)) {
      setRiskProfile(storedProfile);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (riskProfile) {
      window.localStorage.setItem(RISK_PROFILE_STORAGE_KEY, riskProfile);
    }
  }, [riskProfile]);

  useEffect(() => {
    if (isAppMode && !riskProfile) {
      setIsRiskModalOpen(true);
    } else {
      setIsRiskModalOpen(false);
    }
  }, [isAppMode, riskProfile]);

  useEffect(() => {
    if (!isAppMode) {
      setIsMenuExpanded(false);
    }
  }, [isAppMode]);

  const handleEnterApp = () => {
    setIsAppMode(true);
    setCurrentSection('home');
  };

  const handleConfirmRiskProfile = (profile: RiskProfile) => {
    setRiskProfile(profile);
    setIsRiskModalOpen(false);
  };

  const appContent = useMemo(() => {
    if (currentSection === 'carteira') {
      return (
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center gap-6 px-6 py-16 text-slate-200">
          <h2 className="text-3xl font-semibold text-white">Carteira do usuário (em construção)</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Aqui você acompanhará seus ativos monitorados, a performance histórica e receberá sugestões alinhadas ao seu perfil de
            risco.
          </p>
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-300">
              Em breve você poderá importar carteiras existentes, simular cenários e comparar a distribuição dos seus investimentos
              por classe de ativos.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center gap-6 px-6 py-16 text-slate-200">
        <h2 className="text-3xl font-semibold text-white">Home do app (em construção)</h2>
        <p className="text-sm leading-relaxed text-slate-300">
          Estamos preparando o hub com alertas inteligentes, score de risco dos seus ativos monitorados e insights personalizados
          para o mar financeiro em que você navega.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Monitoramento em tempo real</h3>
            <p className="mt-2 text-sm text-slate-300">
              Configure alertas por volatilidade, fundamentos e notícias relevantes. Vamos avisar quando algo importante surgir.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Recomendações guiadas</h3>
            <p className="mt-2 text-sm text-slate-300">
              Sugestões alinhadas ao seu perfil para ajustar posição, rebalancear carteiras e aproveitar oportunidades.
            </p>
          </div>
        </div>
      </div>
    );
  }, [currentSection]);

  if (!isAppMode) {
    return (
      <main>
        <LandingPage onEnter={handleEnterApp} />
      </main>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Header onEnter={handleEnterApp} />
      <main className="flex flex-1 flex-col">
        {appContent}
      </main>
      <FloatingMenu
        currentSection={currentSection}
        isExpanded={isMenuExpanded}
        onSelectSection={(section) => {
          setCurrentSection(section);
          setIsMenuExpanded(false);
        }}
        onToggle={() => setIsMenuExpanded((prev) => !prev)}
        onClose={() => setIsMenuExpanded(false)}
      />
      {isRiskModalOpen && <RiskAssessmentModal onConfirm={handleConfirmRiskProfile} />}
    </div>
  );
};

export default App;
