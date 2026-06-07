// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * The capability setting key for the {@linkcode UseCollection} capability.
 */
export declare const UseCollectionKeyString = 'kz.i11n:use_collection';

/**
 * The type of the capability setting key for the {@linkcode UseCollection} capability.
 */
export type UseCollectionKey = typeof UseCollectionKeyString;

/**
 * The possible capability settings for the {@linkcode UseCollection} capability.
 *
 * - `collection`: The capability applies to the entire collection.
 * - `values`: The capability applies to the individual values within the collection.
 * - `keys`: The capability applies to the keys of the collection.
 */
export type UseCollectionTarget = 'collection' | 'values' | 'keys';
