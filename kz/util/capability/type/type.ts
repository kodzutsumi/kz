import type {
  UseAsync,
  UseExcluded,
  UseInverted,
  UseOptional,
  UseReadonly,
  UseReversed,
  UseSetter,
  UseStrict,
  UseUnsafe,
} from './capabilities/mod.ts';

export type BaseCapConsumerSet =
  | UseAsync
  | UseExcluded
  | UseInverted
  | UseOptional
  | UseReadonly
  | UseReversed
  | UseSetter
  | UseStrict
  | UseUnsafe;

export type FullBaseCapConsumerSet = ToIntersect<BaseCapConsumerSet>;

export type BaseCapConsumerSetKeys = keyof BaseCapConsumerSet;

type ToIntersect<U> = (U extends unknown ? (x: U) => void : never) extends
  ((x: infer I) => void) ? I : never;
