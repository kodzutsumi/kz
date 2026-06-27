/**
 * The key for the {@linkcode $UseInverted} capability.
 */
export declare const $UseInvertedKeyString = 'kz.i11n:use_inverted';

/**
 * The key type for the {@linkcode $UseInverted} capability.
 */
export type $UseInvertedKey = typeof $UseInvertedKeyString;

/**
 * A capability specifying support for inversion.
 * 
 * Use this capability to indicate support for initial or inverted behavior.
 * 
 * With `AsInverted` as a `boolean` type parameter, it functions as the
 * capability consumer.
 * 
 * @template AsInverted - A boolean indicating whether the behavior is inverted (`true`) or initial (`false`, default/implied).
 */
export type $UseInverted<AsInverted extends boolean = boolean> = {
  [$UseInvertedKeyString]: AsInverted;
};

/**
 * The inverted setting of the {@linkcode $UseInverted} capability.
 * 
 * Use this setting to invoke inverted behavior.
 * 
 * @see {@linkcode $AsInitial} for the initial (default/implied) behavior.
 */
export type $AsInverted = $UseInverted<true>;

/**
 * The initial (default/implied) setting of the {@linkcode $UseInverted}
 * capability.
 * 
 * Use this setting to invoke initial behavior.
 * 
 * @see {@linkcode $AsInverted} for the inverted behavior.
 */
export type $AsInitial = $UseInverted<false>;

/**
 * A utility type to extract the {@linkcode $UseInverted} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseInverted} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $AsInitial}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseInverted} setting from.
 * @returns The extracted {@linkcode $UseInverted} setting.
 */
export type $PickInverted<Settings> = Settings extends $UseInverted<infer AsInverted>
  ? $UseInverted<AsInverted>
  : $AsInitial;