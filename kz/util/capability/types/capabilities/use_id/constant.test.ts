import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseIdKey, $UseIdKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseId - constants', () => {
  describe('$UseIdKeyString', () => {
    it('should be "kz.i11n:use_id"', () => {
      type Actual = typeof $UseIdKeyString;
      type Expected = 'kz.i11n:use_id';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseIdKey', () => {
    it('should be the type of $UseIdKeyString', () => {
      type Actual = $UseIdKey;
      type Expected = typeof $UseIdKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
