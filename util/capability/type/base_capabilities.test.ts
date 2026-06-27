import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $UseElse,
  $UseInverted,
  $UseNullSetting,
  $UseThen,
  $UseUnsafe,
  $UseVote,
  BaseCapabilities,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('BaseCapabilities', () => {
  it('should be a union of all capabilities', () => {
    type Expected = 
    | $UseThen
    | $UseElse
    | $UseUnsafe
    | $UseVote
    | $UseInverted
    | $UseNullSetting;
    type Actual = BaseCapabilities;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });
});