// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsRecord,
  UseRecord,
  UseRecordKeyString,
  UseRecordTarget,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseRecord - consumer', () => {
  describe('UseRecord', () => {
    it('should be keyed by the UseRecordKeyString', () => {
      type Actual = keyof UseRecord;
      type Expected = typeof UseRecordKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have a UseRecordTarget setting by default', () => {
      type Actual = UseRecord;
      type Expected = {
        [UseRecordKeyString]: UseRecordTarget;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability option consumer', () => {
      type Actual = UseRecord<'record'>;
      type Expected = AsRecord;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
