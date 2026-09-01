import type { TestFixtureMetadata } from '../types/mod.ts';
import { TestSuiteSymbol } from '../constants.ts';

export const getMetadata = (
  { metadata }: DecoratorContext,
): TestFixtureMetadata => {
  metadata[TestSuiteSymbol] = metadata[TestSuiteSymbol] ?? {};

  return metadata[TestSuiteSymbol] as TestFixtureMetadata;
};
