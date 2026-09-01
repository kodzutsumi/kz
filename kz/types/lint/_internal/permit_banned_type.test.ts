// deno-lint-ignore-file no-explicit-any ban-types

import { TestFixture, Test } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';
import type { PermitBannedType } from './permit_banned_type.ts';

const IS_TRUE = true;

@TestFixture('PermitBannedType')
class _ {
  @Test('requires a reason for permitting a banned type')
  t0(): void {
    // @ts-expect-error Requires a reason
    type _ = PermitBannedType<'any'>;
  }

  @Test('will not accept an empty reason')
  t1(): void {
    type Actual = PermitBannedType<'any', ''>;
    type Expected = never;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the any type with a reason')
  t2(): void {
    type Actual = PermitBannedType<'any', '#i11n:testing'>;
    type Expected = any;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Function type with a reason')
  t3(): void {
    type Actual = PermitBannedType<'Function', '#i11n:testing'>;
    type Expected = Function;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Boolean type with a reason')
  t4(): void {
    type Actual = PermitBannedType<'Boolean', '#i11n:testing'>;
    type Expected = Boolean;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Number type with a reason')
  t5(): void {
    type Actual = PermitBannedType<'Number', '#i11n:testing'>;
    type Expected = Number;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the String type with a reason')
  t6(): void {
    type Actual = PermitBannedType<'String', '#i11n:testing'>;
    type Expected = String;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Symbol type with a reason')
  t7(): void {
    type Actual = PermitBannedType<'Symbol', '#i11n:testing'>;
    type Expected = Symbol;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the Object type with a reason')
  t8(): void {
    type Actual = PermitBannedType<'Object', '#i11n:testing'>;
    type Expected = Object;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('permits the `{}` (any non-nullish) type with a reason')
  t9(): void {
    type Actual = PermitBannedType<'{}', '#i11n:testing'>;
    type Expected = {};
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }
}