import { Test, TestFixture, TestGroup } from '@kz/testing/fw';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  $UseElse,
  $UseElseKey,
  $UseElseKeyString,
} from '@kz/types/capabilities';

const IS_TRUE = true;
const IS_FALSE = false;

@TestFixture('$UseElse')
class _ {
  @Test('should be an capability open consumer')
  t0(): void {
    type TestValid = $UseElse<'invalid'>;
  }

  @Test('should be keyed by $UseElseKeyString')
  t1(): void {
    type Expected = $UseElseKey;
    type Actual = keyof $UseElse;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should have an unknown setting by default')
  t2(): void {
    type Expected = {
      [$UseElseKeyString]: unknown;
    };
    type Actual = $UseElse;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$UseElse<ElseType>')
  @Test('should have a ElseType setting')
  t3(): void {
    type Expected = {
      [$UseElseKeyString]: string;
    };
    type Actual = $UseElse<string>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @TestGroup('$UseElse<ElseType>')
  @Test('should restrict $Else to a single type')
  t4(): void {
    type Expected = $UseElse<string>;
    type Actual = $UseElse<number>;
    type Result = Has<Expected, Actual>;

    assertType<Result>(IS_FALSE);
  }
}
