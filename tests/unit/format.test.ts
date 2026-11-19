import { describe, expect, it } from 'vitest'
import { formatClock, formatDuration, formatRemaining } from '../../src/shared/utils/format'

describe('formatDuration', () => {
  it('formatea segundos y minutos', () => {
    expect(formatDuration(0)).toBe('00:00')
    expect(formatDuration(5_000)).toBe('00:05')
    expect(formatDuration(65_000)).toBe('01:05')
  })

  it('formatea horas cuando corresponde', () => {
    expect(formatDuration(3_725_000)).toBe('1:02:05')
  })

  it('protege valores inválidos', () => {
    expect(formatDuration(-1)).toBe('00:00')
    expect(formatDuration(Number.NaN)).toBe('00:00')
  })
})

describe('formatRemaining', () => {
  it('antepone el signo negativo', () => {
    expect(formatRemaining(65_000)).toBe('-01:05')
  })
})

describe('formatClock', () => {
  it('devuelve una hora con formato de 24 horas', () => {
    const result = formatClock(new Date('2026-11-17T14:05:09'))
    expect(result).toMatch(/14:05:09/)
  })
})
