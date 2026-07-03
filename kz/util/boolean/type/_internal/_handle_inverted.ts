import type { $AsInitial, $AsInverted, $UseInverted } from '@kz/util/capability';

type Capabilities = $UseInverted;
type Defaults = $AsInitial;

export type _HandleInverted<
  Operand extends boolean = boolean,
  Settings extends Capabilities = Defaults
> = Settings extends $AsInverted
  ? Operand extends true 
    ? false
    : Operand extends false
      ? true
      : Operand
  : Operand;