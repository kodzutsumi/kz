import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has } from '@std/testing/types';
import type { Nil } from '@kz/types';

const IS_TRUE = true;

@TestFixture('Nil')
class _ {
  @Test('should contain `undefined`')
  hasUndefined(): void {
    type Expected = undefined;
    type Actual = Nil;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should contain `null`')
  hasNull(): void {
    type Expected = null;
    type Actual = Nil;
    type Result = Has<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  }
}