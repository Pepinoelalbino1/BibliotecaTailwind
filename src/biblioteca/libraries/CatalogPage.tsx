import React, { useState } from 'react';
import { MapPin, Users, Star, BookOpen, Clock } from 'lucide-react';

interface Library {
  id: number;
  name: string;
  location: string;
  type: string;
  status: string;
  description: string;
  capacity: number;
  operatingHours: string;
  booksCount: number;
  rating: number;
}

const CatalogPage: React.FC = () => {
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const mockLibraries: Library[] = [
    {
      id: 1,
      name: 'Biblioteca Central de Lima',
      location: 'Centro Histórico, Lima',
      type: 'PUBLIC',
      status: 'ACTIVE',
      description: 'La biblioteca más grande de la ciudad con más de 100,000 volúmenes y servicios especializados',
      capacity: 500,
      operatingHours: 'Lun-Vie: 8:00-20:00, Sáb: 9:00-18:00',
      booksCount: 100000,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Biblioteca Universitaria San Marcos',
      location: 'Universidad Nacional Mayor de San Marcos',
      type: 'ACADEMIC',
      status: 'ACTIVE',
      description: 'Biblioteca especializada en investigación académica con recursos digitales avanzados',
      capacity: 300,
      operatingHours: 'Lun-Vie: 7:00-22:00, Sáb: 8:00-17:00',
      booksCount: 75000,
      rating: 4.6
    },
    {
      id: 3,
      name: 'Biblioteca Infantil Miraflores',
      location: 'Miraflores, Lima',
      type: 'SPECIALIZED',
      status: 'ACTIVE',
      description: 'Biblioteca especializada en literatura infantil y juvenil con actividades educativas',
      capacity: 150,
      operatingHours: 'Mar-Dom: 10:00-19:00',
      booksCount: 25000,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Biblioteca Privada del Club',
      location: 'San Isidro, Lima',
      type: 'PRIVATE',
      status: 'ACTIVE',
      description: 'Biblioteca exclusiva para miembros del club con colección de libros raros',
      capacity: 100,
      operatingHours: 'Lun-Dom: 6:00-23:00',
      booksCount: 15000,
      rating: 4.7
    },
    {
      id: 5,
      name: 'Biblioteca Municipal de Barranco',
      location: 'Barranco, Lima',
      type: 'PUBLIC',
      status: 'ACTIVE',
      description: 'Biblioteca municipal con enfoque en arte y cultura local',
      capacity: 200,
      operatingHours: 'Lun-Sáb: 9:00-18:00',
      booksCount: 35000,
      rating: 4.5
    },
    {
      id: 6,
      name: 'Biblioteca de Ciencias PUCP',
      location: 'Pontificia Universidad Católica del Perú',
      type: 'ACADEMIC',
      status: 'ACTIVE',
      description: 'Biblioteca especializada en ciencias e ingeniería con laboratorios de cómputo',
      capacity: 400,
      operatingHours: 'Lun-Vie: 8:00-21:00, Sáb: 9:00-16:00',
      booksCount: 80000,
      rating: 4.4
    }
  ];

  const filteredAndSortedLibraries = mockLibraries
    .filter(library => filterType === 'all' || library.type === filterType)
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'booksCount':
          return b.booksCount - a.booksCount;
        default:
          return 0;
      }
    });

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'PUBLIC': return 'Pública';
      case 'ACADEMIC': return 'Académica';
      case 'PRIVATE': return 'Privada';
      case 'SPECIALIZED': return 'Especializada';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PUBLIC': return { bg: 'rgba(74, 144, 226, 0.1)', color: 'var(--icon-blue)' };
      case 'ACADEMIC': return { bg: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' };
      case 'PRIVATE': return { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' };
      case 'SPECIALIZED': return { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' };
      default: return { bg: 'rgba(107, 114, 128, 0.1)', color: '#6b7280' };
    }
  };

  const renderLibraryCard = (library: Library) => {
    const typeStyle = getTypeColor(library.type);
    
    return (
      <div 
        key={library.id}
        className="bg-white/80 backdrop-blur rounded-xl border border-white/20 transition-all cursor-pointer shadow hover:bg-white/90 hover:shadow-lg p-6 mb-4"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{library.name}</h3>
            <p className="text-sm text-slate-600 mb-2 flex items-center gap-2"><MapPin size={16} /> {library.location}</p>
            <p className="text-sm text-slate-600 m-0">{library.description}</p>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold" style={{background: typeStyle.bg, color: typeStyle.color}}>
            {getTypeLabel(library.type)}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-sm text-slate-600">
            <span className="flex items-center gap-1"><Users size={16} /> Capacidad: {library.capacity} personas</span>
            <span className="flex items-center gap-1"><Star size={16} /> {library.rating}/5.0</span>
          </div>
          <div className="flex justify-between items-center text-sm text-slate-600">
            <span className="flex items-center gap-1"><BookOpen size={16} /> {library.booksCount.toLocaleString()} libros</span>
            <span className="flex items-center gap-1"><Clock size={16} /> {library.operatingHours}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Catálogo de Bibliotecas</h1>
        <p className="text-slate-600 m-0">Explora todas las bibliotecas disponibles en nuestra red</p>
      </div>

      {/* Filtros y Orden */}
      <div className="flex flex-wrap gap-4 items-center bg-white/95 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-4">
        <div className="flex gap-2 items-center">
          <span className="text-xl">🔧</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 text-base focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="all">Todos los Tipos</option>
            <option value="PUBLIC">Pública</option>
            <option value="ACADEMIC">Académica</option>
            <option value="PRIVATE">Privada</option>
            <option value="SPECIALIZED">Especializada</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-xl">📊</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 text-base focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="name">Ordenar por Nombre</option>
            <option value="rating">Ordenar por Calificación</option>
            <option value="booksCount">Ordenar por Número de Libros</option>
          </select>
        </div>
      </div>

      {/* Resultados */}
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 1rem 0' }}>
          {filteredAndSortedLibraries.length} bibliotecas encontradas
        </h3>
        <div className="libraries-grid">
          {filteredAndSortedLibraries.map((library) => renderLibraryCard(library))}
        </div>
      </div>

      {filteredAndSortedLibraries.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">
            <span style={{ fontSize: '2rem' }}>📚</span>
          </div>
          <h3 className="empty-state-title">No se encontraron bibliotecas</h3>
          <p className="empty-state-description">
            Intenta ajustar tus criterios de filtro
          </p>
        </div>
      )}
    </div>
  );
};

export default CatalogPage; 