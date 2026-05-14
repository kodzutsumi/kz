// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Con } from '@kz/util/logic';

const IS_TRUE = true;

describe('Con', () => {
  describe('examples', () => {
    //TODO(@ebntly) Add an example
    describe('IsIntersectionEmpty', () => {
      type IsIntersectionEmpty<TypeA, TypeB> = Con<
        TypeA extends TypeB ? true : false,
        TypeB extends TypeA ? true : false
      >;

      it('should return true', () => {
        type Actual = IsIntersectionEmpty<string, number>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return true', () => {
        type Actual = IsIntersectionEmpty<string, string | number>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return boolean', () => {
        type Actual = IsIntersectionEmpty<string | number, string | boolean>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return boolean', () => {
        type Actual = IsIntersectionEmpty<number | boolean, boolean>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
