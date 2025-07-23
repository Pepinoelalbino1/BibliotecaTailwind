import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Calendar, Users, Star, MapPin } from 'lucide-react';

const featuredLibraries = [
  {
    id: 1,
    name: 'Biblioteca Nacional del Perú',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80',
    description: 'La institución bibliográfica más importante del país con más de 3 millones de volúmenes.',
    location: 'San Borja, Lima',
    rating: 4.8,
    type: 'Nacional'
  },
  {
    id: 2,
    name: 'Biblioteca Municipal de Miraflores',
    image: 'https://images.unsplash.com/photo-1467320424268-f91a16cf7c77?auto=format&fit=crop&w=600&q=80',
    description: 'Espacio cultural moderno con tecnología avanzada y programas comunitarios.',
    location: 'Miraflores, Lima',
    rating: 4.6,
    type: 'Municipal'
  },
  {
    id: 3,
    name: 'Biblioteca Municipal de San Isidro',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
    description: 'Centro de información especializado en negocios y emprendimiento.',
    location: 'San Isidro, Lima',
    rating: 4.7,
    type: 'Especializada'
  }
];

const quickActions = [
  {
    title: 'Buscar Bibliotecas',
    description: 'Encuentra bibliotecas por ubicación, tipo o servicios específicos',
    icon: Search,
    link: '/buscar',
    color: 'from-slate-700 to-gold-500'
  },
  {
    title: 'Explorar Catálogo',
    description: 'Navega por nuestra colección completa de bibliotecas',
    icon: BookOpen,
    link: '/catalogo',
    color: 'from-gold-700 to-slate-500'
  },
  {
    title: 'Hacer Reserva',
    description: 'Reserva espacios de estudio, salas y recursos',
    icon: Calendar,
    link: '/reservas',
    color: 'from-green-700 to-slate-700'
  },
  {
    title: 'Mis Reservas',
    description: 'Gestiona y revisa todas tus reservas activas',
    icon: Users,
    link: '/mis-reservas',
    color: 'from-slate-800 to-gold-700'
  }
];

const HomePage: React.FC = () => (
  <div className="space-y-12 fade-in">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-title">
        📚 Bienvenido a Lima App
      </div>
      <p className="hero-subtitle">
        Tu plataforma integral para explorar y gestionar recursos de bibliotecas en Lima
      </p>
      <div className="hero-actions">
        <Link to="/buscar" className="btn btn-primary btn-lg">
          <Search size={24} />
          Buscar Bibliotecas
        </Link>
        <Link to="/catalogo" className="btn btn-secondary btn-lg">
          <BookOpen size={24} />
          Ver Catálogo Completo
        </Link>
      </div>
    </section>

    {/* Quick Actions */}
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Acciones Rápidas</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Accede rápidamente a las funciones más utilizadas de nuestra plataforma
        </p>
      </div>
      
      <div className="grid-responsive-2 lg:grid-cols-4">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className="feature-card group"
          >
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
              <action.icon size={32} className="text-gold-100" />
            </div>
            <h3 className="feature-title">{action.title}</h3>
            <p className="feature-description">{action.description}</p>
            <div className="btn btn-primary btn-sm">
              Acceder
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Featured Libraries */}
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Bibliotecas Destacadas</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Descubre las bibliotecas más populares y mejor valoradas de nuestra red
        </p>
      </div>
      
      <div className="grid-responsive">
        {featuredLibraries.map((library) => (
          <div key={library.id} className="card overflow-hidden hover:scale-105 transition-all duration-300">
            <div className="relative">
              <img
                src={library.image}
                alt={library.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="badge badge-primary">{library.type}</span>
              </div>
            </div>
            
            <div className="card-body">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{library.name}</h3>
              
              <div className="flex items-center gap-2 text-slate-600 mb-3">
                <MapPin size={16} />
                <span className="text-sm">{library.location}</span>
              </div>
              
              <p className="text-slate-600 mb-4">{library.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-amber-500 fill-current" />
                  <span className="font-semibold text-slate-900">{library.rating}</span>
                  <span className="text-slate-500 text-sm">/5.0</span>
                </div>
                <Link to={`/biblioteca/${library.id}`} className="btn btn-primary btn-sm">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Statistics Section */}
    <section className="glass rounded-3xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestra Red en Números</h2>
        <p className="text-xl text-slate-600">
          Conectando comunidades a través del conocimiento
        </p>
      </div>
      
      <div className="grid-responsive-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-slate-700 mb-2">24+</div>
          <div className="text-slate-600">Bibliotecas Activas</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-gold-700 mb-2">150K+</div>
          <div className="text-slate-600">Libros Disponibles</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-700 mb-2">5K+</div>
          <div className="text-slate-600">Usuarios Activos</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
          <div className="text-slate-600">Satisfacción</div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;