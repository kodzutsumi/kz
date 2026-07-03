// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { $OfType, $UseOfType } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseOfType - broker', () => {
  describe('$OfType (no $OfType)', () => {
    it('should be unknown', () => {
      type Expected = $UseOfType;
      type Actual = $OfType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseOfType', () => {
      type Expected = $UseOfType;
      type Actual = $OfType;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$OfType<string>', () => {
    it('should be string', () => {
      type Expected = $UseOfType<string>;
      type Actual = $OfType<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseOfType', () => {
      type Expected = $UseOfType;
      type Actual = $OfType<string>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$OfType<Type>', () => {
    type Type = {
      prop1: string;
      prop2: number;
      prop3: boolean;
    };
    it('should be Type', () => {
      type Expected = $UseOfType<Type>;
      type Actual = $OfType<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseOfType', () => {
      type Expected = $UseOfType;
      type Actual = $OfType<Type>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
