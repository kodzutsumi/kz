// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  ConditionOf,
  GetCapSetting,
  UseAsync,
  UseCondition,
  UseDefault,
  UseDepth,
  UseElse,
  UseExcluded,
  UseForType,
  UseInverted,
  UseOfType,
  UseOptional,
  UseReadonly,
  UseRecord,
  UseReversed,
  UseSetter,
  UseStream,
  UseStrict,
  UseThen,
  UseUnified,
  UseUnsafe,
  UseVote,
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

    describe('UseStream', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseStream<true>, UseStream, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseStream, false>;
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

    describe('UseUnified', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<
          UseUnified<true>,
          UseUnified,
          false
        >;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseUnified, false>;
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

    describe('UseVote', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseVote<true>, UseVote, false>;
        type Expected = true;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseAsync<false>, UseVote, false>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('Capability option consumer', () => {
    describe('UseDepth', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseDepth<false>, UseDepth, 10>;
        type Expected = false;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseDepth, 10>;
        type Expected = 10;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseRecord', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseRecord<'record'>, UseRecord, 'values'>;
        type Expected = 'record';
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseRecord, 'record'>;
        type Expected = 'record';
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('Capability open consumer', () => {
    describe('UseDefault', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<
          UseDefault<string | number>,
          UseDefault,
          10
        >;
        type Expected = string | number;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseDefault, boolean>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseElse', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseElse<string | number>, UseElse, 10>;
        type Expected = string | number;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseElse, boolean>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseOfType', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseOfType<string | number>, UseOfType, 10>;
        type Expected = string | number;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseOfType, boolean>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseForType', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseForType<string | number>, UseForType, 10>;
        type Expected = string | number;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseForType, boolean>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('UseThen', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<UseThen<string | number>, UseThen, 10>;
        type Expected = string | number;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should be the DefaultType if missing from the CapBrokerSet', () => {
        type Actual = GetCapSetting<UseUnsafe<false>, UseThen, boolean>;
        type Expected = boolean;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('Special consumers', () => {
    describe('ConditionOf', () => {
      it('should pick the setting from CapBrokerSet', () => {
        type Actual = GetCapSetting<
          ConditionOf<string, number>,
          UseThen,
          10
        >;
        type Expected = string;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });

      it('should not work with UseCondition', () => {
        type Actual = GetCapSetting<
          UseAsync,
          UseCondition,
          never
        >;
        type Expected = never;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
