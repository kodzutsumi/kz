import type { TestEventListener } from '../types/mod.ts';
import { callEventListener } from './call_event_listener.ts';

export const callEventListeners = async (
  target: Function,
  listeners?: TestEventListener[],
): Promise<void> => {
  if (!listeners) return;

  for await (const listener of listeners) {
    await callEventListener(target, listener);
  }
};
