
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsUnsafe, $AsInverted } from '@kz/util/capability';

import type { ResolveBoolean } from './mod.ts';

const IS_TRUE = true;

describe('ResolveBoolean', () => {
  describe('$AsSafe (default/implied)', () => {
    describe('$AsInitial (default/implied)', () => {
      it('should retain true', () => {
        type Actual = ResolveBoolean<true>;
        type Expected = true;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
      
      it('should retain false', () => {
        type Actual = ResolveBoolean<false>;
        type Expected = false;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
      
      it('should retain boolean', () => {
        type Actual = ResolveBoolean<boolean>;
        type Expected = boolean;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
    
    describe('$AsInverted', () => {
      it('should invert true', () => {
        type Actual = ResolveBoolean<true, $AsInverted>;
        type Expected = false;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
      
      it('should invert false', () => {
        type Actual = ResolveBoolean<false, $AsInverted>;
        type Expected = true;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
      
      it('should retain boolean', () => {
        type Actual = ResolveBoolean<boolean, $AsInverted>;
        type Expected = boolean;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
  
  describe('$AsUnsafe', () => {
    describe('$AsInitial (default/implied)', () => {
      it('should retain true', () => {
        type Actual = ResolveBoolean<true, $AsUnsafe>;
        type Expected = true;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
      
      it('should retain false', () => {
        type Actual = ResolveBoolean<false, $AsUnsafe>;
        type Expected = false;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
      
      it('should resolve boolean to true', () => {
        type Actual = ResolveBoolean<boolean, $AsUnsafe>;
        type Expected = true;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
    
    describe('$AsInverted', () => {
      it('should invert true', () => {
        type Actual = ResolveBoolean<true, $AsUnsafe & $AsInverted>;
        type Expected = false;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
      
      it('should invert false', () => {
        type Actual = ResolveBoolean<false, $AsUnsafe & $AsInverted>;
        type Expected = true;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
      
      it('should resolve boolean to false', () => {
        type Actual = ResolveBoolean<boolean, $AsUnsafe & $AsInverted>;
        type Expected = false;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});