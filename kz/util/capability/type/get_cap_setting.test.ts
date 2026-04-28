// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  GetCapSetting,
  UseAsync,
  UseExcluded,
  UseInverted,
  UseOptional,
  UseReadonly,
  UseReversed,
  UseSetter,
  UseStrict,
  UseUnsafe,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('GetCapSetting', () => {
  describe('Capability flag consumer', () => {
    describe('UseAsync', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseAsync<true>, UseAsync, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseAsync, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseExcluded', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseExcluded<true>, UseExcluded, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseExcluded, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseInverted', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseInverted<true>, UseInverted, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseInverted, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseOptional', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseOptional<true>, UseOptional, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseOptional, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseReadonly', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseReadonly<true>, UseReadonly, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseReadonly, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseReversed', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseReversed<true>, UseReversed, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseReversed, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseSetter', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseSetter<true>, UseSetter, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseSetter, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseStrict', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseStrict<true>, UseStrict, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseStrict, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseUnsafe', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<true>, UseUnsafe, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseAsync<false>, UseUnsafe, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
