import type { TestEventListener } from '../types/mod.ts';

export const callEventListener = async (
  target: Function,
  listener: TestEventListener,
): Promise<void> => {
  if (typeof listener === 'function') {
    listener.call(target);

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

    await targetMethod.call(isStatic ? target : target.prototype);
  }
};
