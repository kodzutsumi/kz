export type Empty = [];

export type Single<Type extends unknown = unknown> = [Type];

export type Couple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1
> = [Type1, Type2];

export type Triple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2
> = [Type1, Type2, Type3];

export type Quadruple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2,
  Type4 extends unknown = Type3
> = [Type1, Type2, Type3, Type4];

export type Quintuple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2,
  Type4 extends unknown = Type3,
  Type5 extends unknown = Type4
> = [Type1, Type2, Type3, Type4, Type5];

export type Sextuple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2,
  Type4 extends unknown = Type3,
  Type5 extends unknown = Type4,
  Type6 extends unknown = Type5
> = [Type1, Type2, Type3, Type4, Type5, Type6];

export type Septuple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2,
  Type4 extends unknown = Type3,
  Type5 extends unknown = Type4,
  Type6 extends unknown = Type5,
  Type7 extends unknown = Type6
> = [Type1, Type2, Type3, Type4, Type5, Type6, Type7];

export type Octuple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2,
  Type4 extends unknown = Type3,
  Type5 extends unknown = Type4,
  Type6 extends unknown = Type5,
  Type7 extends unknown = Type6,
  Type8 extends unknown = Type7
> = [Type1, Type2, Type3, Type4, Type5, Type6, Type7, Type8];

export type Nonuple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2,
  Type4 extends unknown = Type3,
  Type5 extends unknown = Type4,
  Type6 extends unknown = Type5,
  Type7 extends unknown = Type6,
  Type8 extends unknown = Type7,
  Type9 extends unknown = Type8
> = [Type1, Type2, Type3, Type4, Type5, Type6, Type7, Type8, Type9];

export type Decuple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2,
  Type4 extends unknown = Type3,
  Type5 extends unknown = Type4,
  Type6 extends unknown = Type5,
  Type7 extends unknown = Type6,
  Type8 extends unknown = Type7,
  Type9 extends unknown = Type8,
  Type10 extends unknown = Type9
> = [Type1, Type2, Type3, Type4, Type5, Type6, Type7, Type8, Type9, Type10];

export type Undecuple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2,
  Type4 extends unknown = Type3,
  Type5 extends unknown = Type4,
  Type6 extends unknown = Type5,
  Type7 extends unknown = Type6,
  Type8 extends unknown = Type7,
  Type9 extends unknown = Type8,
  Type10 extends unknown = Type9,
  Type11 extends unknown = Type10
> = [Type1, Type2, Type3, Type4, Type5, Type6, Type7, Type8, Type9, Type10, Type11];

export type Duodecuple<
  Type1 extends unknown = unknown,
  Type2 extends unknown = Type1,
  Type3 extends unknown = Type2,
  Type4 extends unknown = Type3,
  Type5 extends unknown = Type4,
  Type6 extends unknown = Type5,
  Type7 extends unknown = Type6,
  Type8 extends unknown = Type7,
  Type9 extends unknown = Type8,
  Type10 extends unknown = Type9,
  Type11 extends unknown = Type10,
  Type12 extends unknown = Type11
> = [Type1, Type2, Type3, Type4, Type5, Type6, Type7, Type8, Type9, Type10, Type11, Type12];

export type Tuple<
  Type extends unknown = unknown,
  Length extends number = number
> = [...Type[]] & { length: Length };
