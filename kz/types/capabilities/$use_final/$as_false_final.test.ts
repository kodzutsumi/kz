import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsFalseFinal, $UseFinal } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsFalseFinal')
class _ {
  @Test('should be the false variant of $UseFinal')
  t0(): void {
    type Expected = $UseFinal<false>;
    type Actual = $AsFalseFinal;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseFinal')
  t1(): void {
    type Expected = $AsFalseFinal;
    type Actual = $UseFinal;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
