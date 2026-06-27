// deno-lint-ignore-file no-boolean-literal-for-arguments no-explicit-any ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { PermitBannedType } from './mod.ts';

describe('PermitBannedType', () => {
  it('requires a reason for permitting a banned type', () => {
    type PermitAny = PermitBannedType<'any', 'Testing'>;

    assertType<IsExact<PermitAny, any>>(true);
  });

  it('will not accept an empty reason', () => {
    type PermitAny = PermitBannedType<'any', ''>;

    assertType<IsExact<PermitAny, never>>(true);
  });

  it('permits the any type with a reason', () => {
    type PermittedAny = PermitBannedType<'any', 'Testing'>;

    assertType<IsExact<PermittedAny, any>>(true);
  });

  it('permits the Function type with a reason', () => {
    type PermittedFunction = PermitBannedType<'Function', 'Testing'>;

    assertType<IsExact<PermittedFunction, Function>>(true);
  });

  it('permits the Boolean type with a reason', () => {
    type PermittedBoolean = PermitBannedType<'Boolean', 'Testing'>;

    assertType<IsExact<PermittedBoolean, Boolean>>(true);
  });

  it('permits the Number type with a reason', () => {
    type PermittedNumber = PermitBannedType<'Number', 'Testing'>;

    assertType<IsExact<PermittedNumber, Number>>(true);
  });

  it('permits the String type with a reason', () => {
    type PermittedString = PermitBannedType<'String', 'Testing'>;

    assertType<IsExact<PermittedString, String>>(true);
  });

  it('permits the Symbol type with a reason', () => {
    type PermittedSymbol = PermitBannedType<'Symbol', 'Testing'>;

    assertType<IsExact<PermittedSymbol, Symbol>>(true);
  });

  it('permits the Object type with a reason', () => {
    type PermittedObject = PermitBannedType<'Object', 'Testing'>;

    assertType<IsExact<PermittedObject, Object>>(true);
  });

  it('permits the `{}` (any non-nil) type with a reason', () => {
    type PermittedObjectType = PermitBannedType<'{}', 'Testing'>;

    assertType<IsExact<PermittedObjectType, {}>>(true);
  });
});