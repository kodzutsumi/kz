import type { NameGeneratorOptions } from './types/mod.ts';
export function* nameGenerator(options: NameGeneratorOptions = {}): Generator<string, string, string> {
  const {
    prefix = 'test',
    startingIndex = 0,
    delimiter = '',
  } = options;
  
  let index = startingIndex;

  while (true) {
    const newName = `${prefix}${delimiter}${index}`;
    index++;

    const reset = yield newName;
    if (reset !== undefined) {
      index = parseInt(reset, 10);
    }
  }
}