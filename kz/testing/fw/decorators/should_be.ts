import type { TestDecorator } from '../types/mod.ts';
import { Test } from './test.ts';

export const ShouldBe = (label: string | symbol, group?: string | symbol): TestDecorator => Test(`should be ${label.toString()}`, group);