import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { _Result } from './_result.ts';

const IS_TRUE = true;

describe('_Result', () => {
  type ThenType = string;
  type ElseType = number;

  describe('with true', () => {
    it('should return the ThenType', () => {
      type Expected = ThenType;
      type Actual = _Result<true, ThenType, ElseType>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false', () => {
    it('should return the ElseType', () => {
      type Expected = ElseType;
      type Actual = _Result<false, ThenType, ElseType>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean', () => {
    it('should return the ThenType', () => {
      type Expected = ThenType | ElseType;
      type Actual = _Result<boolean, ThenType, ElseType>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});