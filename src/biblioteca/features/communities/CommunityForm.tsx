import React, { useState } from 'react';

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

  return (
    <form className="bg-white rounded shadow p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{isEdit ? 'Editar comunidad' : 'Crear nueva comunidad'}</h2>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Nombre</label>
        <input className="border rounded px-2 py-1 w-full" value={nombre} onChange={e => setNombre(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <textarea className="border rounded px-2 py-1 w-full" value={descripcion} onChange={e => setDescripcion(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Imagen (URL)</label>
        <input className="border rounded px-2 py-1 w-full" value={imagen} onChange={e => setImagen(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Plan</label>
        <select className="border rounded px-2 py-1 w-full" value={tipoPlan} onChange={handlePlanChange}>
          {plans.map(p => (
            <option key={p.tipoPlan} value={p.tipoPlan}>{p.label}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Capacidad máxima de integrantes</label>
        <input
          className="border rounded px-2 py-1 w-full"
          value={capacidadInteg === null ? 'Ilimitado' : capacidadInteg}
          readOnly
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Biblioteca asociada</label>
        <input className="border rounded px-2 py-1 w-full bg-gray-100" value={biblioteca} readOnly />
        {isEdit && <span className="text-xs text-gray-500">No se puede cambiar la biblioteca una vez creada.</span>}
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">{isEdit ? 'Guardar cambios' : 'Crear comunidad'}</button>
    </form>
  );
};

export default CommunityForm; 