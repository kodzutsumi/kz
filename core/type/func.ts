import type { $Object } from '@kz/util/object';
import type { Couple, Empty, Single } from '@kz/util/list';

export type Func<
  Args extends unknown[],
  Returned = void,
  Options extends $Object.Unknown = $Object.Empty,
> = $Object.Empty extends Options ? Args extends Empty ? EmptyFunc<Returned>
  : Args extends Single<infer Arg1> ? SingleFunc<Arg1, Returned>
  : Args extends Couple<infer Arg1, infer Arg2>
    ? CoupleFunc<Arg1, Arg2, Returned>
  : never
  : Args extends Empty ? EmptyOptionFunc<Options, Returned>
  : Args extends Single<infer Arg1> ? SingleOptionFunc<Arg1, Options, Returned>
  : Args extends Couple<infer Arg1, infer Arg2>
    ? CoupleOptionFunc<Arg1, Arg2, Options, Returned>
  : never;

type EmptyFunc<Returned> = () => Returned;

type SingleFunc<Type, Returned> = (arg1: Type) => Returned;

type CoupleFunc<Type1, Type2, Returned> = (
  arg1: Type1,
  arg2: Type2,
) => Returned;

type EmptyOptionFunc<Options, Returned> = (options: Options) => Returned;

type SingleOptionFunc<Type, Options, Returned> = (
  arg1: Type,
  options: Options,
) => Returned;

type CoupleOptionFunc<Type1, Type2, Options, Returned> = (
  arg1: Type1,
  arg2: Type2,
  options: Options,
) => Returned;
