import type { RetryTestData } from './retry_test_data.ts';

/**
 * A hook function that is executed before a retry.
 */
export type RetryEventHandler = (data: RetryTestData) => void | Promise<void>;
