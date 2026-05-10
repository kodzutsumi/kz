// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { LogicCapSet, LogicDefaults } from './types.ts';
import type { If } from './if.ts';
import type { ConResult } from './_internal/mod.ts';

/**
 * Type representing a logical converse operation on two boolean operands and returns a type based on the provided settings.
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
 * @see [Con reference - Logic matrix](https://docs.i11n.io/kz/util/logic/ref/con/#logic-matrix) for logic resolution of the `Con` type.
 * @see [Con reference - Behavior matrix](https://docs.i11n.io/kz/util/logic/ref/con/#behavior-matrix) for detailed `Con` behavior based on different capability combinations.
 */
export type Con<
  OperandA extends boolean,
  OperandB extends boolean,
  Settings extends LogicCapSet = LogicDefaults,
> = If<ConResult<OperandA, OperandB>, Settings>;
