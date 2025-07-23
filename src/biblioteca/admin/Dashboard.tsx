import React from 'react';
import DashboardStats from './DashboardStats';
import { TrendingUp, Activity, Clock, AlertCircle, Users, BookOpen, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Panel de Control</h1>
        <p className="text-xl text-slate-600">Bienvenido a tu sistema de gestión de bibliotecas</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Análisis de Uso */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-emerald-500 to-emerald-600">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Análisis de Uso</h3>
                <p className="text-slate-600">Métricas de rendimiento de bibliotecas</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={20} className="text-emerald-600" />
                    <span className="font-semibold text-slate-900">Préstamos de Libros</span>
                  </div>
                  <p className="text-sm text-slate-600">Este mes</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-emerald-600">1,234</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={20} className="text-blue-600" />
                    <span className="font-semibold text-slate-900">Nuevos Miembros</span>
                  </div>
                  <p className="text-sm text-slate-600">Este mes</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">156</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={20} className="text-purple-600" />
                    <span className="font-semibold text-slate-900">Reservas Activas</span>
                  </div>
                  <p className="text-sm text-slate-600">Hoy</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600">89</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actividad Reciente */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-amber-500 to-amber-600">
                <Activity size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Actividad Reciente</h3>
                <p className="text-slate-600">Últimos eventos del sistema</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-3">
            {[
              { 
                icon: Clock, 
                text: 'Nueva biblioteca "Centro Tecnológico" creada', 
                time: 'hace 2 horas', 
                iconClass: 'bg-blue-100 text-blue-600' 
              },
              { 
                icon: AlertCircle, 
                text: 'Mantenimiento programado para Biblioteca Central', 
                time: 'hace 4 horas', 
                iconClass: 'bg-amber-100 text-amber-600' 
              },
              { 
                icon: TrendingUp, 
                text: 'Récord de reservas alcanzado hoy', 
                time: 'hace 6 horas', 
                iconClass: 'bg-emerald-100 text-emerald-600' 
              },
              { 
                icon: Users, 
                text: '25 nuevos usuarios registrados', 
                time: 'hace 8 horas', 
                iconClass: 'bg-purple-100 text-purple-600' 
              },
              { 
                icon: BookOpen, 
                text: 'Actualización del catálogo completada', 
                time: 'hace 12 horas', 
                iconClass: 'bg-slate-100 text-slate-600' 
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${activity.iconClass}`}>
                  <activity.icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">{activity.text}</div>
                  <div className="text-sm text-slate-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-slate-900">Acciones Rápidas</h3>
          <p className="text-slate-600">Accede a las funciones más utilizadas</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 shadow-lg hover:shadow-xl">
              <Users size={20} />
              Gestionar Usuarios
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50 cursor-pointer bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 focus:ring-emerald-500 shadow-lg hover:shadow-xl">
              <BookOpen size={20} />
              Añadir Recursos
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 focus:ring-amber-500 shadow-lg hover:shadow-xl">
              <Calendar size={20} />
              Ver Reservas
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50 cursor-pointer bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus:ring-slate-500">
              <TrendingUp size={20} />
              Generar Reportes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;