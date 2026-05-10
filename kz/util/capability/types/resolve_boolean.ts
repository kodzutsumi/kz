// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  AsInverted,
  AsUnsafe,
  UseInverted,
  UseUnsafe,
} from '@kz/util/capability';

import type { BaseCapSet } from './types.ts';
import type { AsInitial, AsSafe } from './capabilities/mod.ts';

type Capabilities = UseUnsafe | UseInverted;
type Defaults = AsSafe & AsInitial;

/**
 * Resolve a boolean value to its effective boolean value based on the provided
 * capability settings.
 *
 * ## Capabilities
 * - {@linkcode UseUnsafe} - Determines whether the operand is cast to `true` when the operand is `boolean`.
 * - {@linkcode UseInverted} - Determines whether the operand's boolean value is inverted in the resolution.
 *
 * ### Defaults
 * - {@linkcode UseUnsafe} : {@linkcode AsSafe} - The operand is not cast to `true` if it is `boolean`.
 * - {@linkcode UseInverted} : {@linkcode AsInitial} - The operand's boolean value is retained in the resolution.
 *
 * ## Behavior matrix
 * | Operand   | {@linkcode UseUnsafe} | {@linkcode UseInverted} | Result    |
 * |-----------|------------|--------------|-----------|
 * | `true` | {@linkcode AsSafe} | {@linkcode AsInitial} | `true` |
 * | `true` | {@linkcode AsUnsafe} | {@linkcode AsInitial} | `true` |
 * | `true` | {@linkcode AsSafe} | {@linkcode AsInverted} | `false` |
 * | `true` | {@linkcode AsUnsafe} | {@linkcode AsInverted} | `true` |
 * | `false` | {@linkcode AsSafe} | {@linkcode AsInitial} | `false` |
 * | `false` | {@linkcode AsUnsafe} | {@linkcode AsInitial} | `false` |
 * | `false` | {@linkcode AsSafe} | {@linkcode AsInverted} | `true` |
 * | `false` | {@linkcode AsUnsafe} | {@linkcode AsInverted} | `false` |
 * | `boolean` | {@linkcode AsSafe} | {@linkcode AsInitial} | `boolean` |
 * | `boolean` | {@linkcode AsUnsafe} | {@linkcode AsInitial} | `true` |
 * | `boolean` | {@linkcode AsSafe} | {@linkcode AsInverted} | `boolean` |
 * | `boolean` | {@linkcode AsUnsafe} | {@linkcode AsInverted} | `false` |
 *
 * @template Operand - The boolean value to resolve.
 * @template Settings - The capability consumer settings that influence the resolution.
 */
export type ResolveBoolean<
  Operand extends boolean,
  Settings extends Capabilities = Defaults,
> = HandleInverted<HandleUnsafe<Operand, Settings>, Settings>;

type HandleUnsafe<
  Operand extends boolean,
  Settings extends BaseCapSet,
> = Settings extends AsUnsafe ? true extends Operand ? true
  : false
  : Operand;

type HandleInverted<
  Operand extends boolean,
  Settings extends BaseCapSet,
> = Settings extends AsInverted
  ? Operand extends true ? false : Operand extends false ? true : Operand
  : Operand;
