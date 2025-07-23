import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './biblioteca/admin/Sidebar';
import Dashboard from './biblioteca/admin/Dashboard';
import { Libraries } from './biblioteca/admin/Libraries';
import { Resources } from './biblioteca/admin/Resources';
import ManageUsers from './biblioteca/admin/ManageUsers';
import AdminReservations from './biblioteca/admin/AdminReservations';

const AdminApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="libraries" element={<Libraries />} />
            <Route path="resources" element={<Resources />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="reservations" element={<AdminReservations />} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminApp;