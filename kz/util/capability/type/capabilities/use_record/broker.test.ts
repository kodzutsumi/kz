// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  AsKeys,
  AsRecord,
  AsValues,
  UseRecord,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseRecord - broker', () => {
  describe('AsRecord', () => {
    it("should be UseRecord<'record'>", () => {
      type Actual = AsRecord;
      type Expected = UseRecord<'record'>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseRecord', () => {
      type Actual = AsRecord;
      type Expected = UseRecord<'record'>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsKeys', () => {
    it("should be UseRecord<'keys'>", () => {
      type Actual = AsKeys;
      type Expected = UseRecord<'keys'>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseRecord', () => {
      type Actual = AsKeys;
      type Expected = UseRecord;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsValues', () => {
    it("should be UseRecord<'values'>", () => {
      type Actual = AsValues;
      type Expected = UseRecord<'values'>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseRecord', () => {
      type Actual = AsValues;
      type Expected = UseRecord;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
