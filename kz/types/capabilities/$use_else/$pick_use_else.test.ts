import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $Else, $PickUseElse, $Then } from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $Else<number> & $SettingsExclude;

@TestFixture('$PickUseElse')
class _ {
  @TestGroup('$Settings include $Else')
  @Test('should return setting')
  t0(): void {
    type Expected = $Else<number>;
    type Actual = $PickUseElse<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $Else')
  @Test('should return $Else<unknown> if no Default specified')
  t1(): void {
    type Expected = $Else<unknown>;
    type Actual = $PickUseElse<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $Else')
  @Test('should return specified Default')
  t2(): void {
    type Expected = $Else<symbol>;
    type Actual = $PickUseElse<$SettingsExclude, symbol>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
