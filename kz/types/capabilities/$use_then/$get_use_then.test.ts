import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $Else, $GetUseThen, $Then } from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Else<string>;
type $SettingsInclude = $Then<string> & $SettingsExclude;

@TestFixture('$GetUseThen')
class _ {
  @TestGroup('$Settings include $Then')
  @Test('should return ThenType')
  t0(): void {
    type Expected = string;
    type Actual = $GetUseThen<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $Then')
  @Test('should return unknown if no Default specified')
  t1(): void {
    type Expected = unknown;
    type Actual = $GetUseThen<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $Then')
  @Test('should return specified Default')
  t2(): void {
    type Expected = symbol;
    type Actual = $GetUseThen<$SettingsExclude, symbol>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
