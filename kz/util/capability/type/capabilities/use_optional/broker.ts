import type { UseOptional } from './consumer.ts';

/**
 * The optional broker behavior variant of the {@linkcode UseOptional} capability.
 *
 * Use this setting to invoke the optional behavior of a type that supports the {@linkcode UseOptional} capability consumer.
 *
 * @see {@linkcode AsRequired} for the required (default implied) broker behavior variant of this capability.
 */
export type AsOptional = UseOptional<true>;

/**
 * The required broker behavior variant of the {@linkcode UseOptional} capability.
 *
 * Use this setting to invoke the required behavior of a type that supports the {@linkcode UseOptional} capability consumer.
 *
 * @see {@linkcode AsOptional} for the optional broker behavior variant of this capability.
 */
export type AsRequired = UseOptional<false>;
