import type { $AsNullSetting } from './$as_null_setting.ts';

// TODO(@ebntly): Update to use $UseCondition once created.
export type $IsNullSetting<$Settings> = [$Settings, $AsNullSetting] extends
  [$AsNullSetting, $Settings] ? true
  : false;
