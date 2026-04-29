// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  AsNullOption,
  BaseCapConsumerSet,
  UseNullOption,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseNullOption - broker', () => {
  describe('AsNullOption', () => {
    it('should be an empty interface', () => {
      type Actual = AsNullOption;
      type Expected = {};
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseNullOption', () => {
      type Actual = AsNullOption;
      type Expected = UseNullOption;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to BaseCapConsumerSet', () => {
      type Actual = AsNullOption;
      type Expected = BaseCapConsumerSet;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
