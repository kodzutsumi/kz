import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $AsLoose,
  $AsStrict,
  $PickUseStrict,
  $Then,
} from '@kz/types/capabilities';

const IS_TRUE = true;

type $SettingsExclude = $Then<string>;
type $SettingsInclude = $AsStrict & $SettingsExclude;

@TestFixture('$PickUseStrict')
class _ {
  @TestGroup('$Settings include $UseStrict')
  @Test('should return setting')
  t0(): void {
    type Expected = $AsStrict;
    type Actual = $PickUseStrict<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return $AsLoose if no Default specified')
  t1(): void {
    type Expected = $AsLoose;
    type Actual = $PickUseStrict<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Settings exclude $UseStrict')
  @Test('should return specified Default')
  t2(): void {
    type Expected = $AsStrict;
    type Actual = $PickUseStrict<$SettingsExclude, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
