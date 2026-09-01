import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $AsNullSetting,
  $IsNullSetting,
  $Then,
} from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsNonNull = $Then<string>;
type $SettingsNull = $AsNullSetting;

@TestFixture('$IsNullSetting')
class _ {
  @TestGroup('$Settings are not null')
  @Test('should return false')
  t0(): void {
    type Expected = false;
    type Actual = $IsNullSetting<$Then<string>>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings are null')
  @Test('no Default specified')
  t1(): void {
    type Expected = true;
    type Actual = $IsNullSetting<$AsNullSetting>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
