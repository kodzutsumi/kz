
import type { UseOfType } from '@kz/util/capability';
import type {
  IsTypeCapabilities as InternalIsTypeCapabilities,
  IsTypeDefaults as InternalIsTypeDefaults,
} from './_internal/mod.ts';

export type IsTypeCapabilities = InternalIsTypeCapabilities | UseOfType;
export type IsTypeDefaults = InternalIsTypeDefaults;