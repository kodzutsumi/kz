import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type { $AsFalseFinal, $AsFinal, $AsRunoff, $AsTie, $AsTrueFinal, $Finalize } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$Finalize')
class _ {
  @TestGroup('with $AsRunoff (default/implied)')
  @Test('should return true')
  t0(): void {
    type Expected = true;
    type Actual = $Finalize<true, $AsRunoff>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsRunoff (default/implied)')
  @Test('should return false')
  t1(): void {
    type Expected = false;
    type Actual = $Finalize<false, $AsRunoff>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsRunoff (default/implied)')
  @Test('should return boolean')
  t2(): void {
    type Expected = boolean;
    type Actual = $Finalize<boolean, $AsRunoff>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsRunoff (default/implied)')
  @Test('should return boolean')
  t3(): void {
    type Expected = boolean;
    type Actual = $Finalize<$AsTrueFinal, $AsRunoff>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsRunoff (default/implied)')
  @Test('should return boolean')
  t4(): void {
    type Expected = boolean;
    type Actual = $Finalize<$AsFalseFinal, $AsRunoff>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsRunoff (default/implied)')
  @Test('should return boolean')
  t5(): void {
    type Expected = boolean;
    type Actual = $Finalize<$AsTie, $AsRunoff>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  
  @TestGroup('with $AsFinal')
  @Test('should return true')
  t6(): void {
    type Expected = true;
    type Actual = $Finalize<true, $AsFinal>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsFinal')
  @Test('should return false')
  t7(): void {
    type Expected = false;
    type Actual = $Finalize<false, $AsFinal>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsFinal')
  @Test('should return boolean')
  t8(): void {
    type Expected = boolean;
    type Actual = $Finalize<boolean, $AsFinal>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsFinal')
  @Test('should return true')
  t9(): void {
    type Expected = true;
    type Actual = $Finalize<$AsTrueFinal, $AsFinal>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsFinal')
  @Test('should return false')
  t10(): void {
    type Expected = false;
    type Actual = $Finalize<$AsFalseFinal, $AsFinal>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
  
  @TestGroup('with $AsFinal')
  @Test('should return boolean')
  t11(): void {
    type Expected = boolean;
    type Actual = $Finalize<$AsTie, $AsFinal>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

}