import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../../../biblioteca/admin/Sidebar';
import Dashboard from '../../../biblioteca/admin/Dashboard';
import Libraries from '../../../biblioteca/admin/Libraries';
import Resources from '../../../biblioteca/admin/Resources';

const AdminApp: React.FC = () => {
  return (
    <div className="app">
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="libraries" element={<Libraries />} />
            <Route path="resources" element={<Resources />} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminApp; 