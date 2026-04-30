// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseSetter } from './consumer.ts';

/**
 * The setter broker behavior of the {@linkcode UseSetter} capability.
 *
 * Use this setting to invoke the setter behavior of a type that supports the
 * {@linkcode UseSetter} capability consumer.
 *
 * @see {@linkcode AsGetter} for the getter (default implied) behavior broker of this capability.
 */
export type AsSetter = UseSetter<true>;

/**
 * The getter broker behavior of the {@linkcode UseSetter} capability.
 * 
 * Use this setting to invoke the getter behavior of a type that supports the
 * {@linkcode UseSetter} capability consumer.
 * 
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode UseSetter} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode AsSetter} for the setter behavior broker of this capability.
 */
export type AsGetter = UseSetter<false>;
