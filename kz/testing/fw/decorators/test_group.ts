import type { TestDecorator } from '../types/mod.ts';
import { setTestGroup } from '../_internal/mod.ts';

export const TestGroup = (group: string | symbol): TestDecorator => {
  return (_, context) => {
    if (context.kind !== 'method') {
      throw new Error(
        `@TestGroup decorator can only be used on methods, but was used on a ${context.kind}.`,
      );
    }

    const name = context.name || _.name;

    setTestGroup(name, group, context);
  };
};
