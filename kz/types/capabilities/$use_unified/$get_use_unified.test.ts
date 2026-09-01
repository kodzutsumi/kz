import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $AsUnified, $GetUseUnified, $Then } from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsUnified & $SettingsExclude;

@TestFixture('$GetUseUnified')
class _ {
  @TestGroup('$Settings include $UseStrict')
  @Test('should return setting value')
  t0(): void {
    type Expected = true;
    type Actual = $GetUseUnified<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return false if no Default specified')
  t1(): void {
    type Expected = false;
    type Actual = $GetUseUnified<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return specified Default')
  t2(): void {
    type Expected = true;
    type Actual = $GetUseUnified<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
