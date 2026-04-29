// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseDepthLevel } from './constant.ts';
import type { UseDepth } from './consumer.ts';

/**
 * A broker behavior of the {@linkcode UseDepth} capability operating on the max depth (10) of a record.
 */
export type AsDeep = UseDepth<true>;

/**
 * A broker behavior of the {@linkcode UseDepth} capability operating on the root level of a record.
 */
export type AsShallow = UseDepth<false>;

/**
 * A broker behavior of the {@linkcode UseDepth} capability operating to a specified depth level of a record.
 */
export type AsLevel<Level extends UseDepthLevel> = UseDepth<Level>;
