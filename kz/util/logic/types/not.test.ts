// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Not } from '@kz/util/logic';

const IS_TRUE = true;

describe('Not', () => {
  describe('examples', () => {
    describe('HasNoLength', () => {
      type HasNoLength<Type> = Not<
        Type extends { length: number } ? true : false
      >;

      it('should return true', () => {
        type Actual = HasNoLength<{
          id: number;
          name: string;
        }>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return false', () => {
        type Actual = HasNoLength<'hello world'>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return false', () => {
        type Actual = HasNoLength<['hello', 'world']>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
