import type { _ResolveMapResult } from './_resolve_map_result.ts';
import type { _XorMap } from './_xor_map.ts';
import type { _OperandString } from './_operand_string.ts';

export type XorResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = _ResolveMapResult<_XorMap, OperandA, OperandB>;