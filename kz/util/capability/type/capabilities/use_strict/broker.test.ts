// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { AsLoose, AsStrict, UseStrict } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseStrict - broker', () => {
  describe('AsLoose (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Actual = AsLoose;
      type Expected = UseStrict<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseStrict', () => {
      type Actual = AsLoose;
      type Expected = UseStrict;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsStrict', () => {
    it('should be the true variant', () => {
      type Actual = AsStrict;
      type Expected = UseStrict<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseStrict', () => {
      type Actual = AsStrict;
      type Expected = UseStrict;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
