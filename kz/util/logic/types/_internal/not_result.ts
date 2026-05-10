// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AsInverted, ResolveBoolean } from '@kz/util/capability';

import type { LogicCapSet, LogicDefaults } from '../types.ts';

/**
 * Type representing the result of a logical NOT operation based on the operand and settings.
 *
 * ## Capabilities
 * - {@linkcode AsInverted}
 *
 * @template Operand - The boolean operand to evaluate.
 * @template Settings - The set of capabilities that modify the behavior of the NOT operation.
 * @internal
 */
export type NotResult<
  Operand extends boolean,
  Settings extends LogicCapSet = LogicDefaults,
> = ResolveBoolean<Operand, Settings & AsInverted>;
