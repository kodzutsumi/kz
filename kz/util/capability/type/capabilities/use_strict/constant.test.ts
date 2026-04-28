import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseStrictKey, UseStrictKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseStrict - constants', () => {
  describe('UseStrictKeyString', () => {
    it('should be "kz.i11n:use_strict"', () => {
      type Actual = typeof UseStrictKeyString;
      type Expected = 'kz.i11n:use_strict';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseStrictKey', () => {
    it('should be the type of UseStrictKeyString', () => {
      type Actual = UseStrictKey;
      type Expected = typeof UseStrictKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
