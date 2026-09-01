import type {
  TestEventListener,
  TestFixtureEvent,
  TestFixtureMetadata,
} from '../types/mod.ts';
import { getMetadata } from './get_metadata.ts';

export const addFixtureEventListener = (
  event: TestFixtureEvent,
  handler: TestEventListener,
  context: DecoratorContext,
): TestFixtureMetadata => {
  const metadata = getMetadata(context);

  metadata.listeners = metadata.listeners ?? {};
  metadata.listeners[event] = metadata.listeners[event] ?? [];
  metadata.listeners[event].push(handler);

  return metadata;
};
