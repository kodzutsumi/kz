import type { TypeException } from '@kz/util/lint';
import type { TaggedSymbolType } from './constants.ts';

export type UnionKeyOf<Type> = Type extends
  { [TaggedSymbolType]?: infer Value extends keyof Type } ? Value : TypeException<Type, '`Type` must be a tagged type or tagged union type.'>;