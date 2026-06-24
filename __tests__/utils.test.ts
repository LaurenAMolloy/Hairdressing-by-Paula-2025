import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn', () => {
  it('returns a single class unchanged', () => {
    expect(cn('text-red-500')).toBe('text-red-500')
  })

  it('joins multiple classes', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2')
  })

  it('omits falsy values', () => {
    expect(cn('base', false && 'hidden', undefined, null, 'extra')).toBe('base extra')
  })

  it('resolves Tailwind conflicts — last wins', () => {
    expect(cn('text-sm', 'text-lg')).toBe('text-lg')
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })

  it('handles conditional class objects', () => {
    expect(cn('base', { active: true, disabled: false })).toBe('base active')
  })
})
