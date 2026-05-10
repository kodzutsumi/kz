// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { ImpResult } from './mod.ts';

const IS_TRUE = true;

describe('ImpResult', () => {
  describe('with true/true', () => {
    it('should return true', () => {
      type Actual = ImpResult<true, true>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/false', () => {
    it('should return false', () => {
      type Actual = ImpResult<true, false>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/true', () => {
    it('should return true', () => {
      type Actual = ImpResult<false, true>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/false', () => {
    it('should return true', () => {
      type Actual = ImpResult<false, false>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/boolean', () => {
    it('should return boolean', () => {
      type Actual = ImpResult<boolean, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/true', () => {
    it('should return true', () => {
      type Actual = ImpResult<boolean, true>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/false', () => {
    it('should return boolean', () => {
      type Actual = ImpResult<boolean, false>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/boolean', () => {
    it('should return boolean', () => {
      type Actual = ImpResult<true, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/boolean', () => {
    it('should return true', () => {
      type Actual = ImpResult<false, boolean>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
