// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseCollection } from './consumer.ts';

/**
 * The collection-as-target behavior broker of the {@linkcode UseCollection} capability.
 *
 * Use this setting to invoke the collection behavior of a type that supports the
 * {@linkcode UseCollection} capability consumer, where the collection is the target of
 * the behavior.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode UseStrict} capability when the setting is not explicitly set to
 * > {@linkcode AsCollection}, {@linkcode AsValues}, or {@linkcode AsKeys}.
 *
 * @see {@linkcode AsValues} for the values-as-target behavior broker of this capability.
 * @see {@linkcode AsKeys} for the keys-as-target behavior broker of this capability.
 */
export type AsCollection = UseCollection<'collection'>;

/**
 * The values-as-target behavior broker of the {@linkcode UseCollection} capability
 * operating on the values of a record.
 *
 * Use this setting to invoke the behavior of a type that supports the
 * {@linkcode UseCollection} capability consumer, where the values of a record are
 * the target of the behavior.
 *
 * @see {@linkcode AsKeys} for the behavior of this capability operating on the keys of a record.
 * @see {@linkcode AsCollection} for the record-as-target (default implied) behavior of this capability.
 */
export type AsValues = UseCollection<'values'>;

/**
 * The keys-as-target behavior broker of the {@linkcode UseCollection} capability
 * operating on the keys of a record.
 *
 * Use this setting to invoke the behavior of a type that supports the
 * {@linkcode UseCollection} capability consumer, where the keys of a record are
 * the target of the behavior.
 *
 * @see {@linkcode AsValues} for the values-as-target behavior broker of this capability.
 * @see {@linkcode AsCollection} for the record-as-target (default implied) behavior of this capability.
 */
export type AsKeys = UseCollection<'keys'>;
