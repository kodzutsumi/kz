// deno-lint-ignore-file no-explicit-any ban-types

import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';
import type { BannedTypes } from '@kz/types/lint';

const IS_TRUE = true;

@TestFixture('BannedTypes')
class _ {
  @Test('supports the `any` type')
  t0(): void {
    type Actual = BannedTypes['any'];
    type Expected = any;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('supports the `Function` type')
  t1(): void {
    type Actual = BannedTypes['Function'];
    type Expected = Function;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('supports the `Boolean` type')
  t2(): void {
    type Actual = BannedTypes['Boolean'];
    type Expected = Boolean;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('supports the `Number` type')
  t3(): void {
    type Actual = BannedTypes['Number'];
    type Expected = Number;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('supports the `String` type')
  t4(): void {
    type Actual = BannedTypes['String'];
    type Expected = String;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('supports the `Symbol` type')
  t5(): void {
    type Actual = BannedTypes['Symbol'];
    type Expected = Symbol;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('supports the `Object` type')
  t6(): void {
    type Actual = BannedTypes['Object'];
    type Expected = Object;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('supports the `{}` type')
  t7(): void {
    type Actual = BannedTypes['{}'];
    type Expected = {};
    type Result = IsExact<Actual, Expected>;
    assertType<Result>(IS_TRUE);
  }
}
