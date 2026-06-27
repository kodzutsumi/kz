import type { $, Capabilities, Defaults } from './$object_helper.ts'
export * as $ObjectHelper from './$object_helper.ts';

export type $ObjectHelper<Settings extends Capabilities = Defaults> = $<Settings>;