import type { LogicHandler, XorResult } from './_internal/mod.ts';

import type { $LogicCapabilities } from './$logic_capabilities.ts';
import type { $LogicDefaults } from './$logic_defaults.ts';

export type Xor<
  OperandA extends boolean,
  OperandB extends boolean,
  $Settings extends $LogicCapabilities = $LogicDefaults,
> = LogicHandler<XorResult<OperandA, OperandB>, $Settings>;