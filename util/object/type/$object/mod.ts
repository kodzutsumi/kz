import type { $AsRequired, $OfKeys, $OfType, $UseOfKeys, $UseOfType, $UseOptional } from '@kz/util/capability';
import type * as D from './$object.ts';

export * as Safe from './safe/mod.ts';
export * as $Object from './$object.ts';

type Capabilities = $UseOfType | $UseOfKeys | $UseOptional;
type Defaults = $OfType & $OfKeys & $AsRequired;

export type $Object<Settings extends Capabilities = Defaults> = D.$<Settings>;