import type { TestEventHandler } from './test_event_handler.ts';
import type { TestEventHandlerReference } from './test_event_handler_reference.ts';

export type TestEventListener = TestEventHandler | TestEventHandlerReference;
