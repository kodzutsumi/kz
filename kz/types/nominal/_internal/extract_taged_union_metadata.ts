import type { TaggedSymbolType } from './constants.ts';
import type { UnionKeyOf } from './union_key_of.ts';

export type ExtractTaggedUnionMetadata<
  Type extends
    & { [TaggedSymbolType]?: keyof Type }
    & Record<UnionKeyOf<Type>, PropertyKey>,
  Name extends PropertyKey,
> = Omit<
  Extract<Type, Record<UnionKeyOf<Type>, Name>>,
  UnionKeyOf<Type> | typeof TaggedSymbolType
>;