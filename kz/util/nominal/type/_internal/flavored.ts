import type { FlavorSymbolType } from './constants.ts';
import type { Nominal } from './nominal.ts';

export type Flavored<Type> = Nominal<Type, typeof FlavorSymbolType, true>;