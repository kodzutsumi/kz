// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Or } from '@kz/util/logic';

const IS_TRUE = true;

describe('Or', () => {
  type IsNumberLike<Type> = Or<
    Type extends number ? true : false,
    Type extends `${number}` ? true : false
  >;

  it('should return true', () => {
    type Actual = IsNumberLike<30>;
    type Expected = true;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('should return true', () => {
    type Actual = IsNumberLike<'256'>;
    type Expected = true;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('should return false', () => {
    type Actual = IsNumberLike<'hello'>;
    type Expected = false;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });
});
