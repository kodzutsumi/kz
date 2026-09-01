/**
 * A reference to a test hook that exists on a test fixture.
 *
 * The key references a specific method, with a value identifying whether the hook
 * references a static (`true`) or instance (`false`) method.
 */
export type TestEventHandlerReference = {
  [key: string | symbol]: boolean;
};
