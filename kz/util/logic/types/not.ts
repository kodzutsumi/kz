import type { LogicHandler, NotResult } from './_internal/mod.ts';
import type { LogicCapabilities } from './logic_capabilities.ts';

import type { LogicDefaults } from './logic_defaults.ts';

/**
 * Computes the result of a logical NOT operation based on the provided operand and settings.
 * 
 * @template Operand - The boolean operand to negate.
 * @template Settings - The logic capabilities settings.
 * @returns The result of the logical NOT operation based on the value of `Operand`.
 */
export type Not<
  Operand extends boolean,
  Settings extends LogicCapabilities= LogicDefaults,
> = LogicHandler<NotResult<Operand, Settings>, Settings>;