import type {
  $AsOptional,
  $AsRequired,
  $OfType,
  $UseNullSetting,
  $UseOfType,
  $UseOptional,
} from '@kz/util/capability';

type Capabilities = $UseOfType | $UseOptional | $UseNullSetting;
type Defaults = $OfType & $AsRequired;

export type NominalWrapper<
  Settings extends Capabilities = Defaults,
  Key extends symbol = symbol,
> = Settings extends $UseOfType<infer Type>
  ? Settings extends $AsOptional ? { readonly [K in Key]?: Type }
  : { readonly [K in Key]: Type }
  : Settings extends $AsOptional ? { readonly [K in Key]?: unknown }
  : { readonly [K in Key]: unknown };
