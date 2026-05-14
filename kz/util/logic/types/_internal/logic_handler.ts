// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { PickCap, ResolveBoolean, UseUnsafe } from '@kz/util/capability';

import type { LogicCapSet, LogicDefaults } from '../types.ts';

import type { Resolve } from './resolve.ts';
import type { ApplyDefault } from './apply_default.ts';

/**
 * Represents the core logic handler type that processes a boolean operand based on the provided settings and capabilities.
 * This type is used internally by various logic types such as `If`, `Not`, `And`, `Or`, etc., to determine their resulting types based on the operand and settings.
 *
 * @template Operand - The boolean operand to evaluate.
 * @template Settings - The set of capabilities that modify the behavior of the logic handler.
 * @internal
 */
export type LogicHandler<
  Operand extends boolean,
  Settings extends LogicCapSet = LogicDefaults,
> = Resolve<
  ResolveBoolean<Operand, PickCap<Settings, UseUnsafe, false>>,
  ApplyDefault<Settings>
>;
