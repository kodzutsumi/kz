// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { $OfId, $UseId } from '@kz/util/capability';
import { TypeException } from '@kz/util/lint';

const IS_TRUE = true;

describe('$UseId - broker', () => {
  describe('$OfId (no Id)', () => {
    it('should be PropertyKey', () => {
      type Expected = $UseId;
      type Actual = $OfId;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should be assignable to $UseId', () => {
      type Actual = $OfId;
      type Expected = $UseId;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$OfId<string>', () => {
    it('should be a string', () => {
      type Expected = $UseId<string>;
      type Actual = $OfId<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
    
    it('should be assignable to $UseId', () => {
      type Actual = $OfId<string>;
      type Expected = $UseId<string>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$OfId<Id>', () => {
    it('should be name_id', () => {
      type Expected = $UseId<'name_id'>;
      type Actual = $OfId<'name_id'>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseId', () => {
      type Expected = $UseId;
      type Actual = $OfId<'name_id'>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
