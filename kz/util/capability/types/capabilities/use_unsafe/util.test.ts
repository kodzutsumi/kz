
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsSafe,
  $PickUnsafe,
  $UseUnsafe,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseUnsafe - util', () => {
describe('$PickUnsafe', () => {
    it('should pick the $UseUnsafe value from a settings object', () => {
      type Expected = $UseUnsafe<false>;
      type Settings = $AsSafe & $AsCondition;
      type Actual = $PickUnsafe<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsSafe if the settings object does not have a $UseUnsafe value', () => {
      type Expected = $AsSafe;
      type Settings = $AsCondition;
      type Actual = $PickUnsafe<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});