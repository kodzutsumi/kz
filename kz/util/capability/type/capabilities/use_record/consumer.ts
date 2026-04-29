// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseRecordKeyString, UseRecordTarget } from './constant.ts';

/**
 * A capability open consumer indicating support for operating on a record, its keys, or its values.
 *
 * Use this capability consumer to indicate that a type supports specifying a record target for a capability that operates on records.
 *
 * @template RecordTarget - The type of the capability setting value for this capability consumer.
 */
export type UseRecord<RecordTarget extends UseRecordTarget = UseRecordTarget> =
  {
    /**
     * The capability setting key for the {@linkcode UseRecord} capability.
     */
    [UseRecordKeyString]: RecordTarget;
  };
