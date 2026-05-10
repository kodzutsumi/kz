// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export type _ToIntersect<U> =
  (U extends unknown ? (x: U) => void : never) extends ((x: infer I) => void)
    ? I
    : never;
