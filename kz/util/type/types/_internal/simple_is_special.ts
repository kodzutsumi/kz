import type { SimpleIsVoid } from './simple_is_void.ts';
import type { IsAny, IsNever, IsUnknown } from '@std/testing/types';

/**
 * Determines if a type is considered "special", which includes `any`, `never`,
 * `unknown`, and `void` types.
 * 
 * @template Type - The type to check for being special.
 * @returns A boolean indicating whether the type is considered special.
 * @internal
 */
export type IsSpecial<Type> = IsAny<Type> extends true ? true
  : IsNever<Type> extends true ? true
  : IsUnknown<Type> extends true ? true
  : SimpleIsVoid<Type> extends true ? true
  : false;
