// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { XorResult } from './mod.ts';

const IS_TRUE = true;

describe('XorResult', () => {
  describe('with true/true', () => {
    it('should return false', () => {
      type Actual = XorResult<true, true>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/false', () => {
    it('should return true', () => {
      type Actual = XorResult<true, false>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/true', () => {
    it('should return true', () => {
      type Actual = XorResult<false, true>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/false', () => {
    it('should return false', () => {
      type Actual = XorResult<false, false>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/boolean', () => {
    it('should return boolean', () => {
      type Actual = XorResult<boolean, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/true', () => {
    it('should return boolean', () => {
      type Actual = XorResult<boolean, true>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/false', () => {
    it('should return boolean', () => {
      type Actual = XorResult<boolean, false>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/boolean', () => {
    it('should return boolean', () => {
      type Actual = XorResult<true, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/boolean', () => {
    it('should return boolean', () => {
      type Actual = XorResult<false, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
