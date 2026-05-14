// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { UseKeysKeyString } from './constant.ts';

/**
 * A capability open consumer indicating support working on the keys of a .
 *
 * Use this capability consumer to indicate that a type supports working on the keys of a , such as by providing a method that takes a  and a set of keys and returns a new  with only those keys.
 *
 * @template OfKeys - The keys of the object that are being used.
 */
export type UseKeys<
  OfKeys extends PropertyKey = PropertyKey,
> = {
  /**
   * The capability setting key for the {@linkcode UseKeys} capability.
   */
  [UseKeysKeyString]: OfKeys;
};
