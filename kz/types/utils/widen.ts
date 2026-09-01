import type { Primitive } from '@kz/types';
import type {
  $AsShallow,
  $ConditionOf,
  $DecrementDepth,
  $IsDeep,
  $UseDepth,
} from '@kz/types/capabilities';

import type { WidenShallow } from './_internal/mod.ts';

import type { Extends } from './extends.ts';

export type Widen<Type, $Settings extends $UseDepth = $AsShallow> = Extends<
  Type,
  Primitive,
  $ConditionOf<
    WidenShallow<Type>,
    Type extends Array<infer ElementType>
      ? Array<
        $IsDeep<
          $Settings,
          $ConditionOf<
            Widen<ElementType, $DecrementDepth<$Settings>>,
            ElementType
          >
        >
      >
      : Extends<
        Type,
        Record<never, never>,
        $ConditionOf<
          {
            [Key in keyof Type]: $IsDeep<
              $Settings,
              $ConditionOf<
                Widen<Type[Key], $DecrementDepth<$Settings>>,
                Type[Key]
              >
            >;
          },
          Type extends infer Self ? Self : Type
        >
      >
  >
>;
