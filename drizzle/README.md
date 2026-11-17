# Migraciones (`drizzle`)

Esta carpeta la genera `drizzle-kit` a partir de `src/main/db/schema.ts`.

| Archivo / carpeta | Uso |
|---|---|
| `0000_*.sql` | Migración inicial y siguientes. |
| `meta/_journal.json` | Registro de migraciones aplicadas. |

## Comandos previstos

```bash
npm run db:generate
npm run db:migrate
npm run db:studio
```

## Regla

Las migraciones se versionan en Git. No se editan a mano después de aplicadas; se crea una nueva migración.
