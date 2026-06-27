// deno-lint-ignore-file ban-types
import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $AsNullSetting,
  $UseNullSetting,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('Capability $UseNullSetting', () => {
  describe('$UseNullSetting', () => {
    it('should be an empty interface', () => {
      type Expected = {};
      type Actual = $UseNullSetting;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsNullSetting', () => {
    it('should be an empty interface', () => {
      type Expected = {};
      type Actual = $AsNullSetting;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseNullSetting', () => {
      type Expected = $UseNullSetting;
      type Actual = $AsNullSetting;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});