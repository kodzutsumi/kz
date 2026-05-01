// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseElse } from './consumer.ts';

/**
 * The broker behavior of the {@linkcode UseElse} capability.
 *
 * Use this setting to specify the else (`false`) type for a type that supports the {@linkcode UseElse} capability consumer.
 *
 * @template ElseType - The else (`false`) type.
 */
export type Else<ElseType extends unknown = unknown> = UseElse<ElseType>;
