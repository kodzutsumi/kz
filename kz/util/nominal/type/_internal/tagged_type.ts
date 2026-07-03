import type { Nominal } from './nominal.ts';
import type { _IsUnion } from './_is_union.ts';
import type { TaggedSymbolType } from './constants.ts';

export type TaggedType<Type, Ident extends PropertyKey> = Nominal<
  { [Key in Ident]: Type },
  typeof TaggedSymbolType
>;
