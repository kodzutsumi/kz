import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { UseAsyncKey, UseAsyncKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseAsync - constants', () => {
  describe('UseAsyncKeyString', () => {
    it('should be "kz.i11n:use_async"', () => {
      type Actual = typeof UseAsyncKeyString;
      type Expected = 'kz.i11n:use_async';
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('UseAsyncKey', () => {
    it('should be the type of UseAsyncKeyString', () => {
      type Actual = UseAsyncKey;
      type Expected = typeof UseAsyncKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
