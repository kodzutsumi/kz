// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsInverted, ConditionOf, Else, Then } from '@kz/util/capability';

import type { Resolve } from './mod.ts';

const IS_TRUE = true;

describe('Resolve', () => {
  describe('UseCondition', () => {
    describe('AsCondition (default/implied)', () => {
      describe('AsInitial (default/implied)', () => {
        it('should return true', () => {
          type Actual = Resolve<true>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false', () => {
          type Actual = Resolve<false>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return boolean', () => {
          type Actual = Resolve<boolean>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsInverted', () => {
        it('should return false', () => {
          type Actual = Resolve<true, AsInverted>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true', () => {
          type Actual = Resolve<false, AsInverted>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return boolean', () => {
          type Actual = Resolve<boolean, AsInverted>;
          type Expected = boolean;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('Then<string>', () => {
      describe('AsInitial (default/implied)', () => {
        it('should return string', () => {
          type Actual = Resolve<true, Then<string>>;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false', () => {
          type Actual = Resolve<false, Then<string>>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return string | false', () => {
          type Actual = Resolve<boolean, Then<string>>;
          type Expected = string | false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsInverted', () => {
        it('should return false', () => {
          type Actual = Resolve<true, Then<string> & AsInverted>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return string', () => {
          type Actual = Resolve<false, Then<string> & AsInverted>;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return string | false', () => {
          type Actual = Resolve<boolean, Then<string> & AsInverted>;
          type Expected = string | false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('Else<number>', () => {
      describe('AsInitial (default/implied)', () => {
        it('should return true', () => {
          type Actual = Resolve<true, Else<number>>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return number', () => {
          type Actual = Resolve<false, Else<number>>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return number | true', () => {
          type Actual = Resolve<boolean, Else<number>>;
          type Expected = number | true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsInverted', () => {
        it('should return number', () => {
          type Actual = Resolve<true, Else<number> & AsInverted>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true', () => {
          type Actual = Resolve<false, Else<number> & AsInverted>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return number | true', () => {
          type Actual = Resolve<boolean, Else<number> & AsInverted>;
          type Expected = number | true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('Then<string> & Else<number>', () => {
      describe('AsInitial (default/implied)', () => {
        it('should return string', () => {
          type Actual = Resolve<true, Then<string> & Else<number>>;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return number', () => {
          type Actual = Resolve<false, Then<string> & Else<number>>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return number | string', () => {
          type Actual = Resolve<boolean, Then<string> & Else<number>>;
          type Expected = number | string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsInverted', () => {
        it('should return number', () => {
          type Actual = Resolve<true, Then<string> & Else<number> & AsInverted>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return string', () => {
          type Actual = Resolve<
            false,
            Then<string> & Else<number> & AsInverted
          >;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return number | string', () => {
          type Actual = Resolve<
            boolean,
            Then<string> & Else<number> & AsInverted
          >;
          type Expected = number | string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('ConditionOf<string, number>', () => {
      describe('AsInitial (default/implied)', () => {
        it('should return string', () => {
          type Actual = Resolve<true, ConditionOf<string, number>>;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return number', () => {
          type Actual = Resolve<false, ConditionOf<string, number>>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return number | string', () => {
          type Actual = Resolve<boolean, ConditionOf<string, number>>;
          type Expected = number | string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('AsInverted', () => {
        it('should return number', () => {
          type Actual = Resolve<true, ConditionOf<string, number> & AsInverted>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return string', () => {
          type Actual = Resolve<
            false,
            ConditionOf<string, number> & AsInverted
          >;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return number | string', () => {
          type Actual = Resolve<
            boolean,
            Then<string> & Else<number> & AsInverted
          >;
          type Expected = number | string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });
});
