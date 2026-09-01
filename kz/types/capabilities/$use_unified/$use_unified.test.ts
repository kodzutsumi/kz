import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $UseUnified,
  $UseUnifiedKey,
  $UseUnifiedKeyString,
} from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$UseUnified')
class _ {
  @Test('should be a capability flag consumer')
  t0(): void {
    // @ts-expect-error - Should only accept boolean values
    type TestInvalid = $UseUnified<'invalid'>;
  }

  @Test('should be keyed by $UseUnifiedKeyString')
  t1(): void {
    type Expected = $UseUnifiedKey;
    type Actual = keyof $UseUnified;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should have a boolean setting by default')
  t2(): void {
    type Expected = {
      [$UseUnifiedKeyString]: boolean;
    };
    type Actual = $UseUnified;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
