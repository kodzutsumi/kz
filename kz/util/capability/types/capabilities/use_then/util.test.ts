import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { $AsSync, $Then, $PickThen, $UseThen } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseThen - util', () => {
  describe('$PickThen', () => {
    it('should pick the $UseThen value from a settings object', () => {
      type Expected = $UseThen<string>;
      type Settings = $Then<string> & $AsSync;
      type Actual = $PickThen<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Then<unknown> if the settings object does not have a $UseThen value', () => {
      type Expected = $Then;
      type Settings = $AsSync;
      type Actual = $PickThen<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
