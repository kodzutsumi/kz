import type { _ResolveMapResult } from './_resolve_map_result.ts';
import type { _AndMap } from './_and_map.ts';
import type { _OperandString } from './_operand_string.ts';

export type AndResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = _ResolveMapResult<_AndMap, OperandA, OperandB>;