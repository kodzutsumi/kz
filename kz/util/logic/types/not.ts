// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { NotResult } from './_internal/mod.ts';

import type { LogicCapSet, LogicDefaults } from './types.ts';
import type { If } from './if.ts';

/**
 * Type representing a negated conditional type that evaluates the boolean operand and returns a type based on the provided settings.
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
 * @template Operand - The boolean operand to evaluate.
 * @template Settings - The set of capabilities that modify the behavior of the conditional type.
 *
 * @see [Not reference - Logic matrix](https://docs.i11n.io/kz/util/logic/ref/not/#logic-matrix) for logic resolution of the `Not` type.
 * @see [Not reference - Behavior matrix](https://docs.i11n.io/kz/util/logic/ref/not/#behavior-matrix) for detailed `Not` behavior based on different capability combinations.
 */
export type Not<
  Operand extends boolean,
  Settings extends LogicCapSet = LogicDefaults,
> = If<NotResult<Operand, Settings>, Settings>;
