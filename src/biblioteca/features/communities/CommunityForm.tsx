import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Upload, X } from 'lucide-react';

const plans = [
  { tipoPlan: 'freemium', label: 'Freemium', capacidadInteg: 20, descripcion: 'Ideal para comunidades pequeñas' },
  { tipoPlan: 'pro', label: 'Pro', capacidadInteg: 60, descripcion: 'Para comunidades en crecimiento' },
  { tipoPlan: 'master', label: 'Master', capacidadInteg: null, descripcion: 'Sin límites de miembros' },
];

const bibliotecas = [
  { id: '1', nombre: 'Biblioteca Central' },
  { id: '2', nombre: 'Biblioteca Universitaria' },
  { id: '3', nombre: 'Biblioteca Especializada' },
  { id: '4', nombre: 'Biblioteca Municipal de Miraflores' },
];

interface CommunityFormProps {
  isEdit?: boolean;
}

const CommunityForm: React.FC<CommunityFormProps> = ({ isEdit = false }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  // Simulación de datos iniciales para edición
  const initialData = isEdit ? {
    nombre: 'Lectores Modernos',
    descripcion: 'Comunidad para amantes de la literatura contemporánea.',
    imagen: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=120&q=80',
    tipoPlan: 'freemium' as const,
    biblioteca: '1',
    categoria: 'literatura',
    esPublica: true
  } : null;

  const [formData, setFormData] = useState({
    nombre: initialData?.nombre || '',
    descripcion: initialData?.descripcion || '',
    imagen: initialData?.imagen || '',
    tipoPlan: initialData?.tipoPlan || 'freemium' as 'freemium' | 'pro' | 'master',
    biblioteca: initialData?.biblioteca || '',
    categoria: initialData?.categoria || '',
    esPublica: initialData?.esPublica ?? true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = plans.find(p => p.tipoPlan === e.target.value);
    setFormData(prev => ({ 
      ...prev, 
      tipoPlan: (selected?.tipoPlan as 'freemium' | 'pro' | 'master') || 'freemium'
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.descripcion.trim()) newErrors.descripcion = 'La descripción es requerida';
    if (!formData.biblioteca) newErrors.biblioteca = 'Selecciona una biblioteca';
    if (!formData.categoria.trim()) newErrors.categoria = 'La categoría es requerida';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Aquí iría la lógica para guardar la comunidad
    console.log('Guardando comunidad:', formData);
    navigate('/comunidades');
  };

  const selectedPlan = plans.find(p => p.tipoPlan === formData.tipoPlan);

  return (
    <div className="space-y-8 fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/comunidades')} className="btn btn-secondary">
          <ArrowLeft size={20} />
          Volver
        </button>
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {isEdit ? 'Editar Comunidad' : 'Crear Nueva Comunidad'}
          </h1>
          <p className="text-xl text-slate-600">
            {isEdit ? 'Actualiza la información de tu comunidad' : 'Completa los datos para crear tu comunidad'}
          </p>
        </div>
      </div>
      
      {/* Form */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-2xl font-bold text-slate-900">Información de la Comunidad</h2>
          <p className="text-slate-600">Todos los campos marcados con * son obligatorios</p>
        </div>
        
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información básica */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Nombre de la Comunidad *</label>
                <input 
                  className={`form-input ${errors.nombre ? 'border-red-500' : ''}`}
                  value={formData.nombre} 
                  onChange={e => handleInputChange('nombre', e.target.value)} 
                  placeholder="Ej: Lectores de Ciencia Ficción"
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Categoría *</label>
                <input 
                  className={`form-input ${errors.categoria ? 'border-red-500' : ''}`}
                  value={formData.categoria} 
                  onChange={e => handleInputChange('categoria', e.target.value)} 
                  placeholder="Ej: Literatura, Historia, Ciencia"
                />
                {errors.categoria && <p className="text-red-500 text-sm mt-1">{errors.categoria}</p>}
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Descripción *</label>
              <textarea 
                className={`form-textarea ${errors.descripcion ? 'border-red-500' : ''}`}
                value={formData.descripcion} 
                onChange={e => handleInputChange('descripcion', e.target.value)} 
                placeholder="Describe de qué trata tu comunidad, qué tipo de contenido se comparte y qué pueden esperar los miembros..."
                rows={4}
              />
              {errors.descripcion && <p className="text-red-500 text-sm mt-1">{errors.descripcion}</p>}
            </div>
            
            {/* Imagen */}
            <div className="form-group">
              <label className="form-label">Imagen de la Comunidad</label>
              <div className="flex gap-4 items-start">
                <div className="flex-1">
                  <input 
                    className="form-input" 
                    value={formData.imagen} 
                    onChange={e => handleInputChange('imagen', e.target.value)} 
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                  <p className="text-sm text-slate-500 mt-1">
                    Proporciona una URL de imagen o deja vacío para usar una imagen por defecto
                  </p>
                </div>
                {formData.imagen && (
                  <div className="relative">
                    <img 
                      src={formData.imagen} 
                      alt="Preview" 
                      className="w-20 h-20 rounded-xl object-cover shadow-md"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/80x80?text=Error';
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => handleInputChange('imagen', '')}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Plan y Biblioteca */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Plan de la Comunidad</label>
                <select className="form-select" value={formData.tipoPlan} onChange={handlePlanChange}>
                  {plans.map(p => (
                    <option key={p.tipoPlan} value={p.tipoPlan}>
                      {p.label} - {p.capacidadInteg ? `${p.capacidadInteg} miembros` : 'Ilimitado'}
                    </option>
                  ))}
                </select>
                {selectedPlan && (
                  <p className="text-sm text-slate-500 mt-1">{selectedPlan.descripcion}</p>
                )}
              </div>
              
              <div className="form-group">
                <label className="form-label">Biblioteca Asociada *</label>
                <select 
                  className={`form-select ${errors.biblioteca ? 'border-red-500' : ''}`}
                  value={formData.biblioteca} 
                  onChange={e => handleInputChange('biblioteca', e.target.value)}
                  disabled={isEdit}
                >
                  <option value="">Seleccionar biblioteca</option>
                  {bibliotecas.map(b => (
                    <option key={b.id} value={b.id}>{b.nombre}</option>
                  ))}
                </select>
                {errors.biblioteca && <p className="text-red-500 text-sm mt-1">{errors.biblioteca}</p>}
                {isEdit && (
                  <p className="text-xs text-slate-500 mt-1">
                    No se puede cambiar la biblioteca una vez creada la comunidad
                  </p>
                )}
              </div>
            </div>
            
            {/* Configuración de privacidad */}
            <div className="form-group">
              <label className="form-label">Configuración de Privacidad</label>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="privacidad"
                    checked={formData.esPublica}
                    onChange={() => handleInputChange('esPublica', true)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <div className="font-medium text-slate-900">Comunidad Pública</div>
                    <div className="text-sm text-slate-600">Cualquiera puede ver y unirse a la comunidad</div>
                  </div>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="privacidad"
                    checked={!formData.esPublica}
                    onChange={() => handleInputChange('esPublica', false)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <div className="font-medium text-slate-900">Comunidad Privada</div>
                    <div className="text-sm text-slate-600">Solo miembros invitados pueden ver y participar</div>
                  </div>
                </label>
              </div>
            </div>
            
            {/* Botones */}
            <div className="flex justify-end gap-3 pt-6 border-t border-slate-200">
              <button 
                type="button" 
                onClick={() => navigate('/comunidades')}
                className="btn btn-secondary"
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                <Save size={20} />
                {isEdit ? 'Guardar Cambios' : 'Crear Comunidad'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityForm;