import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Calendar, User, LogIn, UserPlus } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Inicio', icon: BookOpen },
  { to: '/buscar', label: 'Buscar', icon: Search },
  { to: '/libros', label: 'Libros', icon: BookOpen },
  { to: '/reservas', label: 'Reservas', icon: Calendar },
  { to: '/mis-reservas', label: 'Mis Reservas', icon: User },
  { to: '/comunidades', label: 'Comunidades', icon: UserPlus }, // Nuevo link
];

const authLinks = [
  { to: '/login', label: 'Iniciar Sesión', icon: LogIn },
  { to: '/signup', label: 'Registrarse', icon: UserPlus },
];

const ClientHeader: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="header sticky top-0 z-40">
      <nav className="header-nav max-w-7xl mx-auto">
        <Link to="/" className="header-logo">
          <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-gold-500 rounded-xl flex items-center justify-center">
            <BookOpen size={24} className="text-gold-100" />
          </div>
          <div>
            <div className="text-xl font-bold">Lima App</div>
            <div className="text-xs text-slate-300">Sistema de Bibliotecas</div>
          </div>
        </Link>
        
        <div className="header-links">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'nav-link-active' : ''} flex items-center gap-2`}
            >
              <link.icon size={18} />
              {link.label}
            </Link>
          ))}
          
          <div className="hidden md:block w-px h-6 bg-white/20 mx-2"></div>
          
          {authLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'nav-link-active' : ''} flex items-center gap-2`}
            >
              <link.icon size={18} />
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default ClientHeader;