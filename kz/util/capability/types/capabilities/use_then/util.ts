import type { $Then } from './broker.ts';
import type { $UseThen } from './consumer.ts';

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