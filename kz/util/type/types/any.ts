import type { Permit } from '@kz/util/lint';

export type Any<Reason extends string = string> = Permit<'any', Reason>;