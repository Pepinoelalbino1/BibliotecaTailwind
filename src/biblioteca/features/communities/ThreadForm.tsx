import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

interface ThreadFormProps {
  onSubmit: (data: { titulo: string; subtitulo: string }) => void;
}

const ThreadForm: React.FC<ThreadFormProps> = ({ onSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!titulo.trim()) newErrors.titulo = 'El título es requerido';
    if (titulo.length > 100) newErrors.titulo = 'El título no puede exceder 100 caracteres';
    if (!subtitulo.trim()) newErrors.subtitulo = 'La descripción es requerida';
    if (subtitulo.length > 300) newErrors.subtitulo = 'La descripción no puede exceder 300 caracteres';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    onSubmit({ titulo: titulo.trim(), subtitulo: subtitulo.trim() });
    setTitulo('');
    setSubtitulo('');
    setErrors({});
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'titulo') setTitulo(value);
    if (field === 'subtitulo') setSubtitulo(value);
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleClear = () => {
    setTitulo('');
    setSubtitulo('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-group">
        <label className="form-label">Título del Hilo *</label>
        <input
          className={`form-input ${errors.titulo ? 'border-red-500' : ''}`}
          value={titulo}
          onChange={(e) => handleInputChange('titulo', e.target.value)}
          placeholder="Ej: ¿Cuál es tu libro favorito de este año?"
          maxLength={100}
        />
        <div className="flex justify-between items-center mt-1">
          {errors.titulo && <p className="text-red-500 text-sm">{errors.titulo}</p>}
          <p className="text-slate-500 text-sm ml-auto">{titulo.length}/100</p>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Descripción *</label>
        <textarea
          className={`form-textarea ${errors.subtitulo ? 'border-red-500' : ''}`}
          value={subtitulo}
          onChange={(e) => handleInputChange('subtitulo', e.target.value)}
          placeholder="Proporciona más detalles sobre el tema que quieres discutir. Esto ayudará a otros miembros a entender mejor de qué se trata..."
          rows={4}
          maxLength={300}
        />
        <div className="flex justify-between items-center mt-1">
          {errors.subtitulo && <p className="text-red-500 text-sm">{errors.subtitulo}</p>}
          <p className="text-slate-500 text-sm ml-auto">{subtitulo.length}/300</p>
        </div>
      </div>

      {/* Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h4 className="font-semibold text-blue-900 mb-2">💡 Consejos para un buen hilo:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Usa un título claro y descriptivo</li>
          <li>• Proporciona contexto suficiente en la descripción</li>
          <li>• Haz preguntas específicas para fomentar la participación</li>
          <li>• Respeta las reglas de la comunidad</li>
        </ul>
      </div>

      <div className="flex justify-end gap-3">
        <button 
          type="button" 
          onClick={handleClear}
          className="btn btn-secondary"
          disabled={!titulo && !subtitulo}
        >
          <X size={16} />
          Limpiar
        </button>
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!titulo.trim() || !subtitulo.trim()}
        >
          <Send size={16} />
          Crear Hilo
        </button>
      </div>
    </form>
  );
};

export default ThreadForm;