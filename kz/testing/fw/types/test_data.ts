import type { TestArgsData } from './test_args_data.ts';
import type { TestIterationMetadata } from './test_iteration_metadata.ts';

export type TestData<A extends unknown[] = unknown[]> = {
  args: TestArgsData<A>;
  iteration: TestIterationMetadata;
};
