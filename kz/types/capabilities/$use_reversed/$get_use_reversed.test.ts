import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $AsReversed, $GetUseReversed, $Then } from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsReversed & $SettingsExclude;

@TestFixture('$GetUseReversed')
class _ {
  @TestGroup('$Settings include $UseInverted')
  @Test('should return setting value')
  t0(): void {
    type Expected = true;
    type Actual = $GetUseReversed<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return false if no Default specified')
  t1(): void {
    type Expected = false;
    type Actual = $GetUseReversed<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return specified Default')
  t2(): void {
    type Expected = true;
    type Actual = $GetUseReversed<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
