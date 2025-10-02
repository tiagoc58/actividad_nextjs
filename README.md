### 1) ¿Qué ventajas tiene usar React frente a trabajar solo con JavaScript puro para interfaces web?

React aporta un modelo de componentes declarativo, manejo de estado y un ecosistema que facilita construir interfaces complejas, reutilizables y mantenibles.

Ventajas concretas
- Componentes reutilizables: UI descompuesta en piezas que se pueden componer y probar por separado.
- Declarativo vs imperativo: describes _qué_ debería verse, no _cómo_ actualizar el DOM manualmente.
- Virtual DOM y reconciliación: actualizaciones eficientes del DOM reduciendo operaciones costosas.
- Estado y hooks: manejo de estado local y efectos (useState, useEffect) de forma predecible.
- Ecosistema y herramientas: router, testing libs, DevTools, y una gran comunidad.

### 2) ¿Qué beneficios ofrece Next.js al trabajar sobre React?

Next.js añade características de servidor, optimizaciones y convenciones que aceleran rendimiento y despliegue.

Beneficios clave
- Renderizado (SSR) y generación estática (SSG): opciones para mejorar tiempo de carga y SEO.
- Rutas por archivos (file-based routing): convenciones que simplifican la estructura del proyecto.
- Optimización automática: split de código, optimización de imágenes y fuentes.
- API routes y funciones serverless: endpoints sencillos dentro del mismo repo.
- ISR (Incremental Static Regeneration): regeneración de páginas estáticas sin un rebuild completo.
- Mejor DX: configuración mínima, integración con Vercel y despliegues sencillos.

### 3) ¿Qué significa que Next.js tenga un App Router y por qué se recomienda usarlo?

El *App Router* (directorio `app/`) es el sistema de enrutamiento moderno de Next.js que integra React Server Components, layouts anidados y data fetching más directo.

Qué aporta
- Server Components por defecto: renderizado en servidor por defecto para reducir JS enviado al cliente.
- Layouts anidados y persistencia de estado visual: permite definir layouts que se comparten entre rutas sin recargar toda la UI.
- Streaming y UI de carga: soporta renderizado progresivo y placeholders (`loading.js`).
- Colocación de datos y componentes: estructura más modular y predecible (cada ruta puede llevar su propia lógica de datos).
- Recomendación: se recomienda para nuevos proyectos por mejores patrones de rendimiento y organización; aún existe el Pages Router, pero App Router es la dirección moderna de Next.js.

### 4) ¿Qué diferencia hay entre client components y server components en Next.js?

Los *server components* se renderizan en el servidor (no se envía código JS al cliente), mientras que los *client components* se ejecutan en el navegador y permiten interactividad.

Diferencias principales
- Server components
  - Se ejecutan en servidor.
  - Pueden realizar fetchs directos y usar módulos de servidor.
  - No pueden usar hooks de cliente (`useState`, `useEffect`) ni APIs del navegador (`window`).
  - Reducen el tamaño del bundle enviado al cliente.
- Client components
  - Llevan la directiva `"use client"` arriba del archivo.
  - Permiten estado, efectos y event handlers.
  - Se envían al navegador y requieren hidratación.

Patrón recomendado: escribir componentes como server components por defecto y marcar como client solo los que necesiten interactividad.

### 5) ¿Por qué crees que en desarrollo profesional se usan repositorios públicos o privados en GitHub en lugar de solo trabajar en carpetas locales?

Razones prácticas
- Control de versiones: histórica clara de cambios y posibilidad de volver a estados anteriores.
- Colaboración: pull requests, code review y trabajo en ramas facilitan equipos.
- Copia de seguridad remota: respaldo fuera del equipo local.
- Integración continua / despliegue: GitHub Actions, pipelines y despliegues automáticos.
- Trazabilidad y comunicación: issues, wikis y project boards integrados.
- Visibilidad y portafolio: repos públicos sirven para demostrar trabajo; privados permiten control de acceso.
- Buenas prácticas de seguridad y auditoría: políticas, protecciones de ramas y logs de actividad.
