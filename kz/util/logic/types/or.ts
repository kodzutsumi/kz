import type { LogicHandler, OrResult } from './_internal/mod.ts';

import type { LogicCapabilities } from './logic_capabilities.ts';
import type { LogicDefaults } from './logic_defaults.ts';

/**
 * Computes the result of a logical OR operation based on the provided operands and settings.
 * 
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @template Settings - The logic capabilities settings.
 * @returns The result of the logical OR operation based on the values of `OperandA` and `OperandB`.
 */
export type Or<
  OperandA extends boolean,
  OperandB extends boolean,
  Settings extends LogicCapabilities = LogicDefaults,
> = LogicHandler<OrResult<OperandA, OperandB>, Settings>;