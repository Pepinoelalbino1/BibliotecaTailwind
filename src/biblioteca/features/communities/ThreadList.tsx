import React from 'react';
import ThreadForm from './ThreadForm';
import ReplyList from './ReplyList';

// Simulación de datos
const threads = [
  {
    id: 1,
    titulo: '¿Libro favorito de 2023?',
    subtitulo: 'Comparte tu mejor lectura del año.',
    fecha: '2024-06-01',
    autor: 'Ana López',
  },
  {
    id: 2,
    titulo: 'Recomendaciones de autores jóvenes',
    subtitulo: '¿Qué autores nuevos recomiendan?',
    fecha: '2024-06-02',
    autor: 'Carlos Pérez',
  },
];

const isAuthenticated = true;

const ThreadList: React.FC<{ communityId: number }> = ({ communityId }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex items-center mb-2">
        <h3 className="font-semibold text-lg flex-1">Hilos de conversación</h3>
        {isAuthenticated && (
          <button className="text-blue-600 text-sm">+ Nuevo hilo</button>
        )}
      </div>
      <ul className="divide-y">
        {threads.map((t) => (
          <li key={t.id} className="py-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold">{t.titulo}</h4>
                <p className="text-gray-600 text-sm">{t.subtitulo}</p>
                <span className="text-xs text-gray-400">{t.fecha} · {t.autor}</span>
              </div>
              <button className="ml-4 px-3 py-1 bg-blue-100 text-blue-700 rounded">Ver hilo</button>
            </div>
            {/* Aquí se mostraría ReplyList si el hilo está abierto */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList; 