// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseSetter } from './consumer.ts';

/**
 * The setter broker behavior variant of the {@linkcode UseSetter} capability.
 *
 * Use this setting to invoke the setter behavior of a type that supports the {@linkcode UseSetter} capability consumer.
 *
 * @see {@linkcode AsGetter} for the getter (default implied) broker behavior variant of this capability.
 */
export type AsSetter = UseSetter<true>;

/**
 * The getter broker behavior variant of the {@linkcode UseSetter} capability.
 *
 * Use this setting to invoke the getter behavior of a type that supports the {@linkcode UseSetter} capability consumer.
 *
 * @see {@linkcode AsSetter} for the setter broker behavior variant of this capability.
 */
export type AsGetter = UseSetter<false>;
