import type { $AsInitial, $AsSafe, $UseInverted, $UseUnsafe } from '@kz/types/capabilities';

import type { ResolveBoolean } from './_internal/mod.ts';

type $Capabilities = $UseInverted | $UseUnsafe;
type $Defaults = $AsInitial | $AsSafe;

export type AsBoolean<
  Type,
  $Settings extends $Capabilities = $Defaults,
> = ResolveBoolean<Type, $Settings>;