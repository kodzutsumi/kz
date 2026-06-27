// deno-lint-ignore-file no-explicit-any

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { Permit } from '@kz/util/lint';

const IS_TRUE = true;

describe('Permit', () => {
  it('requires a reason for permitting a banned type', () => {
    type Actual = Permit<'any', '#i11n:testing'>;
    type Expected = any;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('will not accept an empty reason', () => {
    type Actual = Permit<'any', ''>;
    type Expected = never;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the any type with a reason', () => {
    type Actual = Permit<'any', '#i11n:testing'>;
    type Expected = any;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });
});