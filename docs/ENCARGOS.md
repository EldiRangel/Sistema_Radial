# Encargos exactos por persona

> Mensajes listos para copiar y pegar en Discord, WhatsApp o correo.
> La idea es que cada persona sepa **qué entregar**, **cuándo**, **con qué criterio se acepta** y **qué no debe hacer**.

---

## 1. Reparto de esta semana

| Persona | Entregable principal | Fecha | Revisa |
|---|---|---|---|
| **Eldi + apoyo técnico** | Configuración base + shell + navegación | Viernes | Esteban |
| **Luis Urdaneta** | ERD + diccionario de datos | Jueves | Eldi + Chirinos |
| **Luis Urdaneta** | `schema.ts` + migración + seed | Viernes | Eldi |
| **Luis Chirinos** | Spike de audio + ADR | Miércoles | Esteban + Urdaneta |
| **Luis Chirinos** | Interfaz del motor + núcleo de audio | Viernes | Esteban |
| **Esteban** | Inventario UI + pantallas mock + E2E | Viernes | Eldi |

---

## 2. Mensaje para Luis Urdaneta

```text
Luis, tu primera entrega es el modelo de datos del MVP, no la UI.

OBJETIVO
Dejar cerrado el ERD y el diccionario de datos para que Chirinos y Esteban puedan construir sobre él.

ENTREGA 1 — JUEVES
1. docs/data-model.md con:
   - Diagrama ERD en Mermaid.
   - Diccionario de datos: tabla, columna, tipo, nulo, default, FK, descripción y ejemplo.
   - Catálogo de enums.
   - Índices.
   - Decisiones y supuestos.
2. Revisión conmigo y con Chirinos.

TABLAS MÍNIMAS
stations, users, media, programs, schedule_versions, blocks, block_items,
advertisers, campaigns, campaign_media, ad_rules, play_sessions, play_log,
incidents, settings, audit_log.

REGLAS DE DISEÑO
- snake_case, tablas en plural, PK integer autoincrement.
- station_id en todas las tablas de la emisora.
- No guardes rutas absolutas: usa storage_key relativo a la biblioteca.
- No hagas que campaña/pauta sea subtipo de media. Una cuña es un audio; una campaña es un contrato.
- play_log es append-only: hora programada, inicio real, fin real, duración, estado, motivo y operador.
- Timestamps absolutos en UTC (integer epoch ms).
- Las horas de parrilla se guardan como hora local de la emisora (HH:MM) + day_of_week.
- FKs explícitas e índices para búsquedas y consultas por fecha.
- Nada de tablas fuera del MVP.

ENTREGA 2 — VIERNES
3. src/main/db/schema.ts con Drizzle.
4. Primera migración en drizzle/.
5. src/main/db/client.ts y seed.ts.
6. Verificar que la migración corre desde cero y que el seed es idempotente.

SE CONSIDERA HECHO CUANDO
- El ERD cubre RF-03 a RF-13 y RF-22 a RF-26.
- Todas las tablas tienen PK, FKs e índices.
- La migración se genera y aplica en una base vacía.
- El seed se puede correr dos veces sin duplicar.
- Chirinos confirma que los campos de audio alcanzan; yo confirmo que cubre los requisitos.

NO HAGAS
Pantallas, optimización prematura ni tablas para streaming, multiestación o royalties. Eso es versión 2.
```

---

## 3. Mensaje para Luis Chirinos

```text
Luis, tu primera entrega es el spike de audio, no el motor completo.

OBJETIVO
Demostrar que Web Audio API en Electron soporta reproducción, crossfade y retorno sin cortes en Windows.

ENTREGA 1 — MIÉRCOLES
1. spikes/audio/ con una página mínima (Electron o HTML) que:
   - Cargue dos WAV.
   - Reproduzca el primero.
   - Haga crossfade de 3 s al segundo.
   - Registre timestamps de inicio/fin y duración real.
   - Pruebe pausa, reanudación, stop y archivo faltante.
2. Medición de latencia, drift y memoria.
3. docs/adr/0003-motor-de-audio.md con resultados, limitaciones y recomendación.

ENTREGA 2 — VIERNES
4. docs/audio-engine.md con la interfaz y el contrato de eventos:
   load, play, pause, resume, stop, next, crossfadeTo, playOneShot,
   startLive, stopLive, setVolume, getState.
   Eventos: track-started, track-ended, crossfade-started,
   crossfade-completed, live-started, live-ended, error, state-changed.
5. src/renderer/src/audio/AudioEngine.ts con el núcleo: load/decode,
   play/pause/stop y volumen.
6. Pruebas unitarias de tiempo, cola y crossfade.

SE CONSIDERA HECHO CUANDO
- El crossfade de 3 s se escucha sin gap ni click.
- Pausa/reanudación conserva la posición.
- Un archivo faltante emite error y no tumba la app.
- 10 minutos en loop sin fuga de memoria evidente.
- Funciona en Windows 10/11 con la salida por defecto.
- El ADR documenta límites de Web Audio en Electron (autoplay, selección de dispositivo, background, modo exclusivo).

NO HAGAS TODAVÍA
Scheduler, reglas de pauta, reportes ni UI de cabina completa. Eso va después del walking skeleton.

Si el spike falla, avísame el mismo día. No esperes al viernes.
```

---

## 4. Mensaje para Esteban

```text
Esteban, Eldi y yo estamos montando la base y el shell. No dupliques esa parte.

TU PRIMER ENTREGABLE
1. Inventario de componentes y pantallas en docs/UI-INVENTORY.md.
2. Sobre el shell que dejemos, implementa Biblioteca y Parrilla con datos mock.
3. Cliente IPC tipado y primera prueba E2E de navegación.
4. No empieces la Cabina real hasta que Chirinos entregue el contrato de audio.

SE CONSIDERA HECHO CUANDO
- La app navega entre secciones.
- Biblioteca y Parrilla cargan datos mock.
- El E2E de navegación pasa.
- El código respeta la estructura de src/renderer/src.

DESPUÉS
Conectas datos reales con Urdaneta, construyes la Cabina con Chirinos y sigues con Reportes, E2E e instalador.
```

---

## 5. Mensaje para el grupo

```text
Equipo, esta semana vamos en paralelo:

- Eldi + apoyo técnico: configuración base de Electron/Vite/React/TS + shell + navegación.
- Urdaneta: ERD + diccionario de datos + migraciones/seed.
- Chirinos: spike de audio + interfaz del motor.
- Esteban: inventario UI + pantallas mock + E2E sobre el shell.

Demo del viernes: la app abre, navega, la biblioteca lista datos reales
y un audio suena con su registro en el log.

Nada se considera hecho sin criterio de aceptación.
```

---

## 6. Contrato de entrega

| Entregable | Dueño | Fecha | Criterio de aceptación | Revisor |
|---|---|---|---|---|
| Configuración base + shell + navegación | Eldi + apoyo | Viernes | `npm run dev` y `npm run build` funcionan; rutas y sidebar listos. | Esteban |
| ERD + diccionario | Urdaneta | Jueves | Mermaid renderiza; tablas, campos, FKs e índices documentados. | Eldi + Chirinos |
| Schema + migración + seed | Urdaneta | Viernes | Migración desde cero; seed idempotente. | Eldi |
| Spike de audio | Chirinos | Miércoles | Crossfade 3 s sin gap; métricas y limitaciones documentadas. | Esteban + Urdaneta |
| Interfaz del motor | Chirinos | Viernes | Contrato de métodos/eventos aprobado por Esteban. | Esteban |
| Inventario UI + pantallas mock | Esteban | Viernes | Navegación y pantallas mock funcionando; E2E inicial. | Eldi |

---

## 7. Qué necesitamos de ellos para no bloquearnos

| Necesitamos | De quién | Cuándo | Para qué |
|---|---|---|---|
| Convención de `storage_key` y tabla `media` | Urdaneta | Jueves | Servir audios y conectar la biblioteca. |
| Contrato de eventos de audio | Chirinos | Viernes | Construir la Cabina sin adivinar estados. |
| Inventario de pantallas y componentes | Esteban | Miércoles | Alinear el shell y las rutas. |
| Criterios de aceptación del primer corte | Eldi | Jueves | Saber cuándo la demo está lista. |

---

## 8. Plan de Eldi + apoyo técnico

1. Crear `package.json` con dependencias y scripts.
2. Configurar `electron.vite.config.ts`, `tsconfig` y ESLint/Prettier.
3. Crear el proceso principal, el preload y el renderer mínimo.
4. Configurar React Router, layout, sidebar y rutas.
5. Crear las páginas placeholder: Cabina, Biblioteca, Parrilla, Campañas, Reportes y Configuración.
6. Verificar `npm run dev` y `npm run build`.
7. Hacer commit y push.
8. Entregar el shell a Esteban para que implemente las pantallas de dominio.

**Defaults propuestos:** npm, Node 22, Windows, React Router, CSS puro con variables, Drizzle, electron-vite, Vitest y Playwright.
