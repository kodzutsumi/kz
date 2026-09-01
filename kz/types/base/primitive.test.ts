import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has } from '@std/testing/types';
import type { Primitive } from '@kz/types';

const IS_TRUE = true;

@TestFixture('Primitive')
class _ {
  @Test('should contain `string`')
  hasString(): void {
    type Expected = string;
    type Actual = Primitive;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `number`')
  hasNumber(): void {
    type Expected = number;
    type Actual = Primitive;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `symbol`')
  hasSymbol(): void {
    type Expected = symbol;
    type Actual = Primitive;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `boolean`')
  hasBoolean(): void {
    type Expected = boolean;
    type Actual = Primitive;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `bigint`')
  hasBigint(): void {
    type Expected = bigint;
    type Actual = Primitive;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }
  
  @Test('should contain `undefined`')
  hasUndefined(): void {
    type Expected = undefined;
    type Actual = Primitive;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `null`')
  hasNull(): void {
    type Expected = null;
    type Actual = Primitive;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }
}