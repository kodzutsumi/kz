// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AsMajority } from '@kz/util/capability';

import type { LogicCapSet, LogicDefaults } from '../types.ts';

import type { _Condition } from './_condition.ts';
import type { _Majority } from './_majority.ts';

type Capabilities = LogicCapSet;
type Defaults = LogicDefaults;

/**
 */
export type _Vote<
  Operand extends boolean | _Majority,
  Settings extends Capabilities = Defaults,
> = Operand extends _Majority<infer Vote>
  ? Settings extends AsMajority
    ? Vote
    : boolean
  : Operand;
