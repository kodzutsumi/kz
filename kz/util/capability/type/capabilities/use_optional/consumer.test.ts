import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsOptional,
  AsRequired,
  UseOptional,
  UseOptionalKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseOptional - consumer', () => {
  describe('UseOptional', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = UseOptional<string>;
    });

    it('should be keyed by the UseOptionalKeyString', () => {
      type Actual = keyof UseOptional;
      type Expected = typeof UseOptionalKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Actual = UseOptional;
      type Expected = {
        [UseOptionalKeyString]: boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsRequired (default implied) with the false variant', () => {
      type Actual = UseOptional<false>;
      type Expected = AsRequired;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be AsOptional with the true variant', () => {
      type Actual = UseOptional<true>;
      type Expected = AsOptional;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
