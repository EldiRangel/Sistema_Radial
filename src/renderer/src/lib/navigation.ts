import { BarChart3, CalendarDays, Library, Megaphone, Radio, Settings } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  to: string
  label: string
  description: string
  icon: LucideIcon
}

export interface PageMeta {
  label: string
  description: string
}

export const NAV_ITEMS: NavItem[] = [
  {
    to: '/cabina',
    label: 'Cabina',
    description: 'Emisión y continuidad al aire',
    icon: Radio
  },
  {
    to: '/biblioteca',
    label: 'Biblioteca',
    description: 'Audios, metadatos y búsqueda',
    icon: Library
  },
  {
    to: '/parrilla',
    label: 'Parrilla',
    description: 'Bloques y programación diaria',
    icon: CalendarDays
  },
  {
    to: '/campanas',
    label: 'Campañas',
    description: 'Anunciantes, cuñas y pauta',
    icon: Megaphone
  },
  {
    to: '/reportes',
    label: 'Reportes',
    description: 'Auditoría y cumplimiento',
    icon: BarChart3
  },
  {
    to: '/configuracion',
    label: 'Configuración',
    description: 'Audio, respaldo y preferencias',
    icon: Settings
  }
]

export function getPageMeta(pathname: string): PageMeta {
  const item = NAV_ITEMS.find((navItem) => navItem.to === pathname)

  return {
    label: item?.label ?? 'RadioFlow',
    description: item?.description ?? 'Sistema de emisión radial'
  }
}
