import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $OfKeys } from '@kz/util/capability';

import type * as $SafeObject from './mod.ts';

const IS_TRUE = true;

describe('$SafeObject', () => {
  describe('$UseOfType & $UseOfKeys', () => {
    it('has been tested in Dictionary', () => {
      assertType<true>(IS_TRUE);
    });
  });

  describe('$', () => {
    describe('$OfKeys (default)', () => {
      it('should be a record of property keys to unknown values', () => {
        type Actual = $SafeObject.$;
        type Expected = Partial<Record<PropertyKey, unknown>>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$OfKeys (`string`)', () => {
      it('should be a record of property keys to unknown values', () => {
        type Actual = $SafeObject.$<$OfKeys<string>>;
        type Expected = Partial<Record<string, unknown>>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$OfKeys (`name` | `title`)', () => {
      it('should be a record of property keys to unknown values', () => {
        type Actual = $SafeObject.$<$OfKeys<'name' | 'title'>>;
        type Expected = Partial<Record<'name' | 'title', unknown>>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
  
  describe('Of', () => {
    describe('default', () => {
      it('should be a record of property keys to unknown values', () => {
        type Actual = $SafeObject.Of;
        type Expected = Partial<Record<PropertyKey, unknown>>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('<Type>', () => {
      it('should be a record of keys to string values', () => {
        type Actual = $SafeObject.Of<string>;
        type Expected = Partial<Record<PropertyKey, string>>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('<Type, Keys>', () => {
      it('should be a record of specific keys to string values', () => {
        type Actual = $SafeObject.Of<string, 'name' | 'title'>;
        type Expected = Partial<Record<'name' | 'title', string>>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('OfType', () => {
    it('should be a record of keys to unknown values', () => {
      type Actual = $SafeObject.OfType;
      type Expected = Partial<Record<PropertyKey, unknown>>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should be a record of keys to string values', () => {
      type Actual = $SafeObject.OfType<string>;
      type Expected = Partial<Record<PropertyKey, string>>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('OfKeys', () => {
    it('should be a record of keys to unknown values', () => {
      type Actual = $SafeObject.OfKeys;
      type Expected = Partial<Record<PropertyKey, unknown>>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a record of specific keys to unknown values', () => {
      type Actual = $SafeObject.OfKeys<'name' | 'title'>;
      type Expected = Partial<Record<'name' | 'title', unknown>>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
