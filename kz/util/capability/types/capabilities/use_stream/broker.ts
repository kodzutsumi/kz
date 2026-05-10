// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { UseStream } from './consumer.ts';

/**
 * The filtering behavior broker of the {@linkcode UseStream} capability.
 *
 * Use this setting to invoke the filtering behavior of a type that supports
 * the {@linkcode UseStream} capability consumer.
 *
 * @see {@linkcode AsPredicate} for the predicate (conditional, default implied) behavior broker of this capability.
 */
export type AsFilter = UseStream<true>;

/**
 * The predicate (conditional) behavior broker of the {@linkcode UseStream} capability.
 *
 * Use this setting to invoke the predicate (conditional) behavior of a type that supports
 * the {@linkcode UseStream} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode UseStream} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode AsFilter} for the filtering behavior broker of this capability.
 */
export type AsPredicate = UseStream<false>;
