// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $UseId } from './consumer.ts';

/**
 * The broken behavior of the {@linkcode $UseId} capability.
 *
 * Use this setting to specify the keys that support the {@linkcode $UseId} capability consumer.
 */
export type $OfId<Id extends PropertyKey = PropertyKey> = $UseId<Id>;
