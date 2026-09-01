import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsInitial, $UseInverted } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsInitial')
class _ {
  @Test('should be the false variant of $UseInverted')
  t0(): void {
    type Expected = $UseInverted<false>;
    type Actual = $AsInitial;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseInverted')
  t1(): void {
    type Expected = $AsInitial;
    type Actual = $UseInverted;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
