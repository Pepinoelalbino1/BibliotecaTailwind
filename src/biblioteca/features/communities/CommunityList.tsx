import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Users, Search, Filter } from 'lucide-react';
import PlanBadge from './PlanBadge';

// Simulación de datos
const communities = [
  {
    id: 1,
    nombre: 'Lectores Modernos',
    descripcion: 'Comunidad para amantes de la literatura contemporánea y novelas actuales.',
    imagen: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=80&q=80',
    plan: { tipoPlan: 'freemium' as const, capacidadInteg: 20 },
    biblioteca: 'Biblioteca Central',
    miembros: 18,
    hilos: 24,
    rating: 4.8
  },
  {
    id: 2,
    nombre: 'Círculo de Fantasía',
    descripcion: 'Debates y recomendaciones de fantasía épica, ciencia ficción y mundos imaginarios.',
    imagen: 'https://images.unsplash.com/photo-1518373714866-3f1478910cc0?auto=format&fit=crop&w=80&q=80',
    plan: { tipoPlan: 'pro' as const, capacidadInteg: 60 },
    biblioteca: 'Biblioteca Universitaria',
    miembros: 45,
    hilos: 67,
    rating: 4.6
  },
  {
    id: 3,
    nombre: 'Club de Historia',
    descripcion: 'Exploramos eventos históricos, biografías y documentales sobre el pasado.',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
    plan: { tipoPlan: 'master' as const, capacidadInteg: 0 },
    biblioteca: 'Biblioteca Especializada',
    miembros: 89,
    hilos: 156,
    rating: 4.9
  }
];

const CommunityList: React.FC = () => {
  // Simulación de autenticación
  const isAuthenticated = true;
  
  return (
    <div className="space-y-8 fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Comunidades</h1>
          <p className="text-xl text-slate-600">Únete a comunidades de lectores y comparte tus experiencias literarias</p>
        </div>
        {isAuthenticated && (
          <Link to="/comunidades/crear" className="btn btn-primary">
            <Plus size={20} />
            Crear Comunidad
          </Link>
        )}
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="card-body">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar comunidades..."
                className="search-input"
              />
            </div>
            
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-slate-400" />
                <select className="form-select">
                  <option value="">Todas las bibliotecas</option>
                  <option value="central">Biblioteca Central</option>
                  <option value="universitaria">Biblioteca Universitaria</option>
                  <option value="especializada">Biblioteca Especializada</option>
                </select>
              </div>
              
              <select className="form-select">
                <option value="">Todos los planes</option>
                <option value="freemium">Freemium</option>
                <option value="pro">Pro</option>
                <option value="master">Master</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Communities Grid */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-2xl font-bold text-slate-900">
            Comunidades Disponibles ({communities.length})
          </h2>
          <p className="text-slate-600">Explora y únete a comunidades que compartan tus intereses</p>
        </div>
        
        <div className="card-body">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {communities.map((community) => (
              <div key={community.id} className="card hover:scale-105 transition-all duration-300">
                <div className="card-body">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={community.imagen} 
                      alt={community.nombre} 
                      className="w-16 h-16 rounded-xl object-cover shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{community.nombre}</h3>
                        <PlanBadge tipoPlan={community.plan.tipoPlan} capacidadInteg={community.plan.capacidadInteg} />
                      </div>
                      <p className="text-slate-600 mb-3">{community.descripcion}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Users size={16} />
                          {community.miembros} miembros
                        </span>
                        <span>{community.hilos} hilos</span>
                        <span>⭐ {community.rating}/5.0</span>
                      </div>
                      <div className="text-sm text-slate-500">
                        📍 {community.biblioteca}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-500">
                      Última actividad: hace 2 horas
                    </div>
                    <Link to={`/comunidades/${community.id}`} className="btn btn-primary btn-sm">
                      {isAuthenticated ? 'Ver Detalle' : 'Unirse'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Empty State (if no communities) */}
      {communities.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">👥</div>
          <h3 className="empty-state-title">No se encontraron comunidades</h3>
          <p className="empty-state-description">
            Sé el primero en crear una comunidad para lectores
          </p>
          {isAuthenticated && (
            <Link to="/comunidades/crear" className="btn btn-primary mt-4">
              <Plus size={20} />
              Crear Primera Comunidad
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default CommunityList;