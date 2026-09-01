import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';
import type { $ConditionOf, $Else, $Then } from '@kz/types/capabilities';

import type { _ResolveCondition } from './_resolve_condition.ts';

const IS_TRUE = true;

@TestFixture('_ResolveCondition')
class _ {
  @ShouldBe('string')
  t0(): void {
    type Expected = string;
    type Actual = _ResolveCondition<true, $ConditionOf<string, number>>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('number')
  t1(): void {
    type Expected = number;
    type Actual = _ResolveCondition<false, $ConditionOf<string, number>>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('string | number')
  t2(): void {
    type Expected = string | number;
    type Actual = _ResolveCondition<boolean, $ConditionOf<string, number>>;
    type Result = IsExact<Expected, Actual>;  

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('true')
  t3(): void {
    type Expected = true;
    type Actual = _ResolveCondition<true, $Else<number>>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t4(): void {
    type Expected = false;
    type Actual = _ResolveCondition<false, $Then<string>>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t5(): void {
    type Expected = true;
    type Actual = _ResolveCondition<true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('false')
  t6(): void {
    type Expected = false;
    type Actual = _ResolveCondition<false>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t7(): void {
    type Expected = boolean;
    type Actual = _ResolveCondition<boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }
}