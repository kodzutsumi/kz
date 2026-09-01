import { Test, TestFixture } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $UseStrict,
  $UseStrictKey,
  $UseStrictKeyString,
} from '@kz/types/capabilities';

const IS_TRUE = true;

@TestFixture('$UseStrict')
class _ {
  @Test('should be a capability flag consumer')
  t0(): void {
    // @ts-expect-error - Should only accept boolean values
    type TestInvalid = $UseStrict<'invalid'>;
  }

  @Test('should be keyed by $UseStrictKeyString')
  t1(): void {
    type Expected = $UseStrictKey;
    type Actual = keyof $UseStrict;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }

  @Test('should have a boolean setting by default')
  t2(): void {
    type Expected = {
      [$UseStrictKeyString]: boolean;
    };
    type Actual = $UseStrict;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  }
}
