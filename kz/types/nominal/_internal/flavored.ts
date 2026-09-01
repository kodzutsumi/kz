import type { Nominal } from './nominal.ts';
import type { FlavorSymbolType } from './constants.ts';

export type Flavored<Type> = Nominal<Type, typeof FlavorSymbolType, true>;