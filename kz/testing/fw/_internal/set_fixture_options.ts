import type { TestFixtureMetadata, TestFixtureOptions } from '../types/mod.ts';
import { getMetadata } from './get_metadata.ts';

export const setFixtureOptions = (
  options: TestFixtureOptions,
  context: DecoratorContext,
): TestFixtureMetadata => {
  const metadata = getMetadata(context);

  metadata.options = metadata.options ?? {};
  metadata.options = { ...metadata.options, ...options };

  return metadata;
};
