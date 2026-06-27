import type {
  $AsCondition,
  $AsUnified,
  $UseCondition,
  $UseInverted,
  $UseNullSetting,
  $UseUnified,
} from '@kz/util/capability';
import type { If } from '@kz/util/logic';

type Capabilities =
  | $UseCondition
  | $UseInverted
  | $UseNullSetting
  | $UseUnified;
type Defaults = $AsCondition;

export type Extends<
  Type,
  SuperType,
  Settings extends Capabilities = Defaults,
> = Settings extends $AsUnified
  ? If<
    [Type] extends [SuperType] ? true : false,
    Exclude<Settings, $UseUnified>
  >
  : If<Type extends SuperType ? true : false, Exclude<Settings, $UseUnified>>;
