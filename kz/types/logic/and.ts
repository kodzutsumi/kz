import type { AndResult, LogicHandler } from './_internal/mod.ts';

import type { $LogicCapabilities } from './$logic_capabilities.ts';
import type { $LogicDefaults } from './$logic_defaults.ts';

export type And<
  OperandA extends boolean,
  OperandB extends boolean,
  $Settings extends $LogicCapabilities = $LogicDefaults,
> = LogicHandler<AndResult<OperandA, OperandB>, $Settings>;