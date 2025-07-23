import React, { useState } from 'react';
import { Plus, MessageCircle, User, Clock, ThumbsUp, Eye } from 'lucide-react';
import ThreadForm from './ThreadForm';
import ReplyList from './ReplyList';

// Simulación de datos
const threads = [
  {
    id: 1,
    titulo: '¿Cuál fue tu libro favorito de 2024?',
    subtitulo: 'Comparte tu mejor lectura del año y cuéntanos por qué te marcó tanto.',
    fecha: '2024-01-15',
    autor: 'Ana López',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=40&q=80',
    respuestas: 12,
    likes: 8,
    vistas: 45,
    ultimaActividad: 'hace 2 horas',
    estaAbierto: false
  },
  {
    id: 2,
    titulo: 'Recomendaciones de autores contemporáneos',
    subtitulo: '¿Qué autores nuevos han descubierto recientemente? Compartamos descubrimientos.',
    fecha: '2024-01-12',
    autor: 'Carlos Pérez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=40&q=80',
    respuestas: 7,
    likes: 15,
    vistas: 89,
    ultimaActividad: 'hace 5 horas',
    estaAbierto: false
  },
  {
    id: 3,
    titulo: 'Debate: ¿Los libros digitales vs físicos?',
    subtitulo: 'Hablemos sobre las ventajas y desventajas de cada formato de lectura.',
    fecha: '2024-01-10',
    autor: 'María González',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=40&q=80',
    respuestas: 23,
    likes: 19,
    vistas: 156,
    ultimaActividad: 'hace 1 día',
    estaAbierto: false
  }
];

const isAuthenticated = true;

const ThreadList: React.FC<{ communityId: number }> = ({ communityId }) => {
  const [showForm, setShowForm] = useState(false);
  const [openThread, setOpenThread] = useState<number | null>(null);

  const handleCreateThread = (data: { titulo: string; subtitulo: string }) => {
    console.log('Creando nuevo hilo:', data);
    setShowForm(false);
  };

  const toggleThread = (threadId: number) => {
    setOpenThread(openThread === threadId ? null : threadId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Hilos de Conversación</h3>
          <p className="text-slate-600">Participa en las discusiones de la comunidad</p>
        </div>
        {isAuthenticated && (
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary btn-sm"
          >
            <Plus size={16} />
            {showForm ? 'Cancelar' : 'Nuevo Hilo'}
          </button>
        )}
      </div>

      {/* Create Thread Form */}
      {showForm && (
        <div className="card">
          <div className="card-header">
            <h4 className="text-lg font-semibold text-slate-900">Crear Nuevo Hilo</h4>
            <p className="text-slate-600">Inicia una nueva conversación en la comunidad</p>
          </div>
          <div className="card-body">
            <ThreadForm onSubmit={handleCreateThread} />
          </div>
        </div>
      )}

      {/* Threads List */}
      <div className="space-y-4">
        {threads.map((thread) => (
          <div key={thread.id} className="card hover:shadow-lg transition-all duration-300">
            <div className="card-body">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <img 
                  src={thread.avatar} 
                  alt={thread.autor}
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{thread.titulo}</h4>
                      <p className="text-slate-600 mb-2">{thread.subtitulo}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {thread.autor}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {thread.fecha}
                        </span>
                        <span>Última actividad: {thread.ultimaActividad}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <MessageCircle size={16} />
                        {thread.respuestas} respuestas
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp size={16} />
                        {thread.likes} likes
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={16} />
                        {thread.vistas} vistas
                      </span>
                    </div>
                    
                    <button
                      onClick={() => toggleThread(thread.id)}
                      className="btn btn-primary btn-sm"
                    >
                      {openThread === thread.id ? 'Ocultar' : 'Ver Hilo'}
                    </button>
                  </div>
                  
                  {/* Replies */}
                  {openThread === thread.id && (
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <ReplyList threadId={thread.id} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {threads.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">💬</div>
          <h4 className="empty-state-title">No hay hilos de conversación</h4>
          <p className="empty-state-description">
            {isAuthenticated 
              ? 'Sé el primero en iniciar una conversación en esta comunidad'
              : 'Inicia sesión para participar en las conversaciones'
            }
          </p>
          {isAuthenticated && (
            <button 
              onClick={() => setShowForm(true)}
              className="btn btn-primary mt-4"
            >
              <Plus size={20} />
              Crear Primer Hilo
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ThreadList;