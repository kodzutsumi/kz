import type { $AsOptional, $OfType } from '@kz/util/capability';

import type { FlavorSymbolType } from './constants.ts';
import type { NominalWrapper } from './nominal_wrapper.ts';

export type Flavored<Type> = NominalWrapper<$OfType<Type> & $AsOptional, typeof FlavorSymbolType>;