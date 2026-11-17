# Base de datos (`main/db`)

| Archivo / carpeta | Uso |
|---|---|
| `client.ts` | Abre SQLite, activa WAL y `foreign_keys`, crea el cliente Drizzle. |
| `schema.ts` | Tablas, columnas, índices y relaciones. |
| `seed.ts` | Estación, configuración, programas y audios de demostración. |
| `migrations/` | Migraciones SQL generadas por `drizzle-kit generate`. |
| `schema/` | Si el esquema crece, se divide por dominio. |
| `seed/` | Si el seed crece, se divide por dominio. |

## Tablas previstas

- `stations`, `users`
- `media`, `programs`
- `schedule_versions`, `blocks`, `block_items`
- `advertisers`, `campaigns`, `campaign_media`, `ad_rules`
- `play_sessions`, `play_log`, `incidents`
- `settings`, `audit_log`

## Reglas

- Las horas se guardan en UTC y se muestran en hora local.
- El `play_log` es append-only: no se edita ni se borra.
- Las migraciones se versionan en Git.
- Los datos locales (`data/`, `*.db`) no se versionan.
