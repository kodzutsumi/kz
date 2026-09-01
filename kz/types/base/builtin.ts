import type { Permit } from '@kz/types/lint';

import type { Primitive } from './primitive.ts';

type AnyCallable = Permit<'Function', '#i11n:permit.Function/Builtin'>;

export type Builtin =
  | Primitive
  | AnyCallable
  | Date
  | RegExp
  | Error
  | Generator
  | { readonly [Symbol.toStringTag]: string };