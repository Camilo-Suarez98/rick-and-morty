# Personajes de Rick y Morty

Una aplicación Next.js para explorar los personajes de la serie Rick y Morty utilizando la [API de Rick y Morty](https://rickandmortyapi.com/).

## Características

- Búsqueda de personajes por nombre cons debounce de 300ms
- Filtro por estado (alive, dead, unknown) y género
- Detalle de cada personaje
- Paginación
- Opción de guardar personajes en favoritos y verlos en una lista
- Diseño responsivo
- Accesible
- Interfaz moderna con Tailwind CSS

## Primeros pasos

### Requisitos

- Node.js 18+
- npm

### Instalación

```bash
git clone https://github.com/Camilo-Suarez98/rick-and-morty.git
cd rick-and-morty

npm install

npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles
```bash
npm run dev      # Iniciar el servidor de desarrollo

npm run lint     # Ejecutar ESLint

npm run test     # Ejecutar pruebas

npm run format   # Formatear el código con Prettier
```

## Estructura del proyecto
```
src/
├── app/              # Páginas del enrutador de la aplicación Next.js
│   ├── character/    # Página de detalles del personaje
│   ├── favorites/    # Página de favoritos
│   ├── layout.tsx    # Diseño raíz
│   └── page.tsx      # Página de inicio
├── components/       # Componentes reutilizables
├── lib/             # Utilidades y hooks
└── types/           # Definiciones de tipos TypeScript
```

## Testing

Las pruebas se escriben utilizando Jest y React Testing Library:
```bash
npm run test          # Ejecutar todas las pruebas

npm run test:watch    # Ejecutar pruebas en modo de observación
```

## Decisiones técnicas clave

- **Next.js 16 App Router**: Enrutamiento moderno con componentes de servidor/cliente
- **TypeScript**: Lenguaje de programación fuertemente tipado para evitar errores en tiempo de ejecución
- **Tailwind CSS**: Framework de estilos
- **localStorage**: Guardar datos del lado del cliente para los favoritos
- **Jest**: Framework de testing
