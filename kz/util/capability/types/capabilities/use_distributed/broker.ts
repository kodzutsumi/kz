// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseDistributed } from './consumer.ts';

/**
 * The distributive behavior broker of the {@linkcode UseDistributed} capability.
 *
 * Use this setting to invoke the distributive behavior of a type that supports
 * the {@linkcode UseDistributed} capability consumer.
 *
 * @see {@linkcode AsUnion} for the union (default implied) behavior broker of this capability.
 */
export type AsDistributed = UseDistributed<true>;

/**
 * The union behavior broker of the {@linkcode UseDistributed} capability.
 *
 * Use this setting to invoke the union behavior of a type that supports
 * the {@linkcode UseDistributed} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode UseDistributed} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode AsDistributed} for the distributive behavior broker of this capability.
 */
export type AsUnion = UseDistributed<false>;
