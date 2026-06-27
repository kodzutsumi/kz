import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsNullSetting, $AsOptional, $OfType } from '@kz/util/capability';

import type { NominalWrapper, TaggedSymbolType } from './mod.ts';

const IS_TRUE = true;

describe('NominalWrapper', () => {
  describe('$OfType (default implied)', () => {
    describe('$AsRequired (default implied)', () => {
      it('should wrap unknown with symbol key', () => {
        type Actual = NominalWrapper;
        type Expected = {
          readonly [K in symbol]: unknown;
        }
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      describe('with Key', () => {
        it('should wrap unknown with specified symbol key', () => {
          type Actual = NominalWrapper<$AsNullSetting, typeof TaggedSymbolType>;
          type Expected = {
            readonly [K in typeof TaggedSymbolType]: unknown;
          }
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
      
    describe('$AsOptional', () => {
      it('should wrap unknown with symbol key as optional', () => {
        type Actual = NominalWrapper<$AsOptional>;
        type Expected = {
          readonly [K in symbol]?: unknown;
        }
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      describe('with Key', () => {
        it('should wrap unknown with specified symbol key', () => {
          type Actual = NominalWrapper<$AsOptional, typeof TaggedSymbolType>;
          type Expected = {
            readonly [K in typeof TaggedSymbolType]?: unknown;
          }
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('$OfType<number>', () => {    
    describe('$AsRequired (default implied)', () => {
      it('should wrap number with symbol key', () => {
        type Actual = NominalWrapper<$OfType<number>>;
        type Expected = {
          readonly [K in symbol]: number;
        }
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      describe('with Key', () => {
        it('should wrap number with specified symbol key', () => {
          type Actual = NominalWrapper<$OfType<number>, typeof TaggedSymbolType>;
          type Expected = {
            readonly [K in typeof TaggedSymbolType]: number;
          }
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
      
    describe('$AsOptional', () => {
      it('should wrap number with symbol key as optional', () => {
        type Actual = NominalWrapper<$OfType<number> & $AsOptional>;
        type Expected = {
          readonly [K in symbol]?: number;
        }
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      describe('with Key', () => {
        it('should wrap number with specified symbol key', () => {
          type Actual = NominalWrapper<$OfType<number> & $AsOptional, typeof TaggedSymbolType>;
          type Expected = {
            readonly [K in typeof TaggedSymbolType]?: number;
          }
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });      
    });
  });
});