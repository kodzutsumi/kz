import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $UseInverted,
  $UseInvertedKey,
  $UseInvertedKeyString,
} from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$UseInverted')
class _ {
  @Test('should be a capability flag consumer')
  t0(): void {
    // @ts-expect-error - Should only accept boolean values
    type TestInvalid = $UseInverted<'invalid'>;
  }

  @Test('should be keyed by $UseInvertedKeyString')
  t1(): void {
    type Expected = $UseInvertedKey;
    type Actual = keyof $UseInverted;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should have a boolean setting by default')
  t2(): void {
    type Expected = {
      [$UseInvertedKeyString]: boolean;
    };
    type Actual = $UseInverted;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
