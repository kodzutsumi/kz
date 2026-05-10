// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { ConResult } from './mod.ts';

const IS_TRUE = true;

describe('ConResult', () => {
  describe('with true/true', () => {
    it('should return true', () => {
      type Actual = ConResult<true, true>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/false', () => {
    it('should return true', () => {
      type Actual = ConResult<true, false>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/true', () => {
    it('should return false', () => {
      type Actual = ConResult<false, true>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/false', () => {
    it('should return true', () => {
      type Actual = ConResult<false, false>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/boolean', () => {
    it('should return boolean', () => {
      type Actual = ConResult<boolean, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/true', () => {
    it('should return boolean', () => {
      type Actual = ConResult<boolean, true>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/false', () => {
    it('should return true', () => {
      type Actual = ConResult<boolean, false>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/boolean', () => {
    it('should return true', () => {
      type Actual = ConResult<true, boolean>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/boolean', () => {
    it('should return boolean', () => {
      type Actual = ConResult<false, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
