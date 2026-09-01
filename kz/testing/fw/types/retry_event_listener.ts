import type { RetryEventHandler } from './retry_event_handler.ts';
import type { TestEventHandlerReference } from './test_event_handler_reference.ts';

export type RetryEventListener = RetryEventHandler | TestEventHandlerReference;
