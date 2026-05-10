// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AsInverted } from '@kz/util/capability';
import type { LogicCapSet, LogicDefaults } from '../types.ts';

type Capabilities = LogicCapSet;
type Defaults = LogicDefaults;

/**
 * Internal type for evaluating the result of a logical operation based on the operand and settings.
 *
 * ## Capabilities
 * - {@linkcode AsInverted}
 *
 * @template Operand - The boolean operand to evaluate.
 * @template ThenType - The type to return if the operand is true (or false if AsInverted is used).
 * @template ElseType - The type to return if the operand is false (or true if AsInverted is used).
 * @template Settings - The set of capabilities that modify the behavior of the result evaluation.
 * @internal
 */
export type _Result<
  Operand extends boolean,
  ThenType,
  ElseType,
  Settings extends Capabilities = Defaults,
> = Settings extends AsInverted ? Operand extends false ? ThenType
  : Operand extends true ? ElseType
  : ElseType | ThenType
  : Operand extends true ? ThenType
  : Operand extends false ? ElseType
  : ThenType | ElseType;
