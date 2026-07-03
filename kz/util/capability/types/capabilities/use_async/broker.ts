// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $UseAsync } from './consumer.ts';

/**
 * The asynchronous behavior broker of the {@linkcode $UseAsync} capability.
 *
 * Use this setting to invoke the asynchronous behavior of a type that supports
 * the {@linkcode $UseAsync} capability consumer.
 *
 * @see {@linkcode $AsSync} for the synchronous (default implied) behavior broker of this capability.
 */
export type $AsAsync = $UseAsync<true>;

/**
 * The synchronous behavior broker of the {@linkcode $UseAsync} capability.
 *
 * Use this setting to invoke the synchronous behavior of a type that supports
 * the {@linkcode $UseAsync} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseAsync} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode $AsAsync} for the asynchronous behavior broker of this capability.
 */
export type $AsSync = $UseAsync<false>;
