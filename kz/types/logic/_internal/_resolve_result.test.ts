import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';

import type { _ResolveResult } from './_resolve_result.ts';

const IS_TRUE = true;

@TestFixture('_ResolveResult')
class _ {
  @ShouldBe('string')
  t0(): void {
    type Expected = string;
    type Actual = _ResolveResult<true, string, number>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('number')
  t1(): void {
    type Expected = number;
    type Actual = _ResolveResult<false, string, number>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('string | number')
  t2(): void {
    type Expected = string | number;
    type Actual = _ResolveResult<boolean, string, number>;
    type Result = IsExact<Expected, Actual>;  

    assertType<Result>(IS_TRUE);
  }
}