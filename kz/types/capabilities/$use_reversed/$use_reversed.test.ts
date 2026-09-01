import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $UseReversed,
  $UseReversedKey,
  $UseReversedKeyString,
} from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$UseReversed')
class _ {
  @Test('should be a capability flag consumer')
  t0(): void {
    // @ts-expect-error - Should only accept boolean values
    type TestInvalid = $UseReversed<'invalid'>;
  }

  @Test('should be keyed by $UseReversedKeyString')
  t1(): void {
    type Expected = $UseReversedKey;
    type Actual = keyof $UseReversed;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should have a boolean setting by default')
  t2(): void {
    type Expected = {
      [$UseReversedKeyString]: boolean;
    };
    type Actual = $UseReversed;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
