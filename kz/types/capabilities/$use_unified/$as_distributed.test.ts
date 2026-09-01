import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsDistributed, $UseUnified } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsDistributed')
class _ {
  @Test('should be the false variant of $UseUnified')
  t0(): void {
    type Expected = $UseUnified<false>;
    type Actual = $AsDistributed;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseUnified')
  t1(): void {
    type Expected = $AsDistributed;
    type Actual = $UseUnified;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
