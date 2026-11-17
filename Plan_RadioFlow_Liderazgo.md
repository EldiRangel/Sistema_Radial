# RadioFlow — Plan de liderazgo, alcance MVP y reparto de trabajo

> Documento de trabajo para el equipo de 4 personas.
> Objetivo: convertir la propuesta de los dos Word en un plan ejecutable de 8 semanas, con alcance realista, requerimientos claros y tareas asignadas.

---

## 0. Resumen ejecutivo

**La idea es buena. El plan actual, tal como está, es demasiado ambicioso para 8 semanas y 4 personas.**

Los dos documentos tienen una base sólida:

- El **Documento 1** plantea bien el problema, los módulos y los diagramas UML.
- El **Documento 2** es un buen análisis comparativo del mercado y confirma las funciones que debe tener un sistema de radio: Auto-DJ / Live Assist, cartwall, crossfade/CUE y bitácora de auditoría.

Pero falta lo más importante para ejecutar:

- Un **alcance MVP** cerrado.
- **Requerimientos funcionales y no funcionales** con criterios de aceptación.
- **Stack tecnológico** decidido.
- **Arquitectura** y contrato entre frontend/backend.
- **Plan de pruebas** y matriz de trazabilidad.
- Un **reparto por funcionalidades**, no por capas aisladas.

**Recomendación:** desarrollar un MVP de **una sola emisora, aplicación de escritorio, archivos locales, un operador, sin streaming, sin nube y sin multiestación**. La prioridad es la continuidad al aire, el crossfade, la interrupción en vivo y la bitácora/reportes. Lo demás es versión 2.

---

## 1. Análisis de los dos documentos

### 1.1 Documento 1 — “Sistema de Gestión de Emisión Radial y Continuidad Programática”

**Lo que está bien:**

- El planteamiento del problema es claro y realista: baches al aire, errores en la pauta, falta de trazabilidad y dificultad para meter enlaces en vivo.
- La solución se divide en tres módulos coherentes: Gestión/Programación, Emisión/Continuidad y Reportes/Auditoría.
- Los diagramas (funcional, casos de uso, clases, actividades y secuencia) demuestran que el equipo entendió el flujo general.
- Hay roles y un cronograma, lo cual es importante para la nota y para organizarse.

**Lo que falta o está débil:**

| Área | Problema | Qué hacer |
|---|---|---|
| Alcance | Promete un sistema “tipo Playout” completo, pero no define qué entra y qué no. | Escribir un alcance MVP y una lista de “no se hará”. |
| Requerimientos | No hay lista de requerimientos funcionales, reglas de negocio ni requerimientos no funcionales. | Agregar la sección 3 de este documento. |
| Criterios de aceptación | No se sabe cuándo una función está “terminada”. | Definir criterios medibles (ver 3.5). |
| Stack | No dice con qué tecnología se va a construir. | Decidir y congelar en un ADR (ver 2.3). |
| Arquitectura | No hay diagrama de componentes ni separación entre UI, motor de audio, scheduler y base de datos. | Agregar arquitectura C4 o diagrama de componentes. |
| Pruebas | Las pruebas aparecen solo en las semanas 7 y 8. | Probar desde la semana 2 y automatizar lo crítico. |
| Riesgos | No hay matriz de riesgos ni plan B. | Agregar la sección 6. |
| Documento | Faltan objetivos, justificación, alcance, stakeholders, diccionario de datos, plan de pruebas y conclusiones. | Completar el índice del trabajo final. |
| Detalles | Errores de forma: “Esteban ceballos”, “Luis Chirinos/ / Backend”, “Diseñador BD”. | Corregir nombres y roles. |

**Riesgo principal:** el motor de audio y la continuidad dependen de una sola persona (Luis Chirinos), y la integración con el frontend se deja para la semana 6. Si el motor se atrasa, no hay demo.

### 1.2 Documento 2 — “Análisis Comparativo de Sistemas de Emisión y Automatización Radial”

**Lo que está bien:**

- Compara cuatro referentes reales: RadioDJ, ZaraRadio/ZaraStudio, LibreTime y Rivendell.
- Identifica las funciones transversales que sí o sí debe tener un sistema de radio:
  - Modo **Live Assist** y **Auto-DJ**.
  - **Cartwall** para jingles y efectos.
  - **Crossfade y CUE** para evitar silencios.
  - **Bitácora/auditoría** para facturación y derechos de autor.
- La tabla comparativa y las conclusiones son un buen insumo para justificar el proyecto.

**Lo que falta o está débil:**

| Área | Problema | Qué hacer |
|---|---|---|
| Metodología | No explica cómo seleccionó las cuatro aplicaciones ni con qué criterios las comparó. | Agregar criterios: licencia, plataforma, arquitectura, funciones, usuario objetivo. |
| Implicaciones | Describe los sistemas, pero no dice qué debe adoptar RadioFlow. | Agregar una tabla “función → decisión → requerimiento”. |
| Fuentes | Las referencias no tienen fecha de consulta y no se citan en el texto. | Usar APA 7 y agregar fechas de acceso. |
| Precisión | Dice que LibreTime es “Open Broadcast Software”; eso es OBS, no LibreTime. | Corregir: “plataforma de automatización radial de código abierto”. |
| Profundidad | La tabla es binaria y no pondera criterios. | Agregar columnas: programación, crossfade, reportes, streaming, multiestación, soporte. |
| Rol en el trabajo | Parece un trabajo aparte, no un capítulo del proyecto. | Integrarlo como “Estado del arte” y cerrar con “Implicaciones para RadioFlow”. |

**Conclusión:** el Documento 2 no es el plan del sistema; es la justificación del estado del arte. Úsenlo para decidir qué funciones copiar, adaptar o dejar fuera.

### 1.3 Veredicto

| Pregunta | Respuesta |
|---|---|
| ¿La idea es viable? | Sí, como proyecto académico y como MVP de una emisora. |
| ¿El alcance actual es viable en 8 semanas? | No. Está sobrecargado y deja la integración y las pruebas para el final. |
| ¿Los diagramas sirven? | Sí como base, pero hay que corregir el diagrama de clases, el de actividades y el de secuencia. |
| ¿Deben desarrollarlo? | Sí, pero con el alcance reducido de la sección 2 y el plan de la sección 4. |
| ¿La nota depende de tener muchas funciones? | No. Depende de que el problema, los requisitos, el diseño, la implementación y las pruebas sean coherentes. Un MVP estable vale más que 20 funciones a medias. |

---

## 2. Alcance recomendado

### 2.1 MVP (lo que sí se va a construir)

**Una sola emisora. Aplicación de escritorio para Windows. Archivos locales. Un operador por cabina. Sin internet obligatorio.**

1. **Biblioteca multimedia**
   - Importar MP3, WAV y OGG.
   - Metadatos mínimos: título, artista, género, tipo (música, cuña, jingle, noticia, otro), duración y ruta.
   - Buscar, filtrar y detectar archivos faltantes o duplicados.

2. **Parrilla de programación**
   - Crear bloques por día y hora, con programa y estado.
   - Asignar elementos a cada bloque en orden.
   - Validar solapamientos, huecos y elementos sin archivo.
   - Publicar una versión de la parrilla; el operador ejecuta la publicada.

3. **Pauta comercial**
   - Anunciantes y campañas con vigencia.
   - Cuñas asociadas a campañas.
   - Reglas: máximo por hora/día, separación mínima y prioridad.
   - Generación automática de la cola respetando la pauta.

4. **Emisión y continuidad**
   - Reproducir, pausar, detener, siguiente, volumen y posición.
   - Precargar el siguiente elemento y hacer crossfade configurable.
   - Modo Auto-DJ y modo asistido (Live Assist).
   - Interrupción con entrada de audio en vivo y retorno a la cola.
   - Pantalla de cabina: elemento actual, tiempo restante, siguiente, estado y reloj.
   - Recuperación después de cierre o caída: reconstruir la cola y conservar el log.

5. **Bitácora y reportes**
   - Registro inmutable de cada emisión: hora programada, hora real de inicio/fin, duración, estado, operador y motivo.
   - Reporte diario de emisión.
   - Reporte de cumplimiento comercial por anunciante/campaña/fecha.
   - Exportación a CSV (PDF es deseable, no obligatorio para el MVP).
   - Registro de incidencias: archivo faltante, corte, silencio, error.

6. **Configuración y respaldo**
   - Crossfade, rutas de almacenamiento, zona horaria y dispositivo de salida.
   - Respaldo y restauración de la base de datos y la configuración.

### 2.2 Versión 2 / fuera de alcance

Estas funciones se pueden mencionar en el documento como “trabajo futuro”, pero **no se implementan** en las 8 semanas:

- Streaming a Icecast/Shoutcast.
- Multiestación y publicidad localizada por zona.
- Aplicación web remota o en la nube.
- App móvil.
- Gestión automática de derechos de autor/royalties.
- Normalización de loudness, análisis de waveform y detección automática de BPM/tempo.
- Reglas avanzadas de rotación musical (separación por artista, álbum, tempo).
- Integración con hardware broadcast (AudioScience, GPIO, consolas).
- Multiusuario concurrente y edición colaborativa.
- Firma digital de contratos y facturación.

> **Regla de oro:** si una función no ayuda a demostrar “programar → emitir → interrumpir → auditar”, va a la lista de versión 2.

### 2.3 Stack recomendado

No hay una stack mágica. La mejor es la que el equipo ya domina. Estas son las opciones sensatas:

| Necesidad | Opción recomendada | Alternativa |
|---|---|---|
| Aplicación de escritorio | **Electron + React + TypeScript + Vite** | Tauri + React (si dominan Rust) |
| Audio | **Web Audio API** (`AudioBufferSourceNode` + `GainNode`) | NAudio (.NET), sounddevice (Python), libVLC |
| Base de datos | **SQLite** + `better-sqlite3` + Drizzle/Kysely | PostgreSQL solo si hay multiusuario real |
| Backend | **Node/TypeScript en el proceso principal de Electron** | Python/FastAPI como servicio local |
| UI | React + Tailwind/shadcn o MUI | Figma/Penpot para diseño |
| Pruebas | Vitest + Playwright | Jest + pruebas manuales guiadas |
| Empaquetado | electron-builder (NSIS) | Tauri bundler |
| CI | GitHub Actions | Scripts locales |

**Si el equipo domina C#:** .NET 8 + WPF/WinUI + NAudio + SQLite/EF Core es más robusto para audio en Windows.
**Si el equipo domina Python:** PySide6 + SQLite + sounddevice es válido y rápido de desarrollar.
**Eviten:** una aplicación 100 % navegador para el motor de audio. Los navegadores limitan el acceso al dispositivo, suspenden pestañas en segundo plano y no dan la estabilidad de un playout. Si quieren web, el motor debe ser un agente local.

**Decisión que deben tomar en la semana 1:** stack, base de datos y estrategia de audio. Documántenla en `docs/adr/001-stack.md`.

### 2.4 Arquitectura mínima

```
┌─────────────────────────────────────────────┐
│ UI (React)                                  │
│  - Cabina                                   │
│  - Productor                                │
│  - Reportes                                 │
└──────────────────┬──────────────────────────┘
                   │ IPC / API local
┌──────────────────▼──────────────────────────┐
│ Servicios de aplicación                     │
│  - PlaybackController                       │
│  - ScheduleService                          │
│  - CampaignService                          │
│  - ReportService                            │
│  - RecoveryService                          │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│ Dominio                                     │
│  - Cola de emisión                          │
│  - Scheduler y reglas de pauta              │
│  - Modelo de bitácora                       │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│ Infraestructura                             │
│  - SQLite                                   │
│  - AudioEngine (Web Audio / NAudio)         │
│  - Archivos de audio                        │
│  - Exportación CSV/PDF                      │
└─────────────────────────────────────────────┘
```

**Reglas técnicas importantes:**

- El hilo de audio nunca se bloquea con consultas a la base de datos ni con la UI.
- La UI no habla directamente con la base de datos; pasa por los servicios.
- El log de emisión es **append-only**: no se edita ni se borra.
- Las horas se guardan en UTC y se muestran en hora local de la emisora.
- El scheduler usa un reloj monotónico y precarga el siguiente elemento.
- El motor de audio expone eventos: `onStarted`, `onEnded`, `onError`, `onCrossfade`, `onLiveStart`, `onLiveEnd`.
- La recuperación se apoya en una tabla de sesiones de emisión y en el log.

---

## 3. Requerimientos

### 3.1 Actores

| Actor | Descripción |
|---|---|
| Administrador | Gestiona usuarios, configuración y respaldos. |
| Productor / Director | Crea parrilla, biblioteca, campañas y reportes. |
| Operador de cabina | Ejecuta la emisión, controla la cola e interrumpe con en vivo. |
| Sistema de audio | Salida de audio, entrada en vivo y archivos locales. |

### 3.2 Requerimientos funcionales

Prioridad: **M** = obligatorio para el MVP; **S** = deseable; **C** = si sobra tiempo; **W** = no en esta versión.

| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-01 | Iniciar sesión con usuario, contraseña y rol (administrador, productor, operador). | M |
| RF-02 | Gestionar usuarios: crear, desactivar y cambiar rol. | S |
| RF-03 | Importar audio MP3/WAV/OGG, validar formato y registrar metadatos mínimos. | M |
| RF-04 | Editar metadatos, clasificar por tipo/género y buscar/filtrar. | M |
| RF-05 | Configurar puntos de entrada/salida y duración de fade por elemento. | S |
| RF-06 | Detectar archivos faltantes y duplicados por hash. | S |
| RF-07 | Crear parrilla diaria/semanal con bloques, días, horas y programa. | M |
| RF-08 | Asignar elementos a bloques con orden y hora programada. | M |
| RF-09 | Validar solapamientos, huecos y elementos sin archivo; advertir antes de publicar. | M |
| RF-10 | Copiar/duplicar parrilla y publicar una versión. | S |
| RF-11 | Gestionar anunciantes, campañas y cuñas con vigencia y prioridad. | M |
| RF-12 | Definir pauta: días, horarios, máximo por hora/día y separación mínima. | M |
| RF-13 | Generar la cola de emisión respetando parrilla, pauta, prioridad y reglas. | M |
| RF-14 | Reproducir, pausar, detener, avanzar, retroceder y controlar volumen. | M |
| RF-15 | Precargar el siguiente elemento y hacer crossfade configurable sin silencios. | M |
| RF-16 | Operar en modo Auto-DJ y modo asistido (Live Assist). | M |
| RF-17 | Interrumpir con entrada de audio en vivo y reanudar la cola al terminar. | M |
| RF-18 | Cartwall con al menos 8 botones para jingles y efectos. | S |
| RF-19 | Pantalla de cabina: actual, tiempo restante, siguiente, estado y reloj. | M |
| RF-20 | Recuperar la sesión tras cierre o caída, reconstruir la cola y conservar el log. | M |
| RF-21 | Seleccionar dispositivo de salida de audio y probar con un tono. | S |
| RF-22 | Registrar cada emisión: programada vs. real, duración, estado, operador y motivo. | M |
| RF-23 | Generar reporte diario y reporte de cumplimiento comercial; exportar CSV. | M |
| RF-24 | Exportar reportes a PDF y generar reporte de música. | S |
| RF-25 | Gestionar incidencias y auditoría de cambios en parrilla, campañas y usuarios. | S |
| RF-26 | Configurar crossfade, rutas, zona horaria y respaldo/restauración. | S |
| RF-27 | Panel de salud: espacio en disco, archivos faltantes y últimos errores. | C |
| RF-28 | Streaming a Icecast/Shoutcast. | W |
| RF-29 | Multiestación, nube, app móvil y colaboración remota. | W |
| RF-30 | Gestión automática de royalties y facturación. | W |

### 3.3 Reglas de negocio

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

### 3.4 Requerimientos no funcionales

| ID | Requerimiento |
|---|---|
| RNF-01 | **Estabilidad:** 8 horas continuas de emisión sin interrupciones no planificadas, sin fugas de memoria críticas. |
| RNF-02 | **Precisión:** inicio de un elemento programado dentro de ±500 ms; crossfade dentro de ±50 ms; reloj visible con precisión de 1 s. |
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
| RNF-13 | **Escalabilidad:** el modelo de datos incluye `estacion_id` para una futura multiestación, pero el MVP es una sola emisora. |
| RNF-14 | **Disponibilidad:** arranque automático con Windows opcional; watchdog del motor de audio. |
| RNF-15 | **Respaldo:** retención de 7 días; restauración probada al menos una vez. |

### 3.5 Criterios de aceptación clave

Estos son los que deben probar antes de decir “está terminado”:

- **AC-01 — Inicio programado:** dada una parrilla publicada con un bloque a las 10:00, cuando el reloj llega a las 10:00:00, el primer elemento suena y se registra con hora real dentro de ±500 ms.
- **AC-02 — Interrupción en vivo:** dado un elemento en reproducción, cuando el operador presiona “EN VIVO”, el audio baja en ≤ 1 s, se activa la entrada, el elemento se marca como parcial y al finalizar se reanuda el siguiente elemento de la cola.
- **AC-03 — Archivo faltante:** dado un archivo inexistente o corrupto, cuando el motor intenta reproducirlo, lo omite, registra la incidencia y continúa con el siguiente en ≤ 2 s.
- **AC-04 — Recuperación:** dado un cierre inesperado, cuando se reinicia la aplicación, detecta la sesión incompleta, reconstruye la cola y conserva los registros anteriores.
- **AC-05 — Reporte comercial:** dado un rango de fechas y un anunciante, cuando se genera el reporte, muestra todas las emisiones, totales y estados, y cuadra con el log.
- **AC-06 — Crossfade:** dado un crossfade configurado en 3 s, cuando faltan 3 s para el final, el siguiente elemento entra con transición audible y sin silencio; se registran ambos.
- **AC-07 — Solapamiento:** dado un bloque que se solapa con otro, cuando el productor guarda, el sistema impide o advierte y no publica.
- **AC-08 — Rendimiento:** con 5.000 elementos, la búsqueda por texto responde en < 300 ms y la UI sigue fluida.

### 3.6 Modelo de datos mínimo

Entidades principales y campos clave:

| Entidad | Campos clave |
|---|---|
| `estacion` | `id`, `nombre`, `zona_horaria` |
| `usuario` | `id`, `nombre`, `email`, `password_hash`, `rol`, `activo` |
| `medio` | `id`, `estacion_id`, `titulo`, `artista`, `genero`, `tipo`, `duracion_ms`, `ruta`, `formato`, `intro_ms`, `outro_ms`, `fade_in_ms`, `fade_out_ms`, `hash`, `estado` |
| `programa` | `id`, `nombre`, `descripcion`, `activo` |
| `parrilla` | `id`, `estacion_id`, `nombre`, `fecha_desde`, `fecha_hasta`, `estado`, `version` |
| `bloque` | `id`, `parrilla_id`, `dia_semana`, `hora_inicio`, `hora_fin`, `programa_id`, `estado` |
| `bloque_item` | `id`, `bloque_id`, `medio_id`, `orden`, `hora_programada`, `tipo` |
| `anunciante` | `id`, `nombre`, `contacto`, `activo` |
| `campana` | `id`, `anunciante_id`, `nombre`, `fecha_inicio`, `fecha_fin`, `prioridad`, `estado` |
| `pauta` | `id`, `campana_id`, `dia_semana`, `hora_inicio`, `hora_fin`, `max_por_hora`, `max_por_dia`, `separacion_min` |
| `campana_medio` | `campana_id`, `medio_id`, `peso`, `activo` |
| `sesion_emision` | `id`, `estacion_id`, `operador_id`, `inicio`, `fin`, `estado` |
| `registro_emision` | `id`, `sesion_id`, `medio_id`, `campana_id`, `bloque_id`, `hora_programada`, `inicio_real`, `fin_real`, `duracion_real_ms`, `estado`, `motivo`, `operador_id` |
| `incidencia` | `id`, `sesion_id`, `registro_id`, `tipo`, `descripcion`, `timestamp` |
| `auditoria` | `id`, `usuario_id`, `accion`, `entidad`, `entidad_id`, `datos_antes`, `datos_despues`, `timestamp` |
| `configuracion` | `clave`, `valor`, `estacion_id` |

**Corrección importante:** no modelen `PautaComercial` como subtipo de `ElementoMultimedia`. Una cuña es un medio de audio; una campaña/pauta es un contrato con reglas de emisión. Son cosas distintas. La relación correcta es:

```
campana 1 ── N pauta
campana N ── M medio   (tabla campana_medio)
medio 1 ── N bloque_item
medio 1 ── N registro_emision
```

### 3.7 Correcciones a los diagramas UML

| Diagrama | Qué corregir |
|---|---|
| **Casos de uso** | Agregar: iniciar sesión, gestionar usuarios, importar audio, configurar ajustes, recuperar sesión, cartwall. “Aplicar crossfade” no es un objetivo del actor; déjenlo como `include` de “Reproducir” o quitenlo. |
| **Clases** | Corregir la herencia de `PautaComercial`; agregar `BloqueItem`, `SesionEmision`, `Incidencia`, `Campana`, `Anunciante`, `Pauta`; completar `RegistroEmision` con hora programada, estado, motivo y operador; `MotorReproduccion` es un servicio, no una entidad persistente. |
| **Actividades** | Registrar el inicio y el fin por separado; agregar el retorno del enlace en vivo; agregar la ruta de error por archivo faltante; el ciclo debe depender del reloj y del fin de bloque, no solo de “quedan elementos”. |
| **Secuencia** | Agregar `PlaybackController`, `Scheduler`, `AudioEngine` y `LogService`; no hacer que la UI hable directo con la BD; usar llamadas asíncronas; agregar `alt` para archivo faltante y para retorno del vivo. |
| **Nuevos** | Agregar un diagrama de estados del reproductor (`IDLE`, `PLAYING`, `PAUSED`, `CROSSFADING`, `LIVE`, `ERROR`, `RECOVERING`) y un diagrama de componentes/arquitectura. |

---

## 4. Plan de 8 semanas

| Semana | Objetivo | Entregable de la semana |
|---|---|---|
| **1** | Cerrar alcance, stack, repositorio, tablero y requerimientos. Hacer el spike de audio. | SRS v1, casos de uso, criterios de aceptación, ERD v1, wireframes, spike de audio funcionando. |
| **2** | Walking skeleton: importar → programar → reproducir → registrar. | Demo end-to-end con un archivo real y un log. Contrato de API y esquema de BD congelado. |
| **3** | Núcleo: parrilla, pauta, cola, crossfade y pantalla de cabina. | Bloque de 10 minutos que se emite con crossfade y logs. |
| **4** | Vivo, recuperación, cartwall, reportes CSV y configuración. | Interrupción en vivo + reporte por anunciante. |
| **5** | Integración y endurecimiento: errores, archivos faltantes, respaldo, UI. | Prueba continua de 2 horas; funcionalidades completas. |
| **6** | Congelar funciones. Prueba de 8 horas. Corrección de bugs. | Release candidate v0.9. |
| **7** | QA/regresión, manual, instalador, ensayo de demo, documento final. | v1.0 + documentación. |
| **8** | Colchón: corregir, pulir, presentar. | Demo final y defensa. |

**Regla:** si al final de la semana 4 no está el flujo “programar → emitir → registrar”, recorten alcance. No esperen a la semana 6.

---

## 5. Reparto y liderazgo

### 5.1 Roles reales

| Persona | Rol real | Dueño de |
|---|---|---|
| **Eldi Rangel** | Líder de producto, análisis y QA | Alcance, SRS, backlog, casos de uso, criterios de aceptación, plan de pruebas, trazabilidad, actas, riesgos, demo y documento final. |
| **Luis Urdaneta** | Arquitecto de datos + UX de cabina | ERD, migraciones, seeds, repositorios/consultas, respaldos, wireframes, design system y pantalla de configuración de audio. |
| **Luis Chirinos** | Tech lead de audio/backend | Motor de audio, scheduler, cola, crossfade, vivo, recuperación, reglas de negocio, pruebas unitarias y benchmarks. |
| **Esteban Ceballos** | Frontend + integración + automatización de pruebas | Shell de la app, pantalla de cabina, pantalla de productor, cartwall, estado, cliente de API, E2E e instalador. |

**Reparto de poder:** Eldi decide el “qué” y el “para qué”; Chirinos decide el “cómo” técnico del motor; Urdaneta decide el “cómo” de los datos; Esteban decide el “cómo” de la UI. Las decisiones que cambien el alcance pasan por Eldi.

### 5.2 Entregables por persona

#### Eldi (tú)

- **Semana 1:** entrevistar a un operador real o simular una cabina; cerrar el alcance MVP; escribir el SRS v1; crear el repositorio, el tablero y las plantillas de issue/PR; definir Definition of Ready y Definition of Done.
- **Semana 2:** validar casos de uso y criterios de aceptación con el equipo; preparar el set de audios de prueba; revisar el ERD contra los requisitos.
- **Semanas 3–6:** probar cada entrega, mantener el backlog, coordinar la integración, actualizar el documento y preparar el manual de usuario.
- **Semanas 7–8:** UAT, regresión, ensayo de demo, informe final y presentación.
- **Tu métrica:** que cada viernes haya una demo que funcione y que cada requerimiento tenga una prueba asociada.

#### Luis Urdaneta

- **Día 3:** ERD v1 + diccionario de datos.
- **Semana 1:** migraciones que creen la BD desde cero; seeds con 20 audios de prueba; wireframes de cabina y productor.
- **Semana 2:** repositorios y consultas de parrilla/campañas; contrato de API con Chirinos; índices.
- **Semana 3:** CRUD de biblioteca, parrilla y campañas; validaciones de solapamiento.
- **Semana 4:** consultas de reportes; respaldo/restauración; pantalla de configuración de audio.
- **Semana 5+:** performance de consultas, integración y pulido de UI.
- **Criterio de hecho:** la BD se crea desde cero con un comando, hay seeds, el ERD coincide con la BD y las consultas tienen índices.

#### Luis Chirinos

- **Día 2–3:** spike técnico: reproducir dos WAV, hacer crossfade de 3 s y medir; decidir la API de audio. **Esto va antes que cualquier pantalla.**
- **Semana 1:** interfaz del motor (`play`, `pause`, `stop`, `next`, `crossfade`, `live`, eventos) y documento `docs/audio-engine.md`.
- **Semana 2:** scheduler + cola + log de inicio/fin; walking skeleton con Esteban.
- **Semana 3:** crossfade, precarga y reglas de pauta.
- **Semana 4:** interrupción en vivo, recuperación y manejo de archivos faltantes.
- **Semana 5:** prueba de 8 horas, performance y corrección de bugs.
- **Semana 6:** congelar y apoyar la integración.
- **Criterio de hecho:** 8 horas sin cortes, logs completos, crossfade medido y el hilo de audio nunca bloqueado.

#### Esteban Ceballos

- **Semana 1:** shell de la app, design system, navegación y pantallas de cabina/productor con datos mock; atajos de teclado.
- **Semana 2:** conectar biblioteca/parrilla al API real; walking skeleton.
- **Semana 3:** pantalla de cabina (actual, restante, siguiente, controles) y cartwall.
- **Semana 4:** pantallas de campañas/reportes; integración del vivo.
- **Semana 5:** E2E, accesibilidad, empaquetado.
- **Semana 6:** instalador y soporte de QA.
- **Criterio de hecho:** se puede operar con teclado, la UI no bloquea el audio y el flujo completo se prueba en el instalador.

### 5.3 Rituales del equipo

| Ritual | Cuándo | Duración | Salida |
|---|---|---|---|
| Planning semanal | Lunes | 30 min | Objetivo de la semana, tareas con dueño y fecha. |
| Daily async | Cada día | 5 min | Qué hice, qué sigue, qué me bloquea (en Discord/WhatsApp). |
| Sync técnico | Miércoles | 20 min | Solo si hay bloqueos o decisiones de arquitectura. |
| Demo + retro | Viernes | 30 + 15 min | Demo funcionando, qué se aprende, qué se ajusta. |
| Revisión de PR | Continuo | — | Al menos 1 revisor; el motor lo revisa Chirinos + Urdaneta. |

**Herramientas:** GitHub Issues/Projects, GitHub Actions, Figma/Penpot, draw.io, Discord/WhatsApp y un documento compartido. **Una sola fuente de verdad:** el repositorio. Lo que está solo en WhatsApp no existe.

### 5.4 Mensajes que puedes enviar

**Mensaje de kickoff al grupo:**

> “Equipo, la meta no es hacer un Rivendell; es entregar un MVP estable que demuestre el proceso. Alcance MVP: una emisora, Windows, archivos locales, parrilla, reproducción con crossfade, interrupción en vivo, log y reportes. Fuera: streaming, multiestación, nube y móvil. Tenemos 8 semanas y cada viernes hay demo obligatoria. Hoy definimos stack y reparto. Regla: nada se considera hecho si no está en `main`, probado y documentado.”

**Para Luis Urdaneta:**

> “Luis, esta semana necesito el ERD v1 y las migraciones con seeds antes del jueves. Entregable: base de datos que se crea desde cero con un comando, 20 audios de prueba y diccionario de datos. El viernes lo revisamos contra los casos de uso. Si ves un riesgo en el modelo, lo hablamos el miércoles; no lo cambies solo.”

**Para Luis Chirinos:**

> “Luis, tu primera tarea no es el motor completo: es el spike de audio. Para el miércoles necesito una prueba que reproduzca dos WAV, haga crossfade de 3 s y registre inicio/fin. Si no funciona en Windows, cambiamos de estrategia ese mismo día. Después defines la interfaz del motor y la documentas en `docs/audio-engine.md`. Es el camino crítico: avísame cualquier bloqueo el mismo día.”

**Para Esteban Ceballos:**

> “Esteban, arranca con el shell y las pantallas de cabina/productor usando datos mock; no esperes al backend. Para el viernes quiero poder navegar y ver la cola simulada. La semana 2 conectas la primera pantalla real. La UI de cabina debe funcionar con teclado y no bloquear el audio; eso es criterio de aceptación.”

**Cuando alguien se atrase:**

> “No me digas ‘ya casi’. Dime qué falta, qué te bloquea y cuándo lo vas a probar. Si no llegamos, recortamos alcance, no calidad.”

### 5.5 RACI simplificado

| Actividad | Eldi | Urdaneta | Chirinos | Esteban |
|---|---|---|---|---|
| Alcance y requisitos | A/R | C | C | C |
| Base de datos / ERD | C | A/R | C | I |
| Motor de audio | C | C | A/R | I |
| UI/UX | A | R (diseño) | C | R (implementación) |
| Integración | A | C | C | R |
| QA | A/R | C | C | R (automatización) |
| Documento final | A/R | R | R | R |
| Release | A | C | R | R |

`A` = aprueba, `R` = responsable, `C` = consultado, `I` = informado.

### 5.6 Definition of Done

Una tarea está hecha cuando:

- El código está en `main` (o en el release candidate) y compila.
- Pasa lint y pruebas.
- Fue revisada por al menos otra persona.
- Cumple el criterio de aceptación.
- Se probó en la app real, no solo en tests unitarios.
- La documentación o el manual se actualizó.
- No introduce bugs P0/P1 conocidos.

---

## 6. Riesgos y planes B

| Riesgo | Prob. | Impacto | Mitigación |
|---|---|---|---|
| El motor de audio no es estable | Alta | Alto | Spike en semana 1; usar librería probada; plan B: un solo deck con fade y sin crossfade avanzado. |
| Integración tardía | Alta | Alto | Walking skeleton en semana 2; contrato de API; mocks. |
| Scope creep | Alta | Medio | MoSCoW; lista de “versión 2”; Eldi es el único que acepta cambios de alcance. |
| Disponibilidad del equipo (exámenes, trabajo) | Media | Alto | Compromisos semanales, buffer en semana 8, pair programming. |
| Archivos faltantes/corruptos | Media | Medio | Validación al importar; skip + log; audios de prueba. |
| Drivers/tarjeta de audio de Windows | Media | Alto | Probar en la máquina de la cabina; selección de dispositivo; plan B con salida estándar. |
| Reloj/suspensión de Windows | Media | Medio | Reloj monotónico; evitar suspensión en demo; probar. |
| Pérdida de datos | Media | Alto | WAL, respaldo diario, log append-only, recuperación. |
| Copyright de la música de demo | Media | Medio | Usar audio royalty-free; documentar licencias. |
| Dependencia de una sola persona | Alta | Alto | Pair programming, revisión de código, documentación, rotación de QA. |
| Expectativas del profesor | Media | Alto | Mostrar alcance en semana 1–2 y preguntar la rúbrica. |

**Orden de recorte si van mal:** streaming → multiestación → PDF (dejar CSV) → cartwall → metadatos avanzados → live input real (simular con archivo) → crossfade avanzado (dejar fade simple). **Nunca recorten:** parrilla, reproducción, log, reportes, recuperación.

---

## 7. Guion de demo (5–7 minutos)

1. Entrar como productor.
2. Importar tres audios: canción, cuña y jingle.
3. Crear campaña “Anunciante X” con vigencia y dos cuñas por hora.
4. Programar un bloque de 10 minutos: canción → cuña → canción.
5. Ir a cabina y presionar “AL AIRE”; mostrar actual, restante y siguiente.
6. Dejar que ocurra el crossfade y mostrar el log.
7. Presionar “EN VIVO”; mostrar el fade, la entrada y el retorno a la cola.
8. Simular un archivo faltante; mostrar skip + incidencia.
9. Generar reporte por anunciante y exportar CSV.
10. Cerrar la app de golpe y reabrir; mostrar recuperación.
11. Mostrar el resultado de la prueba de 8 horas.

Ese guion demuestra el valor del sistema mejor que 20 pantallas.

---

## 8. Checklist para el documento final

- [ ] Portada, índice, numeración y formato uniforme.
- [ ] Introducción, planteamiento del problema y justificación.
- [ ] Objetivo general y objetivos específicos.
- [ ] Alcance y limitaciones (MVP vs. versión 2).
- [ ] Estado del arte (integrar el Documento 2).
- [ ] Metodología y cronograma.
- [ ] Roles y matriz de contribución.
- [ ] Requerimientos funcionales, reglas de negocio y no funcionales.
- [ ] Casos de uso, clases, actividades, secuencia, estados y componentes.
- [ ] Arquitectura, stack y modelo de datos.
- [ ] Prototipos de UI.
- [ ] Plan de pruebas, criterios de aceptación y matriz de trazabilidad.
- [ ] Riesgos y planes B.
- [ ] Resultados de las pruebas (incluida la de 8 horas).
- [ ] Conclusiones, trabajo futuro y referencias APA 7.
- [ ] Anexos: manual de usuario, guion de demo, licencias de audio.

---

## 9. Decisiones que deben tomar hoy

1. **Stack:** ¿Electron/React/Web Audio, C#/NAudio o Python/PySide6?
2. **Alcance:** ¿aceptan el MVP de la sección 2.1 y dejan lo demás como versión 2?
3. **Audio:** ¿el enlace en vivo será entrada real de audio o se simulará con un archivo para la demo?
4. **Demo:** ¿en qué máquina Windows se va a probar y qué tarjeta/interfaz de audio tiene?
5. **Reparto:** ¿quién es el dueño de cada entregable y cuál es la fecha del primer walking skeleton?

Si responden esas cinco preguntas, el proyecto deja de ser una idea y se convierte en un plan.
