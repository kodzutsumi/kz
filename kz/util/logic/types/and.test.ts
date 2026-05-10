// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { And } from '@kz/util/logic';

const IS_TRUE = true;

describe('And', () => {
  type IsStringLike<Type> = And<
    Type extends { length: number } ? true : false,
    Type extends { [index: number]: string } ? true : false
  >;

  it('should return true', () => {
    type Actual = IsStringLike<'hello world'>;
    type Expected = true;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('should return true', () => {
    type Actual = IsStringLike<['hello', 'world']>;
    type Expected = true;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('should return false', () => {
    type Actual = IsStringLike<30>;
    type Expected = false;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });
});
