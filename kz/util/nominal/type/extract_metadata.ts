// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $UseId, $UseOfType } from '@kz/util/capability';
import type {
TaggedLike,
  TaggedMetadataExtractor,
  TaggedSymbolType,
  TaggedType,
  TaggedUnionMetadataExtractor,
  UnionKeyOf,
} from './_internal/mod.ts';
import { TypeException } from '@kz/util/lint';

type Capabilities = $UseId | $UseOfType;
type Defaults = $UseOfType;

/**
 * Extracts the metadata from a tagged type based on the provided name.
 *
 * Generally in creating tagged types, there is no need to extract the metadata, as it is present at creation. However; in some cases, such as tagged types from third-party libraries, or tagged-like types, it may be necessary to extract the metadata for use in type-level programming.
 *
 * @template Settings - The settings type that includes the type and name information for extracting metadata.
 * @returns The extracted metadata associated with the specified tag name, or `never` if the type does not match the expected structures.
 */
export type ExtractMetadata<
  Type extends
    | TaggedType<unknown, Ident>
    | TaggedLike<Type>,
    Ident extends PropertyKey,
> = Type extends TaggedType<unknown, PropertyKey>
    ? TaggedMetadataExtractor<Type, Ident>
  : Type extends (
    & { [TaggedSymbolType]?: keyof Type }
    & Record<UnionKeyOf<Type>, PropertyKey>
    ) ? TaggedUnionMetadataExtractor<Ident, Type>
  : never;
