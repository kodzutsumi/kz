import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $UseThen,
  $UseThenKey,
  $UseThenKeyString,
} from '@kz/types/capabilities';

const IS_TRUE = true;
const IS_FALSE = false;

@TestFixture('$UseThen')
class _ {
  @Test('should be an capability open consumer')
  t0(): void {
    type TestValid = $UseThen<'invalid'>;
  }

  @Test('should be keyed by $UseThenKeyString')
  t1(): void {
    type Expected = $UseThenKey;
    type Actual = keyof $UseThen;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should have an unknown setting by default')
  t2(): void {
    type Expected = {
      [$UseThenKeyString]: unknown;
    };
    type Actual = $UseThen;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$UseThen<ThenType>')
  @Test('should have a ThenType setting')
  t3(): void {
    type Expected = {
      [$UseThenKeyString]: string;
    };
    type Actual = $UseThen<string>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$UseThen<ThenType>')
  @Test('should restrict $Then to a single type')
  t4(): void {
    type Expected = $UseThen<string>;
    type Actual = $UseThen<number>;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_FALSE);
  }
}
