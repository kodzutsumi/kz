import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Branded, BrandSymbolType } from './mod.ts';

const IS_TRUE = true;

describe('Branded', () => {
  it('should have the correct structure', () => {
    type Actual = Branded<number>;
    type Expected = {
      readonly [BrandSymbolType]: number;
    };
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });
});