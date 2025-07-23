import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const ClientFooter: React.FC = () => (
  <footer className="footer">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Logo and Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <div>
              <div className="text-xl font-bold">Lima App</div>
              <div className="text-sm text-slate-300">Sistema de Bibliotecas</div>
            </div>
          </div>
          <p className="text-slate-300 max-w-md">
            Conectando comunidades con el conocimiento a través de una red moderna 
            de bibliotecas digitales y físicas en Lima.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-slate-300">
            <li><a href="/buscar" className="hover:text-white transition-colors">Buscar Bibliotecas</a></li>
            <li><a href="/catalogo" className="hover:text-white transition-colors">Catálogo</a></li>
            <li><a href="/libros" className="hover:text-white transition-colors">Libros</a></li>
            <li><a href="/reservas" className="hover:text-white transition-colors">Reservas</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@limaapp.pe</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+51 1 234-5678</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Lima, Perú</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-700 pt-6 text-center text-slate-300">
        <p>&copy; {new Date().getFullYear()} Lima App. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default ClientFooter;