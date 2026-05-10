// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * Type representing the result of an exclusive OR (XOR) logical operation based on the operands.
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @internal
 */
export type XorResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = {
  'true/true': false;
  'true/false': true;
  'false/true': true;
  'false/false': false;
  'boolean/boolean': boolean;
  'boolean/true': boolean;
  'boolean/false': boolean;
  'true/boolean': boolean;
  'false/boolean': boolean;
}[`${OperandA}/${OperandB}`];
