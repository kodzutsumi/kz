// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsDistributed,
  AsUnion,
  UseDistributed,
  UseDistributedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseDistributed - consumer', () => {
  describe('UseDistributed', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseDistributed<string>;
    });

    it('should be keyed by the UseDistributedKeyString', () => {
      type Actual = keyof UseDistributed;
      type Expected = typeof UseDistributedKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseDistributed;
      type Expected = {
        [UseDistributedKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsUnion (default implied) with the false variant', () => {
      type Actual = UseDistributed<false>;
      type Expected = AsUnion;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsDistributed with the true variant', () => {
      type Actual = UseDistributed<true>;
      type Expected = AsDistributed;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
