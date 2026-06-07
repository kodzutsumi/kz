// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  AsKeys,
  AsCollection,
  AsValues,
  UseCollection,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseCollection - broker', () => {
  describe('AsCollection', () => {
    it("should be UseCollection<'Collection'>", () => {
      type Actual = AsCollection;
      type Expected = UseCollection<'collection'>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseCollection', () => {
      type Actual = AsCollection;
      type Expected = UseCollection<'collection'>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsKeys', () => {
    it("should be UseCollection<'keys'>", () => {
      type Actual = AsKeys;
      type Expected = UseCollection<'keys'>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseCollection', () => {
      type Actual = AsKeys;
      type Expected = UseCollection;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsValues', () => {
    it("should be UseCollection<'values'>", () => {
      type Actual = AsValues;
      type Expected = UseCollection<'values'>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseCollection', () => {
      type Actual = AsValues;
      type Expected = UseCollection;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
