/**
 * Type representing the result of an implication logical operation based on the operands.
 *
 * @template OperandA - The first boolean operand (antecedent).
 * @template OperandB - The second boolean operand (consequent).
 * @internal
 */
export type ImpResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = {
  'true/true': true;
  'true/false': false;
  'false/true': true;
  'false/false': true;
  'boolean/boolean': true;
  'boolean/true': true;
  'boolean/false': boolean;
  'true/boolean': boolean;
  'false/boolean': true;
}[`${OperandA}/${OperandB}`];
