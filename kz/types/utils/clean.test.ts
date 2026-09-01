import { ShouldBe, TestFixture, TestGroup, TestNames } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';
import type { Clean } from '@kz/types/utils';
import type { $AsDeep, $DepthOf } from '@kz/types/capabilities';

const IS_TRUE = true;

type Nested = {
  string: string;
  number: number;
};

type Nested2 = {
  string: string;
  number: number;
  nested: Nested;
};
type TestData = {
  string: string;
  number: number;
  nested: Nested2;
  both: Nested | Nested2;
};

type CleanedDeep = {
  string: string;
  number: number;
  nested: {
    string: string;
    number: number;
    nested: {
      string: string;
      number: number;
    };
  };
  both: {
    string: string;
    number: number;
    nested: {
      string: string;
      number: number;
    };
  } | {
    string: string;
    number: number;
  };
};

const Shallow = TestGroup('$AsShallow')
const DepthOf = TestGroup('$DepthOf');
const Deep = TestGroup('$AsDeep');

/**
 * Hover over the results in the `assertType` of each test.
 */
@TestFixture('Clean')
class _ {
  @Shallow
  @ShouldBe('equal')
  [TestNames.name](): void {
    type Result = Clean<TestData>;
    
    // Note the `Result.both` is a union of `Nested` and `Nested2`
    assertType<IsExact<Result, TestData>>(IS_TRUE);
  }

  @DepthOf
  @ShouldBe('equal')
  [TestNames.name](): void {
    type Result = Clean<TestData, $DepthOf<1>>;

    // Note the `Result.both.nested.nested` is `Nested`
    assertType<IsExact<Result, CleanedDeep>>(IS_TRUE);
  }

  @Deep
  @ShouldBe('equal')
  [TestNames.name](): void {
    type Result = Clean<TestData, $AsDeep>;

    // Note that all properties of `Result` are recursively expanded.
    assertType<IsExact<Result, CleanedDeep>>(IS_TRUE);
  }
}