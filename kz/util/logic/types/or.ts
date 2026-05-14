// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { LogicHandler, OrResult } from './_internal/mod.ts';

import type { LogicCapSet, LogicDefaults } from './types.ts';

/**
 * Represents a logical OR operation on two boolean operands and returns a type based on the provided settings.
 *
 * ## Capabilities
 * - {@linkcode UseUnsafe}
 * - {@linkcode UseInverted}
 * - {@linkcode UseCondition}
 *
 * ### Defaults
 * - {@linkcode UseUnsafe} : {@linkcode AsSafe} (implied) - The operand is not cast to `true` if it is `boolean`.
 * - {@linkcode UseInverted} : {@linkcode AsInitial} (implied) - The operand's boolean value is retained in the resolution.
 * - {@linkcode UseCondition} : {@linkcode AsCondition} - The resulting {@linkcode Then} and {@linkcode Else} types are `true` or `false` accordingly.
 *
 * @template OperandA - The first boolean operand to evaluate.
 * @template OperandB - The second boolean operand to evaluate.
 * @template Settings - The set of capabilities that modify the behavior of the conditional type.
 *
 * @see [Logic reference - Logic matrix](https://docs.i11n.io/kz/util/logic/ref/logic/#logic-matrix) for logic resolution.
 * @see [Logic reference - Behavior matrix](https://docs.i11n.io/kz/util/logic/ref/logic/#behavior-matrix) for detailed behavior based on different capability combinations.
 */
export type Or<
  OperandA extends boolean,
  OperandB extends boolean,
  Settings extends LogicCapSet = LogicDefaults,
> = LogicHandler<OrResult<OperandA, OperandB>, Settings>;
