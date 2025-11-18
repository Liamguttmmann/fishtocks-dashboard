import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import FeaturesCarousel from './FeaturesCarousel';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Hero />
      <HowItWorks />
      <section id="seguranca" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white/90 px-6 py-12 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 text-center sm:text-left md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2">
              <span className="text-sm font-semibold uppercase tracking-wider text-mint">Segurança</span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-50">Proteção pensada para investidores</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                Seus dados são criptografados de ponta a ponta, com monitoramento contínuo, autenticação em duas etapas e auditoria de acessos. Estruturamos camadas de isolamento para blindar decisões e informações sensíveis.
              </p>
            </div>
            <div className="md:w-1/2">
              <ul className="grid gap-4 text-left text-sm text-slate-600 sm:text-base dark:text-slate-300">
                <li className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900">
                  <span className="font-semibold text-slate-900 dark:text-slate-50">Proteção de dados</span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Criptografia AES-256, backups redundantes e monitoramento 24/7 das integrações.</p>
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900">
                  <span className="font-semibold text-slate-900 dark:text-slate-50">Transparência</span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Relatórios de auditoria mensais, logs rastreáveis e conformidade total com a LGPD.</p>
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900">
                  <span className="font-semibold text-slate-900 dark:text-slate-50">Autonomia</span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Você controla acessos, permissões e notificações sensíveis em tempo real.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FeaturesCarousel />
      <section id="contato" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white/95 px-6 py-14 text-center shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-50">Fale com a equipe FishStocks</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Quer saber mais sobre o produto, parcerias ou liberar sua conta corporativa? Envie um e-mail para <span className="font-semibold text-slate-900 dark:text-slate-100">oi@fishstocks.com</span> ou fale com nosso time no <span className="font-semibold text-slate-900 dark:text-slate-100">WhatsApp (11) 90000-0000</span>.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:oi@fishstocks.com"
              className="inline-flex w-full items-center justify-center rounded-full bg-mint px-7 py-3 text-sm font-semibold text-slate-900 shadow-md transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            >
              Enviar e-mail
            </a>
            <a
              href="https://wa.me/5511900000000"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition-all duration-150 ease-out hover:translate-y-[1px] hover:shadow-md sm:w-auto dark:border-slate-600 dark:text-slate-100"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
