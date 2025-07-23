import React from 'react';

const LibraryDetailPage: React.FC = () => (
  <div className="max-w-4xl mx-auto py-8 px-4 bg-white rounded-lg shadow-md mt-6">
    <h2 className="text-2xl font-bold mb-6 text-blue-900">Detalle de Biblioteca</h2>
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-2 text-blue-800">Búsqueda de Libros</h4>
      <form className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1">
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Título, autor, ISBN..." />
        </div>
        <div className="w-full md:w-1/4">
          <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition-colors">Buscar</button>
        </div>
      </form>
    </div>
    <div className="mb-8">
      <h5 className="text-md font-semibold mb-2 text-blue-700">Búsqueda Avanzada</h5>
      <form className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1">
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Autor" />
        </div>
        <div className="flex-1">
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Año" />
        </div>
        <div className="flex-1">
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Editorial" />
        </div>
        <div className="w-full md:w-1/4">
          <button type="submit" className="w-full bg-blue-100 text-blue-800 border border-blue-700 hover:bg-blue-200 font-semibold py-2 rounded-md transition-colors">Buscar Avanzado</button>
        </div>
      </form>
    </div>
    {/* Aquí irán los resultados de libros */}
    <div className="bg-blue-50 border border-blue-200 text-blue-800 text-center py-4 rounded-md font-medium">No hay libros para mostrar.</div>
  </div>
);

export default LibraryDetailPage; 