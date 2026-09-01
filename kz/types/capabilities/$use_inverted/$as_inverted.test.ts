import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsInverted, $UseInverted } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsInverted')
class _ {
  @Test('should be the true variant of $UseInverted')
  t0(): void {
    type Expected = $UseInverted<true>;
    type Actual = $AsInverted;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseInverted')
  t1(): void {
    type Expected = $AsInverted;
    type Actual = $UseInverted;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
