import type { $OfType } from './broker.ts';
import type { $UseOfType } from './consumer.ts';

/**
 * A utility type to extract the {@linkcode $UseOfType} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseOfType} capability,
 * it extracts the setting. Otherwise, it defaults to
 * {@linkcode $OfType | $OfType<unknown>}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseOfType} setting from.
 * @returns The extracted {@linkcode $UseOfType} setting.
 */
export type $PickOfType<Settings, Default extends unknown = unknown> = Settings extends $UseOfType<infer OfType>
  ? $UseOfType<OfType>
  : $OfType<Default>;

export type $GetOfType<Settings, Default extends unknown = unknown> = $PickOfType<Settings, Default> extends $UseOfType<infer OfType> ? OfType : Default;