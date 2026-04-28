import type { UseReadonly } from './consumer.ts';

/**
 * The readonly broker behavior variant of the {@linkcode UseReadonly} capability.
 *
 * Use this setting to invoke the readonly behavior of a type that supports the {@linkcode UseReadonly} capability consumer.
 *
 * @see {@linkcode AsWritable} for the writable (default implied) broker behavior variant of this capability.
 */
export type AsReadonly = UseReadonly<true>;

/**
 * The writable broker behavior variant of the {@linkcode UseReadonly} capability.
 *
 * Use this setting to invoke the writable behavior of a type that supports the {@linkcode UseReadonly} capability consumer.
 *
 * @see {@linkcode AsReadonly} for the readonly broker behavior variant of this capability.
 */
export type AsWritable = UseReadonly<false>;
