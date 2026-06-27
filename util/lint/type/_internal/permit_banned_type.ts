import type { BannedTypes } from './banned_types.ts';

export type PermitBannedType<
  Type extends keyof BannedTypes,
  Reason extends string,
> = Reason extends string ? Reason extends '' ? never
  : BannedTypes[Type]
  : never;