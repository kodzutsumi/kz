import type { UseInverted } from './consumer.ts';

/**
 * The inverted broker behavior variant of the {@linkcode UseInverted}
 * capability.
 *
 * Use this setting to invoke the inverted behavior of a type that supports the
 * {@linkcode UseInverted} capability consumer.
 *
 * @see {@linkcode AsInitial} for the initial (default implied) broker behavior variant of this capability.
 */
export type AsInverted = UseInverted<true>;

/**
 * The initial broker behavior variant of the {@linkcode UseInverted}
 * capability.
 *
 * Use this setting to invoke the initial (non-inverted) behavior of a type that
 * supports the {@linkcode UseInverted} capability consumer.
 *
 * @see {@linkcode AsInverted} for the inverted broker behavior variant of this capability.
 */
export type AsInitial = UseInverted<false>;
