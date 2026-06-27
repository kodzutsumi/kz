export declare const $UseOfTypeKeyString = 'kz.i11n:use_of_type';

export type $UseOfTypeKey = typeof $UseOfTypeKeyString;

export type $UseOfType<OfType extends unknown = unknown> = {
  [$UseOfTypeKeyString]: OfType;
};

export type $OfType<Type extends unknown = unknown> = $UseOfType<Type>;

export type $PickOfType<Settings> = Settings extends $UseOfType<infer AsOfType>
  ? $UseOfType<AsOfType>
  : $UseOfType<unknown>;