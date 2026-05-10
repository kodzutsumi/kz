// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * Type representing the result of a logical OR operation based on the operands.
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @internal
 */
export type OrResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = {
  'true/true': true;
  'true/false': true;
  'false/true': true;
  'false/false': false;
  'boolean/boolean': true;
  'boolean/true': true;
  'boolean/false': true;
  'true/boolean': true;
  'false/boolean': boolean;
}[`${OperandA}/${OperandB}`];
