import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $Then, $UseThen } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$Then')
class _ {
  @TestGroup('$Then')
  @Test('should be the unknown variant of $UseThen')
  t0(): void {
    type Expected = $UseThen;
    type Actual = $Then;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Then')
  @Test('should be assignable to $UseThen')
  t1(): void {
    type Expected = $Then;
    type Actual = $UseThen;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Then<ThenType>')
  @Test('should be the string variant of $UseThen')
  t2(): void {
    type Expected = $Then<string>;
    type Actual = $UseThen<string>;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Then<ThenType>')
  @Test('should be assignable to $UseThen')
  t3(): void {
    type Expected = $Then<string>;
    type Actual = $UseThen;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
