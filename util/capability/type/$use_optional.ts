export declare const $UseOptionalKeyString = 'kz.i11n:use_optional';

export type $UseOptionalKey = typeof $UseOptionalKeyString;

export type $UseOptional<AsOptional extends boolean = boolean> = {
  [$UseOptionalKeyString]: AsOptional;
};

export type $AsOptional = $UseOptional<true>;

export type $AsRequired = $UseOptional<false>;

export type $PickOptional<Settings> = Settings extends $UseOptional<infer AsOptional>
  ? $UseOptional<AsOptional>
  : $UseOptional<false>;