// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsInverted, ConditionOf, Else, Then } from '@kz/util/capability';

import type { _Condition } from './_condition.ts';

const IS_TRUE = true;
// | UseCondition
// | UseInverted;
describe('_Condition', () => {
  describe('AsCondition (default/implied)', () => {
    describe('AsInitial (default/implied)', () => {
      describe('with true', () => {
        it('should return true', () => {
          type Actual = _Condition<true>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return false', () => {
          type Actual = _Condition<false>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsInverted', () => {
      describe('with true', () => {
        it('should return false', () => {
          type Actual = _Condition<true, AsInverted>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return true', () => {
          type Actual = _Condition<false, AsInverted>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('Then<string>', () => {
    describe('AsInitial (default/implied)', () => {
      describe('with true', () => {
        it('should return string', () => {
          type Actual = _Condition<true, Then<string>>;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return false', () => {
          type Actual = _Condition<false, Then<string>>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsInverted', () => {
      describe('with true', () => {
        it('should return false', () => {
          type Actual = _Condition<true, Then<string> & AsInverted>;
          type Expected = false;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return string', () => {
          type Actual = _Condition<false, Then<string> & AsInverted>;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('Else<number>', () => {
    describe('AsInitial (default/implied)', () => {
      describe('with true', () => {
        it('should return true', () => {
          type Actual = _Condition<true, Else<number>>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return number', () => {
          type Actual = _Condition<false, Else<number>>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsInverted', () => {
      describe('with true', () => {
        it('should return number', () => {
          type Actual = _Condition<true, Else<number> & AsInverted>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return true', () => {
          type Actual = _Condition<false, Else<number> & AsInverted>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('ConditionOf<string, number>', () => {
    describe('AsInitial (default/implied)', () => {
      describe('with true', () => {
        it('should return string', () => {
          type Actual = _Condition<true, ConditionOf<string, number>>;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return number', () => {
          type Actual = _Condition<false, ConditionOf<string, number>>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsInverted', () => {
      describe('with true', () => {
        it('should return number', () => {
          type Actual = _Condition<
            true,
            ConditionOf<string, number> & AsInverted
          >;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return string', () => {
          type Actual = _Condition<
            false,
            ConditionOf<string, number> & AsInverted
          >;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('ConditionOf<string, number>', () => {
    describe('AsInitial (default/implied)', () => {
      describe('with true', () => {
        it('should return string', () => {
          type Actual = _Condition<true, ConditionOf<string, number>>;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return number', () => {
          type Actual = _Condition<false, ConditionOf<string, number>>;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('AsInverted', () => {
      describe('with true', () => {
        it('should return number', () => {
          type Actual = _Condition<
            true,
            ConditionOf<string, number> & AsInverted
          >;
          type Expected = number;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with false', () => {
        it('should return string', () => {
          type Actual = _Condition<
            false,
            ConditionOf<string, number> & AsInverted
          >;
          type Expected = string;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });
});
