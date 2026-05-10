// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * Type representing the result of a converse logical operation based on the operands.
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @internal
 */
export type ConResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = {
  'true/true': true;
  'true/false': true;
  'false/true': false;
  'false/false': true;
  'boolean/boolean': true;
  'boolean/true': boolean;
  'boolean/false': true;
  'true/boolean': true;
  'false/boolean': boolean;
}[`${OperandA}/${OperandB}`];
