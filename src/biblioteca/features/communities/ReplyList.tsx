import React from 'react';

// Simulación de datos
const replies = [
  {
    id: 1,
    comentario: '¡Mi favorito fue "El infinito en un junco"!',
    fecha: '2024-06-03',
    autor: 'María Ruiz',
  },
  {
    id: 2,
    comentario: 'Recomiendo "La biblioteca de la medianoche".',
    fecha: '2024-06-04',
    autor: 'Pedro Gómez',
  },
];

const ReplyList: React.FC<{ threadId: number }> = ({ threadId }) => (
  <div className="mt-2 bg-gray-50 rounded p-3">
    <h5 className="font-semibold mb-2 text-sm">Respuestas</h5>
    <ul className="space-y-2">
      {replies.map((r) => (
        <li key={r.id} className="border-b pb-2 last:border-b-0">
          <div className="text-gray-800 text-sm">{r.comentario}</div>
          <div className="text-xs text-gray-400">{r.fecha} · {r.autor}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default ReplyList; 