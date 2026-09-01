import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { $Else, $UseElse } from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$Else')
class _ {
  @Test('should be the unknown variant of $UseElse')
  t0(): void {
    type Expected = $UseElse;
    type Actual = $Else;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should be assignable to $UseElse')
  t1(): void {
    type Expected = $Else;
    type Actual = $UseElse;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Else<ElseType>')
  @Test('should be the number variant of $UseElse')
  t2(): void {
    type Expected = $Else<number>;
    type Actual = $UseElse<number>;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$Else<ElseType>')
  @Test('should be assignable to $UseElse')
  t3(): void {
    type Expected = $Else<number>;
    type Actual = $UseElse;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
