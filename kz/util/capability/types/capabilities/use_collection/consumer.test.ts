// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsCollection,
  UseCollection,
  UseCollectionKeyString,
  UseCollectionTarget,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('UseCollection - consumer', () => {
  describe('UseCollection', () => {
    it('should be keyed by the UseCollectionKeyString', () => {
      type Actual = keyof UseCollection;
      type Expected = typeof UseCollectionKeyString;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have a UseCollectionTarget setting by default', () => {
      type Actual = UseCollection;
      type Expected = {
        [UseCollectionKeyString]: UseCollectionTarget;
      };
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability option consumer', () => {
      type Actual = UseCollection<'collection'>;
      type Expected = AsCollection;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
