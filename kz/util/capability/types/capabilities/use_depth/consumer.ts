// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseDepthKeyString, UseDepthLevel } from './constant.ts';

/**
 * A capability for the specification of the depth level to navigate within
 * a record type.
 *
 * Use this capability consumer to indicate that a type supports operations on
 * a record type to a specified depth level, based on the value of the
 * capability setting.
 *
 * @template Depth - The depth level to navigate within a record type.
 */
export type UseDepth<
  Depth extends UseDepthLevel | boolean = UseDepthLevel | boolean,
> = {
  /**
   * The capability setting key for the {@linkcode UseDepth} capability.
   */
  [UseDepthKeyString]: Depth;
};
