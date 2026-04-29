// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseThen } from './consumer.ts';

/**
 * The broker behavior of the {@linkcode UseThen} capability.
 *
 * Use this setting to specify the then (`true`) type that supports the {@linkcode UseThen} capability consumer.
 */
export type Then<ThenType extends unknown = unknown> = UseThen<ThenType>;
