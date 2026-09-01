import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has } from '@std/testing/types';
import type { Builtin } from '@kz/types';
import type { Permit } from '@kz/types/lint';

const IS_TRUE = true;

@TestFixture('Builtin')
class _ {
  @Test('should contain `string`')
  hasString(): void {
    type Expected = string;
    type Actual = Builtin;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `number`')
  hasNumber(): void {
    type Expected = number;
    type Actual = Builtin;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `symbol`')
  hasSymbol(): void {
    type Expected = symbol;
    type Actual = Builtin;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `boolean`')
  hasBoolean(): void {
    type Expected = boolean;
    type Actual = Builtin;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `bigint`')
  hasBigint(): void {
    type Expected = bigint;
    type Actual = Builtin;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `RegExp`')
  hasRegExp(): void {
    type Expected = RegExp;
    type Actual = Builtin;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `Function`')
  hasFunction(): void {
    type Expected = Permit<'Function', '#i11n:testing'>;
    type Actual = Builtin;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `Date`')
  hasDate(): void {
    const date = new Date();
    type Expected = typeof date;
    type Actual = Builtin;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `Error`')
  hasError(): void {
    const error = new Error();
    type Expected = typeof error;
    type Actual = Builtin;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }
}