export type _OperandString<Operand extends boolean> = boolean extends Operand
  ? 'boolean'
  : Operand extends true
  ? 'true'
  : Operand extends false
  ? 'false'
  : 'boolean';