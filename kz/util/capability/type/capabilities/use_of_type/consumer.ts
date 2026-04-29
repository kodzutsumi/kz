// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseOfTypeKeyString } from './constant.ts';

/**
 * A capability open consumer indicating support for specifying a working type.
 *
 * Use this capability consumer to indicate that a type supports specifying a working type, or results in a type with a working type based on the value of the capability setting.
 *
 * @template Type - The type of the capability setting value for this capability consumer.
 */
export type UseOfType<Type extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode UseOfType} capability.
   */
  [UseOfTypeKeyString]: Type;
};
