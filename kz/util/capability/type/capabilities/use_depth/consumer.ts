// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseDepthKeyString, UseDepthLevel } from './constant.ts';

/**
 * A capability open consumer indicating support for nested operations.
 *
 * Use this capability consumer to indicate that a type supports specifying a depth level for a capability that operates on nested structures.
 *
 * @template Depth - The type of the capability setting value for this capability consumer.
 */
export type UseDepth<
  Depth extends UseDepthLevel | boolean = UseDepthLevel | boolean,
> = {
  /**
   * The capability setting key for the {@linkcode UseDepth} capability.
   */
  [UseDepthKeyString]: Depth;
};
