import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsLoose, $UseStrict } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsLoose')
class _ {
  @Test('should be the false variant of $UseStrict')
  t0(): void {
    type Expected = $UseStrict<false>;
    type Actual = $AsLoose;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseStrict')
  t1(): void {
    type Expected = $AsLoose;
    type Actual = $UseStrict;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
