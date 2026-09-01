import type { TestMetadata } from '../types/mod.ts';
import { getMetadata } from './get_metadata.ts';

export const getTestMetadata = (
  testKey: string | symbol,
  context: DecoratorContext,
): TestMetadata => {
  if (context.kind !== 'method') {
    throw new Error(
      `@Test decorator can only be used on methods, but was used on a ${context.kind}.`,
    );
  }

  const metadata = getMetadata(context);

  metadata.tests = metadata.tests ?? {};
  metadata.tests[testKey] = metadata.tests[testKey] ?? {
    name: testKey,
    static: context.static,
  };

  return metadata.tests[testKey] as TestMetadata;
};
