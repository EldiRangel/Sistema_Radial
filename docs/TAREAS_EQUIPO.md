# Asignación de tareas y requerimientos del MVP

> Documento de trabajo del equipo RadioFlow.
> Estado del repositorio: estructura creada, sin código de aplicación todavía.
> Objetivo: pasar de la estructura a un MVP funcional en 8 semanas.

---

## 1. Regla de oro

**El primer objetivo no es tener todas las pantallas: es tener un flujo completo funcionando.**

Al final de la semana 2 debe existir este recorrido:

> Abrir la app → importar un audio → crear un bloque de parrilla → reproducirlo → registrar la emisión en el log.

Si ese flujo no funciona, no se agrega nada nuevo. Primero se arregla la base.

---

## 2. Roles y responsabilidades

| Persona | Rol | Dueño de | No debe hacer |
|---|---|---|---|
| **Eldi Rangel** | Líder de producto, análisis y QA | Alcance, SRS, backlog, criterios de aceptación, plan de pruebas, trazabilidad, actas, riesgos, demo y documento final. | No debe convertirse en el “apaga incendios” de todos; su trabajo es que el equipo sepa qué sigue y qué significa “hecho”. |
| **Luis Urdaneta** | Arquitecto de datos + UX de cabina | ERD, migraciones, seeds, consultas, respaldos, wireframes, design system y pantalla de configuración de audio. | No debe diseñar toda la interfaz solo; Esteban implementa y valida la UI. |
| **Luis Chirinos** | Tech lead de audio/backend | Motor de audio, scheduler, cola, crossfade, vivo, recuperación, reglas de negocio, pruebas unitarias y benchmarks. | No debe esperar a que la UI esté lista para probar el audio; el spike va primero. |
| **Esteban Ceballos** | Frontend + integración + automatización de pruebas | Configuración base, shell, pantallas, cartwall, cliente IPC, E2E e instalador. | No debe hacer “primero toda la UI” y dejar la integración para el final. |

---

## 3. Tareas por etapa

### 3.1 Primer corte — Semanas 1 y 2

**Meta:** walking skeleton funcionando.  
**Demo del viernes de la semana 2:** importar un audio, programarlo, reproducirlo y ver el log.

#### Eldi

- [ ] Cerrar el alcance MVP y la lista de “versión 2”.
- [ ] Escribir el SRS v1 con RF, RN, RNF y criterios de aceptación.
- [ ] Crear el tablero en GitHub Projects con columnas: Backlog, Esta semana, En progreso, En revisión, Hecho, Bloqueado.
- [ ] Crear las plantillas de issue y PR (ya están en `.github/`).
- [ ] Definir el set de audios de prueba y los datos de demo.
- [ ] Escribir los casos de prueba del walking skeleton.
- [ ] Preparar el acta de kickoff y el guion de demo.
- [ ] Revisar el ERD y los wireframes contra los requerimientos.

**Entregable:** SRS v1 + tablero + criterios de aceptación + casos de prueba del primer corte.

#### Luis Urdaneta

- [ ] Hacer el ERD v1 y el diccionario de datos.
- [ ] Crear las migraciones de Drizzle y el seed inicial.
- [ ] Tablas mínimas: `stations`, `users`, `media`, `programs`, `schedule_versions`, `blocks`, `block_items`, `play_sessions`, `play_log`, `settings`.
- [ ] Implementar las consultas: listar medios, obtener bloque actual, crear registro de emisión.
- [ ] Hacer wireframes de baja fidelidad de Cabina y Productor.
- [ ] Preparar 20 audios de prueba con metadatos.
- [ ] Definir índices para búsqueda de medios y consultas por fecha.

**Entregable:** base de datos que se crea desde cero con un comando, con seeds y consultas básicas; wireframes de cabina.

#### Luis Chirinos

- [ ] Hacer el spike de audio: reproducir dos WAV, hacer crossfade de 3 s y registrar inicio/fin.
- [ ] Documentar el resultado en `docs/adr/0003-motor-de-audio.md`.
- [ ] Definir la interfaz del motor: `load`, `play`, `pause`, `stop`, `next`, `crossfade`, `live`, eventos.
- [ ] Implementar reproducción, pausa, stop y siguiente.
- [ ] Implementar el protocolo/IPC para servir archivos de audio al renderer.
- [ ] Escribir pruebas unitarias de las funciones puras de tiempo y cola.
- [ ] Medir latencia, consumo de memoria y comportamiento al cambiar de dispositivo.

**Entregable:** spike funcionando + interfaz del motor documentada + play/pause/stop + pruebas unitarias.

#### Esteban

- [ ] Configurar Electron + Vite + React + TypeScript.
- [ ] Configurar ESLint, Prettier, Vitest y Playwright.
- [ ] Crear el shell: sidebar, header, rutas y tema visual.
- [ ] Crear las pantallas base con datos mock: Cabina, Biblioteca, Parrilla, Campañas, Reportes y Configuración.
- [ ] Crear el cliente IPC tipado en el renderer.
- [ ] Implementar la primera prueba E2E: abrir la app y navegar entre secciones.
- [ ] Implementar la biblioteca conectada al API real (listar e importar).

**Entregable:** app que abre, navega y muestra las pantallas base; primera pantalla conectada a datos reales; E2E inicial.

#### Punto de integración

Al final de la semana 2, Esteban y Chirinos deben sentarse juntos a conectar:

- Importar audio desde la biblioteca.
- Crear un bloque con ese audio.
- Reproducirlo desde Cabina.
- Ver el registro en el log.

Si falla, la semana 3 no empieza con funciones nuevas.

---

### 3.2 Segundo corte — Semanas 3 y 4

**Meta:** flujo completo de emisión.  
**Demo:** bloque de 10 minutos con crossfade, interrupción en vivo y reporte CSV.

#### Eldi

- [ ] Escribir y ejecutar los casos de prueba de parrilla, pauta y cabina.
- [ ] Hacer UAT con un operador real o simulado.
- [ ] Mantener el backlog priorizado y mover lo que no sea MVP a “Versión 2”.
- [ ] Actualizar el documento con resultados de las pruebas.
- [ ] Preparar el guion de demo de mitad de proyecto.

#### Urdaneta

- [ ] CRUD de biblioteca, parrilla y campañas.
- [ ] Validaciones de solapamiento y huecos.
- [ ] Consultas de reportes por fecha, anunciante y campaña.
- [ ] Respaldo y restauración de la base de datos.
- [ ] Pantalla de configuración de audio.
- [ ] Ajustar índices y consultas lentas.

#### Chirinos

- [ ] Scheduler y generación de cola por bloque.
- [ ] Crossfade y precarga del siguiente elemento.
- [ ] Reglas de pauta: vigencia, máximo por hora/día y separación.
- [ ] Interrupción en vivo con retorno a la cola.
- [ ] Manejo de archivos faltantes o corruptos.
- [ ] Recuperación de sesión después de cierre o caída.
- [ ] Pruebas unitarias de reglas y cola.

#### Esteban

- [ ] Pantalla de Cabina real: actual, restante, siguiente, estado y reloj.
- [ ] Controles de transporte y cartwall.
- [ ] Pantallas de Biblioteca, Parrilla y Campañas conectadas.
- [ ] Pantalla de Reportes con filtros y exportación CSV.
- [ ] Botón de “EN VIVO” y estados de la interfaz.
- [ ] Pruebas E2E del flujo de emisión.

**Entregable:** bloque de 10 minutos emitido con crossfade, vivo y reporte CSV que cuadra con el log.

---

### 3.3 Tercer corte — Semanas 5 y 6

**Meta:** endurecer el MVP y congelar funciones.  
**Demo:** release candidate v0.9 con prueba de 8 horas.

#### Eldi

- [ ] Regresión completa contra los criterios de aceptación.
- [ ] Triaje de bugs: P0, P1, P2.
- [ ] Actualizar manual de usuario y documento final.
- [ ] Verificar que cada requerimiento tenga una prueba asociada.
- [ ] Coordinar la prueba de 8 horas y documentar resultados.

#### Urdaneta

- [ ] Optimizar consultas y índices.
- [ ] Probar respaldo/restauración.
- [ ] Revisar integridad de datos y claves foráneas.
- [ ] Apoyar la integración y corregir bugs de datos.

#### Chirinos

- [ ] Prueba de 8 horas sin cortes.
- [ ] Medir memoria, CPU y latencia.
- [ ] Corregir bugs de audio, cola y recuperación.
- [ ] Implementar watchdog o recuperación automática si aplica.
- [ ] Documentar limitaciones técnicas.

#### Esteban

- [ ] Pruebas E2E de los flujos principales.
- [ ] Accesibilidad y navegación por teclado.
- [ ] Empaquetado con electron-builder.
- [ ] Instalador probado en una máquina limpia.
- [ ] Pulido visual y estados de error.

**Entregable:** release candidate v0.9, prueba de 8 horas documentada e instalador funcional.

---

### 3.4 Cierre — Semanas 7 y 8

**Meta:** entrega final y defensa.

#### Eldi

- [ ] UAT final y regresión.
- [ ] Documento final completo: requisitos, arquitectura, UML, pruebas, resultados y conclusiones.
- [ ] Ensayo de demo y guion de presentación.
- [ ] Verificar matriz de contribución del equipo.

#### Urdaneta

- [ ] Datos de demo estables.
- [ ] Respaldo final y verificación de restauración.
- [ ] Apoyo en la presentación.

#### Chirinos

- [ ] Corrección de bugs P0/P1.
- [ ] Prueba final de audio en la máquina de la demo.
- [ ] Apoyo técnico en la presentación.

#### Esteban

- [ ] Instalador final y release `v1.0`.
- [ ] Verificar instalación en una máquina limpia.
- [ ] Apoyo en la demo.

**Entregable:** v1.0 + documento final + demo ensayada.

---

## 4. Requerimientos del MVP

Prioridad: **M** = obligatorio; **S** = deseable; **C** = si sobra tiempo; **W** = no en esta versión.

### 4.1 Requerimientos funcionales

| ID | Requerimiento | Prioridad | Dueño principal | Apoyo |
|---|---|---|---|---|
| RF-01 | Iniciar sesión con usuario, contraseña y rol (administrador, productor, operador). | M | Chirinos | Esteban / Urdaneta |
| RF-02 | Gestionar usuarios: crear, desactivar y cambiar rol. | S | Urdaneta | Esteban |
| RF-03 | Importar audio MP3/WAV/OGG, validar formato y registrar metadatos mínimos. | M | Chirinos | Esteban |
| RF-04 | Editar metadatos, clasificar por tipo/género y buscar/filtrar. | M | Urdaneta | Esteban |
| RF-05 | Configurar puntos de entrada/salida y duración de fade por elemento. | S | Urdaneta | Chirinos |
| RF-06 | Detectar archivos faltantes y duplicados por hash. | S | Chirinos | Urdaneta |
| RF-07 | Crear parrilla diaria/semanal con bloques, días, horas y programa. | M | Urdaneta | Esteban |
| RF-08 | Asignar elementos a bloques con orden y hora programada. | M | Urdaneta | Esteban |
| RF-09 | Validar solapamientos, huecos y elementos sin archivo antes de publicar. | M | Chirinos | Esteban |
| RF-10 | Copiar/duplicar parrilla y publicar una versión. | S | Urdaneta | Esteban |
| RF-11 | Gestionar anunciantes, campañas y cuñas con vigencia y prioridad. | M | Urdaneta | Esteban |
| RF-12 | Definir pauta: días, horarios, máximo por hora/día y separación mínima. | M | Chirinos | Urdaneta |
| RF-13 | Generar la cola de emisión respetando parrilla, pauta, prioridad y reglas. | M | Chirinos | Urdaneta |
| RF-14 | Reproducir, pausar, detener, avanzar, retroceder y controlar volumen. | M | Chirinos | Esteban |
| RF-15 | Precargar el siguiente elemento y hacer crossfade configurable sin silencios. | M | Chirinos | Esteban |
| RF-16 | Operar en modo Auto-DJ y modo asistido (Live Assist). | M | Chirinos | Esteban |
| RF-17 | Interrumpir con entrada de audio en vivo y reanudar la cola al terminar. | M | Chirinos | Esteban |
| RF-18 | Cartwall con al menos 8 botones para jingles y efectos. | S | Esteban | Chirinos |
| RF-19 | Pantalla de cabina: actual, tiempo restante, siguiente, estado y reloj. | M | Esteban | Chirinos |
| RF-20 | Recuperar la sesión tras cierre o caída, reconstruir la cola y conservar el log. | M | Chirinos | Urdaneta |
| RF-21 | Seleccionar dispositivo de salida de audio y probar con un tono. | S | Chirinos | Esteban |
| RF-22 | Registrar cada emisión: programada vs. real, duración, estado, operador y motivo. | M | Urdaneta | Chirinos |
| RF-23 | Generar reporte diario y reporte de cumplimiento comercial; exportar CSV. | M | Urdaneta | Esteban |
| RF-24 | Exportar reportes a PDF y generar reporte de música. | S | Urdaneta | Esteban |
| RF-25 | Gestionar incidencias y auditoría de cambios en parrilla, campañas y usuarios. | S | Urdaneta | Chirinos |
| RF-26 | Configurar crossfade, rutas, zona horaria y respaldo/restauración. | S | Urdaneta | Esteban |
| RF-27 | Panel de salud: espacio en disco, archivos faltantes y últimos errores. | C | Esteban | Chirinos |
| RF-28 | Streaming a Icecast/Shoutcast. | W | — | — |
| RF-29 | Multiestación, nube, app móvil y colaboración remota. | W | — | — |
| RF-30 | Gestión automática de royalties y facturación. | W | — | — |

### 4.2 Reglas de negocio

| ID | Regla |
|---|---|
| RN-01 | Un bloque no puede solaparse con otro de la misma fecha y estación. |
| RN-02 | Una cuña solo se emite dentro de la vigencia de su campaña. |
| RN-03 | Se respetan los máximos por hora/día y la separación mínima por campaña/cuña. |
| RN-04 | El enlace en vivo tiene prioridad absoluta; el elemento actual se marca como parcial. |
| RN-05 | Si un archivo falta o falla, se salta, se registra la incidencia y se continúa. No se deja silencio mayor a 2 segundos. |
| RN-06 | El log de emisión es inmutable: editar la parrilla después no cambia lo que ya se emitió. |
| RN-07 | Solo el productor o el administrador publican la parrilla; el operador no la edita. |
| RN-08 | Al llegar la hora límite del bloque, se aplica fade/corte y se registra el cambio. |
| RN-09 | Toda hora se guarda en UTC y se muestra en la hora local de la emisora. |
| RN-10 | No se emite un elemento sin metadatos mínimos y archivo válido. |
| RN-11 | El crossfade se aplica solo entre elementos compatibles; cuñas y noticias pueden usar transición seca configurable. |
| RN-12 | La cola prioriza la pauta comercial fija y luego el contenido musical, sin alterar la hora de los bloques. |

### 4.3 Requerimientos no funcionales

| ID | Requerimiento |
|---|---|
| RNF-01 | **Estabilidad:** 8 horas continuas de emisión sin interrupciones no planificadas y sin fugas de memoria críticas. |
| RNF-02 | **Precisión:** inicio de un elemento programado dentro de ±500 ms; crossfade dentro de ±50 ms; reloj con precisión de 1 s. |
| RNF-03 | **Rendimiento:** biblioteca de 5.000 elementos; búsqueda < 300 ms; arranque < 5 s; cambio de pantalla < 200 ms. |
| RNF-04 | **Usabilidad:** operación principal con un clic o una tecla; modo cabina con alto contraste; resolución mínima 1366×768; textos en español. |
| RNF-05 | **Compatibilidad:** Windows 10/11 x64; MP3/WAV/OGG; salida de audio estándar. |
| RNF-06 | **Integridad:** transacciones ACID; log append-only; respaldo diario; recuperación ante corte de energía. |
| RNF-07 | **Seguridad:** contraseñas con hash; roles; bloqueo de sesión; nada de credenciales en texto plano. |
| RNF-08 | **Mantenibilidad:** arquitectura modular; pruebas unitarias del scheduler y las reglas; lint; documentación. |
| RNF-09 | **Instalación:** instalador único; funciona sin internet; datos en carpeta de usuario. |
| RNF-10 | **Observabilidad:** logs rotativos; diagnóstico exportable; panel de errores. |
| RNF-11 | **Accesibilidad:** navegación por teclado; foco visible; escalado de fuente. |
| RNF-12 | **Legal:** audio de demostración con licencia; reportes de música para derechos de autor; no incluir música comercial en el repositorio. |
| RNF-13 | **Escalabilidad:** el modelo de datos incluye `station_id` para una futura multiestación, pero el MVP es una sola emisora. |
| RNF-14 | **Disponibilidad:** arranque automático con Windows opcional; watchdog del motor de audio. |
| RNF-15 | **Respaldo:** retención de 7 días; restauración probada al menos una vez. |

### 4.4 Criterios de aceptación clave

- **AC-01 — Inicio programado:** dada una parrilla publicada con un bloque a las 10:00, cuando el reloj llega a las 10:00:00, el primer elemento suena y se registra con hora real dentro de ±500 ms.
- **AC-02 — Interrupción en vivo:** dado un elemento en reproducción, cuando el operador presiona “EN VIVO”, el audio baja en ≤ 1 s, se activa la entrada, el elemento se marca como parcial y al finalizar se reanuda el siguiente elemento de la cola.
- **AC-03 — Archivo faltante:** dado un archivo inexistente o corrupto, cuando el motor intenta reproducirlo, lo omite, registra la incidencia y continúa con el siguiente en ≤ 2 s.
- **AC-04 — Recuperación:** dado un cierre inesperado, cuando se reinicia la aplicación, detecta la sesión incompleta, reconstruye la cola y conserva los registros anteriores.
- **AC-05 — Reporte comercial:** dado un rango de fechas y un anunciante, cuando se genera el reporte, muestra todas las emisiones, totales y estados, y cuadra con el log.
- **AC-06 — Crossfade:** dado un crossfade configurado en 3 s, cuando faltan 3 s para el final, el siguiente elemento entra con transición audible y sin silencio; se registran ambos.
- **AC-07 — Solapamiento:** dado un bloque que se solapa con otro, cuando el productor guarda, el sistema impide o advierte y no publica.
- **AC-08 — Rendimiento:** con 5.000 elementos, la búsqueda por texto responde en < 300 ms y la UI sigue fluida.

---

## 5. Dependencias entre personas

| Dependencia | De quién | Hacia quién | Cuándo |
|---|---|---|---|
| Esquema de BD y migraciones | Urdaneta | Chirinos y Esteban | Semana 1 |
| Interfaz del motor de audio | Chirinos | Esteban | Semana 1 |
| Contrato IPC | Esteban + Chirinos | Urdaneta | Semana 2 |
| Pantalla de cabina | Esteban | Chirinos | Semana 2 |
| Datos de demo | Eldi + Urdaneta | Todos | Semana 1 |
| Criterios de aceptación | Eldi | Todos | Semana 1 |
| Reportes | Urdaneta | Esteban | Semana 3 |
| Prueba de 8 horas | Chirinos | Eldi | Semana 6 |

**Regla:** si una dependencia se atrasa, se avisa el mismo día y se busca una solución alternativa; no se espera a la reunión del viernes.

---

## 6. Definition of Done

Una tarea está hecha cuando:

- [ ] Está implementada y compila.
- [ ] Pasa lint y pruebas.
- [ ] Fue revisada por al menos otra persona.
- [ ] Cumple el criterio de aceptación.
- [ ] Se probó en la aplicación real.
- [ ] La documentación o el manual se actualizó.
- [ ] No introduce bugs P0/P1 conocidos.

---

## 7. Mensajes para asignar las tareas

### Para Luis Urdaneta

> “Luis, esta semana necesito el ERD v1 y las migraciones con seeds antes del jueves. Entregable: base de datos que se crea desde cero con un comando, 20 audios de prueba y diccionario de datos. El viernes lo revisamos contra los casos de uso. Si ves un riesgo en el modelo, lo hablamos el miércoles; no lo cambies solo.”

### Para Luis Chirinos

> “Luis, tu primera tarea no es el motor completo: es el spike de audio. Para el miércoles necesito una prueba que reproduzca dos WAV, haga crossfade de 3 s y registre inicio/fin. Si no funciona en Windows, cambiamos de estrategia ese mismo día. Después defines la interfaz del motor y la documentas en `docs/adr/0003-motor-de-audio.md`. Es el camino crítico: avísame cualquier bloqueo el mismo día.”

### Para Esteban Ceballos

> “Esteban, arranca con la configuración base y el shell. Para el viernes quiero poder abrir la app, navegar entre Cabina, Biblioteca, Parrilla, Campañas, Reportes y Configuración, y ver datos mock. La semana 2 conectas la primera pantalla real. La UI de cabina debe funcionar con teclado y no bloquear el audio; eso es criterio de aceptación.”

### Para el grupo

> “Equipo, la meta no es hacer un Rivendell; es entregar un MVP estable que demuestre el proceso. Alcance MVP: una emisora, Windows, archivos locales, parrilla, reproducción con crossfade, interrupción en vivo, log y reportes. Fuera: streaming, multiestación, nube y móvil. Tenemos 8 semanas y cada viernes hay demo obligatoria. Regla: nada se considera hecho si no está en `main`, probado y documentado.”

---

## 8. Orden de ejecución por persona

Esta es la secuencia exacta. No es una lista de deseos: es el orden en el que cada uno debe avanzar. Si una tarea depende de otra persona, se trabaja en paralelo en lo que no dependa de ella.

### 8.1 Eldi — orden de trabajo

1. Cerrar el alcance MVP y la lista de “no se hará”.
2. Escribir el SRS v1: actores, RF, RN, RNF y criterios de aceptación.
3. Crear el tablero y cargar el backlog inicial con dueños y prioridades.
4. Definir el set de audios de prueba y los datos de demo.
5. Escribir los casos de prueba del walking skeleton.
6. Revisar el ERD de Urdaneta contra los requerimientos.
7. Revisar los wireframes de Urdaneta contra los flujos de cabina.
8. Preparar el acta de kickoff y el guion de la demo de la semana 2.
9. Semana 2: probar el flujo importar → programar → reproducir → log.
10. Semana 2: registrar bugs y priorizarlos; no dejar que el alcance crezca.
11. Semanas 3–4: probar parrilla, pauta, crossfade, vivo y reportes.
12. Semanas 3–4: hacer UAT con un operador real o simulado.
13. Semanas 5–6: regresión completa, triaje de bugs y matriz de trazabilidad.
14. Semanas 5–6: actualizar manual de usuario y documento final.
15. Semanas 5–6: coordinar y documentar la prueba de 8 horas.
16. Semanas 7–8: UAT final, documento final, ensayo de demo y presentación.

**Regla para Eldi:** no empieces a “apagar incendios” antes de tener el alcance y los criterios de aceptación escritos. Sin eso, el equipo no sabe qué está construyendo.

### 8.2 Luis Urdaneta — orden de trabajo

1. Leer el SRS y los casos de uso de Eldi.
2. Hacer el ERD v1 y el diccionario de datos.
3. Crear `schema.ts` con las tablas mínimas del MVP.
4. Configurar Drizzle Kit y generar la primera migración.
5. Crear `client.ts`: SQLite, WAL, `foreign_keys` y cliente Drizzle.
6. Crear `seed.ts`: estación, configuración, programas y 20 audios de prueba.
7. Implementar las consultas básicas: listar medios, obtener bloque actual y crear log.
8. Hacer los wireframes de Cabina y Productor.
9. Semana 2: conectar la biblioteca a las consultas reales con Esteban.
10. Semana 2: verificar que la migración corre desde cero en una base limpia.
11. Semana 3: CRUD de biblioteca, parrilla y campañas.
12. Semana 3: validaciones de solapamiento, huecos y elementos sin archivo.
13. Semana 3: consultas de cola y pauta para Chirinos.
14. Semana 4: consultas de reportes por fecha, anunciante y campaña.
15. Semana 4: respaldo/restauración y pantalla de configuración de audio.
16. Semana 5: índices, rendimiento e integridad de datos.
17. Semana 6: apoyar la integración y corregir bugs de datos.
18. Semanas 7–8: datos de demo estables, respaldo final y apoyo en la presentación.

**Regla para Urdaneta:** primero el esquema y las migraciones; después las consultas; al final la optimización. No optimices tablas que todavía no existen.

### 8.3 Luis Chirinos — orden de trabajo

1. Leer el SRS y los criterios de aceptación de audio.
2. Hacer el spike de audio en una página mínima, sin esperar la UI completa.
3. Probar dos WAV, crossfade de 3 s y registro de inicio/fin.
4. Medir latencia, memoria y comportamiento al cambiar de dispositivo.
5. Documentar el resultado en `docs/adr/0003-motor-de-audio.md`.
6. Definir la interfaz del motor: `load`, `play`, `pause`, `stop`, `next`, `crossfade`, `live` y eventos.
7. Acordar con Esteban el contrato de estados y eventos de la cabina.
8. Implementar el protocolo/IPC para servir archivos de audio al renderer.
9. Implementar el núcleo del motor: decodificar, reproducir, pausar, stop y volumen.
10. Escribir pruebas unitarias de tiempo, cola y crossfade.
11. Semana 2: integrar el motor con la UI y registrar inicio/fin en el log.
12. Semana 2: dejar funcionando el walking skeleton con Esteban y Urdaneta.
13. Semana 3: scheduler y generación de cola por bloque.
14. Semana 3: precarga, crossfade y reglas de pauta.
15. Semana 4: interrupción en vivo con retorno a la cola.
16. Semana 4: archivos faltantes, errores y recuperación de sesión.
17. Semana 5: prueba de 2 horas y luego prueba de 8 horas.
18. Semana 5: corregir bugs de audio, cola y recuperación.
19. Semana 6: congelar el motor y apoyar la integración.
20. Semanas 7–8: prueba final en la máquina de la demo y corrección de bugs P0/P1.

**Regla para Chirinos:** el spike va antes que el motor completo. Si el spike falla, se cambia de estrategia esa misma semana, no en la semana 6.

### 8.4 Esteban Ceballos — orden de trabajo

1. Leer el SRS y el inventario de pantallas.
2. Configurar Electron + Vite + React + TypeScript.
3. Configurar ESLint, Prettier, Vitest y Playwright.
4. Crear el shell: sidebar, header, rutas y tema visual.
5. Crear las pantallas base con datos mock: Cabina, Biblioteca, Parrilla, Campañas, Reportes y Configuración.
6. Crear el cliente IPC tipado y el contrato con Chirinos/Urdaneta.
7. Implementar la primera prueba E2E: abrir la app y navegar.
8. Semana 2: conectar la biblioteca a datos reales.
9. Semana 2: implementar la Cabina básica con play/pause/stop y cola.
10. Semana 2: integrar el walking skeleton con Chirinos y Urdaneta.
11. Semana 3: Cabina real con actual, restante, siguiente, estado y reloj.
12. Semana 3: controles de transporte, cartwall y atajos de teclado.
13. Semana 3: pantallas de Parrilla y Campañas conectadas.
14. Semana 4: pantalla de Reportes con filtros y exportación CSV.
15. Semana 4: botón “EN VIVO”, estados de la interfaz y manejo de errores.
16. Semana 5: pruebas E2E de los flujos principales.
17. Semana 5: accesibilidad, navegación por teclado y pulido visual.
18. Semana 5: empaquetado con electron-builder.
19. Semana 6: instalador probado en máquina limpia y corrección de bugs.
20. Semanas 7–8: release `v1.0`, instalador final y apoyo en la demo.

**Regla para Esteban:** no esperes al backend para maquetar. Usa datos mock, pero no considers una pantalla terminada hasta que esté conectada a datos reales y probada con teclado.

### 8.5 Orden de integración del equipo

1. Eldi entrega SRS y criterios de aceptación.
2. Esteban entrega la base del proyecto y el shell.
3. Chirinos entrega el spike y la interfaz del motor.
4. Urdaneta entrega el ERD, las migraciones y el seed.
5. Esteban conecta la biblioteca a datos reales.
6. Chirinos conecta el motor a la Cabina.
7. Urdaneta conecta parrilla, cola y log.
8. Eldi prueba el flujo completo y registra bugs.
9. El equipo corrige y repite la demo cada viernes.

**Dependencia crítica:** si Urdaneta no entrega el esquema, Chirinos y Esteban no pueden conectar datos reales. Si Chirinos no entrega el spike, Esteban no puede construir la Cabina real. Por eso el orden importa.

---

## 9. Checklist del líder antes de cerrar la semana

- [ ] Cada persona sabe cuál es su tarea y su criterio de aceptación.
- [ ] El tablero refleja la realidad.
- [ ] No hay tareas “en progreso” sin dueño.
- [ ] Los bloqueos están escritos y tienen responsable.
- [ ] La demo del viernes funciona, no es una presentación de diapositivas.
- [ ] El alcance no creció sin una decisión explícita.
- [ ] La documentación se actualizó.
- [ ] El equipo sabe qué sigue la próxima semana.
