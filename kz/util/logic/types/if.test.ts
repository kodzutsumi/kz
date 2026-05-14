// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { If } from '@kz/util/logic';

const IS_TRUE = true;

describe('If', () => {
  describe('examples', () => {
    describe('HasLength', () => {
      type HasLength<Type> = If<
        Type extends { length: number } ? true : false
      >;

      it('should return true', () => {
        type Actual = HasLength<'hello world'>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return true', () => {
        type Actual = HasLength<['hello', 'world']>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return false', () => {
        type Actual = HasLength<30>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
