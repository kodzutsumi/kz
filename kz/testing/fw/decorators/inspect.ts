import type { TestFixtureDecorator } from '../types/mod.ts';

export const Inspect = (testSuite: Function): TestFixtureDecorator => {
  // make target unrunable
  return (target: Function, context: ClassDecoratorContext) => {
    testSuite.prototype.inspectedMetadata = context;
  };
};