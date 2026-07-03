import type { $AsSafe } from './broker.ts';
import type { $UseUnsafe } from './consumer.ts';

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
export type $PickUnsafe<Settings> = Settings extends $UseUnsafe<infer AsStrict>
  ? $UseUnsafe<AsStrict>
  : $AsSafe;