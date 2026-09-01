import { assertType, type IsExact } from '@std/testing/types';
import { Test, TestFixture, TestGroup, TestNames } from '@kz/testing/fw';
import type {
  $AsStrict,
  $Else,
  $PickUseCondition,
  $Then,
} from '@kz/types/capabilities';

type $Matrix = {
  missing: $AsStrict,
  then: $Then<string> & $Matrix['missing'],
  else: $Else<number> & $Matrix['missing'],
  full: $Matrix['then'] & $Else<number>,
};

const $MatrixNames: Record<keyof $Matrix, string> = {
  missing: '$AsStrict',
  then: '$Then<string> & $AsStrict',
  else: '$Else<number> & $AsStrict',
  full: '$Then<string> & $Else<number> & $AsStrict',
};
const IS_TRUE = true;

type $SettingsExclude = $AsStrict;
type $SettingsExcludeElse = $Then<string> & $SettingsExclude;
type $SettingsExcludeThen = $Else<number> & $SettingsExclude;
type $SettingsInclude = $SettingsExcludeThen & $SettingsExcludeElse;

@TestFixture('$PickUseCondition')
class _ {
  @TestGroup($MatrixNames.full)
  @Test('should return condition')
  [TestNames.name](): void {
    type Expected = $Then<string> & $Else<number>;
    type Actual = $PickUseCondition<$SettingsInclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup($MatrixNames.missing)
  @Test('should return $Then<unknown> & $Else<unknown>')
  [TestNames.name](): void {
    type Expected = $Then<unknown> & $Else<unknown>;
    type Actual = $PickUseCondition<$SettingsExclude>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup($MatrixNames.else)
  @Test('should return $Then<unknown> & $Else<ElseType>')
  [TestNames.name](): void {
    type Expected = $Then<unknown> & $Else<number>;
    type Actual = $PickUseCondition<$SettingsExcludeThen>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup($MatrixNames.then)
  @Test('should return $Then<ThenType> & $Else<unknown>')
  [TestNames.name](): void {
    type Expected = $Then<string> & $Else<unknown>;
    type Actual = $PickUseCondition<$SettingsExcludeElse>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
