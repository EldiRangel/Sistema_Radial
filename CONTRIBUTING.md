# Guía de contribución

## Objetivo

Mantener el repositorio ordenado, con cambios pequeños, revisables y probados. La regla es simple: **nada se considera terminado si no está en `main`, compilando, probado y documentado.**

## Ramas

| Rama | Uso |
|---|---|
| `main` | Rama estable. Solo recibe cambios por Pull Request. |
| `feat/<tema>` | Nueva funcionalidad. Ejemplo: `feat/audio-engine`. |
| `fix/<tema>` | Corrección de un error. Ejemplo: `fix/crossfade-gain`. |
| `docs/<tema>` | Documentación. Ejemplo: `docs/requirements`. |
| `chore/<tema>` | Configuración, dependencias o mantenimiento. |

## Commits

Usar mensajes claros y en imperativo:

```text
feat(audio): agregar precarga del siguiente elemento
fix(db): corregir consulta de bloques solapados
docs(requirements): agregar criterios de aceptación
test(e2e): cubrir flujo de importación de audio
chore(config): configurar electron-builder
```

Tipos permitidos: `feat`, `fix`, `docs`, `test`, `chore`, `refactor`, `style`, `perf`.

## Pull Requests

Cada PR debe incluir:

- Qué cambia y por qué.
- Cómo se probó.
- Capturas o video si cambia la interfaz.
- Riesgos o limitaciones.
- Requerimiento o issue relacionado.

Checklist antes de pedir revisión:

- [ ] El proyecto compila.
- [ ] Pasan las pruebas.
- [ ] El cambio fue probado en la aplicación real.
- [ ] Se actualizó la documentación si aplica.
- [ ] No se introducen bugs conocidos P0/P1.

## Definition of Done

Una tarea está hecha cuando:

1. Está implementada y compila.
2. Pasa lint y pruebas.
3. Fue revisada por al menos otra persona.
4. Cumple el criterio de aceptación del requerimiento.
5. Se probó en la aplicación, no solo en tests unitarios.
6. La documentación o el manual se actualizó.
7. No deja bugs P0/P1 conocidos.

## Ritmo semanal

| Día | Actividad |
|---|---|
| Lunes | Planning de 30 minutos: objetivo, tareas, dueños y fechas. |
| Diario | Actualización asíncrona de 5 minutos: hice, sigue, bloqueo. |
| Miércoles | Sync técnico de 20 minutos, solo si hay bloqueos. |
| Viernes | Demo de 30 minutos + retrospectiva de 15 minutos. |

## Reglas de equipo

- Una tarea tiene un solo dueño.
- Los bloqueos se avisan el mismo día.
- No se cambia el alcance sin hablarlo con el líder de producto.
- Las decisiones técnicas importantes se registran en `docs/adr/`.
- El tablero y los issues son la fuente de verdad; el chat es solo para coordinación rápida.
