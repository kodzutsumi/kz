import type { $AsForward } from './broker.ts';
import type { $UseReversed } from './consumer.ts';

/**
 * A utility type to extract the {@linkcode $UseReversed} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseReversed} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $AsForward}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseReversed} setting from.
 * @returns The extracted {@linkcode $UseReversed} setting.
 */
export type $PickReversed<Settings> = Settings extends $UseReversed<infer AsStrict>
  ? $UseReversed<AsStrict>
  : $AsForward;