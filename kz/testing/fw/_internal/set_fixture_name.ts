import type { TestFixtureMetadata } from '../types/mod.ts';
import { getMetadata } from './get_metadata.ts';

export const setFixtureName = (
  name: string | symbol,
  context: DecoratorContext,
): TestFixtureMetadata => {
  const metadata = getMetadata(context);

  metadata.name = name;

  return metadata;
};
