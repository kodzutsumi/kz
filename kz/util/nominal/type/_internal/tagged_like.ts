import type { TaggedSymbolType } from './constants.ts';
import type { UnionKeyOf } from './union_key_of.ts';

export type TaggedLike<Type> =
  & { [TaggedSymbolType]?: keyof Type }
  & Record<UnionKeyOf<Type>, PropertyKey>;