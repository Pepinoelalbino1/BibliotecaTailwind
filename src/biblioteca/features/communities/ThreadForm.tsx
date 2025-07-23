import React, { useState } from 'react';

const ThreadForm: React.FC<{ onSubmit: (data: { titulo: string; subtitulo: string }) => void }> = ({ onSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');

  return (
    <form className="bg-gray-50 p-4 rounded mb-4" onSubmit={e => { e.preventDefault(); onSubmit({ titulo, subtitulo }); }}>
      <h3 className="font-semibold mb-2">Nuevo hilo</h3>
      <input
        className="border rounded px-2 py-1 w-full mb-2"
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        required
      />
      <input
        className="border rounded px-2 py-1 w-full mb-2"
        placeholder="Subtítulo"
        value={subtitulo}
        onChange={e => setSubtitulo(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Crear hilo</button>
    </form>
  );
};

export default ThreadForm; 