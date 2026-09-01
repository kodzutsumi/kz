/**
 * A hook function that is executed before or after a test or test fixture.
 * It can be synchronous or return a Promise for asynchronous operations.
 */
export type TestEventHandler = () => void | Promise<void>;
