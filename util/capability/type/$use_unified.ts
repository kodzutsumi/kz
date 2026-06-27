/**
 * The key for the {@linkcode $UseUnified} capability.
 */
export declare const $UseUnifiedKeyString = 'kz.i11n:use_unified';

/**
 * The key type for the {@linkcode $UseUnified} capability.
 */
export type $UseUnifiedKey = typeof $UseUnifiedKeyString;

/**
 * A capability specifying support for unsafe values or types.
 * 
 * Use this capability to indicate support for unsafe operations or values.
 * 
 * With `AsUnsafe` as a `boolean` type parameter, it functions as the
 * capability consumer.
 * 
 * @template AsUnsafe - A boolean indicating whether the behavior is unsafe (`true`) or safe (`false`, default/implied).
 */
export type $UseUnified<AsUnified extends boolean = boolean> = {
  [$UseUnifiedKeyString]: AsUnified;
};

/**
 * The unsafe setting of the {@linkcode $UseUnified} capability.
 * 
 * Use this setting to invoke unsafe behavior.
 * 
 * @see {@linkcode $AsSafe} for the safe (default/implied) behavior.
 */
export type $AsUnified = $UseUnified<true>;

/**
 * The safe (default/implied) setting of the {@linkcode $UseUnified}
 * capability.
 * 
 * Use this setting to invoke safe behavior.
 * 
 * @see {@linkcode $AsUnsafe} for the unsafe behavior.
 */
export type $AsDistributed = $UseUnified<false>;

/**
 * A utility type to extract the {@linkcode $UseUnified} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseUnified} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $AsSafe}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseUnified} setting from.
 * @returns The extracted {@linkcode $UseUnified} setting.
 */
export type $PickUnified<Settings> = Settings extends $UseUnified<infer AsUnified>
  ? $UseUnified<AsUnified>
  : $UseUnified<false>;