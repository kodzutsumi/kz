import type { Register } from './register.ts';

export type SafeRegister<
  ValueType extends unknown,
  Keys extends PropertyKey = PropertyKey,
> = Partial<Register<ValueType, Keys>>;