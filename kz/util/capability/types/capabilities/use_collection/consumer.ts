// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseCollectionKeyString, UseCollectionTarget } from './constant.ts';

/**
 * A capability that allows for the specification of a collection type, its keys,
 * or its values as the target of a types capabilities.
 *
 * Use this capability consumer to indicate that a type supports operations on
 * a collection type, its keys, or its values, based on the value of the capability
 * setting.
 *
 * @template CollectionTarget - The target of the collection capability, which can be a collection type, its keys, or its values.
 */
export type UseCollection<CollectionTarget extends UseCollectionTarget = UseCollectionTarget> =
  {
    /**
     * The capability setting key for the {@linkcode UseCollection} capability.
     */
    [UseCollectionKeyString]: CollectionTarget;
  };
