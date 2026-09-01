import type { $UseElse } from '../$use_else/mod.ts';
import type { $AsLoose, $AsStrict, $UseStrict } from '../$use_strict/mod.ts';
import type { $UseNullSetting } from '../$use_null_setting/mod.ts';
import type { $UseThen } from '../$use_then/mod.ts';

/**
 * The capabilities for the {@linkcode $UseCondition} type.
 */
type $Capabilities = $UseStrict | $UseNullSetting;

/**
 * The default capability settings for the {@linkcode $UseCondition} type.
 */
type $Defaults = $AsLoose;

/**
 * A capability consumer supporting the definition of conditional behavior.
 *
 * ## Capabilities
 *
 * | Capability | Required? | Description |
 * |---|---|---|
 * | {@linkcode $UseStrict} | No | Indicates whether strictness is enabled. |
 *
 * ### Defaults
 *
 * | Capability | Default | Inferred? |
 * |---|---|---|
 * | {@linkcode $UseStrict} | {@linkcode $AsLoose} | Yes |
 *
 * > [!NOTE]
 * > ***Inferred?*** indicates the setting default is inferred if not present in the capability settings.
 *
 * ### Behavior matrix
 * | {@linkcode $UseStrict} | Description |
 * |---|---|
 * | {@linkcode $AsStrict} | The conditional consumer will require both the "then" and "else" types to be defined. |
 * | {@linkcode $AsLoose} | The conditional consumer will allow either the "then" or "else" type to be defined. |
 *
 * @template $Settings - The capability settings object that defines the behavior of the conditional consumer.
 */
export type $UseCondition<
  $Settings extends $Capabilities = $Defaults,
> = $Settings extends $AsStrict ? $UseThen & $UseElse
  : $UseThen | $UseElse;
