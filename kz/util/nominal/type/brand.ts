import type { $OfType, $UseId, $UseOfType } from '@kz/util/capability';
import type { Branded } from './_internal/mod.ts';

type Capabilities = $UseOfType | $UseId;
type Defaults = $OfType;

export type Brand<
  Settings extends Capabilities = Defaults,
> = Settings extends $UseOfType<infer Type>
  ? Settings extends $UseId<infer Id>
    ? Type & Branded<Id>
    : Type & Branded<PropertyKey>
  : unknown & Branded<PropertyKey>;

