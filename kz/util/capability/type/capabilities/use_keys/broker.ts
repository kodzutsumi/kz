// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseKeys } from './consumer.ts';

/**
 * The broken behavior of the {@linkcode UseKeys} capability.
 * 
 * Use this setting to specify the keys that support the {@linkcode UseKeys} capability consumer.
 */
export type KeysOf<Keys extends PropertyKey = PropertyKey> = UseKeys<Keys>;
