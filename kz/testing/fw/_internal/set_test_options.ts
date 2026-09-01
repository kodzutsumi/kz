import type { TestMetadata, TestOptions } from '../types/mod.ts';
import { getTestMetadata } from './get_test_metadata.ts';

export const setTestOptions = (
  key: string | symbol,
  options: TestOptions,
  context: DecoratorContext,
): TestMetadata => {
  const metadata = getTestMetadata(key, context);

  metadata.options = metadata.options ?? {};
  metadata.options = { ...metadata.options, ...options };

  return metadata;
};
