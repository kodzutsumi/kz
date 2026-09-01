import type { TestIterationMetadata } from './test_iteration_metadata.ts';

export type RetryTestData = {
  message: string;
  retry: TestIterationMetadata;
};
