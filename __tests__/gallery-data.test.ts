import { describe, it, expect } from 'vitest'
import { beforeAfterPairs, freshestHairImages } from '@/lib/gallery-data'

describe('beforeAfterPairs', () => {
  it('has at least one pair', () => {
    expect(beforeAfterPairs.length).toBeGreaterThan(0)
  })

  it('every pair has non-empty before and after src and alt', () => {
    for (const pair of beforeAfterPairs) {
      expect(pair.before.src).toBeTruthy()
      expect(pair.before.alt).toBeTruthy()
      expect(pair.after.src).toBeTruthy()
      expect(pair.after.alt).toBeTruthy()
    }
  })

  it('every src starts with /', () => {
    for (const pair of beforeAfterPairs) {
      expect(pair.before.src).toMatch(/^\//)
      expect(pair.after.src).toMatch(/^\//)
    }
  })

  it('before and after src are different images', () => {
    for (const pair of beforeAfterPairs) {
      expect(pair.before.src).not.toBe(pair.after.src)
    }
  })
})

describe('freshestHairImages', () => {
  it('has at least one image', () => {
    expect(freshestHairImages.length).toBeGreaterThan(0)
  })

  it('every image has a non-empty src and alt', () => {
    for (const image of freshestHairImages) {
      expect(image.src).toBeTruthy()
      expect(image.alt).toBeTruthy()
    }
  })

  it('no duplicate src paths', () => {
    const srcs = freshestHairImages.map(img => img.src)
    const unique = new Set(srcs)
    expect(unique.size).toBe(srcs.length)
  })
})
