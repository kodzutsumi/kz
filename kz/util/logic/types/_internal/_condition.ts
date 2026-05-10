// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Else, Then } from '@kz/util/capability';

import type { LogicCapSet, LogicDefaults } from '../types.ts';

import type { _Result } from './_result.ts';

type Capabilities = LogicCapSet;
type Defaults = LogicDefaults;

/**
 * Internal type for condition evaluation.
 *
 * # Capabilities
 * - {@linkcode UseCondition}
 * - {@linkcode UseInverted}
 *
 * @template Operand - The boolean operand to evaluate.
 * @template Settings - The set of capabilities that modify the condition's behavior.
 * @internal
 */
export type _Condition<
  Operand extends boolean,
  Settings extends Capabilities = Defaults,
> = Settings extends Then<infer ThenType>
  ? Settings extends Else<infer ElseType>
    ? _Result<Operand, ThenType, ElseType, Settings>
  : _Result<Operand, ThenType, false, Settings>
  : Settings extends Else<infer ElseType>
    ? _Result<Operand, true, ElseType, Settings>
  : _Result<Operand, true, false, Settings>;
