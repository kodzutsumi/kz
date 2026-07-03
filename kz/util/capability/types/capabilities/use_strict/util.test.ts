import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsLoose,
  $PickStrict,
  $UseStrict,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseStrict - util', () => {
  describe('$PickStrict', () => {
    it('should pick the $UseStrict value from a settings object', () => {
      type Expected = $UseStrict<false>;
      type Settings = $AsLoose & $AsCondition;
      type Actual = $PickStrict<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsLoose if the settings object does not have a $UseStrict value', () => {
      type Expected = $AsLoose;
      type Settings = $AsCondition;
      type Actual = $PickStrict<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
