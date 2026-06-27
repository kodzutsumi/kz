import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsInverted } from '@kz/util/capability';

import type { _HandleInverted } from './_handle_inverted.ts';

const IS_TRUE = true;

describe('_HandleInverted', () => {
  describe('$AsInitial (default/implied)', () => {
    it('should not invert true', () => {
      type Actual = _HandleInverted<true>;
      type Expected = true;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should not invert false', () => {
      type Actual = _HandleInverted<false>;
      type Expected = false;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should not invert boolean', () => {
      type Actual = _HandleInverted<boolean>;
      type Expected = boolean;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
  
  describe('$AsInverted', () => {
    it('should invert true', () => {
      type Actual = _HandleInverted<true, $AsInverted>;
      type Expected = false;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should invert false', () => {
      type Actual = _HandleInverted<false, $AsInverted>;
      type Expected = true;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should not invert boolean', () => {
      type Actual = _HandleInverted<boolean, $AsInverted>;
      type Expected = boolean;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});