import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseOptionalKey, UseOptionalKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseOptional - constants', () => {
  describe('UseOptionalKeyString', () => {
    it('should be "kz.i11n:use_optional"', () => {
      type Actual = typeof UseOptionalKeyString;
      type Expected = 'kz.i11n:use_optional';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseOptionalKey', () => {
    it('should be the type of UseOptionalKeyString', () => {
      type Actual = UseOptionalKey;
      type Expected = typeof UseOptionalKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
