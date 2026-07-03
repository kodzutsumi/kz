// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * Capabilities are a collection of type indicate the capabilities of a type.
 * They include a collection of capability settings that provide input to these
 * capabilities for use in creating highly dynamic types.
 * ## Terminology
 * These are the terms used within the types themselves, and in the
 * documentation, to refer to specific concepts related to capabilities.
 * - __Capability consumer__ - A type representing a capability.
 *   - __Capability flag consumer__ - A capability consumer supporting `boolean` operations (`true` and `false`). It is recommended that a `boolean` input setting is considered `false`, and that a `boolean` output is `true`.
 *   - __Capability option consumer__ - A capability consumer that supports fixed, non-boolean inputs.
 *   - __Capability constrained consumer__ - A capability consumer that accepts a non-fixed, but constrained input.
 *   - __Capability open consumer__ - A capability consumer that accepts any input.
 * - __Capability input__ - The input satisfying a capability consumer creating a capability broker.
 * - __Capability consumer set__ - A collection of capability consumers representing all of the capabilities that a specific, or set of types, supports.
 * - __Capability broker__ - A type configuration that satisfies a specific capability consumer.
 * - __Capability broker set__ - A collection of type configuration that satisfies a capability consumer set.
 * ### Slang
 * These are terms used within the types themselves, in an effort to reduce
 * the wordiness of the type definitions, and to make them easier to read.
 * These are not official terms, but they are used consistently across the
 * types.
 * - __Capability__/__Cap__ - Can refer to any capability consumer.
 * - __Capabilities__/__CapSet__ - A capability consumer set.
 * - __Defaults__ - The default capability settings of a type. This is the effective capability settings of a type when no capability settings are provided.
 * - __Setting__ - Can refer to any capability broker.
 * - __Settings__ - A capability broker set.
 * ```ts
 * const $UseCollapsedKeyString = 'testing:use_collapsed';
 *
 * type $UseCollapsed<AsCollapsed extends boolean = boolean> = {
 *   [$UseCollapsedKeyString]: AsCollapsed;
 * };
 * ```
 * > An example of a capability consumer, specifically a capability flag consumer.
 * ```ts
 * const $UsePositionKeyString = 'testing:use_position';
 *
 * type $Positions = 'first' | 'last' | 'middle' | 'outside';
 *
 * type $UsePosition<Position extends $Positions = $Positions > = {
 *   [$UsePositionKeyString]: Position;
 * };
 * ```
 * > An example of an capability option consumer.
 * ```ts
 * const $UseKeyKeyString = 'testing:use_key';
 *
 * type $UseKey<KeyName extends PropertyKey = PropertyKey > = {
 *   [$UseKeyKeyString]: KeyName;
 * };
 * ```
 * > An example of a capability constrained consumer.
 * ```ts
 * const $UseTypeKeyString = 'testing:use_type';
 *
 * type $UseType<Type extends unknown = unknown> = {
 * 	[$UseTypeKeyString]: Type;
 * };
 * ```
 * > An example of an capability open consumer.
 * > Notice that is all of the capabilities, the default input type is the input type accepted by the capability.
 * ```ts
 * import type {
 *   $UseStrict,
 *   $UseUnsafe,
 *   $UseInverted,
 * } from '@kz/util/capability';
 *
 * type CustomCapSet = $UseStrict | $UseUnsafe | $UseInverted;
 * ```
 * > An example of a capability consumer set. It is recommended that a capability consumer set always be a ___union___ of capability consumers.
 * ```ts
 * const $UsePositionKeyString = 'testing:use_position';
 *
 * type $Positions = 'first' | 'last' | 'middle' | 'outside';
 *
 * type $UsePosition<Position extends $Positions = $Positions > = {
 *   [$UsePositionKeyString]: Position;
 * };
 *
 * type AsFirst = $UsePosition<'first'>;
 * ```
 * > An example of a capability broker that would satisfy the `$UsePosition` capability option consumer. The capability input of the `$UsePosition` capability option consumer would be `'first'`.
 * ```ts
 * import type {
 *   $AsStrict,
 *   $AsUnsafe,
 *   $AsInitial,
 * } from '@kz/util/capability';
 *
 * type MyBrokerSet = $AsStrict & $AsUnsafe & $AsInitial;
 * ```
 * > An example of a capability broker set that would satisfy the `CustomCapSet` capability consumer set. It is recommended that a capability broker set always be an ___intersection___ of capability brokers.
 *
 * @module
 */

export * from './types/mod.ts';
