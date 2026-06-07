// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { LogicCapSet, LogicDefaults } from '../types.ts';

import type { _Condition } from './_condition.ts';

type Capabilities = LogicCapSet;
type Defaults = LogicDefaults;

/**
 * Internal type for resolving the result of a logical operation based on the operand and settings.
 *
 * ## Capabilities
 * - {@linkcode UseInverted}
 * - {@linkcode UseCondition}
 * - {@linkcode UseFilter}
 * - {@linkcode UseDefault}
 *
 * @template Operand - The boolean operand to evaluate.
 * @template Settings - The set of capabilities that modify the behavior of the resolution.
 * @internal
 */
export type Resolve<
  Operand extends boolean,
  Settings extends Capabilities = Defaults,
> = _Condition<Operand, Settings>;
