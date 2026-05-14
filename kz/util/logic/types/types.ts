// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  AsCondition,
  UseCondition,
  UseInverted,
  UseUnsafe,
} from '@kz/util/capability';

/**
 * The set of capabilities that can be used to modify the behavior of logic types such as `If` and `Not`.
 */
export type LogicCapSet =
  | UseCondition
  | UseInverted
  | UseUnsafe;

/**
 * The default capabilities for logic types. This type is used when no specific capabilities are provided in the settings of logic types.
 */
export type LogicDefaults = AsCondition;
