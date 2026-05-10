// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsAsync,
  AsSync,
  UseAsync,
  UseAsyncKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseAsync - consumer', () => {
  describe('UseAsync', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseAsync<string>;
    });

    it('should be keyed by the UseAsyncKeyString', () => {
      type Actual = keyof UseAsync;
      type Expected = typeof UseAsyncKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseAsync;
      type Expected = {
        [UseAsyncKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsSync (default implied) with the false variant', () => {
      type Actual = UseAsync<false>;
      type Expected = AsSync;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsAsync with the true variant', () => {
      type Actual = UseAsync<true>;
      type Expected = AsAsync;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
