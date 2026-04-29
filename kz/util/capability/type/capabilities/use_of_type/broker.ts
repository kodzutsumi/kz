// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseOfType } from './consumer.ts';

/**
 * The broker behavior of the {@linkcode UseOfType} capability.
 *
 * Use this setting to specify the working type that supports the {@linkcode UseOfType} capability consumer.
 */
export type OfType<OfType extends unknown = unknown> = UseOfType<OfType>;
