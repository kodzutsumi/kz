// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsInverted } from '@kz/util/capability';

import type { _Result } from './_result.ts';

const IS_TRUE = true;

describe('_Result', () => {
  type ThenType = string;
  type ElseType = number;

  describe('AsInitial (default/implied)', () => {
    describe('with true', () => {
      it('should return the ThenType', () => {
        type Actual = _Result<true, ThenType, ElseType>;
        type Expected = ThenType;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false', () => {
      it('should return the ElseType', () => {
        type Actual = _Result<false, ThenType, ElseType>;
        type Expected = ElseType;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with boolean', () => {
      it('should return the ThenType', () => {
        type Actual = _Result<boolean, ThenType, ElseType>;
        type Expected = ThenType | ElseType;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('AsInverted', () => {
    describe('with true', () => {
      it('should return the ElseType', () => {
        type Actual = _Result<true, ThenType, ElseType, AsInverted>;
        type Expected = ElseType;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false', () => {
      it('should return the ThenType', () => {
        type Actual = _Result<false, ThenType, ElseType, AsInverted>;
        type Expected = ThenType;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with boolean', () => {
      it('should return the ThenType', () => {
        type Actual = _Result<boolean, ThenType, ElseType, AsInverted>;
        type Expected = ElseType | ThenType;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
