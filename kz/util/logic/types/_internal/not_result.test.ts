// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { NotResult } from './mod.ts';

const IS_TRUE = true;

describe('NotResult', () => {
  describe('with true', () => {
    it('should return false', () => {
      type Actual = NotResult<true>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false', () => {
    it('should return true', () => {
      type Actual = NotResult<false>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean', () => {
    it('should return boolean', () => {
      type Actual = NotResult<boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
