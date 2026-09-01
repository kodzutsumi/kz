import { RetryTestData, TestArgsData, TestData, TestEvent, TestFixtureEvent, TestIterationMetadata, type TestEventListener, type TestMetadata } from '../types/mod.ts';
import { callEventListeners } from './call_event_listeners.ts';
import { callRetryListeners } from './call_retry_listeners.ts';

export const runTests = async (
  target: Function,
  t: Deno.TestContext,
  [group, groupTests]: [string | symbol, TestMetadata[]],
  fixtureListeners?: {
    beforeAll?: TestEventListener[];
    afterAll?: TestEventListener[];
    beforeEach?: TestEventListener[];
    afterEach?: TestEventListener[];
  }
): Promise<void> => {

  const beforeEachFixtureListeners = fixtureListeners?.[TestFixtureEvent.BeforeEach];
  const afterEachFixtureListeners = fixtureListeners?.[TestFixtureEvent.AfterEach];
          for await (const test of groupTests) {
            const { name, static: isStatic, label, listeners, options } = test;
            const testName = (label || name).toString();
            const cases = options?.cases || [[]];
            const iterations = options?.iterations || 1;
            const retries = options?.retries || 0;
            const beforeListeners = listeners?.[TestEvent.Before];
            const afterListeners = listeners?.[TestEvent.After];
            const beforeEachIterationListeners = listeners
              ?.[TestEvent.BeforeEachIteration];
            const afterEachIterationListeners = listeners
              ?.[TestEvent.AfterEachIteration];
            const beforeEachCaseListeners = listeners?.[TestEvent.BeforeEachCase];
            const afterEachCaseListeners = listeners?.[TestEvent.AfterEachCase];
            const onRetryListeners = listeners?.[TestEvent.OnRetry];
            let retryCount = 0;
  
            const testFunc = async () => {
              try {
                await callEventListeners(target, beforeListeners);
  
                for await (
                  const iteration of Array.from(
                    { length: iterations },
                    (_, i) => i,
                  )
                ) {
                  iterations > 1 &&
                    await callEventListeners(
                      target,
                      beforeEachIterationListeners,
                    );
                  const iterationData: TestIterationMetadata = {
                    length: iterations,
                    index: iteration,
                    progress: (iteration + 1) / iterations,
                    first: iteration === 0,
                    middle: iteration > 0 && iteration < iterations - 1,
                    last: iteration === iterations - 1,
                    evenOdd: iteration % 2 === 0 ? 'even' : 'odd',
                    even: iteration % 2 === 0,
                    odd: iteration % 2 !== 0,
                  };
  
                  for await (const [caseIndex, args] of cases.entries()) {
                    cases.length > 1 &&
                      await callEventListeners(target, beforeEachCaseListeners);
                    const argsData: TestArgsData = {
                      args,
                      metadata: {
                        length: cases.length,
                        index: caseIndex,
                        progress: (caseIndex + 1) / cases.length,
                        first: caseIndex === 0,
                        middle: caseIndex > 0 && caseIndex < cases.length - 1,
                        last: caseIndex === cases.length - 1,
                        evenOdd: caseIndex % 2 === 0 ? 'even' : 'odd',
                        even: caseIndex % 2 === 0,
                        odd: caseIndex % 2 !== 0,
                      },
                    };
  
                    const data: TestData = {
                      args: argsData,
                      iteration: iterationData,
                    };
                    await callEventListeners(target, beforeListeners);
                    await (isStatic ? target : target.prototype)[name](data);
                    await callEventListeners(target, afterListeners);
                    cases.length > 1 &&
                      await callEventListeners(target, afterEachCaseListeners);
                  }
                  iterations > 1 &&
                    await callEventListeners(target, afterEachIterationListeners);
                }
                await callEventListeners(target, afterListeners);
              } catch (error) {
                if (retries > 0 && retryCount < retries) {
                  const retry = retryCount + 1;
                  retryCount++;
                  const retryData: RetryTestData = {
                    message: String(error),
                    retry: {
                      index: retry,
                      length: retries,
                      progress: retry / retries,
                      first: retry === 1,
                      middle: retry > 1 && retry < retries,
                      last: retry === retries,
                      evenOdd: retry % 2 === 0 ? 'even' : 'odd',
                      even: retry % 2 === 0,
                      odd: retry % 2 !== 0,
                    },
                  };
  
                  await callRetryListeners(target, retryData, onRetryListeners);
                  await testFunc();
                }
              }
            };
  
            await t.step({
              name: testName,
              ignore: options?.ignore,
              fn: async () => {
                await callEventListeners(target, beforeEachFixtureListeners);
                await testFunc();
                await callEventListeners(target, afterEachFixtureListeners);
              },
            });
          }
}