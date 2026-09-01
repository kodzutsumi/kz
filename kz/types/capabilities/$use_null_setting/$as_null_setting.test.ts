import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $AsNullSetting, $UseNullSetting } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$AsNullSetting')
class _ {
  @Test('should be the null variant of $UseNullSetting')
  t0(): void {
    type Expected = $AsNullSetting;
    type Actual = $UseNullSetting;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseNullSetting')
  t1(): void {
    type Expected = $AsNullSetting;
    type Actual = $AsNullSetting;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
