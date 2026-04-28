// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { AsGetter, AsSetter, UseSetter } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseSetter - broker', () => {
  describe('AsGetter (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Actual = AsGetter;
      type Expected = UseSetter<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseSetter', () => {
      type Actual = AsGetter;
      type Expected = UseSetter;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsSetter', () => {
    it('should be the true variant', () => {
      type Actual = AsSetter;
      type Expected = UseSetter<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseSetter', () => {
      type Actual = AsSetter;
      type Expected = UseSetter;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
