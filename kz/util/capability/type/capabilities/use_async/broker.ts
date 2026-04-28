// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseAsync } from './consumer.ts';

/**
 * The asynchronous broker behavior variant of the {@linkcode UseAsync}
 * capability.
 *
 * Use this setting to invoke the asynchronous behavior of a type that
 * supports the {@linkcode UseAsync} capability consumer.
 *
 * @see {@linkcode AsSync} for the synchronous (default implied) broker behavior variant of this capability.
 */
export type AsAsync = UseAsync<true>;

/**
 * The synchronous broker behavior variant of the {@linkcode UseAsync} capability.
 *
 * Use this setting to invoke the synchronous behavior of a type that
 * supports the {@linkcode UseAsync} capability consumer.
 *
 * @see {@linkcode AsAsync} for the asynchronous broker behavior variant of this capability.
 */
export type AsSync = UseAsync<false>;
