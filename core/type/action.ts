import type { $Object } from '@kz/util/object';

import type { Func } from './func.ts';

/**
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { Action } from '@kz/core/type';
 * import type { Couple } from '@kz/util/list';
 * 
 * type Info = Couple<number>;
 * type Callback = Action<Couple<number, Info>>;
 * 
 * function process(items: number[], callback: Callback): Info{
 *   const info: Info = [0, 0];
 * 
 *   for (const item of items) {
 *     callback(item, info);
 *   }
 * 
 *   return info;
 * }
 * 
 * const sumAndCount: Callback = (item, info) => {
 *   info[0] += item;
 *   info[1] += 1;
 * };
 * 
 * const [sum, count] = process([1, 2, 3], sumAndCount);
 * 
 * assertEquals(sum, 6);
 * assertEquals(count, 3);
 * ```
 */
export type Action<
  Args extends unknown[],
  Options extends $Object.Unknown = $Object.Empty,
> = Func<Args, void, Options>;
