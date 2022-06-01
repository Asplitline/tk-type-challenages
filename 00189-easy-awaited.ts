// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
]

// @ts-expect-error
type error = MyAwaited<number>

// ============= Your Code Here =============

// type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T

// MyAwaited<Promise <string>>
/*  
 Promise<string> extends Promise<infer U>
 => 推断出U为string , MyAwaited<string>
 => string extends Promise<infer U> => string 
*/

// Type 'U' does not satisfy the constraint 'Promise<unknown>'.ts(2344)  => 不一定是嵌套 Promise
// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U> ? MyAwaited<U> : T

// ok
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U> ? (U extends Promise<unknown> ? MyAwaited<U> : U) : T
