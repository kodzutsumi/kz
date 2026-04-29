// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseThenKeyString } from './constant.ts';

/**
 * A capability open consumer indicating support for specifying a then (`true`) type.
 *
 * Use this capability consumer to indicate that a type supports specifying a then (`true`) type, or results in a type with a then (`true`) type based on the value of the capability setting.
 *
 * @template Type - The type of the capability setting value for this capability consumer.
 */
export type UseThen<ThenType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode UseThen} capability.
   */
  [UseThenKeyString]: ThenType;
};
