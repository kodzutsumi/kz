import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsTie, $UseFinal } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsTie')
class _ {
  @Test('should be the boolean variant of $UseFinal')
  t0(): void {
    type Expected = $UseFinal<boolean>;
    type Actual = $AsTie;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseFinal')
  t1(): void {
    type Expected = $AsTie;
    type Actual = $UseFinal;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
