import {
  TestFixtureEvent,
  type TestMetadata,
} from '../types/mod.ts';
import { callEventListeners } from './call_event_listeners.ts';
import { getMetadata } from './get_metadata.ts';
import { runTests } from './run_tests.ts';

export const runTestFixture = (
  target: Function,
  context: DecoratorContext,
): void => {
  const metadata = getMetadata(context);

  const { name, tests, label, listeners, options } = metadata;
  const fixtureName = (label || name).toString();

  if (!tests) {
    Deno.test(fixtureName, () => {
      console.warn(
        `\x1b[33mNo tests found for fixture "${fixtureName}".\nEnsure that the @Test decorator is applied to test methods.`,
      );
    });

    return;
  }

  const groupedTests = Object.values(tests).reduce((acc, test) => {
    const group = test.group || 'default';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(test);
    return acc;
  }, {"default": []} as Record<string | symbol, TestMetadata[]>);

  const beforeAllListeners = listeners?.[TestFixtureEvent.BeforeAll];
  const afterAllListeners = listeners?.[TestFixtureEvent.AfterAll];

  Deno.test(fixtureName, {
    permissions: options?.permissions,
    timeout: options?.timeout,
  }, async (t0) => {
    await callEventListeners(target, beforeAllListeners);
    for await (const [group, groupTests] of Object.entries(groupedTests)) {
      if (group ==='default') {
        await runTests(target, t0, [group, groupTests], listeners);
        // for await (const test of groupTests) {
        //   const { name, static: isStatic, label, listeners, options } = test;
        //   const testName = (label || name).toString();
        //   const cases = options?.cases || [[]];
        //   const iterations = options?.iterations || 1;
        //   const retries = options?.retries || 0;
        //   const beforeListeners = listeners?.[TestEvent.Before];
        //   const afterListeners = listeners?.[TestEvent.After];
        //   const beforeEachIterationListeners = listeners
        //     ?.[TestEvent.BeforeEachIteration];
        //   const afterEachIterationListeners = listeners
        //     ?.[TestEvent.AfterEachIteration];
        //   const beforeEachCaseListeners = listeners?.[TestEvent.BeforeEachCase];
        //   const afterEachCaseListeners = listeners?.[TestEvent.AfterEachCase];
        //   const onRetryListeners = listeners?.[TestEvent.OnRetry];
        //   let retryCount = 0;

        //   const testFunc = async () => {
        //     try {
        //       await callEventListeners(target, beforeEachListeners);

        //       for await (
        //         const iteration of Array.from(
        //           { length: iterations },
        //           (_, i) => i,
        //         )
        //       ) {
        //         iterations > 1 &&
        //           await callEventListeners(
        //             target,
        //             beforeEachIterationListeners,
        //           );
        //         const iterationData: TestIterationMetadata = {
        //           length: iterations,
        //           index: iteration,
        //           progress: (iteration + 1) / iterations,
        //           first: iteration === 0,
        //           middle: iteration > 0 && iteration < iterations - 1,
        //           last: iteration === iterations - 1,
        //           evenOdd: iteration % 2 === 0 ? 'even' : 'odd',
        //           even: iteration % 2 === 0,
        //           odd: iteration % 2 !== 0,
        //         };

        //         for await (const [caseIndex, args] of cases.entries()) {
        //           cases.length > 1 &&
        //             await callEventListeners(target, beforeEachCaseListeners);
        //           const argsData: TestArgsData = {
        //             args,
        //             metadata: {
        //               length: cases.length,
        //               index: caseIndex,
        //               progress: (caseIndex + 1) / cases.length,
        //               first: caseIndex === 0,
        //               middle: caseIndex > 0 && caseIndex < cases.length - 1,
        //               last: caseIndex === cases.length - 1,
        //               evenOdd: caseIndex % 2 === 0 ? 'even' : 'odd',
        //               even: caseIndex % 2 === 0,
        //               odd: caseIndex % 2 !== 0,
        //             },
        //           };

        //           const data: TestData = {
        //             args: argsData,
        //             iteration: iterationData,
        //           };
        //           await callEventListeners(target, beforeListeners);
        //           await (isStatic ? target : target.prototype)[name](data);
        //           await callEventListeners(target, afterListeners);
        //           cases.length > 1 &&
        //             await callEventListeners(target, afterEachCaseListeners);
        //         }
        //         iterations > 1 &&
        //           await callEventListeners(target, afterEachIterationListeners);
        //       }
        //       await callEventListeners(target, afterEachListeners);
        //     } catch (error) {
        //       if (retries > 0 && retryCount < retries) {
        //         const retry = retryCount + 1;
        //         retryCount++;
        //         const retryData: RetryTestData = {
        //           message: String(error),
        //           retry: {
        //             index: retry,
        //             length: retries,
        //             progress: retry / retries,
        //             first: retry === 1,
        //             middle: retry > 1 && retry < retries,
        //             last: retry === retries,
        //             evenOdd: retry % 2 === 0 ? 'even' : 'odd',
        //             even: retry % 2 === 0,
        //             odd: retry % 2 !== 0,
        //           },
        //         };

        //         await callRetryListeners(target, retryData, onRetryListeners);
        //         await testFunc();
        //       }
        //     }
        //   };

        //   await t0.step({
        //     name: testName,
        //     ignore: options?.ignore,
        //     fn: async () => {
        //       await callEventListeners(target, beforeEachListeners);
        //       await testFunc();
        //       await callEventListeners(target, afterEachListeners);
        //     },
        //   });
        // }
      } else {
        await t0.step(group.toString(), async (t1) => {
          await runTests(target, t1, [group, groupTests], listeners);
        });
      }
    }

    await callEventListeners(target, afterAllListeners);
  });
};
