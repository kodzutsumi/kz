import type { $AsInitial } from './broker.ts';
import type { $UseInverted } from './consumer.ts';

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