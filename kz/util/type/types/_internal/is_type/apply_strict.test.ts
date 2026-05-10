// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsLoose, AsNullOption, AsStrict } from '@kz/util/capability';

import type { ApplyStrict } from './apply_strict.ts';

const IS_TRUE = true;

describe('ApplyStrict', () => {
  it('should apply the strict type when UseStrict is not present', () => {
    type Actual = ApplyStrict<AsNullOption>;
    type Expected = AsNullOption & AsLoose;

    assertType<IsExact<Actual, Expected>>(IS_TRUE);
  });

  it('should return the settings when UseStrict is present', () => {
    type Actual = ApplyStrict<AsStrict>;
    type Expected = AsStrict;

    assertType<IsExact<Actual, Expected>>(IS_TRUE);
  });
});
