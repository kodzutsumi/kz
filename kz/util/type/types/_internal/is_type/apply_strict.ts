// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { AsLoose, UseStrict } from '@kz/util/capability';

import type { IsTypeCapSet } from './types.ts';

export type ApplyStrict<Settings extends IsTypeCapSet> = Settings extends
  UseStrict ? Settings
  : Settings & AsLoose;
