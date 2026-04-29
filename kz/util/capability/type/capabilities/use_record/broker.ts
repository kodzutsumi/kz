// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseRecord } from './consumer.ts';

/**
 * A broker behavior of the {@linkcode UseRecord} capability operating on an entire record.
 */
export type AsRecord = UseRecord<'record'>;

/**
 * A broker behavior of the {@linkcode UseRecord} capability operating on the individual values within a record.
 */
export type AsValues = UseRecord<'values'>;

/**
 * A broker behavior of the {@linkcode UseRecord} capability operating on the keys of a record.
 */
export type AsKeys = UseRecord<'keys'>;
