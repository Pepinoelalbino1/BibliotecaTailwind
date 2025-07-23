import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, BarChart3, Building2, Settings, Users, Calendar } from 'lucide-react';

const sections = [
  { key: 'dashboard', label: 'Panel de Control', icon: BarChart3, path: 'dashboard' },
  { key: 'libraries', label: 'Bibliotecas', icon: Building2, path: 'libraries' },
  { key: 'resources', label: 'Recursos', icon: Settings, path: 'resources' },
  { key: 'users', label: 'Gestionar Usuarios', icon: Users, path: 'users' },
  { key: 'reservations', label: 'Ver Reservas', icon: Calendar, path: 'reservations' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const pathSegments = location.pathname.split('/');
  const currentSection = pathSegments[pathSegments.length - 1] || 'dashboard';

  const handleSectionClick = (path: string) => {
    navigate(path);
  };

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gold-700 rounded-xl flex items-center justify-center">
            <BookOpen size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gold-700">Lima App</h1>
            <p className="text-sm text-slate-300">Panel de Administración</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4 space-y-2">
        {sections.map((section) => (
          <button
            key={section.key}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 text-left border-none bg-transparent cursor-pointer ${
              currentSection === section.key 
                ? 'bg-white text-slate-900 shadow-lg font-semibold' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => handleSectionClick(section.path)}
          >
            <section.icon size={20} />
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;