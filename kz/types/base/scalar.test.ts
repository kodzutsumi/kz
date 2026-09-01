import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has } from '@std/testing/types';
import type { Scalar } from '@kz/types';

const IS_TRUE = true;

@TestFixture('Scalar')
class _ {
  @Test('should contain `string`')
  hasString(): void {
    type Expected = string;
    type Actual = Scalar;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `number`')
  hasNumber(): void {
    type Expected = number;
    type Actual = Scalar;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `symbol`')
  hasSymbol(): void {
    type Expected = symbol;
    type Actual = Scalar;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `boolean`')
  hasBoolean(): void {
    type Expected = boolean;
    type Actual = Scalar;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `bigint`')
  hasBigint(): void {
    type Expected = bigint;
    type Actual = Scalar;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }
}