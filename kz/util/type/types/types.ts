
import type { UseOfType } from '@kz/util/capability';
import type {
  IsTypeCapSet as InternalIsTypeCapSet,
  IsTypeDefaults as InternalIsTypeDefaults,
} from './_internal/mod.ts';

export type IsTypeCapSet = InternalIsTypeCapSet | UseOfType;
export type IsTypeDefaults = InternalIsTypeDefaults;