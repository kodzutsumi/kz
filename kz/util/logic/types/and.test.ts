// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { And } from '@kz/util/logic';

const IS_TRUE = true;

describe('And', () => {
  describe('examples', () => {
    describe('IsStringLiteral', () => {
      type IsStringLiteral<Type> = And<
        Type extends string ? true : false,
        string extends Type ? false : true
      >;

      it('should return true', () => {
        type Actual = IsStringLiteral<'hello world'>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return false', () => {
        type Actual = IsStringLiteral<string>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
