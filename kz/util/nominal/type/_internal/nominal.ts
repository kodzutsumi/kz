import type {
  $Then,
  $Else,
} from '@kz/util/capability';
import type { If } from '@kz/util/logic';

export type Nominal<
Type extends unknown = unknown,
Ident extends PropertyKey = PropertyKey,
  AsOptional extends boolean = false,
> = If<
  AsOptional,
  & $Then<{readonly [K in Ident]?: Type}>
  & $Else<{readonly [K in Ident]: Type}>
>;
