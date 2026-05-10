// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { _ToIntersect } from './_internal/mod.ts';

import type { BaseCapSet } from './types.ts';

export type PickCapSet<
  Settings extends BaseCapSet,
  CapSet extends BaseCapSet = BaseCapSet,
> = _ToIntersect<Filter<Settings, CapSet>[keyof Filter<Settings, CapSet>]>;

type Filter<
  Settings extends BaseCapSet,
  CapSet extends BaseCapSet = BaseCapSet,
> = {
  [
    Key in {
      [K in keyof Settings]: K extends keyof _ToIntersect<CapSet> ? K : never;
    }[keyof Settings]
  ]: {
    [K in Key]: Settings[Key];
  };
};
