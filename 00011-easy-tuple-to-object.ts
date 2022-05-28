// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// ============= Your Code Here =============
// type TupleToObject<T extends readonly (number | string | symbol)[]> = {
//   [P in T[number]]: P
// }

type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P
}



// as const - 限制类型
// T[number] - 获取数组值
/**
 * 1. number | string | symbol - 索引值类型
 * 2. keyof any - 索引类型
 */
