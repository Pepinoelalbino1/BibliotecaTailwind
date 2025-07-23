import React, { useState } from 'react';
import { MapPin, Users, Clock } from 'lucide-react';

interface Library {
  id: number;
  name: string;
  location: string;
  type: string;
  status: string;
  description: string;
  capacity: number;
  operatingHours: string;
}

const SearchPage: React.FC = () => {
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [showMap, setShowMap] = useState(true);
  const [searchClicked, setSearchClicked] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const mockLibraries: Library[] = [
    {
      id: 1,
      name: 'Biblioteca Central de Lima',
      location: 'Centro Histórico, Lima',
      type: 'PUBLIC',
      status: 'ACTIVE',
      description: 'La biblioteca más grande de la ciudad con más de 100,000 volúmenes',
      capacity: 500,
      operatingHours: 'Lun-Vie: 8:00-20:00, Sáb: 9:00-18:00'
    },
    {
      id: 2,
      name: 'Biblioteca Universitaria San Marcos',
      location: 'Universidad Nacional Mayor de San Marcos',
      type: 'ACADEMIC',
      status: 'ACTIVE',
      description: 'Biblioteca especializada en investigación académica',
      capacity: 300,
      operatingHours: 'Lun-Vie: 7:00-22:00, Sáb: 8:00-17:00'
    },
    {
      id: 3,
      name: 'Biblioteca Infantil Miraflores',
      location: 'Miraflores, Lima',
      type: 'SPECIALIZED',
      status: 'ACTIVE',
      description: 'Biblioteca especializada en literatura infantil y juvenil',
      capacity: 150,
      operatingHours: 'Mar-Dom: 10:00-19:00'
    },
    {
      id: 4,
      name: 'Biblioteca Privada del Club',
      location: 'San Isidro, Lima',
      type: 'PRIVATE',
      status: 'ACTIVE',
      description: 'Biblioteca exclusiva para miembros del club',
      capacity: 100,
      operatingHours: 'Lun-Dom: 6:00-23:00'
    }
  ];

  const filteredLibraries = mockLibraries.filter(library => {
    const matchesName = library.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesLocation = library.location.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesType = filterType === 'all' || library.type === filterType;
    if (!searchClicked && !searchName && !searchLocation && filterType === 'all') return true;
    return (
      (searchName ? matchesName : true) &&
      (searchLocation ? matchesLocation : true) &&
      matchesType
    );
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
        className="card"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
              {library.name}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} /> {library.location}
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
              {library.description}
            </p>
          </div>
          <div style={{ 
            padding: '0.25rem 0.75rem', 
            borderRadius: '20px', 
            fontSize: '0.75rem', 
            fontWeight: '500',
            background: typeStyle.bg,
            color: typeStyle.color
          }}>
            {getTypeLabel(library.type)}
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gray-600)', fontSize: '0.875rem' }}>
            <Users size={16} />
            <span>Capacidad: {library.capacity} personas</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gray-600)', fontSize: '0.875rem' }}>
            <Clock size={16} />
            <span>{library.operatingHours}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
          Buscar Bibliotecas
        </h1>
        <p style={{ color: 'var(--gray-600)', margin: 0 }}>
          Encuentra la biblioteca perfecta para tus necesidades
        </p>
      </div>

      {/* Busqueda por nombre y ubicación */}
      <div className="bg-white/95 rounded-2xl shadow-lg flex flex-wrap gap-8 items-center p-8 max-w-5xl mx-auto mb-6">
        <div className="flex-1 min-w-[260px] relative">
          <label className="font-medium text-gray-700">Buscar por nombre</label>
          <span className="absolute left-3 top-10 text-xl pointer-events-none">🔍</span>
          <input
            type="text"
            placeholder="Ej: Biblioteca Central"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none mt-1"
          />
        </div>
        <div className="flex-1 min-w-[260px] relative">
          <label className="font-medium text-gray-700">Buscar por ubicación</label>
          <span className="absolute left-3 top-10 text-xl pointer-events-none">📍</span>
          <input
            type="text"
            placeholder="Ej: Centro Histórico, Miraflores..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none mt-1"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <button
            onClick={() => setSearchClicked(true)}
            className="px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold text-lg mt-8 hover:bg-blue-800 transition"
            style={{ height: '48px' }}
          >
            Buscar
          </button>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="px-6 py-2 rounded-lg border-2 border-blue-700 text-blue-700 bg-white font-semibold text-base hover:bg-blue-50 transition"
          >
            Filtros avanzados
          </button>
        </div>
      </div>
      {showAdvanced && (
        <div className="max-w-5xl mx-auto bg-white/95 rounded-xl shadow p-6 flex gap-6 items-center mt-4">
          <label className="font-medium text-gray-700">Tipo de biblioteca:</label>
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
      )}

      {/* Mapa de Google centrado en Lima */}
      <div className="w-full rounded-2xl overflow-hidden shadow bg-white mb-4">
        <div className="flex items-center justify-between px-6 pt-4 pb-2">
          <span className="font-bold text-gray-800 flex items-center gap-2 text-lg">
            <span role="img" aria-label="Ubicación" className="text-2xl">📍</span> Ubicación de Bibliotecas
          </span>
          <button
            onClick={() => setShowMap(!showMap)}
            className="px-6 py-2 rounded-lg border-2 border-blue-700 text-blue-700 bg-white font-semibold text-base hover:bg-blue-50 transition"
          >
            {showMap ? 'Ocultar mapa' : 'Mostrar mapa'}
          </button>
        </div>
        {showMap && (
          <div className="w-full h-[350px]">
            <iframe
              title="Mapa de Bibliotecas en Lima"
              width="100%"
              height="100%"
              frameBorder="0"
              className="border-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15606.07323274713!2d-77.0428!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1716240000000!5m2!1ses-419!2spe"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        )}
      </div>

      {/* Resultados bajo el título "Búsquedas frecuentes" */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Búsquedas frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLibraries.map((library) => renderLibraryCard(library))}
        </div>
        {filteredLibraries.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron bibliotecas</h3>
            <p className="text-gray-500">Intenta ajustar tus criterios de búsqueda o filtro</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage; 