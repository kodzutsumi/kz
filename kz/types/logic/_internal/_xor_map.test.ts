import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';

import type { _XorMap } from './_xor_map.ts';

const IS_TRUE = true;

@TestFixture('_XorMap')
class _ {
  @ShouldBe('false')
  t0(): void {
    type Expected = false;
    type Actual = _XorMap['true-true'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t1(): void {
    type Expected = true;
    type Actual = _XorMap['true-false'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('true')
  t2(): void {
    type Expected = true;
    type Actual = _XorMap['false-true'];
    type Result = IsExact<Expected, Actual>;  

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t3(): void {
    type Expected = false;
    type Actual = _XorMap['false-false'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('boolean')
  t4(): void {
    type Expected = boolean;
    type Actual = _XorMap['boolean-boolean'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t5(): void {
    type Expected = true;
    type Actual = _XorMap['boolean-true'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t6(): void {
    type Expected = boolean;
    type Actual = _XorMap['boolean-false'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t7(): void {
    type Expected = boolean;
    type Actual = _XorMap['true-boolean'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t8(): void {
    type Expected = boolean;
    type Actual = _XorMap['false-boolean'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }
}