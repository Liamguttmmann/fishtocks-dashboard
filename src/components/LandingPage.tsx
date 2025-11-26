import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import FeaturesCarousel from './FeaturesCarousel';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Header />
      <Hero />
      <HowItWorks />

      <section id="seguranca" className="py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-12 shadow-lg">
          <div className="mx-auto flex max-w-4xl flex-col gap-8 text-center sm:text-left md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2">
              <div className="inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Acesso seguro
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Segurança pensada para investidores
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Seus dados são criptografados de ponta a ponta e armazenados em servidores com monitoramento contínuo.
              </p>
            </div>

            <div className="md:w-1/2">
              <ul className="grid gap-4 text-left text-sm">
                <li className="rounded-2xl border border-emerald-200 bg-white p-4">
                  <span className="font-semibold text-emerald-600">🛡️ Proteção de dados</span>
                  <p className="mt-2 text-xs text-slate-600">
                    Criptografia AES-256 e monitoramento 24/7.
                  </p>
                </li>
                <li className="rounded-2xl border border-emerald-200 bg-white p-4">
                  <span className="font-semibold text-emerald-600">✅ Transparência</span>
                  <p className="mt-2 text-xs text-slate-600">
                    Conformidade com LGPD.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FeaturesCarousel />

      <section id="contato" className="py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white px-8 py-12 text-center shadow-lg">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Fale com a equipe FishStocks
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Envie um e-mail para{' '}
            <span className="font-semibold text-emerald-600">oi@fishstocks.com</span>
          </p>
          <div className="mt-8">
            <a
              href="mailto:oi@fishstocks.com"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;