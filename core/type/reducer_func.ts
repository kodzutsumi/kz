import type { $Object } from '@kz/util/object';

export type ReducerFunc<
  Accumulator,
  Type extends $Object.Unknown | unknown[],
> = Type extends unknown[]
  ? (
    accumulator: Accumulator,
    element: Type[number],
    index: number,
    array: Type,
  ) => Accumulator
  : (
    accumulator: Accumulator,
    element: Type[keyof Type],
    key: keyof Type,
    object: Type,
  ) => Accumulator;
