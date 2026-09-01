import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsForward, $UseReversed } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsForward')
class _ {
  @Test('should be the false variant of $UseReversed')
  t0(): void {
    type Expected = $UseReversed<false>;
    type Actual = $AsForward;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseReversed')
  t1(): void {
    type Expected = $AsForward;
    type Actual = $UseReversed;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
