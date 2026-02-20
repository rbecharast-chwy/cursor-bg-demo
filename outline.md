# Outline: Background Agents en Cursor

**Duración total:** ~40 minutos
**Formato:** Teoría + Demo en vivo
**Audiencia:** Developers familiarizados con editores de código e IA

---

## Parte 1: Teoría (15-18 min)

### Slide 1 — Título (30 seg)
- Presentarse brevemente
- "Hoy vamos a ver una feature de Cursor que cambia cómo delegamos trabajo"

### Slide 2 — ¿Qué es Cursor? (2 min)
- Repaso rápido para quienes no lo conocen
- Basado en VS Code, IA nativa
- Mencionar las herramientas: Tab, Cmd+K, Chat, Composer, Agent
- **Punto clave:** "Cursor ya tiene un Agent Mode que funciona bien, pero requiere que vos estés ahí. ¿Y si pudiera trabajar solo?"
- **Transición:** "Hablemos del problema que resuelve..."

### Slide 3 — El problema (2-3 min)
- Hablar del context switching
- Dato: 23 min para retomar concentración (estudio de UC Irvine)
- Ejemplos concretos: estás en una feature → llega un bug report → hay que actualizar docs
- Preguntar a la audiencia: "¿A cuántos les pasó esta semana?"
- **Transición:** "Los Background Agents atacan exactamente este problema"

### Slide 4 — ¿Qué son los Background Agents? (2-3 min)
- Definición clara: agentes autónomos que corren en la nube
- Enfatizar: NO interrumpen tu trabajo
- Analogía: "Es como tener un junior developer que agarra tickets mientras vos estás en lo importante"
- Mencionar que crean PRs, no pushean directo a main
- **Transición:** "Veamos cómo funcionan por dentro"

### Slide 5 — Arquitectura (2 min)
- Explicar el diagrama
- VM aislada en la nube
- Clona el repo, crea branch, trabaja, crea PR
- Seguridad: no tiene acceso a tus secrets locales
- **Punto clave:** "Trabaja en aislamiento total — no puede romper tu código"
- **Transición:** "En la práctica, el flujo es muy simple"

### Slide 6 — Flujo de trabajo (2 min)
- Paso a paso del flujo
- Enfatizar lo simple: issue → asignar → seguir trabajando → revisar PR
- Mencionar que se puede seguir el progreso en Cursor
- Tiempos típicos: 2-10 min
- **Transición:** "¿Para qué tipo de tareas sirve?"

### Slide 7 — Casos de uso (2 min)
- Recorrer la lista de buenos casos de uso
- Ejemplos concretos de cada uno
- Ser honesto con las limitaciones (columna derecha)
- **Punto clave:** "No es magia — es una herramienta. Funciona mejor con tareas bien definidas"
- **Transición:** "Hablemos de las limitaciones antes de ir a la demo"

### Slide 8 — Limitaciones (1-2 min)
- Ser transparente
- La calidad del output depende de la calidad del issue
- No reemplaza code review
- Feature en beta, sigue mejorando
- **Transición:** "¿Cómo se compara con lo que ya existe?"

### Slide 9 — Comparación (1-2 min)
- Recorrer la tabla rápidamente
- No es competencia, son complementarios
- Background Agents = tareas async e independientes
- **Transición:** "Suficiente teoría. Veamos esto en acción."

---

## Parte 2: Demo en vivo (18-20 min)

### Preparación pre-demo
- Tener el repo clonado y `npm install` hecho
- Tener los 3 issues creados en GitHub
- Tener Cursor abierto con el proyecto
- Tener GitHub abierto en otra pestaña del browser
- Correr `npm test` para mostrar los tests fallando

### Slide 10 — Setup del proyecto (2 min)
- Mostrar la estructura del proyecto
- Correr `npm test` → mostrar que hay tests fallando
- Explicar brevemente los 3 bugs intencionales
- "Tenemos 3 issues creados, vamos a dejar que los Background Agents los resuelvan"

### Slide 11-12 — Demo 1: Fix GET /tasks/:id (5-6 min)
- **Mostrar el bug:** abrir `routes/tasks.js`, señalar el `==`
- **Mostrar el issue** en GitHub
- **Asignar al Background Agent** desde Cursor
- **Mientras trabaja:** explicar lo que está haciendo (se ve en el panel)
- **Cuando termine:** mostrar el PR, revisar los cambios
- **Punto clave:** "Yo no toqué una línea de código, y el bug está resuelto"

### Slide 13-14 — Demo 2: Validación (5-6 min)
- **Mostrar el bug:** `curl` con título vacío → funciona (no debería)
- **Asignar el issue** al Background Agent
- **Mientras trabaja:** hablar sobre cómo el agente lee los tests existentes para entender qué se espera
- **Cuando termine:** mostrar el PR, revisar validación + tests nuevos
- **Punto clave:** "Notá que agregó tests, no solo el fix"

### Slide 15-16 — Demo 3: Documentación (4-5 min)
- **Mostrar el README** actual (incompleto)
- **Asignar el issue**
- **Mientras trabaja:** "Esta es una tarea que todos odiamos hacer. Perfecta para delegar."
- **Cuando termine:** mostrar el PR con el README actualizado
- **Punto clave:** "La documentación se actualizó basándose en el código real"

### Slide 17 — Revisando los PRs (2-3 min)
- Mostrar los 3 PRs en GitHub
- Revisar rápidamente la calidad de los cambios
- Mostrar que los tests pasan
- **Punto clave:** "3 tareas resueltas mientras yo estuve presentando"

---

## Parte 3: Cierre (4-5 min)

### Slide 18 — Tips (2-3 min)
- Recorrer cada tip
- Enfatizar `.cursorrules` — le da contexto al agente sobre el estilo del proyecto
- "El agente es tan bueno como el issue que le das"

### Slide 19 — Q&A (2-5 min)
- Abrir a preguntas
- Tener preparadas respuestas para preguntas comunes:
  - **"¿Cuánto cuesta?"** — Incluido en Cursor Pro/Business (con límites de uso)
  - **"¿Funciona con repos privados?"** — Sí
  - **"¿Puede acceder a APIs externas?"** — No, corre aislado
  - **"¿Qué pasa si el agente se equivoca?"** — Es un PR, no se mergea automáticamente
  - **"¿Cuántos agentes pueden correr en paralelo?"** — Depende del plan, generalmente varios

---

## Notas del presentador

### Timing
- Si la demo tarda más de lo esperado, abreviar el cierre
- Si un agente tarda mucho, tener screenshots de PRs anteriores como backup
- Los 40 min son orientativos — mejor terminar en 35 que pasar de 45

### Plan B para la demo
- Si no hay internet: mostrar screenshots/video de una sesión previa
- Si el agente falla: usarlo como oportunidad para hablar de limitaciones
- Tener un branch con los fixes ya hechos por si hay que mostrar el resultado

### Cosas a recordar
- No usar jerga sin explicarla
- Mantener el ritmo — la demo es la parte más interesante
- Hacer contacto visual con la audiencia durante la parte teórica
- Dejar que la audiencia vea bien la pantalla durante la demo
