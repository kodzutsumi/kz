// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AsInverted, AsUnsafe } from '@kz/util/capability';

import type { BaseCapConsumerSet } from './type.ts';
import type { AsInitial, AsSafe } from './capabilities/mod.ts';

/**
 * Resolve a boolean value to its effective boolean value based on the provided settings.
 *
 * ## Capabilities
 * - {@linkcode UseUnsafe} - Determines whether the operand is cast to `true` (unsafe) when the operand is `boolean`.
 * - {@linkcode UseInverted} - Determines whether the operand's boolean value is inverted in the resolution.
 *
 * ## Behavior matrix
 * | Operand   | `AsUnsafe` | `AsInverted` | Result    |
 * |-----------|------------|--------------|-----------|
 * | `true`    | `false`    | `false`      | `true`    |
 * | `true`    | `true`     | `false`      | `true`    |
 * | `true`    | `false`    | `true`       | `false`   |
 * | `true`    | `true`     | `true`       | `true`    |
 * | `false`   | `false`    | `false`      | `false`   |
 * | `false`   | `true`     | `false`      | `false`   |
 * | `false`   | `false`    | `true`       | `true`    |
 * | `false`   | `true`     | `true`       | `false`   |
 * | `boolean` | `false`    | `false`      | `boolean` |
 * | `boolean` | `true`     | `false`      | `true`    |
 * | `boolean` | `false`    | `true`       | `boolean` |
 * | `boolean` | `true`     | `true`       | `false`   |
 *
 * @template Operand - The boolean value to resolve.
 * @template Settings - The capability consumer settings that influence the resolution. Defaults to `AsSafe & AsInitial` (no capabilities enabled).
 */
export type ResolveBoolean<
  Operand extends boolean,
  Settings extends BaseCapConsumerSet = AsSafe & AsInitial,
> = HandleInverted<HandleUnsafe<Operand, Settings>, Settings>;

type HandleUnsafe<
  Operand extends boolean,
  Settings extends BaseCapConsumerSet,
> = Settings extends AsUnsafe ? true extends Operand ? true
  : false
  : Operand;

type HandleInverted<
  Operand extends boolean,
  Settings extends BaseCapConsumerSet,
> = Settings extends AsInverted
  ? Operand extends true ? false : Operand extends false ? true : Operand
  : Operand;
