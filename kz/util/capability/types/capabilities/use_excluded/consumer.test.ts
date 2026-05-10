// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsExcluded,
  AsIncluded,
  UseExcluded,
  UseExcludedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseExcluded - consumer', () => {
  describe('UseExcluded', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseExcluded<string>;
    });

    it('should be keyed by the UseExcludedKeyString', () => {
      type Actual = keyof UseExcluded;
      type Expected = typeof UseExcludedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseExcluded;
      type Expected = {
        [UseExcludedKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsIncluded (default implied) with the false variant', () => {
      type Actual = UseExcluded<false>;
      type Expected = AsIncluded;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsExcluded with the true variant', () => {
      type Actual = UseExcluded<true>;
      type Expected = AsExcluded;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
