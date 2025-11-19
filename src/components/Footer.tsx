const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">FishStocks</h3>
            <p className="mt-2 text-sm text-slate-600">
              Controle financeiro e acompanhamento de investimentos.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Produto</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-600">Recursos</a></li>
              <li><a href="#" className="hover:text-emerald-600">Preços</a></li>
              <li><a href="#" className="hover:text-emerald-600">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Empresa</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-600">Sobre</a></li>
              <li><a href="#" className="hover:text-emerald-600">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-600">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-600">Privacidade</a></li>
              <li><a href="#" className="hover:text-emerald-600">Termos</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
          © 2025 FishStocks. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
