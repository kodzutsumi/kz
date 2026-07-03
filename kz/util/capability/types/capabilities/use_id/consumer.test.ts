import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $OfId,
  $UseId,
  $UseIdKeyString,
} from '@kz/util/capability';

declare const testSymbol: unique symbol;

const IS_TRUE = true;

describe('$UseId - consumer', () => {
  describe('$UseId', () => {
    it('should be keyed by the $UseIdKeyString', () => {
      type Expected = typeof $UseIdKeyString;
      type Actual = keyof $UseId;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an PropertyKey setting by default', () => {
      type Expected = {
        [$UseIdKeyString]: PropertyKey;
      };
      type Actual = $UseId;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should support a string constraint', () => {
      type Expected = {
        [$UseIdKeyString]: string;
      };
      type Actual = $UseId<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should support a number constraint', () => {
      type Expected = {
        [$UseIdKeyString]: number;
      };
      type Actual = $UseId<number>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should support a symbol constraint', () => {
      type Expected = {
        [$UseIdKeyString]: symbol;
      };
      type Actual = $UseId<symbol>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability open consumer', () => {
      type Expected = $OfId<'name_id'>;
      type Actual = $UseId<'name_id'>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should support string constrained settings', () => {
      type Expected = $OfId<'name_id'>;
      type Actual = $UseId<string>;
      type Result = Has<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should support number constrained settings', () => {
      type Expected = $OfId<25>;
      type Actual = $UseId<number>;
      type Result = Has<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should support symbol constrained settings', () => {
      type Expected = $OfId<typeof testSymbol>;
      type Actual = $UseId<symbol>;
      type Result = Has<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
