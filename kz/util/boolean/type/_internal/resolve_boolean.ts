import type { $AsInitial, $AsSafe, $PickInverted, $PickUnsafe, $UseInverted, $UseUnsafe } from '@kz/util/capability';

import type { _HandleUnsafe } from './_handle_unsafe.ts';
import type { _HandleInverted } from './_handle_inverted.ts';

import type { Falsy } from '../falsy.ts';

type Capabilities = $UseInverted | $UseUnsafe;
type Defaults = $AsInitial & $AsSafe;

export type ResolveBoolean<
  Type,
  Settings extends Capabilities = Defaults,
> = _HandleInverted<
  _HandleUnsafe<
    Type extends Falsy
      ? false
      : true
    , $PickUnsafe<Settings>
  >, $PickInverted<Settings>
>;