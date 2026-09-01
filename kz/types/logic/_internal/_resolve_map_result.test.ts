import { assertType, type IsExact } from '@std/testing/types';
import { ShouldBe, TestFixture } from '@kz/testing/fw';

import type { _ResolveMapResult } from './_resolve_map_result.ts';

type Map = {
  'true-true': true;
  'true-false': false;
  'false-true': boolean;
  'false-false': true;
  'boolean-boolean': false;
  'boolean-true': boolean;
  'boolean-false': true;
  'true-boolean': false;
  'false-boolean': boolean;
};

const IS_TRUE = true;

@TestFixture('_ResolveMapResult')
class _ {
  @ShouldBe('true')
  t0(): void {
    type Expected = true;
    type Actual = _ResolveMapResult<Map, true, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('false')
  t1(): void {
    type Expected = false;
    type Actual = _ResolveMapResult<Map, true, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('boolean')
  t2(): void {
    type Expected = boolean;
    type Actual = _ResolveMapResult<Map, false, true>;
    type Result = IsExact<Expected, Actual>;  

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('true')
  t3(): void {
    type Expected = true;
    type Actual = _ResolveMapResult<Map, false, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @ShouldBe('false')
  t4(): void {
    type Expected = false;
    type Actual = _ResolveMapResult<Map, boolean, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t5(): void {
    type Expected = boolean;
    type Actual = _ResolveMapResult<Map, boolean, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('true')
  t6(): void {
    type Expected = true;
    type Actual = _ResolveMapResult<Map, boolean, false>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('false')
  t7(): void {
    type Expected = false;
    type Actual = _ResolveMapResult<Map, true, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }

  @ShouldBe('boolean')
  t8(): void {
    type Expected = boolean;
    type Actual = _ResolveMapResult<Map, false, boolean>;
    type Result = IsExact<Expected, Actual>;
    
    assertType<Result>(IS_TRUE);
  }
}