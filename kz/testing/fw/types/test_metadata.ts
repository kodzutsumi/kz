import type { RetryEventHandler } from './retry_event_handler.ts';
import type { TestEvent } from './test_event.ts';
import type { TestEventListener } from './test_event_listener.ts';
import type { TestOptions } from './test_options.ts';

export type TestMetadata<Args extends unknown[] = unknown[]> = {
  name: string | symbol;
  static: boolean;
  label?: string | symbol;
  group?: string | symbol;
  options?: TestOptions & {
    cases?: Args[];
    iterations?: number;
  };
  listeners?: {
    [TestEvent.After]?: TestEventListener[];
    [TestEvent.Before]?: TestEventListener[];
    [TestEvent.AfterEachIteration]?: TestEventListener[];
    [TestEvent.BeforeEachIteration]?: TestEventListener[];
    [TestEvent.AfterEachCase]?: TestEventListener[];
    [TestEvent.BeforeEachCase]?: TestEventListener[];
    [TestEvent.OnRetry]?: RetryEventHandler[];
    [TestEvent.OnTimeout]?: TestEventListener[];
  };
};
