import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $AsFalseFinal,
  $AsTrueFinal,
  $PickUseFinal,
  $Then,
} from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsTrueFinal & $SettingsExclude;

@TestFixture('$PickUseFinal')
class _ {
  @TestGroup('$Settings include $UseInverted')
  @Test('should return setting')
  t0(): void {
    type Expected = $AsTrueFinal;
    type Actual = $PickUseFinal<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return $AsFalseFinal if no Default specified')
  t1(): void {
    type Expected = $AsFalseFinal;
    type Actual = $PickUseFinal<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseInverted')
  @Test('should return specified Default')
  t2(): void {
    type Expected = $AsTrueFinal;
    type Actual = $PickUseFinal<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
