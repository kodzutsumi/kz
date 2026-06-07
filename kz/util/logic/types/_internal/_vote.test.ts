// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsInverted, AsMajority } from '@kz/util/capability';

import type { _Majority } from './_majority.ts';
import type { _Vote } from './_vote.ts';

const IS_TRUE = true;

describe('_Vote', () => {
  type ThenType = string;
  type ElseType = number;

  describe('AsRunoff (default/implied)', () => {
    describe('with true', () => {
      it('should return true', () => {
        type Actual = _Vote<true>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false', () => {
      it('should return false', () => {
        type Actual = _Vote<false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with boolean', () => {
      it('should return boolean', () => {
        type Actual = _Vote<boolean>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
    
    describe('with true majority', () => {
      it('should return boolean', () => {
        type Actual = _Vote<_Majority<true>>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false majority', () => {
      it('should return boolean', () => {
        type Actual = _Vote<_Majority<false>>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('AsMajority', () => {
    describe('with true', () => {
      it('should return true', () => {
        type Actual = _Vote<true, AsMajority>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false', () => {
      it('should return false', () => {
        type Actual = _Vote<false, AsMajority>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with boolean', () => {
      it('should return boolean', () => {
        type Actual = _Vote<boolean, AsMajority>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
    
    describe('with true majority', () => {
      it('should return true', () => {
        type Actual = _Vote<_Majority<true>, AsMajority>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false majority', () => {
      it('should return boolean', () => {
        type Actual = _Vote<_Majority<false>, AsMajority>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
