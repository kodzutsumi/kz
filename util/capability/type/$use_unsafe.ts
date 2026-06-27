/**
 * The key for the {@linkcode $UseUnsafe} capability.
 */
export declare const $UseUnsafeKeyString = 'kz.i11n:use_unsafe';

/**
 * The key type for the {@linkcode $UseUnsafe} capability.
 */
export type $UseUnsafeKey = typeof $UseUnsafeKeyString;

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
export type $UseUnsafe<AsUnsafe extends boolean = boolean> = {
  [$UseUnsafeKeyString]: AsUnsafe;
};

/**
 * The unsafe setting of the {@linkcode $UseUnsafe} capability.
 * 
 * Use this setting to invoke unsafe behavior.
 * 
 * @see {@linkcode $AsSafe} for the safe (default/implied) behavior.
 */
export type $AsUnsafe = $UseUnsafe<true>;

/**
 * The safe (default/implied) setting of the {@linkcode $UseUnsafe}
 * capability.
 * 
 * Use this setting to invoke safe behavior.
 * 
 * @see {@linkcode $AsUnsafe} for the unsafe behavior.
 */
export type $AsSafe = $UseUnsafe<false>;

/**
 * A utility type to extract the {@linkcode $UseUnsafe} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseUnsafe} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $AsSafe}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseUnsafe} setting from.
 * @returns The extracted {@linkcode $UseUnsafe} setting.
 */
export type $PickUnsafe<Settings> = Settings extends $UseUnsafe<infer AsUnsafe>
  ? $UseUnsafe<AsUnsafe>
  : $AsSafe;