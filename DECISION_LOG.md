#DECISION_LOG

## 1. Fetching de datos

Utilicé el fetching nativo de next con un revalidate de 1 hora para que los datos se actualicen cada hora.

## 2. Server/Client components

En este caso cada pagina es un client component ya que requieren interactividad de los datos que vienen de la API, ya sea por los filtros o por si se agregan o quitan de favoritos.

## 3. TailwindCSS

Decidí usar Tailwind para el diseño de la UI del proyecto ya que es una herramienta que conozco bien y hace mas eficiente el desarrollo de la UI mediante clases CSS.

## 4. Manejo de errores y loading

Creé componentes de loading.tsx y error.tsx para mostrar un mensaje de error en caso de que ocurra un error y un mensaje de loading mientras se cargan los datos, en este caso para el loading hice un skeleton con la misma estética que cada página.

## 5. LocalStorage

Decidí utilizar localStorage para guardar los id de los personajes que el usuario ha marcado como favoritos, de tal manera que el estado se mantiene incluso si el usuario recarga la página o cierra el navegador y permite que en la pagina de favoritos use los id guardados en localStorage para hacer el fetching de los los personajes favoritos gracias a la opción de llamar varios personajes por id separados por coma.

## 6. Accesibilidad

Implementé aria-label y navegación por teclado para los botones.

## 7. Optimismo

Implementé startTransition para que el estado se actualice instantáneamente cuando se marca o desmarca un personaje como favorito en la página de favoritos. En este caso no utilicé Suspense dado que el fetching de los personajes favoritos se hace en el useEffect y no en el renderizado del componente y depende tambien de los filtros, por lo que no se puede utilizar Suspense.
