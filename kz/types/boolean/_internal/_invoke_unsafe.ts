import type { $AsSafe, $AsUnsafe, $UseUnsafe } from '@kz/types/capabilities';

type $Capabilities = $UseUnsafe;
type $Defaults = $AsSafe;

export type _InvokeUnsafe<
  Operand extends boolean = boolean,
  $Settings extends $Capabilities = $Defaults
> = $Settings extends $AsUnsafe
  ? true extends Operand
    ? true
    : false
  : Operand;