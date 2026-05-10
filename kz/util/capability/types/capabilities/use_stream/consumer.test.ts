// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsFilter,
  AsPredicate,
  UseStream,
  UseStreamKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseStream - consumer', () => {
  describe('UseStream', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseStream<string>;
    });

    it('should be keyed by the UseStreamKeyString', () => {
      type Actual = keyof UseStream;
      type Expected = typeof UseStreamKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseStream;
      type Expected = {
        [UseStreamKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsPredicate (default implied) with the false variant', () => {
      type Actual = UseStream<false>;
      type Expected = AsPredicate;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsFilter with the true variant', () => {
      type Actual = UseStream<true>;
      type Expected = AsFilter;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
