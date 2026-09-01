import type { $UseCondition, $UseFinal, $UseInverted, $UseNullSetting, $UseUnsafe } from '@kz/types/capabilities';

export type $LogicCapabilities = 
  | $UseCondition
  | $UseInverted
  | $UseUnsafe
  | $UseFinal
  | $UseNullSetting;