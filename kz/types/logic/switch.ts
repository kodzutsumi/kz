import type { Extends } from '@kz/types/utils';
import type { $ConditionOf } from '@kz/types/capabilities';

import type { $LogicCapabilities } from './$logic_capabilities.ts';
import type { $LogicDefaults } from './$logic_defaults.ts';

export type Case<Type extends unknown = unknown, Result extends unknown = unknown> = [Type, Result];
export type Switch<
  Type,
  Cases extends Case[],
  $Settings extends $LogicCapabilities = $LogicDefaults
> = Cases extends [infer FirstCase, ...infer RestCases extends Case[]]
  ? FirstCase extends Case<infer CaseType, infer CaseResult>
    ? Extends<Type, CaseType, $Settings & $ConditionOf<CaseResult, Switch<Type, RestCases>>>
    : never
  : never;
