import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

const plans = [
  { tipoPlan: 'freemium', label: 'Freemium', capacidadInteg: 20 },
  { tipoPlan: 'pro', label: 'Pro', capacidadInteg: 60 },
  { tipoPlan: 'master', label: 'Master Master DU', capacidadInteg: null },
];

interface CommunityFormProps {
  isEdit?: boolean;
  initialData?: {
    nombre: string;
    descripcion: string;
    imagen: string;
    tipoPlan: 'freemium' | 'pro' | 'master';
    capacidadInteg: number | null;
    biblioteca: string;
  };
}

const CommunityForm: React.FC<CommunityFormProps> = ({ isEdit = false, initialData }) => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState(initialData?.nombre || '');
  const [descripcion, setDescripcion] = useState(initialData?.descripcion || '');
  const [imagen, setImagen] = useState(initialData?.imagen || '');
  const [tipoPlan, setTipoPlan] = useState<'freemium' | 'pro' | 'master'>(initialData?.tipoPlan || 'freemium');
  const [capacidadInteg, setCapacidadInteg] = useState<number | null>(initialData?.capacidadInteg ?? 20);
  const [biblioteca] = useState(initialData?.biblioteca || 'Biblioteca Central');

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = plans.find(p => p.tipoPlan === e.target.value);
    setTipoPlan((selected?.tipoPlan as 'freemium' | 'pro' | 'master') || 'freemium');
    setCapacidadInteg(selected?.capacidadInteg ?? 20);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la comunidad
    console.log('Guardando comunidad:', {
      nombre,
      descripcion,
      imagen,
      tipoPlan,
      capacidadInteg,
      biblioteca
    });
    navigate('/comunidades');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/comunidades')} className="btn btn-secondary">
          <ArrowLeft size={20} />
          Volver
        </button>
        <h1 className="text-3xl font-bold text-slate-900">
          {isEdit ? 'Editar Comunidad' : 'Crear Nueva Comunidad'}
        </h1>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="text-2xl font-bold text-slate-900">Información de la Comunidad</h2>
          <p className="text-slate-600">Completa los datos para {isEdit ? 'actualizar' : 'crear'} tu comunidad</p>
        </div>
        
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input 
                  className="form-input" 
                  value={nombre} 
                  onChange={e => setNombre(e.target.value)} 
                  placeholder="Ej: Lectores de Ciencia Ficción"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Plan</label>
                <select className="form-select" value={tipoPlan} onChange={handlePlanChange}>
                  {plans.map(p => (
                    <option key={p.tipoPlan} value={p.tipoPlan}>{p.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Descripción</label>
              <textarea 
                className="form-textarea" 
                value={descripcion} 
                onChange={e => setDescripcion(e.target.value)} 
                placeholder="Describe de qué trata tu comunidad..."
                rows={4}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Imagen (URL)</label>
              <input 
                className="form-input" 
                value={imagen} 
                onChange={e => setImagen(e.target.value)} 
                placeholder="https://ejemplo.com/imagen.jpg"
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Capacidad máxima de integrantes</label>
                <input
                  className="form-input bg-slate-50"
                  value={capacidadInteg === null ? 'Ilimitado' : capacidadInteg}
                  readOnly
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Biblioteca asociada</label>
                <input className="form-input bg-slate-50" value={biblioteca} readOnly />
                {isEdit && <p className="text-xs text-slate-500 mt-1">No se puede cambiar la biblioteca una vez creada.</p>}
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
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