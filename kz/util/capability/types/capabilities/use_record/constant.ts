// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * The capability setting key for the {@linkcode UseRecord} capability.
 */
export declare const UseRecordKeyString = 'kz.i11n:use_record';

/**
 * The type of the capability setting key for the {@linkcode UseRecord} capability.
 */
export type UseRecordKey = typeof UseRecordKeyString;

/**
 * The possible capability settings for the {@linkcode UseRecord} capability.
 *
 * - `record`: The capability applies to the entire record.
 * - `values`: The capability applies to the individual values within the record.
 * - `keys`: The capability applies to the keys of the record.
 */
export type UseRecordTarget = 'record' | 'values' | 'keys';
