// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { KeysOf } from '../use_keys/mod.ts';
import type { OfType } from '../use_of_type/mod.ts';
import type { UseRecord, UseRecordTarget } from '../use_record/mod.ts';

export type AsRecordKeys<
  Type extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,  
  Keys extends keyof Type = keyof Type,
  RecordTarget extends UseRecordTarget = UseRecordTarget,
> = OfType<Type> | UseRecord<RecordTarget> | KeysOf<Keys>;
