// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { DefaultOf, UseDefault } from '@kz/util/capability';
import type { LogicCapSet, LogicDefaults } from '../types.ts';

/**
 * Applies the default value to the settings if the {@linkcode UseDefault} capability is
 * not provided.
 *
 * @template Settings - The set of capabilities that may include `UseDefault`.
 * @internal
 */
export type ApplyDefault<Settings extends LogicCapSet = LogicDefaults> =
  Settings extends UseDefault ? Settings
    : Settings & DefaultOf<true>;
