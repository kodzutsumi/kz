// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $OfType,
  $UseOfType,
  $UseOfTypeKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseOfType - consumer', () => {
  describe('$UseOfType', () => {
    it('should be keyed by the $UseOfTypeKeyString', () => {
      type Expected = typeof $UseOfTypeKeyString;
      type Actual = keyof $UseOfType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown setting by default', () => {
      type Expected = {
        [$UseOfTypeKeyString]: unknown;
      };
      type Actual = $UseOfType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability open consumer', () => {
      type Expected = $OfType<string>;
      type Actual = $UseOfType<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
