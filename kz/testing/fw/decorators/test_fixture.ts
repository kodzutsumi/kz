import type { TestFixtureDecorator } from '../types/mod.ts';
import {
  getMetadata,
  setFixtureLabel,
  setFixtureName,
} from '../_internal/mod.ts';
import { runTestFixture } from '../_internal/mod.ts';

export const TestFixture = (label?: string | symbol): TestFixtureDecorator => {
  return (_, context) => {
    if (context.kind !== 'class') {
      throw new Error(
        `@TestFixture decorator can only be used on classes, but was used on a ${context.kind}.`,
      );
    }

    setFixtureName(context.name || _.name, context);

    if (label) {
      setFixtureLabel(label, context);
    }

    const metadata = getMetadata(context);
    if (metadata.options?.noAutoRun) {
      return;
    }

    runTestFixture(_, context);
  };
};
