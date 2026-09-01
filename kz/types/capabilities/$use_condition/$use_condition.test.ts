import { assertType, type IsExact } from '@std/testing/types';
import { Test, TestFixture, TestGroup, TestNames } from '@kz/testing/fw';
import type {
  $AsNullSetting,
  $AsLoose,
  $AsStrict,
  $UseCondition,
  $UseElse,
  $UseThen,
} from '@kz/types/capabilities';

type $Matrix = {
  null: $AsNullSetting,
  default: $AsLoose,
  strict: $AsStrict,
};

const $MatrixNames: Record<keyof $Matrix, string> = {
  null: '$AsNullSetting',
  default: '$AsLoose',
  strict: '$AsStrict',
};
const IS_TRUE = true;

@TestFixture('$UseCondition')
class _ {
  @TestGroup($MatrixNames.null)
  @Test('should be the same as $UseCondition<$AsLoose>')
  [TestNames.name](): void {
    type Expected = $UseCondition;
    type Actual = $UseCondition<$AsLoose>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup($MatrixNames.default)
  @Test('should be a union of $UseThen and $UseElse')
  [TestNames.name](): void {
    type Expected = $UseThen | $UseElse;
    type Actual = $UseCondition;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup($MatrixNames.strict)
  @Test('should be an intersection of $UseThen and $UseElse')
  [TestNames.name](): void {
    type Expected = $UseThen & $UseElse;
    type Actual = $UseCondition<$AsStrict>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
