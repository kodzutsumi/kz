import type { TestDecorator } from '../types/mod.ts';
import { getTestMetadata, setTestGroup, setTestLabel } from '../_internal/mod.ts';

export const Test = (label?: string | symbol, group?: string | symbol): TestDecorator => {
  return (_, context) => {
    if (context.kind !== 'method') {
      throw new Error(
        `@Test decorator can only be used on methods, but was used on a ${context.kind}.`,
      );
    }

    const name = context.name || _.name;

    getTestMetadata(name, context);

    if (label) {
      setTestLabel(name, label, context);
    }

    if (group) {
      setTestGroup(name, group, context);
    }
  };
};
