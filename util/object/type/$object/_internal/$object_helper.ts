import type {
$AsOptional,
$AsRequired,
  $OfKeys,
  $OfType,
  $UseOfKeys,
  $UseOfType,
  $UseOptional,
} from '@kz/util/capability';

export type Capabilities = $UseOfType | $UseOfKeys | $UseOptional;
export type Defaults = $OfType & $OfKeys & $AsRequired;

export type $<Settings extends Capabilities = Defaults> =
  Settings extends $AsOptional
    ? Settings extends $UseOfType<infer ValueType>
      ? Settings extends $UseOfKeys<infer KeyType> ? Partial<Record<KeyType, ValueType>>
      : Partial<Record<PropertyKey, ValueType>>
      : Settings extends $UseOfKeys<infer KeyType> ? Partial<Record<KeyType, unknown>>
      : Partial<Record<PropertyKey, unknown>>
    : Settings extends $UseOfType<infer ValueType>
      ? Settings extends $UseOfKeys<infer KeyType> ? Record<KeyType, ValueType>
      : Record<PropertyKey, ValueType>
      : Settings extends $UseOfKeys<infer KeyType> ? Record<KeyType, unknown>
      : Record<PropertyKey, unknown>;