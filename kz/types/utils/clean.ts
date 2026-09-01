import type {
  $AsShallow,
  $ConditionOf,
  $DecrementDepth,
  $IsDeep,
  $UseDepth,
} from '@kz/types/capabilities';
import type { Permit } from '@kz/types/lint';

import type { Extends } from './extends.ts';

type NonNil = Permit<'{}', '@i11n/kz#denilify'>;

export type Clean<Type, $Settings extends $UseDepth = $AsShallow> = Extends<
  Type,
  object,
  $ConditionOf<
    {
      [Key in keyof Type]: $IsDeep<
        $Settings,
        $ConditionOf<Clean<Type[Key], $DecrementDepth<$Settings>>, Type[Key]>
      >;
    },
    Type extends Array<infer ElementType>
      ? Array<
        $IsDeep<
          $Settings,
          $ConditionOf<
            Clean<ElementType, $DecrementDepth<$Settings>>,
            ElementType
          >
        >
      >
      : Type & NonNil
  >
>;
