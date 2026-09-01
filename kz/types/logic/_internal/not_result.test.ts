import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';

import type { NotResult } from './mod.ts';

const IS_TRUE = true;

@TestFixture('NotResult')
class _ {
  @ShouldBe('false')
  t0(): void {
    type Expected = false;
    type Actual = NotResult<true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t1(): void {
    type Expected = boolean;
    type Actual = NotResult<boolean>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}