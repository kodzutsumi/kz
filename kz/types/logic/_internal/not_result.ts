import type { AsBoolean } from '@kz/types/boolean';
import type { $AsInverted } from '@kz/types/capabilities';

export type NotResult<
  Operand extends boolean,
> = AsBoolean<Operand, $AsInverted>;