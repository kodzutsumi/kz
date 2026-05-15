// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseReadonly } from './consumer.ts';

/**
 * The readonly behavior broker of the {@linkcode UseReadonly} capability.
 *
 * Use this setting to invoke the readonly behavior of a type that supports
 * the {@linkcode UseReadonly} capability consumer.
 *
 * @see {@linkcode AsWritable} for the writable (default implied) behavior broker of this capability.
 */
export type AsReadonly = UseReadonly<true>;

/**
 * The writable behavior broker of the {@linkcode UseReadonly} capability.
 *
 * Use this setting to invoke the writable behavior of a type that supports the
 * {@linkcode UseReadonly} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode UseReadonly} capability when the setting is not explicitly set
 * > to `true` or `false`.
 *
 * @see {@linkcode AsReadonly} for the readonly behavior broker of this capability.
 */
export type AsWritable = UseReadonly<false>;
