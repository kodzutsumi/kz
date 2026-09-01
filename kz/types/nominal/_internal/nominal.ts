import type { If } from '@kz/types/logic';
import type { $ConditionOf } from '@kz/types/capabilities';

export type Nominal<
  Type extends unknown = unknown,
  Key extends PropertyKey = PropertyKey,
  IsOptional extends boolean = false,
> = If<
  IsOptional,
  $ConditionOf<
    { readonly [K in Key]?: Type },
    { readonly [K in Key]: Type }
  >
>;
