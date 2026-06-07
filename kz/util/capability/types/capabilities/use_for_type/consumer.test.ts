// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  ForType,
  UseForType,
  UseForTypeKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseForType - consumer', () => {
  describe('UseForType', () => {
    it('should be keyed by the UseForTypeKeyString', () => {
      type Actual = keyof UseForType;
      type Expected = typeof UseForTypeKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown setting by default', () => {
      type Actual = UseForType;
      type Expected = {
        [UseForTypeKeyString]: unknown;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability open consumer', () => {
      type Actual = UseForType<string>;
      type Expected = ForType<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
