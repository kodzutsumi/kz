export type Register<
  ValueType extends unknown = unknown,
  Keys extends PropertyKey = PropertyKey,
> = Record<Keys, ValueType>;
