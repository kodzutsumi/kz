// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseElseKeyString } from './constant.ts';

/**
 * A capability open consumer indicating support for specifying an else (`false`) type.
 *
 * Use this capability consumer to indicate that a type supports specifying an else (`false`) type, or results in a type with an else (`false`) type based on the value of the capability setting.
 *
 * @template Type - The type of the capability setting value for this capability consumer.
 */
export type UseElse<ElseType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode UseElse} capability.
   */
  [UseElseKeyString]: ElseType;
};
