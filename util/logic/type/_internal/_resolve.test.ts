import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $ConditionOf,
  $Else,
  $Then,
} from '@kz/util/capability';

import type { _Resolve } from './_resolve.ts';

const IS_TRUE = true;

describe('_Resolve', () => {
  describe('UseCondition', () => {
    describe('AsCondition (default/implied)', () => {
      it('should return true', () => {
        type Expected = true;
        type Actual = _Resolve<true>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return false', () => {
        type Expected = false;
        type Actual = _Resolve<false>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return boolean', () => {
        type Expected = boolean;
        type Actual = _Resolve<boolean>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$Then<string>', () => {
      type Settings = $Then<string>;

      it('should return string', () => {
        type Expected = string;
        type Actual = _Resolve<true, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return false', () => {
        type Expected = false;
        type Actual = _Resolve<false, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return string | false', () => {
        type Expected = string | false;
        type Actual = _Resolve<boolean, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$Else<number>', () => {
      type Settings = $Else<number>;

      it('should return true', () => {
        type Expected = true;
        type Actual = _Resolve<true, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return number', () => {
        type Expected = number;
        type Actual = _Resolve<false, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return number | true', () => {
        type Expected = number | true;
        type Actual = _Resolve<boolean, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$Then<string> & $Else<number>', () => {
      type Settings = $Then<string> & $Else<number>;

      it('should return string', () => {
        type Expected = string;
        type Actual = _Resolve<true, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return number', () => {
        type Expected = number;
        type Actual = _Resolve<false, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return number | string', () => {
        type Expected = number | string;
        type Actual = _Resolve<boolean, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$ConditionOf<string, number>', () => {
      type Settings = $ConditionOf<string, number>;

      it('should return string', () => {
        type Expected = string;
        type Actual = _Resolve<true, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return number', () => {
        type Expected = number;
        type Actual = _Resolve<false, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });

      it('should return number | string', () => {
        type Expected = number | string;
        type Actual = _Resolve<boolean, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
