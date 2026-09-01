import type { TestMetadata } from '../types/mod.ts';
import { getTestMetadata } from './get_test_metadata.ts';

export const setTestLabel = (
  key: string | symbol,
  label: string | symbol,
  context: DecoratorContext,
): TestMetadata => {
  const metadata = getTestMetadata(key, context);

  metadata.label = label;

  return metadata;
};
