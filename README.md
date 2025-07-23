# BiblioLima-server
Proyecto del curso de Desarrollo Web Integrado - Backend

# 📦 Estructura de Paquetes (Frontend)

project/
│
├── src/
│   ├── biblioteca/
│   │   ├── admin/           # Páginas y componentes del panel de administración
│   │   ├── auth/            # Páginas de autenticación (login, registro)
│   │   ├── books/           # Componentes y páginas relacionadas a libros
│   │   ├── features/        # Exports y utilidades de features
│   │   ├── libraries/       # Páginas y componentes de bibliotecas (catálogo, detalles, búsqueda)
│   │   ├── reservations/    # Páginas y componentes de reservas
│   │   └── shared/          # Componentes compartidos (header, footer, etc.)
│   ├── core/
│   │   ├── domain/          # Modelos de dominio (ej: Library.ts)
│   │   └── infrastructure/  # Apps y lógica de infraestructura
│   ├── App.tsx              # Enrutador principal
│   ├── AdminApp.tsx         # Enrutador de administración
│   ├── ClientApp.tsx        # Enrutador de cliente
│   ├── main.tsx             # Entry point de React
│   └── index.css            # Estilos globales y Tailwind
│
├── public/                  # Archivos estáticos
├── package.json             # Dependencias y scripts
├── tailwind.config.js       # Configuración de Tailwind
└── README.md
```
