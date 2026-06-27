/**
 * The key for the {@linkcode $UseElse} capability.
 */
export declare const $UseElseKeyString = 'kz.i11n:use_else';

/**
 * The key type for the {@linkcode $UseElse} capability.
 */
export type $UseElseKey = typeof $UseElseKeyString;

/**
 * A capability specifying support for an else type.
 * 
 * Use this capability to indicate support for a falsy branch of a conditional.
 * 
 * With `ElseType` as `unknown` type parameter, it can function as the
 * capability consumer.
 * 
 * @template ElseType - The type representing the falsy branch of a conditional.
 */
export type $UseElse<ElseType extends unknown = unknown> = {
  [$UseElseKeyString]: ElseType;
};

/**
 * The else type setting of the {@linkcode $UseElse} capability.
 * 
 * Use this setting to specify the type for the falsy branch of a conditional.
 * 
 * @template ElseType - The type representing the falsy branch of a conditional.
 */
export type $Else<ElseType extends unknown = unknown> = $UseElse<ElseType>;

/**
 * A utility type to extract the {@linkcode $UseElse} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseElse} capability,
 * it extracts the setting. Otherwise, it defaults to
 * {@linkcode $Else | $Else<unknown>}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseElse} setting from.
 * @returns The extracted {@linkcode $UseElse} setting.
 */
export type $PickElse<Settings> = Settings extends $UseElse<infer ElseType>
  ? $UseElse<ElseType>
  : $Else<unknown>;