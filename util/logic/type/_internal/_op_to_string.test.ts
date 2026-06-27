import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { _OpToString } from './_op_to_string.ts';

const IS_TRUE = true;

describe('_OpToString', () => {
  it('should return "true" for true', () => {
    type Expected = "true";
    type Actual = _OpToString<true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });
  
  it('should return "false" for false', () => {
    type Expected = "false";
    type Actual = _OpToString<false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "boolean" for boolean', () => {
    type Expected = "boolean";
    type Actual = _OpToString<boolean>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });
});