// deno-lint-ignore ban-types
export type TestDecorator = (
  target: Function,
  context: ClassMethodDecoratorContext,
) => void;
