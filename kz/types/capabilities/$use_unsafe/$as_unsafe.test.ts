import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsUnsafe, $UseUnsafe } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsUnsafe')
class _ {
  @Test('should be the true variant of $UseUnsafe')
  t0(): void {
    type Expected = $UseUnsafe<true>;
    type Actual = $AsUnsafe;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseUnsafe')
  t1(): void {
    type Expected = $AsUnsafe;
    type Actual = $UseUnsafe;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
