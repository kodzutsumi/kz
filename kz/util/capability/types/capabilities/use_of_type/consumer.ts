// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $UseOfTypeKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for a working type.
 *
 * Use this capability consumer to indicate that a type supports a working
 * type, or results in a type with a working type, based on the value of the
 * capability setting.
 *
 * @see {@linkcode $OfType} for the broker behavior of this capability consumer.
 *
 * @template Type - The type setting for this capability consumer.
 */
export type $UseOfType<Type extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode $UseOfType} capability.
   */
  [$UseOfTypeKeyString]: Type;
};
