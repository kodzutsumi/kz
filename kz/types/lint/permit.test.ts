// deno-lint-ignore-file no-explicit-any ban-types

import { TestFixture, Test } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';
import type { Permit } from '@kz/types/lint';

const IS_TRUE = true;

@TestFixture('Permit')
class _ {
  @Test('requires a reason for permitting a banned type')
  t0(): void {
    // @ts-expect-error Requires a reason
    type _ = Permit<'any'>;
  }

  @Test('will not accept an empty reason')
  t1(): void {
    type Actual = Permit<'any', ''>;
    type Expected = never;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the any type with a reason')
  t2(): void {
    type Actual = Permit<'any', '#i11n:testing'>;
    type Expected = any;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Function type with a reason')
  t3(): void {
    type Actual = Permit<'Function', '#i11n:testing'>;
    type Expected = Function;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Boolean type with a reason')
  t4(): void {
    type Actual = Permit<'Boolean', '#i11n:testing'>;
    type Expected = Boolean;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Number type with a reason')
  t5(): void {
    type Actual = Permit<'Number', '#i11n:testing'>;
    type Expected = Number;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the String type with a reason')
  t6(): void {
    type Actual = Permit<'String', '#i11n:testing'>;
    type Expected = String;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Symbol type with a reason')
  t7(): void {
    type Actual = Permit<'Symbol', '#i11n:testing'>;
    type Expected = Symbol;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Object type with a reason')
  t8(): void {
    type Actual = Permit<'Object', '#i11n:testing'>;
    type Expected = Object;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the `{}` (any non-nullish) type with a reason')
  t9(): void {
    type Actual = Permit<'{}', '#i11n:testing'>;
    type Expected = {};
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }
}