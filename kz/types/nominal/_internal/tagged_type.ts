import type { Nominal } from './nominal.ts';

export type TaggedType<Type extends unknown = unknown, Tag extends PropertyKey = PropertyKey> = Nominal<{[K in Tag]: Type}>;