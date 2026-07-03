import type { $AsRequired } from './broker.ts';
import type { $UseOptional } from './consumer.ts';

/**
 * A utility type to extract the {@linkcode $UseOptional} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseOptional} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $AsRequired}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseOptional} setting from.
 * @returns The extracted {@linkcode $UseOptional} setting.
 */
export type $PickOptional<Settings, Default extends boolean = false> = Settings extends $UseOptional<infer AsOptional>
  ? $UseOptional<AsOptional>
  : $UseOptional<Default>;

export type $GetOptional<Settings, Default extends boolean = false> = $PickOptional<Settings, Default> extends $UseOptional<infer AsOptional> ? AsOptional : Default;