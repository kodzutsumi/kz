import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsFinal, $UseFinal } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsFinal')
class _ {
  @Test('should be the true variant of $UseFinal')
  t0(): void {
    type Expected = $UseFinal<true>;
    type Actual = $AsFinal;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseFinal')
  t1(): void {
    type Expected = $AsFinal;
    type Actual = $UseFinal;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
