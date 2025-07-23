import React, { useState } from 'react';

interface ReservationForm {
  type: string;
  date: string;
  time: string;
  duration: string;
  notes: string;
}

interface Reservation {
  id: number;
  type: string;
  name: string;
  date: string;
  time: string;
  duration: string;
  status: string;
  notes?: string;
}

const ReservationsPage: React.FC = () => {
  const [formData, setFormData] = useState<ReservationForm>({
    type: '',
    date: '',
    time: '',
    duration: '',
    notes: ''
  });

  const mockReservations: Reservation[] = [
    {
      id: 1,
      type: 'cubicle',
      name: 'Cubículo A-12',
      date: '2024-01-15',
      time: '14:00',
      duration: '2 horas',
      status: 'confirmed',
      notes: 'Cerca de la ventana'
    },
    {
      id: 2,
      type: 'room',
      name: 'Sala de Estudio 1',
      date: '2024-01-16',
      time: '10:00',
      duration: '3 horas',
      status: 'pending',
      notes: 'Para grupo de estudio'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reserva enviada:', formData);
    // Aqui se procesaría la reserva
  };

  const handleInputChange = (field: keyof ReservationForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' };
      case 'pending': return { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' };
      case 'cancelled': return { bg: 'rgba(220, 53, 69, 0.1)', color: '#dc3545' };
      default: return { bg: 'rgba(107, 114, 128, 0.1)', color: '#6b7280' };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmada';
      case 'pending': return 'Pendiente';
      case 'cancelled': return 'Cancelada';
      default: return status;
    }
  };

  const renderReservationCard = (reservation: Reservation) => {
    const statusStyle = getStatusColor(reservation.status);
    return (
      <div 
        key={reservation.id}
        className="bg-white/80 backdrop-blur rounded-xl border border-white/20 shadow p-6 mb-4"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{reservation.name}</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-slate-600 m-0">📅 {reservation.date} a las {reservation.time}</p>
              <p className="text-sm text-slate-600 m-0">⏱️ Duración: {reservation.duration}</p>
              {reservation.notes && (
                <p className="text-sm text-slate-600 m-0">📝 {reservation.notes}</p>
              )}
            </div>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold" style={{background: statusStyle.bg, color: statusStyle.color}}>
            {getStatusLabel(reservation.status)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Reservar Espacios</h1>
        <p className="text-slate-600 m-0">Reserva cubículos y salas para estudiar o trabajar</p>
      </div>
      {/* Formulario */}
      <div className="bg-white/80 backdrop-blur rounded-xl border border-white/20 shadow p-8 mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Nueva Reserva</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de espacio</label>
              <select
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              >
                <option value="">Selecciona</option>
                <option value="cubicle">Cubículo</option>
                <option value="room">Sala</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Fecha</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Hora</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Duración</label>
              <select
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              >
                <option value="">Selecciona</option>
                <option value="1 hora">1 hora</option>
                <option value="2 horas">2 horas</option>
                <option value="3 horas">3 horas</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Notas</label>
            <input
              type="text"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Ej: Cerca de la ventana"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded-md transition-colors">Reservar</button>
          </div>
        </form>
      </div>
      {/* Reservas */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Tus Reservas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockReservations.map((reservation) => renderReservationCard(reservation))}
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage; 