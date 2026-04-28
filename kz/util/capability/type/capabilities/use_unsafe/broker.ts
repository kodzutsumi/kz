import type { UseUnsafe } from './consumer.ts';

/**
 * The unsafe broker behavior variant of the {@linkcode UseUnsafe} capability.
 *
 * Use this setting to invoke the unsafe behavior of a type that supports the {@linkcode UseUnsafe} capability consumer.
 *
 * @see {@linkcode AsSafe} for the safe (default implied) broker behavior variant of this capability.
 */
export type AsUnsafe = UseUnsafe<true>;

/**
 * The safe broker behavior variant of the {@linkcode UseUnsafe} capability.
 *
 * Use this setting to invoke the safe behavior of a type that supports the {@linkcode UseUnsafe} capability consumer.
 *
 * @see {@linkcode AsUnsafe} for the unsafe broker behavior variant of this capability.
 */
export type AsSafe = UseUnsafe<false>;
