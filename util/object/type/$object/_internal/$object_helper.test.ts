import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsOptional, $AsRequired, $OfKeys, $OfType, $UseOfKeys, $UseOfType, $UseOptional } from '@kz/util/capability';

import type { $ObjectHelper } from './mod.ts';

const IS_TRUE = true;

describe('$ObjectHelper', () => {
  describe('$ObjectHelper.Capabilities', () => {
    it('should be a union of capabilities', () => {
      type Actual = $ObjectHelper.Capabilities;
      type Expected = $UseOfType | $UseOfKeys | $UseOptional;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$ObjectHelper.Defaults', () => {
    it('should be a combination of capabilities', () => {
      type Actual = $ObjectHelper.Defaults;
      type Expected = $OfType & $OfKeys & $AsRequired;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
  describe('$AsRequired (default)', () => {
    describe('$OfType (default)', () => {
      describe('$OfKeys (default)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper;
          type Expected = Record<PropertyKey, unknown>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$OfKeys (`string`)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$OfKeys<string>>;
          type Expected = Record<string, unknown>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$OfKeys (`name` | `title`)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$OfKeys<'name' | 'title'>>;
          type Expected = Record<'name' | 'title', unknown>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('$OfType (`number`)', () => {
      describe('$OfKeys (default)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$OfType<number>>;
          type Expected = Record<PropertyKey, number>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$OfKeys (`string`)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$OfType<number> & $OfKeys<string>>;
          type Expected = Record<string, number>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$OfKeys (`name` | `title`)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$OfType<number> & $OfKeys<'name' | 'title'>>;
          type Expected = Record<'name' | 'title', number>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('$AsOptional', () => {
    describe('$OfType (default)', () => {
      describe('$OfKeys (default)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$AsOptional>;
          type Expected = Partial<Record<PropertyKey, unknown>>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$OfKeys (`string`)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$AsOptional & $OfKeys<string>>;
          type Expected = Partial<Record<string, unknown>>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$OfKeys (`name` | `title`)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$AsOptional & $OfKeys<'name' | 'title'>>;
          type Expected = Partial<Record<'name' | 'title', unknown>>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('$OfType (`number`)', () => {
      describe('$OfKeys (default)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$AsOptional & $OfType<number>>;
          type Expected = Partial<Record<PropertyKey, number>>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$OfKeys (`string`)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$AsOptional & $OfType<number> & $OfKeys<string>>;
          type Expected = Partial<Record<string, number>>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
 
      describe('$OfKeys (`name` | `title`)', () => {
        it('should be a record of property keys to unknown values', () => {
          type Actual = $ObjectHelper<$AsOptional & $OfType<number> & $OfKeys<'name' | 'title'>>;
          type Expected = Partial<Record<'name' | 'title', number>>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });
});
