import type { Branded } from './_internal/mod.ts';

export type Brand<Type, Name extends PropertyKey> = Type & Branded<Name>;