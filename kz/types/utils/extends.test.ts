import { ShouldBe, TestFixture, TestGroup, TestNames } from '@kz/testing/fw';
import { assertType, type IsExact } from '@std/testing/types';
import type { Extends } from '@kz/types/utils';
import type { $AsCondition, $AsDistributed, $AsForward, $AsNullSetting, $AsReversed, $AsUnified, $ConditionOf, $Else, $Then } from '@kz/types/capabilities';

const IS_TRUE = true;

type $Matrix = {
  null: $AsNullSetting;
  default: $AsDistributed & $AsCondition & $AsForward;
  reversed: $AsDistributed & $AsCondition & $AsReversed;
  then: $AsDistributed & $Then<string> & $AsForward;
  else: $AsDistributed & $Else<number> & $AsForward;
  condition: $AsDistributed & $ConditionOf<string, number> & $AsForward;
  reversedThen: $AsDistributed & $Then<string> & $AsReversed;
  reversedElse: $AsDistributed & $Else<number> & $AsReversed;
  reversedCondition: $AsDistributed & $ConditionOf<string, number> & $AsReversed;
  unifiedDefault: $AsUnified & $AsCondition & $AsForward;
  unifiedReversed: $AsUnified & $AsCondition & $AsReversed;
  unifiedThen: $AsUnified & $Then<string> & $AsForward;
  unifiedElse: $AsUnified & $Else<number> & $AsForward;
  unifiedCondition: $AsUnified & $ConditionOf<string, number> & $AsForward;
  unifiedReversedThen: $AsUnified & $Then<string> & $AsReversed;
  unifiedReversedElse: $AsUnified & $Else<number> & $AsReversed;
  unifiedReversedCondition: $AsUnified & $ConditionOf<string, number> & $AsReversed;
};
const $MatrixNames: Record<keyof $Matrix, string> = {
  null: '$AsNullSetting',
  default: '$AsDistributed & $AsCondition & $AsForward',
  reversed: '$AsDistributed & $AsCondition & $AsReversed',
  then: '$AsDistributed & $Then<string> & $AsForward',
  else: '$AsDistributed & $Else<number> & $AsForward',
  condition: '$AsDistributed & $ConditionOf<string, number> & $AsForward',
  reversedThen: '$AsDistributed & $Then<string> & $AsReversed',
  reversedElse: '$AsDistributed & $Else<number> & $AsReversed',
  reversedCondition: '$AsDistributed & $ConditionOf<string, number> & $AsReversed',
  unifiedDefault: '$AsUnified & $AsCondition & $AsForward',
  unifiedReversed: '$AsUnified & $AsCondition & $AsReversed',
  unifiedThen: '$AsUnified & $Then<string> & $AsForward',
  unifiedElse: '$AsUnified & $Else<number> & $AsForward',
  unifiedCondition: '$AsUnified & $ConditionOf<string, number> & $AsForward',
  unifiedReversedThen: '$AsUnified & $Then<string> & $AsReversed',
  unifiedReversedElse: '$AsUnified & $Else<number> & $AsReversed',
  unifiedReversedCondition: '$AsUnified & $ConditionOf<string, number> & $AsReversed',
};

type UserBasic = {
  first: string;
  last: string;
};

type UserFull = UserBasic & {
  age: number;
};

@TestFixture('Extends')
class _ {
  
}
//   it('should support non-distributive types', () => {
//     type Arrayify<T> = Extends<[T], [any], ConditionOf<T[], never>>;
//     type StdArrayify<T> = T extends any ? T[] : never;
//     type NonDistStdArrayify<T> = [T] extends [any] ? T[] : never;

//     type Extended = Arrayify<string | number>;
//     type Dist = StdArrayify<string | number>;
//     type NonDist = NonDistStdArrayify<string | number>;

//     assertType<IsExact<Dist, (string[] | number[])>>(true);
//     assertType<IsExact<NonDist, (string | number)[]>>(true);
//     assertType<IsExact<Extended, NonDist>>(true);
//   });

//   it('should allow for conditional types', () => {
//     assertType<
//       IsExact<Extends<string, string, Then<PropertyKey>>, PropertyKey>
//     >(
//       true,
//     );
//     assertType<IsExact<Extends<string, number, Then<PropertyKey>>, false>>(
//       true,
//     );
//     assertType<
//       IsExact<Extends<string, number, ConditionOf<PropertyKey, Nil>>, Nil>
//     >(true);
//   });
//   //TODO(@ebntly): Complete
// });