import React, { useState } from 'react';
import LibraryCard from '../libraries/LibraryCard';
import { Library, LibraryType, LibraryStatus } from '../../core/domain/models/Library';
import { Plus, Search, Filter, Download, Upload } from 'lucide-react';

export const Libraries: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<LibraryType | ''>('');
  const [selectedStatus, setSelectedStatus] = useState<LibraryStatus | ''>('');

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    type: LibraryType.Public,
    capacity: '',
    phone: '',
    email: '',
    website: '',
    status: LibraryStatus.Active
  });

  // Mock data for libraries
  const mockLibraries: Library[] = [
    {
      id: '1',
      name: 'Biblioteca Central',
      location: 'Centro de Lima',
      type: LibraryType.Public,
      capacity: 500,
      status: LibraryStatus.Active,
      contactInfo: {
        phone: '+51 1 234-5678',
        email: 'central@biblioteca.lima',
        website: 'www.bibliotecacentral.lima'
      },
      operatingHours: {
        monday: { open: '08:00', close: '20:00', isClosed: false },
        tuesday: { open: '08:00', close: '20:00', isClosed: false },
        wednesday: { open: '08:00', close: '20:00', isClosed: false },
        thursday: { open: '08:00', close: '20:00', isClosed: false },
        friday: { open: '08:00', close: '18:00', isClosed: false },
        saturday: { open: '09:00', close: '17:00', isClosed: false },
        sunday: { open: '09:00', close: '17:00', isClosed: false }
      },
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Biblioteca Universitaria',
      location: 'San Isidro',
      type: LibraryType.Academic,
      capacity: 300,
      status: LibraryStatus.Active,
      contactInfo: {
        phone: '+51 1 345-6789',
        email: 'universitaria@biblioteca.lima',
        website: 'www.bibliotecauni.lima'
      },
      operatingHours: {
        monday: { open: '07:00', close: '22:00', isClosed: false },
        tuesday: { open: '07:00', close: '22:00', isClosed: false },
        wednesday: { open: '07:00', close: '22:00', isClosed: false },
        thursday: { open: '07:00', close: '22:00', isClosed: false },
        friday: { open: '07:00', close: '20:00', isClosed: false },
        saturday: { open: '08:00', close: '18:00', isClosed: false },
        sunday: { open: '08:00', close: '18:00', isClosed: false }
      },
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-02-10')
    },
    {
      id: '3',
      name: 'Biblioteca Especializada',
      location: 'Miraflores',
      type: LibraryType.Specialized,
      capacity: 150,
      status: LibraryStatus.Maintenance,
      contactInfo: {
        phone: '+51 1 456-7890',
        email: 'especializada@biblioteca.lima',
        website: 'www.bibliotecaesp.lima'
      },
      operatingHours: {
        monday: { open: '09:00', close: '18:00', isClosed: false },
        tuesday: { open: '09:00', close: '18:00', isClosed: false },
        wednesday: { open: '09:00', close: '18:00', isClosed: false },
        thursday: { open: '09:00', close: '18:00', isClosed: false },
        friday: { open: '09:00', close: '17:00', isClosed: false },
        saturday: { open: '10:00', close: '16:00', isClosed: false },
        sunday: { open: '10:00', close: '16:00', isClosed: false }
      },
      createdAt: new Date('2024-03-05'),
      updatedAt: new Date('2024-03-05')
    }
  ];

  const filteredLibraries = mockLibraries.filter(library => {
    const matchesSearch = library.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         library.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || library.type === selectedType;
    const matchesStatus = !selectedStatus || library.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New library data:', formData);
    setFormData({
      name: '',
      location: '',
      type: LibraryType.Public,
      capacity: '',
      phone: '',
      email: '',
      website: '',
      status: LibraryStatus.Active
    });
    setShowForm(false);
  };

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Gestión de Bibliotecas</h1>
          <p className="text-xl text-slate-600">Administra las bibliotecas del sistema</p>
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
            {showForm ? 'Cancelar' : 'Añadir Biblioteca'}
          </button>
        </div>
      </div>

      {/* Add Library Form */}
      {showForm && (
        <div className="card">
          <div className="card-header">
            <h3 className="text-2xl font-bold text-slate-900">Nueva Biblioteca</h3>
            <p className="text-slate-600">Completa la información para registrar una nueva biblioteca</p>
          </div>
          
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Nombre de la Biblioteca</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="form-input"
                    placeholder="Ej: Biblioteca Central"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Ubicación</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="form-input"
                    placeholder="Ej: Centro de Lima"
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
                    <option value={LibraryType.Public}>Pública</option>
                    <option value={LibraryType.Academic}>Académica</option>
                    <option value={LibraryType.Private}>Privada</option>
                    <option value={LibraryType.Specialized}>Especializada</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Capacidad</label>
                  <input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => handleInputChange('capacity', e.target.value)}
                    className="form-input"
                    placeholder="Ej: 500"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="form-input"
                    placeholder="Ej: +51 1 234-5678"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-input"
                    placeholder="Ej: correo@biblioteca.lima"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Sitio Web</label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="form-input"
                    placeholder="Ej: www.biblioteca.lima"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Estado</label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="form-select"
                    required
                  >
                    <option value={LibraryStatus.Active}>Activa</option>
                    <option value={LibraryStatus.Inactive}>Inactiva</option>
                    <option value={LibraryStatus.Maintenance}>Mantenimiento</option>
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
                <button type="submit" className="btn btn-primary">
                  Guardar Biblioteca
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
                placeholder="Buscar bibliotecas..."
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
                  onChange={(e) => setSelectedType(e.target.value as LibraryType | '')}
                  className="form-select"
                >
                  <option value="">Todos los tipos</option>
                  <option value={LibraryType.Public}>Pública</option>
                  <option value={LibraryType.Academic}>Académica</option>
                  <option value={LibraryType.Private}>Privada</option>
                  <option value={LibraryType.Specialized}>Especializada</option>
                </select>
              </div>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as LibraryStatus | '')}
                className="form-select"
              >
                <option value="">Todos los estados</option>
                <option value={LibraryStatus.Active}>Activa</option>
                <option value={LibraryStatus.Inactive}>Inactiva</option>
                <option value={LibraryStatus.Maintenance}>Mantenimiento</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Libraries List */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-2xl font-bold text-slate-900">
            Bibliotecas Registradas ({filteredLibraries.length})
          </h2>
          <p className="text-slate-600">Lista completa de bibliotecas en el sistema</p>
        </div>
        
        <div className="card-body">
          {filteredLibraries.length > 0 ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {filteredLibraries.map((library) => (
                <LibraryCard key={library.id} library={library} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🏛️</div>
              <h3 className="empty-state-title">No se encontraron bibliotecas</h3>
              <p className="empty-state-description">
                Intenta ajustar tus criterios de búsqueda o añade una nueva biblioteca
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};