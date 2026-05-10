// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsReadonly,
  AsWritable,
  UseReadonly,
  UseReadonlyKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseReadonly - consumer', () => {
  describe('UseReadonly', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseReadonly<string>;
    });

    it('should be keyed by the UseReadonlyKeyString', () => {
      type Actual = keyof UseReadonly;
      type Expected = typeof UseReadonlyKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseReadonly;
      type Expected = {
        [UseReadonlyKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsWritable (default implied) with the false variant', () => {
      type Actual = UseReadonly<false>;
      type Expected = AsWritable;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsReadonly with the true variant', () => {
      type Actual = UseReadonly<true>;
      type Expected = AsReadonly;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
