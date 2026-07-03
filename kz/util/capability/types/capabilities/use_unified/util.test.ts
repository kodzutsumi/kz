
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsDistributed,
  $PickUnified,
  $UseUnified,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseUnified - util', () => {
describe('$PickUnified', () => {
    it('should pick the $UseUnified value from a settings object', () => {
      type Expected = $UseUnified<false>;
      type Settings = $AsDistributed & $AsCondition;
      type Actual = $PickUnified<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsDistributed if the settings object does not have a $UseUnified value', () => {
      type Expected = $AsDistributed;
      type Settings = $AsCondition;
      type Actual = $PickUnified<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});