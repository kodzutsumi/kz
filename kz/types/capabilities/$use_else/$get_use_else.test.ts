import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $Else, $GetUseElse, $Then } from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $Else<number> & $SettingsExclude;

@TestFixture('$GetUseElse')
class _ {
  @TestGroup('$Settings include $Else')
  @Test('should return ThenType')
  t0(): void {
    type Expected = number;
    type Actual = $GetUseElse<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $Else')
  @Test('should return unknown if no Default specified')
  t1(): void {
    type Expected = unknown;
    type Actual = $GetUseElse<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $Else')
  @Test('should return specified Default')
  t2(): void {
    type Expected = symbol;
    type Actual = $GetUseElse<$SettingsExclude, symbol>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
