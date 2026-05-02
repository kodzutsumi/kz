// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseOfType } from './consumer.ts';

/**
 * The behavior broker of the {@linkcode UseOfType} capability.
 *
 * Use this setting to specify the working type that supports the
 * {@linkcode UseOfType} capability consumer.
 *
 * @template OfType - The type setting for this capability broker.
 */
export type OfType<OfType extends unknown = unknown> = UseOfType<OfType>;
