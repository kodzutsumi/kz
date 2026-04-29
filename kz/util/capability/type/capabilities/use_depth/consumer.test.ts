// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsDeep,
  AsLevel,
  UseDepth,
  UseDepthKeyString,
  UseDepthLevel,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseDepth - consumer', () => {
  describe('UseDepth', () => {
    it('should be keyed by the UseDepthKeyString', () => {
      type Actual = keyof UseDepth;
      type Expected = typeof UseDepthKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have a UseDepthLevel | boolean setting by default', () => {
      type Actual = UseDepth;
      type Expected = {
        [UseDepthKeyString]: UseDepthLevel | boolean;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability flag consumer', () => {
      type Actual = UseDepth<true>;
      type Expected = AsDeep;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability option consumer', () => {
      type Actual = UseDepth<5>;
      type Expected = AsLevel<5>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
