import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';
import type { $AsTrueFinal } from '@kz/types/capabilities';

import type { _OrMap } from './_or_map.ts';

const IS_TRUE = true;

@TestFixture('_OrMap')
class _ {
  @ShouldBe('true')
  t0(): void {
    type Expected = true;
    type Actual = _OrMap['true-true'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t1(): void {
    type Expected = true;
    type Actual = _OrMap['true-false'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('true')
  t2(): void {
    type Expected = true;
    type Actual = _OrMap['false-true'];
    type Result = IsExact<Expected, Actual>;  

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t3(): void {
    type Expected = false;
    type Actual = _OrMap['false-false'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('$AsTrueFinal')
  t4(): void {
    type Expected = $AsTrueFinal;
    type Actual = _OrMap['boolean-boolean'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t5(): void {
    type Expected = true;
    type Actual = _OrMap['boolean-true'];
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t6(): void {
    type Expected = boolean;
    type Actual = _OrMap['boolean-false'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t7(): void {
    type Expected = true;
    type Actual = _OrMap['true-boolean'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t8(): void {
    type Expected = boolean;
    type Actual = _OrMap['false-boolean'];
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }
}