import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $UseUnsafe,
  $UseUnsafeKey,
  $UseUnsafeKeyString,
} from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$UseUnsafe')
class _ {
  @Test('should be a capability flag consumer')
  t0(): void {
    // @ts-expect-error - Should only accept boolean values
    type TestInvalid = $UseUnsafe<'invalid'>;
  }

  @Test('should be keyed by $UseUnsafeKeyString')
  t1(): void {
    type Expected = $UseUnsafeKey;
    type Actual = keyof $UseUnsafe;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should have a boolean setting by default')
  t2(): void {
    type Expected = {
      [$UseUnsafeKeyString]: boolean;
    };
    type Actual = $UseUnsafe;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
