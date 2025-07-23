import React from 'react';
import PlanBadge from './PlanBadge';
import CommunityRules from './CommunityRules';
import ThreadList from './ThreadList';
import EventsPlaceholder from './EventsPlaceholder';

// Simulación de datos
const community = {
  id: 1,
  nombre: 'Lectores Modernos',
  descripcion: 'Comunidad para amantes de la literatura contemporánea.',
  imagen: 'https://via.placeholder.com/120',
  plan: { tipoPlan: 'freemium' as const, capacidadInteg: 20 },
  biblioteca: 'Biblioteca Central',
  reglas: [
    'Respetar a los demás miembros.',
    'No spam.',
    'Publicar solo contenido relevante a la literatura contemporánea.'
  ],
  esCreador: true,
  esMiembro: true,
};

const CommunityDetail: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex gap-6 items-center mb-4">
        <img src={community.imagen} alt={community.nombre} className="w-28 h-28 rounded object-cover" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-1">{community.nombre}</h1>
          <p className="text-gray-600 mb-1">{community.descripcion}</p>
          <span className="text-xs text-gray-400 block mb-1">{community.biblioteca}</span>
          <PlanBadge tipoPlan={community.plan.tipoPlan} capacidadInteg={community.plan.capacidadInteg} />
        </div>
        {community.esCreador ? (
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Editar</button>
        ) : community.esMiembro ? null : (
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Unirse</button>
        )}
      </div>
      <CommunityRules reglas={community.reglas} editable={community.esCreador} />
      <div className="mt-6">
        <ThreadList communityId={community.id} />
      </div>
      <div className="mt-8">
        <EventsPlaceholder />
      </div>
    </div>
  );
};

export default CommunityDetail; 