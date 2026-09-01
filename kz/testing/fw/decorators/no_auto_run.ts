import { setFixtureOptions } from '../_internal/mod.ts';
import type { TestFixtureDecorator } from '../types/mod.ts';

export const NoAutoRun = (): TestFixtureDecorator => {
  return (_, context) => {
    if (context.kind !== 'class') {
      throw new Error(
        `@NoAutoRun decorator can only be used on classes, but was used on a ${context.kind}.`,
      );
    }

    setFixtureOptions({ noAutoRun: true }, context);
  };
};
