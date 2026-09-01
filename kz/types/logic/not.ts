import type { LogicHandler, NotResult } from './_internal/mod.ts';

import type { $LogicCapabilities } from './$logic_capabilities.ts';
import type { $LogicDefaults } from './$logic_defaults.ts';

export type Not<
  Operand extends boolean,
  $Settings extends $LogicCapabilities = $LogicDefaults,
> = LogicHandler<NotResult<Operand>, $Settings>;