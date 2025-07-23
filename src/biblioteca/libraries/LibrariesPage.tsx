import React from 'react';
import { Link } from 'react-router-dom';

const LibrariesPage: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Bibliotecas</h1>
      <p className="text-slate-600 m-0">Explora y descubre bibliotecas en tu área</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Buscar Bibliotecas Card */}
      <div className="bg-white/80 backdrop-blur rounded-xl border border-white/20 transition-all cursor-pointer shadow hover:bg-white/90 hover:shadow-lg">
        <div className="text-center p-8">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Buscar Bibliotecas</h3>
          <p className="text-sm text-slate-600 mb-6">Encuentra bibliotecas específicas por ubicación, tipo o características</p>
          <Link
            to="/buscar"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg px-6 py-3 font-semibold shadow transition hover:shadow-xl hover:from-blue-600 hover:to-blue-900"
            style={{ textDecoration: 'none' }}
          >
            Buscar
          </Link>
        </div>
      </div>

      {/* Catálogo Card */}
      <div className="bg-white/80 backdrop-blur rounded-xl border border-white/20 transition-all cursor-pointer shadow hover:bg-white/90 hover:shadow-lg">
        <div className="text-center p-8">
          <div className="text-5xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Ver Catálogo</h3>
          <p className="text-sm text-slate-600 mb-6">Explora todas las bibliotecas disponibles en el catálogo completo</p>
          <Link
            to="/catalogo"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg px-6 py-3 font-semibold shadow transition hover:shadow-xl hover:from-blue-600 hover:to-blue-900"
            style={{ textDecoration: 'none' }}
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default LibrariesPage; 