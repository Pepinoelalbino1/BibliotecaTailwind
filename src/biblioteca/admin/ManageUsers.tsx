import React from 'react';

const users = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'Administrador' },
  { id: 2, name: 'Ana Gómez', email: 'ana@example.com', role: 'Usuario' },
  { id: 3, name: 'Carlos Ruiz', email: 'carlos@example.com', role: 'Usuario' },
];

const ManageUsers: React.FC = () => (
  <div className="space-y-8 p-6">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Gestionar Usuarios</h1>
        <p className="text-xl text-slate-600">Administra los usuarios registrados en el sistema</p>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <h2 className="text-2xl font-bold text-slate-900">Usuarios Registrados</h2>
        <p className="text-slate-600">Lista de usuarios con acciones básicas</p>
      </div>
      <div className="card-body overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Rol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-slate-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="btn btn-primary btn-sm mr-2">Ver</button>
                  <button className="btn btn-secondary btn-sm mr-2">Editar</button>
                  <button className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default ManageUsers; 