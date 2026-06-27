import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Flavored, FlavorSymbolType } from './mod.ts';

const IS_TRUE = true;

describe('Flavored', () => {
  it('should have the correct structure', () => {
    type Actual = Flavored<number>;
    type Expected = {
      readonly [FlavorSymbolType]?: number;
    };
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });
});