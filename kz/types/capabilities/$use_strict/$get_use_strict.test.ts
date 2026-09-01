import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $AsStrict, $GetUseStrict, $Then } from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsStrict & $SettingsExclude;

@TestFixture('$GetUseStrict')
class _ {
  @TestGroup('$Settings include $UseStrict')
  @Test('should return setting value')
  t0(): void {
    type Expected = true;
    type Actual = $GetUseStrict<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return false if no Default specified')
  t1(): void {
    type Expected = false;
    type Actual = $GetUseStrict<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return specified Default')
  t2(): void {
    type Expected = true;
    type Actual = $GetUseStrict<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
