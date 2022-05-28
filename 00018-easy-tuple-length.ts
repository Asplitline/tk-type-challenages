// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>
]

// ============= Your Code Here =============

type Length<T extends readonly any[]> = T['length'] extends number ? T['length'] : never

// type Length<T extends readonly any[]> = T extends { length: number } ? T['length'] : never

// type Length<T extends readonly any[]> = T extends { length: infer Length } ? Length : never

// type Length<T extends readonly any[]> = T['length']

// tuple => 定长数组
type tupleArr = [string, number]
type tupleArrLength = tupleArr['length'] // 2

// array => 普通数组
type strArr = string[]
type strArrLength = strArr['length'] // number
