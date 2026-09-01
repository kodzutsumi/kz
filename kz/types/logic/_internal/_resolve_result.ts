export type _ResolveResult<
  Operand extends boolean,
  $ThenType,
  $ElseType,
> = Operand extends true ? $ThenType
  : Operand extends false ? $ElseType
  : $ThenType | $ElseType;