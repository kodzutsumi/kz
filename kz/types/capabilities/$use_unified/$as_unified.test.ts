import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsUnified, $UseUnified } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsUnified')
class _ {
  @Test('should be the true variant of $UseUnified')
  t0(): void {
    type Expected = $UseUnified<true>;
    type Actual = $AsUnified;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseUnified')
  t1(): void {
    type Expected = $AsUnified;
    type Actual = $UseUnified;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
