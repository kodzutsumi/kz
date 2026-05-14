// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { AsDistributed, AsUnified, UseUnified } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseUnified - broker', () => {
  describe('AsUnified (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Actual = AsDistributed;
      type Expected = UseUnified<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseUnified', () => {
      type Actual = AsDistributed;
      type Expected = UseUnified;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsDistributed', () => {
    it('should be the true variant', () => {
      type Actual = AsUnified;
      type Expected = UseUnified<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseUnified', () => {
      type Actual = AsUnified;
      type Expected = UseUnified;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
