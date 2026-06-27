import type {
  $AsRequired,
  $OfKeys,
  $OfType,
} from '@kz/util/capability';
import type { $ObjectHelper } from './_internal/mod.ts';

export type * as Safe from './safe/mod.ts';

type Capabilities = $ObjectHelper.Capabilities;
type Defaults = $ObjectHelper.Defaults;

export type $<Settings extends Capabilities = Defaults> = $ObjectHelper<Settings>;

export type Of<
  Type extends unknown = unknown,
  Keys extends PropertyKey = PropertyKey
> = $<$OfType<Type> & $OfKeys<Keys> & $AsRequired>;

export type OfType<
  Type extends unknown = unknown,
> = Of<Type, PropertyKey>;

export type OfKeys<
  Keys extends PropertyKey = PropertyKey,
> = Of<unknown, Keys>;

export type Empty = Of<never, never>;

export type Unknown = Of;