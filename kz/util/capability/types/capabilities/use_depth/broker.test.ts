// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { AsDeep, AsLevel, AsShallow, UseDepth } from '@kz/util/capability';

const IS_TRUE = true;

describe('UseDepth - broker', () => {
  describe('AsDeep', () => {
    it('should be UseDepth<true>', () => {
      type Actual = AsDeep;
      type Expected = UseDepth<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsDeep;
      type Expected = UseDepth<true>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsShallow', () => {
    it('should be UseDepth<false>', () => {
      type Actual = AsShallow;
      type Expected = UseDepth<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsShallow;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('AsLevel', () => {
    it('should be UseDepth<1>', () => {
      type Actual = AsLevel<1>;
      type Expected = UseDepth<1>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<1>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be UseDepth<2>', () => {
      type Actual = AsLevel<2>;
      type Expected = UseDepth<2>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<2>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be UseDepth<3>', () => {
      type Actual = AsLevel<3>;
      type Expected = UseDepth<3>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<3>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be UseDepth<4>', () => {
      type Actual = AsLevel<4>;
      type Expected = UseDepth<4>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<4>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be UseDepth<5>', () => {
      type Actual = AsLevel<5>;
      type Expected = UseDepth<5>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<5>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be UseDepth<6>', () => {
      type Actual = AsLevel<6>;
      type Expected = UseDepth<6>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<6>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be UseDepth<7>', () => {
      type Actual = AsLevel<7>;
      type Expected = UseDepth<7>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<7>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be UseDepth<8>', () => {
      type Actual = AsLevel<8>;
      type Expected = UseDepth<8>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<8>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be UseDepth<9>', () => {
      type Actual = AsLevel<9>;
      type Expected = UseDepth<9>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<9>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be UseDepth<10>', () => {
      type Actual = AsLevel<10>;
      type Expected = UseDepth<10>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to UseDepth', () => {
      type Actual = AsLevel<10>;
      type Expected = UseDepth;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
