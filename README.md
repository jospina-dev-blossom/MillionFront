# Million Front - Real Estate Application# React + TypeScript + Vite



Aplicación frontend para gestión de propiedades inmobiliarias construida con React, TypeScript y Vite siguiendo arquitectura hexagonal.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 🏗️ ArquitecturaCurrently, two official plugins are available:



Este proyecto implementa **Arquitectura Hexagonal (Ports & Adapters)** para lograr:- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- Separación de responsabilidades- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Código testeable y mantenible

- Independencia de frameworks## React Compiler

- Facilidad de cambio de implementaciones

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## 📁 Estructura del Proyecto

## Expanding the ESLint configuration

```

million-front/If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

├── src/

│   ├── core/                        # 🎯 Capa de Dominio (Core Business Logic)```js

│   │   ├── domain/export default defineConfig([

│   │   │   ├── entities/           # Entidades del dominio (Property, Owner, etc.)  globalIgnores(['dist']),

│   │   │   ├── repositories/       # Interfaces de repositorios (puertos)  {

│   │   │   └── usecases/           # Casos de uso de la aplicación    files: ['**/*.{ts,tsx}'],

│   │   └── application/    extends: [

│   │       └── services/           # Servicios de aplicación      // Other configs...

│   │

│   ├── infrastructure/              # 🔌 Capa de Infraestructura (Adapters)      // Remove tseslint.configs.recommended and replace with this

│   │   ├── api/                    # Cliente HTTP (Axios)      tseslint.configs.recommendedTypeChecked,

│   │   ├── repositories/           # Implementaciones de repositorios      // Alternatively, use this for stricter rules

│   │   └── config/                 # Configuraciones (API URLs, etc.)      tseslint.configs.strictTypeChecked,

│   │      // Optionally, add this for stylistic rules

│   ├── presentation/                # 🎨 Capa de Presentación (UI)      tseslint.configs.stylisticTypeChecked,

│   │   ├── components/

│   │   │   ├── common/            # Componentes reutilizables      // Other configs...

│   │   │   └── properties/        # Componentes específicos de propiedades    ],

│   │   ├── pages/                 # Páginas/Vistas    languageOptions: {

│   │   ├── hooks/                 # Custom Hooks      parserOptions: {

│   │   ├── store/                 # Redux Store        project: ['./tsconfig.node.json', './tsconfig.app.json'],

│   │   │   └── slices/           # Redux Slices        tsconfigRootDir: import.meta.dirname,

│   │   └── routes/               # Configuración de rutas      },

│   │      // other options...

│   └── shared/                     # 🔧 Recursos Compartidos    },

│       ├── utils/                 # Utilidades  },

│       ├── types/                 # Tipos TypeScript globales])

│       └── constants/             # Constantes```

│

└── tests/You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

    ├── unit/                      # Tests unitarios

    └── integration/               # Tests de integración```js

```// eslint.config.js

import reactX from 'eslint-plugin-react-x'

## 🎯 Principios de Arquitectura Hexagonalimport reactDom from 'eslint-plugin-react-dom'



### Capa de Dominio (Core)export default defineConfig([

- **Entities**: Modelos de negocio puros sin dependencias externas  globalIgnores(['dist']),

- **Repositories**: Interfaces (puertos) que definen contratos  {

- **Use Cases**: Lógica de negocio y reglas de la aplicación    files: ['**/*.{ts,tsx}'],

    extends: [

### Capa de Infraestructura      // Other configs...

- **API**: Implementación de clientes HTTP      // Enable lint rules for React

- **Repositories**: Adaptadores que implementan las interfaces del dominio      reactX.configs['recommended-typescript'],

- **Config**: Configuraciones específicas de infraestructura      // Enable lint rules for React DOM

      reactDom.configs.recommended,

### Capa de Presentación    ],

- **Components**: Componentes React organizados por funcionalidad    languageOptions: {

- **Pages**: Páginas principales de la aplicación      parserOptions: {

- **Store**: Gestión de estado global con Redux Toolkit        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- **Hooks**: Custom hooks para lógica reutilizable        tsconfigRootDir: import.meta.dirname,

      },

## 🛠️ Tecnologías      // other options...

    },

- **React 19** - Librería UI  },

- **TypeScript** - Tipado estático])

- **Vite** - Build tool y dev server```

- **Redux Toolkit** - Gestión de estado
- **React Router** - Enrutamiento
- **Axios** - Cliente HTTP
- **Jest** - Testing framework
- **React Testing Library** - Testing de componentes

## 📦 Dependencias Instaladas

### Producción
- `@reduxjs/toolkit` - Redux Toolkit para gestión de estado
- `react-redux` - Bindings de React para Redux
- `axios` - Cliente HTTP
- `react-router-dom` - Enrutamiento

### Desarrollo
- `jest` - Framework de testing
- `@testing-library/react` - Testing de componentes React
- `@testing-library/jest-dom` - Matchers adicionales para Jest
- `@testing-library/user-event` - Simulación de interacciones
- `ts-jest` - Soporte de TypeScript para Jest
- `jest-environment-jsdom` - Entorno DOM para tests
- `identity-obj-proxy` - Mock de módulos CSS

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Build
npm run build           # Compila para producción

# Testing
npm run test            # Ejecuta tests
npm run test:watch      # Tests en modo watch
npm run test:coverage   # Tests con coverage

# Linting
npm run lint            # Ejecuta ESLint

# Preview
npm run preview         # Preview de build de producción
```

## 🧪 Testing

El proyecto incluye configuración completa de Jest con:
- Soporte para TypeScript
- Testing Library para componentes React
- Path aliases configurados
- Coverage mínimo del 70%

## 🎨 Patrones de Diseño Implementables

- **HOC (Higher-Order Components)** - Para lógica compartida
- **Provider Pattern** - Context API y Redux
- **Container/Presentational** - Separación de lógica y UI
- **Compound Components** - Componentes complejos
- **Custom Hooks** - Lógica reutilizable

## 📝 Path Aliases

El proyecto tiene configurados los siguientes aliases:
- `@/*` - src/
- `@core/*` - src/core/
- `@infrastructure/*` - src/infrastructure/
- `@presentation/*` - src/presentation/
- `@shared/*` - src/shared/

## 🔗 Integración con Backend

La aplicación se conectará a una API .NET que proporciona:
- Listado de propiedades
- Filtros (nombre, dirección, rango de precio)
- Detalles de propiedades individuales

## 📋 Próximos Pasos

1. Definir entidades del dominio
2. Crear interfaces de repositorios
3. Implementar casos de uso
4. Configurar Redux Store
5. Crear componentes de UI
6. Implementar filtros y búsqueda
7. Agregar tests unitarios
8. Implementar optimizaciones de performance

## ⚠️ Nota sobre Node.js

Este proyecto requiere Node.js v20.19+ o v22.12+. Si encuentras errores relacionados con la versión, considera actualizar Node.js.

---

**Arquitectura Hexagonal** permite que el dominio sea el centro de la aplicación, independiente de frameworks y librerías externas, facilitando testing, mantenibilidad y escalabilidad.
