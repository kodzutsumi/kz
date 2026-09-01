import type { RetryEventListener, RetryTestData } from '../types/mod.ts';
import { callRetryListener } from './call_retry_listener.ts';

export const callRetryListeners = async (
  target: Function,
  data: RetryTestData,
  listeners?: RetryEventListener[],
): Promise<void> => {
  if (!listeners) return;

  for await (const listener of listeners) {
    await callRetryListener(target, data, listener);
  }
};
