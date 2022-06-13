// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
  Expect<Equal<Unshift<[1, 2], 1>, [1, 1, 2]>>
]

// ============= Your Code Here =============
type Unshift<T extends unknown[], U> = [U, ...T]
