// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * The capability setting key for the {@linkcode UseDepth} capability.
 */
export declare const UseDepthKeyString = 'kz.i11n:use_depth';

/**
 * The type of the capability setting key for the {@linkcode UseDepth} capability.
 */
export type UseDepthKey = typeof UseDepthKeyString;

/**
 * The numeric levels of depth for the {@linkcode UseDepth} capability.
 */
export type UseDepthLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * A gauge for the numeric levels of depth for the {@linkcode UseDepth} capability, where the index corresponds to the depth level and the value is the next depth level or `false` if the maximum depth has been reached.
 * @internal
 */
export type UseDepthLevelGauge = [
  null,
  false,
  false,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];
