import type { $AsSync } from './broker.ts';
import type { $UseAsync } from './consumer.ts';

/**
 * A utility type to extract the {@linkcode $UseAsync} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseAsync} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $AsSync}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseAsync} setting from.
 * @returns The extracted {@linkcode $UseAsync} setting.
 */
export type $PickAsync<Settings> = Settings extends $UseAsync<infer AsInverted>
  ? $UseAsync<AsInverted>
  : $AsSync;