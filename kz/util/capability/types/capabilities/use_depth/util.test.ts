// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import { describe, it } from '@std/testing/bdd';
// import { assertType, type IsExact } from '@std/testing/types';
// import type {
//   AsDeep,
//   AsLevel,
//   AsShallow,
//   ConditionOf,
//   DecrementDepth,
//   Else,
//   IsDeep,
//   Then,
// } from '@kz/util/capability';

// const IS_TRUE = true;

// describe('UseDepth - utilities', () => {
//   describe('DecrementDepth', () => {
//     it('should decrement a 10 to 9', () => {
//       type Actual = DecrementDepth<AsLevel<10>>;
//       type Expected = AsLevel<9>;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });

//     it('should decrement a 9 to 8', () => {
//       type Actual = DecrementDepth<AsLevel<9>>;
//       type Expected = AsLevel<8>;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });

//     it('should decrement a 8 to 7', () => {
//       type Actual = DecrementDepth<AsLevel<8>>;
//       type Expected = AsLevel<7>;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });

//     it('should decrement a 7 to 6', () => {
//       type Actual = DecrementDepth<AsLevel<7>>;
//       type Expected = AsLevel<6>;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });

//     it('should decrement a 6 to 5', () => {
//       type Actual = DecrementDepth<AsLevel<6>>;
//       type Expected = AsLevel<5>;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });

//     it('should decrement a 5 to 4', () => {
//       type Actual = DecrementDepth<AsLevel<5>>;
//       type Expected = AsLevel<4>;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });

//     it('should decrement a 4 to 3', () => {
//       type Actual = DecrementDepth<AsLevel<4>>;
//       type Expected = AsLevel<3>;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });

//     it('should decrement a 3 to 2', () => {
//       type Actual = DecrementDepth<AsLevel<3>>;
//       type Expected = AsLevel<2>;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });

//     it('should decrement a 2 to AsShallow', () => {
//       type Actual = DecrementDepth<AsLevel<2>>;
//       type Expected = AsShallow;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });

//     it('should decrement AsDeep to 9', () => {
//       type Actual = DecrementDepth<AsDeep>;
//       type Expected = AsLevel<9>;
//       type Result = IsExact<Actual, Expected>;

//       assertType<Result>(IS_TRUE);
//     });
//   });

//   describe('IsDeep', () => {
//     describe('AsCondition (default condition)', () => {
//       it('should be true for AsDeep', () => {
//         type Actual = IsDeep<AsDeep>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<10>', () => {
//         type Actual = IsDeep<AsLevel<10>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<9>', () => {
//         type Actual = IsDeep<AsLevel<9>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<8>', () => {
//         type Actual = IsDeep<AsLevel<8>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<7>', () => {
//         type Actual = IsDeep<AsLevel<7>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<6>', () => {
//         type Actual = IsDeep<AsLevel<6>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<5>', () => {
//         type Actual = IsDeep<AsLevel<5>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<4>', () => {
//         type Actual = IsDeep<AsLevel<4>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<3>', () => {
//         type Actual = IsDeep<AsLevel<3>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<2>', () => {
//         type Actual = IsDeep<AsLevel<2>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be true for AsLevel<1>', () => {
//         type Actual = IsDeep<AsLevel<1>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be false for AsShallow', () => {
//         type Actual = IsDeep<AsShallow>;
//         type Expected = false;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });
//     });

//     describe('Then<ThenType>', () => {
//       it('should be ThenType for AsDeep', () => {
//         type Actual = IsDeep<AsDeep, Then<string>>;
//         type Expected = string;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be false for AsShallow', () => {
//         type Actual = IsDeep<AsShallow, Then<string>>;
//         type Expected = false;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });
//     });

//     describe('Else<ElseType>', () => {
//       it('should be true for AsDeep', () => {
//         type Actual = IsDeep<AsDeep, Else<string>>;
//         type Expected = true;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be ElseType for AsShallow', () => {
//         type Actual = IsDeep<AsShallow, Else<number>>;
//         type Expected = number;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });
//     });

//     describe('ConditionOf<ThenType, ElseType>', () => {
//       it('should be ThenType for AsDeep', () => {
//         type Actual = IsDeep<AsDeep, ConditionOf<string, number>>;
//         type Expected = string;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });

//       it('should be ElseType for AsShallow', () => {
//         type Actual = IsDeep<AsShallow, ConditionOf<string, number>>;
//         type Expected = number;
//         type Result = IsExact<Actual, Expected>;

//         assertType<Result>(IS_TRUE);
//       });
//     });
//   });
// });
