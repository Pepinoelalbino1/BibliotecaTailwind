import React, { useState } from 'react';

interface Reservation {
  id: number;
  title?: string;
  author?: string;
  returnDate?: string;
  number?: string;
  date?: string;
  time?: string;
  name?: string;
  status: string;
}

interface MockReservations {
  books: Reservation[];
  cubicles: Reservation[];
  rooms: Reservation[];
}

const MyReservationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('books');

  const tabs = [
    { id: 'books', label: 'Libros', icon: '📚' },
    { id: 'cubicles', label: 'Cubículos', icon: '👤' },
    { id: 'rooms', label: 'Salas', icon: '🖥️' },
  ];

  const mockReservations: MockReservations = {
    books: [
      { id: 1, title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien', returnDate: '2024-01-15', status: 'active' },
      { id: 2, title: '1984', author: 'George Orwell', returnDate: '2024-01-20', status: 'active' },
    ],
    cubicles: [
      { id: 1, number: 'A-12', date: '2024-01-10', time: '14:00-16:00', status: 'confirmed' },
    ],
    rooms: [
      { id: 1, name: 'Sala de Estudio 1', date: '2024-01-12', time: '10:00-12:00', status: 'confirmed' },
    ]
  };

  const renderReservationCard = (reservation: Reservation, type: string) => (
    <div 
      key={reservation.id}
      className="bg-white/80 backdrop-blur rounded-xl border border-white/20 shadow p-6 mb-4"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {type === 'books' && (
            <>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">{reservation.title}</h4>
              <p className="text-sm text-slate-600 mb-2">Autor: {reservation.author}</p>
              <p className="text-sm text-slate-600 m-0">Fecha de devolución: {reservation.returnDate}</p>
            </>
          )}
          {type === 'cubicles' && (
            <>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Cubículo {reservation.number}</h4>
              <p className="text-sm text-slate-600 mb-2">Fecha: {reservation.date}</p>
              <p className="text-sm text-slate-600 m-0">Horario: {reservation.time}</p>
            </>
          )}
          {type === 'rooms' && (
            <>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">{reservation.name}</h4>
              <p className="text-sm text-slate-600 mb-2">Fecha: {reservation.date}</p>
              <p className="text-sm text-slate-600 m-0">Horario: {reservation.time}</p>
            </>
          )}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${reservation.status === 'active' || reservation.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {reservation.status === 'active' ? 'Activa' : 
           reservation.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Mis Reservas</h1>
        <p className="text-slate-600 m-0">Gestiona todas tus reservas de libros, cubículos y salas</p>
      </div>
      {/* Tab */}
      <div className="flex gap-2 border-b border-gray-200 pb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition text-base ${activeTab === tab.id ? 'bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow font-bold' : 'bg-transparent text-gray-700'}`}
          >
            <span className="text-xl">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      {/* Contenido */}
      <div className="flex flex-col gap-4">
        {mockReservations[activeTab as keyof MockReservations]?.length > 0 ? (
          mockReservations[activeTab as keyof MockReservations].map((reservation: Reservation) => 
            renderReservationCard(reservation, activeTab)
          )
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-4xl mb-2">📋</div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No tienes reservas de {tabs.find(t => t.id === activeTab)?.label.toLowerCase()}</h3>
            <p className="text-slate-500">Realiza una nueva reserva para verla aquí</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReservationsPage; 