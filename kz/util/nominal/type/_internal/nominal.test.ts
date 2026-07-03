import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Nominal, TaggedSymbolType } from './mod.ts';

const IS_TRUE = true;

describe('Nominal', () => {
  it('should wrap unknown with PropertyKey key', () => {
    type Expected = {
      readonly [K in PropertyKey]: unknown;
    };
    type Actual = Nominal;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should wrap string with PropertyKey key', () => {
    type Expected = {
      readonly [K in PropertyKey]: string;
    };
    type Actual = Nominal<string>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should wrap string with TaggedSymbolType key', () => {
    type Expected = {
      readonly [K in typeof TaggedSymbolType]: string;
    };
    type Actual = Nominal<string, typeof TaggedSymbolType>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should wrap string with symbol key as optional', () => {
    type Expected = {
      readonly [K in typeof TaggedSymbolType]?: string;
    };
    type Actual = Nominal<string, typeof TaggedSymbolType, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });
});