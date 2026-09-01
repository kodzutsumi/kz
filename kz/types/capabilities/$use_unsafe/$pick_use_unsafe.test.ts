import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $AsSafe,
  $AsUnsafe,
  $PickUseUnsafe,
  $Then,
} from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsUnsafe & $SettingsExclude;

@TestFixture('$PickUseUnsafe')
class _ {
  @TestGroup('$Settings include $UseStrict')
  @Test('should return setting')
  t0(): void {
    type Expected = $AsUnsafe;
    type Actual = $PickUseUnsafe<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return $AsSafe if no Default specified')
  t1(): void {
    type Expected = $AsSafe;
    type Actual = $PickUseUnsafe<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return specified Default')
  t2(): void {
    type Expected = $AsUnsafe;
    type Actual = $PickUseUnsafe<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
