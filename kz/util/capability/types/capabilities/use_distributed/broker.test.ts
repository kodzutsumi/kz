// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  AsDistributed,
  AsUnion,
  UseDistributed,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseDistributed - broker', () => {
  describe('AsUnion (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Actual = AsUnion;
      type Expected = UseDistributed<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDistributed', () => {
      type Actual = AsUnion;
      type Expected = UseDistributed;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsDistributed', () => {
    it('should be the true variant', () => {
      type Actual = AsDistributed;
      type Expected = UseDistributed<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDistributed', () => {
      type Actual = AsDistributed;
      type Expected = UseDistributed;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
