import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $AsCondition,
  $AsSafe,
  $AsUnsafe,
  $PickUnsafe,
  $UseUnsafe,
  $UseUnsafeKey,
  $UseUnsafeKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('Capability $UseUnsafe', () => {
  describe('$UseUnsafeKeyString', () => {
    it('should be "kz.i11n:use_unsafe"', () => {
      type Expected = 'kz.i11n:use_unsafe';
      type Actual = typeof $UseUnsafeKeyString;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseUnsafeKey', () => {
    it('should be "kz.i11n:use_unsafe"', () => {
      type Expected = 'kz.i11n:use_unsafe';
      type Actual = $UseUnsafeKey;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseUnsafe', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseUnsafe<string>;
    });

    it('should be keyed by the $UseUnsafeKey', () => {
      type Expected = $UseUnsafeKey;
      type Actual = keyof $UseUnsafe;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should have a boolean value by default', () => {
      type Expected = {
        [$UseUnsafeKeyString]: boolean;
      };
      type Actual = $UseUnsafe;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsSafe (default/implied)', () => {
    it('should be the false variant of $UseUnsafe', () => {
      type Expected = $UseUnsafe<false>;
      type Actual = $AsSafe;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseUnsafe', () => {
      type Expected = $UseUnsafe;
      type Actual = $AsSafe;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsUnsafe', () => {
    it('should be the true variant of $UseUnsafe', () => {
      type Expected = $UseUnsafe<true>;
      type Actual = $AsUnsafe;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseUnsafe', () => {
      type Expected = $UseUnsafe;
      type Actual = $AsSafe;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickUnsafe', () => {
    it('should pick the $UseUnsafe value from a settings object', () => {
      type Expected = $UseUnsafe<false>;
      type Settings = $AsSafe & $AsCondition;
      type Actual = $PickUnsafe<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsSafe if the settings object does not have a $UseUnsafe value', () => {
      type Expected = $AsSafe;
      type Settings = $AsCondition;
      type Actual = $PickUnsafe<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});