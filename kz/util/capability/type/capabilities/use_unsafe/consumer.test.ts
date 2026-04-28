import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsSafe,
  AsUnsafe,
  UseUnsafe,
  UseUnsafeKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseUnsafe - consumer', () => {
  describe('UseUnsafe', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseUnsafe<string>;
    });

    it('should be keyed by the UseUnsafeKeyString', () => {
      type Actual = keyof UseUnsafe;
      type Expected = typeof UseUnsafeKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseUnsafe;
      type Expected = {
        [UseUnsafeKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsSafe (default implied) with the false variant', () => {
      type Actual = UseUnsafe<false>;
      type Expected = AsSafe;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsUnsafe with the true variant', () => {
      type Actual = UseUnsafe<true>;
      type Expected = AsUnsafe;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
