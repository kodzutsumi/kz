// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { BannedTypes } from '@kz/util/lint';

const IS_TRUE = true;

describe('BannedTypes', () => {
  describe('type support', () => {
    it('supports the `any` type', () => {
      type Actual = BannedTypes['any'];
      type Expected = any;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Function` type', () => {
      type Actual = BannedTypes['Function'];
      type Expected = Function;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Boolean` type', () => {
      type Actual = BannedTypes['Boolean'];
      type Expected = Boolean;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Number` type', () => {
      type Actual = BannedTypes['Number'];
      type Expected = Number;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `String` type', () => {
      type Actual = BannedTypes['String'];
      type Expected = String;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Symbol` type', () => {
      type Actual = BannedTypes['Symbol'];
      type Expected = Symbol;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Object` type', () => {
      type Actual = BannedTypes['Object'];
      type Expected = Object;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `{}` type', () => {
      type Actual = BannedTypes['{}'];
      type Expected = {};
      type Result = IsExact<Actual, Expected>;
      assertType<Result>(IS_TRUE);
    });
  });
});
