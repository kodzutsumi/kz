import type { TaggedSymbolType } from './constants.ts';

export type UnionKeyOf<Type> = Type extends
  { [TaggedSymbolType]?: infer Value extends keyof Type } ? Value : never;