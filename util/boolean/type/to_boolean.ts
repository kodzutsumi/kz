import type { $AsInitial, $AsSafe, $UseInverted, $UseUnsafe } from '@kz/util/capability';

import type { ResolveBoolean } from './_internal/mod.ts';

type Capabilities = $UseInverted | $UseUnsafe;
type Defaults = $AsInitial | $AsSafe;

export type ToBoolean<
  Type,
  Settings extends Capabilities = Defaults,
> = ResolveBoolean<Type, Settings>;