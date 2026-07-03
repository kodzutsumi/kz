import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { $AsSync, $OfType, $PickOfType, $UseOfType } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseOfType - util', () => {
  describe('$PickOfType', () => {
    it('should pick the $UseOfType value from a settings object', () => {
      type Expected = $UseOfType<number>;
      type Settings = $OfType<number> & $AsSync;
      type Actual = $PickOfType<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $OfType<unknown> if the settings object does not have a $UseOfType value', () => {
      type Expected = $OfType;
      type Settings = $AsSync;
      type Actual = $PickOfType<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
