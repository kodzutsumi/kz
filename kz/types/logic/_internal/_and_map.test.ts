import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';
import type { $AsFalseFinal } from '@kz/types/capabilities';

import type { _AndMap } from './_and_map.ts';

const IS_TRUE = true;

@TestFixture('_AndMap')
class _ {
  @ShouldBe('true')
  t0(): void {
    type Expected = true;
    type Actual = _AndMap['true-true'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('false')
  t1(): void {
    type Expected = false;
    type Actual = _AndMap['true-false'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t2(): void {
    type Expected = false;
    type Actual = _AndMap['false-true'];
    type Result = IsExact<Expected, Actual>;  

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t3(): void {
    type Expected = false;
    type Actual = _AndMap['false-false'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('$AsFalseFinal')
  t4(): void {
    type Expected = $AsFalseFinal;
    type Actual = _AndMap['boolean-boolean'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t5(): void {
    type Expected = boolean;
    type Actual = _AndMap['boolean-true'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('$AsFalseFinal')
  t6(): void {
    type Expected = $AsFalseFinal;
    type Actual = _AndMap['boolean-false'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t7(): void {
    type Expected = boolean;
    type Actual = _AndMap['true-boolean'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('false')
  t8(): void {
    type Expected = false;
    type Actual = _AndMap['false-boolean'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }
}