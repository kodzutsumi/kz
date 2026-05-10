// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { BaseCapSet, UseNullOption } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseNullOption - consumer', () => {
  describe('UseNullOption', () => {
    it('should be an empty interface', () => {
      type Actual = UseNullOption;
      type Expected = {};
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to BaseCapSet', () => {
      type Actual = UseNullOption;
      type Expected = BaseCapSet;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
