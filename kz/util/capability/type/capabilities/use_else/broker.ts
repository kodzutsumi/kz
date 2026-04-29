// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseElse } from './consumer.ts';

/**
 * The broker behavior of the {@linkcode UseElse} capability.
 *
 * Use this setting to specify the else (`false`) type that supports the {@linkcode UseElse} capability consumer.
 */
export type Else<ElseType extends unknown = unknown> = UseElse<ElseType>;
