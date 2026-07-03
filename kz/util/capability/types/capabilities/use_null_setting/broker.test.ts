// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsNullSetting,
  BaseCapSet,
  $UseNullSetting,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseNullSetting - broker', () => {
  describe('$AsNullSetting', () => {
    it('should be an empty interface', () => {
      type Actual = $AsNullSetting;
      type Expected = {};
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseNullSetting', () => {
      type Actual = $AsNullSetting;
      type Expected = $UseNullSetting;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to BaseCapSet', () => {
      type Actual = $AsNullSetting;
      type Expected = BaseCapSet;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
