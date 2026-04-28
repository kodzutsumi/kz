import type { UseReversed } from './consumer.ts';

/**
 * The reversed broker behavior variant of the {@linkcode UseReversed} capability.
 *
 * Use this setting to invoke the reversed behavior of a type that supports the {@linkcode UseReversed} capability consumer.
 *
 * @see {@linkcode AsForward} for the forward (default implied) broker behavior variant of this capability.
 */
export type AsReversed = UseReversed<true>;

/**
 * The forward broker behavior variant of the {@linkcode UseReversed} capability.
 *
 * Use this setting to invoke the forward behavior of a type that supports the {@linkcode UseReversed} capability consumer.
 *
 * @see {@linkcode AsReversed} for the reversed broker behavior variant of this capability.
 */
export type AsForward = UseReversed<false>;
