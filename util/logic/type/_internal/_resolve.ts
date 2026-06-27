import type { LogicCapabilities } from '../logic_capabilities.ts';
import type { LogicDefaults } from '../logic_defaults.ts';

import type { _Condition } from './_condition.ts';

type Capabilities = LogicCapabilities;
type Defaults = LogicDefaults;

export type _Resolve<
  Operand extends boolean,
  Settings extends Capabilities = Defaults,
> = _Condition<Operand, Settings>;