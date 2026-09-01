import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $Else, $PickUseThen, $Then } from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Else<string>;
type $SettingsInclude = $Then<string> & $SettingsExclude;

@TestFixture('$PickUseThen')
class _ {
  @TestGroup('$Settings include $Then')
  @Test('should return setting')
  t0(): void {
    type Expected = $Then<string>;
    type Actual = $PickUseThen<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $Then')
  @Test('should return $Then<unknown> if no Default specified')
  t1(): void {
    type Expected = $Then<unknown>;
    type Actual = $PickUseThen<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $Then')
  @Test('should return specified Default')
  t2(): void {
    type Expected = $Then<symbol>;
    type Actual = $PickUseThen<$SettingsExclude, symbol>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
