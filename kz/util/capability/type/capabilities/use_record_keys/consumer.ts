// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseRecord, UseRecordTarget } from '../use_record/mod.ts';
import type { UseOfType } from '../use_of_type/mod.ts';
import type { UseKeys } from '../use_keys/mod.ts';

/**
 * A capability open consumer indicating support working on the keys of a record.
 *
 * Use this capability consumer to indicate that a type supports working on the keys of a record, such as by providing a method that takes a record and a set of keys and returns a new record with only those keys.
 *
 * @template ForType - The type of the object whose keys are being used.
 * @template OfKeys - The keys of the object that are being used.
 * @template RecordTarget - The target of the record capability, which indicates whether the capability applies to the record itself, its values, or its keys.
 */
export type UseRecordKeys<
  Type extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
  Keys extends keyof Type = keyof Type,
  RecordTarget extends UseRecordTarget = UseRecordTarget,
> = UseOfType<Type> | UseRecord<RecordTarget> | UseKeys<Keys>;
