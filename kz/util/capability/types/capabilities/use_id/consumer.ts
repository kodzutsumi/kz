// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { TypeException } from '@kz/util/lint';

import type { _IsUnion } from './_internal/mod.ts';

import type { $UseIdKeyString } from './constant.ts';

/**
 * A capability open consumer indicating support working on the keys of a .
 *
 * Use this capability consumer to indicate that a type supports working on the keys of a , such as by providing a method that takes a  and a set of keys and returns a new  with only those keys.
 *
 * @template Id - The keys of the object that are being used.
 */
export type $UseId<
  Id extends PropertyKey = PropertyKey,
> = {
  /**
   * The capability setting key for the {@linkcode $UseId} capability.
   */
  [$UseIdKeyString]: Id;
}