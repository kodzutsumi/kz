import type { $AsLoose } from './broker.ts';
import type { $UseStrict } from './consumer.ts';

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