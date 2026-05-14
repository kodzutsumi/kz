// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  UseAsync,
  UseDefault,
  UseDepth,
  UseElse,
  UseExcluded,
  UseInverted,
  UseNullOption,
  UseOfType,
  UseOptional,
  UseReadonly,
  UseRecord,
  UseReversed,
  UseSetter,
  UseStream,
  UseStrict,
  UseThen,
  UseUnified,
  UseUnsafe,
} from '@kz/util/capability';

import type { BaseCapSet } from './types.ts';

const IS_TRUE = true;

describe('capability types', () => {
  describe('BaseCapSet', () => {
    it('should be a union of capabilities', () => {
      type Expected =
        | UseAsync
        | UseDefault
        | UseDepth
        | UseUnified
        | UseElse
        | UseExcluded
        | UseStream
        | UseInverted
        | UseNullOption
        | UseOfType
        | UseOptional
        | UseReadonly
        | UseRecord
        | UseReversed
        | UseSetter
        | UseStrict
        | UseThen
        | UseUnsafe;
      type Result = IsExact<BaseCapSet, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
