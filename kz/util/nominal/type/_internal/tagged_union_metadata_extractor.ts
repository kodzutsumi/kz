// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { TaggedSymbolType } from './constants.ts';
import type { UnionKeyOf } from './union_key_of.ts';

export type TaggedUnionMetadataExtractor<
  Ident extends PropertyKey,
  Type extends
    & { [TaggedSymbolType]?: keyof Type }
    & Record<UnionKeyOf<Type>, PropertyKey>,
> = Omit<
  Extract<Type, Record<UnionKeyOf<Type>, Ident>>,
  UnionKeyOf<Type> | typeof TaggedSymbolType
>;