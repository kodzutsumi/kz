import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $AsDistributed,
  $AsUnified,
  $PickUseUnified,
  $Then,
} from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsUnified & $SettingsExclude;

@TestFixture('$PickUseUnified')
class _ {
  @TestGroup('$Settings include $UseStrict')
  @Test('should return setting')
  t0(): void {
    type Expected = $AsUnified;
    type Actual = $PickUseUnified<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return $AsDistributed if no Default specified')
  t1(): void {
    type Expected = $AsDistributed;
    type Actual = $PickUseUnified<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return specified Default')
  t2(): void {
    type Expected = $AsUnified;
    type Actual = $PickUseUnified<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
