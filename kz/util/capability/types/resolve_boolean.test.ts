// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsUnsafe, ResolveBoolean } from '@kz/util/capability';
import type { AsInverted } from '@kz/util/capability';

const IS_TRUE = true;

describe('ResolveBoolean', () => {
  describe('AsSafe (default)', () => {
    describe('AsInitial (default)', () => {
      it('should resolve true to true', () => {
        type Actual = ResolveBoolean<true>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should resolve false to false', () => {
        type Actual = ResolveBoolean<false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should resolve boolean to boolean', () => {
        type Actual = ResolveBoolean<boolean>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('AsInverted', () => {
      it('should resolve true to false', () => {
        type Actual = ResolveBoolean<true, AsInverted>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should resolve false to true', () => {
        type Actual = ResolveBoolean<false, AsInverted>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should resolve boolean to boolean', () => {
        type Actual = ResolveBoolean<boolean, AsInverted>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('AsUnsafe', () => {
    describe('AsInitial (default)', () => {
      it('should resolve true to true', () => {
        type Actual = ResolveBoolean<true, AsUnsafe>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should resolve false to false', () => {
        type Actual = ResolveBoolean<false, AsUnsafe>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should resolve boolean to true', () => {
        type Actual = ResolveBoolean<boolean, AsUnsafe>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('AsInverted', () => {
      it('should resolve true to false', () => {
        type Actual = ResolveBoolean<true, AsUnsafe & AsInverted>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should resolve false to true', () => {
        type Actual = ResolveBoolean<false, AsUnsafe & AsInverted>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should resolve boolean to false', () => {
        type Actual = ResolveBoolean<boolean, AsUnsafe & AsInverted>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
