import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $UseNullSetting } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$UseNullSetting')
class _ {
  @Test('should be a capability fixed consumer')
  t0(): void {
    // @ts-expect-error - Should accept no settings
    type TestInvalid = $UseNullSetting<'invalid'>;
  }

  @Test('should have no setting by default')
  t1(): void {
    type Expected = Record<never, never>;
    type Actual = $UseNullSetting;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
