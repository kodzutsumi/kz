import type { $AsDistributed } from './broker.ts';
import type { $UseUnified } from './consumer.ts';

/**
 * A utility type to extract the {@linkcode $UseUnified} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseUnified} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $AsDistributed}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseUnified} setting from.
 * @returns The extracted {@linkcode $UseUnified} setting.
 */
export type $PickUnified<Settings> = Settings extends $UseUnified<infer AsStrict>
  ? $UseUnified<AsStrict>
  : $AsDistributed;