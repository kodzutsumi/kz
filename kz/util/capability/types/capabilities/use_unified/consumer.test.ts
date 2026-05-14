// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsDistributed,
  AsUnified,
  UseUnified,
  UseUnifiedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseUnified - consumer', () => {
  describe('UseUnified', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseUnified<string>;
    });

    it('should be keyed by the UseUnifiedKeyString', () => {
      type Actual = keyof UseUnified;
      type Expected = typeof UseUnifiedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseUnified;
      type Expected = {
        [UseUnifiedKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsDistributed (default implied) with the false variant', () => {
      type Actual = UseUnified<false>;
      type Expected = AsDistributed;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsUnified with the true variant', () => {
      type Actual = UseUnified<true>;
      type Expected = AsUnified;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
