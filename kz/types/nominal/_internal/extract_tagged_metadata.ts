import type { Extends } from '@kz/types';
import type { TaggedSymbolType } from './constants.ts';
import type { TaggedType } from './tagged_type.ts';
import type { $ConditionOf } from '@kz/types/capabilities';

export type ExtractTaggedMetadata<
  Type extends TaggedType<unknown, Name>,
  Name extends PropertyKey,
> = {
  [Key in keyof Type[typeof TaggedSymbolType]]: Extends<
    Key,
    Name,
    $ConditionOf<
      Type[typeof TaggedSymbolType][Key],
      never
    >
  >;
}[keyof Type[typeof TaggedSymbolType]];