import React, { useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  year: string;
  publisher: string;
  category: string;
  available: boolean;
  location: string;
}

const BooksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState({
    author: '',
    year: '',
    publisher: '',
    category: ''
  });
  const [showAdvanced, setShowAdvanced] = useState(false);

  const mockBooks: Book[] = [
    {
      id: 1,
      title: 'El Señor de los Anillos',
      author: 'J.R.R. Tolkien',
      isbn: '978-84-450-7054-7',
      year: '1954',
      publisher: 'Minotauro',
      category: 'Fantasía',
      available: true,
      location: 'Estante A-12'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      isbn: '978-84-397-2077-5',
      year: '1949',
      publisher: 'Debolsillo',
      category: 'Ciencia Ficción',
      available: true,
      location: 'Estante B-8'
    },
    {
      id: 3,
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez',
      isbn: '978-84-397-2077-5',
      year: '1967',
      publisher: 'Debolsillo',
      category: 'Literatura',
      available: false,
      location: 'Estante C-15'
    },
    {
      id: 4,
      title: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes',
      isbn: '978-84-376-0494-7',
      year: '1605',
      publisher: 'Cátedra',
      category: 'Clásicos',
      available: true,
      location: 'Estante A-1'
    }
  ];

  const filteredBooks = mockBooks.filter(book => {
    const matchesBasicSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              book.isbn.includes(searchTerm);
    
    const matchesAdvancedSearch = (!advancedSearch.author || book.author.toLowerCase().includes(advancedSearch.author.toLowerCase())) &&
                                 (!advancedSearch.year || book.year.includes(advancedSearch.year)) &&
                                 (!advancedSearch.publisher || book.publisher.toLowerCase().includes(advancedSearch.publisher.toLowerCase())) &&
                                 (!advancedSearch.category || book.category.toLowerCase().includes(advancedSearch.category.toLowerCase()));
    
    return matchesBasicSearch && matchesAdvancedSearch;
  });

  const handleAdvancedInputChange = (field: keyof typeof advancedSearch, value: string) => {
    setAdvancedSearch(prev => ({ ...prev, [field]: value }));
  };

  const renderBookCard = (book: Book) => (
    <div 
      key={book.id}
      className={`bg-white/80 backdrop-blur rounded-xl border border-white/20 transition-all cursor-pointer shadow hover:bg-white/90 hover:shadow-lg p-6 mb-4`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{book.title}</h3>
          <p className="text-sm text-gray-600 mb-2"><strong>Autor:</strong> {book.author}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>ISBN:</strong> {book.isbn}</p>
          <div className="flex gap-4 text-sm text-gray-600">
            <span><strong>Año:</strong> {book.year}</span>
            <span><strong>Editorial:</strong> {book.publisher}</span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${book.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{book.available ? 'Disponible' : 'Prestado'}</div>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span><strong>Categoría:</strong> {book.category}</span>
        <span><strong>Ubicación:</strong> {book.location}</span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Búsqueda de Libros</h1>
        <p className="text-gray-600 m-0">Encuentra el libro perfecto en nuestro catálogo</p>
      </div>

      {/* Busca Simple */}
      <div className="flex flex-wrap gap-4 items-center bg-white/95 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-4">
        <div className="flex-1 min-w-[220px] relative">
          <span className="absolute left-3 top-3 text-xl pointer-events-none">🔍</span>
          <input
            type="text"
            placeholder="Buscar por título, autor, ISBN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 font-semibold transition hover:bg-gray-200 hover:text-gray-900"
        >
          {showAdvanced ? 'Ocultar' : 'Mostrar'} Búsqueda Avanzada
        </button>
      </div>

      {/* Busqueda Avanzada */}
      {showAdvanced && (
        <div className="bg-white/80 backdrop-blur rounded-xl border border-white/20 p-6 mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Búsqueda Avanzada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Autor</label>
              <input
                type="text"
                value={advancedSearch.author}
                onChange={(e) => handleAdvancedInputChange('author', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Nombre del autor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Año</label>
              <input
                type="text"
                value={advancedSearch.year}
                onChange={(e) => handleAdvancedInputChange('year', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Año de publicación"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Editorial</label>
              <input
                type="text"
                value={advancedSearch.publisher}
                onChange={(e) => handleAdvancedInputChange('publisher', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Nombre de la editorial"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
              <input
                type="text"
                value={advancedSearch.category}
                onChange={(e) => handleAdvancedInputChange('category', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Categoría del libro"
              />
            </div>
          </div>
        </div>
      )}

      {/* Resultados */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resultados ({filteredBooks.length} libros encontrados)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBooks.map((book) => renderBookCard(book))}
        </div>
      </div>

      {filteredBooks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-4xl mb-2">📚</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron libros</h3>
          <p className="text-gray-500">Intenta ajustar tus criterios de búsqueda</p>
        </div>
      )}
    </div>
  );
};

export default BooksPage; 