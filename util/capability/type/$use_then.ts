/**
 * The key for the {@linkcode $UseThen} capability.
 */
export declare const $UseThenKeyString = 'kz.i11n:use_then';

/**
 * The key type for the {@linkcode $UseThen} capability.
 */
export type $UseThenKey = typeof $UseThenKeyString;

/**
 * A capability specifying support for a then type.
 * 
 * Use this capability to indicate support for a truthy branch of a conditional.
 * 
 * With `ThenType` as `unknown` type parameter, it can function as the
 * capability consumer.
 * 
 * @template ThenType - The type representing the truthy branch of a conditional.
 */
export type $UseThen<ThenType extends unknown = unknown> = {
  [$UseThenKeyString]: ThenType;
};

/**
 * The then type setting of the {@linkcode $UseThen} capability.
 * 
 * Use this setting to specify the type for the truthy branch of a conditional.
 * 
 * @template ThenType - The type representing the truthy branch of a conditional.
 */
export type $Then<ThenType extends unknown = unknown> = $UseThen<ThenType>;

/**
 * A utility type to extract the {@linkcode $UseThen} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseThen} capability,
 * it extracts the setting. Otherwise, it defaults to
 * {@linkcode $Then | $Then<unknown>}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseThen} setting from.
 * @returns The extracted {@linkcode $UseThen} setting.
 */
export type $PickThen<Settings> = Settings extends $UseThen<infer ThenType>
  ? $UseThen<ThenType>
  : $Then<unknown>;