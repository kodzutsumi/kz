// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { PickCap, ResolveBoolean, UseUnsafe } from '@kz/util/capability';
import type { ApplyDefault, Resolve } from './_internal/mod.ts';
import type { LogicCapSet, LogicDefaults } from './types.ts';

/**
 * Type representing a conditional type that evaluates the boolean operand and returns a type based on the provided settings.
 *
 * ## Capabilities
 * - {@linkcode UseUnsafe}
 * - {@linkcode UseInverted}
 * - {@linkcode UseCondition}
 *
 * ### Defaults
 * - {@linkcode UseUnsafe} : {@linkcode AsSafe} - The operand is not cast to `true` if it is `boolean`.
 * - {@linkcode UseInverted} : {@linkcode AsInitial} - The operand's boolean value is retained in the resolution.
 * - {@linkcode UseCondition} : No default
 *
 * @template Operand - The boolean operand to evaluate.
 * @template Settings - The set of capabilities that modify the behavior of the conditional type.
 *
 * @see [If reference - Logic matrix](https://docs.i11n.io/kz/util/logic/ref/if/#logic-matrix) for logic resolution of the `If` type.
 * @see [If reference - Behavior matrix](https://docs.i11n.io/kz/util/logic/ref/if/#behavior-matrix) for detailed `If` behavior based on different capability combinations.
 */
export type If<
  Operand extends boolean,
  Settings extends LogicCapSet = LogicDefaults,
> = Resolve<
  ResolveBoolean<Operand, PickCap<Settings, UseUnsafe, false>>,
  ApplyDefault<Settings>
>;
