import type { $UseFinal } from '@kz/types/capabilities';
import type { _AndMap } from './_and_map.ts';
import type { _OperandString } from './_operand_string.ts';

type _MapKeys = `${boolean | 'boolean'}-${boolean | 'boolean'}`;

type _Map = {
  [k in _MapKeys]: boolean | $UseFinal;
}

export type _ResolveMapResult<
  Map extends _Map,
  OperandA extends boolean,
  OperandB extends boolean,
> = Map[`${_OperandString<OperandA>}-${_OperandString<OperandB>}`];