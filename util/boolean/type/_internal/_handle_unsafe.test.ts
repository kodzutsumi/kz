import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsUnsafe } from '@kz/util/capability';

import type { _HandleUnsafe } from './_handle_unsafe.ts';

const IS_TRUE = true;

describe('_HandleUnsafe', () => {
  describe('$AsSafe (default/implied)', () => {
    it('should retain true', () => {
      type Actual = _HandleUnsafe<true>;
      type Expected = true;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should retain false', () => {
      type Actual = _HandleUnsafe<false>;
      type Expected = false;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should retain boolean', () => {
      type Actual = _HandleUnsafe<boolean>;
      type Expected = boolean;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
  
  describe('$AsUnsafe', () => {
    it('should retain true', () => {
      type Actual = _HandleUnsafe<true, $AsUnsafe>;
      type Expected = true;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should retain false', () => {
      type Actual = _HandleUnsafe<false, $AsUnsafe>;
      type Expected = false;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should mark boolean as true', () => {
      type Actual = _HandleUnsafe<boolean, $AsUnsafe>;
      type Expected = true;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});