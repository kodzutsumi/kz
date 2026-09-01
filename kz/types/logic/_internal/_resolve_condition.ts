import type { $Else, $Then, $UseElse, $UseNullSetting, $UseThen } from '@kz/types/capabilities';

import type { _ResolveResult } from './_resolve_result.ts';

type $Capabilities = $UseThen | $UseElse | $UseNullSetting;
type $Defaults = $Then<true> | $Else<false>;

export type _ResolveCondition<
  Operand extends boolean,
  $Settings extends $Capabilities = $Defaults,
> = $Settings extends $Then<infer ThenType>
  ? $Settings extends $Else<infer ElseType>
    ? _ResolveResult<Operand, ThenType, ElseType>
  : _ResolveResult<Operand, ThenType, false>
  : $Settings extends $Else<infer ElseType>
    ? _ResolveResult<Operand, true, ElseType>
  : _ResolveResult<Operand, true, false>;