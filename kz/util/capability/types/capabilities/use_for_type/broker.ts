// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseForType } from './consumer.ts';

/**
 * The behavior broker of the {@linkcode UseForType} capability.
 *
 * Use this setting to specify the working type that supports the
 * {@linkcode UseForType} capability consumer.
 *
 * @template ForType - The type setting for this capability broker.
 */
export type ForType<ForType extends unknown = unknown> = UseForType<ForType>;
