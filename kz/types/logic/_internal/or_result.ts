import type { _ResolveMapResult } from './_resolve_map_result.ts';
import type { _OrMap } from './_or_map.ts';
import type { _OperandString } from './_operand_string.ts';

export type OrResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = _ResolveMapResult<_OrMap, OperandA, OperandB>;