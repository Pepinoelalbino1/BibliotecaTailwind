import React, { useState } from 'react';
import { Plus, BookOpen, Users, Calendar, MapPin, Search, Filter, Download, Upload } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  type: 'book' | 'room' | 'cubicle' | 'equipment';
  location: string;
  status: 'available' | 'occupied' | 'maintenance' | 'reserved';
  capacity?: number;
  description: string;
  libraryId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const Resources: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<Resource['type'] | ''>('');
  const [selectedStatus, setSelectedStatus] = useState<Resource['status'] | ''>('');

  const [formData, setFormData] = useState({
    name: '',
    type: 'book' as Resource['type'],
    location: '',
    capacity: '',
    description: '',
    libraryId: '',
    status: 'available' as Resource['status']
  });

  // Mock data for resources
  const mockResources: Resource[] = [
    {
      id: '1',
      name: 'Sala de Estudio A',
      type: 'room',
      location: 'Piso 2 - Biblioteca Central',
      status: 'available',
      capacity: 20,
      description: 'Sala de estudio con mesas individuales y buena iluminación',
      libraryId: '1',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Cubículo 1',
      type: 'cubicle',
      location: 'Piso 1 - Biblioteca Central',
      status: 'occupied',
      capacity: 1,
      description: 'Cubículo individual para estudio privado',
      libraryId: '1',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '3',
      name: 'Proyector Multimedia',
      type: 'equipment',
      location: 'Sala de Conferencias - Biblioteca Central',
      status: 'available',
      description: 'Proyector para presentaciones y eventos',
      libraryId: '1',
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-02-10')
    },
    {
      id: '4',
      name: 'Colección Literatura Clásica',
      type: 'book',
      location: 'Estante A-1 - Biblioteca Central',
      status: 'available',
      description: 'Colección completa de literatura clásica',
      libraryId: '1',
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-20')
    },
    {
      id: '5',
      name: 'Sala de Computadoras',
      type: 'room',
      location: 'Piso 3 - Biblioteca Universitaria',
      status: 'maintenance',
      capacity: 15,
      description: 'Sala con computadoras para uso académico',
      libraryId: '2',
      createdAt: new Date('2024-02-15'),
      updatedAt: new Date('2024-02-15')
    }
  ];

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || resource.type === selectedType;
    const matchesStatus = !selectedStatus || resource.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New resource data:', formData);
    setFormData({
      name: '',
      type: 'book',
      location: '',
      capacity: '',
      description: '',
      libraryId: '',
      status: 'available'
    });
    setShowForm(false);
  };

  const getTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'book':
        return <BookOpen size={20} />;
      case 'room':
        return <Users size={20} />;
      case 'cubicle':
        return <MapPin size={20} />;
      case 'equipment':
        return <Calendar size={20} />;
      default:
        return <BookOpen size={20} />;
    }
  };

  const getTypeLabel = (type: Resource['type']) => {
    switch (type) {
      case 'book':
        return 'Libro';
      case 'room':
        return 'Sala';
      case 'cubicle':
        return 'Cubículo';
      case 'equipment':
        return 'Equipamiento';
      default:
        return 'Recurso';
    }
  };

  const getStatusLabel = (status: Resource['status']) => {
    switch (status) {
      case 'available':
        return 'Disponible';
      case 'occupied':
        return 'Ocupado';
      case 'maintenance':
        return 'Mantenimiento';
      case 'reserved':
        return 'Reservado';
      default:
        return 'Disponible';
    }
  };

  const getStatusBadgeClass = (status: Resource['status']) => {
    switch (status) {
      case 'available':
        return 'badge-success';
      case 'occupied':
        return 'badge-warning';
      case 'maintenance':
        return 'badge-danger';
      case 'reserved':
        return 'badge-primary';
      default:
        return 'badge-secondary';
    }
  };

  const renderResourceCard = (resource: Resource) => (
    <div key={resource.id} className="card hover:scale-105 transition-all duration-300">
      <div className="card-body">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                {getTypeIcon(resource.type)}
              </div>
              <div>
                <span className="badge badge-primary">{getTypeLabel(resource.type)}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{resource.name}</h3>
            <p className="text-slate-600 mb-3">{resource.description}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={16} />
                <span className="text-sm">{resource.location}</span>
              </div>
              {resource.capacity && (
                <div className="flex items-center gap-2 text-slate-600">
                  <Users size={16} />
                  <span className="text-sm">Capacidad: {resource.capacity}</span>
                </div>
              )}
            </div>
          </div>
          <div className={`badge ${getStatusBadgeClass(resource.status)}`}>
            {getStatusLabel(resource.status)}
          </div>
        </div>
        
        <div className="flex justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
          <span>Creado: {resource.createdAt.toLocaleDateString('es-ES')}</span>
          <span>Actualizado: {resource.updatedAt.toLocaleDateString('es-ES')}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Gestión de Recursos</h1>
          <p className="text-xl text-slate-600">Administra los recursos disponibles en las bibliotecas</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-secondary">
            <Download size={20} />
            Exportar
          </button>
          <button className="btn btn-secondary">
            <Upload size={20} />
            Importar
          </button>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            <Plus size={20} />
            {showForm ? 'Cancelar' : 'Añadir Recurso'}
          </button>
        </div>
      </div>

      {/* Add Resource Form */}
      {showForm && (
        <div className="card">
          <div className="card-header">
            <h3 className="text-2xl font-bold text-slate-900">Nuevo Recurso</h3>
            <p className="text-slate-600">Completa la información para registrar un nuevo recurso</p>
          </div>
          
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Nombre del Recurso</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="form-input"
                    placeholder="Ej: Sala de Estudio A"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Tipo</label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    className="form-select"
                    required
                  >
                    <option value="book">Libro</option>
                    <option value="room">Sala</option>
                    <option value="cubicle">Cubículo</option>
                    <option value="equipment">Equipamiento</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Ubicación</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="form-input"
                    placeholder="Ej: Piso 2 - Biblioteca Central"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Capacidad (opcional)</label>
                  <input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => handleInputChange('capacity', e.target.value)}
                    className="form-input"
                    placeholder="Ej: 20"
                  />
                </div>

                <div className="form-group lg:col-span-2">
                  <label className="form-label">Descripción</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="form-textarea"
                    placeholder="Descripción del recurso..."
                    rows={3}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Biblioteca</label>
                  <select
                    value={formData.libraryId}
                    onChange={(e) => handleInputChange('libraryId', e.target.value)}
                    className="form-select"
                    required
                  >
                    <option value="">Seleccionar biblioteca</option>
                    <option value="1">Biblioteca Central</option>
                    <option value="2">Biblioteca Universitaria</option>
                    <option value="3">Biblioteca Especializada</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Estado</label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="form-select"
                    required
                  >
                    <option value="available">Disponible</option>
                    <option value="occupied">Ocupado</option>
                    <option value="maintenance">Mantenimiento</option>
                    <option value="reserved">Reservado</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn btn-secondary"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Crear Recurso
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="card">
        <div className="card-body">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-slate-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as Resource['type'] | '')}
                  className="form-select"
                >
                  <option value="">Todos los tipos</option>
                  <option value="book">Libro</option>
                  <option value="room">Sala</option>
                  <option value="cubicle">Cubículo</option>
                  <option value="equipment">Equipamiento</option>
                </select>
              </div>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as Resource['status'] | '')}
                className="form-select"
              >
                <option value="">Todos los estados</option>
                <option value="available">Disponible</option>
                <option value="occupied">Ocupado</option>
                <option value="maintenance">Mantenimiento</option>
                <option value="reserved">Reservado</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Resources List */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-2xl font-bold text-slate-900">
            Recursos ({filteredResources.length} encontrados)
          </h3>
          <p className="text-slate-600">Lista completa de recursos disponibles</p>
        </div>
        
        <div className="card-body">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResources.map((resource) => renderResourceCard(resource))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">📚</div>
              <h3 className="empty-state-title">No se encontraron recursos</h3>
              <p className="empty-state-description">
                Intenta ajustar tus criterios de búsqueda o añade un nuevo recurso
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};