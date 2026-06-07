// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseVote } from './consumer.ts';

/**
 * The majority behavior broker of the {@linkcode UseVote} capability.
 *
 * Use this setting to invoke the majority behavior of a type that supports the
 * {@linkcode UseVote} capability consumer.
 *
 * @see {@linkcode AsRunoff} for the runoff (default implied) behavior broker of this capability.
 */
export type AsMajority = UseVote<true>;



/**
 * The safe behavior broker of the {@linkcode UseVote} capability.
 *
 * Use this setting to invoke the runoff behavior of a type that supports the
 * {@linkcode UseVote} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode UseVote} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode AsMajority} for the majority behavior broker of this capability.
 */
export type AsRunoff = UseVote<false>;

