// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { LogicHandler, NotResult } from './_internal/mod.ts';

import type { LogicCapSet, LogicDefaults } from './types.ts';

/**
 * Represents a negated conditional type that evaluates the boolean operand and returns a type based on the provided settings.
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
 * @template Operand - The boolean operand to evaluate.
 * @template Settings - The set of capabilities that modify the behavior of the conditional type.
 *
 * @see [Logic reference - Logic matrix](https://docs.i11n.io/kz/util/logic/ref/logic/#logic-matrix) for logic resolution.
 * @see [Logic reference - Behavior matrix](https://docs.i11n.io/kz/util/logic/ref/logic/#behavior-matrix) for detailed behavior based on different capability combinations.
 */
export type Not<
  Operand extends boolean,
  Settings extends LogicCapSet = LogicDefaults,
> = LogicHandler<NotResult<Operand, Settings>, Settings>;
