// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { Then, UseThen } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseThen - broker', () => {
  describe('Then (no ThenType)', () => {
    it('should be unknown', () => {
      type Actual = Then;
      type Expected = UseThen;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseThen', () => {
      type Actual = Then;
      type Expected = UseThen;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('Then<string>', () => {
    it('should be string', () => {
      type Actual = Then<string>;
      type Expected = UseThen<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseThen', () => {
      type Actual = Then<string>;
      type Expected = UseThen;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('Then<ThenType>', () => {
    type Type = {
      prop1: string;
      prop2: number;
      prop3: boolean;
    };
    it('should be Type', () => {
      type Actual = Then<Type>;
      type Expected = UseThen<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseThen', () => {
      type Actual = Then<Type>;
      type Expected = UseThen;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
