// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { Permit } from '@kz/util/lint';

const IS_TRUE = true;

describe('Permit', () => {
  it('requires a reason for permitting a banned type', () => {
    type Actual = Permit<'any', '#i11n:testing'>;
    type Expected = any;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('will not accept an empty reason', () => {
    type Actual = Permit<'any', ''>;
    type Expected = never;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the any type with a reason', () => {
    type Actual = Permit<'any', '#i11n:testing'>;
    type Expected = any;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Function type with a reason', () => {
    type Actual = Permit<'Function', '#i11n:testing'>;
    type Expected = Function;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Boolean type with a reason', () => {
    type Actual = Permit<'Boolean', '#i11n:testing'>;
    type Expected = Boolean;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Number type with a reason', () => {
    type Actual = Permit<'Number', '#i11n:testing'>;
    type Expected = Number;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the String type with a reason', () => {
    type Actual = Permit<'String', '#i11n:testing'>;
    type Expected = String;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Symbol type with a reason', () => {
    type Actual = Permit<'Symbol', '#i11n:testing'>;
    type Expected = Symbol;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Object type with a reason', () => {
    type Actual = Permit<'Object', '#i11n:testing'>;
    type Expected = Object;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the `{}` (any non-nullish) type with a reason', () => {
    type Actual = Permit<'{}', '#i11n:testing'>;
    type Expected = {};
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });
});
