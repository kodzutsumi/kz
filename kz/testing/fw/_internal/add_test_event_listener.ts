import {
  type RetryEventListener,
  TestEvent,
  type TestEventListener,
  type TestMetadata,
} from '../types/mod.ts';
import { getTestMetadata } from './get_test_metadata.ts';

export const addTestEventListener = <Event extends TestEvent = TestEvent>(
  key: string | symbol,
  event: Event,
  handler: Event extends TestEvent.OnRetry ? RetryEventListener
    : TestEventListener,
  context: DecoratorContext,
): TestMetadata => {
  const metadata = getTestMetadata(key, context);

  metadata.listeners = metadata.listeners ?? {};
  metadata.listeners[event] = metadata.listeners[event] ?? [];

  if (event === TestEvent.OnRetry) {
    (metadata.listeners[event] as RetryEventListener[]).push(
      handler as RetryEventListener,
    );
  } else {
    (metadata.listeners[event] as TestEventListener[]).push(
      handler as TestEventListener,
    );
  }

  return metadata;
};
