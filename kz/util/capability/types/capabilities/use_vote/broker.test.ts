// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { AsSafe, AsUnsafe, UseUnsafe } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseUnsafe - broker', () => {
  describe('AsSafe (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Actual = AsSafe;
      type Expected = UseUnsafe<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseUnsafe', () => {
      type Actual = AsSafe;
      type Expected = UseUnsafe;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsUnsafe', () => {
    it('should be the true variant', () => {
      type Actual = AsUnsafe;
      type Expected = UseUnsafe<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseUnsafe', () => {
      type Actual = AsUnsafe;
      type Expected = UseUnsafe;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
