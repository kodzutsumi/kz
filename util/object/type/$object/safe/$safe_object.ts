import type {
  $AsOptional,
  $AsRequired,
  $OfKeys,
  $OfType,
  $UseOfKeys,
  $UseOfType,
} from '@kz/util/capability';

import type { $ObjectHelper } from '../_internal/mod.ts';

type Capabilities = $UseOfType | $UseOfKeys;
type Defaults = $OfType & $OfKeys;

export type $<Settings extends Capabilities = Defaults> = Settings extends
  $AsRequired ? $ObjectHelper<Settings & $AsOptional>
  : Partial<$ObjectHelper<Settings & $AsOptional>>;

export type Of<
  Type extends unknown = unknown,
  Keys extends PropertyKey = PropertyKey
> = $<$OfType<Type> & $OfKeys<Keys>>;

export type OfType<
  Type extends unknown = unknown,
> = Of<Type, PropertyKey>;

export type OfKeys<
  Keys extends PropertyKey = PropertyKey,
> = Of<unknown, Keys>;
