// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseDefaultKeyString } from './constant.ts';

/**
 * A capability open consumer indicating support for specifying a default type.
 *
 * Use this capability consumer to indicate that a type supports specifying a default type, or results in a type with a default type based on the value of the capability setting.
 *
 * @template DefaultType - The type of the capability setting value for this capability consumer.
 */
export type UseDefault<DefaultType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode UseDefault} capability.
   */
  [UseDefaultKeyString]: DefaultType;
};
