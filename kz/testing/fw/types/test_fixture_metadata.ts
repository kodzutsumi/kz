import type { TestFixtureEvent } from './test_fixture_event.ts';
import type { TestEventListener } from './test_event_listener.ts';
import type { TestMetadata } from './test_metadata.ts';
import type { TestFixtureOptions } from './test_fixture_options.ts';

export type TestFixtureMetadata = {
  name: string | symbol;
  label?: string | symbol;
  options?: TestFixtureOptions;
  listeners?: {
    [TestFixtureEvent.BeforeAll]?: TestEventListener[];
    [TestFixtureEvent.AfterAll]?: TestEventListener[];
    [TestFixtureEvent.BeforeEach]?: TestEventListener[];
    [TestFixtureEvent.AfterEach]?: TestEventListener[];
  };
  tests: {
    [key: string | symbol]: TestMetadata;
  };
};
