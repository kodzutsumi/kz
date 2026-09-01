// deno-lint-ignore ban-types
export type TestFixtureDecorator = (
  target: Function,
  context: ClassDecoratorContext,
) => void;
