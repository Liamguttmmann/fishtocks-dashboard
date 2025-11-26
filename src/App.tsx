import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="p-8 rounded-2xl shadow-xl bg-slate-800 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">
          Fishtocks Dashboard 🎣
        </h1>
        <p className="text-slate-300 mb-2">
          Se você está vendo essa tela, o React + Vite estão funcionando certinho.
        </p>
        <p className="text-slate-400 text-sm">
          Depois daqui a gente começa a montar a interface de verdade.
        </p>
      </div>
    </div>
  );
};

export default App;
