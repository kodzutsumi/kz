import type { $AsCondition, $AsReversed, $AsUnified, $UseCondition, $UseNullSetting, $UseReversed, $UseUnified } from '@kz/types/capabilities';
import type { If } from '@kz/types/logic';

type $Capabilities = 
  | $UseCondition
  | $UseReversed
  | $UseUnified
  | $UseNullSetting

type $Defaults = $AsCondition;

export type Extends<
  Type,
  SuperType,
  $Settings extends $Capabilities = $Defaults
> = $Settings extends $AsUnified
  ? $Settings extends $AsReversed
    ? If<[SuperType] extends [Type] ? true : false, $Settings>
    : If<[Type] extends [SuperType] ? true : false, $Settings>
  : $Settings extends $AsReversed
    ? If<SuperType extends Type ? true : false, $Settings>
    : If<Type extends SuperType ? true : false, $Settings>