import type { Extends } from '@kz/types';
import type { $ConditionOf } from '@kz/types/capabilities';

export type Merge<Type> = Extends<
  Type,
  Type,
  $ConditionOf<{ [K in keyof Type]: Type[K] }, never>
>;