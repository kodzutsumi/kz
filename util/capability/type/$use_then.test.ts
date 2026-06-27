import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $Then,
  $PickThen,
  $UseThen,
  $UseThenKey,
  $UseThenKeyString,
  $AsUnsafe,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('Capability $UseThen', () => {
  describe('$UseThenKeyString', () => {
    it('should be "kz.i11n:use_then"', () => {
      type Expected = 'kz.i11n:use_then';
      type Actual = typeof $UseThenKeyString;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseThenKey', () => {
    it('should be "kz.i11n:use_then"', () => {
      type Expected = 'kz.i11n:use_then';
      type Actual = $UseThenKey;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$UseThen', () => {
    it('should be keyed by the $UseThenKey', () => {
      type Expected = $UseThenKey;
      type Actual = keyof $UseThen;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown value by default', () => {
      type Expected = {
        [$UseThenKeyString]: unknown;
      };
      type Actual = $UseThen;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Then', () => {
    it('should be the default (unknown) variant of $UseThen', () => {
      type Expected = $UseThen<unknown>;
      type Actual = $Then;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseThen', () => {
      type Expected = $UseThen;
      type Actual = $Then;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Then<string>', () => {
    it('should be the string variant of $UseThen', () => {
      type Expected = $UseThen<string>;
      type Actual = $Then<string>;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseThen', () => {
      type Expected = $UseThen;
      type Actual = $Then<string>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickThen', () => {
    it('should pick the $UseThen value from a settings object', () => {
      type Expected = $UseThen<string>;
      type Settings = $Then<string> & $AsUnsafe;
      type Actual = $PickThen<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Then<unknown> if the settings object does not have a $UseThen value', () => {
      type Expected = $Then;
      type Settings = $AsUnsafe;    
      type Actual = $PickThen<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});