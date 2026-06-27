/**
 * The key for the {@linkcode $UseStrict} capability.
 */
export declare const $UseStrictKeyString = 'kz.i11n:use_strict';

/**
 * The key type for the {@linkcode $UseStrict} capability.
 */
export type $UseStrictKey = typeof $UseStrictKeyString;

/**
 * A capability specifying support for strictness.
 * 
 * Use this capability to indicate support for loose or strict behavior.
 * 
 * With `AsStrict` as a `boolean` type parameter, it functions as the
 * capability consumer.
 * 
 * @template AsStrict - A boolean indicating whether the behavior is strict (`true`) or loose (`false`, default/implied).
 */
export type $UseStrict<AsStrict extends boolean = boolean> = {
  [$UseStrictKeyString]: AsStrict;
};

/**
 * The strict setting of the {@linkcode $UseStrict} capability.
 * 
 * Use this setting to invoke strict behavior.
 * 
 * @see {@linkcode $AsLoose} for the loose (default/implied) behavior.
 */
export type $AsStrict = $UseStrict<true>;

/**
 * The loose (default/implied) setting of the {@linkcode $UseStrict}
 * capability.
 * 
 * Use this setting to invoke loose behavior.
 * 
 * @see {@linkcode $AsStrict} for the strict behavior.
 */
export type $AsLoose = $UseStrict<false>;

/**
 * A utility type to extract the {@linkcode $UseStrict} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseStrict} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $AsLoose}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseStrict} setting from.
 * @returns The extracted {@linkcode $UseStrict} setting.
 */
export type $PickStrict<Settings> = Settings extends $UseStrict<infer AsStrict>
  ? $UseStrict<AsStrict>
  : $AsLoose;