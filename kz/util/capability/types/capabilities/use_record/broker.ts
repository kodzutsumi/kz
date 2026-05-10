// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseRecord } from './consumer.ts';

/**
 * The record-as-target behavior broker of the {@linkcode UseRecord} capability.
 *
 * Use this setting to invoke the record behavior of a type that supports the
 * {@linkcode UseRecord} capability consumer, where the record is the target of
 * the behavior.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode UseStrict} capability when the setting is not explicitly set to
 * > {@linkcode AsRecord}, {@linkcode AsValues}, or {@linkcode AsKeys}.
 *
 * @see {@linkcode AsValues} for the values-as-target behavior broker of this capability.
 * @see {@linkcode AsKeys} for the keys-as-target behavior broker of this capability.
 */
export type AsRecord = UseRecord<'record'>;

/**
 * The values-as-target behavior broker of the {@linkcode UseRecord} capability
 * operating on the values of a record.
 *
 * Use this setting to invoke the behavior of a type that supports the
 * {@linkcode UseRecord} capability consumer, where the values of a record are
 * the target of the behavior.
 *
 * @see {@linkcode AsKeys} for the behavior of this capability operating on the keys of a record.
 * @see {@linkcode AsRecord} for the record-as-target (default implied) behavior of this capability.
 */
export type AsValues = UseRecord<'values'>;

/**
 * The keys-as-target behavior broker of the {@linkcode UseRecord} capability
 * operating on the keys of a record.
 *
 * Use this setting to invoke the behavior of a type that supports the
 * {@linkcode UseRecord} capability consumer, where the keys of a record are
 * the target of the behavior.
 *
 * @see {@linkcode AsValues} for the values-as-target behavior broker of this capability.
 * @see {@linkcode AsRecord} for the record-as-target (default implied) behavior of this capability.
 */
export type AsKeys = UseRecord<'keys'>;
