import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { $AsSync, $Else, $PickElse, $UseElse } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseElse - util', () => {
  describe('$PickElse', () => {
    it('should pick the $UseElse value from a settings object', () => {
      type Expected = $UseElse<number>;
      type Settings = $Else<number> & $AsSync;
      type Actual = $PickElse<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Else<unknown> if the settings object does not have a $UseElse value', () => {
      type Expected = $Else;
      type Settings = $AsSync;
      type Actual = $PickElse<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
