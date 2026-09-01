import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsStrict, $UseStrict } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsStrict')
class _ {
  @Test('should be the true variant of $UseStrict')
  t0(): void {
    type Expected = $UseStrict<true>;
    type Actual = $AsStrict;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseStrict')
  t1(): void {
    type Expected = $AsStrict;
    type Actual = $UseStrict;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
