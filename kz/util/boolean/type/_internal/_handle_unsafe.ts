import type { $AsSafe, $AsUnsafe, $UseUnsafe } from '@kz/util/capability';

type Capabilities = $UseUnsafe;
type Defaults = $AsSafe;

export type _HandleUnsafe<
  Operand extends boolean = boolean,
  Settings extends Capabilities = Defaults
> = Settings extends $AsUnsafe
  ? true extends Operand
    ? true
    : false
  : Operand;