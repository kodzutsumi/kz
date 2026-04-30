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
  AsLevel,
  AsLoose,
  AsOptional,
  AsReadonly,
  AsRecord,
  AsRequired,
  AsReversed,
  AsSafe,
  AsSetter,
  AsShallow,
  AsStrict,
  AsSync,
  AsUnsafe,
  AsWritable,
  ConditionOf,
  DefaultOf,
  Else,
  OfType,
  PickCap,
  Then,
  UseAsync,
  UseCondition,
  UseDefault,
  UseDepth,
  UseElse,
  UseExcluded,
  UseInverted,
  UseOfType,
  UseOptional,
  UseReadonly,
  UseRecord,
  UseReversed,
  UseSetter,
  UseStrict,
  UseThen,
  UseUnsafe,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('PickCap', () => {
  describe('Capability flag consumer', () => {
    describe('UseAsync', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseAsync<true>, UseAsync, false>;
        type Expected = AsAsync;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseAsync, false>;
        type Expected = AsSync;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseExcluded', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseExcluded<true>, UseExcluded, false>;
        type Expected = AsExcluded;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseExcluded, false>;
        type Expected = AsIncluded;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseInverted', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseInverted<true>, UseInverted, false>;
        type Expected = AsInverted;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseInverted, false>;
        type Expected = AsInitial;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseOptional', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseOptional<true>, UseOptional, false>;
        type Expected = AsOptional;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseOptional, false>;
        type Expected = AsRequired;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseReadonly', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseReadonly<true>, UseReadonly, false>;
        type Expected = AsReadonly;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseReadonly, false>;
        type Expected = AsWritable;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseReversed', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseReversed<true>, UseReversed, false>;
        type Expected = AsReversed;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseReversed, false>;
        type Expected = AsForward;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseSetter', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseSetter<true>, UseSetter, false>;
        type Expected = AsSetter;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseSetter, false>;
        type Expected = AsGetter;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseStrict', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseStrict<true>, UseStrict, false>;
        type Expected = AsStrict;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseStrict, false>;
        type Expected = AsLoose;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseUnsafe', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<true>, UseUnsafe, false>;
        type Expected = AsUnsafe;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseAsync<false>, UseUnsafe, false>;
        type Expected = AsSafe;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('Capability option consumer', () => {
    describe('UseDepth', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseDepth<false>, UseDepth, 10>;
        type Expected = AsShallow;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseDepth, 10>;
        type Expected = AsLevel<10>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseRecord', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseRecord<'record'>, UseRecord, 'values'>;
        type Expected = AsRecord;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseRecord, 'record'>;
        type Expected = AsRecord;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('Capability open consumer', () => {
    describe('UseDefault', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<
          UseDefault<string | number>,
          UseDefault,
          10
        >;
        type Expected = DefaultOf<string | number>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseDefault, boolean>;
        type Expected = DefaultOf<boolean>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseElse', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseElse<string | number>, UseElse, 10>;
        type Expected = Else<string | number>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseElse, boolean>;
        type Expected = Else<boolean>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseOfType', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseOfType<string | number>, UseOfType, 10>;
        type Expected = OfType<string | number>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseOfType, boolean>;
        type Expected = OfType<boolean>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseThen', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<UseThen<string | number>, UseThen, 10>;
        type Expected = Then<string | number>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = PickCap<UseUnsafe<false>, UseThen, boolean>;
        type Expected = Then<boolean>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('Special consumers', () => {
    describe('ConditionOf', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = PickCap<
          ConditionOf<string, number>,
          UseThen,
          true
        >;
        type Expected = Then<string>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should not work with UseCondition', () => {
        type Actual = PickCap<
          UseAsync,
          UseCondition,
          never
        >;
        type Expected = Then<never> | Else<never>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
