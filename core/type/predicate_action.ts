import type { $Object } from '@kz/util/object';

export type PredicateAction<
  Type extends $Object.Unknown | unknown[],
> = Type extends unknown[]
  ? (item: Type[number], index: number, array: Type) => boolean
  : (item: Type[keyof Type], key: keyof Type, object: Type) => boolean;
