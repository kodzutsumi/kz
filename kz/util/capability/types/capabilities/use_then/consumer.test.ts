// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $Then,
  $UseThen,
  $UseThenKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseThen - consumer', () => {
  describe('$UseThen', () => {
    it('should be keyed by the $UseThenKeyString', () => {
      type Expected = typeof $UseThenKeyString;
      type Actual = keyof $UseThen;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown setting by default', () => {
      type Expected = {
        [$UseThenKeyString]: unknown;
      };
      type Actual = $UseThen;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability open consumer', () => {
      type Expected = $Then<string>;
      type Actual = $UseThen<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
