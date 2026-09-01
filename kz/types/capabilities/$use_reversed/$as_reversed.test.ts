import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsReversed, $UseReversed } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsReversed')
class _ {
  @Test('should be the true variant of $UseReversed')
  t0(): void {
    type Expected = $UseReversed<true>;
    type Actual = $AsReversed;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseReversed')
  t1(): void {
    type Expected = $AsReversed;
    type Actual = $UseReversed;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
