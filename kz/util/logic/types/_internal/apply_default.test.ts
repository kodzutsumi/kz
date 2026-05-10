// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { ApplyDefault } from './mod.ts';
import type { AsInverted, DefaultOf } from '@kz/util/capability';

const IS_TRUE = true;

describe('ApplyDefault', () => {
  type Settings = AsInverted & DefaultOf<string>;

  describe('has default', () => {
    it('should return Settings', () => {
      type Actual = ApplyDefault<Settings>;
      type Expected = Settings;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('no default', () => {
    it('should add a default of true', () => {
      type Actual = ApplyDefault<AsInverted>;
      type Expected = AsInverted & DefaultOf<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
