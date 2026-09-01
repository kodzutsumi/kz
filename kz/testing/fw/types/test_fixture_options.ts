import type { TestOptions } from './test_options.ts';

export type TestFixtureOptions = Omit<TestOptions, 'ignore' | 'only'> & {
  noAutoRun?: boolean;
  permissions?: Deno.PermissionOptions;
};
