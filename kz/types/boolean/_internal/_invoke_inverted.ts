import type { $AsInitial, $AsInverted, $UseInverted } from '@kz/types/capabilities';

type $Capabilities = $UseInverted;
type $Defaults = $AsInitial;

export type _InvokeInverted<
  Operand extends boolean = boolean,
  $Settings extends $Capabilities = $Defaults
> = $Settings extends $AsInverted
  ? Operand extends true 
    ? false
    : Operand extends false
      ? true
      : Operand
  : Operand;