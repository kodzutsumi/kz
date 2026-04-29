// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseDefault } from './consumer.ts';

/**
 * The broker behavior of the {@linkcode UseDefault} capability.
 *
 * Use this setting to specify the default type that supports the {@linkcode UseDefault} capability consumer.
 */
export type DefaultOf<DefaultType extends unknown = unknown> = UseDefault<
  DefaultType
>;
