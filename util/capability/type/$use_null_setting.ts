import type { EmptyRegister } from '@kz/util/object';

/**
 * A capability specifying support for no capability settings.
 */
export type $UseNullSetting = EmptyRegister;

/**
 * A setting indicating that no capability settings are provided.
 * 
 * Use this setting to indicate that no capability settings are provided.
 */
export type $AsNullSetting = $UseNullSetting;