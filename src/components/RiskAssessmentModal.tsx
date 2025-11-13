import { useMemo, useState } from 'react';

export type RiskProfile =
  | 'ultraConservador'
  | 'conservador'
  | 'moderado'
  | 'arrojado'
  | 'agressivo';

type RiskAssessmentModalProps = {
  onConfirm: (profile: RiskProfile) => void;
};

type StepOption = {
  label: string;
  value: number;
};

type Step = {
  id: number;
  question: string;
  options: StepOption[];
};

const steps: Step[] = [
  {
    id: 1,
    question: 'Qual é o seu horizonte principal de investimento?',
    options: [
      { label: 'Curto prazo (até 1 ano)', value: 0 },
      { label: 'Médio prazo (de 1 a 5 anos)', value: 1 },
      { label: 'Longo prazo (mais de 5 anos)', value: 2 },
    ],
  },
  {
    id: 2,
    question: 'Como você reage quando seus investimentos caem 15–20% em pouco tempo?',
    options: [
      { label: 'Fico muito desconfortável, provavelmente venderia', value: 0 },
      { label: 'Fico desconfortável, mas manteria', value: 1 },
      { label: 'Entendo que faz parte e, se der, compro mais', value: 2 },
    ],
  },
  {
    id: 3,
    question: 'Qual porcentagem do seu patrimônio você se sentiria confortável em renda variável (ações/ETFs/FIIs)?',
    options: [
      { label: 'Até 20%', value: 0 },
      { label: 'De 20% a 50%', value: 1 },
      { label: 'Acima de 50%', value: 2 },
    ],
  },
  {
    id: 4,
    question: 'Sua renda mensal é estável?',
    options: [
      { label: 'Sim, é bem estável', value: 0 },
      { label: 'Mais ou menos', value: 1 },
      { label: 'Não, varia bastante', value: 2 },
    ],
  },
  {
    id: 5,
    question: 'Qual é o seu nível de experiência com investimentos?',
    options: [
      { label: 'Estou começando agora', value: 0 },
      { label: 'Já invisto há algum tempo', value: 1 },
      { label: 'Tenho bastante experiência', value: 2 },
    ],
  },
];

const profileDescriptions: Record<RiskProfile, string> = {
  ultraConservador:
    'Seu foco é preservar capital e evitar oscilações intensas. Recomendamos carteiras com grande peso em renda fixa e liquidez.',
  conservador:
    'Você aceita uma parcela moderada de risco em troca de ganhos adicionais, mas ainda prefere estabilidade e previsibilidade.',
  moderado:
    'Equilibra risco e retorno, combinando ativos de renda fixa e variável. Estratégias balanceadas tendem a funcionar bem.',
  arrojado:
    'Busca retornos superiores aceitando volatilidade. Carteiras com maior peso em renda variável e diversificação global são adequadas.',
  agressivo:
    'Você tolera oscilações altas para perseguir ganhos significativos. Estratégias com alta exposição a renda variável e alternativos combinam mais.',
};

const profileLabels: Record<RiskProfile, string> = {
  ultraConservador: 'Ultra conservador',
  conservador: 'Conservador',
  moderado: 'Moderado',
  arrojado: 'Arrojado',
  agressivo: 'Agressivo',
};

const mapScoreToProfile = (score: number): RiskProfile => {
  if (score <= 2) return 'ultraConservador';
  if (score <= 4) return 'conservador';
  if (score <= 6) return 'moderado';
  if (score <= 8) return 'arrojado';
  return 'agressivo';
};

const RiskAssessmentModal = ({ onConfirm }: RiskAssessmentModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(steps.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const totalScore = useMemo(
    () =>
      answers.reduce((accumulator, value) => {
        if (value === null) {
          return accumulator;
        }

        return accumulator + value;
      }, 0),
    [answers],
  );

  const riskProfile = useMemo(() => mapScoreToProfile(totalScore), [totalScore]);

  const handleSelectOption = (value: number) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentStep] = value;
      return updated;
    });
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep((prev) => prev - 1);
  };

  if (showResult) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
        <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Seu perfil de risco</h2>
            <p className="mt-2 text-4xl font-bold text-mint">{profileLabels[riskProfile]}</p>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{profileDescriptions[riskProfile]}</p>
          <button
            type="button"
            onClick={() => onConfirm(riskProfile)}
            className="mt-8 w-full rounded-full bg-mint px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:bg-mint/90"
          >
            Confirmar perfil e continuar
          </button>
        </div>
      </div>
    );
  }

  const currentAnswer = answers[currentStep];
  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-mint">Triagem de risco</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Vamos entender seu perfil de risco</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Responda algumas perguntas rápidas para personalizarmos suas recomendações e o score dos seus ativos.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Pergunta {currentStep + 1} de {steps.length}
          </p>
        </header>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.question}</h3>
          <div className="space-y-3">
            {step.options.map((option) => {
              const isSelected = currentAnswer === option.value;

              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleSelectOption(option.value)}
                  className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-mint ${
                    isSelected
                      ? 'border-mint bg-mint/10 text-slate-900 dark:border-mint dark:bg-mint/20 dark:text-white'
                      : 'border-slate-300 hover:border-blue-500 hover:bg-blue-50 dark:border-slate-700 dark:hover:border-mint dark:hover:bg-slate-800'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
        <footer className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-600 transition enabled:hover:border-mint enabled:hover:text-mint disabled:opacity-40 dark:border-slate-700 dark:text-slate-300"
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentAnswer === null}
            className="rounded-full bg-mint px-6 py-2 text-sm font-semibold text-slate-900 shadow-md transition enabled:hover:-translate-y-0.5 enabled:hover:bg-mint/90 disabled:opacity-50"
          >
            Próximo
          </button>
        </footer>
      </div>
    </div>
  );
};

export default RiskAssessmentModal;
