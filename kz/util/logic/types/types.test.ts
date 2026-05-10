// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsCondition,
  UseElse,
  UseInverted,
  UseThen,
  UseUnsafe,
} from '@kz/util/capability';

import type { LogicCapSet, LogicDefaults } from './types.ts';

const IS_TRUE = true;

describe('capability types', () => {
  describe('LogicCapSet', () => {
    it('should be a union of capabilities', () => {
      type Expected =
        | UseElse
        | UseInverted
        | UseThen
        | UseUnsafe;
      type Result = IsExact<LogicCapSet, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('LogicDefaults', () => {
    it('should be AsCondition', () => {
      type Expected = AsCondition;
      type Result = IsExact<LogicDefaults, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
