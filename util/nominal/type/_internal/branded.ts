import type { $AsRequired, $OfType } from '@kz/util/capability';

import type { BrandSymbolType } from './constants.ts';
import type { NominalWrapper } from './nominal_wrapper.ts';

export type Branded<Type> = NominalWrapper<$OfType<Type> & $AsRequired, typeof BrandSymbolType>;