// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
]

// ============= Your Code Here =============
// method#1 T[0] => 获取首个元素
type First<T extends any[]> = T extends [] ? never : T[0]

// method#2 length => 数组长度
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T extends { length: 0 } ? never : T[0]

// method#3 T[number] => 数组元素
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// method#4 infer => 解构
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
// type First<T extends any[]> = T extends [infer First, ...unknown[]] ? First : never
