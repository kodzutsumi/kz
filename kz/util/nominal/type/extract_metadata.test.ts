// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  ExtractMetadata,
  Tagged,
  TaggedUnion,
} from '@kz/util/nominal';

describe('ExtractMetadata', () => {
  it('should extract metadata from a tagged type', () => {
    type JsonOf<T> = Tagged<string, 'Json', T>;
    type UserString = JsonOf<{ name: string; age: number }>;
    type UserJson = ExtractMetadata<UserString, 'Json'>;

    assertType<IsExact<UserJson, { name: string; age: number }>>(true);
  });

  it('should extract metadata from a tagged union type', () => {
    type Style = TaggedUnion<{
      outline: { color: string; borderWidth: number };
      filled: { color: string; backgroundColor: string };
      link: { color: string; underline: boolean };
    }>;

    type LinkStyle = ExtractMetadata<Style, 'link'>;
    type OutlineStyle = ExtractMetadata<Style, 'outline'>;

    assertType<Has<LinkStyle, { color: string; underline: boolean }>>(true);
    assertType<Has<OutlineStyle, { color: string; borderWidth: number }>>(true);
  });
});