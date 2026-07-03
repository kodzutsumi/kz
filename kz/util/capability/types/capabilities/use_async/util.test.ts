import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsSync,
  $PickAsync,
  $UseAsync,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseAsync - util', () => {
  describe('$PickAsync', () => {
    it('should pick the $UseAsync value from a settings object', () => {
      type Expected = $UseAsync<false>;
      type Settings = $AsSync & $AsCondition;
      type Actual = $PickAsync<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsSync if the settings object does not have a $UseAsync value', () => {
      type Expected = $AsSync;
      type Settings = $AsCondition;
      type Actual = $PickAsync<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
