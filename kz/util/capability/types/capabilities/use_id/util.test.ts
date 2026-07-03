import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsInitial,
  $PickInverted,
  $UseInverted,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseInverted - util', () => {
  describe('$PickInverted', () => {
    it('should pick the $UseInverted value from a settings object', () => {
      type Expected = $UseInverted<false>;
      type Settings = $AsInitial & $AsCondition;
      type Actual = $PickInverted<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsInitial if the settings object does not have a $UseInverted value', () => {
      type Expected = $AsInitial;
      type Settings = $AsCondition;
      type Actual = $PickInverted<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
