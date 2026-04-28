import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsGetter,
  AsSetter,
  UseSetter,
  UseSetterKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseSetter - consumer', () => {
  describe('UseSetter', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseSetter<string>;
    });

    it('should be keyed by the UseSetterKeyString', () => {
      type Actual = keyof UseSetter;
      type Expected = typeof UseSetterKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseSetter;
      type Expected = {
        [UseSetterKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsGetter (default implied) with the false variant', () => {
      type Actual = UseSetter<false>;
      type Expected = AsGetter;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsSetter with the true variant', () => {
      type Actual = UseSetter<true>;
      type Expected = AsSetter;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
