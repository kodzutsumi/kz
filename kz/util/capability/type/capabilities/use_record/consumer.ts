// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseRecordKeyString, UseRecordTarget } from './constant.ts';

/**
 * A capability that allows for the specification of a record type, its keys,
 * or its values as the target of a types capabilities.
 *
 * Use this capability consumer to indicate that a type supports operations on
 * a record type, its keys, or its values, based on the value of the capability
 * setting.
 *
 * @template RecordTarget - The target of the record capability, which can be a record type, its keys, or its values.
 */
export type UseRecord<RecordTarget extends UseRecordTarget = UseRecordTarget> =
  {
    /**
     * The capability setting key for the {@linkcode UseRecord} capability.
     */
    [UseRecordKeyString]: RecordTarget;
  };
