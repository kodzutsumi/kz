import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';
import type { $AsFalseFinal } from '@kz/types/capabilities';

import type { AndResult } from './mod.ts';

const IS_TRUE = true;

@TestFixture('AndResult')
class _ {
  @ShouldBe('true')
  t0(): void {
    type Expected = true;
    type Actual = AndResult<true, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('false')
  t1(): void {
    type Expected = false;
    type Actual = AndResult<true, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t2(): void {
    type Expected = false;
    type Actual = AndResult<false, true>;
    type Result = IsExact<Expected, Actual>;  

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t3(): void {
    type Expected = false;
    type Actual = AndResult<false, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('$AsFalseFinal')
  t4(): void {
    type Expected = $AsFalseFinal;
    type Actual = AndResult<boolean, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t5(): void {
    type Expected = boolean;
    type Actual = AndResult<boolean, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('$AsFalseFinal')
  t6(): void {
    type Expected = $AsFalseFinal;
    type Actual = AndResult<boolean, false>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t7(): void {
    type Expected = boolean;
    type Actual = AndResult<true, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('false')
  t8(): void {
    type Expected = false;
    type Actual = AndResult<false, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }
}