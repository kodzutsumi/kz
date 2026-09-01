import type { $ConditionOf } from '@kz/types/capabilities';

import type { Extends } from '../extends.ts';

export type WidenShallow<Type> = Extends<
  Type,
  string,
  $ConditionOf<
    string,
    Extends<
      Type,
      bigint,
      $ConditionOf<
        bigint,
        Extends<
          Type,
          symbol,
          $ConditionOf<
            symbol,
            Extends<
              Type,
              number,
              $ConditionOf<
                number,
                Extends<
                  Type,
                  boolean,
                  $ConditionOf<
                    boolean,
                    Type extends Array<infer ElementType> ? Array<ElementType>
                      : Extends<
                        Type,
                        Record<never, never>,
                        $ConditionOf<
                          { [Key in keyof Type]: Type[Key] },
                          Extends<
                            Type,
                            null,
                            $ConditionOf<
                              null,
                              Extends<
                                Type,
                                undefined,
                                $ConditionOf<undefined, Type>
                              >
                            >
                          >
                        >
                      >
                  >
                >
              >
            >
          >
        >
      >
    >
  >
>;
