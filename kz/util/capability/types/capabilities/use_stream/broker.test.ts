// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { AsFilter, AsPredicate, UseStream } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseStream - broker', () => {
  describe('AsPredicate (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Actual = AsPredicate;
      type Expected = UseStream<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseStream', () => {
      type Actual = AsPredicate;
      type Expected = UseStream;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsFilter', () => {
    it('should be the true variant', () => {
      type Actual = AsFilter;
      type Expected = UseStream<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseStream', () => {
      type Actual = AsFilter;
      type Expected = UseStream;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
