# Million Front

Aplicación frontend para gestión y visualización de propiedades inmobiliarias, construida con React, TypeScript y Vite.

## 🛠️ Tecnologías

- **React 19** - Biblioteca de interfaces de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de desarrollo y construcción
- **Redux Toolkit** - Gestión de estado
- **React Router** - Enrutamiento
- **Framer Motion** - Animaciones
- **Jest** - Testing

## 📋 Requisitos Previos

- **Node.js**: >= 20.19.x
- **npm**: >= 9.x (o yarn/pnpm)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/jospina-dev-blossom/MillionFront.git
cd MillionFront
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno (opcional):

Crea un archivo `.env` en la raíz del proyecto, copia y pega el contenido de `.env.example`:
```env
VITE_API_BASE_URL=/api/v1
VITE_API_TIMEOUT=10000
VITE_ENV=development
```

> **Nota**: Si no se configuran, se usarán los valores por defecto definidos en `api.config.ts`

## ▶️ Ejecución

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build de Producción
```bash
npm run build
```

### Vista Previa del Build
```bash
npm run preview
```

## 🧪 Testing

Ejecutar tests:
```bash
npm test
```

Tests en modo watch:
```bash
npm run test:watch
```

Coverage:
```bash
npm run test:coverage
```

## 📁 Estructura del Proyecto

```
src/
├── core/               # Lógica de negocio y dominio
│   ├── domain/         # Entidades y servicios
│   └── infrastructure/ # APIs y configuración
├── presentation/       # Componentes React y UI
│   ├── components/     # Componentes reutilizables
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Páginas de la aplicación
│   ├── routes/         # Configuración de rutas
│   └── store/          # Redux store
└── shared/             # Utilidades y constantes compartidas
```

## 🔧 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta el linter |
| `npm test` | Ejecuta los tests |
| `npm run test:watch` | Ejecuta los tests en modo watch |
| `npm run test:coverage` | Genera reporte de cobertura |

## 🔗 API Backend

Este proyecto se conecta a una API backend en `https://localhost:44311/api/v1`. Asegúrate de que el servidor backend esté ejecutándose antes de iniciar la aplicación.

## 📝 Licencia

Este proyecto es privado.
