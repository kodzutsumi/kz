import type { BannedTypes, PermitBannedType } from './_internal/mod.ts';

export type Permit<
  Type extends keyof BannedTypes,
  Reason extends string,
> = PermitBannedType<Type, Reason>;