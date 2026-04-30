// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseExcluded } from './consumer.ts';

/**
 * The exclusive behavior broker of the {@linkcode UseExcluded} capability.
 *
 * Use this setting to invoke the exclusive behavior of a type that supports
 * the {@linkcode UseExcluded} capability consumer.
 * 
 * @see {@linkcode AsIncluded} for the inclusive (default implied) broker behavior of this capability.
 */
export type AsExcluded = UseExcluded<true>;

/**
 * The inclusive behavior broker of the {@linkcode UseExcluded} capability.
 * 
 * Use this setting to invoke the inclusive behavior of a type that supports
 * the {@linkcode UseExcluded} capability consumer.
 * 
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode UseExcluded} capability when the setting is not explicitly set
 * > to `true` or `false`.
 *
 * @see {@linkcode AsExcluded} for the exclusive behavior broker of this capability.
 */
export type AsIncluded = UseExcluded<false>;
