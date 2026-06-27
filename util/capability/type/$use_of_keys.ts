export declare const $UseOfKeysKeyString = 'kz.i11n:use_of_keys';

export type $UseOfKeysKey = typeof $UseOfKeysKeyString;

export type $UseOfKeys<Keys extends PropertyKey = PropertyKey> = {
  [$UseOfKeysKeyString]: Keys;
};

export type $OfKeys<Keys extends PropertyKey = PropertyKey> = $UseOfKeys<Keys>;

export type $PickOfKeys<Settings> = Settings extends $UseOfKeys<infer AsOfKeys>
  ? $UseOfKeys<AsOfKeys>
  : $UseOfKeys<PropertyKey>;