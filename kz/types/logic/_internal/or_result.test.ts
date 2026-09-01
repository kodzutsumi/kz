import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';
import type { $AsTrueFinal } from '@kz/types/capabilities';

import type { OrResult } from './mod.ts';

const IS_TRUE = true;

@TestFixture('OrResult')
class _ {
  @ShouldBe('true')
  t0(): void {
    type Expected = true;
    type Actual = OrResult<true, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t1(): void {
    type Expected = true;
    type Actual = OrResult<true, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('true')
  t2(): void {
    type Expected = true;
    type Actual = OrResult<false, true>;
    type Result = IsExact<Expected, Actual>;  

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t3(): void {
    type Expected = false;
    type Actual = OrResult<false, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('$AsTrueFinal')
  t4(): void {
    type Expected = $AsTrueFinal;
    type Actual = OrResult<boolean, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t5(): void {
    type Expected = true;
    type Actual = OrResult<boolean, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t6(): void {
    type Expected = boolean;
    type Actual = OrResult<boolean, false>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t7(): void {
    type Expected = true;
    type Actual = OrResult<true, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t8(): void {
    type Expected = boolean;
    type Actual = OrResult<false, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }
}