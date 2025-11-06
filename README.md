# Million Luxury - Real Estate Application# Million Luxury - Real Estate Application# Million Luxury - Real Estate Application# Million Front - Real Estate Application# React + TypeScript + Vite



Aplicación web para la gestión y visualización de propiedades inmobiliarias de lujo. Construida con React 19, TypeScript y Vite, implementando arquitectura hexagonal para garantizar escalabilidad y mantenibilidad.



## 🚀 Inicio RápidoAplicación web para la gestión y visualización de propiedades inmobiliarias de lujo. Construida con React 19, TypeScript y Vite, implementando arquitectura hexagonal para garantizar escalabilidad y mantenibilidad.



### Prerequisitos



- **Node.js 20.19+** (recomendado v22.12+)## 🚀 Inicio RápidoAplicación web para la gestión y visualización de propiedades inmobiliarias de lujo. Construida con React 19, TypeScript y Vite, implementando arquitectura hexagonal para garantizar escalabilidad y mantenibilidad.

- npm o yarn

- API Backend corriendo en `https://localhost:44311`



### Instalación### Prerequisitos



```bash

# Clonar el repositorio

git clone <repository-url>- Node.js 20.19+ o 22.12+## 🚀 Inicio RápidoAplicación frontend para gestión de propiedades inmobiliarias construida con React, TypeScript y Vite siguiendo arquitectura hexagonal.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

cd million-front

- npm o yarn

# Instalar dependencias

npm install- API Backend corriendo en `https://localhost:44311`



# Configurar variables de entorno

cp .env.example .env

### Instalación### Prerequisitos

# Iniciar servidor de desarrollo

npm run dev

```

```bash

La aplicación estará disponible en `http://localhost:5173`

# Clonar el repositorio

## 📦 Scripts Disponibles

git clone <repository-url>- Node.js 20.19+ o 22.12+## 🏗️ ArquitecturaCurrently, two official plugins are available:

```bash

npm run dev           # Inicia servidor de desarrollo con HMRcd million-front

npm run build         # Compila para producción

npm run preview       # Preview del build de producción- npm o yarn

npm run lint          # Ejecuta ESLint

npm run test          # Ejecuta tests con Jest# Instalar dependencias

npm run test:watch    # Tests en modo watch

npm run test:coverage # Genera reporte de coberturanpm install- API Backend corriendo en `https://localhost:44311`

```



## 🏗️ Arquitectura

# Configurar variables de entorno

Este proyecto implementa **Arquitectura Hexagonal (Ports & Adapters)**, separando la aplicación en tres capas principales:

cp .env.example .env

### Capas de la Aplicación

### InstalaciónEste proyecto implementa **Arquitectura Hexagonal (Ports & Adapters)** para lograr:- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **🎯 Core (Dominio)**: Entidades, servicios de negocio y lógica pura sin dependencias externas

- **🔌 Infrastructure**: RTK Query API, configuración y adaptadores de servicios externos# Iniciar servidor de desarrollo

- **🎨 Presentation**: Componentes React, páginas, hooks, store Redux y rutas

- **🔧 Shared**: Utilidades, constantes y recursos compartidos entre capasnpm run dev



### Principios de Diseño```



- **Separación de responsabilidades**: Cada capa tiene responsabilidades bien definidas```bash- Separación de responsabilidades- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Independencia de frameworks**: La lógica de negocio no depende de React o Redux

- **Testeable**: Arquitectura que facilita pruebas unitarias e integraciónLa aplicación estará disponible en `http://localhost:5173`

- **Escalable**: Estructura que permite crecimiento sin complejidad

- **Mantenible**: Código organizado y fácil de entender# Clonar el repositorio



## 🛠️ Stack Tecnológico## 📦 Scripts Disponibles



### Coregit clone <repository-url>- Código testeable y mantenible



- **React 19.1** - Librería UI con últimas características```bash

- **TypeScript 5.9** - Tipado estático para seguridad en desarrollo

- **Vite 7.1** - Build tool ultrarrápido con HMRnpm run dev           # Inicia servidor de desarrollo con HMRcd million-front



### Estado y Datosnpm run build         # Compila para producción



- **Redux Toolkit 2.10** - Gestión de estado centralizadanpm run preview       # Preview del build de producción- Independencia de frameworks## React Compiler

- **RTK Query** - Data fetching, caching y sincronización de servidor

npm run lint          # Ejecuta ESLint

### UI y Animaciones

npm run test          # Ejecuta tests con Jest# Instalar dependencias

- **Framer Motion 12.23** - Animaciones fluidas y profesionales

- **Lucide React 0.552** - Iconos modernos y ligerosnpm run test:watch    # Tests en modo watch

- **CSS Modules** - Estilos encapsulados

npm run test:coverage # Genera reporte de coberturanpm install- Facilidad de cambio de implementaciones

### Routing

```

- **React Router 7.9** - Navegación client-side



### Testing

## 🏗️ Arquitectura

- **Jest 30.2** - Framework de testing

- **Testing Library 16.3** - Testing de componentes React# Configurar variables de entornoThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **ts-jest 29.4** - Soporte TypeScript para Jest

Este proyecto implementa **Arquitectura Hexagonal (Ports & Adapters)**, separando la aplicación en tres capas principales:

## 🎨 Características Principales

cp .env.example .env

### Funcionalidades

### 🎯 Capas de la Aplicación

- **Listado de Propiedades**: Grid responsivo con infinite scroll

- **Búsqueda Avanzada**: Búsqueda por nombre con validación## 📁 Estructura del Proyecto

- **Filtros Dinámicos**: Filtrado por dirección y rango de precios con validación en tiempo real

- **Detalle de Propiedad**: Vista completa con galería, información del propietario e historial de transacciones- **🎯 Core (Dominio)**: Entidades, servicios de negocio y lógica pura sin dependencias externas

- **Animaciones Suaves**: Transiciones y hover effects profesionales

- **HTML Semántico**: Estructura accesible con etiquetas HTML5 apropiadas- **🔌 Infrastructure**: RTK Query API, configuración y adaptadores de servicios externos  # Iniciar servidor de desarrollo

- **ARIA Completo**: Atributos de accesibilidad para lectores de pantalla

- **Responsive Design**: Adaptable a móviles, tablets y desktop- **🎨 Presentation**: Componentes React, páginas, hooks, store Redux y rutas



### Animaciones- **🔧 Shared**: Utilidades, constantes y recursos compartidos entre capasnpm run dev## Expanding the ESLint configuration



Implementadas con Framer Motion:



- Entrada progresiva de cards (stagger effect)### Principios de Diseño```

- Hover effects sutiles en imágenes

- Transiciones de página fluidas

- Modal de filtros animado

- Efectos de scroll- **Separación de responsabilidades**: Cada capa tiene responsabilidades bien definidas```



### Accesibilidad- **Independencia de frameworks**: La lógica de negocio no depende de React o Redux



- Navegación por teclado completa- **Testeable**: Arquitectura que facilita pruebas unitarias e integraciónLa aplicación estará disponible en `http://localhost:5173`

- Etiquetas ARIA descriptivas

- Contraste de colores WCAG AA- **Escalable**: Estructura que permite crecimiento sin complejidad

- Etiquetas semánticas (`<article>`, `<section>`, `<search>`, etc.)

- Estados de foco visibles- **Mantenible**: Código organizado y fácil de entendermillion-front/If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:



## 🔧 Configuración



### Variables de Entorno## 🛠️ Stack Tecnológico## 📦 Scripts Disponibles



```env

# .env

VITE_API_BASE_URL=/api/v1### Core├── src/

VITE_API_TIMEOUT=10000

VITE_ENV=development- **React 19.1** - Librería UI con últimas características

```

- **TypeScript 5.9** - Tipado estático para seguridad en desarrollo```bash

### Path Aliases

- **Vite 7.1** - Build tool ultrarrápido con HMR

El proyecto utiliza aliases para imports limpios:

npm run dev           # Inicia servidor de desarrollo con HMR│   ├── core/                        # 🎯 Capa de Dominio (Core Business Logic)```js

```typescript

import { Property } from '@core/domain/entities';### Estado y Datos

import { useProperty } from '@presentation/hooks/useProperty';

import { TEXTS } from '@shared/constants/texts';- **Redux Toolkit 2.10** - Gestión de estado centralizadanpm run build         # Compila para producción

```

- **RTK Query** - Data fetching, caching y sincronización de servidor

**Aliases configurados:**

npm run preview       # Preview del build de producción│   │   ├── domain/export default defineConfig([

- `@/*` → `src/*`

- `@core/*` → `src/core/*`### UI y Animaciones

- `@infrastructure/*` → `src/infrastructure/*`

- `@presentation/*` → `src/presentation/*`- **Framer Motion 12.23** - Animaciones fluidas y profesionalesnpm run lint          # Ejecuta ESLint

- `@shared/*` → `src/shared/*`

- **Lucide React 0.552** - Iconos modernos y ligeros

### Proxy de Desarrollo

- **CSS Modules** - Estilos encapsuladosnpm run test          # Ejecuta tests con Jest│   │   │   ├── entities/           # Entidades del dominio (Property, Owner, etc.)  globalIgnores(['dist']),

Vite está configurado para proxy de la API y evitar problemas de CORS:



```typescript

// vite.config.ts### Routingnpm run test:watch    # Tests en modo watch

server: {

  proxy: {- **React Router 7.9** - Navegación client-side

    '/api': {

      target: 'https://localhost:44311',npm run test:coverage # Genera reporte de cobertura│   │   │   ├── repositories/       # Interfaces de repositorios (puertos)  {

      changeOrigin: true,

      secure: false### Testing

    }

  }- **Jest 30.2** - Framework de testing```

}

```- **Testing Library 16.3** - Testing de componentes React



## 🧪 Testing- **ts-jest 29.4** - Soporte TypeScript para Jest│   │   │   └── usecases/           # Casos de uso de la aplicación    files: ['**/*.{ts,tsx}'],



### Ejecutar Tests



```bash## 🎨 Características Principales## 🏗️ Arquitectura

# Todos los tests

npm run test



# Tests en modo watch### ✨ Funcionalidades│   │   └── application/    extends: [

npm run test:watch



# Con cobertura

npm run test:coverage- **Listado de Propiedades**: Grid responsivo con infinite scrollEste proyecto implementa **Arquitectura Hexagonal (Ports & Adapters)**, separando la aplicación en tres capas principales:

```

- **Búsqueda Avanzada**: Búsqueda por nombre con validación

### Cobertura Actual

- **Filtros Dinámicos**: Filtrado por dirección y rango de precios con validación en tiempo real│   │       └── services/           # Servicios de aplicación      // Other configs...

- **SearchBar**: 9/9 tests ✅

- **FilterModal**: 7 tests escritos- **Detalle de Propiedad**: Vista completa con galería, información del propietario e historial de transacciones

- **PropertyCard**: 10 tests escritos

- **Animaciones Suaves**: Transiciones y hover effects profesionales### 📁 Estructura del Proyecto

**Threshold configurado**: 70% en branches, functions, lines y statements

- **HTML Semántico**: Estructura accesible con etiquetas HTML5 apropiadas

## 🌐 Integración con API

- **ARIA Completo**: Atributos de accesibilidad para lectores de pantalla│   │

### Endpoints Consumidos

- **Responsive Design**: Adaptable a móviles, tablets y desktop

**Base URL**: `https://localhost:44311/api/v1`

```

- `GET /Properties` - Lista paginada de propiedades con filtros

- `GET /Properties/{id}` - Detalle completo de una propiedad### 🎭 Animaciones



### Filtros Disponiblesmillion-front/│   ├── infrastructure/              # 🔌 Capa de Infraestructura (Adapters)      // Remove tseslint.configs.recommended and replace with this



```typescriptImplementadas con Framer Motion:

{

  name?: string;          // Búsqueda por nombre- Entrada progresiva de cards (stagger effect)├── src/

  address?: string;       // Filtro por dirección

  minPrice?: string;      // Precio mínimo- Hover effects sutiles en imágenes

  maxPrice?: string;      // Precio máximo

  pageNumber?: number;    // Número de página- Transiciones de página fluidas│   ├── core/                      # 🎯 Capa de Dominio│   │   ├── api/                    # Cliente HTTP (Axios)      tseslint.configs.recommendedTypeChecked,

  pageSize?: number;      // Tamaño de página

}- Modal de filtros animado

```

- Efectos de scroll│   │   └── domain/

### RTK Query - Caché y Optimización



RTK Query maneja automáticamente:

### ♿ Accesibilidad│   │       ├── entities/          # Entidades del dominio (Property, Owner, etc.)│   │   ├── repositories/           # Implementaciones de repositorios      // Alternatively, use this for stricter rules

- ✅ Caché de peticiones con invalidación inteligente

- ✅ Deduplicación de requests simultáneos

- ✅ Refetch automático on focus/reconnect

- ✅ Polling y actualizaciones en tiempo real- Navegación por teclado completa│   │       └── services/          # Lógica de negocio pura

- ✅ Optimistic updates

- ✅ Gestión automática de estados de loading/error- Etiquetas ARIA descriptivas



## 🎨 Tema y Estilos- Contraste de colores WCAG AA│   ││   │   └── config/                 # Configuraciones (API URLs, etc.)      tseslint.configs.strictTypeChecked,



### Paleta de Colores- Etiquetas semánticas (`<article>`, `<section>`, `<search>`, etc.)



```css- Estados de foco visibles│   ├── infrastructure/            # 🔌 Capa de Infraestructura

--color-primary: #1a1a1a;       /* Negro principal */

--color-secondary: #c9a055;     /* Dorado luxury */

--color-text: #1a1a1a;          /* Texto principal */

--color-text-light: #717171;    /* Texto secundario */## 🔧 Configuración│   │   ├── api/                   # RTK Query API (propertyApi)│   │      // Optionally, add this for stylistic rules

--color-background: #ffffff;    /* Fondo blanco */

```



### Tipografías### Variables de Entorno│   │   └── config/                # Configuración de API



- **Montserrat** - Texto general (sans-serif)

- **Cinzel** - Logo y títulos destacados (serif)

```env│   ││   ├── presentation/                # 🎨 Capa de Presentación (UI)      tseslint.configs.stylisticTypeChecked,

## 📱 Compatibilidad

# .env

- ✅ Chrome 90+

- ✅ Firefox 88+VITE_API_BASE_URL=/api/v1│   ├── presentation/              # 🎨 Capa de Presentación

- ✅ Safari 14+

- ✅ Edge 90+VITE_API_TIMEOUT=10000

- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

VITE_ENV=development│   │   ├── components/│   │   ├── components/

## 🚀 Build y Deploy

```

### Build para Producción

│   │   │   ├── common/           # Componentes reutilizables

```bash

npm run build### Path Aliases

```

│   │   │   ├── properties/       # Componentes de propiedades│   │   │   ├── common/            # Componentes reutilizables      // Other configs...

Genera archivos optimizados en `/dist`:

El proyecto utiliza aliases para imports limpios:

- Minificación de JavaScript y CSS

- Tree-shaking automático│   │   │   └── propertyDetail/   # Componentes de detalle

- Code splitting por rutas

- Assets optimizados```typescript



### Preview de Buildimport { Property } from '@core/domain/entities';│   │   ├── pages/                # Páginas principales│   │   │   └── properties/        # Componentes específicos de propiedades    ],



```bashimport { useProperty } from '@presentation/hooks/useProperty';

npm run preview

```import { TEXTS } from '@shared/constants/texts';│   │   ├── hooks/                # Custom hooks



## 📝 Convenciones de Código```



- **Componentes**: PascalCase (`PropertyCard.tsx`)│   │   ├── store/                # Redux store│   │   ├── pages/                 # Páginas/Vistas    languageOptions: {

- **Hooks**: camelCase con prefijo `use` (`useProperty.ts`)

- **Utilities**: camelCase (`formatCurrency.ts`)**Aliases configurados:**

- **Constantes**: UPPER_SNAKE_CASE (`API_CONFIG`)

- **Interfaces**: PascalCase (`Property`)- `@/*` → `src/*`│   │   └── routes/               # Configuración de rutas



## 🤝 Contribución- `@core/*` → `src/core/*`



Este es un proyecto privado. Para contribuir:- `@infrastructure/*` → `src/infrastructure/*`│   ││   │   ├── hooks/                 # Custom Hooks      parserOptions: {



1. Crear feature branch desde `main`- `@presentation/*` → `src/presentation/*`

2. Seguir convenciones de código establecidas

3. Escribir tests para nuevas funcionalidades- `@shared/*` → `src/shared/*`│   └── shared/                    # 🔧 Recursos Compartidos

4. Asegurar que todos los tests pasen

5. Crear Pull Request con descripción detallada



## 📄 Licencia### Proxy de Desarrollo│       ├── utils/                 # Utilidades (formatters, errorHandler)│   │   ├── store/                 # Redux Store        project: ['./tsconfig.node.json', './tsconfig.app.json'],



Proyecto privado - Million Luxury Real Estate



---Vite está configurado para proxy de la API y evitar problemas de CORS:│       └── constants/             # Constantes y textos



**Desarrollado con ❤️ usando React + TypeScript + Arquitectura Hexagonal**


```typescript││   │   │   └── slices/           # Redux Slices        tsconfigRootDir: import.meta.dirname,

// vite.config.ts

server: {└── tests/

  proxy: {

    '/api': {    └── unit/                      # Tests unitarios de componentes│   │   └── routes/               # Configuración de rutas      },

      target: 'https://localhost:44311',

      changeOrigin: true,```

      secure: false

    }│   │      // other options...

  }

}### 🎯 Principios de Diseño

```

│   └── shared/                     # 🔧 Recursos Compartidos    },

## 🧪 Testing

- **Separación de responsabilidades**: Cada capa tiene responsabilidades bien definidas

### Ejecutar Tests

- **Independencia de frameworks**: La lógica de negocio no depende de React o Redux│       ├── utils/                 # Utilidades  },

```bash

# Todos los tests- **Testeable**: Arquitectura que facilita pruebas unitarias e integración

npm run test

- **Escalable**: Estructura que permite crecimiento sin complejidad│       ├── types/                 # Tipos TypeScript globales])

# Tests en modo watch

npm run test:watch- **Mantenible**: Código organizado y fácil de entender



# Con cobertura│       └── constants/             # Constantes```

npm run test:coverage

```## 🛠️ Stack Tecnológico



### Cobertura Actual│



- **SearchBar**: 9/9 tests ✅### Core

- **FilterModal**: 7 tests escritos

- **PropertyCard**: 10 tests escritos- **React 19.1** - Librería UI con últimas características└── tests/You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:



**Threshold configurado**: 70% en branches, functions, lines y statements- **TypeScript 5.9** - Tipado estático para seguridad en desarrollo



## 🌐 Integración con API- **Vite 7.1** - Build tool ultrarrápido con HMR    ├── unit/                      # Tests unitarios



### Endpoints Consumidos



**Base URL**: `https://localhost:44311/api/v1`### Estado y Datos    └── integration/               # Tests de integración```js



- `GET /Properties` - Lista paginada de propiedades con filtros- **Redux Toolkit 2.10** - Gestión de estado con RTK Query

- `GET /Properties/{id}` - Detalle completo de una propiedad

- **RTK Query** - Fetching y caching de datos (reemplaza Axios)```// eslint.config.js

### Filtros Disponibles



```typescript

{### UI y Animacionesimport reactX from 'eslint-plugin-react-x'

  name?: string;          // Búsqueda por nombre

  address?: string;       // Filtro por dirección- **Framer Motion 12.23** - Animaciones fluidas y profesionales

  minPrice?: string;      // Precio mínimo

  maxPrice?: string;      // Precio máximo- **Lucide React 0.552** - Iconos modernos y ligeros## 🎯 Principios de Arquitectura Hexagonalimport reactDom from 'eslint-plugin-react-dom'

  pageNumber?: number;    // Número de página

  pageSize?: number;      // Tamaño de página- **CSS Modules** - Estilos encapsulados

}

```



### RTK Query - Caché y Optimización### Routing



RTK Query maneja automáticamente:- **React Router 7.9** - Navegación client-side### Capa de Dominio (Core)export default defineConfig([

- ✅ Caché de peticiones con invalidación inteligente

- ✅ Deduplicación de requests simultáneos

- ✅ Refetch automático on focus/reconnect

- ✅ Polling y actualizaciones en tiempo real### Testing- **Entities**: Modelos de negocio puros sin dependencias externas  globalIgnores(['dist']),

- ✅ Optimistic updates

- ✅ Gestión automática de estados de loading/error- **Jest 30.2** - Framework de testing



## 🎨 Tema y Estilos- **Testing Library 16.3** - Testing de componentes React- **Repositories**: Interfaces (puertos) que definen contratos  {



### Paleta de Colores- **ts-jest 29.4** - Soporte TypeScript para Jest



```css- **Use Cases**: Lógica de negocio y reglas de la aplicación    files: ['**/*.{ts,tsx}'],

--color-primary: #1a1a1a;       /* Negro principal */

--color-secondary: #c9a055;     /* Dorado luxury */## 🎨 Características Principales

--color-text: #1a1a1a;          /* Texto principal */

--color-text-light: #717171;    /* Texto secundario */    extends: [

--color-background: #ffffff;    /* Fondo blanco */

```### ✨ Funcionalidades



### Tipografías### Capa de Infraestructura      // Other configs...



- **Montserrat** - Texto general (sans-serif)- **Listado de Propiedades**: Grid responsivo con infinite scroll

- **Cinzel** - Logo y títulos destacados (serif)

- **Búsqueda Avanzada**: Búsqueda por nombre con validación- **API**: Implementación de clientes HTTP      // Enable lint rules for React

## 📱 Compatibilidad

- **Filtros Dinámicos**: Filtrado por dirección y rango de precios con validación en tiempo real

- ✅ Chrome 90+

- ✅ Firefox 88+- **Detalle de Propiedad**: Vista completa con galería, información del propietario e historial de transacciones- **Repositories**: Adaptadores que implementan las interfaces del dominio      reactX.configs['recommended-typescript'],

- ✅ Safari 14+

- ✅ Edge 90+- **Animaciones Suaves**: Transiciones y hover effects profesionales

- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

- **HTML Semántico**: Estructura accesible con etiquetas HTML5 apropiadas- **Config**: Configuraciones específicas de infraestructura      // Enable lint rules for React DOM

## 🚀 Build y Deploy

- **ARIA Completo**: Atributos de accesibilidad para lectores de pantalla

### Build para Producción

- **Responsive Design**: Adaptable a móviles, tablets y desktop      reactDom.configs.recommended,

```bash

npm run build

```

### 🎭 Animaciones### Capa de Presentación    ],

Genera archivos optimizados en `/dist`:

- Minificación de JavaScript y CSS

- Tree-shaking automático

- Code splitting por rutasImplementadas con Framer Motion:- **Components**: Componentes React organizados por funcionalidad    languageOptions: {

- Assets optimizados

- Entrada progresiva de cards (stagger effect)

### Preview de Build

- Hover effects sutiles en imágenes- **Pages**: Páginas principales de la aplicación      parserOptions: {

```bash

npm run preview- Transiciones de página fluidas

```

- Modal de filtros animado- **Store**: Gestión de estado global con Redux Toolkit        project: ['./tsconfig.node.json', './tsconfig.app.json'],

## 📝 Convenciones de Código

- Efectos de scroll

- **Componentes**: PascalCase (`PropertyCard.tsx`)

- **Hooks**: camelCase con prefijo `use` (`useProperty.ts`)- **Hooks**: Custom hooks para lógica reutilizable        tsconfigRootDir: import.meta.dirname,

- **Utilities**: camelCase (`formatCurrency.ts`)

- **Constantes**: UPPER_SNAKE_CASE (`API_CONFIG`)### ♿ Accesibilidad

- **Interfaces**: PascalCase (`Property`)

      },

## 🤝 Contribución

- Navegación por teclado completa

Este es un proyecto privado. Para contribuir:

- Etiquetas ARIA descriptivas## 🛠️ Tecnologías      // other options...

1. Crear feature branch desde `main`

2. Seguir convenciones de código establecidas- Contraste de colores WCAG AA

3. Escribir tests para nuevas funcionalidades

4. Asegurar que todos los tests pasen- Etiquetas semánticas (`<article>`, `<section>`, `<search>`, etc.)    },

5. Crear Pull Request con descripción detallada

- Estados de foco visibles

## 📄 Licencia

- **React 19** - Librería UI  },

Proyecto privado - Million Luxury Real Estate

## 🔧 Configuración

---

- **TypeScript** - Tipado estático])

**Desarrollado con ❤️ usando React + TypeScript + Arquitectura Hexagonal**

### Variables de Entorno

- **Vite** - Build tool y dev server```

```env

# .env- **Redux Toolkit** - Gestión de estado

VITE_API_BASE_URL=/api/v1- **React Router** - Enrutamiento

VITE_API_TIMEOUT=10000- **Axios** - Cliente HTTP

VITE_ENV=development- **Jest** - Testing framework

```- **React Testing Library** - Testing de componentes



### Path Aliases## 📦 Dependencias Instaladas



El proyecto utiliza aliases para imports limpios:### Producción

- `@reduxjs/toolkit` - Redux Toolkit para gestión de estado

```typescript- `react-redux` - Bindings de React para Redux

import { Property } from '@core/domain/entities';- `axios` - Cliente HTTP

import { useProperty } from '@presentation/hooks/useProperty';- `react-router-dom` - Enrutamiento

import { TEXTS } from '@shared/constants/texts';

```### Desarrollo

- `jest` - Framework de testing

**Aliases configurados:**- `@testing-library/react` - Testing de componentes React

- `@/*` → `src/*`- `@testing-library/jest-dom` - Matchers adicionales para Jest

- `@core/*` → `src/core/*`- `@testing-library/user-event` - Simulación de interacciones

- `@infrastructure/*` → `src/infrastructure/*`- `ts-jest` - Soporte de TypeScript para Jest

- `@presentation/*` → `src/presentation/*`- `jest-environment-jsdom` - Entorno DOM para tests

- `@shared/*` → `src/shared/*`- `identity-obj-proxy` - Mock de módulos CSS



### Proxy de Desarrollo## 🚀 Scripts Disponibles



Vite está configurado para proxy de la API y evitar problemas de CORS:```bash

# Desarrollo

```typescriptnpm run dev              # Inicia servidor de desarrollo

// vite.config.ts

server: {# Build

  proxy: {npm run build           # Compila para producción

    '/api': {

      target: 'https://localhost:44311',# Testing

      changeOrigin: true,npm run test            # Ejecuta tests

      secure: falsenpm run test:watch      # Tests en modo watch

    }npm run test:coverage   # Tests con coverage

  }

}# Linting

```npm run lint            # Ejecuta ESLint



## 🧪 Testing# Preview

npm run preview         # Preview de build de producción

### Ejecutar Tests```



```bash## 🧪 Testing

# Todos los tests

npm run testEl proyecto incluye configuración completa de Jest con:

- Soporte para TypeScript

# Tests en modo watch- Testing Library para componentes React

npm run test:watch- Path aliases configurados

- Coverage mínimo del 70%

# Con cobertura

npm run test:coverage## 🎨 Patrones de Diseño Implementables

```

- **HOC (Higher-Order Components)** - Para lógica compartida

### Cobertura Actual- **Provider Pattern** - Context API y Redux

- **Container/Presentational** - Separación de lógica y UI

- **SearchBar**: 9/9 tests ✅- **Compound Components** - Componentes complejos

- **FilterModal**: 7 tests escritos- **Custom Hooks** - Lógica reutilizable

- **PropertyCard**: 10 tests escritos

## 📝 Path Aliases

**Threshold configurado**: 70% en branches, functions, lines y statements

El proyecto tiene configurados los siguientes aliases:

### Estructura de Tests- `@/*` - src/

- `@core/*` - src/core/

```- `@infrastructure/*` - src/infrastructure/

tests/- `@presentation/*` - src/presentation/

└── unit/- `@shared/*` - src/shared/

    └── presentation/

        └── components/## 🔗 Integración con Backend

            ├── SearchBar.test.tsx      # ✅ 100% passing

            ├── FilterModal.test.tsx    # ⚠️  Path alias issuesLa aplicación se conectará a una API .NET que proporciona:

            └── PropertyCard.test.tsx   # ⚠️  Path alias issues- Listado de propiedades

```- Filtros (nombre, dirección, rango de precio)

- Detalles de propiedades individuales

## 🌐 Integración con API

## 📋 Próximos Pasos

### Endpoints Consumidos

1. Definir entidades del dominio

**Base URL**: `https://localhost:44311/api/v1`2. Crear interfaces de repositorios

3. Implementar casos de uso

- `GET /Properties` - Lista paginada de propiedades con filtros4. Configurar Redux Store

- `GET /Properties/{id}` - Detalle completo de una propiedad5. Crear componentes de UI

6. Implementar filtros y búsqueda

### Filtros Disponibles7. Agregar tests unitarios

8. Implementar optimizaciones de performance

```typescript

{## ⚠️ Nota sobre Node.js

  name?: string;          // Búsqueda por nombre

  address?: string;       // Filtro por direcciónEste proyecto requiere Node.js v20.19+ o v22.12+. Si encuentras errores relacionados con la versión, considera actualizar Node.js.

  minPrice?: string;      // Precio mínimo

  maxPrice?: string;      // Precio máximo---

  pageNumber?: number;    // Número de página

  pageSize?: number;      // Tamaño de página**Arquitectura Hexagonal** permite que el dominio sea el centro de la aplicación, independiente de frameworks y librerías externas, facilitando testing, mantenibilidad y escalabilidad.

}
```

### Caché y Optimización

RTK Query maneja automáticamente:
- ✅ Caché de peticiones
- ✅ Invalidación inteligente
- ✅ Deduplicación de requests
- ✅ Refetch on focus/reconnect
- ✅ Optimistic updates

## 🎨 Tema y Estilos

### Paleta de Colores

```css
--color-primary: #1a1a1a;       /* Negro principal */
--color-secondary: #c9a055;     /* Dorado luxury */
--color-text: #1a1a1a;          /* Texto principal */
--color-text-light: #717171;    /* Texto secundario */
--color-background: #ffffff;    /* Fondo blanco */
```

### Tipografías

- **Montserrat** - Texto general (sans-serif)
- **Cinzel** - Logo y títulos destacados (serif)

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Build y Deploy

### Build para Producción

```bash
npm run build
```

Genera archivos optimizados en `/dist`:
- Minificación de JavaScript y CSS
- Tree-shaking automático
- Code splitting por rutas
- Assets optimizados

### Preview de Build

```bash
npm run preview
```

## 📝 Convenciones de Código

- **Componentes**: PascalCase (`PropertyCard.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useProperty.ts`)
- **Utilities**: camelCase (`formatCurrency.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_CONFIG`)
- **Interfaces**: PascalCase con prefijo `I` opcional (`Property`)

## 🤝 Contribución

Este es un proyecto privado. Para contribuir:

1. Crear feature branch desde `main`
2. Seguir convenciones de código establecidas
3. Escribir tests para nuevas funcionalidades
4. Asegurar que todos los tests pasen
5. Crear Pull Request con descripción detallada

## 📄 Licencia

Proyecto privado - Million Luxury Real Estate

---

**Desarrollado con ❤️ usando React + TypeScript + Arquitectura Hexagonal**
