import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { AsAsync, AsSync, UseAsync } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseAsync - broker', () => {
  describe('AsSync (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Actual = AsSync;
      type Expected = UseAsync<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseAsync', () => {
      type Actual = AsSync;
      type Expected = UseAsync;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsAsync', () => {
    it('should be the true variant', () => {
      type Actual = AsAsync;
      type Expected = UseAsync<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseAsync', () => {
      type Actual = AsAsync;
      type Expected = UseAsync;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
