import React from 'react';
import PlanBadge from './PlanBadge';

// Simulación de datos
const communities = [
  {
    id: 1,
    nombre: 'Lectores Modernos',
    descripcion: 'Comunidad para amantes de la literatura contemporánea.',
    imagen: 'https://via.placeholder.com/80',
    plan: { tipoPlan: 'freemium' as const, capacidadInteg: 20 },
    biblioteca: 'Biblioteca Central',
  },
  {
    id: 2,
    nombre: 'Círculo de Fantasía',
    descripcion: 'Debates y recomendaciones de fantasía épica.',
    imagen: 'https://via.placeholder.com/80',
    plan: { tipoPlan: 'pro' as const, capacidadInteg: 60 },
    biblioteca: 'Biblioteca Norte',
  },
];

const CommunityList: React.FC = () => {
  // Simulación de autenticación
  const isAuthenticated = false;
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Comunidades</h1>
      <div className="grid gap-4">
        {communities.map((c) => (
          <div key={c.id} className="flex items-center bg-white rounded shadow p-4 gap-4">
            <img src={c.imagen} alt={c.nombre} className="w-20 h-20 rounded object-cover" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{c.nombre}</h2>
              <p className="text-gray-600 text-sm mb-1">{c.descripcion}</p>
              <span className="text-xs text-gray-400">{c.biblioteca}</span>
            </div>
            <PlanBadge tipoPlan={c.plan.tipoPlan} capacidadInteg={c.plan.capacidadInteg} />
            <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {isAuthenticated ? 'Ver Detalle' : 'Unirse'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityList; 