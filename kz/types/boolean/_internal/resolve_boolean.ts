import type { $AsInitial, $AsSafe, $PickUseInverted, $PickUseUnsafe, $UseInverted, $UseUnsafe } from '@kz/types/capabilities';

import type { _InvokeUnsafe } from './_invoke_unsafe.ts';
import type { _InvokeInverted } from './_invoke_inverted.ts';

import type { Falsy } from '../falsy.ts';

type $Capabilities = $UseInverted | $UseUnsafe;
type $Defaults = $AsInitial & $AsSafe;

export type ResolveBoolean<
  Type,
  $Settings extends $Capabilities = $Defaults,
> = _InvokeInverted<
  _InvokeUnsafe<
    Type extends Falsy
      ? false
      : true
    , $PickUseUnsafe<$Settings>
  >, $PickUseInverted<$Settings>
>;