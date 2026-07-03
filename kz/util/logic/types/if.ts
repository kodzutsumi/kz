import type { LogicHandler } from './_internal/mod.ts';

import type { LogicCapabilities } from './logic_capabilities.ts';
import type { LogicDefaults } from './logic_defaults.ts';

/**
 * Computes the result of a logical operation based on the provided operand and settings.
 * 
 * @template Operand - The boolean operand.
 * @template Settings - The logic capabilities settings.
 * @returns The result of the logical operation based on the operand and settings.
 */
export type If<
  Operand extends boolean,
  Settings extends LogicCapabilities = LogicDefaults,
> = LogicHandler<Operand, Settings>;