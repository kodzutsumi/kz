// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $UseAsync,
  // $UseDefault,
  // $UseDepth,
  $UseElse,
  // $UseExcluded,
  // $UseForType,
  $UseInverted,
  $UseNullSetting,
  // $UseOfType,
  // $UseOptional,
  // $UseReadonly,
  // $UseRecord,
  // $UseReversed,
  // $UseSetter,
  // $UseStream,
  $UseStrict,
  $UseThen,
  // $UseUnified,
  $UseUnsafe,
  $UseVote,
} from '@kz/util/capability';

import type { BaseCapSet } from './types.ts';

const IS_TRUE = true;

describe('capability types', () => {
  describe('BaseCapSet', () => {
    it('should be a union of capabilities', () => {
      type Expected =
        | $UseAsync
        // | $UseDefault
        // | $UseDepth
        | $UseElse
        // | $UseExcluded
        // | $UseForType
        | $UseInverted
        | $UseNullSetting
        // | $UseOfType
        // | $UseOptional
        // | $UseReadonly
        // | $UseRecord
        // | $UseReversed
        // | $UseSetter
        // | $UseStream
        | $UseStrict
        | $UseThen
        // | $UseUnified
        | $UseUnsafe
        | $UseVote;
      type Result = IsExact<BaseCapSet, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
