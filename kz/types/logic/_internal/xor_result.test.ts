import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';

import type { XorResult } from './mod.ts';

const IS_TRUE = true;

@TestFixture('XorResult')
class _ {
  @ShouldBe('false')
  t0(): void {
    type Expected = false;
    type Actual = XorResult<true, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t1(): void {
    type Expected = true;
    type Actual = XorResult<true, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('true')
  t2(): void {
    type Expected = true;
    type Actual = XorResult<false, true>;
    type Result = IsExact<Expected, Actual>;  

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t3(): void {
    type Expected = false;
    type Actual = XorResult<false, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('boolean')
  t4(): void {
    type Expected = boolean;
    type Actual = XorResult<boolean, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t5(): void {
    type Expected = true;
    type Actual = XorResult<boolean, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t6(): void {
    type Expected = boolean;
    type Actual = XorResult<boolean, false>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t7(): void {
    type Expected = boolean;
    type Actual = XorResult<true, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t8(): void {
    type Expected = boolean;
    type Actual = XorResult<false, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }
}