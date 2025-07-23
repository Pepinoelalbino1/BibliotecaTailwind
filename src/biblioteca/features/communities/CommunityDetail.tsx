import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Users } from 'lucide-react';
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
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/comunidades" className="btn btn-secondary">
          <ArrowLeft size={20} />
          Volver
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Detalle de Comunidad</h1>
      </div>
      
      <div className="card">
        <div className="card-body">
      <div className="flex gap-6 items-center mb-4">
        <img src={community.imagen} alt={community.nombre} className="w-28 h-28 rounded object-cover" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-1">{community.nombre}</h1>
          <p className="text-gray-600 mb-1">{community.descripcion}</p>
          <span className="text-xs text-gray-400 block mb-1">{community.biblioteca}</span>
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
            <Users size={16} />
            <span>Miembros activos</span>
          </div>
          <PlanBadge tipoPlan={community.plan.tipoPlan} capacidadInteg={community.plan.capacidadInteg} />
        </div>
        {community.esCreador ? (
          <button className="btn btn-warning">
            <Edit size={20} />
            Editar
          </button>
        ) : community.esMiembro ? null : (
          <button className="btn btn-primary">Unirse</button>
        )}
      </div>
        </div>
      </div>
      
      <CommunityRules reglas={community.reglas} editable={community.esCreador} />
      
      <div className="card">
        <div className="card-body">
        <ThreadList communityId={community.id} />
        </div>
      </div>
      
      <div className="card">
        <div className="card-body">
        <EventsPlaceholder />
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail; 