// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { ForType, UseForType } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseForType - broker', () => {
  describe('ForType (no ForType)', () => {
    it('should be unknown', () => {
      type Actual = ForType;
      type Expected = UseForType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseForType', () => {
      type Actual = ForType;
      type Expected = UseForType;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('ForType<string>', () => {
    it('should be string', () => {
      type Actual = ForType<string>;
      type Expected = UseForType<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseForType', () => {
      type Actual = ForType<string>;
      type Expected = UseForType;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('ForType<Type>', () => {
    type Type = {
      prop1: string;
      prop2: number;
      prop3: boolean;
    };
    it('should be Type', () => {
      type Actual = ForType<Type>;
      type Expected = UseForType<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseForType', () => {
      type Actual = ForType<Type>;
      type Expected = UseForType;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
