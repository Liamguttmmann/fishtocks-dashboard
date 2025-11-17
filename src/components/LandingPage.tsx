import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import FeaturesCarousel from './FeaturesCarousel';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <Header />
      <Hero />
      <HowItWorks />
      <section id="seguranca" className="py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white px-6 py-12 text-slate-800 shadow-xl">
          <div className="mx-auto flex max-w-4xl flex-col gap-8 text-center sm:text-left md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Segurança</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">Proteção pensada para investidores</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Seus dados são criptografados de ponta a ponta e armazenados em servidores com monitoramento contínuo. Utilizamos autenticação em duas etapas, auditoria de acessos e camadas de isolamento para proteger suas informações e decisões de investimento.
              </p>
            </div>
            <div className="md:w-1/2">
              <ul className="grid gap-4 text-left text-sm text-slate-700">
                <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <span className="font-semibold text-emerald-700">Proteção de dados</span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">Criptografia AES-256 e monitoramento 24/7 das conexões de API.</p>
                </li>
                <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <span className="font-semibold text-emerald-700">Transparência</span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">Relatórios de auditoria mensais e conformidade com LGPD.</p>
                </li>
                <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <span className="font-semibold text-emerald-700">Autonomia</span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">Você decide o que monitorar e controla os acessos em tempo real.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FeaturesCarousel />
      <section id="contato" className="py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white px-8 py-12 text-center text-slate-800 shadow-xl">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Fale com a equipe FishStocks</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            Quer saber mais sobre o produto, parcerias ou liberar sua conta corporativa? Envie um e-mail para <span className="font-semibold text-emerald-700">oi@fishstocks.com</span> ou fale com nosso time no <span className="font-semibold text-emerald-700">WhatsApp (11) 90000-0000</span>.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:oi@fishstocks.com"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:w-auto"
            >
              Enviar e-mail
            </a>
            <a
              href="https://wa.me/5511900000000"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700 sm:w-auto"
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
