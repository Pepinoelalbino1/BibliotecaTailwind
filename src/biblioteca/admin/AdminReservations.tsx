import React from 'react';

const reservations = [
  { id: 1, user: 'Juan Pérez', resource: 'Sala 1', date: '2024-07-01', status: 'Activa' },
  { id: 2, user: 'Ana Gómez', resource: 'Libro: React Avanzado', date: '2024-07-02', status: 'Completada' },
  { id: 3, user: 'Carlos Ruiz', resource: 'Cubículo 3', date: '2024-07-03', status: 'Cancelada' },
];

const AdminReservations: React.FC = () => (
  <div className="space-y-8 p-6">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Ver Reservas</h1>
        <p className="text-xl text-slate-600">Consulta y gestiona las reservas realizadas en el sistema</p>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <h2 className="text-2xl font-bold text-slate-900">Reservas</h2>
        <p className="text-slate-600">Listado de reservas con acciones básicas</p>
      </div>
      <div className="card-body overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Usuario</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Recurso</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {reservations.map((res) => (
              <tr key={res.id}>
                <td className="px-6 py-4 whitespace-nowrap text-slate-900">{res.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600">{res.resource}</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600">{res.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600">{res.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="btn btn-primary btn-sm mr-2">Ver</button>
                  <button className="btn btn-danger btn-sm">Cancelar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AdminReservations; 