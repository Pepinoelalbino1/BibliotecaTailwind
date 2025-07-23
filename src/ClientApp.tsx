import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './biblioteca/libraries/HomePage';
import LoginPage from './biblioteca/auth/LoginPage';
import SignupPage from './biblioteca/auth/SignupPage';
import LibrariesPage from './biblioteca/libraries/LibrariesPage';
import SearchPage from './biblioteca/libraries/SearchPage';
import CatalogPage from './biblioteca/libraries/CatalogPage';
import BooksPage from './biblioteca/books/BooksPage';
import LibraryDetailPage from './biblioteca/libraries/LibraryDetailPage';
import ReservationsPage from './biblioteca/reservations/ReservationsPage';
import MyReservationsPage from './biblioteca/reservations/MyReservationsPage';
import ClientHeader from './biblioteca/shared/ClientHeader';
import ClientFooter from './biblioteca/shared/ClientFooter';

const ClientApp: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientHeader />
      <main className="flex-1 max-w-7xl mx-auto py-4 px-2 w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/bibliotecas" element={<LibrariesPage />} />
          <Route path="/buscar" element={<SearchPage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/libros" element={<BooksPage />} />
          <Route path="/biblioteca/:id" element={<LibraryDetailPage />} />
          <Route path="/reservas" element={<ReservationsPage />} />
          <Route path="/mis-reservas" element={<MyReservationsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <ClientFooter />
    </div>
  );
};

export default ClientApp; 