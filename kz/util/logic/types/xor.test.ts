// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Xor } from '@kz/util/logic';

const IS_TRUE = true;

describe('Xor', () => {
  describe('examples', () => {
    describe('IsUserOrAdmin', () => {
      type User = {
        name: string;
        user: true;
      };

      type Admin = {
        name: string;
        admin: true;
      };
      type IsUserOrAdmin<Type> = Xor<
        Type extends User ? true : false,
        Type extends Admin ? true : false
      >;

      it('should return true', () => {
        type Actual = IsUserOrAdmin<User>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return true', () => {
        type Actual = IsUserOrAdmin<Admin>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return false', () => {
        type Actual = IsUserOrAdmin<User & Admin>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should return boolean', () => {
        type Actual = IsUserOrAdmin<User | Admin>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
