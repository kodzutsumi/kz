import type { LogicHandler, OrResult } from './_internal/mod.ts';

import type { $LogicCapabilities } from './$logic_capabilities.ts';
import type { $LogicDefaults } from './$logic_defaults.ts';

export type Or<
  OperandA extends boolean,
  OperandB extends boolean,
  $Settings extends $LogicCapabilities = $LogicDefaults,
> = LogicHandler<OrResult<OperandA, OperandB>, $Settings>;