import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventsPlaceholder: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      titulo: 'Club de Lectura: Novelas Contemporáneas',
      descripcion: 'Discusión mensual sobre las últimas tendencias en literatura contemporánea',
      fecha: '2024-02-15',
      hora: '18:00',
      ubicacion: 'Sala de Conferencias - Biblioteca Central',
      participantes: 12,
      maxParticipantes: 20
    },
    {
      id: 2,
      titulo: 'Taller de Escritura Creativa',
      descripcion: 'Sesión práctica para desarrollar técnicas de escritura narrativa',
      fecha: '2024-02-22',
      hora: '16:00',
      ubicacion: 'Aula 201 - Biblioteca Central',
      participantes: 8,
      maxParticipantes: 15
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Eventos de la Comunidad</h3>
        <p className="text-slate-600">Próximas actividades y encuentros presenciales</p>
      </div>

      {/* Coming Soon Notice */}
      <div className="card">
        <div className="card-body text-center py-8">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calendar size={32} />
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">Funcionalidad en Desarrollo</h4>
          <p className="text-slate-600 mb-6">
            Estamos trabajando en una experiencia completa de eventos para las comunidades. 
            Pronto podrás crear, gestionar y participar en eventos presenciales y virtuales.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium">
            🚧 Próximamente disponible
          </div>
        </div>
      </div>

      {/* Preview of Future Events */}
      <div className="card">
        <div className="card-header">
          <h4 className="text-lg font-semibold text-slate-900">Vista Previa: Próximos Eventos</h4>
          <p className="text-slate-600">Así se verán los eventos cuando la funcionalidad esté lista</p>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-slate-50 rounded-xl p-6 opacity-60">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-slate-900 mb-2">{event.titulo}</h5>
                    <p className="text-slate-600 mb-3">{event.descripcion}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{event.fecha}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{event.hora}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{event.ubicacion}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{event.participantes}/{event.maxParticipantes} participantes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    <button className="btn btn-primary btn-sm" disabled>
                      Participar
                    </button>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(event.participantes / event.maxParticipantes) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Coming Soon */}
      <div className="card">
        <div className="card-header">
          <h4 className="text-lg font-semibold text-slate-900">Funcionalidades Planificadas</h4>
          <p className="text-slate-600">Características que estarán disponibles en futuras versiones</p>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar size={16} />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900 mb-1">Crear Eventos</h5>
                <p className="text-sm text-slate-600">Los moderadores podrán crear y gestionar eventos</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users size={16} />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900 mb-1">Inscripciones</h5>
                <p className="text-sm text-slate-600">Sistema de registro y confirmación de asistencia</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
              <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900 mb-1">Recordatorios</h5>
                <p className="text-sm text-slate-600">Notificaciones automáticas antes de los eventos</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
              <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900 mb-1">Ubicaciones</h5>
                <p className="text-sm text-slate-600">Integración con mapas y direcciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPlaceholder;