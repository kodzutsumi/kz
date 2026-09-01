import type { TestMetadata } from '../types/mod.ts';
import { getTestMetadata } from './get_test_metadata.ts';

export const setTestGroup = (
  key: string | symbol,
  group: string | symbol,
  context: DecoratorContext,
): TestMetadata => {
  const metadata = getTestMetadata(key, context);

  metadata.group = group;

  return metadata;
};
