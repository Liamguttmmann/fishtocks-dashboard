import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import FeaturesCarousel from './FeaturesCarousel';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Header />
      <Hero />
      <HowItWorks />
      <section id="seguranca" className="py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800/70 bg-slate-950/80 px-6 py-12 text-slate-200 shadow-lg">
          <div className="mx-auto flex max-w-4xl flex-col gap-8 text-center sm:text-left md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Segurança pensada para investidores</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Seus dados são criptografados de ponta a ponta e armazenados em servidores com monitoramento contínuo. Utilizamos autenticação em duas etapas, auditoria de acessos e camadas de isolamento para proteger suas informações e decisões de investimento.
              </p>
            </div>
            <div className="md:w-1/2">
              <ul className="grid gap-4 text-left text-sm text-slate-300">
                <li className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
                  <span className="font-semibold text-mint">Proteção de dados</span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">Criptografia AES-256 e monitoramento 24/7 das conexões de API.</p>
                </li>
                <li className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
                  <span className="font-semibold text-mint">Transparência</span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">Relatórios de auditoria mensais e conformidade com LGPD.</p>
                </li>
                <li className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
                  <span className="font-semibold text-mint">Autonomia</span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">Você decide o que monitorar e controla os acessos em tempo real.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FeaturesCarousel />
      <section id="contato" className="py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800/70 bg-slate-950/80 px-8 py-12 text-center text-slate-200 shadow-lg">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Fale com a equipe FishStocks</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Quer saber mais sobre o produto, parcerias ou liberar sua conta corporativa? Envie um e-mail para <span className="font-semibold text-mint">oi@fishstocks.com</span> ou fale com nosso time no <span className="font-semibold text-mint">WhatsApp (11) 90000-0000</span>.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:oi@fishstocks.com"
              className="inline-flex w-full items-center justify-center rounded-full bg-mint px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:bg-mint/90 sm:w-auto"
            >
              Enviar e-mail
            </a>
            <a
              href="https://wa.me/5511900000000"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-mint hover:text-mint sm:w-auto"
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
