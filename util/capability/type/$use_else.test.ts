import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $Else,
  $PickElse,
  $UseElse,
  $UseElseKey,
  $UseElseKeyString,
  $AsUnsafe,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('Capability $UseElse', () => {
  describe('$UseElseKeyString', () => {
    it('should be "kz.i11n:use_else"', () => {
      type Expected = 'kz.i11n:use_else';
      type Actual = typeof $UseElseKeyString;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseElseKey', () => {
    it('should be "kz.i11n:use_else"', () => {
      type Expected = 'kz.i11n:use_else';
      type Actual = $UseElseKey;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseElse', () => {
    it('should be keyed by the $UseElseKey', () => {
      type Expected = $UseElseKey;
      type Actual = keyof $UseElse;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown value by default', () => {
      type Expected = {
        [$UseElseKeyString]: unknown;
      };
      type Actual = $UseElse;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Else', () => {
    it('should be the default (unknown) variant of $UseElse', () => {
      type Expected = $UseElse<unknown>;
      type Actual = $Else;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseElse', () => {
      type Expected = $UseElse;
      type Actual = $Else;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Else<number>', () => {
    it('should be the number variant of $UseElse', () => {
      type Expected = $UseElse<number>;
      type Actual = $Else<number>;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseElse', () => {
      type Expected = $UseElse;
      type Actual = $Else<number>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickElse', () => {
    it('should pick the $UseElse value from a settings object', () => {
      type Expected = $UseElse<number>;
      type Settings = $Else<number> & $AsUnsafe;
      type Actual = $PickElse<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Else<unknown> if the settings object does not have a $UseElse value', () => {
      type Expected = $Else;
      type Settings = $AsUnsafe;
      type Actual = $PickElse<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});