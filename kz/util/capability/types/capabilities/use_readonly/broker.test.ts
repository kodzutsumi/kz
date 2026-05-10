// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { AsReadonly, AsWritable, UseReadonly } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseReadonly - broker', () => {
  describe('AsWritable (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Actual = AsWritable;
      type Expected = UseReadonly<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseReadonly', () => {
      type Actual = AsWritable;
      type Expected = UseReadonly;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsReadonly', () => {
    it('should be the true variant', () => {
      type Actual = AsReadonly;
      type Expected = UseReadonly<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseReadonly', () => {
      type Actual = AsReadonly;
      type Expected = UseReadonly;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
