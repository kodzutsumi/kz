// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsInitial,
  AsInverted,
  UseInverted,
  UseInvertedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseInverted - consumer', () => {
  describe('UseInverted', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseInverted<string>;
    });

    it('should be keyed by the UseInvertedKeyString', () => {
      type Actual = keyof UseInverted;
      type Expected = typeof UseInvertedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseInverted;
      type Expected = {
        [UseInvertedKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsInitial (default implied) with the false variant', () => {
      type Actual = UseInverted<false>;
      type Expected = AsInitial;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsInverted with the true variant', () => {
      type Actual = UseInverted<true>;
      type Expected = AsInverted;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
