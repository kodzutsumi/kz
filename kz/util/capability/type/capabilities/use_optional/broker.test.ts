import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { AsOptional, AsRequired, UseOptional } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseOptional - broker', () => {
  describe('AsRequired (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Actual = AsRequired;
      type Expected = UseOptional<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseOptional', () => {
      type Actual = AsRequired;
      type Expected = UseOptional;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsOptional', () => {
    it('should be the true variant', () => {
      type Actual = AsOptional;
      type Expected = UseOptional<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseOptional', () => {
      type Actual = AsOptional;
      type Expected = UseOptional;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
