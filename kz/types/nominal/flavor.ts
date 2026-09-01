import type { Flavored } from './_internal/mod.ts';

export type Flavor<Type, Name extends PropertyKey> = Type & Flavored<Name>;