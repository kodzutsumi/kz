import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $AsForward,
  $AsReversed,
  $PickUseReversed,
  $Then,
} from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsReversed & $SettingsExclude;

@TestFixture('$PickUseReversed')
class _ {
  @TestGroup('$Settings include $UseInverted')
  @Test('should return setting')
  t0(): void {
    type Expected = $AsReversed;
    type Actual = $PickUseReversed<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return $AsForward if no Default specified')
  t1(): void {
    type Expected = $AsForward;
    type Actual = $PickUseReversed<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return specified Default')
  t2(): void {
    type Expected = $AsReversed;
    type Actual = $PickUseReversed<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
