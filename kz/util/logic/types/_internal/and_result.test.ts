// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { AndResult } from './mod.ts';

const IS_TRUE = true;

describe('AndResult', () => {
  describe('with true/true', () => {
    it('should return true', () => {
      type Actual = AndResult<true, true>;
      type Expected = true;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/false', () => {
    it('should return false', () => {
      type Actual = AndResult<true, false>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/true', () => {
    it('should return false', () => {
      type Actual = AndResult<false, true>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/false', () => {
    it('should return false', () => {
      type Actual = AndResult<false, false>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/boolean', () => {
    it('should return boolean', () => {
      type Actual = AndResult<boolean, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/true', () => {
    it('should return boolean', () => {
      type Actual = AndResult<boolean, true>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/false', () => {
    it('should return false', () => {
      type Actual = AndResult<boolean, false>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/boolean', () => {
    it('should return boolean', () => {
      type Actual = AndResult<true, boolean>;
      type Expected = boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/boolean', () => {
    it('should return false', () => {
      type Actual = AndResult<false, boolean>;
      type Expected = false;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
