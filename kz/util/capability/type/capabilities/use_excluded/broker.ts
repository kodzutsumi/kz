import type { UseExcluded } from './consumer.ts';

/**
 * The exclusive broker behavior variant of the {@linkcode UseExcluded} capability.
 *
 * Use this setting to invoke the exclusive behavior of a type that supports the {@linkcode UseExcluded} capability consumer.
 *
 * @see {@linkcode AsIncluded} for the inclusive (default implied) broker behavior variant of this capability.
 */
export type AsExcluded = UseExcluded<true>;

/**
 * The inclusive broker behavior variant of the {@linkcode UseExcluded} capability.
 *
 * Use this setting to invoke the inclusive behavior of a type that supports the {@linkcode UseExcluded} capability consumer.
 *
 * @see {@linkcode AsExcluded} for the exclusive broker behavior variant of this capability.
 */
export type AsIncluded = UseExcluded<false>;
