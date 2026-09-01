import type { AsBoolean } from '@kz/types/boolean';
import type {
  $Finalize,
  $PickUseFinal,
  $PickUseInverted,
  $UseFinal,
} from '@kz/types/capabilities';

import type { $LogicCapabilities } from '../$logic_capabilities.ts';
import type { $LogicDefaults } from '../$logic_defaults.ts';

import type { _ResolveCondition } from './_resolve_condition.ts';

type $Capabilities = $LogicCapabilities;
type $Defaults = $LogicDefaults;

export type LogicHandler<
  Operand extends boolean | $UseFinal,
  $Settings extends $Capabilities = $Defaults,
> = _ResolveCondition<
  AsBoolean<
    $Finalize<Operand, $PickUseFinal<$Settings>>,
    $Settings & $PickUseInverted<$Settings>
  >,
  $Settings
>;
