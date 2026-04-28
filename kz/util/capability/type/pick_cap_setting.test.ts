// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsAsync,
  AsExcluded,
  AsForward,
  AsGetter,
  AsIncluded,
  AsInitial,
  AsInverted,
  AsLoose,
  AsOptional,
  AsReadonly,
  AsRequired,
  AsReversed,
  AsSafe,
  AsSetter,
  AsStrict,
  AsSync,
  AsUnsafe,
  AsWritable,
  PickCapSetting,
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

describe('PickCapSetting', () => {
  describe('Capability flag consumer', () => {
    describe('UseAsync', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCapSetting<UseAsync<true>, UseAsync, false>;
        type Expected = AsAsync;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCapSetting<UseUnsafe<false>, UseAsync, false>;
        type Expected = AsSync;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseExcluded', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCapSetting<UseExcluded<true>, UseExcluded, false>;
        type Expected = AsExcluded;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCapSetting<UseUnsafe<false>, UseExcluded, false>;
        type Expected = AsIncluded;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseInverted', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCapSetting<UseInverted<true>, UseInverted, false>;
        type Expected = AsInverted;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCapSetting<UseUnsafe<false>, UseInverted, false>;
        type Expected = AsInitial;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseOptional', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCapSetting<UseOptional<true>, UseOptional, false>;
        type Expected = AsOptional;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCapSetting<UseUnsafe<false>, UseOptional, false>;
        type Expected = AsRequired;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseReadonly', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCapSetting<UseReadonly<true>, UseReadonly, false>;
        type Expected = AsReadonly;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCapSetting<UseUnsafe<false>, UseReadonly, false>;
        type Expected = AsWritable;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseReversed', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCapSetting<UseReversed<true>, UseReversed, false>;
        type Expected = AsReversed;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCapSetting<UseUnsafe<false>, UseReversed, false>;
        type Expected = AsForward;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseSetter', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCapSetting<UseSetter<true>, UseSetter, false>;
        type Expected = AsSetter;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCapSetting<UseUnsafe<false>, UseSetter, false>;
        type Expected = AsGetter;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseStrict', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCapSetting<UseStrict<true>, UseStrict, false>;
        type Expected = AsStrict;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCapSetting<UseUnsafe<false>, UseStrict, false>;
        type Expected = AsLoose;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseUnsafe', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCapSetting<UseUnsafe<true>, UseUnsafe, false>;
        type Expected = AsUnsafe;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCapSetting<UseAsync<false>, UseUnsafe, false>;
        type Expected = AsSafe;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
