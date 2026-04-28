// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsForward,
  AsReversed,
  UseReversed,
  UseReversedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseReversed - consumer', () => {
  describe('UseReversed', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseReversed<string>;
    });

    it('should be keyed by the UseReversedKeyString', () => {
      type Actual = keyof UseReversed;
      type Expected = typeof UseReversedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseReversed;
      type Expected = {
        [UseReversedKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsForward (default implied) with the false variant', () => {
      type Actual = UseReversed<false>;
      type Expected = AsForward;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsReversed with the true variant', () => {
      type Actual = UseReversed<true>;
      type Expected = AsReversed;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
