import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $UseFinal,
  $UseFinalKey,
  $UseFinalKeyString,
} from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$UseFinal')
class _ {
  @Test('should be a capability flag consumer')
  t0(): void {
    // @ts-expect-error - Should only accept boolean values
    type TestInvalid = $UseFinal<'invalid'>;
  }

  @Test('should be keyed by $UseFinalKeyString')
  t1(): void {
    type Expected = $UseFinalKey;
    type Actual = keyof $UseFinal;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should have a boolean setting by default')
  t2(): void {
    type Expected = {
      [$UseFinalKeyString]: boolean;
    };
    type Actual = $UseFinal;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
