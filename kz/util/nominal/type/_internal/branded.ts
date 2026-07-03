import type { BrandSymbolType } from './constants.ts';
import type { Nominal } from './nominal.ts';

export type Branded<Type> = Nominal<Type, typeof BrandSymbolType>