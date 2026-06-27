import type { $AsLoose, $AsStrict, $UseStrict } from './$use_strict.ts';
import type { $PickThen, $Then, $UseThen } from './$use_then.ts';
import type { $Else, $PickElse, $UseElse } from './$use_else.ts';

type Capabilities = $UseStrict;
type Defaults = $AsLoose;

/**
 * A capability specifying support for a conditional.
 * 
 * Use this capability to indicate support for both the truthy and falsy
 * branches of a conditional.
 * 
 * With `Settings` as {@linkcode $AsLoose} (default/implied) it functions as
 * the capability consumer.
 * 
 * @template Settings - The settings for the conditional capability.
 */
export type $UseCondition<
  Settings extends Capabilities = Defaults,
> = Settings extends $AsStrict ? $UseThen & $UseElse
  : $UseThen | $UseElse;

/**
 * A utility to set the `ThenType` and `ElseType` for a conditional capability.
 * 
 * Use this utility to specify the types for both the truthy and falsy branches
 * of a conditional.
 * 
 * @template ThenType - The type representing the truthy branch of a conditional.
 * @template ElseType - The type representing the falsy branch of a conditional.
 */
export type $ConditionOf<
  ThenType extends unknown = unknown,
  ElseType extends unknown = unknown,
> = $Then<ThenType> & $Else<ElseType>;

/**
 * A utility type to set the `ThenType` and `ElseType` for a conditional
 * capability to `true` and `false`, respectively.
 */
export type $AsCondition = $ConditionOf<true, false>;

/**
 * A utility type to extract the {@linkcode $UseThen} and {@linkcode $UseElse}
 * settings from a given capability set into an intersection.
 * 
 * If the provided `Settings` contains a {@linkcode $UseThen} capability,
 * it extracts the setting. Otherwise, it defaults to
 * {@linkcode $Then | $Then<unknown>}.
 * 
 * If the provided `Settings` contains a {@linkcode $UseElse} capability,
 * it extracts the setting. Otherwise, it defaults to
 * {@linkcode $Else | $Else<unknown>}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseThen} and {@linkcode $UseElse} settings from.
 * @returns The extracted {@linkcode $UseThen} and {@linkcode $UseElse} settings.
 */
export type $PickCondition<Settings> =
  & $PickThen<Settings>
  & $PickElse<Settings>;
