// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Not } from '@kz/util/logic';

const IS_TRUE = true;

describe('Not', () => {
  type IsNotList<Type> = Not<
    Type extends { length: number } ? true : false
  >;

  it('should return true', () => {
    type Actual = IsNotList<{
      id: number;
      name: string;
    }>;
    type Expected = true;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('should return true', () => {
    const Value = Symbol.for('test');
    type Actual = IsNotList<typeof Value>;
    type Expected = true;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('should return false', () => {
    type Actual = IsNotList<'string'>;
    type Expected = false;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });
});
