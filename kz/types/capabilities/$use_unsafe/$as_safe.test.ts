import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsSafe, $UseUnsafe } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsSafe')
class _ {
  @Test('should be the false variant of $UseUnsafe')
  t0(): void {
    type Expected = $UseUnsafe<false>;
    type Actual = $AsSafe;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseUnsafe')
  t1(): void {
    type Expected = $AsSafe;
    type Actual = $UseUnsafe;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
