// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { LogicCapSet, LogicDefaults } from './types.ts';
import type { If } from './if.ts';
import type { AndResult } from './_internal/mod.ts';

/**
 * Type representing a logical AND operation on two boolean operands and returns a type based on the provided settings.
 *
 * ## Capabilities
 * - {@linkcode UseUnsafe}
 * - {@linkcode UseInverted}
 * - {@linkcode UseCondition}
 * - {@linkcode UseDefault}
 *
 * ### Defaults
 * - {@linkcode UseUnsafe} : {@linkcode AsSafe} - The operand is not cast to `true` if it is `boolean`.
 * - {@linkcode UseInverted} : {@linkcode AsInitial} - The operand's boolean value is retained in the resolution.
 * - {@linkcode UseCondition} : No default
 * - {@linkcode UseDefault} : No default
 *
 * @template OperandA - The first boolean operand to evaluate.
 * @template OperandB - The second boolean operand to evaluate.
 * @template Settings - The set of capabilities that modify the behavior of the conditional type.
 *
 * @see [And reference - Logic matrix](https://docs.i11n.io/kz/util/logic/ref/and/#logic-matrix) for logic resolution of the `And` type.
 * @see [And reference - Behavior matrix](https://docs.i11n.io/kz/util/logic/ref/and/#behavior-matrix) for detailed `And` behavior based on different capability combinations.
 */
export type And<
  OperandA extends boolean,
  OperandB extends boolean,
  Settings extends LogicCapSet = LogicDefaults,
> = If<AndResult<OperandA, OperandB>, Settings>;
