// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseStrict } from './consumer.ts';

/**
 * The strict broker behavior variant of the {@linkcode UseStrict} capability.
 *
 * Use this setting to invoke the strict behavior of a type that supports the {@linkcode UseStrict} capability consumer.
 *
 * @see {@linkcode AsLoose} for the loose (default implied) broker behavior variant of this capability.
 */
export type AsStrict = UseStrict<true>;

/**
 * The loose broker behavior variant of the {@linkcode UseStrict} capability.
 *
 * Use this setting to invoke the loose behavior of a type that supports the {@linkcode UseStrict} capability consumer.
 *
 * @see {@linkcode AsStrict} for the strict broker behavior variant of this capability.
 */
export type AsLoose = UseStrict<false>;
