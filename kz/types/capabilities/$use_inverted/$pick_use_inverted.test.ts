import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $AsInitial,
  $AsInverted,
  $PickUseInverted,
  $Then,
} from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsInverted & $SettingsExclude;

@TestFixture('$PickUseInverted')
class _ {
  @TestGroup('$Settings include $UseInverted')
  @Test('should return setting')
  t0(): void {
    type Expected = $AsInverted;
    type Actual = $PickUseInverted<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return $AsInitial if no Default specified')
  t1(): void {
    type Expected = $AsInitial;
    type Actual = $PickUseInverted<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return specified Default')
  t2(): void {
    type Expected = $AsInverted;
    type Actual = $PickUseInverted<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
