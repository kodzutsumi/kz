import type { $UseOfType, $OfType, $UseNullSetting, $UseOfKeys, $OfKeys } from '@kz/util/capability';
import type { TypeException } from '@kz/util/lint';

import type { NominalWrapper } from './nominal_wrapper.ts';
import type { _IsUnion } from './_is_union.ts';

type Capabilities = $UseOfType | $UseOfKeys | $UseNullSetting;
type Defaults = $OfType;

export type TaggedType<Settings extends Capabilities = Defaults> = 
  Settings extends $OfKeys<infer Key>
    ? _IsUnion<Key> extends true
      ? TypeException<Key, '`TaggedType` does not support union types in `$OfKeys`.'>
      : Settings extends $UseOfType<infer Type>
        ? NominalWrapper<
            { [K in Key]: Type }
          >
        : NominalWrapper<
            { [K in Key]: unknown }
          >
      : Settings extends $UseOfType<infer Type>
        ? NominalWrapper<
            { [Key in symbol]: Type }
          >
        : NominalWrapper<
            { [Key in symbol]: unknown }
          >;
