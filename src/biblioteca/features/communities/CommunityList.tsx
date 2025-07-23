import React from 'react';
import { Link } from 'react-router-dom';
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
  const isAuthenticated = true; // Cambiado para mostrar funcionalidad
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Comunidades</h1>
          <p className="text-slate-600">Únete a comunidades de lectores y comparte tus experiencias</p>
        </div>
        {isAuthenticated && (
          <Link to="/comunidades/crear" className="btn btn-primary">
            Crear Comunidad
          </Link>
        )}
      </div>
      
      <div className="grid gap-4">
        {communities.map((c) => (
          <div key={c.id} className="card">
            <div className="card-body flex items-center gap-4">
            <img src={c.imagen} alt={c.nombre} className="w-20 h-20 rounded object-cover" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{c.nombre}</h2>
              <p className="text-gray-600 text-sm mb-1">{c.descripcion}</p>
              <span className="text-xs text-gray-400">{c.biblioteca}</span>
            </div>
            <PlanBadge tipoPlan={c.plan.tipoPlan} capacidadInteg={c.plan.capacidadInteg} />
            <Link to={`/comunidades/${c.id}`} className="btn btn-primary">
              {isAuthenticated ? 'Ver Detalle' : 'Unirse'}
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityList; 