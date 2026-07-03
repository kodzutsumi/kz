// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { $AsSafe, $AsUnsafe, $UseUnsafe } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseUnsafe - broker', () => {
  describe('$AsSafe (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseUnsafe<false>;
      type Actual = $AsSafe;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseUnsafe', () => {
      type Expected = $UseUnsafe;
      type Actual = $AsSafe;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsUnsafe', () => {
    it('should be the true variant', () => {
      type Expected = $UseUnsafe<true>;
      type Actual = $AsUnsafe;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseUnsafe', () => {
      type Expected = $UseUnsafe;
      type Actual = $AsUnsafe;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
