// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { OrResult } from './mod.ts';

const IS_TRUE = true;

describe('OrResult', () => {
  describe('with true/true', () => {
    it('should return true', () => {
      type Actual = OrResult<true, true>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/false', () => {
    it('should return true', () => {
      type Actual = OrResult<true, false>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/true', () => {
    it('should return true', () => {
      type Actual = OrResult<false, true>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/false', () => {
    it('should return false', () => {
      type Actual = OrResult<false, false>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/boolean', () => {
    it('should return boolean', () => {
      type Actual = OrResult<boolean, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/true', () => {
    it('should return true', () => {
      type Actual = OrResult<boolean, true>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/false', () => {
    it('should return boolean', () => {
      type Actual = OrResult<boolean, false>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/boolean', () => {
    it('should return true', () => {
      type Actual = OrResult<true, boolean>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/boolean', () => {
    it('should return boolean', () => {
      type Actual = OrResult<false, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
