import type { $Else } from './broker.ts';
import type { $UseElse } from './consumer.ts';

/**
 * A utility type to extract the {@linkcode $UseElse} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseElse} capability,
 * it extracts the setting. Otherwise, it defaults to
 * {@linkcode $Else | $Else<unknown>}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseElse} setting from.
 * @returns The extracted {@linkcode $UseElse} setting.
 */
export type $PickElse<Settings> = Settings extends $UseElse<infer ElseType>
  ? $UseElse<ElseType>
  : $Else<unknown>;