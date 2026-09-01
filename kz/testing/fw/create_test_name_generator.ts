import type { NameGeneratorOptions } from './types/mod.ts';

import { nameGenerator } from './name_generator.ts';

export function createTestNameGenerator(options: NameGeneratorOptions = {}): { name: string } {
  const generator = nameGenerator(options);

  return {
    get name() {
      return generator.next().value;
    }
  }
}