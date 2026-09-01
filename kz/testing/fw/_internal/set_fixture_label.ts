import type { TestFixtureMetadata } from '../types/mod.ts';
import { getMetadata } from './get_metadata.ts';

export const setFixtureLabel = (
  label: string | symbol,
  context: DecoratorContext,
): TestFixtureMetadata => {
  const metadata = getMetadata(context);

  metadata.label = label;

  return metadata;
};
