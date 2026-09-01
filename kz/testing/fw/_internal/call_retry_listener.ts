import type { RetryEventListener, RetryTestData } from '../types/mod.ts';

export const callRetryListener = async (
  target: Function,
  data: RetryTestData,
  listener: RetryEventListener,
): Promise<void> => {
  if (typeof listener === 'function') {
    await listener.call(target, data);

    return;
  }

  for await (const [method, isStatic] of Object.entries(listener)) {
    const targetMethod = isStatic
      ? target[method as keyof typeof target]
      : (target.prototype as any)[method];

    if (typeof targetMethod !== 'function') {
      throw new Error(
        `The method "${method}" does not exist on the target class "${target.name}".`,
      );
    }

    await targetMethod.call(isStatic ? target : target.prototype, data);
  }
};
