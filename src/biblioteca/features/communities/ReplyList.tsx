import React, { useState } from 'react';
import { ThumbsUp, Reply, User, Clock, Send } from 'lucide-react';

// Simulación de datos
const replies = [
  {
    id: 1,
    comentario: '¡Mi favorito definitivamente fue "El infinito en un junco" de Irene Vallejo! Me encantó cómo combina historia y literatura de una manera tan accesible.',
    fecha: '2024-01-16',
    autor: 'María Ruiz',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=40&q=80',
    likes: 5,
    tiempoRelativo: 'hace 3 horas'
  },
  {
    id: 2,
    comentario: 'Recomiendo mucho "La biblioteca de la medianoche" de Matt Haig. Es una reflexión hermosa sobre las decisiones de la vida y las posibilidades infinitas.',
    fecha: '2024-01-16',
    autor: 'Pedro Gómez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=40&q=80',
    likes: 3,
    tiempoRelativo: 'hace 5 horas'
  },
  {
    id: 3,
    comentario: 'Para mí fue "Klara y el Sol" de Kazuo Ishiguro. La perspectiva de la inteligencia artificial me pareció fascinante y emotiva a la vez.',
    fecha: '2024-01-15',
    autor: 'Ana Torres',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=40&q=80',
    likes: 7,
    tiempoRelativo: 'hace 1 día'
  }
];

const isAuthenticated = true;

const ReplyList: React.FC<{ threadId: number }> = ({ threadId }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [newReply, setNewReply] = useState('');
  const [likedReplies, setLikedReplies] = useState<Set<number>>(new Set());

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReply.trim()) return;
    
    console.log('Nueva respuesta:', { threadId, comentario: newReply });
    setNewReply('');
    setShowReplyForm(false);
  };

  const handleLike = (replyId: number) => {
    setLikedReplies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(replyId)) {
        newSet.delete(replyId);
      } else {
        newSet.add(replyId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold text-slate-900">
          Respuestas ({replies.length})
        </h5>
        {isAuthenticated && (
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="btn btn-primary btn-sm"
          >
            <Reply size={16} />
            {showReplyForm ? 'Cancelar' : 'Responder'}
          </button>
        )}
      </div>

      {/* Reply Form */}
      {showReplyForm && (
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmitReply} className="space-y-4">
              <div className="form-group">
                <label className="form-label">Tu respuesta</label>
                <textarea
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  className="form-textarea"
                  placeholder="Comparte tu opinión o experiencia..."
                  rows={4}
                  required
                />
                <p className="text-sm text-slate-500 mt-1">
                  Recuerda ser respetuoso y constructivo en tus comentarios
                </p>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowReplyForm(false);
                    setNewReply('');
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  disabled={!newReply.trim()}
                >
                  <Send size={16} />
                  Publicar Respuesta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Replies */}
      <div className="space-y-4">
        {replies.map((reply) => (
          <div key={reply.id} className="bg-slate-50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <img
                src={reply.avatar}
                alt={reply.autor}
                className="w-10 h-10 rounded-full object-cover shadow-md"
              />
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-slate-900">{reply.autor}</span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <Clock size={12} />
                    {reply.tiempoRelativo}
                  </span>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-3">{reply.comentario}</p>
                
                {/* Actions */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(reply.id)}
                    className={`flex items-center gap-1 text-sm transition-colors ${
                      likedReplies.has(reply.id)
                        ? 'text-blue-600 font-medium'
                        : 'text-slate-500 hover:text-blue-600'
                    }`}
                  >
                    <ThumbsUp size={16} className={likedReplies.has(reply.id) ? 'fill-current' : ''} />
                    {reply.likes + (likedReplies.has(reply.id) ? 1 : 0)}
                  </button>
                  
                  {isAuthenticated && (
                    <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors">
                      <Reply size={16} />
                      Responder
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {replies.length === 0 && (
        <div className="empty-state py-8">
          <div className="empty-state-icon">💬</div>
          <h4 className="empty-state-title">No hay respuestas aún</h4>
          <p className="empty-state-description">
            {isAuthenticated 
              ? 'Sé el primero en responder a este hilo'
              : 'Inicia sesión para participar en la conversación'
            }
          </p>
          {isAuthenticated && (
            <button
              onClick={() => setShowReplyForm(true)}
              className="btn btn-primary btn-sm mt-4"
            >
              <Reply size={16} />
              Primera Respuesta
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ReplyList;