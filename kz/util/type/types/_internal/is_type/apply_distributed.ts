// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { AsDistributed, UseUnified } from '@kz/util/capability';

import type { IsTypeCapSet } from './types.ts';

export type ApplyDistributed<Settings extends IsTypeCapSet> = Settings extends
  UseUnified ? Settings
  : Settings & AsDistributed;
