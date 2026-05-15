// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsForward,
  AsLoose,
  AsSafe,
  UseNullOption,
  UseOfType,
  UseReversed,
  UseUnified,
  UseUnsafe,
} from '@kz/util/capability';

import type { IsTypeCapSet, IsTypeDefaults } from './types.ts';

const IS_TRUE = true;

describe('is_type types', () => {
  describe('IsTypeCapSet', () => {
    it('should be a union of capabilities', () => {
      type Expected =
        | UseUnified
        | UseUnsafe
        | UseReversed
        | UseOfType
        | UseNullOption;
      type Result = IsExact<IsTypeCapSet, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('IsTypeDefaults', () => {
    it('should be an intersection of capability brokers', () => {
      type Expected =
        & AsLoose
        & AsSafe
        & AsForward;
      type Result = IsExact<IsTypeDefaults, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
