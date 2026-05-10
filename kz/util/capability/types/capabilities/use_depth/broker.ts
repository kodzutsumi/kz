// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseDepthLevel } from './constant.ts';
import type { UseDepth } from './consumer.ts';

/**
 * The deep behavior broker of the {@linkcode UseDepth} capability
 * operating on the values of a record.
 *
 * Use this setting to invoke the deep behavior of a type that supports the
 * {@linkcode UseDepth} capability consumer, where the depth is maxed out (
 * {@linkcode AsLevel} of 10).
 *
 * @see {@linkcode AsShallow} for the shallow behavior of this capability.
 * @see {@linkcode AsLevel} for the level-specific behavior of this capability.
 */
export type AsDeep = UseDepth<true>;

/**
 * The shallow behavior broker of the {@linkcode UseDepth} capability.
 *
 * Use this setting to invoke the shallow behavior of a type that supports the
 * {@linkcode UseDepth} capability consumer, where the depth is limited to the
 * root level of the record.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode UseDepth} capability when the setting is not explicitly set to
 * > {@linkcode AsDeep}, {@linkcode AsShallow}, or {@linkcode AsLevel}.
 *
 * @see {@linkcode AsDeep} for the deep behavior broker of this capability.
 * @see {@linkcode AsLevel} for the level-specific behavior broker of this capability.
 */
export type AsShallow = UseDepth<false>;

/**
 * The level-specific behavior broker of the {@linkcode UseDepth} capability.
 *
 * Use this setting to invoke the level-specific behavior of a type that supports
 * the {@linkcode UseDepth} capability consumer, where the depth is limited to
 * a specified level within a record.
 *
 * @template Level - The depth level to navigate within a record type, which can be any value from 1 to 10.
 *
 * @see {@linkcode AsDeep} for the deep behavior broker of this capability.
 * @see {@linkcode AsShallow} for the shallow behavior broker of this capability.
 */
export type AsLevel<Level extends UseDepthLevel> = UseDepth<Level>;
