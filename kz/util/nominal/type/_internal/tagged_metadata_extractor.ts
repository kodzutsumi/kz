import type { Is } from '@kz/util/type';
import type { TaggedSymbolType } from './constants.ts';
import type { TaggedType } from './tagged_type.ts';
import type { $ConditionOf, $OfType } from '@kz/util/capability';

export type TaggedMetadataExtractor<
Type extends TaggedType<unknown, Ident>,
Ident extends PropertyKey,
> = {
  [Key in keyof Type[typeof TaggedSymbolType]]: Is<
    Key,
    & $OfType<Ident>
    & $ConditionOf<
      Type[typeof TaggedSymbolType][Key],
      never
    >
  >;
}[keyof Type[typeof TaggedSymbolType]];