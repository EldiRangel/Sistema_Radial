# Scripts

Scripts de apoyo que no forman parte de la aplicación en producción.

| Script previsto | Uso |
|---|---|
| `seed.ts` | Cargar datos de demostración. |
| `generate-demo-audio.ts` | Generar audios WAV de prueba. |
| `check-db.ts` | Verificar integridad de la base de datos. |

## Regla

Los scripts deben ser idempotentes: ejecutarlos dos veces no debe duplicar datos.
