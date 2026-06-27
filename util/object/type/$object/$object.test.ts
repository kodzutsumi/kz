import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $OfKeys } from '@kz/util/capability';

import type * as $Object from './$object.ts';

const IS_TRUE = true;

describe('$Object', () => {
  describe('$UseOfType & $UseOfKeys', () => {
    it('has been tested in $Object', () => {
      assertType<true>(IS_TRUE);
    });
  });

  describe('$', () => {
    describe('$OfKeys (default)', () => {
      it('should be a record of property keys to unknown values', () => {
        type Actual = $Object.$;
        type Expected = Record<PropertyKey, unknown>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$OfKeys (`string`)', () => {
      it('should be a record of property keys to unknown values', () => {
        type Actual = $Object.$<$OfKeys<string>>;
        type Expected = Record<string, unknown>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$OfKeys (`name` | `title`)', () => {
      it('should be a record of property keys to unknown values', () => {
        type Actual = $Object.$<$OfKeys<'name' | 'title'>>;
        type Expected = Record<'name' | 'title', unknown>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
  
  describe('Of', () => {
    describe('default', () => {
      it('should be a record of property keys to unknown values', () => {
        type Actual = $Object.Of;
        type Expected = Record<PropertyKey, unknown>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('<Type>', () => {
      it('should be a record of keys to string values', () => {
        type Actual = $Object.Of<string>;
        type Expected = Record<PropertyKey, string>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('<Type, Keys>', () => {
      it('should be a record of specific keys to string values', () => {
        type Actual = $Object.Of<string, 'name' | 'title'>;
        type Expected = Record<'name' | 'title', string>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('OfType', () => {
    it('should be a record of keys to unknown values', () => {
      type Actual = $Object.OfType;
      type Expected = Record<PropertyKey, unknown>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should be a record of keys to string values', () => {
      type Actual = $Object.OfType<string>;
      type Expected = Record<PropertyKey, string>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('OfKeys', () => {
    it('should be a record of keys to unknown values', () => {
      type Actual = $Object.OfKeys;
      type Expected = Record<PropertyKey, unknown>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a record of specific keys to unknown values', () => {
      type Actual = $Object.OfKeys<'name' | 'title'>;
      type Expected = Record<'name' | 'title', unknown>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('Empty', () => {
    it('should be a record of never keys to never values', () => {
      type Actual = $Object.Empty;
      type Expected = Record<never, never>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
