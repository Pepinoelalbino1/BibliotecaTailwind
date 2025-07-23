import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Users, MessageCircle, Calendar, Star, Settings } from 'lucide-react';
import PlanBadge from './PlanBadge';
import CommunityRules from './CommunityRules';
import ThreadList from './ThreadList';
import EventsPlaceholder from './EventsPlaceholder';

// Simulación de datos
const community = {
  id: 1,
  nombre: 'Lectores Modernos',
  descripcion: 'Comunidad para amantes de la literatura contemporánea y novelas actuales. Compartimos reseñas, recomendaciones y debates sobre los libros más relevantes de nuestro tiempo.',
  imagen: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=120&q=80',
  plan: { tipoPlan: 'freemium' as const, capacidadInteg: 20 },
  biblioteca: 'Biblioteca Central',
  reglas: [
    'Respetar a los demás miembros en todo momento.',
    'No hacer spam ni publicaciones irrelevantes.',
    'Publicar solo contenido relevante a la literatura contemporánea.',
    'Mantener un lenguaje apropiado y constructivo.',
    'No compartir contenido con derechos de autor sin autorización.'
  ],
  esCreador: true,
  esMiembro: true,
  miembros: 18,
  hilos: 24,
  rating: 4.8,
  fechaCreacion: '2024-01-15',
  ultimaActividad: 'hace 2 horas'
};

const CommunityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('hilos');

  const tabs = [
    { id: 'hilos', label: 'Hilos', icon: MessageCircle },
    { id: 'eventos', label: 'Eventos', icon: Calendar },
    { id: 'reglas', label: 'Reglas', icon: Settings },
  ];
  
  return (
    <div className="space-y-8 fade-in">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Link to="/comunidades" className="btn btn-secondary">
          <ArrowLeft size={20} />
          Volver
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Detalle de Comunidad</h1>
          <p className="text-xl text-slate-600">Información completa y actividades de la comunidad</p>
        </div>
      </div>
      
      {/* Community Info Card */}
      <div className="card">
        <div className="card-body">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <img 
              src={community.imagen} 
              alt={community.nombre} 
              className="w-32 h-32 rounded-2xl object-cover shadow-lg"
            />
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{community.nombre}</h2>
                  <p className="text-slate-600 mb-3">{community.descripcion}</p>
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <span>📍 {community.biblioteca}</span>
                  </div>
                  <PlanBadge tipoPlan={community.plan.tipoPlan} capacidadInteg={community.plan.capacidadInteg} />
                </div>
                <div className="flex gap-3">
                  {community.esCreador ? (
                    <Link to={`/comunidades/${community.id}/editar`} className="btn btn-warning">
                      <Edit size={20} />
                      Editar
                    </Link>
                  ) : community.esMiembro ? (
                    <button className="btn btn-danger">
                      Abandonar
                    </button>
                  ) : (
                    <button className="btn btn-primary">
                      <Users size={20} />
                      Unirse
                    </button>
                  )}
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-slate-900">{community.miembros}</div>
                  <div className="text-sm text-slate-600">Miembros</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-slate-900">{community.hilos}</div>
                  <div className="text-sm text-slate-600">Hilos</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold text-slate-900">
                    <Star size={20} className="text-amber-500 fill-current" />
                    {community.rating}
                  </div>
                  <div className="text-sm text-slate-600">Valoración</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-sm font-semibold text-slate-900">Última actividad</div>
                  <div className="text-sm text-slate-600">{community.ultimaActividad}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="card">
        <div className="card-body">
          <div className="flex gap-2 border-b border-slate-200 mb-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          {activeTab === 'hilos' && <ThreadList communityId={community.id} />}
          {activeTab === 'eventos' && <EventsPlaceholder />}
          {activeTab === 'reglas' && (
            <CommunityRules reglas={community.reglas} editable={community.esCreador} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;