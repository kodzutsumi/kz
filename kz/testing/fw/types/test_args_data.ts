import type { TestIterationMetadata } from './test_iteration_metadata.ts';

export type TestArgsData<A extends unknown[] = unknown[]> = {
  args: A;
  metadata: TestIterationMetadata;
};
