import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $AsInverted, $GetUseInverted, $Then } from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsInverted & $SettingsExclude;

@TestFixture('$GetUseInverted')
class _ {
  @TestGroup('$Settings include $UseInverted')
  @Test('should return setting value')
  t0(): void {
    type Expected = true;
    type Actual = $GetUseInverted<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return false if no Default specified')
  t1(): void {
    type Expected = false;
    type Actual = $GetUseInverted<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return specified Default')
  t2(): void {
    type Expected = true;
    type Actual = $GetUseInverted<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
