import type { _IsUnion } from './_internal/mod.ts';
import type { $OfId } from './broker.ts';
import type { $UseId } from './consumer.ts';

/**
 * A utility type to extract the {@linkcode $UseId} setting from a given
 * capability set.
 * 
 * If the provided `Settings` contains a {@linkcode $UseId} capability,
 * it extracts the setting. Otherwise, it defaults to {@linkcode $OfId}.
 * 
 * @template Settings - The settings to extract the {@linkcode $UseId} setting from.
 * @returns The extracted {@linkcode $UseId} setting.
 */
export type $PickId<Settings, Default extends PropertyKey = PropertyKey> = Settings extends $UseId<infer Id>
  ? $UseId<Id>
  : $OfId<Default>;


export type $GetId<Settings, Default extends PropertyKey = PropertyKey> = $PickId<Settings, Default> extends $UseId<infer Id> ? Id : Default;